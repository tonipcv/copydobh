'use client';

export default function NovoEvento() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex flex-col items-center justify-center p-4 font-inter">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        
        {/* Heading */}
        <div className="mb-8 px-4">
          <h1 className="text-3xl md:text-4xl font-extralight text-white tracking-wide leading-tight">
            Dia 5 de Junho vou conectar a minha conta com mais de 30 pessoas que estiverem no grupo!
          </h1>
        </div>
        
        {/* Vídeo */}
        <div className="w-full max-w-3xl mx-auto">
          <iframe 
            id="panda-e864ffae-9788-4e85-8f77-8bac682c8545" 
            src="https://player-vz-7b6cf9e4-8bf.tv.pandavideo.com.br/embed/?v=e864ffae-9788-4e85-8f77-8bac682c8545" 
            style={{ border: 'none' }} 
            allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture" 
            allowFullScreen 
            width="720" 
            height="360"
          ></iframe>
        </div>

        {/* Botão WhatsApp */}
        <div className="mt-10">
          <a 
            href="https://chat.whatsapp.com/LaCq3GhrpOR5ot8c3u1fFe" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-full text-xl transition duration-300 ease-in-out transform hover:scale-105"
          >
            Entrar no Grupo
          </a>
        </div>
      </div>
    </div>
  );
}
