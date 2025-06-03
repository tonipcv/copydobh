"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "https://t.me/+WnTxsEVXZb4wZTcx";
    }, 30000); // 30 segundos

    // Limpa o timer se o componente for desmontado ou se houver interação
    const handleInteraction = () => {
      clearTimeout(timer);
    };

    // Adiciona listeners para detectar interação do usuário
    window.addEventListener('click', handleInteraction);
    window.addEventListener('scroll', handleInteraction);
    window.addEventListener('keydown', handleInteraction);
    window.addEventListener('mousemove', handleInteraction);

    // Cleanup
    return () => {
      clearTimeout(timer);
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('keydown', handleInteraction);
      window.removeEventListener('mousemove', handleInteraction);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100 flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative w-48 h-48 lg:w-64 lg:h-64">
              <Image
                src="/bh.jpeg"
                alt="Profile"
                fill
                className="rounded-full object-cover border-2 border-gray-300 shadow-2xl"
                priority
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <div className="space-y-6">
              <p className="text-lg lg:text-xl font-semibold bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 bg-clip-text text-transparent">
                GRUPO EXCLUSIVO PARA 30 PESSOAS
              </p>
              
              <h1 className="text-xl lg:text-2xl font-medium leading-relaxed bg-gradient-to-r from-gray-700 via-gray-900 to-gray-700 bg-clip-text text-transparent">
                Copy Trading: Deixe sua corretora copiar meus trades, ou seja eu faço uma operação e automaticamente entra na sua também.
              </h1>

              <div className="pt-4">
                <div className="relative inline-block">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 rounded-full opacity-75 blur-sm animate-pulse"></div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-gray-700 to-transparent rounded-full opacity-30 animate-ping"></div>
                  <a
                    href="https://t.me/+WnTxsEVXZb4wZTcx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-flex items-center gap-3 bg-white border border-gray-400 hover:border-gray-600 text-gray-800 font-medium py-3 px-6 rounded-full text-base transition-all duration-300 hover:bg-gray-50"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                    </svg>
                    Entrar no grupo!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
