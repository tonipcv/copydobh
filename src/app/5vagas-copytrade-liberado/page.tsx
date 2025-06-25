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
            __html: '<vturb-smartplayer id="vid-685c5119e0190725343d2803" style="display: block; margin: 0 auto; width: 100%; "></vturb-smartplayer>'
          }}
        />
        <Script
          src="https://scripts.converteai.net/a15b7026-f718-43f5-945a-3c3124c08adb/players/685c5119e0190725343d2803/v4/player.js"
          strategy="afterInteractive"
        />
      </div>
    </div>
  );
} 