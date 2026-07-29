// api/chat.js
// Serverless function da Vercel: roda no servidor, nunca no navegador do usuário.
// A chave da API fica só aqui, protegida.

export default async function handler(req, res) {
  // Só aceita requisições POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  try {
    const { messages } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Campo 'messages' é obrigatório e deve ser um array" });
    }

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return res.status(response.status).json({ error: errorData });
    }

    const data = await response.json();
    return res.status(200).json(data);

  } catch (error) {
    console.error("Erro na function /api/chat:", error);
    return res.status(500).json({ error: "Erro interno ao processar a solicitação" });
  }
}