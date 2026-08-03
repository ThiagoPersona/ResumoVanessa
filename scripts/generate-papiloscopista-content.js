const fs = require("node:fs");
const path = require("node:path");

const {
  buildProvasRows,
  buildSidebarMarkdown,
  chapterGroups,
  getAllChapters,
  officialReferences
} = require("../Papiloscopista/content-manifest");

const root = path.resolve(__dirname, "..");
const papiloRoot = path.join(root, "Papiloscopista");

const groupProfiles = {
  portugues: {
    fgv: "A FGV costuma cobrar língua portuguesa de modo interpretativo: troca uma palavra, muda o referente, desloca pontuação ou pede o efeito de sentido no texto.",
    candidateConfusion: "confundir compreensão literal com inferência; decorar regra sem voltar ao trecho; aceitar reescrita gramaticalmente correta, mas semanticamente diferente.",
    application: "Para Papiloscopista, português vale muito e funciona como disciplina de estabilidade: cada acerto aqui diminui a pressão sobre blocos técnicos mais estreitos.",
    solve: [
      "Leia primeiro o comando e marque se a banca quer ideia correta, incorreta, equivalente ou efeito de sentido.",
      "Volte ao trecho exato antes de decidir; a FGV gosta de alternativas plausíveis fora do recorte pedido.",
      "Em reescritura, teste sentido, regência, concordância, pontuação e manutenção do referente.",
      "Quando houver termo absoluto, procure no texto uma exceção, restrição ou modalizador."
    ],
    traps: [
      "Alternativa com sinônimo aproximado que muda intensidade ou ponto de vista.",
      "Troca de causa por consequência, finalidade por resultado ou fato por opinião.",
      "Pontuação que mantém a gramática, mas altera o sentido.",
      "Uso de 'sempre', 'nunca', 'apenas' e 'necessariamente' sem apoio textual."
    ]
  },
  rlm: {
    fgv: "A FGV prefere problemas curtos, com informação suficiente, mas exige organização visual: tabela, diagrama, árvore, equivalência lógica ou cálculo em etapas.",
    candidateConfusion: "sair calculando sem traduzir o enunciado; misturar porcentagem com ponto percentual; esquecer restrições de contagem e probabilidade.",
    application: "RLM tem menos questões, mas costuma render pontos rápidos quando o método é automático: organizar, calcular, testar e conferir unidade.",
    solve: [
      "Transforme o texto em tabela, desenho ou expressão antes de escolher alternativa.",
      "Procure palavras de restrição: todos, algum, nenhum, exatamente, pelo menos, no máximo.",
      "Em porcentagem, defina a base de cálculo antes de aplicar aumento, desconto ou juros.",
      "Em contagem, separe casos incompatíveis e evite contar a mesma situação duas vezes."
    ],
    traps: [
      "Confundir negação de 'todo' com 'nenhum'.",
      "Calcular porcentagem sobre a base errada.",
      "Somar probabilidades de eventos que não são mutuamente exclusivos.",
      "Ignorar unidade de medida, escala do gráfico ou intervalo da tabela."
    ]
  },
  "realidade-pr": {
    fgv: "A banca tende a cobrar leitura de realidade regional por associação: processo histórico, território, indicadores, políticas públicas e atualidades do Paraná.",
    candidateConfusion: "memorizar número isolado sem fonte; confundir Região Metropolitana, macrorregião, município e região de desenvolvimento; tratar atualidade como opinião.",
    application: "Aqui o foco é repertório organizado e conferido em fonte oficial. Números mudam, então estatística deve vir de IBGE, IPARDES ou governo estadual.",
    solve: [
      "Diferencie fato histórico, característica geográfica, indicador social e política pública.",
      "Quando houver dado numérico, confira se o comando pede valor absoluto, posição relativa ou tendência.",
      "Associe economia e território: agroindústria, serviços, logística, energia, fronteira e regiões metropolitanas.",
      "Em atualidades, prefira fonte oficial e evite resposta baseada em manchete solta."
    ],
    traps: [
      "Atualidade desatualizada em material antigo.",
      "Indicador trocado: IDH, IPDM, densidade, população e PIB não medem a mesma coisa.",
      "Generalização do Paraná como se todas as regiões tivessem a mesma base econômica.",
      "Confundir cultura popular, patrimônio material e patrimônio imaterial."
    ]
  },
  tecnologia: {
    fgv: "A FGV cobra informática por conceito operacional: para que serve, qual risco evita, qual ferramenta se aplica e qual termo técnico foi trocado.",
    candidateConfusion: "confundir armazenamento com memória principal; nuvem com backup; autenticação com autorização; log com backup; malware com engenharia social.",
    application: "No cargo, tecnologia conversa diretamente com evidência digital, biometria, rastreabilidade, sigilo funcional e segurança de dados institucionais.",
    solve: [
      "Classifique o item pela função: armazenar, processar, comunicar, proteger, autenticar, registrar ou investigar.",
      "Nos temas de segurança, aplique a tríade confidencialidade, integridade e disponibilidade.",
      "Em crimes digitais, separe conduta criminosa, meio tecnológico e tratamento da evidência.",
      "Em legislação digital, procure sujeito, dever, finalidade, sigilo e base legal."
    ],
    traps: [
      "Chamar todo serviço em nuvem de backup.",
      "Tratar criptografia como sinônimo de assinatura digital.",
      "Confundir dado, metadado, log, cache e cookie.",
      "Usar print ou cópia informal como se bastasse para cadeia de custódia."
    ]
  },
  "ciencias-forenses": {
    fgv: "A cobrança tende a misturar conceito e aplicação: nome técnico, finalidade pericial, ordem de preservação e diferença entre vestígio, indício e evidência.",
    candidateConfusion: "misturar áreas da Medicina Legal; confundir identificação com reconhecimento; tratar vestígio e evidência como sinônimos absolutos.",
    application: "Este é o núcleo de identidade do cargo. Papiloscopia, identificação humana, local de crime, cadeia de custódia e documentação devem ter prioridade máxima.",
    solve: [
      "Comece separando a área pericial: identificação, local de crime, documento, lesão, morte, toxicologia ou criminologia.",
      "Procure o verbo do enunciado: preservar, coletar, comparar, identificar, reconhecer, classificar ou interpretar.",
      "Quando houver cadeia de custódia, pense em rastreabilidade e integridade desde o reconhecimento do vestígio.",
      "Em criminologia, diferencie escola, teoria, objeto e política criminal."
    ],
    traps: [
      "Dizer que papiloscopia depende só de fotografia, sem comparação técnica.",
      "Confundir vestígio encontrado com prova já valorada no processo.",
      "Achar que local de crime preservado é responsabilidade apenas do perito.",
      "Misturar criminologia crítica, positivista e teoria do etiquetamento."
    ]
  },
  biologia: {
    fgv: "A banca pode cobrar biologia aplicada: estrutura celular, genética e bases biológicas da identificação humana, sem exigir cálculo longo.",
    candidateConfusion: "decorar nomes sem função; misturar DNA, gene e cromossomo; confundir formação embrionária de cristas papilares com impressão digital colhida depois.",
    application: "Biologia dá a base para entender biometria, hereditariedade, grupos sanguíneos e permanência das cristas papilares.",
    solve: [
      "Relacione estrutura e função antes de memorizar o nome.",
      "Em genética, identifique se a pergunta é de molécula, transmissão hereditária ou probabilidade.",
      "Em embriologia, separe formação biológica da coleta pericial posterior.",
      "Em identificação humana, pense em característica biológica, individualização e limite do método."
    ],
    traps: [
      "Dizer que impressão digital muda ao longo da vida sem lesão profunda.",
      "Confundir RNA com DNA em armazenamento de informação genética permanente.",
      "Tratar grupo sanguíneo como identificação individual absoluta.",
      "Misturar biometria fisiológica com senha ou token."
    ]
  },
  fisica: {
    fgv: "A física do edital é aplicada: luz, imagem, ondas, eletricidade e equipamentos usados na identificação humana.",
    candidateConfusion: "trocar reflexão por refração; achar que UV é luz visível comum; confundir fluorescência com fosforescência; decorar fórmula sem entender fenômeno.",
    application: "A conexão com Papiloscopia aparece em fotografia, iluminação, fluorescência, sensores, leitores biométricos e equipamentos de captura.",
    solve: [
      "Identifique o fenômeno: luz mudando de meio, refletindo, formando imagem, excitando material ou alimentando circuito.",
      "Em equipamentos, pense no caminho: iluminação, captura, sensor, processamento e armazenamento.",
      "Em circuitos simples, use relações básicas entre tensão, corrente e resistência.",
      "Em ondas, localize a posição no espectro e a aplicação tecnológica."
    ],
    traps: [
      "Chamar toda emissão luminosa de reflexão.",
      "Confundir lente convergente e divergente em formação de imagem.",
      "Achar que maior tensão sempre significa maior segurança ou melhor equipamento.",
      "Misturar radiação ultravioleta com infravermelho."
    ]
  },
  quimica: {
    fgv: "A química deve aparecer em noções básicas e aplicação pericial: matéria, soluções, reações, funções orgânicas, reagentes e fluorescência.",
    candidateConfusion: "confundir mistura homogênea com substância pura; concentração com quantidade total; ácido/base por memorização frágil; reação física com química.",
    application: "Na Papiloscopia, química ajuda a entender interação de reagentes com resíduos de impressão digital e revelação por fluorescência.",
    solve: [
      "Classifique matéria, mistura, solução ou reação antes de calcular ou escolher reagente.",
      "Em concentração, identifique soluto, solvente, solução e unidade.",
      "Em reações, confira conservação de átomos no balanceamento.",
      "Em aplicação pericial, relacione reagente, substrato, resíduo e método de visualização."
    ],
    traps: [
      "Tratar dissolução como reação química obrigatória.",
      "Confundir solubilidade com velocidade de dissolução.",
      "Balancear carga e esquecer quantidade de átomos.",
      "Achar que todo reagente serve para qualquer superfície."
    ]
  },
  legislacao: {
    fgv: "Em legislação institucional, a FGV costuma cobrar literalidade, competência, finalidade, dever, vedação, estrutura e novidade legislativa.",
    candidateConfusion: "usar lei antiga; misturar lei orgânica nacional com lei estadual; confundir carreira, regime jurídico e código disciplinar.",
    application: "É bloco pequeno, mas muito perigoso: leis recentes e institucionais tendem a ser decisivas por literalidade e detalhe.",
    solve: [
      "Leia lei seca por blocos: finalidade, estrutura, atribuições, deveres, vedações, responsabilidade e procedimento.",
      "Marque o diploma correto antes de responder: Constituição do PR, LC 259, Lei 14.735, Lei 23.213, Código Disciplinar ou regime jurídico.",
      "Em norma recente, confira o texto oficial atualizado no Sistema Estadual de Legislação ou no Planalto.",
      "Em sigilo, LGPD e LAI, separe transparência ativa, acesso à informação, proteção de dados e informação sigilosa."
    ],
    traps: [
      "Aplicar regra geral de servidor a servidor policial sem conferir norma específica.",
      "Confundir atribuição da Polícia Civil com Polícia Científica ou Polícia Militar.",
      "Responder por resumo desatualizado quando a lei foi alterada.",
      "Misturar falta disciplinar, crime e improbidade."
    ]
  },
  penal: {
    fgv: "Penal aplicado costuma cobrar conceito seco com caso curto: elemento subjetivo, tentativa, concurso, excludente, tipo penal e lei especial.",
    candidateConfusion: "confundir dolo eventual com culpa consciente; tentativa com desistência voluntária; flagrante com crime consumado; ilicitude com culpabilidade.",
    application: "Para Papiloscopista, a parte penal importa por orientar a atividade policial, o uso legítimo da força, a preservação de prova e os limites de atuação.",
    solve: [
      "Separe tipicidade, ilicitude e culpabilidade antes de analisar exceções.",
      "Identifique se o problema é de parte geral, crime em espécie ou lei extravagante.",
      "Em tentativa e desistência, veja se a execução começou e se a não consumação decorreu da vontade do agente.",
      "Na atividade policial, cheque base legal, necessidade, proporcionalidade e garantia do investigado."
    ],
    traps: [
      "Chamar todo arrependimento posterior de arrependimento eficaz.",
      "Confundir excludente de ilicitude com excludente de culpabilidade.",
      "Tratar crime contra a Administração como crime praticado apenas por servidor.",
      "Esquecer que lei especial pode alterar pena, procedimento ou conceito."
    ]
  },
  "processo-penal": {
    fgv: "Processo Penal aplicado aparece em atos de investigação: inquérito, provas, cadeia de custódia, reconhecimento, busca e medidas cautelares.",
    candidateConfusion: "misturar prova com elemento informativo; achar que cadeia de custódia começa só no laboratório; confundir prisão preventiva, flagrante e temporária.",
    application: "É essencial para preservar validade e rastreabilidade do trabalho técnico: local de crime, coleta, documentação e encaminhamento de vestígios.",
    solve: [
      "Identifique a fase: notícia do crime, investigação, coleta de prova, cautelar, prisão ou ação penal.",
      "Em cadeia de custódia, siga a sequência lógica: reconhecer, isolar, fixar, coletar, acondicionar, transportar, receber, processar, armazenar e descartar.",
      "Em busca e reconhecimento, procure formalidade e garantia.",
      "Em cautelares, pense em pressupostos, finalidade e decisão competente."
    ],
    traps: [
      "Confundir preservação de local com perícia concluída.",
      "Achar que todo vício gera automaticamente nulidade absoluta.",
      "Misturar sigilo de dados com interceptação telefônica.",
      "Transformar garantia do investigado em impedimento absoluto à investigação."
    ]
  },
  constitucional: {
    fgv: "Constitucional costuma vir por literalidade inteligente: princípio, direito fundamental, remédio constitucional, competência e art. 144.",
    candidateConfusion: "misturar direito individual com remédio; confundir polícia judiciária com policiamento ostensivo; trocar competência legislativa por material.",
    application: "A base constitucional limita e legitima a atividade policial: segurança pública, garantias individuais, dados, domicílio, prisão e devido processo legal.",
    solve: [
      "Localize o assunto: fundamento, direito, organização do Estado, poder, segurança pública ou controle.",
      "Em direitos fundamentais, verifique titular, garantia, exceção e reserva legal/judicial.",
      "Em art. 144, diferencie funções de cada órgão de segurança.",
      "Em controle, separe ADI e ADC por finalidade."
    ],
    traps: [
      "Achar que segurança pública elimina direitos fundamentais.",
      "Confundir Polícia Civil com polícia administrativa ostensiva.",
      "Misturar habeas data com mandado de segurança.",
      "Tratar competência comum, privativa e concorrente como sinônimas."
    ]
  },
  administrativo: {
    fgv: "Administrativo vem por classificação e consequência: princípio, ato, poder, agente, responsabilidade, improbidade, licitação e controle.",
    candidateConfusion: "confundir revogação com anulação; poder disciplinar com hierárquico; responsabilidade objetiva do Estado com culpa pessoal do agente.",
    application: "O bloco ajuda a responder sobre conduta funcional, atos da Administração, deveres do servidor e controle da atividade policial.",
    solve: [
      "Classifique primeiro: princípio, organização administrativa, ato, poder, serviço, licitação, agente, responsabilidade ou controle.",
      "Em ato administrativo, identifique competência, finalidade, forma, motivo e objeto.",
      "Em responsabilidade civil, separe dano, nexo, agente público e excludentes.",
      "Em improbidade, procure dolo, tipo de ato e sanção."
    ],
    traps: [
      "Dizer que conveniência e oportunidade permitem anular ato ilegal.",
      "Confundir descentralização com desconcentração.",
      "Aplicar culpa civil comum à responsabilidade objetiva do Estado.",
      "Tratar controle judicial como substituição plena do mérito administrativo."
    ]
  },
  "direitos-humanos": {
    fgv: "Direitos Humanos aparece com conceito, sistema de proteção, grupos vulneráveis e atuação policial proporcional.",
    candidateConfusion: "tratar direitos humanos como opinião; confundir sistema global com interamericano; esquecer grupos vulneráveis e pessoa presa.",
    application: "Na atuação policial, o tema orienta abordagem, uso da força, custódia, não discriminação, dignidade e prevenção da tortura.",
    solve: [
      "Identifique se a pergunta é conceitual, histórica, de sistema de proteção, grupo vulnerável ou atuação policial.",
      "Associe dignidade humana, legalidade, proporcionalidade, necessidade e prestação de contas.",
      "Em grupos vulneráveis, veja proteção específica sem perder universalidade dos direitos.",
      "Em Agenda 2030, relacione ODS a igualdade, justiça, instituições eficazes e inclusão."
    ],
    traps: [
      "Afirmar que direitos humanos protegem apenas vítimas ou apenas acusados.",
      "Confundir tratado internacional com lei ordinária interna sem verificar incorporação.",
      "Reduzir uso da força à intenção do agente, ignorando necessidade e proporcionalidade.",
      "Esquecer prevenção da tortura e direitos da pessoa presa."
    ]
  }
};

function ensureDir(filePath) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

function write(filePath, content) {
  ensureDir(filePath);
  fs.writeFileSync(filePath, content.replace(/\n{3,}/g, "\n\n"), "utf8");
}

function mdLink(pathFromPapilo) {
  return pathFromPapilo.replace(/\\/g, "/");
}

function humanTitle(value) {
  return value.replace(/\s+/g, " ").trim();
}

function itemAction(item, groupId) {
  const lowered = item.toLowerCase();

  if (groupId === "portugues") {
    if (lowered.includes("interpretação")) return "Revise com perguntas de comando: ideia central, inferência, pressuposto, referente, efeito de sentido e finalidade do trecho.";
    if (lowered.includes("pontuação")) return "Treine vírgula, dois-pontos, travessão e ponto e vírgula sempre verificando mudança de sentido.";
    if (lowered.includes("classes")) return "Não decore classe isolada: identifique função sintática, valor semântico e efeito textual da palavra no trecho.";
    if (lowered.includes("crase")) return "Resolva por regência e presença de artigo; depois confira locuções femininas e casos proibidos.";
    return "Transforme o conceito em função no texto: coesão, progressão temática, sentido, registro e correção.";
  }

  if (groupId === "rlm") {
    if (lowered.includes("porcentagem") || lowered.includes("juros")) return "Defina base, taxa, período e unidade antes de calcular.";
    if (lowered.includes("gráficos") || lowered.includes("tabelas")) return "Leia título, escala, legenda e unidade; só depois compare valores.";
    if (lowered.includes("probabilidade") || lowered.includes("contagem")) return "Liste casos possíveis e casos favoráveis, separando eventos dependentes e independentes.";
    return "Traduza o enunciado para tabela, proposição, diagrama ou equação simples.";
  }

  if (groupId === "tecnologia") {
    if (lowered.includes("backup")) return "Revise finalidade, periodicidade, mídia, restauração, retenção e diferença entre sincronização e cópia de segurança.";
    if (lowered.includes("logs") || lowered.includes("metadados")) return "Relacione registro técnico com rastreabilidade, auditoria e evidência digital.";
    if (lowered.includes("lgpd") || lowered.includes("marco civil")) return "Separe privacidade, proteção de dados, guarda de registros, sigilo e hipótese legal.";
    return "Classifique o recurso pela função prática: dispositivo, sistema, rede, segurança, evidência ou norma.";
  }

  if (groupId === "ciencias-forenses") {
    if (lowered.includes("cadeia de custódia")) return "Pense em documentação contínua do vestígio, do reconhecimento ao descarte.";
    if (lowered.includes("papiloscopia")) return "Conecte desenho papilar, permanência, unicidade, coleta e comparação.";
    if (lowered.includes("criminologia")) return "Separe objeto, método, escola, teoria, vítima e política criminal.";
    return "Associe conceito técnico à finalidade pericial e ao limite do método.";
  }

  if (groupId === "biologia") return "Estude estrutura, função e aplicação na identificação humana, especialmente quando o edital menciona impressão digital ou biometria.";
  if (groupId === "fisica") return "Relacione fenômeno físico ao equipamento usado: iluminação, formação da imagem, sensor, circuito ou fluorescência.";
  if (groupId === "quimica") return "Classifique substância, mistura, reação ou função química e conecte ao uso pericial quando houver reagentes e resíduos.";
  if (groupId === "legislacao") return "Leia a lei seca por finalidade, competência, dever, vedação, responsabilidade, procedimento e sanção.";
  if (groupId === "penal") return "Localize o instituto penal e confira fato típico, ilicitude, culpabilidade, pena e eventual lei especial.";
  if (groupId === "processo-penal") return "Defina fase e finalidade do ato: investigação, prova, cautelar, prisão, busca, reconhecimento ou garantia.";
  if (groupId === "constitucional") return "Identifique artigo, titular do direito, exceção, competência e limite constitucional da atuação estatal.";
  if (groupId === "administrativo") return "Classifique instituto e consequência: validade do ato, poder usado, responsabilidade, controle ou sanção.";
  if (groupId === "direitos-humanos") return "Conecte princípio, sistema de proteção, grupo vulnerável e padrão de atuação policial.";

  return "Revise o conceito, a finalidade, a exceção e a forma como pode aparecer em alternativa.";
}

function topicSpecificNotes(chapter) {
  const title = chapter.title.toLowerCase();
  const notes = [];

  if (title.includes("papiloscopia") || title.includes("impressões") || title.includes("cristas papilares")) {
    notes.push("Papiloscopia deve ser estudada como identificação humana por desenhos papilares, com atenção a permanência, variabilidade e confronto técnico.");
    notes.push("A coleta de impressão, o acondicionamento e a comparação devem preservar qualidade, origem e rastreabilidade do vestígio.");
  }
  if (title.includes("cadeia de custódia")) {
    notes.push("Cadeia de custódia não é uma etiqueta burocrática: é o histórico documentado que permite confiar na origem e integridade do vestígio.");
    notes.push("A prova pode explorar a sequência dos atos e a diferença entre preservação, coleta, acondicionamento, transporte e processamento.");
  }
  if (title.includes("lgpd") || title.includes("sigilo") || title.includes("ética digital")) {
    notes.push("Dados biométricos são sensíveis na lógica da proteção de dados; a atuação institucional exige finalidade, necessidade, segurança e controle de acesso.");
    notes.push("A LAI protege transparência, mas não autoriza expor dado pessoal, informação sigilosa ou elemento de investigação sem base legal.");
  }
  if (title.includes("internet") || title.includes("redes") || title.includes("crimes digitais")) {
    notes.push("Em evidência digital, valorize rastreabilidade: logs, metadados, origem, integridade e método de coleta importam mais que aparência da tela.");
    notes.push("OSINT usa fontes abertas, mas isso não elimina dever de documentação, validação e respeito a limites legais.");
  }
  if (title.includes("interpretação") || title.includes("coesão") || title.includes("semântica")) {
    notes.push("Em português da FGV, sentido textual manda: uma alternativa pode estar gramaticalmente elegante e ainda assim estar errada por deslocar a ideia do texto.");
  }
  if (title.includes("genética") || title.includes("dna")) {
    notes.push("Identificação genética trabalha com material biológico e comparação de perfis; não confunda probabilidade de parentesco com certeza absoluta em qualquer contexto.");
  }
  if (title.includes("óptica") || title.includes("fluorescência") || title.includes("captura")) {
    notes.push("Iluminação, comprimento de onda, sensor e formação de imagem são parte do caminho técnico que transforma vestígio em registro analisável.");
  }
  if (title.includes("química") || title.includes("reagentes")) {
    notes.push("Reagente pericial deve ser compatível com superfície, resíduo e método de visualização; alternativa absoluta costuma ser suspeita.");
  }
  if (title.includes("lei 23.213") || title.includes("lei 21.894") || title.includes("lc 259")) {
    notes.push("Por serem normas institucionais recentes ou específicas, priorize leitura literal dos artigos cobrindo finalidade, estrutura, carreira, dever e sanção.");
  }
  if (title.includes("prisões") || title.includes("inquérito") || title.includes("provas")) {
    notes.push("Processo penal aplicado deve ser lido pensando na rotina de investigação: notícia do crime, preservação, documentação, diligência e controle judicial quando necessário.");
  }
  if (title.includes("direitos") || title.includes("grupos vulneráveis") || title.includes("atuação policial")) {
    notes.push("A atuação policial compatível com direitos humanos combina legalidade, necessidade, proporcionalidade, não discriminação e prestação de contas.");
  }

  return notes;
}

const disciplineDepth = {
  portugues: {
    foundation: [
      "Português da FGV deve ser estudado de dentro para fora do texto. A banca raramente entrega uma pergunta puramente decorativa; mesmo quando cobra classe gramatical, pontuação, crase ou sintaxe, o ponto decisivo costuma ser o efeito produzido no trecho. Por isso, cada regra precisa ser conectada ao sentido, ao referente, ao registro e à intenção comunicativa.",
      "A leitura produtiva começa pelo comando da questão. Se o comando pede inferência, não basta localizar frase literal. Se pede reescritura, a alternativa precisa manter sentido, correção e relação lógica. Se pede pontuação, o candidato deve perguntar que termo está sendo isolado, deslocado, enumerado ou explicado.",
      "Para este concurso, a disciplina pesa muito: 25 questões. A preparação deve buscar estabilidade, não apenas decorar listas. O melhor treino é comparar alternativas parecidas e justificar por que uma muda o sentido, generaliza, restringe, troca causa por consequência ou quebra norma culta."
    ],
    priorities: [
      "interpretação literal e inferencial",
      "reescritura com preservação de sentido",
      "coesão referencial e conectores",
      "pontuação com efeito sintático-semântico",
      "classes de palavras em contexto",
      "semântica, ambiguidade, ortografia e crase"
    ],
    role: "Na rotina policial, relatórios, oitivas, comunicações internas e registros precisam ser claros, precisos e sem ambiguidade indevida. A prova usa essa mesma exigência: ler com precisão e escrever mentalmente com controle de sentido."
  },
  rlm: {
    foundation: [
      "Raciocínio lógico-matemático não deve ser tratado como coleção de fórmulas. O núcleo da disciplina é traduzir texto em estrutura: proposição, tabela, relação, diagrama, conta ou figura. A FGV costuma esconder a simplicidade do problema em uma redação compacta.",
      "Em itens lógicos, o erro mais caro é negar frase de modo intuitivo. Em porcentagem e juros, é perder a base. Em contagem e probabilidade, é contar duas vezes ou esquecer restrições. Em gráficos, é ignorar escala, unidade ou diferença entre valor absoluto e percentual.",
      "Como o bloco tem 5 questões, a estratégia é garantir o que resolve rápido: equivalências, conjuntos, regra de três, porcentagem, leitura de gráfico, geometria básica e contagem simples."
    ],
    priorities: [
      "condicionais, negações e quantificadores",
      "conjuntos e diagramas",
      "porcentagem e regra de três",
      "gráficos, tabelas e unidades",
      "contagem e probabilidade básica",
      "sequências e problemas de associação"
    ],
    role: "Para o cargo, RLM ajuda na leitura de indicadores, cruzamento de informações e análise de condições em problemas de investigação."
  },
  "realidade-pr": {
    foundation: [
      "Realidade do Paraná exige uma visão organizada do Estado: formação histórica, território, população, economia, cultura, governo e desafios atuais. A prova não deve ser estudada como curiosidade turística, mas como repertório oficial sobre o espaço em que a Polícia Civil atua.",
      "Dados numéricos mudam. Por isso, o material deve usar IBGE, IPARDES e páginas oficiais quando tratar de população, indicadores, municípios, economia e políticas públicas. O que deve ficar memorizado é a lógica: regiões, processos históricos, eixos econômicos e problemas contemporâneos.",
      "A FGV costuma cobrar associação: determinado fenômeno pertence a qual região, qual indicador mede certo aspecto, qual tema é cultural, histórico, geográfico ou político-institucional."
    ],
    priorities: [
      "formação territorial e ocupação",
      "geografia física e humana",
      "municípios, regiões e dinâmica econômica",
      "cultura e patrimônio",
      "indicadores oficiais",
      "segurança pública, meio ambiente e inclusão social"
    ],
    role: "O Papiloscopista atua em um Estado diverso, com interior, fronteira, regiões metropolitanas e realidades socioeconômicas distintas. A disciplina contextualiza essa atuação."
  },
  tecnologia: {
    foundation: [
      "Tecnologia, segurança cibernética e crimes digitais deve ser estudada por função prática. A prova pergunta o que determinado recurso faz, que risco evita, que dado registra, como uma evidência deve ser preservada ou qual norma incide sobre aquela situação.",
      "A FGV costuma trocar termos próximos: autenticação por autorização, backup por sincronização, cache por cookie, log por metadado, criptografia por assinatura digital, malware por engenharia social. O candidato precisa saber a diferença operacional, não apenas reconhecer a palavra.",
      "Para Papiloscopista, a disciplina é aplicada: coleta e preservação de evidências digitais, proteção de dados biométricos, segurança de sistemas institucionais, rastreabilidade e uso responsável de informação policial."
    ],
    priorities: [
      "hardware, software, armazenamento e inicialização",
      "Windows 11, Android, iOS e suítes de escritório",
      "redes, IP, DNS, VPN, firewall e nuvem",
      "logs, metadados, cookies, cache e rastreabilidade",
      "segurança da informação, malware, phishing e backup",
      "crimes digitais, OSINT, LGPD e Marco Civil"
    ],
    role: "A atuação papiloscópica moderna conversa com biometria, bases de dados, equipamentos de captura, registros eletrônicos e preservação de evidência técnica."
  },
  "ciencias-forenses": {
    foundation: [
      "Ciências Forenses é o bloco mais identitário para Papiloscopista. O estudo precisa separar áreas: Medicina Legal, identificação humana, papiloscopia, criminalística, documentoscopia, criminologia e investigação tecnológica. Cada uma tem objeto, método e vocabulário próprio.",
      "A FGV tende a cobrar diferença fina: vestígio, indício e evidência; identificação e reconhecimento; local imediato, mediato e relacionado; papiloscopia e outras biometrias; falsificação documental e alteração material; vitimização primária, secundária e terciária.",
      "O conteúdo deve ser lido com mentalidade de procedimento. O que a prova quer saber é: quem faz, para quê, com que cuidado, em qual sequência e com qual limitação."
    ],
    priorities: [
      "papiloscopia e identificação humana",
      "cadeia de custódia e local de crime",
      "vestígio, indício, evidência e prova",
      "documentoscopia e grafoscopia",
      "tanatologia, traumatologia e toxicologia básicas",
      "criminologia, vitimologia e criminologia digital"
    ],
    role: "O Papiloscopista trabalha na individualização humana e na produção técnica de elementos que precisam ser confiáveis, rastreáveis e compreensíveis no processo."
  },
  biologia: {
    foundation: [
      "Biologia no edital é aplicada à identificação humana. A banca pode partir de citologia e genética, mas o destino é entender características biológicas, hereditariedade, DNA, grupos sanguíneos, embriologia e formação das cristas papilares.",
      "A preparação deve evitar dois extremos: decorar nomes sem função ou transformar o tema em biologia de vestibular. Para a prova, importa saber estrutura, função, transmissão hereditária, permanência de características e limites de individualização.",
      "Papiloscopia depende de base biológica: desenhos papilares formam-se no desenvolvimento embrionário, permanecem estáveis em condições normais e podem ser usados em identificação quando coletados e comparados tecnicamente."
    ],
    priorities: [
      "membrana, organelas, núcleo e divisão celular",
      "DNA, RNA, genes e cromossomos",
      "Mendel, probabilidade genética e herança ligada ao sexo",
      "grupos sanguíneos",
      "gametogênese, fecundação e desenvolvimento embrionário",
      "cristas papilares, impressões digitais e biometria"
    ],
    role: "A disciplina dá sustentação técnica para compreender biometria, impressão digital, DNA e identificação humana por características biológicas."
  },
  fisica: {
    foundation: [
      "Física aparece no edital de forma aplicada. O candidato deve entender luz, formação de imagem, ondas eletromagnéticas, ultravioleta, fluorescência, eletricidade e equipamentos usados para capturar ou revelar informação.",
      "A FGV pode cobrar conceito simples em enunciado técnico: reflexão versus refração, lente versus espelho, fluorescência versus mera iluminação, corrente versus tensão, resolução versus tamanho do arquivo.",
      "O foco não é cálculo pesado. O foco é reconhecer o fenômeno e sua utilidade em fotografia, sensores, sistemas biométricos e equipamentos ópticos/eletrônicos."
    ],
    priorities: [
      "reflexão, refração, espelhos e lentes",
      "formação de imagens e fotografia digital",
      "UV, fluorescência e espectro eletromagnético",
      "carga, corrente, tensão, resistência e circuitos simples",
      "sensores e leitores biométricos"
    ],
    role: "Na identificação humana, a física aparece na iluminação correta, no registro fotográfico, na leitura de sensores e no uso de equipamentos ópticos e eletrônicos."
  },
  quimica: {
    foundation: [
      "Química deve ser estudada do básico para a aplicação pericial. Estrutura da matéria, ligações, misturas, soluções, reações e funções químicas aparecem como base para entender revelação de impressões digitais e fluorescência.",
      "A banca costuma trocar categorias: substância pura por mistura, mistura homogênea por heterogênea, dissolução por reação, concentração por quantidade total, ácido por base, fenômeno físico por químico.",
      "Na Papiloscopia, o valor do tema está em compreender como resíduos de suor, gordura, aminoácidos e outros componentes podem interagir com reagentes e tornar uma impressão latente visível."
    ],
    priorities: [
      "átomo, tabela periódica e ligações",
      "misturas, soluções e métodos de separação",
      "concentração e solubilidade",
      "balanceamento e equilíbrio",
      "funções inorgânicas e orgânicas",
      "reagentes, superfícies e fluorescência"
    ],
    role: "O estudo químico explica por que certos métodos de revelação funcionam em uma superfície e não em outra, e por que preservação do vestígio importa."
  },
  legislacao: {
    foundation: [
      "Legislação estadual e institucional deve ser lida como lei seca dirigida ao cargo. A FGV valoriza sujeito, verbo, competência, órgão, dever, vedação, responsabilidade, procedimento e sanção.",
      "O maior risco é estudar por material desatualizado, principalmente porque o edital envolve normas recentes da Polícia Civil do Paraná. Sempre que o capítulo falar de lei estadual ou federal, a leitura final deve ser na fonte oficial.",
      "O candidato deve separar: Constituição do Paraná, estruturação de carreiras, Lei Orgânica Nacional, Lei Orgânica estadual, Código Disciplinar, regime jurídico geral e leis aplicadas à atividade policial."
    ],
    priorities: [
      "estrutura, carreira e atribuições da PCPR",
      "deveres, vedações e responsabilidades",
      "código disciplinar e sanções",
      "sigilo funcional, LGPD e LAI",
      "identificação criminal e abuso de autoridade",
      "diferença entre norma nacional, estadual e regime geral"
    ],
    role: "O bloco define limites institucionais da atuação policial e ajuda a evitar confusão entre conduta funcional, infração disciplinar, ilícito penal e dever de sigilo."
  },
  penal: {
    foundation: [
      "Direito Penal aplicado deve ser estudado por camadas: princípio, aplicação da lei penal, teoria do crime, consequência penal e crimes em espécie. A FGV pode criar caso curto e perguntar qual instituto incide.",
      "O erro comum é saltar direto para o tipo penal sem passar por fato típico, ilicitude e culpabilidade. Outro erro é confundir tentativa, desistência voluntária, arrependimento eficaz, crime impossível, dolo e culpa.",
      "A parte extravagante deve ser lida pelo que afeta a atividade policial: violência doméstica, drogas, armas, organização criminosa, abuso de autoridade, garantias do investigado e cadeia de custódia."
    ],
    priorities: [
      "teoria do crime, dolo, culpa, tentativa e consumação",
      "excludentes de ilicitude e culpabilidade",
      "concurso de pessoas e crimes",
      "crimes contra pessoa, patrimônio, fé pública e Administração",
      "leis penais especiais do edital",
      "uso legítimo da força e garantias fundamentais"
    ],
    role: "O Papiloscopista não decide processo penal, mas atua em contexto de investigação e produção técnica de elementos ligados a infrações penais."
  },
  "processo-penal": {
    foundation: [
      "Processo Penal aplicado deve ser lido como roteiro da investigação: notícia do crime, inquérito, diligências, provas, cadeia de custódia, busca, reconhecimento, prisões e cautelares.",
      "A FGV pode cobrar diferença entre elemento informativo e prova, formalidade de reconhecimento, preservação de local, requisitos de prisão e limites de medidas invasivas.",
      "Cadeia de custódia é o eixo técnico do cargo: sem rastreabilidade e integridade, o valor do vestígio fica vulnerável."
    ],
    priorities: [
      "inquérito policial, notitia criminis e indiciamento",
      "direitos do investigado",
      "provas e cadeia de custódia",
      "busca e apreensão",
      "reconhecimento de pessoas e coisas",
      "prisões e medidas cautelares"
    ],
    role: "O trabalho técnico do Papiloscopista precisa ser compatível com preservação, documentação, garantias e validade do procedimento investigativo."
  },
  constitucional: {
    foundation: [
      "Direito Constitucional dá o limite superior da atividade policial. Direitos fundamentais, devido processo, inviolabilidade de domicílio, sigilo de dados, prisão e liberdade não são enfeites: são parâmetros de validade da investigação.",
      "A FGV cobra muito a literalidade inteligente da Constituição: princípio fundamental, direito individual, remédio constitucional, competência federativa, Poderes e art. 144 sobre segurança pública.",
      "O estudo deve ligar norma constitucional a prática policial: quem investiga, quem preserva direitos, quando há reserva de jurisdição e qual remédio protege cada situação."
    ],
    priorities: [
      "princípios fundamentais",
      "direitos e garantias individuais",
      "remédios constitucionais",
      "organização do Estado e Poderes",
      "art. 144 e Polícia Civil",
      "controle de constitucionalidade"
    ],
    role: "A Constituição legitima e limita a atuação policial, inclusive na coleta de dados, ingresso em domicílio, prisão, sigilo e investigação criminal."
  },
  administrativo: {
    foundation: [
      "Direito Administrativo explica a máquina pública em funcionamento: princípios, órgãos, entidades, atos, poderes, serviços, licitações, agentes, responsabilidade, improbidade e controle.",
      "A FGV costuma cobrar classificação com consequência. Se o ato é ilegal, a resposta pode envolver anulação; se é inconveniente, revogação; se há dano causado por agente público nessa qualidade, responsabilidade civil do Estado; se há dolo e tipo legal, improbidade.",
      "O candidato deve diferenciar Administração direta e indireta, descentralização e desconcentração, poder hierárquico e disciplinar, polícia administrativa e polícia judiciária."
    ],
    priorities: [
      "princípios administrativos",
      "administração direta e indireta",
      "atos administrativos",
      "poderes administrativos e abuso de poder",
      "licitações e contratos",
      "agentes, responsabilidade, improbidade e controle"
    ],
    role: "O bloco ajuda a compreender dever funcional, limites do agente público, controle de atos e responsabilidade na atuação institucional."
  },
  "direitos-humanos": {
    foundation: [
      "Direitos Humanos devem ser estudados como parâmetro jurídico e operacional da segurança pública. Não é opinião: envolve Constituição, tratados, sistemas de proteção, grupos vulneráveis e padrões de atuação estatal.",
      "A FGV costuma cobrar conceitos, características, sistema global e interamericano, dignidade, cidadania, grupos vulneráveis, prevenção da tortura, direitos da pessoa presa e uso proporcional da força.",
      "O estudo deve sempre unir proteção e atuação policial: legalidade, necessidade, proporcionalidade, não discriminação, prestação de contas e respeito à dignidade humana."
    ],
    priorities: [
      "universalidade, indivisibilidade e historicidade",
      "sistema global e sistema interamericano",
      "Constituição de 1988 e tratados",
      "grupos vulneráveis",
      "uso proporcional da força e pessoa presa",
      "PNDH, educação em direitos humanos e ODS"
    ],
    role: "Na prática policial, direitos humanos orientam abordagem, custódia, preservação da integridade, tratamento de vítimas e investigados e proteção de dados sensíveis."
  }
};

function fallbackExplanation(item, chapter) {
  const guide = disciplineDepth[chapter.groupId];
  const action = itemAction(item, chapter.groupId);
  const shared = {
    portugues: {
      conceito: `No recorte "${item}", trate o ponto pela função que ele exerce no texto: forma, sentido, registro, organização sintática ou efeito argumentativo. A pergunta central é como esse recurso altera leitura, clareza ou correção.`,
      estudar: `${action} Monte exemplos curtos e teste substituições para perceber mudança de sentido, inadequação à norma culta ou quebra da progressão textual.`,
      fgv: "A FGV tende a cobrar por reescritura, classificação contextual, função de trecho e alternativa que parece elegante, mas altera o sentido original.",
      cuidado: "Não resolva por impressão de estilo; volte ao trecho e confirme se a troca preserva sentido, regência, concordância, referência e relação lógica."
    },
    rlm: {
      conceito: `No recorte "${item}", o essencial é converter linguagem comum em estrutura controlável: número, condição, tabela, diagrama, figura, sequência ou relação entre conjuntos.`,
      estudar: `${action} Refaça o problema em etapas pequenas, anotando base de cálculo, unidade, restrição, ordem e casos possíveis.`,
      fgv: "A FGV costuma esconder o caminho em uma redação curta e cobra a leitura exata da condição, da base percentual ou da restrição de contagem.",
      cuidado: "Não opere antes de definir a base e a unidade; em lógica, confira se a negação ou a condição foi traduzida corretamente."
    },
    "realidade-pr": {
      conceito: `No recorte "${item}", estude o Paraná como território histórico, econômico, social e institucional, conectando região, processo histórico, indicador e política pública.`,
      estudar: `${action} Organize por região do Estado, período histórico, atividade econômica, indicador oficial e problema público contemporâneo.`,
      fgv: "A FGV pode cobrar associação entre fato histórico, característica geográfica, indicador atualizado e consequência social ou econômica.",
      cuidado: "Evite memorizar número solto de fonte secundária; para dado atualizável, confira IPARDES, IBGE e páginas oficiais próximas da prova."
    },
    tecnologia: {
      conceito: `No recorte "${item}", pergunte sempre qual recurso, norma ou procedimento protege, registra, transmite, armazena, autentica ou preserva informação digital.`,
      estudar: `${action} Separe função, risco evitado, dado produzido, limite legal e aplicação em sistemas, dispositivos, redes ou evidências digitais.`,
      fgv: "A FGV troca termos próximos e cria casos práticos: autenticação versus autorização, registro versus conteúdo, cópia versus backup, privacidade versus publicidade.",
      cuidado: "Não confunda uso cotidiano com uso técnico ou institucional; dado biométrico, log, metadado e evidência digital exigem finalidade e rastreabilidade."
    },
    "ciencias-forenses": {
      conceito: `No recorte "${item}", identifique objeto, método, finalidade pericial, limite técnico e valor para identificação, investigação ou reconstrução de fato.`,
      estudar: `${action} Faça sempre a sequência: reconhecer o vestígio, preservar, documentar, coletar, comparar, interpretar e comunicar o resultado com cautela.`,
      fgv: "A FGV cobra diferença entre áreas forenses, etapas de procedimento e termos próximos como vestígio, indício, evidência, prova, identificação e reconhecimento.",
      cuidado: "Um termo técnico correto pode estar no momento errado do procedimento; preserve ordem, competência, rastreabilidade e limitação do método."
    },
    biologia: {
      conceito: `No recorte "${item}", ligue estrutura biológica, função, transmissão hereditária, desenvolvimento e uso em identificação humana.`,
      estudar: `${action} Associe cada estrutura ou fenômeno ao que ele permite concluir em prova: permanência, variação, herança, comparação ou limitação biométrica.`,
      fgv: "A FGV pode cobrar conceito biológico em aplicação pericial, especialmente quando o tema conversa com DNA, cristas papilares ou características identificadoras.",
      cuidado: "Não transforme toda característica biológica em identificação absoluta; diferencie triagem, exclusão, reconhecimento e individualização."
    },
    fisica: {
      conceito: `No recorte "${item}", o foco é reconhecer fenômenos físicos usados em imagem, iluminação, sensores, circuitos e equipamentos de captura.`,
      estudar: `${action} Relacione fenômeno, instrumento, variável observada, erro comum e aplicação prática em fotografia, biometria ou laboratório.`,
      fgv: "A FGV cobra diferença conceitual simples em contexto técnico, como luz refletida versus refratada, fluorescência versus iluminação comum ou corrente versus tensão.",
      cuidado: "Não memorize fórmula sem unidade e sem fenômeno; a prova tende a perguntar o que acontece e para que serve."
    },
    quimica: {
      conceito: `No recorte "${item}", conecte composição da matéria, interação química, separação, reação ou propriedade ao uso em identificação e revelação de vestígios.`,
      estudar: `${action} Compare substância, mistura, solução, concentração, reação, função química, superfície e condição de aplicação.`,
      fgv: "A FGV troca classificação e processo: mistura por substância, dissolução por reação, concentração por quantidade total ou fenômeno físico por químico.",
      cuidado: "O resultado de um reagente depende de superfície, composição do resíduo e método; não trate todo material como se reagisse igual."
    },
    legislacao: {
      conceito: `No recorte "${item}", leia a norma por sujeito, verbo, competência, dever, vedação, procedimento, consequência e eventual exceção.`,
      estudar: `${action} Faça uma tabela com quem pode agir, o que deve fazer, o que é proibido, qual consequência surge e qual fonte oficial confirma a redação.`,
      fgv: "A FGV cobra literalidade aplicada, especialmente em leis recentes, competências institucionais, deveres, sigilo e responsabilização funcional.",
      cuidado: "Lei estadual, lei federal, código disciplinar e regime jurídico geral podem incidir juntos, mas não têm a mesma função."
    },
    penal: {
      conceito: `No recorte "${item}", identifique bem penal tutelado, conduta, elemento subjetivo, consumação, tentativa, causa de exclusão ou consequência penal.`,
      estudar: `${action} Resolva casos curtos separando fato típico, ilicitude, culpabilidade, pena e eventual lei especial aplicável.`,
      fgv: "A FGV costuma trocar instituto parecido e usar caso objetivo para testar dolo, culpa, tentativa, concurso, excludente ou tipo penal específico.",
      cuidado: "Não pule etapas da teoria do crime; uma conduta parecida pode mudar totalmente conforme elemento subjetivo, resultado ou causa justificante."
    },
    "processo-penal": {
      conceito: `No recorte "${item}", enxergue o procedimento como sequência de investigação, garantia, prova, cautelar ou controle judicial.`,
      estudar: `${action} Marque quem pratica o ato, quando, com qual fundamento, qual formalidade exige e qual consequência decorre de irregularidade.`,
      fgv: "A FGV cobra ordem de atos, garantias do investigado, diferença entre prova e elemento informativo e requisitos de medidas invasivas.",
      cuidado: "Eficiência investigativa não elimina legalidade, motivação, contraditório quando cabível e preservação da cadeia de custódia."
    },
    constitucional: {
      conceito: `No recorte "${item}", conecte a norma constitucional à limitação do poder estatal, à repartição de competências e à proteção de direitos fundamentais.`,
      estudar: `${action} Transforme cada dispositivo em pergunta: qual direito protege, quem é competente, quando pode restringir e qual remédio constitucional cabe.`,
      fgv: "A FGV cobra literalidade com aplicação: segurança pública, direitos individuais, remédios constitucionais, competências e controle de constitucionalidade.",
      cuidado: "Não confunda garantia com remédio, competência administrativa com legislativa, nem polícia judiciária com policiamento ostensivo."
    },
    administrativo: {
      conceito: `No recorte "${item}", estude a função administrativa por estrutura, princípio, ato, poder, serviço, contratação, agente, responsabilidade ou controle.`,
      estudar: `${action} Associe cada conceito à consequência: anulação, revogação, convalidação, responsabilização, controle, sanção ou dever de licitar.`,
      fgv: "A FGV cobra classificação que muda consequência jurídica, como ato vinculado/discricionário, anulação/revogação ou polícia administrativa/judiciária.",
      cuidado: "Não basta decorar definição; identifique o regime jurídico e a consequência prática do enquadramento."
    },
    "direitos-humanos": {
      conceito: `No recorte "${item}", leia o tema como padrão jurídico de dignidade, igualdade, não discriminação, controle estatal e proteção de pessoas em situação vulnerável.`,
      estudar: `${action} Relacione conceito, sistema de proteção, grupo protegido, dever estatal e aplicação em atuação policial.`,
      fgv: "A FGV cobra características, tratados, sistemas de proteção, grupos vulneráveis, uso proporcional da força e políticas públicas de direitos humanos.",
      cuidado: "Proteção específica não contradiz universalidade; ela concretiza igualdade material diante de vulnerabilidades reais."
    }
  };

  return shared[chapter.groupId] || {
    conceito: `No recorte "${item}", estude o ponto dentro da disciplina ${chapter.groupShortTitle}, relacionando conceito, finalidade, aplicação e limites.`,
    estudar: `${action} Compare com temas vizinhos e monte exemplos de alternativa correta, quase correta e incorreta.`,
    fgv: "A FGV tende a cobrar por caso curto, comparação conceitual e detalhe de exceção.",
    cuidado: `Use as prioridades gerais da disciplina como filtro: ${guide ? guide.priorities.slice(0, 3).join(", ") : "conceito, diferença e aplicação"}.`
  };
}

function explainItem(item, chapter) {
  const text = item.toLowerCase();
  const groupId = chapter.groupId;
  const title = chapter.title.toLowerCase();
  const base = fallbackExplanation(item, chapter);

  if (groupId === "portugues") {
    if (text.includes("interpretação")) return {
      conceito: "Compreensão é localizar o que o texto afirma; interpretação é chegar ao sentido construído pelo texto, incluindo inferências autorizadas. A FGV diferencia muito bem fato textual, conclusão possível e opinião do candidato.",
      estudar: "Treine ideia central, finalidade, ponto de vista, pressupostos, implícitos, referentes pronominais, valor de conectores e efeito de palavras no contexto.",
      fgv: "A banca apresenta alternativas parecidas, mas uma extrapola o texto, reduz o alcance de uma afirmação ou troca causa, consequência, oposição e finalidade.",
      cuidado: "Não responda com conhecimento de mundo quando o comando pede leitura do texto; a resposta precisa estar sustentada pelo trecho."
    };
    if (text.includes("organização estrutural")) return {
      conceito: "Organização textual é a forma como introdução, desenvolvimento, conclusão, progressão temática, parágrafos e encadeamento de ideias sustentam o sentido global.",
      estudar: "Observe tese, argumento, exemplo, explicação, contraste, retomada, antecipação e conclusão. Em texto narrativo, procure sequência de acontecimentos; em argumentativo, tese e justificativas.",
      fgv: "A cobrança aparece em perguntas sobre função de parágrafo, ordem de ideias, relação entre segmentos e reescritura que preserva ou rompe a progressão.",
      cuidado: "Não confunda assunto com tese: assunto é o tema geral; tese é a posição defendida ou ideia central sustentada."
    };
    if (text.includes("coesão") || text.includes("coerência") || text.includes("intertextualidade")) return {
      conceito: "Coesão é a ligação linguística entre partes do texto; coerência é a lógica de sentido. Intertextualidade ocorre quando o texto dialoga com outro texto, gênero, discurso ou referência cultural.",
      estudar: "Domine pronomes, elipses, sinônimos, hiperônimos, conectores, tempos verbais, paralelismo e relações de causa, oposição, condição, concessão e conclusão.",
      fgv: "A FGV troca conectores por outros de valor diferente ou pede o referente de termo destacado. Também explora incoerência criada por substituição aparentemente elegante.",
      cuidado: "Conector bonito não basta; se muda a relação lógica, a reescritura está errada."
    };
    if (text.includes("descrição") || text.includes("narração") || text.includes("exposição") || text.includes("argumentação") || text.includes("injunção")) return {
      conceito: "Modos discursivos são formas de organizar o discurso: narrar conta acontecimentos; descrever caracteriza; expor explica; argumentar defende tese; injungir orienta conduta.",
      estudar: "Marque verbos, temporalidade, presença de tese, instruções, enumerações, exemplos e marcas de subjetividade. Um texto pode misturar modos, mas um costuma predominar.",
      fgv: "A banca pede finalidade comunicativa, predominância de modo e efeito de determinado trecho dentro do texto.",
      cuidado: "Não classifique por uma palavra isolada; classifique pelo funcionamento do trecho."
    };
    if (text.includes("tipos textuais") || text.includes("tipos informativo") || text.includes("publicitário") || text.includes("propagandístico") || text.includes("normativo") || text.includes("didático") || text.includes("divinatório")) return {
      conceito: "Tipos textuais do edital correspondem a finalidades sociais: informar, persuadir, divulgar, normatizar, ensinar ou prever/antecipar algo.",
      estudar: "Compare texto informativo, publicitário, propagandístico, normativo, didático e divinatório pela finalidade, linguagem, público e grau de objetividade.",
      fgv: "A pergunta costuma pedir características específicas, função de linguagem e adequação de registro.",
      cuidado: "Publicidade e propaganda não são sinônimos perfeitos: a publicidade vende produto/serviço; a propaganda busca adesão a ideia ou causa."
    };
    if (text.includes("literários")) return {
      conceito: "Texto literário explora linguagem estética, plurissignificação e recursos expressivos; texto não literário tende a finalidade informativa, instrucional, normativa ou argumentativa direta.",
      estudar: "Revise denotação, conotação, figuras de linguagem, narrador, eu lírico, subjetividade, ambiguidade intencional e função poética.",
      fgv: "A banca cobra efeito expressivo, diferença entre sentido literal e figurado e função de recursos de linguagem.",
      cuidado: "Não confunda texto literário com texto difícil; o critério é a função estética e expressiva."
    };
    if (text.includes("tipologia da frase") || text.includes("estrutura da frase") || text.includes("problemas estruturais") || text.includes("deslocamento") || text.includes("substituição") || text.includes("modificação") || text.includes("correção") || text.includes("termos e orações") || text.includes("ordem direta") || text.includes("tipos de discurso")) return {
      conceito: "Frase, oração e período precisam ser analisados pela estrutura. A FGV explora deslocamentos, paralelismo, ambiguidade, fragmentação, truncamento e correção sintática.",
      estudar: "Revise sujeito, predicado, complementos, adjuntos, aposto, vocativo, coordenação, subordinação, ordem direta, ordem inversa e paralelismo.",
      fgv: "A cobrança aparece em reescrituras, correção gramatical e identificação de problema estrutural que prejudica clareza.",
      cuidado: "Uma frase pode soar natural e ainda estar inadequada à norma culta ou ambígua no contexto."
    };
    if (text.includes("norma culta")) return {
      conceito: "Norma culta é o padrão formal exigido em contextos oficiais, sem confundir formalidade com linguagem artificial.",
      estudar: "Concordância, regência, colocação pronominal, emprego de tempos e modos verbais, paralelismo e adequação vocabular.",
      fgv: "A banca apresenta reescrituras com erro discreto de concordância, regência ou colocação.",
      cuidado: "Não escolha uma alternativa só por parecer mais rebuscada; formalidade sem correção não vale."
    };
    if (text.includes("funções da linguagem") || text.includes("atos de comunicação") || text.includes("registros")) return {
      conceito: "Registros mostram adequação da linguagem ao contexto. Funções da linguagem indicam o foco comunicativo: emissor, receptor, mensagem, código, contexto ou canal.",
      estudar: "Revise linguagem formal/informal, variação linguística, função referencial, emotiva, conativa, poética, metalinguística e fática, além de emissor, receptor, mensagem, código, canal e contexto.",
      fgv: "A banca pode pedir a função predominante de um trecho ou a adequação de registro a uma situação comunicativa.",
      cuidado: "Função predominante não elimina funções secundárias; escolha a que organiza a finalidade principal do trecho."
    };
    if (text.includes("pontuação")) return {
      conceito: "Pontuação organiza sintaxe e sentido. Vírgula não marca pausa respiratória; marca relações estruturais como intercalação, deslocamento, enumeração, elipse e separação de orações.",
      estudar: "Domine vírgula entre termos deslocados, adjuntos adverbiais longos, aposto, vocativo, orações explicativas, enumerações, conjunções deslocadas e dois-pontos explicativos.",
      fgv: "A FGV pergunta se a pontuação preserva sentido e correção, ou qual efeito decorre de travessão, parênteses, aspas e dois-pontos.",
      cuidado: "Não separe sujeito de verbo nem verbo de complemento por vírgula sem intercalação real."
    };
    if (text.includes("estrutura e formação") || text.includes("formas de abreviação")) return {
      conceito: "Estrutura e formação de palavras tratam de radical, afixos, vogal temática, desinências e processos como derivação, composição, redução, siglas e abreviações.",
      estudar: "Revise prefixo, sufixo, derivação prefixal/sufixal/parassintética/regressiva/imprópria, composição por justaposição/aglutinação, abreviação, sigla e acrônimo.",
      fgv: "A FGV pode cobrar o processo de formação ou o efeito de sentido de prefixo, sufixo ou redução.",
      cuidado: "Não confunda abreviação gráfica com sigla; nem derivação imprópria com simples mudança de significado."
    };
    if (text.includes("classes de palavras") || text.includes("modalizadores")) return {
      conceito: "Classes de palavras devem ser vistas em uso. A mesma forma pode mudar função; advérbios, pronomes e conjunções frequentemente carregam valor argumentativo ou modalizador.",
      estudar: "Revise substantivo, adjetivo, artigo, numeral, pronome, verbo, advérbio, conjunção e interjeição, sempre perguntando função sintática e valor semântico.",
      fgv: "A banca destaca uma palavra e pergunta classe, função, valor de sentido ou efeito de modalização.",
      cuidado: "Não classifique por aparência: 'que', 'se', 'como', 'onde' e 'mesmo' mudam muito conforme o contexto."
    };
    if (text.includes("semântica") || text.includes("polissemia") || text.includes("ambiguidade") || text.includes("sentido próprio") || text.includes("antônimos") || text.includes("sinônimos") || text.includes("parônimos") || text.includes("hiperônimos")) return {
      conceito: "Semântica trata do sentido. Sentido próprio, figurado, sinonímia, antonímia, paronímia, hiperônimos, polissemia e ambiguidade são cobrados pelo efeito no texto.",
      estudar: "Troque palavras mentalmente e veja se intensidade, avaliação, registro e relação lógica permanecem. Em ambiguidade, identifique mais de uma leitura possível.",
      fgv: "A FGV usa sinônimos aproximados para mudar tom, abrangência ou pressuposto.",
      cuidado: "Sinônimo de dicionário não garante equivalência textual."
    };
    if (text.includes("ortografia") || text.includes("acentuação") || text.includes("crase") || text.includes("vocabulário") || text.includes("dicionários") || text.includes("neologismos") || text.includes("arcaísmos") || text.includes("estrangeirismos") || text.includes("latinismos")) return {
      conceito: "Ortografia, acentuação, vocabulário e crase são pontos de precisão formal. A crase resulta da fusão entre preposição 'a' e artigo ou pronome demonstrativo iniciado por 'a'.",
      estudar: "Revise regras de acentuação, hífen, grafia oficial, parônimos, estrangeirismos, latinismos, verbetes, regência nominal/verbal e casos obrigatórios, facultativos e proibidos de crase.",
      fgv: "A banca costuma cobrar reescritura com crase, parônimo ou acento que muda classe e sentido.",
      cuidado: "Não use 'trocar por ao' de modo automático; ele ajuda, mas não substitui análise de regência e artigo."
    };
  }

  if (groupId === "tecnologia") {
    if (text.includes("hardware") || text.includes("bios") || text.includes("uefi") || text.includes("drivers") || text.includes("firmware")) return {
      conceito: "Hardware é a parte física; software é o conjunto lógico; firmware é software gravado no dispositivo para controlar funcionamento básico. BIOS/UEFI inicializam e preparam o equipamento; drivers permitem comunicação entre sistema operacional e hardware.",
      estudar: "Separe CPU, memória RAM, armazenamento, placa-mãe, periféricos, dispositivos móveis, SSD, HD, pendrive, backup, BIOS, UEFI, driver e firmware.",
      fgv: "A banca troca memória volátil por armazenamento permanente, periférico de entrada por entrada/saída e backup por simples cópia/sincronização.",
      cuidado: "SSD não é RAM; UEFI não é sistema operacional; driver não é o próprio periférico."
    };
    if (text.includes("windows") || text.includes("android") || text.includes("ios") || text.includes("microsoft 365") || text.includes("libreoffice") || text.includes("google workspace") || text.includes("instalação") || text.includes("atualização") || text.includes("configuração")) return {
      conceito: "Sistemas operacionais gerenciam hardware, arquivos, usuários, permissões e aplicativos. Suítes de escritório produzem texto, planilhas, apresentações, colaboração e armazenamento integrado.",
      estudar: "Revise Windows 11, Android, iOS, instalação, atualização, permissões, contas, antivírus, firewall, compartilhamento, OneDrive, Google Drive, Word/Writer, Excel/Calc e formatos comuns.",
      fgv: "A FGV cobra menus, funções, segurança, atualização, permissões e equivalência entre programas de suítes diferentes.",
      cuidado: "Não confunda aplicativo com sistema operacional; navegador não é internet; conta em nuvem não elimina cuidado local."
    };
    if (text.includes("internet") || text.includes("dns") || text.includes("vpn") || text.includes("firewall") || text.includes("cookies") || text.includes("api")) return {
      conceito: "Redes conectam dispositivos por protocolos. IP identifica endereço lógico; DNS traduz nomes em endereços; VPN cria túnel protegido; firewall filtra tráfego; APIs permitem comunicação entre sistemas.",
      estudar: "Internet, intranet, navegador, e-mail, nuvem, compartilhamento, IP, DNS, VPN, firewall, rede social, plataforma digital, registro eletrônico, cookie, cache, metadado, HTML, CSS, JavaScript, banco de dados e API.",
      fgv: "A banca troca cache por cookie, DNS por navegador, VPN por antivírus, firewall por criptografia e metadado por conteúdo principal.",
      cuidado: "Metadado não é necessariamente o conteúdo da mensagem; é dado sobre dado, como horário, origem, formato, dispositivo ou localização quando disponível."
    };
    if (text.includes("confidencialidade") || text.includes("malware") || text.includes("phishing") || text.includes("criptografia") || text.includes("certificados") || text.includes("segurança em redes") || text.includes("políticas de segurança") || text.includes("resposta a incidentes")) return {
      conceito: "Segurança da informação protege confidencialidade, integridade, disponibilidade, autenticidade e rastreabilidade. Controles incluem autenticação, autorização, logs, auditoria, criptografia, certificados, backup e resposta a incidentes.",
      estudar: "Revise malware, ransomware, phishing, engenharia social, vulnerabilidade, atualização, menor privilégio, autenticação multifator, backup 3-2-1, recuperação de dados e segurança em nuvem.",
      fgv: "A FGV costuma perguntar qual controle evita determinado risco ou qual ataque corresponde ao comportamento descrito.",
      cuidado: "Criptografia protege sigilo; assinatura digital ajuda autenticidade e integridade; backup ajuda disponibilidade e recuperação."
    };
    if (text.includes("crimes digitais") || text.includes("crimes informáticos") || text.includes("lei federal n.º 14.155") || text.includes("fraudes eletrônicas") || text.includes("osint") || text.includes("evidências digitais")) return {
      conceito: "Crime digital pode usar tecnologia como meio, alvo ou ambiente. Evidência eletrônica exige coleta, preservação, documentação, rastreabilidade e cuidado com integridade.",
      estudar: "Fraudes eletrônicas, invasão de dispositivo, crimes em redes sociais, coleta técnica, preservação, cadeia de custódia, logs, metadados, rastreamento, recuperação de informações, inteligência cibernética e OSINT.",
      fgv: "A banca diferencia pesquisar fonte aberta de violar acesso, e também separa mera captura visual de preservação técnica de evidência.",
      cuidado: "OSINT não significa ausência de limites legais; fonte aberta também precisa de validação, contexto e registro do método."
    };
    if (text.includes("marco civil") || text.includes("lgpd") || text.includes("lei geral de proteção de dados") || text.includes("proteção de dados pessoais") || text.includes("sigilo funcional")) return {
      conceito: "Marco Civil trata de princípios, direitos, deveres e registros no uso da internet. LGPD organiza tratamento de dados pessoais, inclusive dados sensíveis. Sigilo funcional limita o uso de informações institucionais.",
      estudar: "Revise privacidade, proteção de dados, finalidade, necessidade, segurança, responsabilização, dados sensíveis, registros de conexão, registros de acesso, consentimento e bases legais.",
      fgv: "A FGV usa casos de compartilhamento indevido, exposição de dado pessoal, guarda de registro e uso institucional de informação.",
      cuidado: "Transparência não autoriza expor dado pessoal sensível ou informação de investigação sem base legal."
    };
  }

  if (groupId === "ciencias-forenses") {
    if (text.includes("medicina legal") || text.includes("papiloscopia") || text.includes("identificação humana")) return {
      conceito: "Medicina Legal aplica conhecimento médico-biológico ao Direito. Identificação humana busca individualizar pessoa; papiloscopia usa desenhos papilares, com destaque para unicidade, permanência e classificabilidade.",
      estudar: "Domine identificação versus reconhecimento, papiloscopia, datiloscopia, quiroscopia, podoscopia, impressões latentes, padrão papilar, pontos característicos, coleta e confronto.",
      fgv: "A FGV pode perguntar qual método individualiza, qual apenas reconhece, ou qual cuidado preserva qualidade e rastreabilidade da impressão.",
      cuidado: "Reconhecimento facial ou testemunhal não tem o mesmo peso técnico de identificação papiloscópica ou genética quando o objetivo é individualização."
    };
    if (text.includes("antropologia") || text.includes("odontologia") || text.includes("dna") || text.includes("reconhecimento facial") || text.includes("inteligência artificial")) return {
      conceito: "Antropologia forense estima perfil biológico; odontologia legal compara elementos dentários; DNA compara perfis genéticos; reconhecimento facial e IA auxiliam triagem, busca ou comparação, mas exigem validação.",
      estudar: "Revise sexo biológico estimado, idade, estatura, ancestralidade com cautela, arcada dentária, prontuário odontológico, material biológico, perfil genético, viés algorítmico e falso positivo.",
      fgv: "A banca cobra finalidade e limitação do método, principalmente quando tecnologia é apresentada como certeza absoluta.",
      cuidado: "IA e reconhecimento facial não substituem perícia validada nem eliminam necessidade de cadeia de custódia e revisão humana."
    };
    if (text.includes("sexologia") || text.includes("traumatologia") || text.includes("asfixiologia") || text.includes("balística")) return {
      conceito: "Traumatologia estuda lesões e instrumentos lesivos; asfixiologia trata mecanismos de impedimento respiratório; balística forense examina armas, munições, trajetórias e efeitos; sexologia forense envolve aspectos médico-legais de sexualidade e violência sexual.",
      estudar: "Diferencie lesão contusa, cortante, perfurante, corto-contusa, perfuro-contusa, energias vulnerantes, asfixias mecânicas, disparo, orifício de entrada/saída e vestígios associados.",
      fgv: "A cobrança vem por associação entre lesão e instrumento, mecanismo e achado, ou termo técnico e conceito.",
      cuidado: "Não diagnostique mecanismo por um único sinal isolado; em prova, procure o conjunto descrito."
    };
    if (text.includes("tanatologia") || text.includes("necropsia") || text.includes("toxicologia") || text.includes("psicopatologia")) return {
      conceito: "Tanatologia estuda morte e fenômenos cadavéricos; necropsia busca causa mortis e achados; toxicologia estuda agentes tóxicos; psicopatologia forense relaciona transtornos mentais à imputabilidade e perícia psiquiátrica.",
      estudar: "Revise morte real/aparente, fenômenos abióticos imediatos e consecutivos, rigidez, livores, putrefação, necropsia, intoxicações, coleta toxicológica, imputabilidade, simulação e dissimulação.",
      fgv: "A banca cobra sequência temporal, diferença de fenômenos cadavéricos, finalidade do exame e conceito de imputabilidade.",
      cuidado: "Fenômeno cadavérico não deve ser usado fora do contexto temporal; intoxicação exige amostra e método compatíveis."
    };
    if (text.includes("criminalística") || text.includes("vestígios") || text.includes("local de crime") || text.includes("cadeia de custódia")) return {
      conceito: "Criminalística aplica métodos técnico-científicos à infração penal. Vestígio é elemento material bruto; indício é circunstância conhecida que permite inferência; evidência é vestígio analisado e relacionado ao caso.",
      estudar: "Local de crime, isolamento, preservação, fixação, coleta, acondicionamento, transporte, recebimento, processamento, armazenamento e descarte. Estude a cadeia de custódia como histórico documentado.",
      fgv: "A FGV gosta de perguntar a ordem de atuação e de trocar preservação com coleta, vestígio com prova e indício com evidência.",
      cuidado: "A cadeia de custódia começa no reconhecimento do vestígio, não apenas no laboratório."
    };
    if (text.includes("documentoscopia") || text.includes("grafoscopia") || text.includes("assinaturas") || text.includes("falsificações")) return {
      conceito: "Documentoscopia verifica autenticidade, integridade e origem de documentos; grafoscopia examina escrita e assinatura por hábitos gráficos e elementos individualizadores.",
      estudar: "Revise suporte, impressão, rasura, lavagem química, montagem, falsificação material/ideológica, imitação servil, disfarce gráfico, espontaneidade e padrões de comparação.",
      fgv: "A banca cobra diferença entre documento falso, documento ideologicamente falso, alteração material e assinatura questionada.",
      cuidado: "Grafoscopia não se baseia só em semelhança visual; considera dinâmica, pressão, ritmo, inclinação, espaçamento e variabilidade natural."
    };
    if (text.includes("criminologia") || text.includes("vitimologia") || text.includes("controle social")) return {
      conceito: "Criminologia estuda crime, criminoso, vítima e controle social por método empírico e interdisciplinar. Vitimologia olha o papel e a proteção da vítima. Controle social pode ser formal ou informal.",
      estudar: "Conceito, objeto, método, escola clássica, positivista, sociologia criminal, etiquetamento, criminologia crítica, abolicionismo, teorias do conflito, vitimização primária/secundária/terciária e prevenção.",
      fgv: "A FGV cobra escolas, teorias e classificações por comparação direta.",
      cuidado: "Direito Penal pergunta se há crime e pena; Criminologia pergunta por que ocorre, como é controlado e como a vítima é afetada."
    };
    if (text.includes("deep web") || text.includes("dark web") || text.includes("logs") || text.includes("osint") || text.includes("ambientes digitais") || text.includes("vitimização digital") || text.includes("rastreamento de informações")) return {
      conceito: "Criminologia digital observa crime em ambiente tecnológico. Deep web é conteúdo não indexado por buscadores comuns; dark web é parcela acessada por ferramentas específicas e associada a anonimato, embora nem todo uso seja criminoso.",
      estudar: "Perfil do criminoso cibernético, ambientes digitais criminógenos, vitimização digital, logs, metadados, redes sociais, preservação de evidências digitais, inteligência cibernética e fontes abertas.",
      fgv: "A banca mistura conceitos de rede, investigação e criminologia para ver se o candidato separa ambiente, conduta, vítima e evidência.",
      cuidado: "Não confunda anonimato técnico com impossibilidade de investigação; rastros digitais podem existir em pontos diferentes da infraestrutura."
    };
  }

  if (groupId === "biologia") {
    if (text.includes("composição química") || text.includes("membrana") || text.includes("organelas") || text.includes("divisão celular") || text.includes("estrutura e função celular")) return {
      conceito: "A célula é a unidade estrutural e funcional dos seres vivos. Sua composição inclui água, sais, carboidratos, lipídios, proteínas e ácidos nucleicos; membrana controla trocas; organelas executam funções; núcleo organiza material genético.",
      estudar: "Membrana plasmática, transporte passivo/ativo, mitocôndria, ribossomos, retículo, complexo golgiense, lisossomos, núcleo, cromatina, mitose e meiose.",
      fgv: "A cobrança tende a relacionar estrutura e função, especialmente quando a alternativa troca organelas ou tipos de divisão.",
      cuidado: "Mitose mantém número cromossômico em células somáticas; meiose forma gametas e reduz o número cromossômico."
    };
    if (text.includes("dna") || text.includes("rna") || text.includes("mendel") || text.includes("grupos sanguíneos")) return {
      conceito: "DNA armazena informação genética; RNA participa da expressão gênica; gene é segmento funcional; cromossomos organizam DNA. Hereditariedade segue padrões que podem ser mendelianos ou ligados ao sexo.",
      estudar: "DNA, RNA, alelos, genótipo, fenótipo, dominância, recessividade, segregação, assortimento independente, probabilidade, herança ligada ao X, determinação sexual, ABO e Rh.",
      fgv: "A banca cobra cruzamentos simples, diferença entre gene e cromossomo e limites de grupos sanguíneos como identificação.",
      cuidado: "Grupo sanguíneo ajuda excluir ou indicar compatibilidade, mas não individualiza com a mesma força de perfil genético."
    };
    if (text.includes("gametogênese") || text.includes("fecundação") || text.includes("cristas papilares")) return {
      conceito: "Embriologia humana estuda gametas, fecundação e desenvolvimento embrionário. As cristas papilares formam-se durante o desenvolvimento fetal e dão base aos desenhos digitais, palmares e plantares.",
      estudar: "Espermatogênese, ovogênese, fecundação, zigoto, clivagem, nidação, folhetos embrionários, formação da pele e cristas papilares.",
      fgv: "A FGV pode ligar desenvolvimento embrionário à permanência e individualidade das impressões digitais.",
      cuidado: "A impressão colhida muda por qualidade de coleta ou lesão; o desenho papilar, em regra, permanece estável após formado."
    };
    if (text.includes("biometria") || text.includes("características biológicas") || text.includes("bases biológicas das impressões digitais")) return {
      conceito: "Biometria identifica ou autentica pessoas por características biológicas ou comportamentais mensuráveis. Impressões digitais, face, íris, voz e DNA têm forças e limitações diferentes.",
      estudar: "Unicidade, permanência, coletabilidade, universalidade, aceitabilidade, desempenho, falso positivo, falso negativo, identificação 1:N e verificação 1:1.",
      fgv: "A banca cobra diferença entre identificar e autenticar, ou entre característica biológica e credencial externa.",
      cuidado: "Senha, cartão e token não são biometria; são fatores de posse ou conhecimento."
    };
  }

  if (groupId === "fisica") {
    if (text.includes("reflexão") || text.includes("refração") || text.includes("espelhos") || text.includes("lentes")) return {
      conceito: "Óptica estuda comportamento da luz. Reflexão ocorre quando a luz retorna ao meio; refração ocorre quando muda de meio e velocidade; lentes e espelhos formam imagens com características próprias.",
      estudar: "Propagação retilínea, reflexão regular/difusa, refração, índice de refração, lentes convergentes/divergentes, foco, aumento, imagem real/virtual e nitidez.",
      fgv: "A banca cobra identificação do fenômeno ou efeito prático em equipamento óptico.",
      cuidado: "Imagem maior não significa necessariamente melhor; qualidade depende de foco, iluminação, resolução e ausência de distorção."
    };
    if (text.includes("ultravioleta") || text.includes("fluorescência") || text.includes("ondas eletromagnéticas")) return {
      conceito: "Ondas eletromagnéticas incluem rádio, micro-ondas, infravermelho, luz visível, ultravioleta, raios X e gama. Fluorescência ocorre quando material absorve energia e emite luz em outro comprimento de onda.",
      estudar: "Frequência, comprimento de onda, energia, espectro eletromagnético, UV, luz visível, filtros, excitação, emissão e aplicações tecnológicas.",
      fgv: "A prova pode perguntar por que determinado vestígio aparece sob iluminação específica.",
      cuidado: "Fluorescência não é simples reflexão; envolve absorção e reemissão de energia."
    };
    if (text.includes("carga elétrica") || text.includes("corrente elétrica") || text.includes("resistência") || text.includes("circuitos elétricos simples")) return {
      conceito: "Eletricidade básica trabalha com carga, corrente, diferença de potencial e resistência. Circuitos simples dependem de fonte, caminho condutor e carga/dispositivo.",
      estudar: "Lei de Ohm em nível básico, associação simples, curto-circuito, circuito aberto, potência, bateria, aterramento e proteção de equipamentos.",
      fgv: "A FGV cobra relações conceituais: corrente é fluxo de cargas, tensão é diferença de potencial, resistência dificulta passagem de corrente.",
      cuidado: "Não confunda tensão com corrente; elas se relacionam, mas não são a mesma grandeza."
    };
    if (text.includes("captura de imagens") || text.includes("fotografia digital") || text.includes("sistemas biométricos")) return {
      conceito: "Captura de imagem transforma luz refletida ou emitida em sinal registrado por sensor. Fotografia digital envolve iluminação, foco, exposição, resolução, contraste, compressão e armazenamento.",
      estudar: "Sensor, pixel, resolução, profundidade de cor, ruído, iluminação, filtros, foco, escala, biometria óptica/capacitiva e equipamentos de identificação.",
      fgv: "A banca pode cobrar finalidade de sensor, efeito de resolução e uso de equipamentos ópticos ou eletrônicos em identificação humana.",
      cuidado: "Aumentar zoom digital não cria detalhe real; pode apenas interpolar pixels."
    };
  }

  if (groupId === "quimica") {
    if (text.includes("modelos atômicos") || text.includes("tabela periódica") || text.includes("ligações")) return {
      conceito: "Estrutura da matéria explica átomos, elementos, elétrons e ligações. A tabela periódica organiza propriedades que ajudam a prever comportamento químico.",
      estudar: "Prótons, nêutrons, elétrons, número atômico, massa, íons, famílias, períodos, eletronegatividade, ligação iônica, covalente e metálica.",
      fgv: "A cobrança costuma trocar partícula, carga, localização e tipo de ligação.",
      cuidado: "Átomo neutro tem prótons e elétrons em igual número; íon resulta de ganho ou perda de elétrons."
    };
    if (text.includes("misturas") || text.includes("separação") || text.includes("concentração") || text.includes("solubilidade")) return {
      conceito: "Mistura reúne substâncias; solução é mistura homogênea. Métodos de separação dependem de propriedades como tamanho de partícula, densidade, ponto de ebulição, magnetismo e solubilidade.",
      estudar: "Filtração, decantação, centrifugação, destilação, evaporação, cromatografia, soluto, solvente, concentração comum, molaridade em nível básico e curva de solubilidade.",
      fgv: "A banca apresenta situação cotidiana ou pericial e pede método adequado de separação ou interpretação da concentração.",
      cuidado: "Dissolver não é o mesmo que reagir; mistura homogênea pode ter mais de uma substância."
    };
    if (text.includes("reações") || text.includes("balanceamento") || text.includes("velocidade") || text.includes("equilíbrio")) return {
      conceito: "Reação química rearranja átomos. Balanceamento respeita conservação da matéria. Velocidade depende de concentração, temperatura, superfície, catalisador e natureza dos reagentes. Equilíbrio envolve reações reversíveis.",
      estudar: "Reagentes, produtos, coeficientes, conservação de átomos, fatores cinéticos, catalisador, equilíbrio dinâmico e deslocamento qualitativo.",
      fgv: "A prova cobra se a equação está balanceada ou qual fator acelera/retarda processo.",
      cuidado: "Coeficiente altera quantidade de moléculas; não altere índices das fórmulas para balancear."
    };
    if (text.includes("ácidos") || text.includes("bases") || text.includes("orgânicos")) return {
      conceito: "Funções químicas agrupam substâncias por comportamento. Ácidos liberam H+ em modelo clássico; bases liberam OH-; sais resultam de neutralização; óxidos envolvem oxigênio. Química orgânica estuda compostos de carbono.",
      estudar: "Ácidos, bases, sais, óxidos, pH, neutralização, hidrocarbonetos, álcoois, aldeídos, cetonas, ácidos carboxílicos, ésteres, aminas e propriedades físicas.",
      fgv: "A banca cobra reconhecimento de função ou propriedade por fórmula, nome ou comportamento.",
      cuidado: "Nem todo composto com carbono é orgânico no tratamento didático; carbonatos e CO2 costumam ser exceções clássicas."
    };
    if (text.includes("reagentes") || text.includes("impressões digitais") || text.includes("fluorescência") || text.includes("interações químicas")) return {
      conceito: "Impressões latentes contêm resíduos como água, sais, aminoácidos e componentes lipídicos. Reagentes e técnicas de revelação exploram interações físicas ou químicas com esses resíduos e com a superfície.",
      estudar: "Pós reveladores, ninidrina, cianoacrilato, nitrato de prata em noção geral, superfícies porosas/não porosas, fluorescência, luz forense e compatibilidade do método.",
      fgv: "A FGV pode cobrar qual técnica combina com resíduo ou superfície, sem exigir protocolo laboratorial avançado.",
      cuidado: "Não existe reagente universal; método inadequado pode destruir, contaminar ou mascarar o vestígio."
    };
  }

  if (groupId === "legislacao") {
    if (title.includes("constituição do paraná")) return {
      conceito: "A Constituição do Paraná organiza a Administração estadual, servidores e segurança pública no plano estadual. Para prova, importa saber competências, princípios, regime de servidores e lugar da Polícia Civil no sistema estadual.",
      estudar: "Administração Pública, concurso, cargos, responsabilidades, segurança pública, Polícia Civil, órgãos estaduais e relação com Constituição Federal.",
      fgv: "A banca cobra literalidade estadual em contraste com regra federal geral.",
      cuidado: "Não responda apenas pelo texto da Constituição Federal quando o comando mencionar Constituição do Estado do Paraná."
    };
    if (title.includes("lc 259")) return {
      conceito: "A LC 259/2023 estrutura carreiras da Polícia Civil do Paraná. O estudo deve mapear cargos, ingresso, desenvolvimento funcional, progressão/promoção, direitos, garantias, deveres e regras específicas alteradas por normas posteriores.",
      estudar: "Cargos da PCPR, Papiloscopista Policial, requisitos, níveis, capacitação, promoção, vedações à promoção, direitos e garantias funcionais.",
      fgv: "A FGV tende a cobrar cargo, requisito, consequência funcional ou redação literal de alteração recente.",
      cuidado: "Use a versão compilada oficial; alterações posteriores mudam detalhes de promoção, direitos e deveres."
    };
    if (title.includes("14.735")) return {
      conceito: "A Lei 14.735/2023 fixa normas gerais das Polícias Civis. Ela trata a Polícia Civil como instituição permanente, típica de Estado e essencial à justiça criminal, com funções de polícia judiciária e apuração de infrações penais.",
      estudar: "Princípios institucionais, diretrizes, competências, organização, direitos, garantias, prerrogativas, deveres, vedações e relação com SUSP.",
      fgv: "A banca cobra competências como preservar local, organizar identificação civil e criminal, garantir cadeia de custódia e atuar com tecnicidade.",
      cuidado: "Norma nacional dá diretrizes gerais; lei estadual detalha organização local."
    };
    if (title.includes("23.213")) return {
      conceito: "A Lei 23.213/2026 é a Lei Orgânica da Polícia Civil do Paraná, norma institucional central do edital. O estudo deve ser por estrutura: organização, unidades, competências, direção, atribuições, funcionamento e disposições transitórias.",
      estudar: "Leia a lei seca oficial por capítulos e marque tudo que envolver Papiloscopista, identificação, unidades, chefias, competências, deveres e relação com outras normas da PCPR.",
      fgv: "Por ser lei recente, a banca pode cobrar literalidade, nomenclatura de órgãos e diferença entre lei orgânica estadual e lei orgânica nacional.",
      cuidado: "Se houver divergência entre resumo e lei seca, prevalece a lei oficial atualizada."
    };
    if (title.includes("21.894")) return {
      conceito: "O Código Disciplinar da PCPR organiza deveres funcionais, transgressões, sanções, competência disciplinar, apuração, defesa e recursos. É diferente de crime e de improbidade.",
      estudar: "Deveres, proibições, transgressões, penalidades, sindicância, processo administrativo disciplinar, prazos recursais e efeitos.",
      fgv: "A FGV pode perguntar qual conduta é disciplinar, qual autoridade atua ou qual sanção/procedimento corresponde ao caso.",
      cuidado: "Responsabilidade administrativa pode coexistir com civil e penal, mas cada esfera tem pressupostos próprios."
    };
    if (text.includes("ética") || text.includes("sigilo funcional") || text.includes("proteção de informações institucionais")) return {
      conceito: "Ética no serviço público orienta conduta honesta, impessoal, leal e responsável. Sigilo funcional protege informações obtidas em razão do cargo, especialmente dados de investigação, identificação, sistemas policiais e documentos institucionais.",
      estudar: "Relacione dever funcional, proibição, responsabilidade civil/administrativa/penal, proteção de dado, acesso autorizado, publicidade administrativa e hipóteses de sigilo.",
      fgv: "A FGV pode cobrar caso de compartilhamento indevido, consulta sem finalidade funcional, quebra de sigilo ou confusão entre transparência pública e exposição de informação protegida.",
      cuidado: "LAI e publicidade não autorizam divulgar dado pessoal sensível, informação policial restrita ou elemento de investigação sem base legal."
    };
    if (title.includes("6.174")) return {
      conceito: "A Lei 6.174/1970 é o regime jurídico dos servidores civis do Poder Executivo do Paraná. Para o edital, importa provimento, vacância, direitos, vantagens, deveres, proibições e responsabilidades.",
      estudar: "Cargo público, nomeação, posse, exercício, estágio, vacância, licenças, direitos, deveres, responsabilidade civil, administrativa e penal.",
      fgv: "A banca cobra conceito legal, prazo, forma de provimento ou consequência funcional.",
      cuidado: "Quando houver regra específica da Polícia Civil, ela pode prevalecer sobre a regra geral."
    };
    if (title.includes("abuso") || title.includes("lgpd") || title.includes("lai")) return {
      conceito: "Este capítulo une leis aplicadas à atividade policial: abuso de autoridade, identificação criminal, LGPD, LAI e sigilo. O eixo comum é limite legal no uso do poder e da informação.",
      estudar: "Finalidade específica no abuso de autoridade, hipóteses de identificação criminal, dados pessoais/sensíveis, acesso à informação, sigilo, transparência e proteção de informação institucional.",
      fgv: "A banca cria situação concreta e pergunta se há dever de sigilo, direito de acesso, abuso, tratamento indevido de dados ou identificação permitida.",
      cuidado: "Abuso de autoridade exige finalidade específica; LGPD não impede toda atividade policial, mas exige base, finalidade, segurança e controle."
    };
  }

  if (groupId === "penal") {
    if (text.includes("princípios") || text.includes("teoria do crime") || text.includes("dolo") || text.includes("tentativa") || text.includes("penas") || text.includes("extinção da punibilidade")) return {
      conceito: "Teoria do crime organiza fato típico, ilicitude e culpabilidade. Dolo envolve vontade/assunção do risco; culpa envolve violação do dever de cuidado. Tentativa ocorre quando a execução começa e o crime não se consuma por circunstâncias alheias à vontade do agente.",
      estudar: "Legalidade, anterioridade, lei penal no tempo/espaço, tempo/lugar do crime, conduta, resultado, nexo, tipicidade, ilicitude, culpabilidade, erro, tentativa, desistência e penas.",
      fgv: "A FGV cobra caso curto e exige classificar o instituto, muitas vezes trocando tentativa por desistência ou dolo eventual por culpa consciente.",
      cuidado: "Não confunda arrependimento eficaz com arrependimento posterior; um impede resultado, o outro ocorre após consumação em crimes sem violência ou grave ameaça."
    };
    if (text.includes("crimes contra")) return {
      conceito: "Crimes em espécie devem ser estudados por bem jurídico, sujeito, núcleo do tipo, elemento subjetivo e qualificadoras/majorantes mais cobradas.",
      estudar: "Pessoa, patrimônio, dignidade sexual, fé pública e Administração Pública; revise homicídio, lesões, furto, roubo, estelionato, falsidade documental, peculato, concussão, corrupção e prevaricação.",
      fgv: "A banca troca tipos parecidos, como furto/roubo, apropriação/peculato, corrupção/concussão e falsidade material/ideológica.",
      cuidado: "Servidor público para fins penais pode ter conceito mais amplo que o estatutário."
    };
    if (text.includes("estatuto da advocacia") || text.includes("oab")) return {
      conceito: "Aspectos penais do Estatuto da Advocacia e da OAB protegem prerrogativas profissionais e delimitam condutas que podem ter relevância penal no contato entre atuação policial, investigação e defesa técnica.",
      estudar: "Revise inviolabilidade profissional, limites de busca e apreensão em escritório, prerrogativas do advogado, comunicação com cliente e crimes/condutas ligados ao exercício profissional quando previstos em lei.",
      fgv: "A FGV pode cobrar caso em que atuação estatal interfere em prerrogativa da defesa ou confunde dever policial com violação de garantia profissional.",
      cuidado: "Prerrogativa profissional não é privilégio pessoal: é garantia da defesa e deve ser compatibilizada com ordem judicial e investigação regular."
    };
    if (text.includes("lei maria") || text.includes("drogas") || text.includes("atividade policial") || text.includes("prisão em flagrante") || text.includes("excludentes de ilicitude") || text.includes("uso legítimo da força") || text.includes("cadeia de custódia")) return {
      conceito: "Legislação extravagante aplicada exige saber incidência, finalidade e pontos que impactam investigação, prisão, prova e atuação policial.",
      estudar: "Maria da Penha, Drogas, Desarmamento, Organizações Criminosas, Abuso de Autoridade, prisão em flagrante, excludentes, uso legítimo da força, cadeia de custódia e OAB.",
      fgv: "A banca cobra diferença entre leis especiais e regra geral do Código Penal.",
      cuidado: "Não use apenas o nome da lei; veja conduta, sujeito, procedimento e consequência."
    };
  }

  if (groupId === "processo-penal") {
    if (text.includes("inquérito") || text.includes("notícia") || text.includes("ação penal") || text.includes("investigado") || text.includes("princípios do processo penal") || text.includes("aplicação da lei processual penal")) return {
      conceito: "Inquérito policial é procedimento investigativo presidido pela autoridade policial para apurar materialidade e autoria. Direitos do investigado limitam a atividade estatal e protegem validade do procedimento.",
      estudar: "Notitia criminis, delatio criminis, instauração, diligências, indiciamento, sigilo, contraditório diferido, ação penal, garantias, defesa técnica quando cabível e controle judicial.",
      fgv: "A banca pergunta natureza do inquérito, características e atos que exigem controle judicial.",
      cuidado: "Inquérito não é processo judicial, mas não é território sem direitos fundamentais."
    };
    if (text.includes("provas") || text.includes("cadeia de custódia") || text.includes("busca") || text.includes("reconhecimento")) return {
      conceito: "Prova busca formar convencimento em juízo; elementos informativos orientam investigação. Cadeia de custódia documenta caminho do vestígio. Busca e reconhecimento têm formalidades próprias.",
      estudar: "Prova lícita/ilícita, fonte independente, encontro fortuito, busca pessoal/domiciliar, mandado, reconhecimento de pessoas/coisas e etapas da cadeia de custódia.",
      fgv: "A FGV cobra sequência, formalidade e consequência de violação de garantias.",
      cuidado: "Preservar local e cadeia de custódia não é formalismo vazio; é condição de confiabilidade."
    };
    if (text.includes("estatuto da advocacia") || text.includes("oab")) return {
      conceito: "Aspectos processuais penais do Estatuto da Advocacia e da OAB protegem o exercício da defesa durante investigação e processo, especialmente comunicação, acesso a elementos documentados e limites de medidas contra advogado.",
      estudar: "Acesso aos autos documentados, sigilo investigativo, comunicação com cliente preso, busca em escritório, presença da OAB quando exigida e compatibilização com decisão judicial.",
      fgv: "A banca pode apresentar diligência policial e perguntar se a prerrogativa profissional foi respeitada.",
      cuidado: "Sigilo do inquérito não autoriza negar todo acesso à defesa quando a lei ou a súmula assegura consulta a elementos já documentados."
    };
    if (text.includes("prisão") || text.includes("cautelares") || text.includes("interceptação")) return {
      conceito: "Prisões e cautelares restringem liberdade ou direitos para proteger investigação, processo ou ordem pública dentro das hipóteses legais.",
      estudar: "Flagrante, preventiva, temporária quando pertinente, liberdade provisória, fiança, cautelares diversas, interceptação telefônica, sigilo de dados, Maria da Penha, Drogas e Organizações Criminosas.",
      fgv: "A banca troca fundamentos e espécies de prisão, ou mistura interceptação de comunicação com acesso a dados.",
      cuidado: "Medida invasiva exige base legal e, em regra, controle judicial; urgência não elimina motivação."
    };
  }

  if (groupId === "constitucional") {
    if (text.includes("princípios fundamentais") || text.includes("direitos") || text.includes("remédios") || text.includes("devido processo") || text.includes("inviolabilidade") || text.includes("sigilo de dados") || text.includes("habeas corpus") || text.includes("habeas data") || text.includes("mandado de segurança") || text.includes("mandado de injunção") || text.includes("ação popular")) return {
      conceito: "Princípios fundamentais orientam o Estado; direitos e garantias limitam o poder; remédios constitucionais protegem situações específicas como liberdade, informação, direito líquido e certo e omissão normativa.",
      estudar: "Fundamentos, objetivos, direitos individuais/coletivos, direitos sociais, nacionalidade, direitos políticos, devido processo, domicílio, sigilo, prisão, HC, HD, MS, MI e ação popular.",
      fgv: "A FGV cobra qual remédio cabe, qual garantia foi violada ou qual exceção constitucional permite restrição.",
      cuidado: "Habeas data protege conhecimento/retificação de dados pessoais; mandado de segurança protege direito líquido e certo não amparado por HC/HD."
    };
    if (text.includes("organização do estado") || text.includes("segurança pública") || text.includes("união") || text.includes("municípios") || text.includes("distrito federal") || text.includes("poder executivo") || text.includes("legislativo") || text.includes("judiciário")) return {
      conceito: "Organização do Estado reparte competências entre entes; Poderes exercem funções típicas e atípicas; segurança pública, no art. 144, distribui atribuições entre órgãos.",
      estudar: "União, Estados, Municípios, Distrito Federal, competências, Executivo, Legislativo, Judiciário, Polícia Civil, polícia judiciária, investigação criminal e diferenças entre órgãos de segurança.",
      fgv: "A banca cobra atribuição constitucional da Polícia Civil e troca com Polícia Militar, Polícia Federal ou Polícia Penal.",
      cuidado: "Polícia judiciária e investigação criminal não equivalem a policiamento ostensivo."
    };
    if (text.includes("controle de constitucionalidade") || text.includes("constituição do estado") || text.includes("ação direta de inconstitucionalidade") || text.includes("ação declaratória de constitucionalidade")) return {
      conceito: "Controle de constitucionalidade verifica compatibilidade de atos normativos com a Constituição. ADI retira norma incompatível; ADC busca declarar constitucionalidade. Constituição estadual replica e adapta normas ao âmbito do Paraná.",
      estudar: "ADI, ADC, parâmetro constitucional, efeitos, legitimidade em noção geral e dispositivos estaduais sobre Administração, servidores, segurança pública e Polícia Civil.",
      fgv: "A banca cobra finalidade dos instrumentos e diferença entre controle abstrato e discussão concreta.",
      cuidado: "Não confunda controle de legalidade de ato administrativo com controle de constitucionalidade de norma."
    };
  }

  if (groupId === "administrativo") {
    if (text.includes("conceito") || text.includes("administração direta") || text.includes("princípios da administração") || text.includes("lindb")) return {
      conceito: "Direito Administrativo disciplina a função administrativa do Estado. Administração direta reúne entes federativos; indireta reúne entidades com personalidade própria, como autarquias, fundações públicas, empresas públicas e sociedades de economia mista.",
      estudar: "Legalidade, impessoalidade, moralidade, publicidade, eficiência, supremacia/indisponibilidade do interesse público, LINDB, desconcentração, descentralização e entidades da indireta.",
      fgv: "A banca cobra diferença entre órgão e entidade, descentralização e desconcentração, personalidade jurídica e regime predominante.",
      cuidado: "Órgão não tem personalidade jurídica; entidade da administração indireta tem."
    };
    if (text.includes("atos administrativos") || text.includes("poderes") || text.includes("licitações") || text.includes("serviços públicos")) return {
      conceito: "Ato administrativo manifesta vontade da Administração sob regime público. Poderes administrativos instrumentalizam a função pública. Licitação seleciona proposta conforme regras legais.",
      estudar: "Competência, finalidade, forma, motivo, objeto, presunção, imperatividade, autoexecutoriedade, tipicidade, anulação, revogação, convalidação, poderes hierárquico, disciplinar, regulamentar e de polícia, Lei 14.133.",
      fgv: "A banca troca requisito por atributo, anulação por revogação e poder de polícia por polícia judiciária.",
      cuidado: "Ato ilegal é anulado; ato válido e inconveniente pode ser revogado, respeitados direitos adquiridos e limites."
    };
    if (text.includes("agentes") || text.includes("responsabilidade") || text.includes("improbidade") || text.includes("controle")) return {
      conceito: "Agentes públicos exercem função pública. O Estado responde objetivamente por danos de seus agentes nessa qualidade, com direito de regresso em caso de dolo ou culpa. Improbidade exige conduta dolosa tipificada.",
      estudar: "Cargo, emprego, função, investidura, deveres, PAD, risco administrativo, excludentes, atos de improbidade, sanções, autotutela, controle administrativo, judicial e legislativo.",
      fgv: "A banca cobra consequência jurídica: responsabilidade civil, disciplinar, improbidade ou controle.",
      cuidado: "Após a reforma da improbidade, culpa simples não basta para ato de improbidade; atenção ao dolo."
    };
  }

  if (groupId === "direitos-humanos") {
    if (text.includes("teoria geral") || text.includes("sistemas") || text.includes("democracia") || text.includes("sistema global") || text.includes("sistema interamericano") || text.includes("tratados internacionais")) return {
      conceito: "Direitos Humanos são direitos inerentes à dignidade da pessoa, construídos historicamente e protegidos por sistemas nacionais e internacionais. Democracia e cidadania são condições de efetividade desses direitos.",
      estudar: "Universalidade, historicidade, indivisibilidade, interdependência, vedação ao retrocesso em noção geral, ONU, sistema interamericano, tratados e Constituição de 1988.",
      fgv: "A FGV cobra características, gerações/dimensões, sistema global versus interamericano e relação com cidadania.",
      cuidado: "Universalidade não significa ausência de proteção específica a grupos vulneráveis."
    };
    if (text.includes("mulheres") || text.includes("uso proporcional") || text.includes("pessoa presa")) return {
      conceito: "Grupos vulneráveis demandam proteção específica para reduzir desigualdades reais. Na segurança pública, direitos humanos orientam uso da força, custódia, prevenção da tortura e tratamento digno.",
      estudar: "Mulheres, idosos, crianças/adolescentes, povos indígenas, comunidades tradicionais, pessoas com deficiência, população LGBTQIA+, refugiados, dignidade, necessidade, proporcionalidade e direitos da pessoa presa.",
      fgv: "A banca cria caso de atuação policial e cobra conduta compatível com dignidade, legalidade e não discriminação.",
      cuidado: "Uso da força não se mede pela intenção subjetiva do agente, mas por legalidade, necessidade, proporcionalidade e prestação de contas."
    };
    if (text.includes("política nacional") || text.includes("agenda 2030") || text.includes("educação em direitos humanos")) return {
      conceito: "PNDH, educação em direitos humanos e Agenda 2030 organizam políticas públicas, cultura de proteção, igualdade, justiça, instituições eficazes e desenvolvimento sustentável.",
      estudar: "Eixos de proteção e educação, cultura em direitos humanos, ODS, especialmente igualdade, paz, justiça, instituições eficazes, redução de desigualdades e inclusão.",
      fgv: "A banca cobra finalidade de programas e associação de ODS a políticas públicas.",
      cuidado: "ODS não são matéria penal; são objetivos de política pública e desenvolvimento com impacto em segurança, inclusão e instituições."
    };
  }

  if (groupId === "rlm") {
    if (text.includes("lógica proposicional") || text.includes("conjuntos")) return {
      conceito: "Lógica proposicional trabalha com frases que podem ser verdadeiras ou falsas; conjuntos organizam elementos e relações de pertinência, inclusão, união, interseção e diferença.",
      estudar: "Conectivos, negação, condicional, bicondicional, equivalências, tabelas-verdade, quantificadores em linguagem natural, diagramas de Venn e operações com conjuntos.",
      fgv: "A banca troca a negação correta e monta problemas de inclusão/exclusão.",
      cuidado: "A negação de 'todo A é B' é 'algum A não é B', não 'nenhum A é B'."
    };
    if (text.includes("porcentagem") || text.includes("juros") || text.includes("medidas") || text.includes("números inteiros") || text.includes("racionais") || text.includes("reais")) return {
      conceito: "Números, porcentagem, juros e medidas exigem controle de base, unidade e proporção. Juros simples crescem linearmente; juros compostos crescem sobre montante acumulado.",
      estudar: "Frações, decimais, razão, proporção, regra de três, porcentagem, pontos percentuais, juros simples/compostos, escalas e conversões.",
      fgv: "A FGV cobra problema curto com base implícita ou duas etapas de aumento/desconto.",
      cuidado: "Aumento de 20% seguido de desconto de 20% não volta ao valor inicial."
    };
    if (text.includes("gráficos") || text.includes("geometria") || text.includes("plano cartesiano")) return {
      conceito: "Gráficos e tabelas resumem dados; geometria básica mede formas; plano cartesiano localiza pontos e permite calcular distâncias.",
      estudar: "Escala, legenda, eixos, média visual, ângulos, triângulos, polígonos, perímetro, área, coordenadas e distância entre pontos.",
      fgv: "A banca cobra leitura atenta da unidade e comparação entre valores.",
      cuidado: "Não confunda variação absoluta com variação percentual."
    };
    if (text.includes("associações") || text.includes("contagem") || text.includes("probabilidade") || text.includes("sequencial") || text.includes("dedução de informações") || text.includes("avaliação de condições") || text.includes("problemas aritméticos") || text.includes("matriciais")) return {
      conceito: "Problemas lógicos exigem organizar condições. Contagem enumera possibilidades sem repetição indevida; probabilidade compara casos favoráveis e possíveis.",
      estudar: "Tabela de possibilidades, árvore de decisão, princípio multiplicativo, permutação/combinação em nível básico, probabilidade, sequências numéricas, matriciais e orientação espacial/temporal.",
      fgv: "A banca coloca restrições suficientes para resolver por eliminação organizada.",
      cuidado: "Se a ordem importa, o cálculo muda; se os casos se sobrepõem, somar direto erra."
    };
  }

  if (groupId === "realidade-pr") {
    if (text.includes("históricos") || text.includes("geografia") || text.includes("divisão") || text.includes("formação territorial") || text.includes("processos coloniais") || text.includes("movimentos sociais")) return {
      conceito: "O Paraná deve ser entendido pela formação territorial, ocupação, ciclos econômicos, fronteira, relevo, clima, hidrografia, vegetação, população e organização municipal/regional.",
      estudar: "Paraná tradicional e moderno, tropeirismo, erva-mate, café, colonização, industrialização, regiões metropolitanas, litoral, planaltos, rios, agricultura, indústria, serviços e municípios.",
      fgv: "A banca cobra associação entre processo histórico, região, atividade econômica e característica geográfica.",
      cuidado: "Não trate o Estado como homogêneo; litoral, Curitiba/RMC, Norte, Oeste, Sudoeste e Centro têm dinâmicas diferentes."
    };
    if (text.includes("cultura") || text.includes("indicadores") || text.includes("políticas") || text.includes("atuais")) return {
      conceito: "Cultura, indicadores e políticas públicas conectam identidade paranaense e desafios contemporâneos. Dados devem ser conferidos em IPARDES, IBGE e fontes oficiais.",
      estudar: "Patrimônio material/imaterial, festas, literatura, música, indicadores sociais, IDH, saúde, educação, segurança pública, mobilidade, economia, meio ambiente, sustentabilidade e inclusão.",
      fgv: "A banca cobra leitura de indicador e associação de tema atual ao Estado.",
      cuidado: "Dado estatístico desatualizado derruba alternativa; memorize tendências e confira números perto da prova."
    };
  }

  return base;
}

function chapterEmphasis(chapter) {
  const title = chapter.title.toLowerCase();
  const emphasis = [];

  if (title.includes("interpretação")) emphasis.push("Treine diferença entre ideia central, assunto, tese, inferência e pressuposto.", "Use o texto como prova: cada alternativa deve ser rastreável a um trecho ou relação textual.", "Atenção a advérbios e modalizadores que reduzem ou ampliam uma afirmação.");
  if (title.includes("coesão")) emphasis.push("Mapeie referentes: este, esse, aquele, ele, isso, tal, referido e sinônimos retomadores.", "Classifique conectores por valor: adição, oposição, concessão, causa, consequência, finalidade, condição e conclusão.", "Coerência depende da compatibilidade entre partes, não só da presença de conectivo.");
  if (title.includes("modos discursivos")) emphasis.push("Descrição caracteriza; narração encadeia eventos; exposição explica; argumentação defende; injunção orienta.", "Um gênero pode combinar modos, então procure predominância e finalidade.", "Texto normativo e didático podem parecer próximos, mas o normativo impõe conduta.");
  if (title.includes("frase")) emphasis.push("Comece por sujeito, verbo e complementos antes de avaliar vírgula.", "Em ordem inversa, encontre a ordem direta para testar concordância e regência.", "Discurso direto, indireto e indireto livre mudam marcas de pessoa, tempo e pontuação.");
  if (title.includes("morfologia")) emphasis.push("A classe da palavra depende do uso no trecho.", "Processos de formação incluem derivação, composição, redução e siglas.", "Modalizadores revelam certeza, dúvida, obrigação, avaliação e intensidade.");
  if (title.includes("semântica")) emphasis.push("Parônimos são palavras parecidas na forma, mas diferentes no sentido.", "Polissemia é multiplicidade de sentidos de uma palavra; ambiguidade é dupla leitura no enunciado.", "Crase combina regência com artigo/pronome; não é acento decorativo.");

  if (title.includes("hardware")) emphasis.push("RAM é volátil; SSD/HD são armazenamento não volátil.", "BIOS/UEFI participam da inicialização; firmware controla dispositivo; driver integra hardware ao sistema.", "Backup precisa permitir restauração, não só sincronização imediata.");
  if (title.includes("sistemas operacionais")) emphasis.push("Sistema operacional gerencia recursos e segurança; aplicativo executa tarefa do usuário.", "Windows, Android e iOS cobram permissões, atualizações, contas e proteção.", "Suítes de escritório devem ser comparadas por função equivalente.");
  if (title.includes("internet")) emphasis.push("IP localiza logicamente; DNS resolve nomes; VPN cria túnel; firewall filtra tráfego.", "Cookie, cache, log e metadado são quatro coisas diferentes.", "HTML estrutura, CSS estiliza, JavaScript adiciona comportamento, API integra sistemas.");
  if (title.includes("segurança da informação")) emphasis.push("CIA: confidencialidade, integridade e disponibilidade.", "Autenticação prova identidade; autorização define permissão.", "Ransomware sequestra dados; phishing captura confiança; engenharia social manipula pessoas.");
  if (title.includes("crimes digitais")) emphasis.push("Separe meio digital, conduta típica e evidência resultante.", "Preservação técnica vale mais que print isolado.", "OSINT é fonte aberta com método documentado.");
  if (title.includes("ética digital")) emphasis.push("Dados biométricos exigem cuidado reforçado.", "Marco Civil, LGPD e sigilo funcional podem incidir juntos.", "Uso institucional de informação exige finalidade e autorização.");

  if (title.includes("papiloscopia")) emphasis.push("Papiloscopia individualiza por desenhos papilares, não por aparência geral.", "Princípios clássicos: variabilidade, permanência e classificabilidade.", "Coleta ruim não invalida o método, mas pode prejudicar confronto.");
  if (title.includes("antropologia")) emphasis.push("Antropologia estima perfil; DNA compara perfil genético; odontologia compara registros dentários.", "Reconhecimento facial e IA auxiliam, mas têm falso positivo e exigem validação.", "Métodos diferentes têm forças probatórias diferentes.");
  if (title.includes("traumatologia")) emphasis.push("Instrumento lesivo e lesão precisam ser associados pelo mecanismo.", "Balística envolve arma, munição, trajetória, distância e efeitos.", "Asfixias exigem sinais e contexto.");
  if (title.includes("tanatologia")) emphasis.push("Fenômenos cadavéricos têm sequência temporal.", "Necropsia busca causa da morte e achados correlatos.", "Toxicologia exige amostra adequada e cadeia de custódia.");
  if (title.includes("criminalística")) emphasis.push("Vestígio é material; indício é inferência; prova é valoração processual.", "Preservação vem antes da coleta.", "Cadeia de custódia registra quem, quando, onde, como e por quê.");
  if (title.includes("documentoscopia")) emphasis.push("Documentoscopia analisa suporte, impressão, alteração e autenticidade.", "Grafoscopia analisa hábito gráfico, não semelhança superficial.", "Falsidade material e ideológica não são a mesma coisa.");
  if (title.includes("criminologia")) emphasis.push("Criminologia é empírica e interdisciplinar.", "Vitimização secundária decorre do tratamento institucional inadequado.", "Controle social formal envolve instituições; informal envolve família, escola, comunidade e cultura.");

  if (title.includes("citologia")) emphasis.push("Associe cada organela à função.", "Membrana seleciona trocas e mantém homeostase.", "Mitose e meiose são cobradas por finalidade e resultado.");
  if (title.includes("genética")) emphasis.push("Gene, alelo, cromossomo e genoma não são sinônimos.", "Probabilidade genética exige organizar genótipos parentais.", "ABO/Rh auxiliam, mas não individualizam como DNA.");
  if (title.includes("embriologia")) emphasis.push("Cristas papilares surgem no desenvolvimento fetal.", "O desenho papilar é estável em condições normais.", "Lesão superficial não muda permanentemente o padrão.");
  if (title.includes("biometria")) emphasis.push("Identificação 1:N busca quem é; autenticação 1:1 confirma se é quem afirma ser.", "Biometria tem falso positivo e falso negativo.", "Característica biológica deve ser coletável, estável e discriminante.");

  if (title.includes("óptica")) emphasis.push("Reflexão, refração e absorção geram efeitos diferentes.", "Lentes e espelhos podem formar imagens reais ou virtuais.", "Fotografia pericial exige escala, foco e iluminação.");
  if (title.includes("uv")) emphasis.push("UV tem maior energia que luz visível.", "Fluorescência envolve excitação e emissão.", "Filtros ajudam separar luz de excitação e emissão.");
  if (title.includes("eletricidade")) emphasis.push("Corrente é fluxo; tensão é diferença de potencial; resistência dificulta fluxo.", "Circuito aberto não conduz; curto-circuito desvia caminho.", "Equipamentos precisam de alimentação e proteção.");
  if (title.includes("captura")) emphasis.push("Sensor converte luz em sinal.", "Resolução real depende de sensor e óptica.", "Leitores biométricos podem usar princípios ópticos, capacitivos ou outros.");

  if (title.includes("estrutura da matéria")) emphasis.push("Número atômico identifica elemento.", "Ligações dependem de interação entre elétrons.", "Tabela periódica prevê propriedades.");
  if (title.includes("misturas")) emphasis.push("Método de separação depende de propriedade física.", "Solução é mistura homogênea.", "Concentração relaciona soluto ao total da solução.");
  if (title.includes("reações")) emphasis.push("Balanceamento conserva átomos.", "Catalisador acelera sem ser consumido no balanço global.", "Equilíbrio é dinâmico.");
  if (title.includes("funções químicas")) emphasis.push("Função química indica comportamento comum.", "pH ajuda diferenciar ácido/base.", "Funções orgânicas mudam propriedades físicas e reatividade.");
  if (title.includes("reagentes")) emphasis.push("Resíduo papilar tem componentes aquosos e lipídicos.", "Superfície porosa e não porosa pedem métodos diferentes.", "Fluorescência melhora contraste sob iluminação adequada.");

  if (title.includes("lc 259")) emphasis.push("Mapeie cargos, níveis, promoções e requisitos de capacitação.", "Papiloscopista aparece como carreira própria no QPPC.", "Alterações posteriores podem modificar prazos e direitos.");
  if (title.includes("14.735")) emphasis.push("Guarde princípios institucionais e competências da Polícia Civil.", "A lei nacional destaca investigação, sigilo, tecnicidade e cadeia de custódia.", "Não confunda competência geral com organização estadual.");
  if (title.includes("23.213")) emphasis.push("Leia a Lei Orgânica estadual pela estrutura dos capítulos.", "Marque órgãos, atribuições e nomenclatura institucional.", "Norma recente é alvo provável de literalidade.");
  if (title.includes("código disciplinar")) emphasis.push("Separe dever, proibição, transgressão, sanção e recurso.", "Responsabilidade disciplinar não é automaticamente crime.", "Processo disciplinar exige contraditório e ampla defesa.");
  if (title.includes("regime jurídico")) emphasis.push("Provimento e vacância são clássicos.", "Direitos e vantagens aparecem por prazo e hipótese.", "Regra geral pode ceder à norma policial específica.");
  if (title.includes("abuso")) emphasis.push("Abuso exige finalidade específica.", "Identificação criminal tem hipóteses legais.", "LGPD, LAI e sigilo devem ser conciliados por finalidade e base legal.");

  if (!emphasis.length) {
    emphasis.push(
      "Domine a definição e a finalidade antes de decorar detalhes.",
      "Compare com temas vizinhos para evitar troca conceitual.",
      "Treine por alternativa: uma palavra absoluta pode mudar todo o item.",
      "Conecte o ponto ao cargo de Papiloscopista sempre que houver identificação, prova, sigilo ou atuação policial."
    );
  }

  return [...new Set(emphasis)];
}

function buildDeepContent(chapter) {
  const guide = disciplineDepth[chapter.groupId];
  const details = chapter.editalItems.map((item) => ({ item, ...explainItem(item, chapter) }));
  const emphasis = chapterEmphasis(chapter);
  const officialNotice = (chapter.officialRefs || []).length > 1
    ? "Como este tema usa fonte jurídica, normativa ou dado público atualizável, revise a fonte oficial indicada nas referências antes de fixar prazos, redações ou números."
    : "Quando este tema aparecer em questão, resolva primeiro pelo conceito do edital e depois confira exceções indicadas nas fontes locais.";

  const fullStudy = details.map((detail, index) => `### ${index + 1}. ${detail.item}

**O que significa:** ${detail.conceito}

**Como estudar para a prova:** ${detail.estudar}

**Como a FGV pode cobrar:** ${detail.fgv}

**Cuidado de prova:** ${detail.cuidado}`).join("\n\n");

  const priorityRows = emphasis.map((point) => `| ${point} | Transforme em pergunta de prova e tente justificar uma alternativa correta e uma incorreta. |`).join("\n");
  const differenceRows = details.map((detail) => `| ${detail.item} | ${detail.cuidado} | ${detail.fgv} |`).join("\n");

  return `## Conteúdo essencial

### Visão de estudo para este tema

${guide.foundation.map((paragraph) => `${paragraph}`).join("\n\n")}

**Aplicação ao cargo:** ${guide.role}

**Aviso de fonte:** ${officialNotice}

### O que mais merece atenção

${guide.priorities.map((point) => `- ${point}`).join("\n")}

### Conteúdo completo orientado ao edital

${fullStudy}

### Prioridades FGV dentro deste tema

| Prioridade | Como transformar em treino |
|---|---|
${priorityRows}

### Diferenças que a banca costuma trocar

| Ponto | Cuidado principal | Forma provável de cobrança |
|---|---|---|
${differenceRows}

### Aplicação direta para Papiloscopista

- Relacione o tema à produção de informação confiável: leitura precisa, registro correto, preservação de vestígio, proteção de dado, atuação dentro da lei ou raciocínio lógico sobre evidências.
- Quando o assunto envolver identificação humana, pense em individualização, qualidade da coleta, comparação técnica, rastreabilidade e limite do método.
- Quando envolver norma jurídica, pense em sujeito competente, finalidade, dever, vedação, responsabilidade e consequência.
- Quando envolver ciência natural ou tecnologia, pense em fenômeno, instrumento, procedimento, erro de medição, preservação e validação.
- Use este capítulo como revisão ativa: transforme cada subtópico em pergunta e escreva uma resposta curta antes de olhar questões.

### Roteiro de estudo de alta retenção

1. Leia os microtópicos do edital e destaque verbos, nomes técnicos, prazos, classificações e exceções.
2. Faça uma tabela de comparação entre conceitos parecidos do tema.
3. Resolva questões ou exemplos sem consultar o gabarito.
4. Explique em voz alta por que a alternativa errada parece tentadora.
5. Volte ao edital e marque se algum item ainda não foi coberto por questão.

### Lacunas honestas

- Este capítulo já cobre o conteúdo programático em linguagem própria, mas a incidência estatística por prova anterior só deve ser ampliada quando as questões locais forem extraídas com fonte e gabarito conferidos.
- Se uma lei, dado do Paraná ou norma institucional tiver alteração após a data de geração do material, a fonte oficial indicada deve prevalecer sobre este resumo.
`;
}

function buildQuickRead(chapter) {
  const details = chapter.editalItems.map((item) => explainItem(item, chapter));
  const focus = chapterEmphasis(chapter).slice(0, 5);

  return [
    ...chapter.editalItems.map((item, index) => `- **${item}** ${details[index].estudar}`),
    ...focus.map((point) => `- **Prioridade FGV:** ${point}`),
    "- Antes de resolver questão, identifique se o comando pede conceito, exceção, comparação, consequência ou aplicação prática."
  ].join("\n");
}

function buildSchemeTables(chapter) {
  const details = chapter.editalItems.map((item) => ({ item, ...explainItem(item, chapter) }));
  const rows = details.map((detail) => `| ${detail.item} | ${detail.estudar} | ${detail.cuidado} |`).join("\n");
  const fgvRows = chapterEmphasis(chapter).map((point) => `| ${point} | Monte uma alternativa correta, uma quase correta e uma errada por troca conceitual. |`).join("\n");

  return `| Ponto do edital | O que revisar | Pegadinha provável |
|---|---|---|
${rows}

| Ponto quente | Treino recomendado |
|---|---|
${fgvRows}

| Filtro de prova | Pergunta mental |
|---|---|
| Conceito | Sei definir com minhas palavras, sem depender de frase decorada? |
| Finalidade | Sei explicar para que serve e em qual situação aparece? |
| Diferença | Sei separar de institutos parecidos? |
| Exceção | Há prazo, requisito, competência, limite ou hipótese especial? |
| Aplicação | Consigo reconhecer o tema em caso curto da FGV? |`;
}

function referencesFor(chapter) {
  const official = (chapter.officialRefs || ["editalFgv"])
    .map((key) => officialReferences[key])
    .filter(Boolean)
    .map((ref) => `- [${ref.label}](${ref.url})`);

  const localSources = [...new Set([...(chapter.groupLocalSources || []), ...(chapter.localSources || [])])]
    .map((source) => `- \`${source}\``);

  return [
    "### Fontes oficiais",
    ...official,
    "",
    "### Materiais locais usados como apoio",
    ...(localSources.length ? localSources : ["- Material local ainda não localizado para este tema específico."]),
    "",
    "> Regra de uso: este capítulo reescreve e organiza o conteúdo em linguagem própria. Não substitui a leitura da lei seca, do edital e das questões originais quando disponíveis."
  ].join("\n");
}

function buildThemeMarkdown(chapter) {
  const profile = groupProfiles[chapter.groupId];
  const questionLink = `../../${mdLink(chapter.questionPath)}`;
  const sourceLabel = chapter.sourceKind === "Conhecimentos Gerais" ? "Conhecimentos Gerais" : "Conhecimentos Específicos";
  const weightText = chapter.groupWeight === 1 ? "1 questão" : `${chapter.groupWeight} questões`;
  const quickRead = buildQuickRead(chapter);
  const deepContent = buildDeepContent(chapter);
  const schemeTables = buildSchemeTables(chapter);
  const emphasis = chapterEmphasis(chapter).slice(0, 4);

  return `# ${chapter.id} - ${humanTitle(chapter.title)}

> **Base do edital:** ${sourceLabel}; ${chapter.editalMapping}.  
> **Peso da disciplina:** ${weightText} na prova objetiva.  
> **Prioridade:** ${chapter.priority}.

## Por que cai

- **Frequência no edital:** a disciplina ${chapter.groupShortTitle} soma ${weightText}; este capítulo concentra ${chapter.editalMapping}.
- **Como a FGV costuma cobrar:** ${profile.fgv}
- **O que mais confunde candidatos:** ${profile.candidateConfusion}
- **Particularidade para Papiloscopista:** ${profile.application}

## Leitura rápida

${quickRead}

${deepContent}

## Tabelas e esquemas

${schemeTables}

## Pegadinhas da banca

${profile.traps.map((trap) => `- ${trap}`).join("\n")}
${emphasis.map((point) => `- Prioridade de atenção: ${point}`).join("\n")}
- Alternativa que usa termo técnico correto em contexto errado.
- Afirmação absoluta onde o edital exige análise de caso, fonte ou finalidade.

## Como resolver questões

${profile.solve.map((step, index) => `${index + 1}. ${step}`).join("\n")}
${profile.solve.length < 5 ? `${profile.solve.length + 1}. Se a questão parecer fora do material, marque como lacuna para revisão posterior e confira a fonte oficial ou o PDF local antes de alterar gabarito.` : ""}

## Checklist de revisão

- [ ] Li o item do edital correspondente: ${chapter.editalMapping}.
- [ ] Consigo explicar os microtópicos sem copiar definição pronta.
- [ ] Sei diferenciar este tema dos capítulos vizinhos da mesma disciplina.
- [ ] Tenho atenção às expressões absolutas e às exceções.
- [ ] Revisei pelo menos uma questão ou exemplo de aplicação.
- [ ] Registrei lacuna quando faltou prova anterior, gabarito oficial ou fonte atualizada.

## Questões relacionadas

- [Resolver questões deste tema](${questionLink})

## Referências

${referencesFor(chapter)}
`;
}

function buildEmptyQuestionsMarkdown(chapter) {
  return `# Questões - ${humanTitle(chapter.title)}

> Depois de clicar em **Checar resposta**, a alternativa fica salva neste navegador e entra no desempenho do tema.

**Itens neste banco:** 0 questões.

## Status

Banco em construção. Ainda não foi convertida uma questão local com enunciado e gabarito suficientemente conferidos para este tema.

## Como este arquivo será preenchido

- Usar apenas prova pública, simulado local ou lista local com fonte identificável.
- Preservar o gabarito oficial ou o gabarito do PDF local quando ele estiver claro.
- Separar questão FGV de questão de apoio.
- Não atribuir questão autoral à FGV.
- Comentar cada alternativa, sem justificativa genérica.

## Fontes em fila de extração

${[...new Set([...(chapter.groupLocalSources || []), ...(chapter.localSources || [])])].map((source) => `- \`${source}\``).join("\n") || "- Material local ainda não localizado para este tema específico."}

## Referências

- Edital PCPR n.º 01/2026, retificado em 31/07/2026, ${chapter.editalMapping}.
`;
}

function buildLeituraOficial() {
  const rows = getAllChapters().map((chapter, index) => (
    `| ${index + 1} | ${chapter.groupShortTitle} | [${chapter.title}](${mdLink(chapter.themePath)}) | ${chapter.editalMapping} | ${chapter.priority} | [Questões](${mdLink(chapter.questionPath)}) |`
  ));

  const groups = chapterGroups.map((group) => `| ${group.shortTitle} | ${group.weight} | ${group.chapters.length} | ${group.editalBlock} |`);

  return `# Leitura Oficial - Papiloscopista PCPR 2026

Este material tem uma regra simples: **o edital é a base do menu, da ordem de leitura e dos resumos**. Cada capítulo abaixo corresponde a um recorte do conteúdo programático do cargo de Papiloscopista Policial do Edital PCPR n.º 01/2026, retificado em 31/07/2026, banca FGV.

## Como estudar

1. Comece pelas disciplinas de maior peso: Português, Tecnologia, Ciências Forenses e Biologia.
2. Em seguida, avance pelos blocos aplicados ao cargo: Química, Física, Legislação, Penal e Processo Penal.
3. Consulte [Fontes de Questões](FONTES_DE_QUESTOES.md), [Validação por Provas](VALIDACAO_POR_PROVAS.md) e [Lacunas e Reforços](LACUNAS_E_REFORCOS.md) para entender de onde virão as questões do banco.
4. Use o banco de questões de cada tema depois da leitura, mesmo quando ele ainda estiver marcado como construção.
5. Quando a página indicar fonte oficial, confira lei seca ou dado estatístico no link antes de decorar número, prazo ou redação.
6. Registre erros por tema: o leitor salva desempenho no navegador e ajuda a enxergar onde revisar.

## Validação por provas

- [Fontes de Questões](FONTES_DE_QUESTOES.md): catálogo de cadernos oficiais FGV, provas semelhantes e PDFs locais.
- [Validação por Provas](VALIDACAO_POR_PROVAS.md): confronto entre as provas pesquisadas e os 61 temas do edital.
- [Lacunas e Reforços](LACUNAS_E_REFORCOS.md): ordem sugerida para ampliar conteúdo e montar o banco de questões.

## Peso por disciplina

| Disciplina | Questões | Capítulos no material | Base do edital |
|---|---:|---:|---|
${groups.join("\n")}

## Ordem de leitura

| Ordem | Disciplina | Tema | Edital | Prioridade | Questões |
|---:|---|---|---|---|---|
${rows.join("\n")}

## Regra de cobertura

- Nenhum tema do menu deve existir sem item de edital.
- Nenhum item de edital deve ficar fora do menu.
- Se uma prova, gabarito ou fonte oficial ainda não foi conferida, o texto deve assumir a lacuna explicitamente.
`;
}

function buildProvasIndex() {
  const rows = buildProvasRows().map((row) => (
    `| ${row.disciplina} | ${row.tema} | ${row.edital} | ${row.total} | ${row.status} | [Abrir](${mdLink(row.link)}) |`
  ));

  return `# Provas E Questões Por Tema

Este índice acompanha o manifesto do edital. A coluna **Total** mostra quantas questões já foram convertidas para o leitor interativo; temas com total zero estão prontos para receber questões assim que a fonte local e o gabarito forem conferidos.

| Disciplina | Tema | Edital | Total | Status | Abrir |
|---|---|---|---:|---|---|
${rows.join("\n")}

## Critério de conversão

- FGV com fonte e gabarito local claro tem prioridade.
- Questões de outras bancas entram apenas como apoio e devem ser identificadas.
- Nenhum gabarito será alterado para combinar com comentário.
- Quando houver imagem essencial, ela deve ser salva em \`assets/\` e citada no card.
`;
}

function buildMapaQuestoes() {
  const groupRows = chapterGroups.map((group) => {
    const converted = group.chapters.reduce((sum, chapter) => sum + (chapter.convertedQuestions || 0), 0);
    return `| ${group.shortTitle} | ${group.weight} | ${group.chapters.length} | ${converted} | ${group.editalBlock} |`;
  });

  const chapterRows = getAllChapters().map((chapter) => (
    `| ${chapter.id} | ${chapter.groupShortTitle} | ${chapter.title} | ${chapter.editalMapping} | ${chapter.priority} | ${chapter.convertedQuestions || 0} |`
  ));

  return `# Mapa De Questões

## Estado atual da análise

O mapa abaixo separa duas coisas que não devem ser misturadas:

- **Peso oficial do edital:** já está completo para Papiloscopista.
- **Incidência de provas convertidas:** ainda é parcial; neste momento há 6 questões comentadas no tema de hardware/armazenamento.
- **Validação por provas semelhantes:** já tem página própria para confrontar FGV Papiloscopista, FGV Perito/Polícia Civil e bancas próximas com os 61 temas.

Isso evita inventar estatística de prova. À medida que os PDFs locais e oficiais forem convertidos, os totais por tema e a distribuição de alternativas devem ser atualizados aqui.

- [Abrir fontes pesquisadas](FONTES_DE_QUESTOES.md)
- [Abrir validação por provas semelhantes](VALIDACAO_POR_PROVAS.md)
- [Abrir lacunas e reforços](LACUNAS_E_REFORCOS.md)

## Distribuição oficial por disciplina

| Disciplina | Questões no edital | Capítulos | Questões convertidas | Base |
|---|---:|---:|---:|---|
${groupRows.join("\n")}

## Distribuição de letras já convertidas

| Letra | Quantidade |
|---|---:|
| A | 0 |
| B | 1 |
| C | 4 |
| D | 1 |
| E | 0 |

## Temas mais importantes pela prova

1. **Português:** 25 questões. Prioridade de aprovação.
2. **Tecnologia:** 15 questões. Alto peso e relação direta com evidência digital.
3. **Ciências Forenses:** 10 questões. Núcleo técnico do cargo.
4. **Biologia:** 10 questões. Base de identificação humana, genética e cristas papilares.
5. **Demais específicas:** Química, Física, Legislação, Penal, Processo Penal, Constitucional, Administrativo e Direitos Humanos compõem margem de vantagem.

## Cobertura por tema

| ID | Disciplina | Tema | Edital | Prioridade | Questões convertidas |
|---:|---|---|---|---|---:|
${chapterRows.join("\n")}

## Pegadinhas recorrentes esperadas da FGV

- Trocar conceito por exemplo ou exemplo por conceito.
- Usar termo técnico correto em disciplina errada.
- Apresentar alternativa com literalidade de lei antiga ou incompleta.
- Em português, trocar o sentido do texto por reescrita elegante.
- Em tecnologia, confundir segurança, backup, autenticação, logs e evidência.
- Em forense, confundir vestígio, indício, evidência e prova.

## Pontos que ainda precisam de conversão de prova

- Português: questões FGV por interpretação, reescritura, pontuação, classes e crase.
- Ciências Forenses: criminalística, cadeia de custódia, papiloscopia, criminologia e vitimologia.
- Biologia, Física e Química: questões aplicadas ao cargo.
- Legislação institucional: questões após conferência da lei seca atualizada.

## Estratégia de prova

- Garanta Português e Tecnologia antes dos blocos curtos.
- Nas específicas, priorize identificação humana, cadeia de custódia, evidência digital, LGPD/LAI/sigilo e normas institucionais.
- Em lei recente, não responda por lembrança vaga: compare sujeito, verbo, competência, prazo e exceção.
- Marque para revisão as questões que dependem de número estatístico ou literalidade que você não tenha conferido.
`;
}

function buildIntensivao() {
  const high = getAllChapters().filter((chapter) => chapter.priority === "altíssima");
  const highRows = high.map((chapter) => `| ${chapter.groupShortTitle} | [${chapter.title}](${mdLink(chapter.themePath)}) | ${chapter.editalMapping} |`);

  return `# Intensivão

## Revisão de maior retorno

| Disciplina | Tema | Edital |
|---|---|---|
${highRows.join("\n")}

## Plano de 30 dias

1. Dias 1 a 8: Português completo, com foco em interpretação, coesão, sintaxe, pontuação, semântica e crase.
2. Dias 9 a 14: Tecnologia completa, fechando segurança da informação, crimes digitais, OSINT, LGPD e Marco Civil.
3. Dias 15 a 20: Ciências Forenses, Biologia e Papiloscopia aplicada.
4. Dias 21 a 24: Química e Física aplicadas à identificação humana.
5. Dias 25 a 28: Legislação estadual, Penal, Processo Penal, Constitucional e Administrativo.
6. Dias 29 e 30: revisão de erros, leitura de mapas e simulado.

## Véspera

- Releia os checklists dos temas de prioridade altíssima.
- Revise os próprios erros no banco de questões.
- Não troque fonte oficial por resumo desatualizado em legislação.
- Em prova, proteja tempo para Português e Tecnologia: juntos, eles somam 40 questões.
`;
}

function buildRegras() {
  return `# Regras Do Material

## Fonte-mãe

O Edital PCPR n.º 01/2026, retificado em 31/07/2026, para Papiloscopista Policial é a fonte principal deste projeto. O menu lateral, a ordem de estudo e cada capítulo devem corresponder a item real do edital.

## Estilo

- Escrever em linguagem própria, clara e prática.
- Priorizar aprovação: conceito, diferença, pegadinha e forma de resolver.
- Não copiar trechos longos de PDFs, apostilas ou livros.
- Não inventar questão, gabarito, estatística, jurisprudência ou atualização legislativa.
- Quando faltar fonte, escrever a lacuna de modo explícito.

## Questões

- Preservar o gabarito oficial ou local conferido.
- Identificar fonte, ano, prova e número quando disponível.
- Separar FGV de questão de apoio.
- Comentar a alternativa correta e cada alternativa errada.
- Não usar justificativa genérica como "está errada porque o gabarito é outro".

## Fontes oficiais

Para legislação, norma institucional, dados atuais do Paraná e conteúdo sujeito a mudança, conferir fonte oficial antes de tratar como atual.

## Bancos secundários

- Bancos como QConcursos, Gran Cursos, PCI Concursos e similares podem ser usados para localizar provas e conferir incidência, mas devem ser marcados como fonte secundária.
- Quando houver caderno oficial da banca ou do órgão, a fonte oficial prevalece sobre banco secundário.
- Conteúdo de comentários privados de bancos não deve ser copiado para este projeto.
- Quando a questão for adaptada para treino, ela deve ser identificada como questão autoral/inspirada no padrão, e não como reprodução oficial.

## Publicação

- Não versionar PDFs, livros, apostilas, cadernos completos ou gabaritos integrais.
- Manter \`.nojekyll\` para o GitHub Pages.
- Testar links, renderização Markdown e desempenho das questões antes de publicar.
`;
}

function buildTemplateTema() {
  return `# Número - Nome Do Tema

> **Base do edital:** disciplina e item.
> **Peso da disciplina:** número de questões.
> **Prioridade:** baixa, média, alta ou altíssima.

## Por que cai

- **Frequência nas provas:** informe peso oficial e incidência local quando houver.
- **Como a FGV costuma cobrar:** descreva comando, forma de alternativa e erro recorrente.
- **O que mais confunde candidatos:** registre confusões reais.

## Leitura rápida

- Resumo objetivo.
- Um item por ideia.
- Sem copiar trecho longo da fonte.

## Conteúdo essencial

Explique o conteúdo em linguagem própria, com foco no edital e no cargo.

## Tabelas e esquemas

| Conceito | Como reconhecer | Pegadinha |
|---|---|---|
| | | |

## Pegadinhas da banca

- Alternativas quase certas.
- Termos absolutos.
- Confusões recorrentes.

## Como resolver questões

1. Identifique o comando.
2. Classifique o tema.
3. Elimine a troca conceitual.
4. Confira exceção, prazo, sujeito ou finalidade.

## Checklist de revisão

- [ ] Li o item do edital.
- [ ] Sei explicar o conceito sem decorar frase.
- [ ] Resolvi questão relacionada.
- [ ] Marquei lacuna de fonte, se houver.

## Questões relacionadas

- Caminho esperado: \`../provas/caminho-do-tema.md\`.

## Referências

- Edital PCPR n.º 01/2026, retificado em 31/07/2026.
- Materiais locais usados.
- Fonte oficial, quando normativa ou estatística.
`;
}

function migratePilotQuestions(chapter) {
  const newQuestionPath = path.join(papiloRoot, chapter.questionPath);
  if (fs.existsSync(newQuestionPath)) {
    const current = fs.readFileSync(newQuestionPath, "utf8");
    if (current.includes("quiz-card") && current.includes("q-001-001")) {
      return current;
    }
  }

  const oldQuestionPath = path.join(papiloRoot, "provas", "001_hardware-perifericos-armazenamento.md");
  if (!fs.existsSync(oldQuestionPath)) return null;

  let content = fs.readFileSync(oldQuestionPath, "utf8");
  if (!content.includes("quiz-card")) return null;

  content = content.replace("# Questões - Hardware, Periféricos E Armazenamento", "# Questões - Hardware, Software, Periféricos E Armazenamento");
  content = content.replace("**Itens neste banco:** 6 questões.", "**Itens neste banco:** 6 questões.");
  content += "\n## Observação de cobertura\n\nEstas questões cobrem a primeira frente do tema. BIOS, UEFI, drivers, firmware e software ainda precisam receber novas questões convertidas de fonte local com gabarito conferido.\n";
  return content;
}

function writeCompatibilityFiles() {
  write(path.join(papiloRoot, "temas", "001_hardware-perifericos-armazenamento.md"), `# Tema movido

O tema piloto foi reorganizado dentro da disciplina **Tecnologia** para manter o menu igual ao edital.

- [Abrir novo tema](tecnologia/001_hardware-software-perifericos-armazenamento.md)
- [Abrir questões](../provas/tecnologia/001_hardware-software-perifericos-armazenamento.md)
`);

  write(path.join(papiloRoot, "provas", "001_hardware-perifericos-armazenamento.md"), `# Banco movido

O banco piloto foi reorganizado dentro da disciplina **Tecnologia**.

- [Abrir novo banco](tecnologia/001_hardware-software-perifericos-armazenamento.md)
- [Abrir tema](../temas/tecnologia/001_hardware-software-perifericos-armazenamento.md)
`);
}

function main() {
  write(path.join(papiloRoot, "_sidebar.md"), buildSidebarMarkdown());
  write(path.join(papiloRoot, "LEITURA_OFICIAL.md"), buildLeituraOficial());
  write(path.join(papiloRoot, "PROVAS.md"), buildProvasIndex());
  write(path.join(papiloRoot, "MAPA_DE_QUESTOES.md"), buildMapaQuestoes());
  write(path.join(papiloRoot, "INTENSIVAO.md"), buildIntensivao());
  write(path.join(papiloRoot, "REGRAS_DO_MATERIAL.md"), buildRegras());
  write(path.join(papiloRoot, "TEMPLATE_TEMA.md"), buildTemplateTema());

  for (const chapter of getAllChapters()) {
    write(path.join(papiloRoot, chapter.themePath), buildThemeMarkdown(chapter));
    const questionContent = chapter.id === "013" ? migratePilotQuestions(chapter) : null;
    write(path.join(papiloRoot, chapter.questionPath), questionContent || buildEmptyQuestionsMarkdown(chapter));
  }

  writeCompatibilityFiles();
}

main();
