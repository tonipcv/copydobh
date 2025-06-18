"use client";

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-4 md:p-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="space-y-6">
          {/* Primeiro parágrafo */}
          <p className="text-lg leading-relaxed">
            O serviço de Copy Trade aqui apresentado é uma funcionalidade oficial disponibilizada pela corretora Bybit. 
            Gustavo Lima Diniz realiza operações na plataforma e decidiu compartilhar publicamente suas operações com 
            quem desejar acompanhar de forma educacional e utilizando a feature da Bybit, de forma totalmente opcional.
          </p>

          {/* Segundo parágrafo */}
          <p className="text-lg leading-relaxed">
            Ao optar por conectar sua conta, você declara estar ciente de que o mercado de criptomoedas é volátil, 
            podendo haver lucros ou perdas.
          </p>

          {/* Lista de avisos */}
          <div className="bg-gray-800/50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Este serviço:</h2>
            <ul className="space-y-3 list-disc pl-6">
              <li>Não oferece garantia de resultados;</li>
              <li>Não é uma recomendação de investimento;</li>
              <li>É uma decisão pessoal e voluntária do usuário seguir ou não as operações;</li>
              <li>Não se trata de consultoria ou análise profissional regulada.</li>
            </ul>
          </div>

          {/* Aviso final */}
          <p className="text-lg font-medium text-yellow-400">
            Use com responsabilidade e invista apenas o que está disposto a arriscar.
          </p>
        </div>

        {/* Botão de voltar */}
        <button 
          onClick={() => window.history.back()}
          className="mt-8 px-6 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
        >
          Voltar
        </button>
      </div>
    </div>
  );
} 