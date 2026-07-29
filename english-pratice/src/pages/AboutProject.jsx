import React from "react";
import { Link } from "react-router-dom";

const AboutProject = () => {
  const technologies = [
    { name: "React", desc: "Componentização, hooks (useState) e estrutura da SPA" },
    { name: "React Router DOM", desc: "Navegação entre páginas (Link e rotas públicas)" },
    { name: "Tailwind CSS", desc: "Estilização utilitária, responsividade e temas" },
    { name: "Zustand", desc: "Gerenciamento de estado global do usuário (perfil, avatar, histórico)" },
    { name: "OpenAI SDK + Groq API", desc: "Chat com IA (modelo Llama 3.3) para prática de conversação" },
    { name: "Web Speech API", desc: "Text-to-Speech nativo do navegador para pronúncia das frases" },
    { name: "Vite", desc: "Build tool e variáveis de ambiente (import.meta.env)" },
  ];

  const learnings = [
    "Formulários controlados com useState (login, registro, edição de perfil)",
    "Validação de campos com HTML5 (required, minLength, maxLength) e regras customizadas",
    "Upload e preview de imagem com URL.createObjectURL",
    "Gerenciamento de estado global com Zustand (useUserStore)",
    "Integração com API de IA (OpenAI SDK apontando para Groq) para gerar respostas de chat",
    "Uso do Web Speech API (SpeechSynthesisUtterance) para converter texto em áudio",
    "Consumo de variáveis de ambiente com Vite (VITE_GROQ_API_KEY)",
    "Layout responsivo com grid, flexbox e reordenação de elementos (order-*) entre mobile e desktop",
    "Renderização de listas dinâmicas com map (frases, mensagens do chat, tecnologias)",
    "Persistência de estado entre páginas (histórico de conversa salvo no usuário)",
    "Boas práticas de UI: foco em inputs, hover states, transições e sombras",
    "Organização de componentes e estrutura de pastas em um projeto React",
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-12">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-sm p-8 space-y-8">

        <div className="text-center space-y-3">
          <span className="inline-block px-4 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold">
            📚 Projeto de estudos
          </span>

          <h1 className="text-2xl font-bold text-gray-800">
            Este site é apenas para fins de aprendizado
          </h1>

          <p className="text-gray-600 leading-relaxed max-w-xl mx-auto">
            Este projeto foi criado com o objetivo de praticar e aprimorar
            minhas habilidades em desenvolvimento web, incluindo integração
            com APIs de inteligência artificial. Não é um produto comercial
            e não deve ser usado como fonte oficial de informação ou serviço.
            Algumas funcionalidades ainda estão em desenvolvimento.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-gray-800 mb-3">🛠 Tecnologias utilizadas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="border border-gray-200 rounded-lg p-3 hover:border-emerald-300 transition-colors duration-200"
              >
                <p className="font-semibold text-emerald-600">{tech.name}</p>
                <p className="text-sm text-gray-500">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-bold text-gray-800 mb-3">✅ O que eu aprendi até agora</h2>
          <ul className="space-y-2">
            {learnings.map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-gray-600 text-sm">
                <span className="text-emerald-500 mt-0.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center pt-2">
          <Link
            to="/"
            className="inline-block px-6 py-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-lg transition-colors duration-200"
          >
            Voltar para o início
          </Link>
        </div>

      </div>
    </div>
  );
};

export default AboutProject;