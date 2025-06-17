"use client";

import Link from "next/link";

export default function PoliticasCopyTrade() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-gray-900 bg-opacity-50 rounded-lg p-8">
          <div className="mb-8">
            <Link 
              href="/acesso-liberado" 
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              ← Voltar
            </Link>
          </div>

          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-6">⚠️ Aviso Importante</h2>
              <p className="mb-6 leading-relaxed">
                O serviço de Copy Trade aqui apresentado é uma funcionalidade oficial disponibilizada 
                pela corretora Bybit. Gustavo Mutta realiza operações com capital próprio na plataforma 
                e decidiu compartilhar publicamente suas operações com quem desejar copiar, de forma 
                totalmente opcional.
              </p>

              <p className="mb-6 leading-relaxed">
                Ao optar por conectar sua conta, você declara estar ciente de que o mercado de 
                criptomoedas é volátil, podendo haver lucros ou perdas. Este serviço:
              </p>

              <ul className="space-y-4 list-disc list-inside pl-4 mb-6">
                <li>Não oferece garantia de resultados;</li>
                <li>Não é uma recomendação de investimento;</li>
                <li>É uma decisão pessoal e voluntária do usuário seguir ou não as operações;</li>
                <li>Não se trata de consultoria ou análise profissional regulada.</li>
              </ul>

              <p className="leading-relaxed font-medium text-white">
                Use com responsabilidade e invista apenas o que está disposto a arriscar.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
} 