"use client";

import { useEffect } from "react";

export default function Premium() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "https://chat.whatsapp.com/JukSbTHiG2sALpoClk1a3Q";
    }, 5000); // 5 segundos para dar tempo de ler a mensagem

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <h1 className="text-white text-2xl lg:text-3xl font-bold mb-4">
          Vagas lotadas para o Copy Trade
        </h1>

        <p className="text-white text-xl lg:text-2xl">
          Caso tenha vagas iremos avisar no grupo!
        </p>

        <div className="mt-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto"></div>
          <p className="text-white mt-4">Redirecionando para o grupo do WhatsApp...</p>
        </div>
      </div>
    </div>
  );
} 