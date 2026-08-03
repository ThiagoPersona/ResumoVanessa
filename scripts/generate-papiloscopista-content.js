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
  const itemRows = chapter.editalItems.map((item) => `| ${item} | ${itemAction(item, chapter.groupId)} |`);
  const specificNotes = topicSpecificNotes(chapter);
  const questionLink = `../../${mdLink(chapter.questionPath)}`;
  const sourceLabel = chapter.sourceKind === "Conhecimentos Gerais" ? "Conhecimentos Gerais" : "Conhecimentos Específicos";
  const weightText = chapter.groupWeight === 1 ? "1 questão" : `${chapter.groupWeight} questões`;

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

${chapter.editalItems.map((item) => `- ${item}`).join("\n")}
- Leia este tema procurando palavras de comando, exceções, classificações e aplicações práticas ao cargo.
- Quando houver dado legal, normativo ou estatístico, confira a fonte oficial atual antes de gravar número, prazo ou redação.

## Conteúdo essencial

Este capítulo existe para cobrir, sem desvio, o recorte do edital em **${chapter.editalMapping}**. O estudo deve começar pelo vocabulário central, avançar para diferenças cobradas em alternativa e terminar com resolução de questão.

${specificNotes.map((note) => `- ${note}`).join("\n")}
${specificNotes.length ? "\n" : ""}- O primeiro filtro é conceitual: saiba dizer o que é, para que serve, quando se aplica e qual erro comum a banca pode apresentar.
- O segundo filtro é operacional: transforme o conceito em passo de prova, procedimento, classificação, cálculo, garantia ou consequência jurídica.
- O terceiro filtro é de exceção: marque termos absolutos e veja se o edital ou a fonte oficial admite restrição.

### Microtópicos do edital

${chapter.editalItems.map((item) => `- **${item}** ${itemAction(item, chapter.groupId)}`).join("\n")}

## Tabelas e esquemas

| Ponto do edital | Como revisar |
|---|---|
${itemRows.join("\n")}

| Filtro de prova | Pergunta mental |
|---|---|
| Conceito | Sei definir com minhas palavras, sem depender de frase decorada? |
| Finalidade | Sei explicar para que serve e em qual situação aparece? |
| Diferença | Sei separar de institutos parecidos? |
| Exceção | Há prazo, requisito, competência, limite ou hipótese especial? |
| Aplicação | Consigo reconhecer o tema em caso curto da FGV? |

## Pegadinhas da banca

${profile.traps.map((trap) => `- ${trap}`).join("\n")}
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

- Edital PCPR n.º 01/2026, ${chapter.editalMapping}.
`;
}

function buildLeituraOficial() {
  const rows = getAllChapters().map((chapter, index) => (
    `| ${index + 1} | ${chapter.groupShortTitle} | [${chapter.title}](${mdLink(chapter.themePath)}) | ${chapter.editalMapping} | ${chapter.priority} | [Questões](${mdLink(chapter.questionPath)}) |`
  ));

  const groups = chapterGroups.map((group) => `| ${group.shortTitle} | ${group.weight} | ${group.chapters.length} | ${group.editalBlock} |`);

  return `# Leitura Oficial - Papiloscopista PCPR 2026

Este material tem uma regra simples: **o edital é a base do menu, da ordem de leitura e dos resumos**. Cada capítulo abaixo corresponde a um recorte do conteúdo programático do cargo de Papiloscopista Policial do Edital PCPR n.º 01/2026, banca FGV.

## Como estudar

1. Comece pelas disciplinas de maior peso: Português, Tecnologia, Ciências Forenses e Biologia.
2. Em seguida, avance pelos blocos aplicados ao cargo: Química, Física, Legislação, Penal e Processo Penal.
3. Use o banco de questões de cada tema depois da leitura, mesmo quando ele ainda estiver marcado como construção.
4. Quando a página indicar fonte oficial, confira lei seca ou dado estatístico no link antes de decorar número, prazo ou redação.
5. Registre erros por tema: o leitor salva desempenho no navegador e ajuda a enxergar onde revisar.

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

Isso evita inventar estatística de prova. À medida que os PDFs locais forem convertidos, os totais por tema e a distribuição de alternativas devem ser atualizados aqui.

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

O Edital PCPR n.º 01/2026 para Papiloscopista Policial é a fonte principal deste projeto. O menu lateral, a ordem de estudo e cada capítulo devem corresponder a item real do edital.

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

- Edital PCPR n.º 01/2026.
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
