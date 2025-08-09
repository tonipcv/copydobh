"use client";
import Script from 'next/script';
import { useEffect, useState } from 'react';

export default function Acesso() {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    // This ensures the player container is ready before the script loads
    if (isScriptLoaded) {
      // Force reload the script if needed for mobile
      const playerElement = document.getElementById('vid_684c333dae3ffc76ce6b719e');
      if (playerElement && !playerElement.querySelector('iframe')) {
        // If no iframe is present, the player hasn't initialized correctly
        const script = document.createElement('script');
        script.src = 'https://scripts.converteai.net/32ff2495-c71e-49ba-811b-00b5b49c517f/players/684c333dae3ffc76ce6b719e/player.js';
        script.async = true;
        document.head.appendChild(script);
      }
    }
  }, [isScriptLoaded]);

  return (
      <div className="w-full max-w-3xl px-4">
        <div className="text-white text-center mb-6">
          <h2 className="text-xl font-bold mb-2">Assista o vídeo e aprenda como conectar sua conta</h2>
          <p className="text-sm">São somente 30 acessos, batendo o limite não conectamos mais.</p>
        </div>

      {/* Blocking Modal - This overlay covers the entire screen but is transparent */}
      {showModal && (
        <>
          {/* Invisible overlay that blocks all interactions */}
          <div className="fixed inset-0 z-50" style={{ pointerEvents: 'all' }}></div>
          
          {/* Modal content */}
          <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
            <div className="bg-white p-8 rounded-lg max-w-md w-full text-center shadow-xl border-2 border-red-500 pointer-events-auto">
              <h2 className="text-xl font-bold mb-4 text-red-600">Aviso Importante</h2>
              <p className="text-gray-800 text-lg mb-4">
                Por conta de limite das vagas de conexão do Copy Trade as vagas estão lotadas!
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}