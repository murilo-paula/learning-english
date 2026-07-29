import React, { useState } from "react";
import { useUserStore } from "../../../store/useStore";
import { myprompt } from "../../../../prompt";
import Liam from "../../../assets/img/Liam.jpg";

const Gamepage = () => {
  const { user, updateUser } = useUserStore();
  const [systemPrompt, setSystemPrompt] = useState(myprompt);

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

  const [messages, setMessages] = useState(user.story);
  const [input, setInput] = useState("");
  const [loading, setloading] = useState(false);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage = { role: "user", content: input };
    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setInput("");
    setloading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [
            { role: "system", content: systemPrompt },
            ...updatedMessages.map((msg) => ({
              role: msg.role,
              content: msg.content,
            })),
          ],
        }),
      });

      if (!response.ok) throw new Error("Falha ao chamar a API de chat");

      const data = await response.json();
      const botmessage = {
        role: "assistant",
        content: data.choices[0].message.content,
      };

      setMessages([...updatedMessages, botmessage]);
      handleClick(botmessage.content);
      updateUser({ story: [...updatedMessages, botmessage] });
    } catch (error) {
      console.error("Happended an error", error);
      setMessages([
        ...updatedMessages,
        { role: "assistant", content: "Sorry, error when call groq API" },
      ]);
    } finally {
      setloading(false);
    }
  };

  return (
    <div className="flex flex-col w-full h-full md:justify-center md:items-center bg-gray-300">
      <h1 className="flex justify-center items-center md:rounded-t font-bold h-10 md:w-200 bg-blue-300">
        Talking with Liam
      </h1>
      <div className="w-full h-full md:w-200 md:h-120 pt-3 pb-3 rounded-b bg-blue-100 overflow-y-auto">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex mt-3 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <span
              className={`flex items-center gap-2 p-3 md:min-w-100 md:max-w-150 ${msg.role === "user" ? " bg-blue-400 rounded-l justify-end" : " bg-emerald-500 rounded-r justify-start"}`}
            >
              <p className="order-2 break-all">{msg.content}</p>
              <div
                className={`w-10 h-10 rounded-full shrink-0 overflow-hidden ${msg.role === "user" ? "order-3" : "order-1"}`}
              >
                {msg.role === "user" ? (
                  <img
                    className="w-full h-full object-cover"
                    src={user.avatar}
                  />
                ) : (
                  <img className="min-w-full h-full rounded-full " src={Liam} />
                )}
              </div>
            </span>
          </div>
        ))}
        {loading && <div>...</div>}
      </div>

      <form className="flex md:w-200" onSubmit={sendMessage}>
        <input
          className="px-4 py-3 w-full md:w-150 border rounded"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Write your message here"
        />
        <button
          className="flex-1 hidden md:block rounded shadow-2xl bg-blue-500 hover:bg-blue-600"
          type="submit"
        >
          send
        </button>
      </form>
    </div>
  );
};

export default Gamepage;
