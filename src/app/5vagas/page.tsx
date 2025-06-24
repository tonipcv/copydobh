"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function VideoPage() {
  useEffect(() => {
    // Redirect after video ends
    const timer = setTimeout(() => {
      window.location.href = "/selecao";
    }, 60000); // 60 seconds as a fallback

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl mx-auto">
        <div 
          dangerouslySetInnerHTML={{
            __html: '<vturb-smartplayer id="vid-685a7e55a5e3c11c513cdb34" style="display: block; margin: 0 auto; width: 100%; "></vturb-smartplayer>'
          }}
        />
        <Script
          src="https://scripts.converteai.net/32ff2495-c71e-49ba-811b-00b5b49c517f/players/685a7e55a5e3c11c513cdb34/v4/player.js"
          strategy="afterInteractive"
        />
      </div>
    </div>
  );
} 