import OpenAI from 'openai';
import React, { useState } from 'react';


const Gamepage = () => {

  const groqClient = new OpenAI({
    apiKey: import.meta.env.VITE_GROQ_API_KEY,
    baseURL: "https://api.groq.com/openai/v1",
    dangerouslyAllowBrowser: true
  });


  const [systemPrompt, setSystemPrompt] = useState(`
  Você é o "Liam", um professor de inglês nativo, paciente, amigável e focado em ensinar através da conversação prática. 
  Sua missão é ajudar o usuário a praticar inglês de forma natural, simulando situações do dia a dia.

  Siga rigorosamente as seguintes regras de comportamento:
  1. IDIOMA DAS RESPOSTAS: Responda SEMPRE em INGLÊS. No entanto, se o usuário cometer um erro grave ou demonstrar muita dificuldade, adicione uma breve explicação ou tradução em PORTUGUÊS entre parênteses () no final da mensagem.
  2. ADAPTAÇÃO DE NÍVEL: Identifique o nível do usuário pelas mensagens dele. Use vocabulário simples e frases curtas para iniciantes, e avance o vocabulário se notar que ele é avançado.
  3. CORREÇÃO GENTIL: Nunca interrompa o fluxo da conversa apenas para corrigir. Se o usuário errar a gramática, responda normalmente em inglês continuando o assunto, mas no final da sua mensagem coloque a correção de forma gentil: "💡 Dica: Em vez de '${'{user_error}'}', o mais natural seria '${'{correct_way}'}'."
  4. TAMANHO DAS MENSAGENS: Mantenha suas respostas curtas (máximo 3 frases). Faça sempre UMA pergunta no final para passar a vez de falar para o usuário.
  5. DINÂMICA INICIAL: Se o usuário apenas disser "Oi" ou começar o chat, sugira um tópico simples para conversar (ex: hobbies, comida favorita, rotina, viagem) ou pergunte como foi o dia dele.
  `);

  const [sendText, setSendText] = useState("First text");

  const handleClick = (phrase) => {
    setSendText(phrase);
    const utterance = new SpeechSynthesisUtterance(phrase);

    utterance.lang = "en-US";
    utterance.rate = 0.6;
    utterance.pitch = 0.6;
    utterance.volume = 1.0;

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hi, I am Liam'}
  ]);
  const [input, setInput] = useState('');
  const [loading, setloading] = useState(false);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;
    
    const userMessage = { role: 'user', content: input};
    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setInput('');
    setloading(true);


    try {
      const response = await groqClient.chat.completions.create({
        model: 'llama-3.3-70b-versatile',
        
        messages: [{role: 'system', content: systemPrompt} ,...updatedMessages.map(msg => ({ role: msg.role, content: msg.content}))],
      });

      const botmessage = {
        role: 'assistant',
        content: response.choices[0].message.content
      }

      setMessages([...updatedMessages, botmessage]);
      handleClick(botmessage.content)
    } catch (error) {
      console.error('Happended an error', error);
      setMessages([...updatedMessages, { role: 'assistant', content: 'Sorry, error when call groq API' }]);
    } finally {
      setloading(false);
    }
    

  }

  return (
    <div className="w-full min-h-screen box-border p-5 md:p-10 max-w-6xl mx-auto">
      <h1>Chatbot</h1>
      <div className='w-100 h-100 bg-amber-300 overflow-auto'>
        {messages.map((msg, index) => (
          <div key={index} className={`flex mb-3 ${msg.role === 'user' ? 'justify-end bg-blue-400' : 'justify-start bg-pink-500'}`}><span>{msg.content}</span></div>
        ))}
        {loading && <div>groq to think</div>}
      </div>

      <form className='flex gap-10' onSubmit={sendMessage}>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder='Write your message here' />
        <button type="submit">send</button>
      </form>
    </div>
  )
}

export default Gamepage