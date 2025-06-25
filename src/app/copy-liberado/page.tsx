"use client";

import React from "react";
import Script from "next/script";

export default function VideoPage() {


  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl mx-auto space-y-6">
        {/* Text above video */}
        <h1 className="text-white text-xl lg:text-2xl font-bold text-center leading-relaxed">
          APRENDA COMO CONECTAR SUA CONTA, TODAS ENTRADAS QUE FAÇO COPIA AUTOMATICAMENTE PARA SUA CONTA AUTOMATICAMENTE
        </h1>
        
        {/* Video player */}
        <div 
          dangerouslySetInnerHTML={{
            __html: '<vturb-smartplayer id="vid-685c5119e0190725343d2803" style="display: block; margin: 0 auto; width: 100%; "></vturb-smartplayer>'
          }}
        />
        <Script
          src="https://scripts.converteai.net/a15b7026-f718-43f5-945a-3c3124c08adb/players/685c5119e0190725343d2803/v4/player.js"
          strategy="afterInteractive"
        />
        
        {/* Text below video */}
        <p className="text-white text-sm text-center">
          Somente 5 vagas
        </p>
      </div>
    </div>
  );
} 