"use client";

export default function Policies() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Botão Voltar */}
        <button 
          onClick={() => window.history.back()}
          className="mb-8 text-gray-600 hover:text-gray-900 flex items-center gap-2"
        >
          ← Voltar
        </button>

        {/* Título e Data */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">TERMOS DE USO – SERVIÇO COPY TRADE</h1>
          <p className="text-gray-600">Última atualização: 18 de Junho de 2025</p>
        </div>

        {/* Aviso Inicial */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
          <p className="text-sm leading-relaxed">
            Atenção! Antes de utilizar o serviço de Copy Trade, leia atentamente os termos e as condições a seguir. 
            A continuidade no uso do serviço, bem como a conexão voluntária à conta disponibilizada, implica o aceite 
            integral, irrestrito e consciente de todas as cláusulas aqui dispostas. Caso você não concorde com qualquer 
            parte deste termo, deverá se abster de utilizar o serviço.
          </p>
        </div>

        {/* Conteúdo Principal */}
        <div className="space-y-8 text-gray-800">
          <section>
            <h2 className="text-xl font-bold mb-4">1. PARTES</h2>
            <p className="leading-relaxed">
              LYS METAVERSE LTDA., pessoa jurídica de direito privado, inscrita no CNPJ sob o nº 32.563.274/0001-85, 
              com sede na cidade de São Paulo/SP, doravante denominada "PRODUTORA", em parceria com Gustavo Lima Diniz, 
              doravante denominado "PARCEIRO", e o usuário final do serviço, identificado conforme os dados fornecidos 
              na plataforma de conexão com a corretora BYBIT, doravante denominado "USUÁRIO".
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">2. OBJETO</h2>
            <p className="leading-relaxed mb-4">
              O presente Termo regula os direitos, obrigações e limitações referentes à utilização do serviço denominado 
              Copy Trade, funcionalidade disponibilizada pela corretora BYBIT, por meio da qual o PARCEIRO compartilha 
              publicamente suas operações com criptoativos, executadas na sua conta de forma demonstrativa, permitindo 
              que o USUÁRIO opte por copiá-las em sua própria conta de forma voluntária, automatizada e independente.
            </p>
            <p className="leading-relaxed">
              O serviço tem caráter informativo e opcional, e visa apenas espelhar operações realizadas na conta do 
              PARCEIRO. O USUÁRIO compreende e declara que não há qualquer garantia de resultados ou lucros, e que os 
              riscos das operações são de sua exclusiva responsabilidade.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">3. LIMITAÇÃO DE RESPONSABILIDADE</h2>
            <div className="space-y-4">
              <p>3.1. A PRODUTORA e o PARCEIRO não garantem qualquer retorno financeiro e não oferecem qualquer tipo de recomendação de investimento.</p>
              <p>3.2. O serviço não se caracteriza como consultoria financeira, análise técnica profissional, ou assessoria de investimentos, conforme legislação vigente.</p>
              <p>3.3. Todas as decisões de investimento são de responsabilidade exclusiva do USUÁRIO, inclusive a ativação ou desativação do Copy Trade, a escolha da alavancagem, dos valores alocados e demais configurações na plataforma da corretora BYBIT.</p>
              <p>3.4. A PRODUTORA e o PARCEIRO não assumem qualquer responsabilidade por perdas financeiras, falhas de execução da corretora, interrupções da plataforma, problemas técnicos, variações abruptas de mercado, ou quaisquer danos diretos ou indiretos relacionados à utilização do serviço.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">4. CONDIÇÕES DE USO</h2>
            <div className="space-y-4">
              <p>4.1. O USUÁRIO reconhece que o mercado de criptoativos é altamente volátil e pode resultar em perdas parciais ou totais do capital investido.</p>
              <p>4.2. A adesão ao serviço de Copy Trade é feita por iniciativa do próprio USUÁRIO, diretamente na plataforma da corretora BYBIT, e a qualquer momento ele poderá cancelar a cópia das operações.</p>
              <p>4.3. A PRODUTORA e o PARCEIRO não possuem acesso, controle ou gestão sobre os valores investidos pelo USUÁRIO, tampouco são responsáveis por decisões operacionais feitas por ele.</p>
              <p>4.4. Ao utilizar o serviço, o USUÁRIO declara que compreende os riscos envolvidos nas operações com criptoativos, e que está agindo com autonomia, consciência e pleno discernimento.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">5. POLÍTICA DE PAGAMENTO E ACESSO</h2>
            <p className="mb-4">5.1. A eventual cobrança por acesso a comunidades, conteúdos educativos, mentorias ou bônus relacionados ao serviço Copy Trade, será realizada de forma separada, através da plataforma Hotmart ou meio similar, cujas condições, prazos e garantias seguirão os Termos de Uso próprios da respectiva plataforma.</p>
            <p>5.2. O acesso a conteúdos pagos poderá ser suspenso ou encerrado nos seguintes casos:</p>
            <ul className="list-roman pl-8 space-y-2 mt-2">
              <li>inadimplemento de valores;</li>
              <li>violação às regras de conduta estabelecidas em grupos ou plataformas;</li>
              <li>tentativa de repasse de acesso a terceiros;</li>
              <li>condutas inadequadas, ilegais ou que infrinjam direitos de terceiros.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">6. PROPRIEDADE INTELECTUAL</h2>
            <div className="space-y-4">
              <p>6.1. Todo o conteúdo compartilhado pela PRODUTORA e pelo PARCEIRO, incluindo vídeos, textos, imagens, áudios, gráficos, plataformas, interfaces, códigos e demais materiais, é protegido por direitos autorais e de propriedade intelectual.</p>
              <p>6.2. O USUÁRIO compromete-se a não copiar, distribuir, comercializar ou divulgar tais conteúdos sem autorização expressa e por escrito da PRODUTORA.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">7. USO DE IMAGEM, NOME E DEPOIMENTOS</h2>
            <p>7.1. Ao participar de grupos, eventos ou comunidades vinculadas ao serviço, o USUÁRIO autoriza o uso de sua imagem, voz, nome e depoimentos pela PRODUTORA para fins de divulgação institucional, promocional ou comercial, em qualquer mídia, sem que isso gere qualquer ônus ou compensação.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">8. DADOS PESSOAIS</h2>
            <div className="space-y-4">
              <p>8.1. Ao aceitar este termo, o USUÁRIO consente com o tratamento de seus dados pessoais conforme a Lei nº 13.709/2018 (LGPD), para fins de identificação, comunicação, suporte, envio de informações e cumprimento de obrigações legais.</p>
              <p>8.2. A qualquer momento, o USUÁRIO poderá solicitar correções ou a exclusão de seus dados, ciente de que isso pode afetar seu acesso ao serviço.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">9. FORO E LEGISLAÇÃO APLICÁVEL</h2>
            <div className="space-y-4">
              <p>9.1. Este Termo será regido pelas leis da República Federativa do Brasil.</p>
              <p>9.2. As partes elegem o Foro da Comarca de Cajamar/SP como o único competente para dirimir eventuais controvérsias oriundas deste Termo, com renúncia expressa a qualquer outro, por mais privilegiado que seja.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">10. ACEITAÇÃO</h2>
            <p className="leading-relaxed">
              Ao optar por utilizar o serviço de Copy Trade, o USUÁRIO declara que leu, compreendeu e concorda 
              integralmente com os presentes Termos de Uso, assumindo total responsabilidade sobre o uso do serviço 
              e eventuais decisões de investimento.
            </p>
          </section>

          <section className="mt-12 border-t pt-8">
            <h2 className="text-xl font-bold mb-4">Contato</h2>
            <p>
              Para dúvidas, suporte ou informações adicionais, o USUÁRIO poderá entrar em contato através do e-mail:{" "}
              <a href="mailto:contato@k17.com.br" className="text-blue-600 hover:underline">
                contato@k17.com.br
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
} 