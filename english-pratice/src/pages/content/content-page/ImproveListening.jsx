import React, { useState } from "react";

const Structure = () => {
  const [sendText, setSendText] = useState("First text");
  const [customText, setCustomText] = useState("");

  const phrases = [
    "How's it going?",
    "What have you been up to?",
    "Nice to meet you!",
    "Long time no see.",
    "Sounds good!",
    "No problem.",
    "Never mind.",
    "Oh my God.",
    "That makes sense.",
    "I agree with you.",
    "That's awesome!",
    "What do you think?",
    "Could you help me?",
    "What does this mean?",
    "Are you sure?",
    "What's happening?",
    "In my opinion...",
    "I have no idea.",
    "I'll give it a try.",
    "It depends on the context.",
    "I'm working on it.",
    "Can I have a cup of coffee?",
    "How much does this cost?",
    "Where is the restroom?",
    "I'll take this one.",
    "See you later!",
    "Take care.",
    "I'll be right back.",
    "Have a great day!",
    "Catch you later!",
  ];

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

  return (
    <div className="w-full min-h-screen box-border p-5 md:p-10 max-w-6xl mx-auto">
      <div>
        <h1 className="text-4xl font-bold mb-5 text-slate-900">
          Essential English Everyday Phrases
        </h1>
        <h2 className="text-2xl font-bold mb-3 text-slate-800">
          Listen, Practice, and Master Daily Conversation
        </h2>
        <p className="mb-8 text-slate-600">
          Fluency comes from practicing real-life expressions used by native
          speakers every day. Listen to the audio examples below and repeat them
          out loud to improve your pronunciation and build speaking confidence:
        </p>
      </div>

      <div className="w-full max-w-2xl mb-10 p-6 bg-blue-50 border border-blue-100 rounded-2xl shadow-sm">
        <h3 className="text-sm font-semibold text-blue-900 mb-3 uppercase tracking-wider">
          Write your text to listen
        </h3>
        <div className="flex gap-3">
          <input
            className="flex-1 bg-white border border-blue-200 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition shadow-inner"
            type="text"
            placeholder="Type your own phrase here..."
            value={customText}
            onChange={(e) => setCustomText(e.target.value)}
          />
          <button
            type="button"
            className="w-12 h-12 text-lg text-white rounded-xl bg-blue-500 hover:bg-blue-600 active:scale-95 transition flex items-center justify-center shrink-0 shadow-md shadow-blue-200"
            onClick={() => handleClick(customText)}
            title="Click to listen"
          >
            ▶︎
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border-t border-slate-200 pt-8">
        {phrases.map((phrase, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 bg-slate-50 border border-slate-200 rounded-xl hover:bg-slate-100 hover:border-slate-300 transition shadow-sm"
          >
            <p className="text-base font-medium text-slate-800 pr-3">
              {phrase}
            </p>
            <button
              type="button"
              className="w-10 h-10 text-base text-white rounded-lg bg-blue-500 hover:bg-blue-600 active:scale-95 transition flex items-center justify-center shrink-0 shadow-sm"
              onClick={() => handleClick(phrase)}
              title="Click to listen"
            >
              ▶︎
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Structure;
