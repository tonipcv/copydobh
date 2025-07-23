"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function Info() {
  useEffect(() => {
    // Carrega o script do vídeo dinamicamente
    const script = document.createElement("script");
    script.src = "https://scripts.converteai.net/32ff2495-c71e-49ba-811b-00b5b49c517f/players/684c5a56ae3ffc76ce6b9901/player.js";
    script.async = true;
    script.id = "scr_684c5a56ae3ffc76ce6b9901";
    
    // Remove script anterior se existir
    const existingScript = document.getElementById("scr_684c5a56ae3ffc76ce6b9901");
    if (existingScript) {
      existingScript.remove();
    }
    
    document.head.appendChild(script);
    
    // Cleanup
    return () => {
      const scriptToRemove = document.getElementById("scr_684c5a56ae3ffc76ce6b9901");
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-3xl mx-auto">
        <div 
          id="vid_684c5a56ae3ffc76ce6b9901" 
          style={{
            position: "relative", 
            width: "100%", 
            padding: "177.77777777777777% 0 0"
          }}
        > 
          <Image 
            id="thumb_684c5a56ae3ffc76ce6b9901" 
            src="https://images.converteai.net/32ff2495-c71e-49ba-811b-00b5b49c517f/players/684c5a56ae3ffc76ce6b9901/thumbnail.jpg" 
            alt="thumbnail"
            fill
            style={{
              position: "absolute", 
              top: 0, 
              left: 0, 
              width: "100%", 
              height: "100%", 
              objectFit: "cover"
            }}
          /> 
          <div 
            id="backdrop_684c5a56ae3ffc76ce6b9901" 
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