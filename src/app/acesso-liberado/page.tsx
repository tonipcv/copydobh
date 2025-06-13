"use client";

import { useEffect } from "react";

export default function Info() {
  useEffect(() => {
    // Carrega o script do vídeo dinamicamente
    const script = document.createElement("script");
    script.src = "https://scripts.converteai.net/32ff2495-c71e-49ba-811b-00b5b49c517f/players/684c333dae3ffc76ce6b719e/player.js";
    script.async = true;
    script.id = "scr_684c333dae3ffc76ce6b719e";
    
    // Remove script anterior se existir
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-3xl mx-auto">
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
  );
} 