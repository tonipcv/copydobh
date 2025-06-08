"use client";

export default function Info() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex flex-col items-center justify-center p-4 font-inter">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Texto em cima */}
        <h1 className="text-2xl lg:text-3xl font-medium leading-tight tracking-wide bg-gradient-to-r from-gray-200 via-gray-100 to-gray-300 bg-clip-text text-transparent">
          MAIS INFORMAÇÕES SOBRE OS 30 SELECIONADOS PARA O COPY TRADE
        </h1>

        {/* Vídeo */}
        <div className="w-full max-w-3xl mx-auto">
          <div 
            id="vid_6845f77e0cb5938a2b622735" 
            style={{
              position: "relative", 
              width: "100%", 
              padding: "56.25% 0 0"
            }}
          > 
            <img 
              id="thumb_6845f77e0cb5938a2b622735" 
              src="https://images.converteai.net/32ff2495-c71e-49ba-811b-00b5b49c517f/players/6845f77e0cb5938a2b622735/thumbnail.jpg" 
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
              id="backdrop_6845f77e0cb5938a2b622735" 
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

      {/* Script do vídeo */}
      <script 
        type="text/javascript" 
        id="scr_6845f77e0cb5938a2b622735"
        dangerouslySetInnerHTML={{
          __html: `
            var s=document.createElement("script"); 
            s.src="https://scripts.converteai.net/32ff2495-c71e-49ba-811b-00b5b49c517f/players/6845f77e0cb5938a2b622735/player.js"; 
            s.async=true;
            document.head.appendChild(s);
          `
        }}
      />
    </div>
  );
} 