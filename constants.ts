
import { ThemesData } from './types';

export const THEMES_DATA: ThemesData = {
    tema1: {
        title: 'Impactos dos Resíduos no Ambiente',
        icon: 'fa-trash-alt',
        color: 'text-red-600',
        image: 'https://images.unsplash.com/photo-1621451537084-482c73073a0f?w=800&q=80',
        quote: 'O lixo que você descarta nunca desaparece — ele apenas muda de lugar.',
        content: `
            <p class="text-lg leading-relaxed mb-6">
                Os resíduos plásticos, metálicos e de pesca representam hoje uma das maiores ameaças à fauna marinha. 
                Segundo o <strong>IBGE (2023)</strong>, o Brasil produz mais de <strong>82 milhões de toneladas de lixo por ano</strong>, 
                e cerca de <strong>10% vai parar nos mares</strong>.
            </p>
            
            <div class="bg-red-50 border-l-4 border-red-500 p-6 mb-6 rounded">
                <h4 class="font-bold text-red-800 mb-3 text-xl">
                    <i class="fas fa-exclamation-triangle mr-2"></i>Dados Alarmantes
                </h4>
                <ul class="space-y-2 text-gray-700">
                    <li><i class="fas fa-arrow-right mr-2 text-red-500"></i><strong>2,4 milhões de toneladas</strong> de plástico chegam ao mar brasileiro anualmente (MMA, 2023)</li>
                    <li><i class="fas fa-arrow-right mr-2 text-red-500"></i>Cada brasileiro consome em média <strong>16 kg de plástico por ano</strong> (ONU, 2022)</li>
                    <li><i class="fas fa-arrow-right mr-2 text-red-500"></i>Menos de <strong>5% do plástico é reciclado</strong> no Brasil</li>
                    <li><i class="fas fa-arrow-right mr-2 text-red-500"></i>Microplásticos já foram encontrados em <strong>90% das aves marinhas</strong></li>
                </ul>
            </div>
            
            <p class="text-lg leading-relaxed mb-6">
                Esses resíduos são ingeridos por tartarugas, aves e peixes, causando obstruções intestinais e morte. 
                Em Camocim, o descarte irregular próximo ao estuário e à praia contribui para a poluição das águas 
                e o acúmulo de microplásticos que entram na cadeia alimentar.
            </p>
            
            <div class="bg-green-50 border-l-4 border-green-500 p-6 mb-6 rounded">
                <h4 class="font-bold text-green-800 mb-3 text-xl">
                    <i class="fas fa-lightbulb mr-2"></i>Soluções Práticas
                </h4>
                <ul class="space-y-3 text-gray-700">
                    <li><i class="fas fa-check-circle mr-2 text-green-500"></i>Reduza o uso de descartáveis - prefira canudos, copos e sacolas reutilizáveis</li>
                    <li><i class="fas fa-check-circle mr-2 text-green-500"></i>Participe de mutirões de limpeza de praias e manguezais</li>
                    <li><i class="fas fa-check-circle mr-2 text-green-500"></i>Apoie cooperativas locais de reciclagem</li>
                    <li><i class="fas fa-check-circle mr-2 text-green-500"></i>Descarte corretamente óleo de cozinha e pilhas</li>
                    <li><i class="fas fa-check-circle mr-2 text-green-500"></i>Denuncie descarte irregular às autoridades ambientais</li>
                </ul>
            </div>
            
            <div class="bg-blue-50 p-6 rounded-lg">
                <p class="text-lg font-semibold text-blue-900">
                    <i class="fas fa-quote-left mr-2"></i>
                    "Cada pequeno gesto conta. Ao recusar um canudo plástico, você está protegendo a vida marinha."
                    <i class="fas fa-quote-right ml-2"></i>
                </p>
            </div>
        `
    },
    tema2: {
        title: 'Preservação das Restingas',
        icon: 'fa-mountain',
        color: 'text-yellow-700',
        image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
        quote: 'Sem as restingas, as dunas não têm raízes e o litoral perde sua proteção natural.',
        content: `
            <p class="text-lg leading-relaxed mb-6">
                As restingas são ecossistemas costeiros que funcionam como <strong>escudo natural contra a erosão</strong>. 
                Segundo o <strong>IBGE (2022)</strong>, quase <strong>metade das restingas do Ceará</strong> já foi substituída 
                por construções e loteamentos irregulares.
            </p>
            
            <div class="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6 rounded">
                <h4 class="font-bold text-yellow-800 mb-3 text-xl">
                    <i class="fas fa-info-circle mr-2"></i>O Que São Restingas?
                </h4>
                <p class="text-gray-700 mb-3">
                    Restingas são formações vegetais que crescem sobre solos arenosos ao longo da costa. 
                    Elas desempenham funções ecológicas essenciais:
                </p>
                <ul class="space-y-2 text-gray-700">
                    <li><i class="fas fa-leaf mr-2 text-green-500"></i>Fixam as dunas e evitam sua movimentação</li>
                    <li><i class="fas fa-shield-alt mr-2 text-blue-500"></i>Protegem contra erosão costeira e ressacas</li>
                    <li><i class="fas fa-home mr-2 text-orange-500"></i>Abrigam espécies endêmicas de plantas e animais</li>
                    <li><i class="fas fa-filter mr-2 text-teal-500"></i>Filtram água da chuva antes de chegar ao lençol freático</li>
                </ul>
            </div>
            
            <p class="text-lg leading-relaxed mb-6">
                A destruição da vegetação de restinga afeta diretamente a fixação das dunas e compromete 
                habitats de aves, répteis e pequenos mamíferos. A <strong>Resolução CONAMA 303/2002</strong> 
                garante a proteção dessas áreas como de <strong>preservação permanente (APP)</strong>.
            </p>
            
            <div class="bg-red-50 border-l-4 border-red-500 p-6 mb-6 rounded">
                <h4 class="font-bold text-red-800 mb-3 text-xl">
                    <i class="fas fa-exclamation-triangle mr-2"></i>Ameaças às Restingas
                </h4>
                <ul class="space-y-2 text-gray-700">
                    <li><i class="fas fa-building mr-2 text-red-500"></i>Construções irregulares em áreas de preservação</li>
                    <li><i class="fas fa-car mr-2 text-red-500"></i>Tráfego de veículos sobre a vegetação</li>
                    <li><i class="fas fa-fire mr-2 text-red-500"></i>Queimadas criminosas para "limpar" terrenos</li>
                    <li><i class="fas fa-trash mr-2 text-red-500"></i>Descarte de entulho e lixo</li>
                    <li><i class="fas fa-users mr-2 text-red-500"></i>Pisoteamento excessivo por turistas</li>
                </ul>
            </div>
            
            <div class="bg-green-50 border-l-4 border-green-500 p-6 mb-6 rounded">
                <h4 class="font-bold text-green-800 mb-3 text-xl">
                    <i class="fas fa-hand-holding-heart mr-2"></i>Como Você Pode Ajudar
                </h4>
                <ul class="space-y-3 text-gray-700">
                    <li><i class="fas fa-check-circle mr-2 text-green-500"></i>Evite pisar em áreas com vegetação nativa</li>
                    <li><i class="fas fa-check-circle mr-2 text-green-500"></i>Respeite cercamentos e placas de preservação</li>
                    <li><i class="fas fa-check-circle mr-2 text-green-500"></i>Não descarte lixo nas dunas e restingas</li>
                    <li><i class="fas fa-check-circle mr-2 text-green-500"></i>Apoie projetos de revegetação</li>
                    <li><i class="fas fa-check-circle mr-2 text-green-500"></i>Denuncie construções irregulares</li>
                </ul>
            </div>
            
            <div class="bg-blue-50 p-6 rounded-lg">
                <p class="text-lg font-semibold text-blue-900">
                    <i class="fas fa-quote-left mr-2"></i>
                    "As restingas são a primeira linha de defesa do litoral. Preservá-las é garantir a segurança das comunidades costeiras."
                    <i class="fas fa-quote-right ml-2"></i>
                </p>
            </div>
        `
    },
    tema3: {
        title: 'Preservação dos Estuários e Manguezais',
        icon: 'fa-water',
        color: 'text-green-700',
        image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&q=80',
        quote: 'Os manguezais são os berçários da vida marinha.',
        content: `
            <p class="text-lg leading-relaxed mb-6">
                Os manguezais são ecossistemas únicos onde água doce encontra água salgada, criando um ambiente 
                extremamente produtivo. Segundo o <strong>MMA (2023)</strong>, <strong>80% das espécies de importância pesqueira</strong> 
                dependem dos manguezais em alguma fase de sua vida.
            </p>
            
            <div class="bg-green-50 border-l-4 border-green-500 p-6 mb-6 rounded">
                <h4 class="font-bold text-green-800 mb-3 text-xl">
                    <i class="fas fa-seedling mr-2"></i>Importância dos Manguezais
                </h4>
                <ul class="space-y-2 text-gray-700">
                    <li><i class="fas fa-fish mr-2 text-blue-500"></i><strong>Berçário marinho:</strong> Abriga filhotes de peixes, camarões e caranguejos</li>
                    <li><i class="fas fa-shield-alt mr-2 text-teal-500"></i><strong>Proteção costeira:</strong> Reduz impacto de ondas e tempestades</li>
                    <li><i class="fas fa-filter mr-2 text-green-500"></i><strong>Filtragem natural:</strong> Remove poluentes e sedimentos da água</li>
                    <li><i class="fas fa-cloud mr-2 text-gray-500"></i><strong>Sequestro de carbono:</strong> Absorve 4x mais CO₂ que florestas tropicais</li>
                    <li><i class="fas fa-users mr-2 text-orange-500"></i><strong>Sustento econômico:</strong> Garante alimento a milhares de famílias pesqueiras</li>
                </ul>
            </div>
            
            <div class="bg-red-50 border-l-4 border-red-500 p-6 mb-6 rounded">
                <h4 class="font-bold text-red-800 mb-3 text-xl">
                    <i class="fas fa-exclamation-triangle mr-2"></i>Situação Crítica
                </h4>
                <p class="text-gray-700 mb-3">
                    Mais de <strong>25% dos manguezais brasileiros</strong> já foram degradados (<strong>ICMBio, 2024</strong>), 
                    principalmente por:
                </p>
                <ul class="space-y-2 text-gray-700">
                    <li><i class="fas fa-trash mr-2 text-red-500"></i>Despejo de resíduos sólidos e esgoto</li>
                    <li><i class="fas fa-building mr-2 text-red-500"></i>Urbanização irregular em áreas de preservação</li>
                    <li><i class="fas fa-ship mr-2 text-red-500"></i>Turismo náutico sem controle</li>
                    <li><i class="fas fa-tree mr-2 text-red-500"></i>Desmatamento para construção e aquicultura</li>
                    <li><i class="fas fa-oil-can mr-2 text-red-500"></i>Poluição por óleo e produtos químicos</li>
                </ul>
            </div>
            
            <p class="text-lg leading-relaxed mb-6">
                Em Camocim, os manguezais do estuário do Rio Coreaú são fundamentais para a economia local. 
                Eles controlam enchentes, filtram poluentes e garantem alimento através da pesca artesanal.
            </p>
            
            <div class="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6 rounded">
                <h4 class="font-bold text-blue-800 mb-3 text-xl">
                    <i class="fas fa-lightbulb mr-2"></i>Ações de Preservação
                </h4>
                <ul class="space-y-3 text-gray-700">
                    <li><i class="fas fa-check-circle mr-2 text-green-500"></i>Evite descartar lixo nos rios e estuários</li>
                    <li><i class="fas fa-check-circle mr-2 text-green-500"></i>Respeite áreas de defeso e tamanhos mínimos de captura</li>
                    <li><i class="fas fa-check-circle mr-2 text-green-500"></i>Participe de ações de reflorestamento de mangue</li>
                    <li><i class="fas fa-check-circle mr-2 text-green-500"></i>Não navegue em áreas de reprodução</li>
                    <li><i class="fas fa-check-circle mr-2 text-green-500"></i>Denuncie desmatamento ilegal</li>
                    <li><i class="fas fa-check-circle mr-2 text-green-500"></i>Apoie pescadores artesanais locais</li>
                </ul>
            </div>
            
            <div class="bg-yellow-50 p-6 rounded-lg">
                <p class="text-lg font-semibold text-yellow-900">
                    <i class="fas fa-quote-left mr-2"></i>
                    "Proteger os manguezais é proteger o futuro da pesca e da biodiversidade costeira."
                    <i class="fas fa-quote-right ml-2"></i>
                </p>
            </div>
        `
    },
    tema4: {
        title: 'Conservação do Caranguejo-Uçá',
        icon: 'fa-spider',
        color: 'text-orange-700',
        image: 'https://images.unsplash.com/photo-1559666126-84f389727b9a?w=800&q=80',
        quote: 'O Uçá é mais que um caranguejo — é um símbolo da cultura do mangue.',
        content: `
            <p class="text-lg leading-relaxed mb-6">
                O <strong>Caranguejo-Uçá</strong> (<em>Ucides cordatus</em>) é uma espécie essencial para o ecossistema 
                de manguezal e para a economia de comunidades pesqueiras. Durante o período de <strong>defeso</strong>, 
                a captura é proibida para proteger a reprodução da espécie (<strong>Lei 11.959/2009</strong>).
            </p>
            
            <div class="bg-orange-50 border-l-4 border-orange-500 p-6 mb-6 rounded">
                <h4 class="font-bold text-orange-800 mb-3 text-xl">
                    <i class="fas fa-info-circle mr-2"></i>Por Que o Uçá é Importante?
                </h4>
                <ul class="space-y-2 text-gray-700">
                    <li><i class="fas fa-recycle mr-2 text-green-500"></i><strong>Reciclador natural:</strong> Decompõe folhas e matéria orgânica do mangue</li>
                    <li><i class="fas fa-wind mr-2 text-blue-500"></i><strong>Aeração do solo:</strong> Suas tocas permitem circulação de ar e água</li>
                    <li><i class="fas fa-link mr-2 text-teal-500"></i><strong>Cadeia alimentar:</strong> Serve de alimento para aves, peixes e mamíferos</li>
                    <li><i class="fas fa-coins mr-2 text-yellow-600"></i><strong>Economia local:</strong> Fonte de renda para catadores e pescadores</li>
                    <li><i class="fas fa-utensils mr-2 text-red-500"></i><strong>Segurança alimentar:</strong> Proteína acessível para comunidades costeiras</li>
                </ul>
            </div>
            
            <div class="bg-red-50 border-l-4 border-red-500 p-6 mb-6 rounded">
                <h4 class="font-bold text-red-800 mb-3 text-xl">
                    <i class="fas fa-exclamation-triangle mr-2"></i>Ameaças à Espécie
                </h4>
                <p class="text-gray-700 mb-3">
                    De acordo com o <strong>ICMBio</strong>, a pesca irregular ainda causa perdas de até 
                    <strong>20% da população anual</strong> de caranguejos no Nordeste. As principais ameaças são:
                </p>
                <ul class="space-y-2 text-gray-700">
                    <li><i class="fas fa-ban mr-2 text-red-500"></i>Captura durante o período de defeso</li>
                    <li><i class="fas fa-ruler mr-2 text-red-500"></i>Captura de indivíduos abaixo do tamanho mínimo (6 cm)</li>
                    <li><i class="fas fa-vial mr-2 text-red-500"></i>Uso de métodos ilegais (tapamento, gancho, redinha)</li>
                    <li><i class="fas fa-tree mr-2 text-red-500"></i>Destruição do habitat (desmatamento de mangue)</li>
                    <li><i class="fas fa-skull-crossbones mr-2 text-red-500"></i>Poluição por agrotóxicos e metais pesados</li>
                </ul>
            </div>
            
            <div class="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6 rounded">
                <h4 class="font-bold text-blue-800 mb-3 text-xl">
                    <i class="fas fa-calendar-alt mr-2"></i>Período de Defeso
                </h4>
                <p class="text-gray-700 mb-3">
                    O defeso ocorre durante a <strong>"andada"</strong>, quando os caranguejos saem das tocas 
                    para reprodução. Os períodos variam por região, mas geralmente ocorrem entre:
                </p>
                <ul class="space-y-2 text-gray-700">
                    <li><i class="fas fa-moon mr-2 text-purple-500"></i><strong>Verão:</strong> Janeiro a Março (lua cheia e nova)</li>
                    <li><i class="fas fa-moon mr-2 text-purple-500"></i><strong>Outono:</strong> Outubro a Dezembro (lua cheia e nova)</li>
                </ul>
                <p class="text-gray-700 mt-3">
                    <strong>Durante o defeso, a captura, transporte e comercialização são PROIBIDOS por lei.</strong>
                </p>
            </div>
            
            <div class="bg-green-50 border-l-4 border-green-500 p-6 mb-6 rounded">
                <h4 class="font-bold text-green-800 mb-3 text-xl">
                    <i class="fas fa-hand-holding-heart mr-2"></i>Como Contribuir
                </h4>
                <ul class="space-y-3 text-gray-700">
                    <li><i class="fas fa-check-circle mr-2 text-green-500"></i>Respeite o período de defeso - não compre nem consuma</li>
                    <li><i class="fas fa-check-circle mr-2 text-green-500"></i>Não comercialize caranguejos fora da época permitida</li>
                    <li><i class="fas fa-check-circle mr-2 text-green-500"></i>Divulgue informações educativas na comunidade</li>
                    <li><i class="fas fa-check-circle mr-2 text-green-500"></i>Denuncie captura ilegal ao IBAMA (Linha Verde: 0800 61 8080)</li>
                    <li><i class="fas fa-check-circle mr-2 text-green-500"></i>Apoie catadores que respeitam as normas ambientais</li>
                </ul>
            </div>
            
            <div class="bg-purple-50 p-6 rounded-lg">
                <p class="text-lg font-semibold text-purple-900">
                    <i class="fas fa-quote-left mr-2"></i>
                    "Respeitar o defeso hoje é garantir caranguejo na mesa amanhã. É preservar a cultura e a renda do mangue."
                    <i class="fas fa-quote-right ml-2"></i>
                </p>
            </div>
        `
    },
    tema5: {
        title: 'Proteção dos Eolianitos',
        icon: 'fa-gem',
        color: 'text-purple-700',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
        quote: 'Os ventos do passado moldaram as rochas do presente.',
        content: `
            <p class="text-lg leading-relaxed mb-6">
                Os <strong>eolianitos</strong> são formações rochosas únicas, moldadas por ventos e tempo ao longo de 
                milhares de anos. Eles contam a história geológica da região e são testemunhos das mudanças climáticas 
                e do nível do mar no passado.
            </p>
            
            <div class="bg-purple-50 border-l-4 border-purple-500 p-6 mb-6 rounded">
                <h4 class="font-bold text-purple-800 mb-3 text-xl">
                    <i class="fas fa-mountain mr-2"></i>O Que São Eolianitos?
                </h4>
                <p class="text-gray-700 mb-3">
                    Eolianitos são rochas sedimentares formadas pela cimentação de dunas antigas. O processo ocorre quando:
                </p>
                <ul class="space-y-2 text-gray-700">
                    <li><i class="fas fa-wind mr-2 text-blue-400"></i>Grãos de areia são depositados pelo vento</li>
                    <li><i class="fas fa-tint mr-2 text-blue-500"></i>Água da chuva dissolve carbonato de cálcio de conchas</li>
                    <li><i class="fas fa-link mr-2 text-gray-500"></i>O carbonato age como "cimento" entre os grãos</li>
                    <li><i class="fas fa-clock mr-2 text-yellow-600"></i>Ao longo de milhares de anos, a duna se solidifica em rocha</li>
                </ul>
            </div>
            
            <div class="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6 rounded">
                <h4 class="font-bold text-blue-800 mb-3 text-xl">
                    <i class="fas fa-star mr-2"></i>Importância Científica e Cultural
                </h4>
                <p class="text-gray-700 mb-3">
                    Segundo o <strong>CPRM (2023)</strong>, o Ceará abriga mais de <strong>60% dos eolianitos preservados 
                    do Nordeste</strong>. Eles são importantes porque:
                </p>
                <ul class="space-y-2 text-gray-700">
                    <li><i class="fas fa-book mr-2 text-orange-500"></i><strong>Registro geológico:</strong> Revelam mudanças climáticas antigas</li>
                    <li><i class="fas fa-water mr-2 text-blue-500"></i><strong>Nível do mar:</strong> Indicam oscilações históricas do oceano</li>
                    <li><i class="fas fa-bone mr-2 text-brown-500"></i><strong>Fósseis:</strong> Podem conter restos de organismos antigos</li>
                    <li><i class="fas fa-landmark mr-2 text-gray-600"></i><strong>Patrimônio:</strong> Fazem parte da identidade geológica local</li>
                    <li><i class="fas fa-graduation-cap mr-2 text-green-500"></i><strong>Educação:</strong> Excelentes para ensino de geologia</li>
                </ul>
            </div>
            
            <div class="bg-red-50 border-l-4 border-red-500 p-6 mb-6 rounded">
                <h4 class="font-bold text-red-800 mb-3 text-xl">
                    <i class="fas fa-exclamation-triangle mr-2"></i>Ameaças aos Eolianitos
                </h4>
                <ul class="space-y-2 text-gray-700">
                    <li><i class="fas fa-hammer mr-2 text-red-500"></i>Coleta irregular de fragmentos como "souvenirs"</li>
                    <li><i class="fas fa-hiking mr-2 text-red-500"></i>Escalada sem autorização que causa erosão</li>
                    <li><i class="fas fa-spray-can mr-2 text-red-500"></i>Pichações e vandalismo</li>
                    <li><i class="fas fa-building mr-2 text-red-500"></i>Construções próximas que alteram a paisagem</li>
                    <li><i class="fas fa-car mr-2 text-red-500"></i>Tráfego de veículos sobre as formações</li>
                </ul>
            </div>
            
            <p class="text-lg leading-relaxed mb-6">
                O turismo e a coleta irregular ameaçam a integridade dessas formações únicas. 
                Uma vez danificados, eolianitos levam milhares de anos para se formar novamente - 
                ou seja, <strong>a perda é irreversível</strong>.
            </p>
            
            <div class="bg-green-50 border-l-4 border-green-500 p-6 mb-6 rounded">
                <h4 class="font-bold text-green-800 mb-3 text-xl">
                    <i class="fas fa-shield-alt mr-2"></i>Como Proteger
                </h4>
                <ul class="space-y-3 text-gray-700">
                    <li><i class="fas fa-check-circle mr-2 text-green-500"></i>Não escale ou remova fragmentos das rochas</li>
                    <li><i class="fas fa-check-circle mr-2 text-green-500"></i>Observe e fotografe, mas não toque</li>
                    <li><i class="fas fa-check-circle mr-2 text-green-500"></i>Não faça pichações ou inscrições</li>
                    <li><i class="fas fa-check-circle mr-2 text-green-500"></i>Apoie a criação de áreas de proteção geológica</li>
                    <li><i class="fas fa-check-circle mr-2 text-green-500"></i>Eduque outros visitantes sobre a importância</li>
                    <li><i class="fas fa-check-circle mr-2 text-green-500"></i>Denuncie vandalismo às autoridades</li>
                </ul>
            </div>
            
            <div class="bg-indigo-50 p-6 rounded-lg">
                <p class="text-lg font-semibold text-indigo-900">
                    <i class="fas fa-quote-left mr-2"></i>
                    "Cada eolianito é uma página do livro da Terra. Preservá-los é manter viva a memória geológica do planeta."
                    <i class="fas fa-quote-right ml-2"></i>
                </p>
            </div>
        `
    },
    tema6: {
        title: 'Combate ao Hábito de Levar Conchas e Animais',
        icon: 'fa-fish',
        color: 'text-teal-700',
        image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
        quote: 'O que é lembrança para uns, é abrigo para outros.',
        content: `
            <p class="text-lg leading-relaxed mb-6">
                Levar conchas, estrelas-do-mar, ouriços e outros animais marinhos pode parecer inofensivo, 
                mas essa prática <strong>altera o equilíbrio ecológico</strong> e reduz a disponibilidade de 
                abrigo para espécies marinhas. O <strong>IBAMA</strong> considera essa prática uma 
                <strong>infração ambiental</strong> (<strong>Lei 9.605/98</strong>).
            </p>
            
            <div class="bg-teal-50 border-l-4 border-teal-500 p-6 mb-6 rounded">
                <h4 class="font-bold text-teal-800 mb-3 text-xl">
                    <i class="fas fa-home mr-2"></i>Por Que as Conchas São Importantes?
                </h4>
                <p class="text-gray-700 mb-3">
                    Conchas vazias não são apenas "lixo" do mar. Elas desempenham funções vitais:
                </p>
                <ul class="space-y-2 text-gray-700">
                    <li><i class="fas fa-shield-alt mr-2 text-blue-500"></i><strong>Abrigo:</strong> Caranguejos-eremitas usam conchas como proteção</li>
                    <li><i class="fas fa-egg mr-2 text-yellow-500"></i><strong>Reprodução:</strong> Peixes depositam ovos em conchas</li>
                    <li><i class="fas fa-recycle mr-2 text-green-500"></i><strong>Reciclagem:</strong> Liberam carbonato de cálcio para o ecossistema</li>
                    <li><i class="fas fa-anchor mr-2 text-gray-600"></i><strong>Substrato:</strong> Servem de base para algas e corais</li>
                    <li><i class="fas fa-balance-scale mr-2 text-purple-500"></i><strong>pH da água:</strong> Ajudam a regular a acidez oceânica</li>
                </ul>
            </div>
            
            <div class="bg-red-50 border-l-4 border-red-500 p-6 mb-6 rounded">
                <h4 class="font-bold text-red-800 mb-3 text-xl">
                    <i class="fas fa-exclamation-triangle mr-2"></i>Impactos da Coleta
                </h4>
                <p class="text-gray-700 mb-3">
                    Quando milhares de turistas coletam "apenas uma concha", o impacto é devastador:
                </p>
                <ul class="space-y-2 text-gray-700">
                    <li><i class="fas fa-home mr-2 text-red-500"></i>Caranguejos-eremitas ficam sem abrigo e morrem expostos</li>
                    <li><i class="fas fa-fish mr-2 text-red-500"></i>Redução de locais de desova para peixes</li>
                    <li><i class="fas fa-flask mr-2 text-red-500"></i>Diminuição do carbonato de cálcio disponível</li>
                    <li><i class="fas fa-link-slash mr-2 text-red-500"></i>Quebra da cadeia alimentar marinha</li>
                    <li><i class="fas fa-chart-line mr-2 text-red-500"></i>Redução da biodiversidade local</li>
                </ul>
            </div>
            
            <div class="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6 rounded">
                <h4 class="font-bold text-yellow-800 mb-3 text-xl">
                    <i class="fas fa-gavel mr-2"></i>Aspectos Legais
                </h4>
                <p class="text-gray-700 mb-3">
                    A <strong>Lei 9.605/98 (Lei de Crimes Ambientais)</strong> estabelece:
                </p>
                <ul class="space-y-2 text-gray-700">
                    <li><i class="fas fa-ban mr-2 text-red-500"></i>É crime coletar, transportar ou comercializar fauna silvestre sem autorização</li>
                    <li><i class="fas fa-money-bill-wave mr-2 text-orange-500"></i>Multa de <strong>R$ 500 a R$ 5.000</strong> por espécime coletado</li>
                    <li><i class="fas fa-handcuffs mr-2 text-red-700"></i>Pena de detenção de 6 meses a 1 ano em casos graves</li>
                    <li><i class="fas fa-box mr-2 text-gray-600"></i>Apreensão do material coletado</li>
                </ul>
                <p class="text-gray-700 mt-3">
                    <strong>Denúncias podem ser feitas ao IBAMA: Linha Verde 0800 61 8080</strong>
                </p>
            </div>
            
            <div class="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6 rounded">
                <h4 class="font-bold text-blue-800 mb-3 text-xl">
                    <i class="fas fa-camera mr-2"></i>Alternativas Sustentáveis
                </h4>
                <p class="text-gray-700 mb-3">
                    Você pode guardar memórias da praia sem prejudicar o ambiente:
                </p>
                <ul class="space-y-3 text-gray-700">
                    <li><i class="fas fa-camera-retro mr-2 text-blue-500"></i><strong>Fotografe:</strong> Capture a beleza sem remover nada</li>
                    <li><i class="fas fa-pencil-alt mr-2 text-green-500"></i><strong>Desenhe:</strong> Faça esboços das conchas e animais</li>
                    <li><i class="fas fa-book mr-2 text-purple-500"></i><strong>Registre:</strong> Anote em um diário suas descobertas</li>
                    <li><i class="fas fa-video mr-2 text-red-500"></i><strong>Filme:</strong> Grave vídeos da vida marinha</li>
                    <li><i class="fas fa-shopping-bag mr-2 text-orange-500"></i><strong>Compre artesanato:</strong> Adquira souvenirs sustentáveis de artesãos locais</li>
                </ul>
            </div>
            
            <div class="bg-green-50 border-l-4 border-green-500 p-6 mb-6 rounded">
                <h4 class="font-bold text-green-800 mb-3 text-xl">
                    <i class="fas fa-hand-holding-heart mr-2"></i>Seja um Turista Consciente
                </h4>
                <ul class="space-y-3 text-gray-700">
                    <li><i class="fas fa-check-circle mr-2 text-green-500"></i>Observe, admire, mas deixe tudo no lugar</li>
                    <li><i class="fas fa-check-circle mr-2 text-green-500"></i>Eduque crianças sobre a importância da preservação</li>
                    <li><i class="fas fa-check-circle mr-2 text-green-500"></i>Não compre produtos feitos com conchas ou animais marinhos</li>
                    <li><i class="fas fa-check-circle mr-2 text-green-500"></i>Denuncie comércio ilegal de fauna marinha</li>
                    <li><i class="fas fa-check-circle mr-2 text-green-500"></i>Compartilhe conhecimento nas redes sociais</li>
                </ul>
            </div>
            
            <div class="bg-pink-50 p-6 rounded-lg">
                <p class="text-lg font-semibold text-pink-900">
                    <i class="fas fa-quote-left mr-2"></i>
                    "A melhor lembrança que você pode levar da praia é o respeito pela vida marinha. Deixe apenas pegadas, leve apenas memórias."
                    <i class="fas fa-quote-right ml-2"></i>
                </p>
            </div>
        `
    }
};
