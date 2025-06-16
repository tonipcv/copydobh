"use client";

import { useState } from "react";
import Link from "next/link";

export default function Quiz() {
  const [step, setStep] = useState(1);

  const handleAnswer = (stepNumber: number) => {
    setStep(stepNumber + 1);
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      <div className="max-w-xl w-full">
        {/* Progress Steps */}
        <div className="flex justify-between mb-12">
          {[1, 2, 3, 4].map((s) => (
            <div key={s} className="flex flex-col items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${
                s === step ? 'bg-white text-black' : 
                s < step ? 'bg-gray-600 text-white' : 'bg-gray-800 text-gray-500'
              }`}>
                {s}
              </div>
              <div className={`h-0.5 w-16 ${
                s < step ? 'bg-gray-600' : 'bg-gray-800'
              }`} />
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg p-8 shadow-lg">
          {step === 1 && (
            <div className="space-y-6">
              <h1 className="text-2xl font-bold text-black">
                Vamos liberar o acesso para você agora só antes vamos fazer algumas perguntas
              </h1>
              <button
                onClick={() => handleAnswer(1)}
                className="w-full bg-black text-white font-medium py-3 px-6 rounded hover:bg-gray-800 transition-colors"
              >
                Continuar
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-black">
                Tanto no plano mensal quanto no trimestral, você terá acesso a:
              </h2>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>8 encontros de mentoria ao vivo, com acompanhamento passo a passo</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Sinais operacionais replicados diretamente da conta do Gustavo Mutta, para você copiar os mesmos trades em tempo real</span>
                </li>
              </ul>
              <button
                onClick={() => handleAnswer(2)}
                className="w-full bg-black text-white font-medium py-3 px-6 rounded hover:bg-gray-800 transition-colors"
              >
                Eu concordo
              </button>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <p className="text-gray-600 text-lg">
                Caso ultrapasse a quantidade de vagas iremos devolver o seu dinheiro pois o limite é claro na plataforma.
              </p>
              <button
                onClick={() => handleAnswer(3)}
                className="w-full bg-black text-white font-medium py-3 px-6 rounded hover:bg-gray-800 transition-colors"
              >
                Eu entendi!
              </button>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-black">
                Qual plano você prefere?
              </h2>
              <div className="space-y-6">
                <Link 
                  href="https://pay.hotmart.com/U100310460L?off=jq61kf7m&checkoutMode=6"
                  className="block p-8 border-2 border-gray-200 rounded-xl hover:border-black transition-all duration-300 hover:shadow-lg bg-white"
                >
                  <div className="flex justify-between items-start">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold text-black">Plano Mensal</h3>
                        <p className="text-gray-600 mt-1">20 vagas disponíveis</p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-gray-700">66% das vagas preenchidas</span>
                          <span className="text-sm font-semibold bg-gray-100 px-3 py-1 rounded-full">14/20</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                          <div 
                            className="bg-gradient-to-r from-blue-600 to-blue-800 h-full rounded-full transition-all duration-500 ease-out"
                            style={{ width: '66%' }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-black">R$ 380</div>
                      <div className="text-gray-600">/mês</div>
                    </div>
                  </div>
                </Link>
                <Link 
                  href="https://pay.hotmart.com/U100310460L?off=q0zx9oh5&checkoutMode=6"
                  className="block p-8 border-2 border-gray-200 rounded-xl hover:border-black transition-all duration-300 hover:shadow-lg bg-white"
                >
                  <div className="flex justify-between items-start">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold text-black">Plano Trimestral</h3>
                        <p className="text-gray-600 mt-1">10 vagas disponíveis</p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-gray-700">95% das vagas preenchidas</span>
                          <span className="text-sm font-semibold bg-red-100 text-red-700 px-3 py-1 rounded-full">9/10</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                          <div 
                            className="bg-gradient-to-r from-red-600 to-red-800 h-full rounded-full transition-all duration-500 ease-out"
                            style={{ width: '95%' }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-black">R$ 247</div>
                      <div className="text-gray-600">/mês</div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 