"use client";

export default function Acesso() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="w-full max-w-3xl px-4">
        <div className="text-white text-center mb-6">
          <h2 className="text-xl font-bold mb-2">Assista o vídeo e aprenda como conectar sua conta</h2>
          <p className="text-sm">São somente 30 acessos, batendo o limite não conectamos mais.</p>
        </div>
        <div id="vid_684c333dae3ffc76ce6b719e" style={{ position: "relative", width: "100%", padding: "56.25% 0 0" }}>
          <img 
            id="thumb_684c333dae3ffc76ce6b719e" 
            src="https://images.converteai.net/32ff2495-c71e-49ba-811b-00b5b49c517f/players/684c333dae3ffc76ce6b719e/thumbnail.jpg" 
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }} 
            alt="thumbnail" 
          />
          <div 
            id="backdrop_684c333dae3ffc76ce6b719e" 
            style={{ WebkitBackdropFilter: "blur(5px)", backdropFilter: "blur(5px)", position: "absolute", top: 0, height: "100%", width: "100%" }}
          ></div>
        </div>
        <script 
          type="text/javascript" 
          id="scr_684c333dae3ffc76ce6b719e"
          dangerouslySetInnerHTML={{
            __html: `var s=document.createElement("script"); s.src="https://scripts.converteai.net/32ff2495-c71e-49ba-811b-00b5b49c517f/players/684c333dae3ffc76ce6b719e/player.js", s.async=!0,document.head.appendChild(s);`
          }}
        />
      </div>
    </div>
  );
}