const BASE_SOURCE = "Questão autoral FGV/PCPR - padrão FGV validado por provas policiais e periciais";
const LETTERS = ["A", "B", "C", "D", "E"];

function q(chapterId, source, prompt, options, answer, thinking, correct, explanations, trap) {
  return {
    chapterId,
    source,
    prompt,
    options,
    answer,
    thinking,
    correct,
    explanations,
    trap
  };
}

const rawFgvQuestionBank = [
  q("001", BASE_SOURCE, "Em uma questão de interpretação, a alternativa correta afirma uma consequência que não está literalmente escrita, mas decorre de duas informações do texto. Nessa situação, o candidato deve:", {
    A: "marcar a alternativa apenas se ela repetir palavras usadas no texto.",
    B: "recusar a alternativa, pois inferência nunca é aceita em prova objetiva.",
    C: "verificar se a conclusão decorre logicamente do texto, sem acrescentar dado externo.",
    D: "preferir a alternativa mais ampla, ainda que ultrapasse o trecho.",
    E: "considerar correta a opção com linguagem mais técnica."
  }, "C", "A FGV costuma cobrar inferência controlada: ela pode não estar literal, mas precisa nascer do texto.", "A alternativa C está certa porque permite inferência, mas exige lastro textual e impede achismo.", {
    A: "Incorreta. Repetição literal nem sempre responde interpretação; muitas respostas corretas são paráfrases.",
    B: "Incorreta. Inferência é cobrável, desde que autorizada pelo texto.",
    C: "Correta. A conclusão deve ser compatível com as informações textuais.",
    D: "Incorreta. Alternativa ampla demais costuma extrapolar.",
    E: "Incorreta. Linguagem técnica não torna a resposta verdadeira."
  }, "Confundir inferência legítima com extrapolação."),

  q("002", BASE_SOURCE, "No trecho 'O perito recolheu o vestígio e o encaminhou ao laboratório', o pronome 'o' retoma:", {
    A: "o perito.",
    B: "o vestígio.",
    C: "o laboratório.",
    D: "o recolhimento.",
    E: "o encaminhamento."
  }, "B", "Em coesão referencial, volte ao antecedente compatível em gênero, número e sentido.", "A alternativa B está certa porque 'o' retoma o termo masculino singular que pode ser encaminhado ao laboratório: vestígio.", {
    A: "Incorreta. O perito é quem pratica a ação; não é encaminhado ao laboratório.",
    B: "Correta. O pronome retoma 'vestígio'.",
    C: "Incorreta. Laboratório é destino, não objeto retomado.",
    D: "Incorreta. Recolhimento é ação abstrata e não aparece como antecedente direto.",
    E: "Incorreta. Encaminhamento é a ação verbal, não o objeto."
  }, "Escolher o substantivo mais próximo sem testar o sentido."),

  q("003", BASE_SOURCE, "Um texto que expõe uma tese, apresenta fundamentos e tenta convencer o leitor pertence predominantemente ao modo:", {
    A: "narrativo.",
    B: "descritivo.",
    C: "injuntivo.",
    D: "argumentativo.",
    E: "dialogal."
  }, "D", "A FGV pede a função dominante do texto, não a presença eventual de um trecho narrativo ou descritivo.", "A alternativa D está certa porque tese, fundamentos e convencimento são marcas de argumentação.", {
    A: "Incorreta. Narração organiza acontecimentos em sequência.",
    B: "Incorreta. Descrição caracteriza seres, cenas ou objetos.",
    C: "Incorreta. Injunção orienta conduta, como manual ou ordem.",
    D: "Correta. Argumentação defende ponto de vista.",
    E: "Incorreta. Diálogo é forma de interação, não o modo predominante descrito."
  }, "Confundir exemplo narrativo dentro do texto com predominância narrativa."),

  q("004", BASE_SOURCE, "Assinale a opção em que a vírgula separa corretamente uma expressão adverbial deslocada para o início da frase.", {
    A: "O delegado, instaurou o inquérito após a notícia do crime.",
    B: "Após a preservação do local, os vestígios foram fotografados.",
    C: "Os papiloscopistas, analisaram as impressões latentes.",
    D: "A prova pericial depende, de método e documentação.",
    E: "O laudo, foi juntado aos autos."
  }, "B", "Localize sujeito, verbo e termo deslocado. A vírgula pode isolar adjunto adverbial anteposto, mas não pode separar sujeito do verbo.", "A alternativa B está certa porque a expressão 'Após a preservação do local' vem deslocada antes da oração principal.", {
    A: "Incorreta. A vírgula separa sujeito e verbo.",
    B: "Correta. A vírgula marca o deslocamento adverbial inicial.",
    C: "Incorreta. A vírgula separa sujeito e verbo.",
    D: "Incorreta. A vírgula separa verbo e complemento.",
    E: "Incorreta. A vírgula separa sujeito e locução verbal."
  }, "A FGV troca vírgula legítima por vírgula entre sujeito e predicado."),

  q("005", BASE_SOURCE, "Na frase 'A coleta cuidadosa preserva a prova', a palavra 'cuidadosa' exerce função de:", {
    A: "substantivo, pois nomeia uma coisa.",
    B: "advérbio, pois modifica o verbo preservar.",
    C: "adjetivo, pois caracteriza o substantivo coleta.",
    D: "pronome, pois retoma prova.",
    E: "preposição, pois liga termos."
  }, "C", "Classe gramatical depende da função no trecho. Pergunte: a palavra caracteriza quem?", "A alternativa C está certa porque 'cuidadosa' qualifica o substantivo 'coleta'.", {
    A: "Incorreta. A palavra não nomeia entidade; qualifica uma entidade.",
    B: "Incorreta. Não modifica o verbo; modifica 'coleta'.",
    C: "Correta. É adjetivo em função qualificadora.",
    D: "Incorreta. Não retoma termo anterior.",
    E: "Incorreta. Não estabelece relação preposicional."
  }, "Decorar classe sem olhar a função sintática no contexto."),

  q("006", BASE_SOURCE, "Assinale a frase em que o acento indicativo de crase é obrigatório.", {
    A: "O laudo foi entregue a autoridade competente.",
    B: "O documento foi anexado a este procedimento.",
    C: "A equipe retornou a Curitiba.",
    D: "O acesso foi dado a qualquer servidor.",
    E: "A perícia começou a partir das nove horas."
  }, "A", "Teste regência e artigo feminino: entregar algo a + a autoridade = à autoridade.", "A alternativa A está certa porque há preposição exigida pelo verbo e artigo feminino antes de 'autoridade'.", {
    A: "Correta. A forma adequada é 'à autoridade competente'.",
    B: "Incorreta. 'Este' não admite artigo feminino antes dele.",
    C: "Incorreta. Nome de cidade geralmente não recebe artigo; sem artigo não há crase.",
    D: "Incorreta. 'Qualquer' impede o artigo definido.",
    E: "Incorreta. Antes de verbo não há crase."
  }, "Aplicar crase por haver palavra feminina próxima, sem testar artigo."),

  q("007", BASE_SOURCE, "A negação lógica de 'Todos os vestígios foram fotografados' é:", {
    A: "Nenhum vestígio foi fotografado.",
    B: "Todos os vestígios não foram fotografados.",
    C: "Algum vestígio não foi fotografado.",
    D: "Algum vestígio foi fotografado.",
    E: "Não existem vestígios."
  }, "C", "Negar 'todo' exige encontrar pelo menos uma exceção.", "A alternativa C está certa porque basta um vestígio não fotografado para tornar falsa a afirmação original.", {
    A: "Incorreta. É negação forte demais.",
    B: "Incorreta. A redação é ambígua e tende a negar todos, não apenas um.",
    C: "Correta. 'Algum não' é a negação de 'todo'.",
    D: "Incorreta. Pode ser verdadeiro junto com a frase original.",
    E: "Incorreta. Altera a existência do conjunto, não a propriedade."
  }, "Trocar 'algum não' por 'nenhum'."),

  q("008", BASE_SOURCE, "Uma taxa de acerto passou de 60% para 75%. O aumento foi de:", {
    A: "15 pontos percentuais.",
    B: "15%.",
    C: "25 pontos percentuais.",
    D: "35%.",
    E: "75 pontos percentuais."
  }, "A", "Compare percentuais como pontos percentuais quando a pergunta fala da diferença direta entre taxas.", "A alternativa A está certa porque 75% - 60% = 15 pontos percentuais.", {
    A: "Correta. A diferença entre taxas é medida em pontos percentuais.",
    B: "Incorreta. 15% seria variação relativa se calculada sobre 60%, o que daria outro resultado.",
    C: "Incorreta. 25% é a variação relativa aproximada, não pontos percentuais.",
    D: "Incorreta. Não corresponde nem à diferença absoluta nem à relativa.",
    E: "Incorreta. Confunde valor final com aumento."
  }, "Confundir percentual com ponto percentual."),

  q("009", BASE_SOURCE, "Em um gráfico de barras, a escala vertical aumenta de 5 em 5 unidades. Uma barra alcança a terceira marca acima do zero. O valor representado é:", {
    A: "3.",
    B: "5.",
    C: "10.",
    D: "15.",
    E: "25."
  }, "D", "Antes de comparar barras, leia a escala do eixo.", "A alternativa D está certa porque a terceira marca, em escala de 5, vale 15.", {
    A: "Incorreta. Conta marcas, mas ignora a escala.",
    B: "Incorreta. É apenas a primeira marca.",
    C: "Incorreta. É a segunda marca.",
    D: "Correta. Três intervalos de 5 resultam em 15.",
    E: "Incorreta. Seria a quinta marca."
  }, "Ler altura visual sem conferir escala."),

  q("010", BASE_SOURCE, "Uma senha provisória deve ter duas letras distintas escolhidas entre A, B e C, seguidas de um algarismo entre 1 e 4. O número de senhas possíveis é:", {
    A: "6.",
    B: "8.",
    C: "12.",
    D: "18.",
    E: "24."
  }, "E", "Use princípio multiplicativo e observe a restrição 'distintas'.", "A alternativa E está certa porque há 3 escolhas para a primeira letra, 2 para a segunda e 4 para o algarismo: 3 x 2 x 4 = 24.", {
    A: "Incorreta. Considera apenas as letras.",
    B: "Incorreta. Ignora parte das combinações das letras.",
    C: "Incorreta. Trata as duas letras como uma única escolha de 3 possibilidades.",
    D: "Incorreta. Não aplica corretamente o algarismo.",
    E: "Correta. Multiplica todas as etapas com a restrição."
  }, "Esquecer que a ordem das letras importa na senha."),

  q("011", BASE_SOURCE, "Em questão sobre a formação territorial do Paraná, a alternativa mais segura é a que relaciona ocupação, economia e região. Assinale a associação adequada.", {
    A: "Tropeirismo, Campos Gerais e integração de rotas entre Sul e Sudeste.",
    B: "Ciclo da borracha, litoral paranaense e urbanização de Foz do Iguaçu.",
    C: "Mineração de ouro, Norte do Paraná e colonização japonesa predominante.",
    D: "Pecuária pantaneira, Serra do Mar e expansão cafeeira.",
    E: "Cana-de-açúcar colonial, Oeste do Paraná e fronteira com o Uruguai."
  }, "A", "A FGV tende a cobrar associação regional, não dado solto.", "A alternativa A está certa porque o tropeirismo é elemento histórico ligado aos Campos Gerais e às rotas de circulação.", {
    A: "Correta. A associação histórica e regional é coerente.",
    B: "Incorreta. O ciclo da borracha não estrutura a formação paranaense.",
    C: "Incorreta. Mistura mineração aurífera com Norte cafeeiro.",
    D: "Incorreta. Pantanal não é região paranaense.",
    E: "Incorreta. O Paraná não faz fronteira com o Uruguai."
  }, "Trocar processo histórico de outro Estado por processo paranaense."),

  q("012", BASE_SOURCE, "Para responder questão atual sobre indicadores sociais do Paraná, o procedimento mais adequado é:", {
    A: "memorizar qualquer número encontrado em apostila antiga.",
    B: "usar apenas opinião jornalística, pois indicadores não mudam.",
    C: "consultar fonte oficial, como IBGE, IPARDES ou governo estadual, e observar a data.",
    D: "aplicar médias nacionais sem verificar o recorte estadual.",
    E: "considerar que todo município paranaense tem o mesmo perfil socioeconômico."
  }, "C", "Dados regionais mudam; fonte e data importam.", "A alternativa C está certa porque combina fonte oficial com recorte temporal.", {
    A: "Incorreta. Material antigo pode estar desatualizado.",
    B: "Incorreta. Opinião não substitui indicador oficial.",
    C: "Correta. Fonte oficial e data são indispensáveis.",
    D: "Incorreta. Média nacional não responde necessariamente ao Paraná.",
    E: "Incorreta. O Estado tem diferenças regionais relevantes."
  }, "Responder atualidade por memória sem fonte."),

  q("013", BASE_SOURCE, "Em um computador, a memória RAM e o SSD diferenciam-se porque:", {
    A: "a RAM é armazenamento permanente e o SSD é volátil.",
    B: "ambos perdem os dados quando o equipamento é desligado.",
    C: "a RAM é usada na execução temporária de programas e o SSD armazena dados de forma não volátil.",
    D: "o SSD substitui o processador no processamento lógico.",
    E: "a RAM é periférico de saída e o SSD é periférico de entrada."
  }, "C", "A banca cobra função do componente: executar temporariamente ou armazenar de modo permanente.", "A alternativa C está certa porque RAM é volátil e o SSD é armazenamento de massa não volátil.", {
    A: "Incorreta. Inverte as características.",
    B: "Incorreta. SSD preserva dados sem energia.",
    C: "Correta. Resume a diferença funcional.",
    D: "Incorreta. SSD não executa instruções como CPU.",
    E: "Incorreta. São componentes de memória/armazenamento, não periféricos nesses termos."
  }, "Chamar tudo de 'memória' e ignorar volatilidade."),

  q("014", BASE_SOURCE, "No Windows, um usuário precisa impedir que um aplicativo acesse a câmera sem autorização. O caminho conceitual correto é revisar:", {
    A: "as permissões de privacidade do sistema.",
    B: "a resolução do monitor.",
    C: "a fragmentação do SSD.",
    D: "a quantidade de abas do navegador.",
    E: "a extensão do arquivo de imagem."
  }, "A", "Sistemas modernos controlam acesso a câmera, microfone e localização por permissões.", "A alternativa A está certa porque acesso à câmera é controle de privacidade/permissão do aplicativo.", {
    A: "Correta. Permissões definem o que o aplicativo pode acessar.",
    B: "Incorreta. Resolução não controla acesso a dispositivo.",
    C: "Incorreta. Fragmentação não resolve permissão de câmera.",
    D: "Incorreta. Abas do navegador não são regra geral de permissão do sistema.",
    E: "Incorreta. Extensão de arquivo não controla hardware."
  }, "Confundir configuração visual com configuração de segurança."),

  q("015", BASE_SOURCE, "Ao digitar `www.exemplo.gov.br`, o serviço responsável por traduzir esse nome para um endereço IP é:", {
    A: "HTTP.",
    B: "DNS.",
    C: "VPN.",
    D: "HTML.",
    E: "SMTP."
  }, "B", "Separe função de cada tecnologia: nome, protocolo web, túnel, linguagem ou e-mail.", "A alternativa B está certa porque DNS resolve nomes de domínio em endereços IP.", {
    A: "Incorreta. HTTP é protocolo de transferência de páginas.",
    B: "Correta. DNS faz resolução de nomes.",
    C: "Incorreta. VPN cria túnel de comunicação.",
    D: "Incorreta. HTML estrutura conteúdo de página.",
    E: "Incorreta. SMTP é usado no envio de e-mails."
  }, "Trocar serviço de nomes por protocolo de navegação."),

  q("016", BASE_SOURCE, "Um arquivo de laudo foi alterado sem autorização durante o trâmite interno. O princípio da segurança da informação diretamente comprometido é:", {
    A: "confidencialidade.",
    B: "integridade.",
    C: "disponibilidade.",
    D: "irretratabilidade física.",
    E: "usabilidade."
  }, "B", "A tríade clássica pergunta: segredo, correção ou acesso?", "A alternativa B está certa porque integridade protege a exatidão e não alteração indevida dos dados.", {
    A: "Incorreta. Confidencialidade trata de acesso não autorizado ao conteúdo.",
    B: "Correta. Alteração indevida atinge integridade.",
    C: "Incorreta. Disponibilidade trata de acesso quando necessário.",
    D: "Incorreta. Não é elemento clássico da tríade.",
    E: "Incorreta. Usabilidade não é o princípio violado no caso."
  }, "Marcar confidencialidade sempre que há documento sensível."),

  q("017", BASE_SOURCE, "Em investigação digital, a coleta de um print de tela, isoladamente, é frágil principalmente porque:", {
    A: "todo print é proibido pela legislação brasileira.",
    B: "a imagem não precisa de contexto, metadados, preservação e rastreabilidade.",
    C: "pode não preservar origem, integridade, metadados e cadeia de custódia da evidência.",
    D: "prints só têm validade quando impressos em papel.",
    E: "a evidência digital dispensa documentação."
  }, "C", "A FGV tende a separar registro informal de preservação técnica.", "A alternativa C está certa porque evidência digital exige integridade, origem e cadeia de custódia documentada.", {
    A: "Incorreta. O problema não é proibição absoluta.",
    B: "Incorreta. A frase nega justamente os cuidados necessários.",
    C: "Correta. O print isolado pode perder rastreabilidade e contexto.",
    D: "Incorreta. Impressão em papel não resolve autenticidade.",
    E: "Incorreta. Evidência digital exige documentação rigorosa."
  }, "Achar que visualizar a tela equivale a preservar a evidência."),

  q("018", BASE_SOURCE, "No tratamento de dados biométricos por órgão público, a LGPD exige atenção especial porque dado biométrico é:", {
    A: "sempre dado anonimizado, sem risco ao titular.",
    B: "dado pessoal sensível quando vinculado a uma pessoa natural.",
    C: "informação pública irrestrita por envolver segurança.",
    D: "dado sem proteção quando coletado por servidor público.",
    E: "registro técnico fora do conceito de dado pessoal."
  }, "B", "Biometria individualiza pessoas; a LGPD trata esse dado com camada reforçada.", "A alternativa B está certa porque dado biométrico ligado a pessoa natural é dado pessoal sensível.", {
    A: "Incorreta. Biometria não é automaticamente anonimizada.",
    B: "Correta. A LGPD classifica dado biométrico como sensível em contexto de identificação.",
    C: "Incorreta. Segurança pública não torna o dado irrestrito.",
    D: "Incorreta. Coleta pública também deve observar finalidade e base legal.",
    E: "Incorreta. É dado pessoal quando identifica ou pode identificar."
  }, "Tratar dado biométrico como simples dado técnico."),

  q("019", BASE_SOURCE, "A papiloscopia baseia-se principalmente nos princípios de:", {
    A: "mutabilidade, aleatoriedade e publicidade.",
    B: "variabilidade, permanência e classificabilidade dos desenhos papilares.",
    C: "semelhança facial, estatura e idade aparente.",
    D: "grupo sanguíneo, altura e peso.",
    E: "assinatura, fotografia e reconhecimento informal."
  }, "B", "A questão cobra o núcleo clássico da identificação papiloscópica.", "A alternativa B está certa porque reúne os fundamentos usados para individualizar e classificar impressões papilares.", {
    A: "Incorreta. Mutabilidade contraria a permanência esperada dos desenhos.",
    B: "Correta. São princípios clássicos da papiloscopia.",
    C: "Incorreta. Aparência facial não é papiloscopia.",
    D: "Incorreta. Esses dados não individualizam como desenho papilar.",
    E: "Incorreta. Reconhecimento informal não substitui confronto técnico."
  }, "Confundir identificação técnica com reconhecimento visual."),

  q("020", BASE_SOURCE, "Em identificação humana, a antropologia forense, quando comparada ao DNA, normalmente:", {
    A: "individualiza sempre com o mesmo grau de certeza do DNA.",
    B: "estima perfil biológico, como sexo, idade aproximada, ancestralidade e estatura, conforme o material disponível.",
    C: "dispensa análise óssea.",
    D: "serve apenas para documentos falsos.",
    E: "não tem utilidade quando há restos humanos."
  }, "B", "Diferencie estimativa de perfil biológico e individualização genética.", "A alternativa B está certa porque a antropologia trabalha com inferências técnicas sobre restos humanos.", {
    A: "Incorreta. Antropologia nem sempre individualiza como DNA comparativo.",
    B: "Correta. Resume o papel da antropologia forense.",
    C: "Incorreta. Ossos são material central da análise antropológica.",
    D: "Incorreta. Documento falso é campo de documentoscopia.",
    E: "Incorreta. Restos humanos são justamente cenário de aplicação."
  }, "Atribuir a todo método de identificação a mesma força do DNA."),

  q("021", BASE_SOURCE, "Lesão produzida por projétil de arma de fogo deve ser analisada considerando, entre outros elementos:", {
    A: "apenas a vontade declarada da vítima.",
    B: "trajetória, distância aproximada, orifícios, resíduos e compatibilidade com arma/munição.",
    C: "somente o calibre informado por testemunha.",
    D: "apenas a cor da roupa.",
    E: "exclusivamente o número de fotografias anexadas."
  }, "B", "Balística e traumatologia exigem mecanismo, vestígios e compatibilidade.", "A alternativa B está certa porque reúne elementos periciais relevantes para interpretar disparo.", {
    A: "Incorreta. Declaração não substitui exame pericial.",
    B: "Correta. A análise cruza sinais lesionais e vestígios balísticos.",
    C: "Incorreta. Testemunho sobre calibre não basta.",
    D: "Incorreta. Roupa pode ser relevante, mas não isoladamente.",
    E: "Incorreta. Quantidade de fotos não substitui conteúdo técnico."
  }, "Reduzir balística a uma informação isolada."),

  q("022", BASE_SOURCE, "A rigidez cadavérica, os livores hipostáticos e o resfriamento do corpo são importantes porque auxiliam:", {
    A: "a estimar fenômenos pós-morte e intervalo aproximado desde o óbito.",
    B: "a provar sempre a identidade civil da vítima.",
    C: "a substituir integralmente a necropsia.",
    D: "a dispensar cadeia de custódia.",
    E: "a determinar automaticamente autoria do crime."
  }, "A", "Tanatologia cobra sequência e utilidade dos fenômenos cadavéricos.", "A alternativa A está certa porque esses fenômenos ajudam na análise cronotanatológica.", {
    A: "Correta. São sinais úteis para estimar circunstâncias pós-morte.",
    B: "Incorreta. Identidade civil exige outros métodos.",
    C: "Incorreta. Não substituem necropsia quando necessária.",
    D: "Incorreta. Vestígios relacionados ao corpo também precisam de preservação.",
    E: "Incorreta. Fenômeno cadavérico não identifica autor automaticamente."
  }, "Confundir causa, tempo e autoria."),

  q("023", BASE_SOURCE, "No local de crime, a primeira preocupação técnica deve ser:", {
    A: "recolher todos os objetos rapidamente, antes de fotografar.",
    B: "permitir circulação livre para identificar testemunhas.",
    C: "preservar, isolar e documentar o local antes da coleta.",
    D: "limpar a área para facilitar o trabalho pericial.",
    E: "descartar vestígios pequenos para evitar excesso de material."
  }, "C", "A FGV cobra ordem lógica: preservar, fixar/documentar e só depois coletar.", "A alternativa C está certa porque evita contaminação e mantém rastreabilidade.", {
    A: "Incorreta. Coleta antes da documentação pode destruir contexto.",
    B: "Incorreta. Circulação livre contamina o local.",
    C: "Correta. Preservação e documentação antecedem coleta.",
    D: "Incorreta. Limpeza destrói vestígios.",
    E: "Incorreta. Vestígios pequenos podem ser decisivos."
  }, "Apressar coleta e perder contexto probatório."),

  q("024", BASE_SOURCE, "Na documentoscopia, a falsidade material distingue-se da falsidade ideológica porque:", {
    A: "a material recai sobre alteração física ou fabricação do documento; a ideológica recai sobre declaração falsa em documento formalmente verdadeiro.",
    B: "a material sempre envolve assinatura verdadeira.",
    C: "a ideológica exige papel falsificado.",
    D: "as duas são sinônimas em perícia documental.",
    E: "a ideológica só existe em documento digital."
  }, "A", "Compare suporte/forma do documento com conteúdo declarado.", "A alternativa A está certa porque separa adulteração material de falsidade no conteúdo.", {
    A: "Correta. A distinção é forma material versus conteúdo ideologicamente falso.",
    B: "Incorreta. Falsidade material pode envolver assinatura falsa ou alteração.",
    C: "Incorreta. Papel falso não é requisito da falsidade ideológica.",
    D: "Incorreta. São categorias diferentes.",
    E: "Incorreta. Não se limita a documento digital."
  }, "Tratar todo documento falso como a mesma modalidade."),

  q("025", BASE_SOURCE, "A criminologia, em sua concepção moderna, é melhor caracterizada como ciência:", {
    A: "normativa e exclusivamente dogmática.",
    B: "empírica e interdisciplinar, voltada ao crime, criminoso, vítima e controle social.",
    C: "restrita à aplicação de penas pelo juiz.",
    D: "idêntica ao Direito Penal.",
    E: "limitada à estatística policial."
  }, "B", "A FGV costuma perguntar objeto e método da criminologia.", "A alternativa B está certa porque reúne método empírico, interdisciplinaridade e objetos clássicos.", {
    A: "Incorreta. Criminologia não é apenas norma; observa fenômenos.",
    B: "Correta. Define método e objetos centrais.",
    C: "Incorreta. Aplicação de pena é campo jurídico-penal.",
    D: "Incorreta. Direito Penal e criminologia dialogam, mas não são iguais.",
    E: "Incorreta. Estatística é ferramenta, não limite da ciência."
  }, "Confundir criminologia com dogmática penal."),

  q("026", BASE_SOURCE, "A expressão 'cifra negra' da criminalidade refere-se:", {
    A: "aos crimes registrados duas vezes.",
    B: "à criminalidade que não chega ao conhecimento oficial do sistema de justiça.",
    C: "a crimes praticados apenas pela internet.",
    D: "a delitos necessariamente violentos.",
    E: "à soma das condenações transitadas em julgado."
  }, "B", "Criminologia digital e estudo do crime exigem separar fato ocorrido, registro e punição.", "A alternativa B está certa porque cifra negra é o conjunto de crimes não registrados oficialmente.", {
    A: "Incorreta. Registro duplicado não é cifra negra.",
    B: "Correta. É a criminalidade oculta aos dados oficiais.",
    C: "Incorreta. Não se limita a crimes digitais.",
    D: "Incorreta. Pode envolver delitos não violentos.",
    E: "Incorreta. Condenação é etapa formal, não criminalidade oculta."
  }, "Ler estatística oficial como retrato completo da criminalidade."),

  q("027", BASE_SOURCE, "A organela celular mais diretamente associada à produção de ATP por respiração celular é:", {
    A: "ribossomo.",
    B: "mitocôndria.",
    C: "lisossomo.",
    D: "centríolo.",
    E: "complexo golgiense."
  }, "B", "Em citologia, associe estrutura e função.", "A alternativa B está certa porque a mitocôndria é a principal organela relacionada à respiração celular aeróbia e produção de ATP.", {
    A: "Incorreta. Ribossomos participam da síntese proteica.",
    B: "Correta. Mitocôndrias produzem ATP.",
    C: "Incorreta. Lisossomos atuam na digestão intracelular.",
    D: "Incorreta. Centríolos participam da divisão celular.",
    E: "Incorreta. Complexo golgiense modifica e empacota substâncias."
  }, "Trocar função de organelas por memorização frágil."),

  q("028", BASE_SOURCE, "Em genética forense, a análise de DNA é útil porque:", {
    A: "todo ser humano possui DNA idêntico.",
    B: "regiões variáveis do DNA podem diferenciar indivíduos, salvo situações especiais como gêmeos monozigóticos.",
    C: "o DNA muda completamente a cada coleta.",
    D: "o grupo sanguíneo individualiza com a mesma precisão do DNA.",
    E: "a análise genética dispensa amostra de referência."
  }, "B", "A FGV cobra a diferença entre exclusão, probabilidade e individualização genética.", "A alternativa B está certa porque perfis genéticos usam regiões variáveis para comparação.", {
    A: "Incorreta. Há grande semelhança genética, mas não identidade absoluta entre indivíduos.",
    B: "Correta. A variabilidade permite comparação forense.",
    C: "Incorreta. O DNA não muda completamente a cada coleta.",
    D: "Incorreta. Grupo sanguíneo é menos discriminante.",
    E: "Incorreta. Comparação exige referência ou banco compatível."
  }, "Achar que todo marcador biológico tem o mesmo poder de individualização."),

  q("029", BASE_SOURCE, "A permanência dos desenhos papilares relaciona-se ao fato de que as cristas papilares:", {
    A: "surgem apenas após a vida adulta.",
    B: "formam-se no desenvolvimento fetal e tendem a permanecer estáveis, salvo lesões profundas.",
    C: "mudam mensalmente por renovação da pele.",
    D: "dependem exclusivamente do corte superficial da epiderme.",
    E: "são iguais em pessoas com mesmo grupo sanguíneo."
  }, "B", "Ligue embriologia à base biológica da papiloscopia.", "A alternativa B está certa porque as cristas se formam ainda na vida intrauterina e preservam padrão ao longo da vida.", {
    A: "Incorreta. A formação é fetal.",
    B: "Correta. Explica permanência com ressalva de lesão profunda.",
    C: "Incorreta. Renovação superficial não altera o padrão profundo.",
    D: "Incorreta. A base não é apenas corte superficial.",
    E: "Incorreta. Grupo sanguíneo não determina desenho papilar."
  }, "Confundir descamação da pele com mudança do desenho papilar."),

  q("030", BASE_SOURCE, "Em biometria, uma busca 1:N difere de uma verificação 1:1 porque a busca 1:N:", {
    A: "compara uma amostra com uma identidade previamente alegada.",
    B: "compara uma amostra contra uma base para tentar identificar quem é a pessoa.",
    C: "dispensa falso positivo.",
    D: "não utiliza característica biológica.",
    E: "só funciona com senha alfanumérica."
  }, "B", "A distinção FGV provável é identificação versus autenticação.", "A alternativa B está certa porque a identificação procura uma correspondência em uma base ampla.", {
    A: "Incorreta. Isso descreve verificação 1:1.",
    B: "Correta. Busca 1:N tenta identificar na base.",
    C: "Incorreta. Sistemas biométricos podem ter falso positivo.",
    D: "Incorreta. Biometria usa característica física ou comportamental.",
    E: "Incorreta. Senha não é biometria."
  }, "Misturar autenticação com identificação."),

  q("031", BASE_SOURCE, "Quando um raio de luz passa do ar para a água e muda de direção, ocorre principalmente:", {
    A: "refração.",
    B: "sublimação.",
    C: "ionização nuclear.",
    D: "combustão.",
    E: "magnetização permanente."
  }, "A", "Óptica básica cobra fenômeno e aplicação; mudança de meio com desvio é refração.", "A alternativa A está certa porque a luz altera velocidade e direção ao mudar de meio.", {
    A: "Correta. Refração é desvio na passagem entre meios.",
    B: "Incorreta. Sublimação é mudança de estado físico.",
    C: "Incorreta. Ionização nuclear não descreve o fenômeno óptico.",
    D: "Incorreta. Combustão é reação química.",
    E: "Incorreta. Magnetização não é desvio luminoso."
  }, "Trocar reflexão por refração."),

  q("032", BASE_SOURCE, "Em revelação ou inspeção por fluorescência, a luz ultravioleta pode ser usada porque:", {
    A: "sempre torna qualquer superfície radioativa.",
    B: "pode excitar determinadas substâncias, que emitem luz em outro comprimento de onda.",
    C: "elimina a necessidade de filtro, fotografia e controle de iluminação.",
    D: "é idêntica à luz infravermelha.",
    E: "tem menor energia que todas as radiações visíveis."
  }, "B", "Fluorescência é excitação seguida de emissão; não é simples reflexão.", "A alternativa B está certa porque descreve o mecanismo físico da fluorescência.", {
    A: "Incorreta. UV não torna a superfície radioativa por esse uso.",
    B: "Correta. A substância absorve energia e emite luz.",
    C: "Incorreta. Controle de iluminação e filtros podem ser necessários.",
    D: "Incorreta. UV e infravermelho ocupam regiões diferentes do espectro.",
    E: "Incorreta. UV tem maior energia que luz visível."
  }, "Chamar fluorescência de reflexão comum."),

  q("033", BASE_SOURCE, "Pela Lei de Ohm, se um equipamento opera com tensão de 12 V e resistência de 6 ohms, a corrente elétrica é:", {
    A: "0,5 A.",
    B: "2 A.",
    C: "6 A.",
    D: "18 A.",
    E: "72 A."
  }, "B", "Identifique a lei aplicável, isole a corrente na relação V = R x I e substitua os dados antes de escolher a unidade.", "A alternativa B está certa porque 12 dividido por 6 resulta em 2 amperes.", {
    A: "Incorreta. Inverte a relação.",
    B: "Correta. I = 12/6 = 2 A.",
    C: "Incorreta. Repete a resistência como corrente.",
    D: "Incorreta. Soma tensão e resistência.",
    E: "Incorreta. Multiplica tensão por resistência."
  }, "Somar ou multiplicar grandezas por impulso."),

  q("034", BASE_SOURCE, "Em captura digital de impressão papilar, a resolução adequada é importante porque:", {
    A: "aumenta automaticamente a identidade jurídica da pessoa.",
    B: "permite registrar detalhes suficientes das cristas e minúcias para comparação.",
    C: "substitui o confronto técnico por reconhecimento visual.",
    D: "elimina qualquer risco de imagem borrada.",
    E: "dispensa iluminação e foco."
  }, "B", "Qualidade de imagem serve ao confronto: nitidez, detalhe e fidelidade.", "A alternativa B está certa porque minúcias e cristas precisam ser capturadas com detalhe suficiente.", {
    A: "Incorreta. Resolução não cria identidade jurídica.",
    B: "Correta. A captura precisa preservar detalhes comparáveis.",
    C: "Incorreta. Confronto técnico continua necessário.",
    D: "Incorreta. Alta resolução não impede todos os erros de captura.",
    E: "Incorreta. Iluminação e foco seguem essenciais."
  }, "Achar que equipamento bom elimina método."),

  q("035", BASE_SOURCE, "O número atômico de um elemento químico corresponde ao número de:", {
    A: "prótons no núcleo.",
    B: "nêutrons na eletrosfera.",
    C: "moléculas em uma solução.",
    D: "ligações covalentes obrigatórias.",
    E: "isótopos existentes na natureza."
  }, "A", "Tabela periódica começa pela identificação do elemento: número de prótons.", "A alternativa A está certa porque o número atômico identifica o elemento pelo total de prótons.", {
    A: "Correta. Número atômico é número de prótons.",
    B: "Incorreta. Nêutrons ficam no núcleo, e não definem isoladamente o elemento.",
    C: "Incorreta. Moléculas em solução não definem número atômico.",
    D: "Incorreta. Ligações químicas não são número atômico.",
    E: "Incorreta. Isótopos variam em nêutrons."
  }, "Confundir número atômico com massa ou isótopo."),

  q("036", BASE_SOURCE, "Uma mistura homogênea formada por sal dissolvido em água é chamada de:", {
    A: "suspensão heterogênea.",
    B: "solução.",
    C: "substância simples.",
    D: "elemento químico.",
    E: "liga metálica obrigatória."
  }, "B", "Mistura homogênea com soluto e solvente é solução.", "A alternativa B está certa porque o sal dissolvido forma fase única com a água.", {
    A: "Incorreta. Suspensão é heterogênea.",
    B: "Correta. Sal em água é solução.",
    C: "Incorreta. Há mais de uma substância.",
    D: "Incorreta. Elemento químico não é mistura.",
    E: "Incorreta. Não há liga metálica."
  }, "Tratar toda mistura como heterogênea."),

  q("037", BASE_SOURCE, "Em uma reação em equilíbrio, a adição de catalisador:", {
    A: "altera obrigatoriamente a constante de equilíbrio.",
    B: "aumenta apenas a velocidade da reação direta.",
    C: "acelera a chegada ao equilíbrio, sem deslocá-lo por si só.",
    D: "transforma toda reação endotérmica em exotérmica.",
    E: "impede a reação inversa."
  }, "C", "Catalisador altera velocidade, não composição final de equilíbrio por si só.", "A alternativa C está certa porque diminui energia de ativação e acelera os dois sentidos.", {
    A: "Incorreta. Constante de equilíbrio depende da temperatura, não do catalisador.",
    B: "Incorreta. Atua nos dois sentidos.",
    C: "Correta. Acelera o alcance do equilíbrio.",
    D: "Incorreta. Não muda sinal de entalpia.",
    E: "Incorreta. Não bloqueia reação inversa."
  }, "Achar que catalisador aumenta rendimento no equilíbrio."),

  q("038", BASE_SOURCE, "A presença do grupo carboxila é característica de:", {
    A: "álcool.",
    B: "ácido carboxílico.",
    C: "éter.",
    D: "amina.",
    E: "alceno."
  }, "B", "Funções orgânicas são reconhecidas pelo grupo funcional.", "A alternativa B está certa porque ácidos carboxílicos possuem o grupo -COOH.", {
    A: "Incorreta. Álcool tem hidroxila ligada a carbono saturado.",
    B: "Correta. Carboxila identifica ácido carboxílico.",
    C: "Incorreta. Éter tem oxigênio entre carbonos.",
    D: "Incorreta. Amina contém nitrogênio.",
    E: "Incorreta. Alceno tem dupla ligação carbono-carbono."
  }, "Confundir hidroxila isolada com carboxila."),

  q("039", BASE_SOURCE, "Na revelação de impressões digitais latentes, a escolha do reagente deve considerar principalmente:", {
    A: "apenas a cor preferida do perito.",
    B: "tipo de superfície, composição provável do resíduo e método de visualização.",
    C: "o signo do investigado.",
    D: "a eliminação da fotografia pericial.",
    E: "a dispensa de acondicionamento posterior."
  }, "B", "Química aplicada à papiloscopia depende de interação entre suporte, resíduo e reagente.", "A alternativa B está certa porque superfícies porosas e não porosas podem exigir técnicas diferentes.", {
    A: "Incorreta. Escolha técnica não é preferência estética.",
    B: "Correta. O método depende do substrato e do resíduo.",
    C: "Incorreta. Não há critério astrológico.",
    D: "Incorreta. Fotografia/documentação continua necessária.",
    E: "Incorreta. Acondicionamento preserva vestígio e cadeia."
  }, "Imaginar que um reagente universal serve para qualquer superfície."),

  q("040", BASE_SOURCE, "Na Constituição Estadual, normas sobre Administração Pública e segurança devem ser estudadas para a prova porque:", {
    A: "revogam todos os direitos fundamentais federais.",
    B: "podem disciplinar organização estadual e parâmetros de atuação dos órgãos locais, sem afastar a Constituição Federal.",
    C: "só se aplicam a municípios de outro Estado.",
    D: "não têm relação com servidor público.",
    E: "substituem integralmente o Código Penal."
  }, "B", "Em legislação local, procure compatibilidade entre Constituição estadual e Constituição Federal.", "A alternativa B está certa porque a Constituição estadual organiza o Estado dentro dos limites federais.", {
    A: "Incorreta. Constituição estadual não revoga direitos federais.",
    B: "Correta. Organiza competências locais respeitando a Constituição Federal.",
    C: "Incorreta. Aplica-se ao Paraná.",
    D: "Incorreta. Administração e servidores são temas constitucionais locais.",
    E: "Incorreta. Não substitui legislação penal federal."
  }, "Ler norma estadual como se estivesse acima da Constituição Federal."),

  q("041", BASE_SOURCE, "A LC estadual 259/2023 é relevante para Papiloscopista porque trata:", {
    A: "da estruturação de carreiras da Polícia Civil do Paraná.",
    B: "da criação da Polícia Federal.",
    C: "do Código de Trânsito Brasileiro.",
    D: "da organização do Poder Judiciário federal.",
    E: "exclusivamente de tributos municipais."
  }, "A", "Legislação institucional deve ser estudada por diploma certo.", "A alternativa A está certa porque a LC 259/2023 estrutura carreiras da PCPR, inclusive cargo de interesse do edital.", {
    A: "Correta. É norma estadual de carreira da Polícia Civil do Paraná.",
    B: "Incorreta. Polícia Federal é instituição federal.",
    C: "Incorreta. Trânsito não é objeto da LC 259.",
    D: "Incorreta. Não organiza Judiciário federal.",
    E: "Incorreta. Não é lei tributária municipal."
  }, "Confundir lei de carreira com norma geral de outro ramo."),

  q("042", BASE_SOURCE, "A Lei 14.735/2023, Lei Orgânica Nacional das Polícias Civis, deve ser lida como norma que:", {
    A: "extingue as Polícias Civis estaduais.",
    B: "fixa diretrizes nacionais para organização e atuação das Polícias Civis.",
    C: "transforma a Polícia Civil em polícia ostensiva militar.",
    D: "regula apenas cartórios extrajudiciais.",
    E: "proíbe investigação criminal por Polícia Civil."
  }, "B", "Diferencie lei orgânica nacional de lei estadual específica.", "A alternativa B está certa porque a lei estabelece diretrizes gerais para Polícias Civis.", {
    A: "Incorreta. A lei não extingue as Polícias Civis.",
    B: "Correta. É norma nacional de diretrizes institucionais.",
    C: "Incorreta. Polícia ostensiva é função típica de Polícia Militar.",
    D: "Incorreta. Não é lei de cartórios.",
    E: "Incorreta. Investigação é função central da Polícia Civil."
  }, "Misturar função de polícia judiciária com policiamento ostensivo."),

  q("043", BASE_SOURCE, "A Lei Orgânica da PCPR deve ser priorizada porque:", {
    A: "é norma local recente e diretamente ligada à estrutura, atribuições e funcionamento institucional.",
    B: "serve apenas para concursos de professor.",
    C: "substitui a necessidade de estudar Processo Penal.",
    D: "não pode ser cobrada por banca de concurso.",
    E: "tem aplicação exclusiva à Polícia Militar."
  }, "A", "Norma institucional recente tem alto potencial de literalidade.", "A alternativa A está certa porque a lei local organiza a Polícia Civil do Paraná.", {
    A: "Correta. É fonte direta para atribuições e estrutura da PCPR.",
    B: "Incorreta. O edital de Papiloscopista a inclui como tema institucional.",
    C: "Incorreta. Não substitui disciplinas processuais.",
    D: "Incorreta. Se está no edital, pode ser cobrada.",
    E: "Incorreta. Refere-se à Polícia Civil."
  }, "Subestimar lei local nova por falta de provas antigas."),

  q("044", BASE_SOURCE, "Em matéria disciplinar, a alternativa tecnicamente correta é:", {
    A: "falta disciplinar, crime e improbidade são sempre a mesma infração.",
    B: "a responsabilidade disciplinar pode coexistir com responsabilidade penal e civil, observadas as garantias do processo.",
    C: "servidor policial não responde administrativamente.",
    D: "sanção disciplinar dispensa contraditório em qualquer caso.",
    E: "dever funcional é apenas recomendação moral."
  }, "B", "A FGV gosta de distinguir esferas de responsabilidade.", "A alternativa B está certa porque as esferas podem coexistir, sem eliminar garantias.", {
    A: "Incorreta. As esferas não são idênticas.",
    B: "Correta. Pode haver responsabilização disciplinar, penal e civil.",
    C: "Incorreta. Servidor policial responde administrativamente.",
    D: "Incorreta. Contraditório e ampla defesa são garantias.",
    E: "Incorreta. Dever funcional tem força normativa."
  }, "Confundir independência relativa das esferas com identidade absoluta."),

  q("045", BASE_SOURCE, "No regime jurídico dos servidores, provimento e vacância dizem respeito, respectivamente:", {
    A: "à entrada no cargo e à desocupação do cargo.",
    B: "ao pagamento de diárias e ao auxílio-alimentação.",
    C: "à classificação de crimes e penas.",
    D: "à competência do júri e à pronúncia.",
    E: "à coleta e ao acondicionamento de vestígios."
  }, "A", "Em estatuto, termos básicos costumam ser cobrados por conceito.", "A alternativa A está certa porque provimento preenche cargo e vacância o torna vago.", {
    A: "Correta. Resume os conceitos administrativos.",
    B: "Incorreta. Trata de vantagens indenizatórias.",
    C: "Incorreta. É matéria penal.",
    D: "Incorreta. É matéria processual penal.",
    E: "Incorreta. É cadeia de custódia/perícia."
  }, "Trocar vocabulário estatutário por temas de outras disciplinas."),

  q("046", BASE_SOURCE, "O crime de abuso de autoridade exige, como elemento relevante da lei específica:", {
    A: "finalidade específica, como prejudicar outrem, beneficiar a si ou terceiro, ou agir por mero capricho ou satisfação pessoal.",
    B: "resultado morte em todos os casos.",
    C: "ausência de qualquer ato funcional.",
    D: "mera discordância da parte com uma decisão regular.",
    E: "que o agente seja sempre particular sem função pública."
  }, "A", "A lei de abuso cobra muito o fim especial de agir.", "A alternativa A está certa porque a finalidade específica é requisito central da Lei 13.869/2019.", {
    A: "Correta. Resume o especial fim de agir previsto na lei.",
    B: "Incorreta. Resultado morte não é requisito geral.",
    C: "Incorreta. Abuso normalmente envolve exercício da função.",
    D: "Incorreta. Divergência contra ato regular não configura abuso por si só.",
    E: "Incorreta. O sujeito ativo é autoridade/agente público nos termos legais."
  }, "Esquecer o especial fim de agir."),

  q("047", BASE_SOURCE, "João inicia a execução de um furto, mas desiste voluntariamente antes de subtrair o bem, embora pudesse prosseguir. Em tese, aplica-se:", {
    A: "arrependimento posterior.",
    B: "crime impossível.",
    C: "desistência voluntária, respondendo pelos atos já praticados.",
    D: "tentativa punível de furto necessariamente.",
    E: "extinção automática de todos os crimes anteriores."
  }, "C", "Pergunte se a execução começou e por que o resultado não ocorreu.", "A alternativa C está certa porque o agente voluntariamente interrompe a execução antes da consumação.", {
    A: "Incorreta. Arrependimento posterior ocorre após crime sem violência/grave ameaça, com reparação até o recebimento da denúncia.",
    B: "Incorreta. Crime impossível exige ineficácia absoluta do meio ou impropriedade absoluta do objeto.",
    C: "Correta. Desistência voluntária afasta tentativa do crime inicialmente pretendido.",
    D: "Incorreta. Não há tentativa se a desistência voluntária impede a consumação.",
    E: "Incorreta. O agente responde pelos atos já praticados se típicos."
  }, "Confundir desistência voluntária, tentativa e arrependimento posterior."),

  q("048", BASE_SOURCE, "Subtrair coisa móvel alheia mediante grave ameaça caracteriza, em regra:", {
    A: "furto simples.",
    B: "roubo.",
    C: "apropriação indébita sempre.",
    D: "dano qualificado.",
    E: "exercício arbitrário das próprias razões sem exceção."
  }, "B", "Nos crimes patrimoniais, a violência ou grave ameaça desloca o furto para roubo.", "A alternativa B está certa porque roubo envolve subtração com violência ou grave ameaça.", {
    A: "Incorreta. Furto não tem violência ou grave ameaça contra pessoa.",
    B: "Correta. A grave ameaça caracteriza roubo.",
    C: "Incorreta. Apropriação indébita pressupõe posse lícita inicial.",
    D: "Incorreta. Dano envolve destruir/deteriorar coisa, não subtrair.",
    E: "Incorreta. Não é a figura típica descrita."
  }, "Ignorar a grave ameaça e marcar furto."),

  q("049", BASE_SOURCE, "Na Lei de Organizações Criminosas, a colaboração premiada deve ser compreendida como:", {
    A: "meio de obtenção de prova, sujeito a controle judicial e requisitos legais.",
    B: "prova automática de culpa sem necessidade de corroboração.",
    C: "ato informal que dispensa defensor.",
    D: "substituição integral da investigação policial.",
    E: "benefício concedido verbalmente sem registro."
  }, "A", "Leis especiais cobram natureza jurídica e cautelas.", "A alternativa A está certa porque colaboração premiada é meio de obtenção de prova regulado em lei.", {
    A: "Correta. A colaboração exige formalidades e controle.",
    B: "Incorreta. Declarações precisam de corroboração.",
    C: "Incorreta. Há garantias e formalização.",
    D: "Incorreta. Não substitui investigação.",
    E: "Incorreta. Acordo exige registro e homologação conforme o caso."
  }, "Tratar colaboração como condenação automática."),

  q("050", BASE_SOURCE, "O inquérito policial é tradicionalmente caracterizado como procedimento:", {
    A: "judicial, contraditório pleno e indispensável em todos os casos.",
    B: "administrativo, inquisitivo, escrito e destinado à apuração de infração penal e autoria.",
    C: "sentença penal condenatória.",
    D: "recurso contra decisão judicial.",
    E: "ato exclusivo do Ministério Público, sem participação policial."
  }, "B", "A FGV cobra natureza, finalidade e características do inquérito.", "A alternativa B está certa porque reúne características clássicas do inquérito policial.", {
    A: "Incorreta. Inquérito é administrativo e não tem contraditório pleno como processo judicial.",
    B: "Correta. É procedimento investigatório administrativo.",
    C: "Incorreta. Não é decisão judicial.",
    D: "Incorreta. Não é recurso.",
    E: "Incorreta. Polícia judiciária conduz a investigação, conforme regras legais."
  }, "Aplicar ao inquérito as mesmas garantias estruturais do processo judicial."),

  q("051", BASE_SOURCE, "Na cadeia de custódia, o registro de quem recebeu, transportou, armazenou e analisou o vestígio serve principalmente para:", {
    A: "aumentar o número de documentos sem função.",
    B: "garantir rastreabilidade e integridade do vestígio.",
    C: "substituir o exame pericial.",
    D: "dispensar isolamento do local.",
    E: "permitir alteração posterior sem justificativa."
  }, "B", "Cadeia de custódia é rastreabilidade do vestígio desde o reconhecimento.", "A alternativa B está certa porque documenta percurso, guarda e manipulação, protegendo integridade.", {
    A: "Incorreta. O registro tem função probatória.",
    B: "Correta. Rastreabilidade e integridade são o núcleo da cadeia.",
    C: "Incorreta. Não substitui perícia.",
    D: "Incorreta. Isolamento é etapa de preservação.",
    E: "Incorreta. Alterações sem controle comprometem a prova."
  }, "Decorar etapas sem entender a finalidade."),

  q("052", BASE_SOURCE, "A prisão preventiva, no processo penal, exige:", {
    A: "decretação automática sempre que houver investigação.",
    B: "fundamentação concreta, pressupostos legais e finalidade cautelar.",
    C: "pedido exclusivo da vítima em todos os casos.",
    D: "condenação definitiva prévia.",
    E: "impossibilidade de qualquer revisão."
  }, "B", "Medida cautelar pessoal pede base legal, necessidade e decisão fundamentada.", "A alternativa B está certa porque preventiva não é pena antecipada e exige fundamentação.", {
    A: "Incorreta. Não há automatismo.",
    B: "Correta. Exige pressupostos e fundamentos cautelares.",
    C: "Incorreta. Pode decorrer de representação/requerimento conforme a lei, não exclusivamente vítima.",
    D: "Incorreta. Antes da condenação definitiva, é cautelar.",
    E: "Incorreta. Pode ser revogada ou reavaliada."
  }, "Confundir prisão cautelar com punição antecipada."),

  q("053", BASE_SOURCE, "O habeas corpus é o remédio constitucional adequado para proteger:", {
    A: "direito líquido e certo não amparado por habeas corpus ou habeas data.",
    B: "liberdade de locomoção ameaçada ou violada por ilegalidade ou abuso de poder.",
    C: "acesso a dados pessoais em banco público exclusivamente.",
    D: "patrimônio público contra ato lesivo por qualquer cidadão.",
    E: "direito de petição administrativa tributária apenas."
  }, "B", "Associe cada remédio ao bem protegido.", "A alternativa B está certa porque habeas corpus tutela liberdade de locomoção.", {
    A: "Incorreta. Isso remete ao mandado de segurança.",
    B: "Correta. É a finalidade clássica do habeas corpus.",
    C: "Incorreta. Isso remete ao habeas data.",
    D: "Incorreta. Isso se aproxima da ação popular.",
    E: "Incorreta. Direito de petição não define habeas corpus."
  }, "Trocar habeas corpus por mandado de segurança ou habeas data."),

  q("054", BASE_SOURCE, "Segundo a lógica constitucional da segurança pública, a Polícia Civil exerce, ressalvada competência da União:", {
    A: "policiamento ostensivo geral.",
    B: "polícia judiciária e apuração de infrações penais, exceto militares.",
    C: "defesa externa do país.",
    D: "julgamento de crimes dolosos contra a vida.",
    E: "controle legislativo externo do Judiciário."
  }, "B", "Art. 144 é questão clássica: diferencie órgãos e funções.", "A alternativa B está certa porque descreve a função constitucional das Polícias Civis.", {
    A: "Incorreta. Policiamento ostensivo é típico da Polícia Militar.",
    B: "Correta. É a atribuição constitucional central da Polícia Civil.",
    C: "Incorreta. Defesa externa é função das Forças Armadas.",
    D: "Incorreta. Julgamento é função do Poder Judiciário/Tribunal do Júri.",
    E: "Incorreta. Não é função policial."
  }, "Misturar Polícia Civil e Polícia Militar."),

  q("055", BASE_SOURCE, "No controle concentrado de constitucionalidade, a ação direta de inconstitucionalidade busca, em regra:", {
    A: "declarar incompatibilidade de lei ou ato normativo com a Constituição.",
    B: "resolver conflito individual de vizinhança.",
    C: "substituir recurso ordinário criminal.",
    D: "executar pena administrativa.",
    E: "homologar laudo pericial."
  }, "A", "Controle de constitucionalidade cobra finalidade da ação.", "A alternativa A está certa porque ADI visa retirar do ordenamento norma incompatível com a Constituição.", {
    A: "Correta. É finalidade típica da ADI.",
    B: "Incorreta. Conflito individual não é objeto de ADI.",
    C: "Incorreta. ADI não substitui recurso criminal.",
    D: "Incorreta. Não executa pena.",
    E: "Incorreta. Homologação de laudo não é controle constitucional."
  }, "Confundir controle abstrato com caso individual."),

  q("056", BASE_SOURCE, "O princípio da impessoalidade na Administração Pública exige que:", {
    A: "atos administrativos sejam praticados para promoção pessoal do agente.",
    B: "a atuação administrativa busque finalidade pública, sem favorecimento ou perseguição pessoal.",
    C: "o administrador possa ignorar a lei se a intenção for boa.",
    D: "toda decisão seja secreta.",
    E: "a publicidade seja proibida."
  }, "B", "Princípios administrativos aparecem por consequência prática.", "A alternativa B está certa porque impessoalidade veda promoção pessoal, favorecimento e perseguição.", {
    A: "Incorreta. Promoção pessoal viola impessoalidade.",
    B: "Correta. O foco é finalidade pública.",
    C: "Incorreta. Legalidade continua obrigatória.",
    D: "Incorreta. Publicidade é princípio constitucional.",
    E: "Incorreta. A regra é transparência, ressalvados sigilos legais."
  }, "Confundir impessoalidade com anonimato do ato."),

  q("057", BASE_SOURCE, "A anulação de ato administrativo difere da revogação porque:", {
    A: "anulação recai sobre ilegalidade; revogação recai sobre mérito administrativo, por conveniência e oportunidade.",
    B: "anulação e revogação são sinônimas.",
    C: "revogação só ocorre por ordem penal.",
    D: "anulação só é possível para atos perfeitos e legais.",
    E: "revogação corrige vício de legalidade obrigatoriamente."
  }, "A", "A FGV adora pares conceituais: ilegalidade versus mérito.", "A alternativa A está certa porque separa controle de legalidade e juízo discricionário.", {
    A: "Correta. É a distinção clássica.",
    B: "Incorreta. Têm fundamentos diferentes.",
    C: "Incorreta. Revogação é administrativa.",
    D: "Incorreta. Anulação combate ilegalidade.",
    E: "Incorreta. Vício de legalidade leva à anulação."
  }, "Usar revogação para ato ilegal."),

  q("058", BASE_SOURCE, "A responsabilidade civil objetiva do Estado, em regra, exige:", {
    A: "dano, conduta estatal e nexo causal, independentemente de prova de culpa do agente.",
    B: "sempre dolo específico do governador.",
    C: "ausência de dano.",
    D: "sentença penal condenatória prévia em todos os casos.",
    E: "renúncia da vítima ao contraditório."
  }, "A", "Responsabilidade objetiva não elimina dano e nexo.", "A alternativa A está certa porque a teoria objetiva exige dano e nexo causal, sem necessidade de culpa como regra.", {
    A: "Correta. Resume os requisitos centrais.",
    B: "Incorreta. Não exige sempre dolo específico.",
    C: "Incorreta. Sem dano não há indenização.",
    D: "Incorreta. A responsabilidade civil não depende sempre de sentença penal.",
    E: "Incorreta. Não há renúncia obrigatória a garantias."
  }, "Achar que objetiva significa automática sem nexo."),

  q("059", BASE_SOURCE, "No sistema interamericano de direitos humanos, a Convenção Americana sobre Direitos Humanos é também conhecida como:", {
    A: "Pacto de San José da Costa Rica.",
    B: "Tratado de Versalhes.",
    C: "Carta de Curitiba.",
    D: "Lei Maria da Penha.",
    E: "Estatuto do Desarmamento."
  }, "A", "Direitos Humanos cobra nomes, sistemas e instrumentos.", "A alternativa A está certa porque a Convenção Americana é conhecida como Pacto de San José da Costa Rica.", {
    A: "Correta. É a denominação consagrada.",
    B: "Incorreta. Tratado de Versalhes pertence a outro contexto histórico.",
    C: "Incorreta. Não é instrumento interamericano conhecido.",
    D: "Incorreta. É lei brasileira de proteção à mulher.",
    E: "Incorreta. É legislação penal/administrativa sobre armas."
  }, "Trocar instrumento internacional por lei interna."),

  q("060", BASE_SOURCE, "Em abordagem policial envolvendo pessoa em situação de vulnerabilidade, a atuação compatível com direitos humanos deve observar:", {
    A: "dignidade, legalidade, necessidade, proporcionalidade e não discriminação.",
    B: "força máxima como regra inicial.",
    C: "dispensa de registro quando houver vulnerabilidade.",
    D: "tratamento desigual punitivo por condição social.",
    E: "eliminação de qualquer controle posterior."
  }, "A", "A FGV tende a cobrar direitos humanos como parâmetro de atuação, não como discurso abstrato.", "A alternativa A está certa porque reúne critérios de atuação estatal legítima.", {
    A: "Correta. São parâmetros de atuação policial compatível com direitos humanos.",
    B: "Incorreta. Uso da força deve observar necessidade e proporcionalidade.",
    C: "Incorreta. Registro e controle são importantes.",
    D: "Incorreta. Discriminação viola direitos humanos.",
    E: "Incorreta. Prestação de contas e controle são relevantes."
  }, "Achar que vulnerabilidade autoriza informalidade ou excesso."),

  q("061", BASE_SOURCE, "A Agenda 2030 interessa à segurança pública especialmente por dialogar com:", {
    A: "instituições eficazes, acesso à justiça, redução de desigualdades e promoção de paz social.",
    B: "eliminação de todo controle estatal.",
    C: "proibição absoluta de políticas públicas.",
    D: "competência exclusiva do setor privado para investigar crimes.",
    E: "substituição da Constituição por metas administrativas."
  }, "A", "ODS aparecem por associação temática, não por decoreba de número isolado.", "A alternativa A está certa porque relaciona desenvolvimento, justiça, inclusão e instituições.", {
    A: "Correta. Resume a conexão da Agenda 2030 com segurança e direitos.",
    B: "Incorreta. A Agenda não elimina controle estatal.",
    C: "Incorreta. Trata justamente de políticas públicas e metas.",
    D: "Incorreta. Investigação criminal permanece função estatal conforme a Constituição.",
    E: "Incorreta. Agenda 2030 não substitui a Constituição."
  }, "Tratar Agenda 2030 como tema alheio à atuação policial."),

  q("014", BASE_SOURCE, "No editor de texto, a ferramenta de localizar/substituir com caracteres curinga é útil para:", {
    A: "apagar fisicamente o disco rígido.",
    B: "encontrar padrões textuais que variam parcialmente, conforme a sintaxe aceita pelo programa.",
    C: "bloquear o acesso à internet.",
    D: "aumentar a memória RAM instalada.",
    E: "assinar digitalmente qualquer documento sem certificado."
  }, "B", "A FGV cobra suíte de escritório em uso real: localizar, substituir, imprimir, fórmulas e menus.", "A alternativa B está certa porque curingas permitem localizar padrões, não apenas texto fixo.", {
    A: "Incorreta. Localizar/substituir atua no conteúdo do documento.",
    B: "Correta. Caracteres curinga ampliam a busca por padrões.",
    C: "Incorreta. Bloqueio de internet é rede/segurança.",
    D: "Incorreta. Editor de texto não instala memória física.",
    E: "Incorreta. Assinatura digital depende de certificado e procedimento próprio."
  }, "Trocar função de edição de texto por função de sistema ou segurança."),

  q("015", BASE_SOURCE, "Um órgão contrata serviço em nuvem no qual usa um sistema pronto de e-mail e agenda pelo navegador, sem administrar servidores. O modelo predominante é:", {
    A: "IaaS.",
    B: "PaaS.",
    C: "SaaS.",
    D: "RAID.",
    E: "BIOS."
  }, "C", "Identifique o nível de responsabilidade: infraestrutura, plataforma ou software pronto.", "A alternativa C está certa porque SaaS entrega aplicação pronta ao usuário final.", {
    A: "Incorreta. IaaS oferece infraestrutura virtual, como máquinas e redes.",
    B: "Incorreta. PaaS oferece plataforma para desenvolvimento/implantação.",
    C: "Correta. E-mail/agenda prontos via web são software como serviço.",
    D: "Incorreta. RAID é arranjo de discos.",
    E: "Incorreta. BIOS/UEFI é firmware de inicialização."
  }, "Chamar todo serviço em nuvem de IaaS."),

  q("016", BASE_SOURCE, "Um e-mail simula comunicado oficial e induz o servidor a digitar senha em página falsa. A conduta descrita é exemplo de:", {
    A: "phishing.",
    B: "desfragmentação.",
    C: "backup incremental.",
    D: "criptografia simétrica legítima.",
    E: "compressão sem perdas."
  }, "A", "Em segurança, reconheça o vetor: manipulação da confiança para capturar credenciais.", "A alternativa A está certa porque phishing usa fraude/engenharia social para obter dados.", {
    A: "Correta. A página falsa e a captura de senha caracterizam phishing.",
    B: "Incorreta. Desfragmentação reorganiza dados em disco.",
    C: "Incorreta. Backup incremental é cópia de alterações.",
    D: "Incorreta. Criptografia legítima não descreve a fraude.",
    E: "Incorreta. Compressão reduz tamanho de arquivo."
  }, "Confundir malware com qualquer evento de segurança, sem olhar o modo de ataque."),

  q("017", BASE_SOURCE, "Ao preservar uma mídia apreendida, o cálculo de hash serve principalmente para:", {
    A: "alterar os arquivos e facilitar leitura.",
    B: "comprovar integridade por meio de um valor de verificação reproduzível.",
    C: "remover automaticamente vírus.",
    D: "substituir autorização judicial quando necessária.",
    E: "converter imagem em texto editável."
  }, "B", "Hash em perícia digital é impressão matemática para comparar integridade.", "A alternativa B está certa porque qualquer alteração relevante tende a mudar o valor hash.", {
    A: "Incorreta. Hash não deve alterar o conteúdo.",
    B: "Correta. Serve para verificação de integridade.",
    C: "Incorreta. Hash não remove malware.",
    D: "Incorreta. Técnica não substitui requisito jurídico.",
    E: "Incorreta. Converter imagem em texto é OCR."
  }, "Pensar em hash como criptografia para esconder conteúdo."),

  q("019", BASE_SOURCE, "Uma impressão digital latente é melhor descrita como:", {
    A: "impressão visível feita obrigatoriamente com tinta preta.",
    B: "marca normalmente não visível a olho nu, deixada por resíduos do contato papilar.",
    C: "assinatura manuscrita em documento público.",
    D: "fotografia facial usada em reconhecimento.",
    E: "tipo sanguíneo encontrado em amostra biológica."
  }, "B", "Papiloscopia cobra tipos de impressão e modo de revelação.", "A alternativa B está certa porque impressão latente resulta de resíduos e pode exigir técnica de revelação.", {
    A: "Incorreta. Impressão entintada é padrão visível, não latente.",
    B: "Correta. Latente pode exigir revelação.",
    C: "Incorreta. Assinatura é grafoscopia/documentoscopia.",
    D: "Incorreta. Fotografia facial não é impressão papilar.",
    E: "Incorreta. Tipo sanguíneo é biologia/serologia."
  }, "Confundir impressão latente com impressão entintada."),

  q("023", BASE_SOURCE, "Vestígio, evidência e indício não devem ser tratados como sinônimos absolutos. A formulação mais adequada é:", {
    A: "vestígio é qualquer material encontrado; evidência é o vestígio analisado e relacionado ao fato; indício é circunstância que permite inferência.",
    B: "vestígio só existe depois da sentença penal.",
    C: "evidência é sempre opinião de testemunha.",
    D: "indício não pode ter relação com prova.",
    E: "os três termos significam apenas objeto apreendido."
  }, "A", "A FGV costuma trocar vocabulário pericial e processual.", "A alternativa A está certa porque preserva a gradação técnica entre material, relação com o fato e inferência.", {
    A: "Correta. A distinção é compatível com criminalística e processo penal.",
    B: "Incorreta. Vestígio existe desde o local/fato investigado.",
    C: "Incorreta. Evidência não é necessariamente testemunho.",
    D: "Incorreta. Indício tem função inferencial ligada à prova.",
    E: "Incorreta. Os termos não são sinônimos perfeitos."
  }, "Usar palavras técnicas como se fossem intercambiáveis."),

  q("025", BASE_SOURCE, "Controle social formal é exercido principalmente por:", {
    A: "família, vizinhança e costumes informais.",
    B: "instituições como polícia, Ministério Público, Judiciário e sistema penitenciário.",
    C: "amizades pessoais sem base normativa.",
    D: "comentários anônimos em redes sociais.",
    E: "preferências individuais sem sanção institucional."
  }, "B", "Criminologia cobra formal versus informal.", "A alternativa B está certa porque controle formal é institucionalizado e regulado por normas.", {
    A: "Incorreta. Esses são exemplos de controle informal.",
    B: "Correta. Órgãos estatais exercem controle formal.",
    C: "Incorreta. Amizades não são instâncias formais.",
    D: "Incorreta. Comentários em rede não configuram instituição formal.",
    E: "Incorreta. Preferência individual não é controle social formal."
  }, "Trocar controle formal por influência social cotidiana."),

  q("028", BASE_SOURCE, "Uma doença ligada ao cromossomo X recessiva tende a aparecer com maior frequência em homens porque:", {
    A: "homens possuem dois cromossomos X.",
    B: "homens possuem apenas um cromossomo X, de modo que o alelo recessivo nele presente se manifesta.",
    C: "mulheres não possuem cromossomo X.",
    D: "o cromossomo Y sempre corrige mutações do X.",
    E: "herança ligada ao sexo não obedece genes."
  }, "B", "Em genética FGV, organize genótipo e cromossomos sexuais antes das alternativas.", "A alternativa B está certa porque homens XY manifestam alelo recessivo presente no único X.", {
    A: "Incorreta. Homens, em regra, são XY.",
    B: "Correta. O X único torna visível o alelo recessivo.",
    C: "Incorreta. Mulheres possuem cromossomos X.",
    D: "Incorreta. Y não corrige automaticamente alelos do X.",
    E: "Incorreta. Herança ligada ao sexo é genética."
  }, "Aplicar raciocínio autossômico a herança ligada ao X."),

  q("030", BASE_SOURCE, "Em sistema biométrico, falso positivo ocorre quando:", {
    A: "o sistema aceita indevidamente uma pessoa como se fosse outra ou como autorizada.",
    B: "o sistema rejeita corretamente um impostor.",
    C: "a câmera melhora a nitidez da imagem.",
    D: "a senha é trocada pelo usuário legítimo.",
    E: "o cadastro é excluído por ordem regular."
  }, "A", "Separe falso positivo de falso negativo: aceitar indevidamente ou rejeitar indevidamente.", "A alternativa A está certa porque falso positivo é aceitação equivocada.", {
    A: "Correta. Aceitação indevida caracteriza falso positivo.",
    B: "Incorreta. Rejeitar impostor é comportamento correto.",
    C: "Incorreta. Nitidez é qualidade de captura.",
    D: "Incorreta. Troca de senha não é erro biométrico.",
    E: "Incorreta. Exclusão regular de cadastro não é falso positivo."
  }, "Confundir erro de aceitação com erro de rejeição."),

  q("031", BASE_SOURCE, "Uma lente convergente pode formar imagem real quando o objeto está:", {
    A: "sempre atrás da lente.",
    B: "em posição adequada antes da lente, além do foco, permitindo projeção em anteparo.",
    C: "necessariamente dentro do foco, sem exceção.",
    D: "ausente, pois lentes não formam imagens.",
    E: "substituído por campo magnético."
  }, "B", "Imagem real pode ser projetada; a posição em relação ao foco importa.", "A alternativa B está certa porque objeto além do foco em lente convergente pode gerar imagem real.", {
    A: "Incorreta. O objeto fica usualmente diante da lente no arranjo óptico.",
    B: "Correta. Permite imagem real projetável.",
    C: "Incorreta. Dentro do foco, a imagem tende a ser virtual.",
    D: "Incorreta. Lentes formam imagens.",
    E: "Incorreta. Campo magnético não substitui objeto óptico."
  }, "Não diferenciar imagem real de virtual."),

  q("032", BASE_SOURCE, "No espectro eletromagnético, considerando luz visível, menor comprimento de onda corresponde, em regra, a:", {
    A: "menor frequência e menor energia.",
    B: "maior frequência e maior energia.",
    C: "ausência de propagação no ar.",
    D: "velocidade infinita.",
    E: "transformação automática em som."
  }, "B", "Use c = lambda x f e energia proporcional à frequência.", "A alternativa B está certa porque, no mesmo meio, menor comprimento de onda implica maior frequência e maior energia.", {
    A: "Incorreta. Inverte a relação.",
    B: "Correta. Frequência e energia aumentam quando o comprimento de onda diminui.",
    C: "Incorreta. Luz visível se propaga no ar.",
    D: "Incorreta. A velocidade não é infinita.",
    E: "Incorreta. Onda eletromagnética não vira som automaticamente."
  }, "Confundir comprimento de onda, frequência e energia."),

  q("036", BASE_SOURCE, "Uma solução contém 10 g de soluto em 200 g de solução. A concentração em porcentagem massa/massa é:", {
    A: "2%.",
    B: "5%.",
    C: "10%.",
    D: "20%.",
    E: "50%."
  }, "B", "Percentual massa/massa é massa do soluto dividida pela massa da solução, vezes 100.", "A alternativa B está certa porque 10/200 x 100 = 5%.", {
    A: "Incorreta. Usa base incorreta.",
    B: "Correta. A razão soluto/solução é 5%.",
    C: "Incorreta. Confunde massa do soluto com porcentagem.",
    D: "Incorreta. Inverte parte da relação.",
    E: "Incorreta. Seria 100 g em 200 g."
  }, "Usar massa do solvente ou inverter a fração."),

  q("037", BASE_SOURCE, "Na equação não balanceada H2 + O2 -> H2O, os menores coeficientes inteiros são:", {
    A: "1, 1 e 1.",
    B: "2, 1 e 2.",
    C: "1, 2 e 1.",
    D: "2, 2 e 1.",
    E: "3, 1 e 1."
  }, "B", "Balanceie conservando átomos de hidrogênio e oxigênio.", "A alternativa B está certa porque 2H2 + O2 -> 2H2O conserva 4 H e 2 O.", {
    A: "Incorreta. Oxigênio não fica balanceado.",
    B: "Correta. Conserva H e O.",
    C: "Incorreta. Oxigênio e hidrogênio ficam incompatíveis.",
    D: "Incorreta. Sobram oxigênios nos reagentes.",
    E: "Incorreta. Não conserva hidrogênio."
  }, "Balancear olhando apenas um elemento."),

  q("039", BASE_SOURCE, "Em superfície porosa, como papel, uma técnica clássica para revelar impressões latentes reage com aminoácidos presentes no resíduo papilar. Trata-se, em geral, do uso de:", {
    A: "ninhidrina.",
    B: "ímã permanente.",
    C: "água pura como reagente universal.",
    D: "lixa abrasiva.",
    E: "corrente elétrica de alta tensão sem reagente."
  }, "A", "Relacione superfície porosa e componente químico do resíduo.", "A alternativa A está certa porque ninhidrina é reagente clássico para aminoácidos em impressões em papel.", {
    A: "Correta. É técnica associada a aminoácidos em suportes porosos.",
    B: "Incorreta. Ímã não revela aminoácidos.",
    C: "Incorreta. Água pura não é reagente universal de revelação.",
    D: "Incorreta. Lixar destrói ou altera o suporte.",
    E: "Incorreta. Alta tensão não descreve técnica clássica segura."
  }, "Escolher método sem considerar suporte e resíduo."),

  q("047", BASE_SOURCE, "No furto sem violência ou grave ameaça, se o agente repara integralmente o dano antes do recebimento da denúncia, pode incidir:", {
    A: "arrependimento posterior, com redução de pena nos termos legais.",
    B: "legítima defesa obrigatória.",
    C: "crime impossível automático.",
    D: "abolitio criminis.",
    E: "erro de tipo inevitável necessariamente."
  }, "A", "Arrependimento posterior vem depois da consumação e antes do recebimento da denúncia, em crimes compatíveis.", "A alternativa A está certa porque a reparação voluntária no momento adequado permite a causa de diminuição.", {
    A: "Correta. É hipótese típica de arrependimento posterior.",
    B: "Incorreta. Legítima defesa não tem relação com reparação posterior.",
    C: "Incorreta. O crime foi possível e consumado.",
    D: "Incorreta. A lei não deixou de criminalizar o fato.",
    E: "Incorreta. Não há erro sobre elemento do tipo."
  }, "Confundir arrependimento posterior com arrependimento eficaz."),

  q("050", BASE_SOURCE, "A notícia-crime apresentada por qualquer pessoa do povo à autoridade policial é classificada, em regra, como:", {
    A: "notitia criminis de cognição coercitiva.",
    B: "delatio criminis.",
    C: "sentença penal.",
    D: "recurso especial.",
    E: "laudo pericial definitivo."
  }, "B", "Em inquérito, a FGV cobra nomenclatura: notícia espontânea, provocada, coercitiva e delatio.", "A alternativa B está certa porque delatio criminis é comunicação feita por terceiro à autoridade.", {
    A: "Incorreta. Cognição coercitiva liga-se, por exemplo, à prisão em flagrante.",
    B: "Correta. É comunicação do fato criminoso por terceiro.",
    C: "Incorreta. Sentença é ato jurisdicional.",
    D: "Incorreta. Recurso especial é meio recursal.",
    E: "Incorreta. Laudo é documento técnico pericial."
  }, "Misturar formas de conhecimento da infração penal."),

  q("051", BASE_SOURCE, "Mandado de busca domiciliar indica endereço específico, mas a equipe entra por engano em imóvel vizinho e apreende computador de terceiro. A consequência mais compatível é:", {
    A: "regularidade automática, pois todo imóvel próximo está abrangido.",
    B: "necessidade de analisar ilicitude/invalidade da diligência por extrapolação do mandado e violação de domicílio.",
    C: "dispensa de controle judicial posterior.",
    D: "conversão do computador em coisa abandonada.",
    E: "proibição absoluta de qualquer busca domiciliar no Brasil."
  }, "B", "Busca e apreensão exigem aderência ao mandado, endereço, objeto e garantias constitucionais.", "A alternativa B está certa porque a diligência em local errado extrapola a autorização judicial e pode contaminar a prova.", {
    A: "Incorreta. Mandado não autoriza automaticamente imóveis vizinhos.",
    B: "Correta. Há problema de legalidade e de prova.",
    C: "Incorreta. Diligência invasiva exige controle.",
    D: "Incorreta. O bem não se torna abandonado.",
    E: "Incorreta. Busca domiciliar é possível nas hipóteses legais."
  }, "Achar que mandado genérico cobre qualquer lugar próximo."),

  q("013", BASE_SOURCE, "Um setor precisa armazenar quatro arquivos de texto simples, cada um com cerca de 750.000 caracteres. Considerando 1 caractere como 1 byte, o menor meio listado que comporta o conjunto é:", {
    A: "um disquete de 360 KB.",
    B: "um disquete de 1,44 MB.",
    C: "um CD-R de 650 MB.",
    D: "um DVD-R de 4,7 GB.",
    E: "um HD externo de 1 TB."
  }, "C", "Calcule primeiro o volume total aproximado e só depois compare com as capacidades das alternativas.", "O conjunto tem cerca de 3.000.000 bytes, aproximadamente 3 MB, cabendo no CD-R com menor sobra entre os meios suficientes listados.", {
    A: "Incorreta. 360 KB é menor que o volume total estimado.",
    B: "Incorreta. 1,44 MB também não comporta aproximadamente 3 MB.",
    C: "Correta. 650 MB comporta o conjunto e é menor que DVD ou HD.",
    D: "Incorreta. Comporta, mas desperdiça mais espaço que o CD-R.",
    E: "Incorreta. Comporta, mas é muito maior que o necessário."
  }, "Marcar o maior armazenamento sem observar a expressão 'menor meio suficiente'."),

  q("013", BASE_SOURCE, "Em anúncio de computador, a especificação '256 GB SSD' identifica, tecnicamente, um componente voltado principalmente para:", {
    A: "armazenamento não volátil de dados e programas.",
    B: "processamento aritmético central.",
    C: "memória temporária apagada ao desligar.",
    D: "exibição de imagem no monitor.",
    E: "firmware básico de inicialização gravado em ROM."
  }, "A", "Separe armazenamento permanente, memória temporária, processamento e exibição antes de escolher a alternativa.", "SSD é dispositivo de armazenamento de massa, não volátil, usado para guardar sistema, programas e arquivos.", {
    A: "Correta. O SSD preserva dados sem energia e funciona como armazenamento.",
    B: "Incorreta. Processamento central é função da CPU.",
    C: "Incorreta. Memória temporária é associada à RAM.",
    D: "Incorreta. Exibição de imagem envolve vídeo/monitor.",
    E: "Incorreta. Firmware de inicialização não é a unidade SSD anunciada."
  }, "Confundir qualquer item anunciado em gigabytes com memória RAM."),

  q("013", BASE_SOURCE, "Assinale a alternativa que apresenta apenas dispositivos tipicamente classificados como entrada de dados em um computador.", {
    A: "teclado e scanner.",
    B: "monitor e impressora.",
    C: "pendrive e HD externo.",
    D: "plotter e projetor.",
    E: "SSD e memória RAM."
  }, "A", "Entrada é o que envia dados ao computador; saída mostra ou imprime, e armazenamento lê/grava.", "Teclado envia comandos e scanner digitaliza informação para o computador, ambos funcionando como entrada.", {
    A: "Correta. Os dois capturam/enviam dados para o sistema.",
    B: "Incorreta. Monitor e impressora são dispositivos de saída.",
    C: "Incorreta. Pendrive e HD externo são armazenamento, com leitura e gravação.",
    D: "Incorreta. Plotter e projetor são dispositivos de saída.",
    E: "Incorreta. SSD é armazenamento e RAM é memória principal."
  }, "Tratar todo dispositivo conectado por USB como entrada."),

  q("013", BASE_SOURCE, "Ao comparar HD magnético e SSD em computadores de uso comum, a afirmação tecnicamente mais adequada é:", {
    A: "o SSD tende a ter acesso aos dados mais rápido por não depender de partes mecânicas móveis.",
    B: "o HD é sempre mais resistente a impactos por possuir disco girando.",
    C: "o SSD é obrigatoriamente mais barato por gigabyte que o HD.",
    D: "ambos usam exatamente o mesmo mecanismo físico de gravação.",
    E: "o HD não pode ser usado para instalar sistema operacional."
  }, "A", "A comparação clássica da banca envolve mecanismo físico, velocidade, resistência e custo por capacidade.", "SSDs usam memória flash e tendem a acessar dados mais rapidamente que HDs magnéticos, que têm partes móveis.", {
    A: "Correta. A ausência de partes mecânicas favorece acesso e resistência a vibrações.",
    B: "Incorreta. Partes móveis aumentam vulnerabilidade a impacto.",
    C: "Incorreta. Em regra, HD ainda tende a ter menor custo por capacidade.",
    D: "Incorreta. As tecnologias físicas são diferentes.",
    E: "Incorreta. HD pode armazenar e inicializar sistema operacional."
  }, "Confundir maior velocidade do SSD com menor preço por capacidade."),

  q("013", BASE_SOURCE, "Em uma lista de componentes, assinale o item que não se classifica propriamente como periférico.", {
    A: "monitor.",
    B: "leitor biométrico.",
    C: "impressora.",
    D: "CPU.",
    E: "teclado."
  }, "D", "Periférico é equipamento de entrada, saída ou interação; a CPU é unidade central de processamento.", "A CPU executa instruções e compõe o processamento central, não sendo periférico como monitor, teclado ou impressora.", {
    A: "Incorreta. Monitor é periférico de saída.",
    B: "Incorreta. Leitor biométrico é periférico de entrada.",
    C: "Incorreta. Impressora é periférico de saída.",
    D: "Correta. CPU não é periférico; é componente central de processamento.",
    E: "Incorreta. Teclado é periférico de entrada."
  }, "Achar que todo hardware é periférico."),

  q("013", BASE_SOURCE, "Uma instituição mantém cópias protegidas de arquivos em ambiente de nuvem para recuperação após incidente. O ataque que criptografa dados e exige pagamento para liberá-los é chamado de:", {
    A: "phishing.",
    B: "ransomware.",
    C: "spam.",
    D: "hoax.",
    E: "adware."
  }, "B", "Identifique a função da cópia de segurança e a conduta do malware descrito no enunciado.", "Ransomware sequestra dados, geralmente por criptografia, e o backup em nuvem ajuda na recuperação sem depender do criminoso.", {
    A: "Incorreta. Phishing é fraude por engenharia social para obter dados ou induzir ação.",
    B: "Correta. Ransomware é o malware de sequestro/criptografia de dados.",
    C: "Incorreta. Spam é envio massivo de mensagens não solicitadas.",
    D: "Incorreta. Hoax é boato ou falso alerta.",
    E: "Incorreta. Adware exibe publicidade, não descreve sequestro de arquivos."
  }, "Misturar backup em nuvem com armazenamento comum e malware de engenharia social.")
];

function rebalanceAnswerLetters(question, index) {
  const targetAnswer = LETTERS[index % LETTERS.length];
  const originalAnswer = question.answer;
  const originalByTarget = { [targetAnswer]: originalAnswer };
  const remainingTargets = LETTERS.filter((letter) => letter !== targetAnswer);
  const remainingOriginals = LETTERS.filter((letter) => letter !== originalAnswer);

  remainingTargets.forEach((letter, letterIndex) => {
    originalByTarget[letter] = remainingOriginals[letterIndex];
  });

  return {
    id: `fgv-${String(index + 1).padStart(3, "0")}`,
    ...question,
    answer: targetAnswer,
    options: Object.fromEntries(LETTERS.map((letter) => [letter, question.options[originalByTarget[letter]]])),
    explanations: Object.fromEntries(LETTERS.map((letter) => [letter, question.explanations[originalByTarget[letter]]]))
  };
}

const fgvQuestionBank = rawFgvQuestionBank.map(rebalanceAnswerLetters);

function getQuestionsForChapter(chapterId) {
  const normalized = String(chapterId).padStart(3, "0");
  return fgvQuestionBank.filter((question) => question.chapterId === normalized);
}

function getQuestionCountForChapter(chapterId) {
  return getQuestionsForChapter(chapterId).length;
}

function getAnswerDistribution() {
  return fgvQuestionBank.reduce((distribution, question) => {
    distribution[question.answer] = (distribution[question.answer] || 0) + 1;
    return distribution;
  }, { A: 0, B: 0, C: 0, D: 0, E: 0 });
}

module.exports = {
  fgvQuestionBank,
  getAnswerDistribution,
  getQuestionCountForChapter,
  getQuestionsForChapter
};
