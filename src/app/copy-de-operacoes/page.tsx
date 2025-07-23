'use client';

export default function NovoEvento() {
  return (
    <div className="min-h-screen bg-white dark:bg-black flex flex-col items-center justify-center p-4 font-sans">
      <div className="w-full max-w-3xl mx-auto text-center space-y-12 px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 dark:text-white tracking-tight leading-tight">
            Conecte-se com mais de <span className="font-medium">30 pessoas</span> no dia 5 de Junho
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-500 dark:text-gray-400 font-light">
            Assista o vídeo e entre no grupo.
          </p>
        </div>
        
        {/* Vídeo com container responsivo */}
        <div className="w-full aspect-video relative rounded-2xl overflow-hidden shadow-lg">
          <iframe 
            id="panda-e864ffae-9788-4e85-8f77-8bac682c8545" 
            src="https://player-vz-7b6cf9e4-8bf.tv.pandavideo.com.br/embed/?v=e864ffae-9788-4e85-8f77-8bac682c8545" 
            style={{ border: 'none', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
            allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>

        {/* Botão WhatsApp */}
        <div className="mt-8 sm:mt-12">
          <a 
            href="https://chat.whatsapp.com/LaCq3GhrpOR5ot8c3u1fFe" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-black dark:bg-white text-white dark:text-black font-medium py-4 px-8 sm:px-10 rounded-full text-lg sm:text-xl transition-all duration-300 ease-in-out hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            aria-label="Entrar no Grupo do WhatsApp"
          >
            Entrar no Grupo
          </a>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            Não conseguiremos selecionar mais de 30 por conta do limite da plataforma.
          </p>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="w-full max-w-3xl mx-auto mt-16 text-center text-sm text-gray-400 dark:text-gray-600">
        <p>© {new Date().getFullYear()} • Todos os direitos reservados</p>
      </footer>
    </div>
  );
}
