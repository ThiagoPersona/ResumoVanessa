const officialReferences = {
  editalFgv: {
    label: "Edital PCPR n.º 01/2026 - FGV",
    url: "https://conhecimento.fgv.br/sites/default/files/concursos/edital-01-2026-pcpr-publicacao.docx-1.pdf"
  },
  planaltoConstituicao: {
    label: "Constituição Federal de 1988 - Planalto",
    url: "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm"
  },
  codigoPenal: {
    label: "Código Penal - Planalto",
    url: "https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm"
  },
  codigoProcessoPenal: {
    label: "Código de Processo Penal - Planalto",
    url: "https://www.planalto.gov.br/ccivil_03/decreto-lei/del3689.htm"
  },
  leiOrganicaNacionalPc: {
    label: "Lei Federal n.º 14.735/2023 - Lei Orgânica Nacional das Polícias Civis",
    url: "https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2023/lei/l14735.htm"
  },
  marcoCivil: {
    label: "Lei Federal n.º 12.965/2014 - Marco Civil da Internet",
    url: "https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2014/lei/l12965.htm"
  },
  lgpd: {
    label: "Lei Federal n.º 13.709/2018 - LGPD",
    url: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm"
  },
  crimesInformaticos: {
    label: "Lei Federal n.º 12.737/2012 - Delitos informáticos",
    url: "https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/lei/l12737.htm"
  },
  lei14155: {
    label: "Lei Federal n.º 14.155/2021 - fraudes eletrônicas e invasão de dispositivo",
    url: "https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2021/lei/l14155.htm"
  },
  lai: {
    label: "Lei Federal n.º 12.527/2011 - Lei de Acesso à Informação",
    url: "https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2011/lei/l12527.htm"
  },
  abusoAutoridade: {
    label: "Lei Federal n.º 13.869/2019 - Abuso de Autoridade",
    url: "https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2019/lei/l13869.htm"
  },
  identificacaoCriminal: {
    label: "Lei Federal n.º 12.037/2009 - Identificação Criminal",
    url: "https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2009/lei/l12037.htm"
  },
  lei14133: {
    label: "Lei Federal n.º 14.133/2021 - Licitações e Contratos",
    url: "https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2021/lei/l14133.htm"
  },
  improbidade: {
    label: "Lei Federal n.º 8.429/1992 - Improbidade Administrativa",
    url: "https://www.planalto.gov.br/ccivil_03/leis/l8429.htm"
  },
  marcoCrimeOrganizado: {
    label: "Lei Federal n.º 15.358/2026 - Marco Legal do Combate ao Crime Organizado",
    url: "https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2026/lei/l15358.htm"
  },
  legislacaoParana: {
    label: "Sistema Estadual de Legislação do Paraná - Casa Civil",
    url: "https://www.casacivil.pr.gov.br/servicos/Servicos/Transparencia/Consultar-a-legislacao-do-Parana-4EoVbeon"
  },
  lc259: {
    label: "Lei Complementar Estadual n.º 259/2023 - carreiras da PCPR",
    url: "https://www.legislacao.pr.gov.br/legislacao/exibirAto.do?action=iniciarProcesso&codAto=300584&codItemAto=2334573"
  },
  codigoDisciplinarPcpr: {
    label: "Lei Estadual n.º 21.894/2024 - Código Disciplinar da PCPR",
    url: "https://www.legislacao.pr.gov.br/legislacao/exibirAto.do?action=iniciarProcesso&codAto=323068&codItemAto=2047552"
  },
  regimeJuridicoPr: {
    label: "Lei Estadual n.º 6.174/1970 - regime jurídico dos servidores do PR",
    url: "https://www.legislacao.pr.gov.br/legislacao/exibirAto.do?action=localizarAto&codTipoAto=1&dataAto=16%2F11%2F1970&dataPublicacao=20%2F11%2F1970&nroAto=6174&tipoVisualizacao=original"
  },
  ipardes: {
    label: "IPARDES - indicadores e perfis municipais do Paraná",
    url: "https://www.ipardes.pr.gov.br/"
  },
  ibgeParana: {
    label: "IBGE Cidades e Estados - Paraná",
    url: "https://www.ibge.gov.br/cidades-e-estados/pr.html"
  },
  pactoSaoJose: {
    label: "Decreto n.º 678/1992 - Convenção Americana sobre Direitos Humanos",
    url: "https://www.planalto.gov.br/ccivil_03/decreto/d0678.htm"
  },
  pndh3: {
    label: "Decreto n.º 7.037/2009 - Programa Nacional de Direitos Humanos",
    url: "https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2009/decreto/d7037.htm"
  },
  agenda2030: {
    label: "Nações Unidas Brasil - Objetivos de Desenvolvimento Sustentável",
    url: "https://brasil.un.org/pt-br/sdgs"
  }
};

function chapter(id, title, fileSlug, editalMapping, editalItems, options = {}) {
  const groupId = options.groupId;
  return {
    id,
    title,
    label: `${id} - ${title}`,
    themePath: `temas/${groupId}/${fileSlug}.md`,
    questionPath: `provas/${groupId}/${fileSlug}.md`,
    editalMapping,
    editalItems,
    priority: options.priority || "média",
    localSources: options.localSources || [],
    officialRefs: options.officialRefs || ["editalFgv"],
    questionStatus: options.questionStatus || "Banco em construção",
    convertedQuestions: options.convertedQuestions || 0
  };
}

function group(id, title, shortTitle, editalBlock, weight, sourceKind, localSources, chapters) {
  return {
    id,
    title,
    shortTitle,
    editalBlock,
    weight,
    sourceKind,
    localSources,
    chapters: chapters.map((item) => ({ ...item, groupId: id, groupTitle: title, groupWeight: weight }))
  };
}

const chapterGroups = [
  group("portugues", "Língua Portuguesa", "Português", "Conhecimentos Gerais, item 1", 25, "Conhecimentos Gerais", [
    "Curso de Portugues/Manual de Lingua Portuguesa.pdf",
    "Curso de Portugues/Uso da virgula.pdf",
    "Curso de Portugues/Crase.pdf",
    "Materiais QB/Portugues/"
  ], [
    chapter("001", "Interpretação e compreensão de texto", "001_interpretacao-compreensao-texto", "Língua Portuguesa 1.1", [
      "Interpretação e compreensão de texto."
    ], { groupId: "portugues", priority: "altíssima" }),
    chapter("002", "Organização textual, coesão e coerência", "002_organizacao-textual-coesao-coerencia", "Língua Portuguesa 1.2-1.3", [
      "Organização estrutural dos textos.",
      "Marcas de textualidade: coesão, coerência e intertextualidade."
    ], { groupId: "portugues", priority: "altíssima" }),
    chapter("003", "Modos discursivos, tipos textuais e textos literários", "003_modos-discursivos-tipos-textuais-literarios", "Língua Portuguesa 1.4-1.6", [
      "Descrição, narração, exposição, argumentação e injunção.",
      "Tipos informativo, publicitário, propagandístico, normativo, didático e divinatório.",
      "Textos literários e não literários."
    ], { groupId: "portugues", priority: "alta" }),
    chapter("004", "Frase, sintaxe, discurso e pontuação", "004_frase-sintaxe-discurso-pontuacao", "Língua Portuguesa 1.7-1.17", [
      "Tipologia e estrutura da frase portuguesa.",
      "Deslocamento, substituição, modificação e correção.",
      "Problemas estruturais, norma culta, pontuação e sinais gráficos.",
      "Termos e orações, ordem direta e inversa, tipos de discurso.",
      "Registros, funções da linguagem e elementos dos atos de comunicação."
    ], { groupId: "portugues", priority: "altíssima" }),
    chapter("005", "Morfologia e classes de palavras", "005_morfologia-classes-palavras", "Língua Portuguesa 1.18-1.20", [
      "Estrutura e formação de palavras.",
      "Formas de abreviação.",
      "Classes de palavras e aspectos morfológicos, sintáticos, semânticos e textuais.",
      "Modalizadores."
    ], { groupId: "portugues", priority: "alta" }),
    chapter("006", "Semântica, vocabulário, ortografia, acentuação e crase", "006_semantica-vocabulario-ortografia-crase", "Língua Portuguesa 1.21-1.26", [
      "Sentido próprio e figurado; antônimos, sinônimos, parônimos e hiperônimos.",
      "Polissemia e ambiguidade.",
      "Dicionários, tipos e organização de verbetes.",
      "Neologismos, arcaísmos, estrangeirismos e latinismos.",
      "Ortografia, acentuação gráfica e crase."
    ], { groupId: "portugues", priority: "altíssima" })
  ]),
  group("rlm", "Raciocínio Lógico-Matemático", "RLM", "Conhecimentos Gerais, item 2", 5, "Conhecimentos Gerais", [
    "Materiais QB/RLM/raciocinio-logico-mapas-do-concursado.pdf",
    "Materiais QB/Matematica/"
  ], [
    chapter("007", "Lógica proposicional e conjuntos", "001_logica-proposicional-conjuntos", "RLM 2.1-2.2", [
      "Lógica proposicional.",
      "Operações com conjuntos."
    ], { groupId: "rlm", priority: "alta" }),
    chapter("008", "Números, porcentagem, juros, proporcionalidade e medidas", "002_numeros-porcentagem-juros-proporcionalidade-medidas", "RLM 2.3-2.5", [
      "Números inteiros, racionais e reais.",
      "Porcentagem, juros simples e compostos.",
      "Razões, proporções, regra de três e sistemas de medidas."
    ], { groupId: "rlm", priority: "alta" }),
    chapter("009", "Geometria, plano cartesiano, gráficos e tabelas", "003_geometria-plano-cartesiano-graficos-tabelas", "RLM 2.8, 2.11-2.12", [
      "Interpretação de dados em gráficos e tabelas.",
      "Geometria básica: ângulos, triângulos, polígonos, distâncias, proporcionalidade, perímetro e área.",
      "Plano cartesiano: coordenadas e distância."
    ], { groupId: "rlm", priority: "média" }),
    chapter("010", "Problemas lógicos, contagem, probabilidade e sequências", "004_problemas-logicos-contagem-probabilidade-sequencias", "RLM 2.6-2.7, 2.9-2.10, 2.13", [
      "Associações arbitrárias entre pessoas, lugares, objetos ou eventos fictícios.",
      "Dedução de informações e avaliação de condições.",
      "Raciocínio verbal, matemático e sequencial; orientação espacial e temporal.",
      "Problemas aritméticos, geométricos e matriciais.",
      "Contagem, noções de probabilidade e problemas de lógica."
    ], { groupId: "rlm", priority: "alta" })
  ]),
  group("realidade-pr", "Realidade do Paraná", "Realidade PR", "Conhecimentos Gerais, item 3", 5, "Conhecimentos Gerais", [
    "GUIA DE DISCIPLINAS.pdf"
  ], [
    chapter("011", "História, geografia e organização territorial do Paraná", "001_historia-geografia-parana", "Realidade do Paraná 3.1-3.3", [
      "Formação territorial, processos coloniais, movimentos sociais e desenvolvimento histórico.",
      "Geografia física e humana: relevo, clima, hidrografia, vegetação, população, densidade e economia.",
      "Divisão político-administrativa: municípios e regiões de desenvolvimento."
    ], { groupId: "realidade-pr", priority: "média", officialRefs: ["editalFgv", "ipardes", "ibgeParana"] }),
    chapter("012", "Cultura, indicadores, economia, políticas públicas e atualidades", "002_cultura-indicadores-economia-politicas-atualidades", "Realidade do Paraná 3.4-3.7", [
      "Cultura paranaense: manifestações, patrimônio, festas, artes, literatura, música e tradições.",
      "Indicadores sociais e econômicos: IDH, segurança pública, saúde, educação, mobilidade e desenvolvimento regional.",
      "Governo estadual, políticas públicas, programas sociais e desafios contemporâneos.",
      "Temas atuais: segurança pública, economia, meio ambiente, inclusão social e sustentabilidade."
    ], { groupId: "realidade-pr", priority: "média", officialRefs: ["editalFgv", "ipardes", "ibgeParana"] })
  ]),
  group("tecnologia", "Tecnologia, Segurança Cibernética e Crimes Digitais", "Tecnologia", "Conhecimentos Específicos, item 1", 15, "Conhecimentos Específicos", [
    "Curso Alfacon/Tecnologias e sistema de informacao e seguranca cibernética.pdf",
    "Materiais QB/Informatica/",
    "Questões FGV/Exercicios informatica.pdf",
    "Questões FGV/Questoes informatica.pdf"
  ], [
    chapter("013", "Hardware, software, periféricos e armazenamento", "001_hardware-software-perifericos-armazenamento", "Tecnologia 1.1", [
      "Hardware, software, periféricos e dispositivos móveis.",
      "Armazenamento de dados, backup, BIOS, UEFI, drivers e firmware."
    ], { groupId: "tecnologia", priority: "altíssima", convertedQuestions: 6, questionStatus: "6 questões comentadas" }),
    chapter("014", "Sistemas operacionais, aplicativos e dispositivos móveis", "002_sistemas-operacionais-aplicativos-dispositivos-moveis", "Tecnologia 1.2", [
      "Microsoft Windows 11 (BR), Android e iOS.",
      "Microsoft 365 (BR), LibreOffice/BrOffice e Google Workspace.",
      "Instalação, atualização, configuração e segurança de sistemas e aplicativos."
    ], { groupId: "tecnologia", priority: "alta" }),
    chapter("015", "Internet, redes, nuvem, web, bancos e APIs", "003_internet-redes-nuvem-web-bancos-apis", "Tecnologia 1.3", [
      "Internet, intranet, navegadores, correio eletrônico e computação em nuvem.",
      "Compartilhamento de arquivos, redes, IP, DNS, VPN e firewall.",
      "Redes sociais, plataformas digitais, registros eletrônicos, cookies, cache e metadados.",
      "Lógica de programação, aplicações web, HTML, CSS, JavaScript, bancos de dados e APIs."
    ], { groupId: "tecnologia", priority: "altíssima" }),
    chapter("016", "Segurança da informação, malware, phishing e backup", "004_seguranca-informacao-malware-phishing-backup", "Tecnologia 1.4", [
      "Confidencialidade, integridade, disponibilidade, autenticidade e rastreabilidade.",
      "Controle de acesso, autenticação, logs, auditoria, criptografia e certificados digitais.",
      "Backup, recuperação de dados, vulnerabilidades, malware, ransomware, phishing e engenharia social.",
      "Segurança em redes, dispositivos e nuvem; políticas de segurança; proteção de dados; resposta a incidentes."
    ], { groupId: "tecnologia", priority: "altíssima", officialRefs: ["editalFgv", "lgpd"] }),
    chapter("017", "Crimes digitais, evidências eletrônicas e OSINT", "005_crimes-digitais-evidencias-osint", "Tecnologia 1.5", [
      "Crimes digitais, fraudes eletrônicas, invasão de dispositivos e crimes em redes sociais.",
      "Coleta, preservação, rastreabilidade e cadeia de custódia de evidências digitais.",
      "Rastreamento, recuperação de informações, inteligência cibernética e OSINT."
    ], { groupId: "tecnologia", priority: "alta", officialRefs: ["editalFgv", "codigoPenal", "crimesInformaticos", "lei14155"] }),
    chapter("018", "Legislação e ética digital", "006_legislacao-etica-digital", "Tecnologia 1.6", [
      "Marco Civil da Internet.",
      "Lei Geral de Proteção de Dados Pessoais.",
      "Lei dos Crimes Informáticos e Lei Federal n.º 14.155/2021.",
      "Sigilo funcional e uso ético e responsável da tecnologia e das informações institucionais."
    ], { groupId: "tecnologia", priority: "alta", officialRefs: ["editalFgv", "marcoCivil", "lgpd", "crimesInformaticos", "lei14155"] })
  ]),
  group("ciencias-forenses", "Ciências Forenses", "Ciências Forenses", "Conhecimentos Específicos, item 2", 10, "Conhecimentos Específicos", [
    "Curso Alfacon/Medicina legal.pdf",
    "Questões FGV/Questoes Criminalistica.pdf",
    "Questões FGV/Questoes Criminologia.pdf",
    "Questões FGV/Questoes Crime.pdf"
  ], [
    chapter("019", "Medicina legal, identificação humana e papiloscopia", "001_medicina-legal-identificacao-papiloscopia", "Ciências Forenses 2.1", [
      "Medicina Legal: conceito, divisões e importância.",
      "Perícia médico-legal, identificação humana e papiloscopia."
    ], { groupId: "ciencias-forenses", priority: "altíssima" }),
    chapter("020", "Antropologia, odontologia legal, DNA, reconhecimento facial e IA", "002_antropologia-odontologia-dna-reconhecimento-facial-ia", "Ciências Forenses 2.1", [
      "Antropologia forense, odontologia legal e identificação por DNA.",
      "Reconhecimento facial e inteligência artificial aplicada à identificação pericial."
    ], { groupId: "ciencias-forenses", priority: "alta" }),
    chapter("021", "Sexologia, traumatologia, asfixiologia e balística", "003_sexologia-traumatologia-asfixiologia-balistica", "Ciências Forenses 2.1", [
      "Sexologia forense, traumatologia forense e lesões corporais.",
      "Instrumentos lesivos, asfixiologia e balística forense."
    ], { groupId: "ciencias-forenses", priority: "alta" }),
    chapter("022", "Tanatologia, necropsia, toxicologia e psicopatologia", "004_tanatologia-necropsia-toxicologia-psicopatologia", "Ciências Forenses 2.1", [
      "Tanatologia, morte, fenômenos cadavéricos e necropsia.",
      "Toxicologia forense, intoxicações e exames toxicológicos.",
      "Psicopatologia forense, imputabilidade penal e perícia psiquiátrica."
    ], { groupId: "ciencias-forenses", priority: "alta" }),
    chapter("023", "Criminalística, local de crime e cadeia de custódia", "005_criminalistica-local-crime-cadeia-custodia", "Ciências Forenses 2.2", [
      "Criminalística, vestígios, indícios e evidências.",
      "Local de crime, preservação de local de crime e cadeia de custódia."
    ], { groupId: "ciencias-forenses", priority: "altíssima", officialRefs: ["editalFgv", "codigoProcessoPenal"] }),
    chapter("024", "Documentoscopia, grafoscopia e falsificações", "006_documentoscopia-grafoscopia-falsificacoes", "Ciências Forenses 2.2", [
      "Documentoscopia, grafoscopia e análise documental.",
      "Análise de assinaturas e falsificações."
    ], { groupId: "ciencias-forenses", priority: "alta" }),
    chapter("025", "Criminologia, vitimologia e controle social", "007_criminologia-vitimologia-controle-social", "Ciências Forenses 2.3", [
      "Conceito, objeto e métodos da criminologia.",
      "Escolas criminológicas, criminologia crítica e teorias criminológicas.",
      "Vitimologia, classificação das vítimas, vitimização, controle social e prevenção do delito.",
      "Criminologia e política criminal; atuação policial, perfil criminal e indicadores."
    ], { groupId: "ciencias-forenses", priority: "alta" }),
    chapter("026", "Criminologia digital e investigação tecnológica", "008_criminologia-digital-investigacao-tecnologica", "Ciências Forenses 2.4", [
      "Crimes digitais, perfil do criminoso cibernético, deep web e dark web.",
      "Ambientes digitais criminógenos, vitimização digital e rastreamento de informações.",
      "Evidências eletrônicas, logs, metadados, redes sociais, preservação de evidências, inteligência cibernética e OSINT."
    ], { groupId: "ciencias-forenses", priority: "alta", officialRefs: ["editalFgv", "codigoPenal", "crimesInformaticos", "lei14155"] })
  ]),
  group("biologia", "Biologia", "Biologia", "Conhecimentos Específicos, item 3", 10, "Conhecimentos Específicos", [
    "Curso Alfacon/Biologia.pdf",
    "Policia Civil/Biologia/Biologia - cópia.pdf",
    "Questões FGV/Questoes Biologia.pdf"
  ], [
    chapter("027", "Citologia", "001_citologia", "Biologia 3.1", [
      "Composição química da célula.",
      "Estrutura e função celular.",
      "Membrana plasmática, organelas citoplasmáticas, núcleo celular e divisão celular."
    ], { groupId: "biologia", priority: "alta" }),
    chapter("028", "Genética", "002_genetica", "Biologia 3.2", [
      "DNA, RNA, genes e cromossomos.",
      "Hereditariedade, leis de Mendel e probabilidade genética.",
      "Herança ligada ao sexo, determinação genética do sexo e grupos sanguíneos."
    ], { groupId: "biologia", priority: "altíssima" }),
    chapter("029", "Embriologia e cristas papilares", "003_embriologia-cristas-papilares", "Biologia 3.3", [
      "Gametogênese, fecundação e desenvolvimento embrionário.",
      "Formação das cristas papilares."
    ], { groupId: "biologia", priority: "altíssima" }),
    chapter("030", "Biologia da identificação humana e biometria", "004_biologia-identificacao-humana-biometria", "Biologia 3.4", [
      "Bases biológicas das impressões digitais.",
      "Biometria e identificação humana por características biológicas."
    ], { groupId: "biologia", priority: "altíssima" })
  ]),
  group("fisica", "Física", "Física", "Conhecimentos Específicos, item 4", 5, "Conhecimentos Específicos", [
    "Curso Alfacon/Fisica.pdf",
    "Materiais QB/Física/"
  ], [
    chapter("031", "Óptica e formação de imagens", "001_optica-formacao-imagens", "Física 4.1", [
      "Natureza da luz, reflexão, refração, espelhos, lentes e formação de imagens."
    ], { groupId: "fisica", priority: "alta" }),
    chapter("032", "UV, fluorescência, ondas e eletromagnetismo", "002_uv-fluorescencia-ondas-eletromagnetismo", "Física 4.1-4.2", [
      "Luz ultravioleta e fluorescência.",
      "Ondas eletromagnéticas, espectro eletromagnético e aplicações tecnológicas."
    ], { groupId: "fisica", priority: "alta" }),
    chapter("033", "Eletricidade e circuitos simples", "003_eletricidade-circuitos-simples", "Física 4.3", [
      "Carga elétrica, corrente elétrica, diferença de potencial e resistência elétrica.",
      "Circuitos elétricos simples."
    ], { groupId: "fisica", priority: "média" }),
    chapter("034", "Física da captura de imagens, biometria e equipamentos", "004_fisica-captura-imagens-biometria-equipamentos", "Física 4.4", [
      "Fundamentos físicos da captura de imagens e fotografia digital.",
      "Sistemas biométricos e equipamentos ópticos e eletrônicos aplicados à identificação humana."
    ], { groupId: "fisica", priority: "alta" })
  ]),
  group("quimica", "Química", "Química", "Conhecimentos Específicos, item 5", 5, "Conhecimentos Específicos", [
    "Curso Alfacon/Quimica.pdf"
  ], [
    chapter("035", "Estrutura da matéria, tabela periódica e ligações", "001_estrutura-materia-tabela-periodica-ligacoes", "Química 5.1", [
      "Modelos atômicos, estrutura do átomo e elementos químicos.",
      "Classificação periódica e ligações químicas."
    ], { groupId: "quimica", priority: "média" }),
    chapter("036", "Misturas, soluções, separação e concentração", "002_misturas-solucoes-separacao-concentracao", "Química 5.2", [
      "Misturas e métodos de separação.",
      "Soluções, concentração e solubilidade."
    ], { groupId: "quimica", priority: "alta" }),
    chapter("037", "Reações, balanceamento, velocidade e equilíbrio", "003_reacoes-balanceamento-velocidade-equilibrio", "Química 5.3", [
      "Reações químicas e balanceamento.",
      "Velocidade das reações e equilíbrio químico."
    ], { groupId: "quimica", priority: "média" }),
    chapter("038", "Funções químicas e química orgânica", "004_funcoes-quimicas-organica", "Química 5.4", [
      "Ácidos, bases, sais e óxidos.",
      "Compostos orgânicos, funções orgânicas e propriedades físicas e químicas."
    ], { groupId: "quimica", priority: "alta" }),
    chapter("039", "Química da identificação, reagentes e fluorescência", "005_quimica-identificacao-reagentes-fluorescencia", "Química 5.5", [
      "Interações químicas aplicadas à identificação humana.",
      "Reagentes aplicados à revelação de impressões digitais.",
      "Fundamentos químicos da fluorescência."
    ], { groupId: "quimica", priority: "altíssima" })
  ]),
  group("legislacao", "Legislação Estadual e Institucional", "Legislação", "Conhecimentos Específicos, item 6", 5, "Conhecimentos Específicos", [
    "Curso Alfacon/Legislacao Especial.pdf"
  ], [
    chapter("040", "Constituição do Paraná: administração, servidores, segurança e Polícia Civil", "001_constituicao-parana-administracao-seguranca", "Legislação 6.1", [
      "Constituição do Estado do Paraná: Administração Pública, servidores públicos, segurança pública e Polícia Civil."
    ], { groupId: "legislacao", priority: "alta", officialRefs: ["editalFgv", "legislacaoParana"] }),
    chapter("041", "LC 259/2023: carreiras da PCPR", "002_lc-259-2023-carreiras-pcpr", "Legislação 6.2", [
      "Estruturação das carreiras da Polícia Civil do Estado do Paraná.",
      "Lei Complementar Estadual n.º 259/2023 e alterações posteriores."
    ], { groupId: "legislacao", priority: "altíssima", officialRefs: ["editalFgv", "lc259", "legislacaoParana"] }),
    chapter("042", "Lei 14.735/2023: Lei Orgânica Nacional das Polícias Civis", "003_lei-14735-2023-organica-nacional-policias-civis", "Legislação 6.3", [
      "Lei Orgânica Nacional das Polícias Civis.",
      "Normas gerais de funcionamento das polícias civis."
    ], { groupId: "legislacao", priority: "altíssima", officialRefs: ["editalFgv", "leiOrganicaNacionalPc"] }),
    chapter("043", "Lei 23.213/2026: Lei Orgânica da PCPR", "004_lei-23213-2026-organica-pcpr", "Legislação 6.4", [
      "Lei Orgânica da Polícia Civil do Estado do Paraná.",
      "Lei Estadual n.º 23.213/2026."
    ], { groupId: "legislacao", priority: "altíssima", officialRefs: ["editalFgv", "legislacaoParana"] }),
    chapter("044", "Lei 21.894/2024: Código Disciplinar da PCPR", "005_lei-21894-2024-codigo-disciplinar-pcpr", "Legislação 6.5", [
      "Código Disciplinar da Polícia Civil do Paraná.",
      "Deveres, vedações, transgressões, sanções, processos e recursos."
    ], { groupId: "legislacao", priority: "alta", officialRefs: ["editalFgv", "codigoDisciplinarPcpr"] }),
    chapter("045", "Lei 6.174/1970: regime jurídico dos servidores do Paraná", "006_lei-6174-1970-regime-juridico-pr", "Legislação 6.6", [
      "Regime jurídico dos servidores públicos do Estado do Paraná.",
      "Provimento, vacância, direitos, vantagens, deveres, proibições e responsabilidades.",
      "Ética no serviço público, sigilo funcional e proteção de informações institucionais."
    ], { groupId: "legislacao", priority: "alta", officialRefs: ["editalFgv", "regimeJuridicoPr"] }),
    chapter("046", "Abuso de autoridade, identificação criminal, LGPD, LAI e sigilo", "007_abuso-identificacao-lgpd-lai-sigilo", "Legislação 6.7", [
      "Lei de Abuso de Autoridade.",
      "Lei de Identificação Criminal.",
      "LGPD e Lei de Acesso à Informação.",
      "Sigilo funcional e proteção de informações institucionais."
    ], { groupId: "legislacao", priority: "altíssima", officialRefs: ["editalFgv", "abusoAutoridade", "identificacaoCriminal", "lgpd", "lai"] })
  ]),
  group("penal", "Direito Penal Aplicado", "Penal", "Conhecimentos Específicos, item 7", 3, "Conhecimentos Específicos", [
    "Curso Alfacon/Direito penal.pdf",
    "Curso Alfacon/Direito Penal Parte Geral.pdf",
    "Materiais QB/Penal/"
  ], [
    chapter("047", "Princípios, teoria do crime, penas e extinção da punibilidade", "001_principios-teoria-crime-penas", "Penal 7.1", [
      "Princípios básicos do Direito Penal e aplicação da lei penal.",
      "Teoria do crime, dolo, culpa, consumação, tentativa e concurso de pessoas.",
      "Penas e extinção da punibilidade."
    ], { groupId: "penal", priority: "alta", officialRefs: ["editalFgv", "codigoPenal"] }),
    chapter("048", "Crimes contra pessoa, patrimônio, dignidade sexual, fé pública e Administração", "002_crimes-pessoa-patrimonio-dignidade-fe-publica-administracao", "Penal 7.2", [
      "Crimes contra a pessoa.",
      "Crimes contra o patrimônio.",
      "Crimes contra a dignidade sexual, contra a fé pública e contra a Administração Pública."
    ], { groupId: "penal", priority: "alta", officialRefs: ["editalFgv", "codigoPenal"] }),
    chapter("049", "Legislação penal extravagante e atividade policial", "003_legislacao-extravagante-atividade-policial", "Penal 7.3-7.4", [
      "Lei Maria da Penha, Lei de Drogas, Estatuto do Desarmamento, Lei das Organizações Criminosas e Lei de Abuso de Autoridade.",
      "Prisão em flagrante, excludentes de ilicitude, uso legítimo da força, cadeia de custódia e garantias fundamentais do investigado.",
      "Estatuto da Advocacia e OAB: aspectos penais."
    ], { groupId: "penal", priority: "altíssima", officialRefs: ["editalFgv", "codigoPenal", "abusoAutoridade", "marcoCrimeOrganizado"] })
  ]),
  group("processo-penal", "Direito Processual Penal Aplicado", "Processo Penal", "Conhecimentos Específicos, item 8", 3, "Conhecimentos Específicos", [
    "Curso Alfacon/Processo Penal.pdf",
    "Materiais QB/Processual Penal/"
  ], [
    chapter("050", "Princípios, inquérito, ação penal e direitos do investigado", "001_principios-inquerito-acao-direitos-investigado", "Processo Penal 8.1", [
      "Princípios do processo penal e aplicação da lei processual penal.",
      "Inquérito policial, notícia do crime, ação penal e direitos e garantias do investigado."
    ], { groupId: "processo-penal", priority: "alta", officialRefs: ["editalFgv", "codigoProcessoPenal", "planaltoConstituicao"] }),
    chapter("051", "Provas, cadeia de custódia, busca e reconhecimento", "002_provas-cadeia-custodia-busca-reconhecimento", "Processo Penal 8.2", [
      "Provas, cadeia de custódia e preservação de local de crime.",
      "Busca e apreensão; reconhecimento de pessoas e coisas."
    ], { groupId: "processo-penal", priority: "altíssima", officialRefs: ["editalFgv", "codigoProcessoPenal"] }),
    chapter("052", "Prisões, cautelares e leis processuais extravagantes", "003_prisoes-cautelares-leis-processuais", "Processo Penal 8.3-8.4", [
      "Prisão em flagrante, prisão preventiva, liberdade provisória e medidas cautelares diversas da prisão.",
      "Lei Maria da Penha, Lei de Drogas, Lei das Organizações Criminosas, Lei de Interceptação Telefônica e Lei de Abuso de Autoridade.",
      "Estatuto da Advocacia e OAB: aspectos processuais penais."
    ], { groupId: "processo-penal", priority: "alta", officialRefs: ["editalFgv", "codigoProcessoPenal", "abusoAutoridade", "marcoCrimeOrganizado"] })
  ]),
  group("constitucional", "Direito Constitucional", "Constitucional", "Conhecimentos Específicos, item 9", 3, "Conhecimentos Específicos", [
    "Curso Alfacon/Direito Constitucional - cópia.pdf",
    "Materiais QB/Constitucional/"
  ], [
    chapter("053", "Princípios, direitos, garantias e remédios constitucionais", "001_principios-direitos-garantias-remedios", "Constitucional 8.1-8.3", [
      "Princípios fundamentais da Constituição de 1988.",
      "Direitos e garantias fundamentais, direitos sociais, nacionalidade, direitos políticos e garantias constitucionais.",
      "Devido processo legal, inviolabilidade de domicílio, sigilo de dados e comunicações, prisão e liberdade.",
      "Habeas corpus, habeas data, mandado de segurança, mandado de injunção e ação popular."
    ], { groupId: "constitucional", priority: "altíssima", officialRefs: ["editalFgv", "planaltoConstituicao"] }),
    chapter("054", "Organização do Estado, Poderes e segurança pública", "002_organizacao-estado-poderes-seguranca-publica", "Constitucional 8.4-8.6", [
      "União, Estados, Municípios, Distrito Federal e competências constitucionais.",
      "Poder Executivo, Legislativo e Judiciário: funções, competências e limites.",
      "Segurança pública no art. 144, polícias, Polícia Civil, polícia judiciária e investigação criminal."
    ], { groupId: "constitucional", priority: "altíssima", officialRefs: ["editalFgv", "planaltoConstituicao"] }),
    chapter("055", "Controle de constitucionalidade e Constituição do Paraná", "003_controle-constitucionalidade-constituicao-parana", "Constitucional 8.7-8.8", [
      "Ação direta de inconstitucionalidade e ação declaratória de constitucionalidade.",
      "Constituição do Estado do Paraná: Administração Pública, servidores, segurança pública e Polícia Civil."
    ], { groupId: "constitucional", priority: "alta", officialRefs: ["editalFgv", "planaltoConstituicao", "legislacaoParana"] })
  ]),
  group("administrativo", "Direito Administrativo", "Administrativo", "Conhecimentos Específicos, item 10", 3, "Conhecimentos Específicos", [
    "Curso Alfacon/Direito Administrativo - cópia.pdf",
    "Materiais QB/Administrativo/"
  ], [
    chapter("056", "Conceito, fontes, princípios e Administração Pública", "001_conceito-fontes-principios-administracao", "Administrativo 9.1-9.2", [
      "Conceito, fontes e princípios do Direito Administrativo.",
      "Princípios da Administração Pública e LINDB aplicada ao Direito Administrativo.",
      "Administração direta e indireta; autarquias, fundações, empresas públicas e sociedades de economia mista."
    ], { groupId: "administrativo", priority: "alta", officialRefs: ["editalFgv", "planaltoConstituicao"] }),
    chapter("057", "Atos, poderes, serviços, licitações e contratos", "002_atos-poderes-servicos-licitacoes-contratos", "Administrativo 9.3-9.6", [
      "Atos administrativos: requisitos, atributos, classificação, espécies, revogação, invalidação e convalidação.",
      "Poderes hierárquico, disciplinar, regulamentar e de polícia; abuso de poder.",
      "Serviços públicos; Lei n.º 14.133/2021."
    ], { groupId: "administrativo", priority: "altíssima", officialRefs: ["editalFgv", "lei14133", "abusoAutoridade"] }),
    chapter("058", "Agentes, responsabilidade, improbidade e controle", "003_agentes-responsabilidade-improbidade-controle", "Administrativo 9.7-9.10", [
      "Agentes públicos, cargos, empregos e funções públicas.",
      "Investidura, direitos, deveres, responsabilidades e processo administrativo disciplinar.",
      "Responsabilidade civil do Estado, improbidade administrativa e controle da Administração."
    ], { groupId: "administrativo", priority: "alta", officialRefs: ["editalFgv", "improbidade", "regimeJuridicoPr"] })
  ]),
  group("direitos-humanos", "Direitos Humanos", "Direitos Humanos", "Conhecimentos Específicos, item 11", 3, "Conhecimentos Específicos", [
    "Curso Alfacon/Direitos Humanos - cópia.pdf",
    "Materiais QB/Direitos Humanos/"
  ], [
    chapter("059", "Teoria, sistemas de proteção e democracia", "001_teoria-sistemas-protecao-democracia", "Direitos Humanos 10.1-10.3", [
      "Teoria geral: conceito, características, princípios e evolução histórica.",
      "Sistema global e sistema interamericano de proteção; tratados internacionais; Constituição de 1988.",
      "Democracia, cidadania e Direitos Humanos."
    ], { groupId: "direitos-humanos", priority: "alta", officialRefs: ["editalFgv", "planaltoConstituicao", "pactoSaoJose"] }),
    chapter("060", "Grupos vulneráveis, segurança pública e atuação policial", "002_grupos-vulneraveis-atuacao-policial", "Direitos Humanos 10.4-10.5", [
      "Mulheres, idosos, crianças e adolescentes, povos indígenas e comunidades tradicionais, pessoas com deficiência, população LGBTQIA+ e refugiados.",
      "Dignidade humana, uso proporcional da força, prevenção da tortura, direitos da pessoa presa e atuação policial."
    ], { groupId: "direitos-humanos", priority: "altíssima", officialRefs: ["editalFgv", "planaltoConstituicao", "pactoSaoJose"] }),
    chapter("061", "PNDH, educação em direitos humanos e Agenda 2030", "003_pndh-educacao-agenda-2030", "Direitos Humanos 10.6-10.7", [
      "Política Nacional de Direitos Humanos.",
      "Educação em Direitos Humanos e cultura de proteção.",
      "Agenda 2030 e Objetivos de Desenvolvimento Sustentável."
    ], { groupId: "direitos-humanos", priority: "média", officialRefs: ["editalFgv", "pndh3", "agenda2030"] })
  ])
];

function getAllChapters() {
  return chapterGroups.flatMap((groupItem) => groupItem.chapters.map((item) => ({
    ...item,
    groupId: groupItem.id,
    groupTitle: groupItem.title,
    groupShortTitle: groupItem.shortTitle,
    groupWeight: groupItem.weight,
    sourceKind: groupItem.sourceKind,
    groupLocalSources: groupItem.localSources
  })));
}

function getChapterById(id) {
  return getAllChapters().find((chapterItem) => chapterItem.id === String(id).padStart(3, "0"));
}

function buildSidebarMarkdown() {
  const lines = [
    "- [Leitura Oficial](LEITURA_OFICIAL.md)",
    "- [Mapa de Questões](MAPA_DE_QUESTOES.md)",
    "- [Provas](PROVAS.md)",
    "- [Intensivão](INTENSIVAO.md)",
    "- [Regras](REGRAS_DO_MATERIAL.md)",
    ""
  ];

  chapterGroups.forEach((groupItem) => {
    lines.push(`- **${groupItem.title}**`);
    groupItem.chapters.forEach((item) => {
      lines.push(`  - [${item.label}](${item.themePath})`);
    });
  });

  return `${lines.join("\n")}\n`;
}

function buildLeituraRows() {
  return getAllChapters().map((item, index) => ({
    ordem: index + 1,
    id: item.id,
    disciplina: item.groupShortTitle,
    tema: item.title,
    edital: item.editalMapping,
    prioridade: item.priority,
    temaLink: item.themePath,
    questoesLink: item.questionPath
  }));
}

function buildProvasRows() {
  return getAllChapters().map((item) => ({
    id: item.id,
    disciplina: item.groupShortTitle,
    tema: item.title,
    edital: item.editalMapping,
    total: item.convertedQuestions || 0,
    status: item.questionStatus,
    link: item.questionPath
  }));
}

module.exports = {
  officialReferences,
  chapterGroups,
  getAllChapters,
  getChapterById,
  buildSidebarMarkdown,
  buildLeituraRows,
  buildProvasRows
};
