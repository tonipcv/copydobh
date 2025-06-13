"use client";

export default function Info() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-3xl mx-auto">
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe 
            src="https://scripts.converteai.net/32ff2495-c71e-49ba-811b-00b5b49c517f/players/684c333dae3ffc76ce6b719e/embed.html"
            className="absolute top-0 left-0 w-full h-full"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
} 