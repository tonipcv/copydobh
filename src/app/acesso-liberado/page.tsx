"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Info() {
  useEffect(() => {
    // Script para o vídeo
    const script = document.createElement("script");
    script.src = "https://scripts.converteai.net/32ff2495-c71e-49ba-811b-00b5b49c517f/players/684c333dae3ffc76ce6b719e/player.js";
    script.async = true;
    script.id = "scr_684c333dae3ffc76ce6b719e";
    
    const existingScript = document.getElementById("scr_684c333dae3ffc76ce6b719e");
    if (existingScript) {
      existingScript.remove();
    }
    
    document.head.appendChild(script);
    
    // Cleanup
    return () => {
      const scriptToRemove = document.getElementById("scr_684c333dae3ffc76ce6b719e");
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex flex-col">
      {/* Video Container */}
      <div className="flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-3xl">
          <div 
            id="vid_684c333dae3ffc76ce6b719e" 
            style={{
              position: "relative", 
              width: "100%", 
              padding: "56.25% 0 0"
            }}
          > 
            <img 
              id="thumb_684c333dae3ffc76ce6b719e" 
              src="https://images.converteai.net/32ff2495-c71e-49ba-811b-00b5b49c517f/players/684c333dae3ffc76ce6b719e/thumbnail.jpg" 
              style={{
                position: "absolute", 
                top: 0, 
                left: 0, 
                width: "100%", 
                height: "100%", 
                objectFit: "cover", 
                display: "block"
              }} 
              alt="thumbnail"
            /> 
            <div 
              id="backdrop_684c333dae3ffc76ce6b719e" 
              style={{
                WebkitBackdropFilter: "blur(5px)", 
                backdropFilter: "blur(5px)", 
                position: "absolute", 
                top: 0, 
                height: "100%", 
                width: "100%"
              }}
            ></div> 
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 text-center space-y-2">
        <Link 
          href="/politicas" 
          className="text-gray-400 hover:text-gray-300 text-xs sm:text-sm transition-colors"
        >
          Termos de Uso
        </Link>
        <p className="text-gray-500 text-[8px] sm:text-[10px] max-w-lg mx-auto px-4">
          Este serviço utiliza a função de Copy Trade da corretora Bybit. As operações são feitas por Gustavo Mutta com capital próprio, e segui-las é uma escolha opcional e por conta e risco do usuário.
        </p>
      </div>
    </div>
  );
} 