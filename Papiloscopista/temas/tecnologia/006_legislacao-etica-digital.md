# 018 - Legislação e ética digital

## Leitura rápida

- O Marco Civil da Internet (Lei 12.965/2014) é a "Constituição" da internet brasileira: define direitos do usuário, deveres dos provedores e o princípio da neutralidade de rede.
- A LGPD (Lei 13.709/2018) regula o tratamento de dados pessoais, com princípios (finalidade, necessidade, transparência) e bases legais que autorizam esse tratamento — não proíbe usar dados pessoais, mas exige justificativa e cuidado.
- A tipificação de crimes informáticos no Brasil não é uma lei única: combina o Código Penal (com os tipos incluídos pela Lei 12.737/2012, conhecida como "Lei Carolina Dieckmann") e leis específicas posteriores, como a Lei 14.155/2021 (que agravou penas para fraudes eletrônicas e invasão de dispositivo).
- Neutralidade de rede não significa "internet gratuita" ou "sem controle algum" — significa que o provedor deve tratar todos os pacotes de dados da mesma forma, sem discriminar por conteúdo, origem, destino, serviço ou aplicação.

## Por que cai

Este item fecha o bloco de Tecnologia com o arcabouço legal que regula o uso da internet, a proteção de dados pessoais e os crimes praticados no ambiente digital — base indispensável para qualquer atuação policial que envolva evidência eletrônica, investigação digital ou tratamento de dados de terceiros.

| Prova (fonte oficial conferida) | Ano | O que caiu neste tema |
|---|---:|---|
| FGV PCMG Perito Criminal Área I, Tipo 1 | 2024 | Q24: princípio fundamental da neutralidade de rede segundo o Marco Civil da Internet. |
| FGV MPE-ES | 2026 | Q1: dever de sigilo e responsabilidade técnica do profissional de TI, independente de intenção de vantagem. |
| FGV AL-GO | 2026 | Q18: distinguir fundamentos da LGPD (Art. 2º) de hipóteses de exclusão de aplicação (Art. 4º). |
| FGV DPE-RO | 2025 | Q9: identificar quais itens são realmente fundamentos da LGPD. |
| FGV CNU | 2025 | Q10: governança da Política Nacional de Cibersegurança (PNCiber), centralizada no GSI. |

## Conteúdo completo orientado ao edital

### Marco Civil da Internet (Lei 12.965/2014)

Estabelece princípios, garantias, direitos e deveres para o uso da internet no Brasil. Pontos centrais:

- **Neutralidade de rede**: o provedor de conexão deve tratar todos os pacotes de dados de forma isonômica, sem discriminação por conteúdo, origem, destino, serviço, terminal ou aplicação — não pode, por exemplo, degradar deliberadamente o tráfego de um serviço concorrente ou priorizar pacotes de quem paga mais, fora das exceções técnicas e de emergência previstas na própria lei/regulamentação.
- **Proteção à privacidade e aos dados pessoais**: o Marco Civil já continha disposições sobre privacidade antes mesmo da LGPD, tratando a proteção de dados como um dos fundamentos do uso da internet no país.
- **Guarda de registros de conexão e acesso**: provedores são obrigados a manter registros de conexão (não o conteúdo das comunicações) por prazos determinados, para eventual uso em investigação, mediante ordem judicial.
- **Responsabilidade dos provedores por conteúdo de terceiros**: como regra geral, o provedor de aplicação só responde civilmente por conteúdo gerado por terceiros se, após ordem judicial específica, não tomar as providências para tornar indisponível o conteúdo apontado como infringente (com regras específicas e mais protetivas para casos de violação de intimidade, como divulgação não autorizada de imagens íntimas).

### LGPD - Lei Geral de Proteção de Dados (Lei 13.709/2018)

Regula o tratamento de dados pessoais por pessoas físicas e jurídicas, públicas e privadas, com o objetivo de proteger os direitos fundamentais de liberdade e privacidade.

**Princípios centrais** (não são um mero adorno — cada um orienta como o dado deve ser tratado):

| Princípio | O que exige |
|---|---|
| Finalidade | O tratamento do dado deve ter propósito específico, explícito e informado ao titular |
| Necessidade | Coletar apenas o dado estritamente necessário para a finalidade declarada |
| Transparência | O titular deve poder saber como, por quem e para que seu dado é tratado |
| Segurança | Medidas técnicas e administrativas para proteger o dado contra acesso não autorizado |
| Responsabilização (accountability) | Quem trata o dado deve poder demonstrar que cumpre a lei |

**Bases legais** (hipóteses que autorizam o tratamento de dados pessoais, sem exigir sempre o consentimento do titular): consentimento, cumprimento de obrigação legal, execução de política pública, estudo por órgão de pesquisa, execução de contrato, exercício regular de direitos em processo, proteção da vida, tutela da saúde, interesse legítimo do controlador, proteção de crédito — e, especificamente relevante para a atividade policial, o **tratamento para fins de investigação e repressão de infrações penais, realizado por órgão de segurança pública**, que segue regramento próprio dentro da lei.

**Dado pessoal sensível**: categoria com proteção reforçada — dados sobre origem racial/étnica, convicção religiosa, opinião política, saúde, vida sexual, dado genético ou biométrico quando vinculado a pessoa natural. Dados biométricos, centrais na atividade papiloscópica, entram nessa categoria — o que reforça a exigência de finalidade específica e segurança redobrada no seu tratamento.

**Fundamentos (Art. 2º) x hipóteses de exclusão de aplicação (Art. 4º)**: a FGV cobra insistentemente a troca entre esses dois artigos, que tratam de coisas diferentes:

| Art. 2º — Fundamentos (o que justifica a lei) | Art. 4º — Hipóteses de exclusão (quando a LGPD NÃO se aplica) |
|---|---|
| Respeito à privacidade | Tratamento para fins exclusivamente particulares |
| Autodeterminação informativa | Tratamento para fins jornalísticos, artísticos ou acadêmicos |
| Liberdade de expressão, informação, comunicação e opinião | Tratamento para fins de segurança pública, defesa nacional, segurança do Estado |
| Inviolabilidade da intimidade, honra e imagem | Tratamento para investigação e repressão de infrações penais |
| Desenvolvimento econômico, tecnológico e inovação | — |
| Livre iniciativa, livre concorrência e defesa do consumidor | — |
| Direitos humanos, livre desenvolvimento da personalidade, dignidade e cidadania | — |

Erro clássico: apresentar um item do Art. 4º (fins particulares, jornalísticos, segurança nacional, investigação penal) como se fosse um "fundamento" — são situações em que a lei simplesmente não incide, não valores que a justificam. Também é comum a banca inventar um "fundamento" que soa plausível mas não está na lista literal (como "direito ao anonimato de expressão", que inclusive contraria a vedação constitucional ao anonimato).

### Política Nacional de Cibersegurança (PNCiber)

Marco regulatório brasileiro que estrutura a proteção de ativos digitais e a resposta a incidentes cibernéticos em nível nacional. Centraliza a **governança no Gabinete de Segurança Institucional (GSI)** — órgão que já concentra funções de segurança da informação do governo federal — priorizando a proteção de **infraestruturas críticas** (energia, saúde, transporte, abastecimento de água, entre outras) e estabelecendo mecanismos de **coordenação público-privada** para prevenção, detecção e resposta a incidentes. Não subordina a política a comando militar exclusivo, não condiciona cada ação operacional à aprovação prévia do Legislativo, e não se limita à regulação de provedores de internet.

### Dever de sigilo e responsabilidade técnica do profissional de TI

A ética profissional em TI impõe deveres que **independem da intenção do agente**: copiar documentos estratégicos para dispositivo pessoal durante uma manutenção, mesmo sem intenção de obter vantagem, já configura violação do sigilo profissional e da responsabilidade técnica — a conduta em si é a violação, não é preciso comprovar dolo de proveito. Do mesmo modo, o dever de sigilo, em regra, **persiste após o desligamento** do profissional (não depende de cláusula contratual específica para existir), e a responsabilidade técnica é mais ampla do que garantir apenas a disponibilidade dos sistemas — abrange também falhas de configuração que resultem em acessos indevidos.

### Crimes informáticos: onde estão tipificados

Não existe um único "Código Penal Digital" no Brasil — a tipificação está distribuída:

| Norma | O que trouxe |
|---|---|
| Lei 12.737/2012 ("Lei Carolina Dieckmann") | Incluiu no Código Penal o crime de invasão de dispositivo informático (Art. 154-A), mediante violação indevida de mecanismo de segurança, com o fim de obter, adulterar ou destruir dados/informações |
| Lei 14.155/2021 | Agravou penas para invasão de dispositivo informático em determinadas circunstâncias e tipificou/agravou fraudes eletrônicas praticadas por meio de dispositivo, incluindo a chamada "fraude por dispositivo eletrônico ou informático" |
| Identificação criminal (Lei 12.037/2009) | Regula o uso de identificação criminal, incluindo dado biométrico, com relevância direta para o cargo de papiloscopista |
| Abuso de Autoridade (Lei 13.869/2019) | Tipifica condutas de abuso cometidas por agente público, algumas com dimensão digital (acesso indevido a sistema de informação, por exemplo) |

### Ética digital: princípios que orientam a conduta, não só a lei

Além da tipificação penal, a atuação com tecnologia envolve princípios éticos que orientam a conduta mesmo onde a lei não detalha cada situação: **uso proporcional e finalístico da tecnologia** (usar um recurso tecnológico apenas para o fim que justificou seu uso), **minimização de dados** (coletar e manter só o necessário), **transparência com o titular** (quando possível e não prejudicial à investigação) e **responsabilidade profissional** pelo uso de ferramentas de vigilância, biometria e bancos de dados — especialmente relevante para quem, como o papiloscopista, trabalha diretamente com dado biométrico sensível de identificação humana.

## Prioridades FGV dentro deste tema

| Prioridade | Por que é prioridade | Como treinar |
|---|---|---|
| Explicar o princípio da neutralidade de rede com precisão | Evidenciado na questão real PCMG Q24 | Memorize a formulação central: tratar todos os pacotes igualmente, sem discriminar por conteúdo, origem, destino, serviço ou aplicação |
| Diferenciar os princípios da LGPD (finalidade, necessidade, transparência, segurança, responsabilização) | Base para qualquer questão de tratamento de dados | Associe cada princípio a uma pergunta: para quê? o quanto é necessário? o titular sabe? está protegido? quem responde? |
| Localizar corretamente onde cada crime informático está tipificado | Evita confundir Lei 12.737/2012 com Lei 14.155/2021 | Associe: 12.737/2012 = invasão de dispositivo (Art. 154-A CP); 14.155/2021 = agravantes e fraude eletrônica |
| Reconhecer dado biométrico como dado pessoal sensível na LGPD | Relevância direta para o cargo de papiloscopista | Lembre que biometria exige finalidade específica e segurança redobrada |

## Diferenças que a banca costuma trocar

| Conceito A | Conceito B | Como a banca troca | Como não cair |
|---|---|---|---|
| Neutralidade de rede | Priorização paga de tráfego | Ambas envolvem "tratamento de pacotes de dados" | Neutralidade exige tratamento igual; priorização paga contraria o princípio, salvo exceções técnicas previstas |
| Marco Civil da Internet | LGPD | Ambos tratam de "internet" e "dados", mas com foco diferente | Marco Civil regula direitos/deveres gerais de uso da internet; LGPD regula especificamente o tratamento de dados pessoais |
| Lei 12.737/2012 (invasão de dispositivo) | Lei 14.155/2021 (fraude eletrônica/agravantes) | Ambas tratam de "crime digital" | 12.737 criou o tipo de invasão; 14.155 agravou penas e tratou fraude eletrônica especificamente |
| Dado pessoal comum | Dado pessoal sensível (inclui biometria) | Ambos são "dado pessoal" protegido pela LGPD | Dado sensível tem proteção reforçada e regras mais restritivas de tratamento |

## Como caiu na prova: questão comentada

**Fonte: FGV, PCMG Perito Criminal Área I, Tipo 1, 2024, questão 24 (gabarito oficial: B)**

> De acordo com o Marco Civil da Internet (Lei nº 12.965/2014), assinale a alternativa que indica o princípio fundamental que orienta a neutralidade da rede.
>
> (A) Garantir que os provedores de conexão priorizem serviços de maior demanda para melhorar a experiência do usuário. (B) Assegurar que os provedores de conexão tratem todos os pacotes de dados da mesma forma, sem discriminação por conteúdo, origem ou destino. (C) Permitir que os provedores bloqueiem ou restrinjam conteúdos considerados prejudiciais ou ilegais, sem necessidade de ordem judicial. (D) Priorizar o tráfego de dados relacionado a serviços essenciais, como saúde e segurança pública, em detrimento de outros. (E) Autorizar os provedores a ajustar velocidades de conexão com base nos planos contratados pelos usuários, mesmo que isso comprometa a neutralidade da rede.

1. **Lembre a formulação central do princípio**: tratamento isonômico de todos os pacotes, sem discriminação.
2. **Descarte A, C, D e E**: todas descrevem alguma forma de tratamento diferenciado ou discriminação de tráfego (priorizar por demanda, bloquear sem ordem judicial, priorizar por tipo de serviço, ajustar por plano contratado) — o oposto do que a neutralidade exige.
3. **B é o gabarito**: descreve exatamente o núcleo do princípio — tratamento igualitário de todos os pacotes, sem discriminação por conteúdo, origem ou destino.

**Fonte: FGV, MPE-ES, 2026, questão 1 (gabarito oficial: A)**

> Sobre legislação e ética profissional em TI.

1. **A violação do sigilo/responsabilidade técnica não depende de intenção de vantagem — a conduta em si já configura a falha.**
2. **A é o gabarito.**

**Fonte: FGV, AL-GO, 2026, questão 18 (gabarito oficial: E)**

> Fundamento da disciplina de proteção de dados pessoais (LGPD).

1. **"Respeito à privacidade" é fundamento do Art. 2º; as demais opções são hipóteses de exclusão do Art. 4º.**
2. **E é o gabarito.**

**Fonte: FGV, DPE-RO, 2025, questão 9 (gabarito oficial: C)**

> Quais itens são realmente fundamentos da LGPD (autodeterminação informativa, privacidade, anonimato de expressão)?

1. **Os dois primeiros são fundamentos reais; "anonimato de expressão" não consta da lista e contraria a vedação constitucional ao anonimato.**
2. **C (I e II) é o gabarito.**

**Fonte: FGV, CNU, 2025, questão 10 (gabarito oficial: D)**

> Governança da PNCiber.

1. **Centraliza no GSI, foco em infraestruturas críticas e coordenação público-privada.**
2. **D é o gabarito.**

## Pegadinhas da banca

- Descrever alguma forma de priorização ou discriminação de tráfego como se fosse compatível com a neutralidade de rede.
- Confundir Marco Civil (uso geral da internet) com LGPD (tratamento de dados pessoais especificamente).
- Trocar a lei que criou o tipo de invasão de dispositivo (12.737/2012) pela lei que tratou fraude eletrônica e agravantes (14.155/2021), ou vice-versa.
- Tratar dado biométrico como dado pessoal comum, ignorando sua classificação como dado sensível na LGPD.
- Achar que a LGPD proíbe totalmente o uso de dados pessoais por órgão de segurança pública, quando na verdade há base legal específica para investigação e repressão de infrações penais.
- Confundir fundamentos da LGPD (Art. 2º) com hipóteses de exclusão de aplicação (Art. 4º) — são artigos diferentes, com listas diferentes.
- Aceitar um "fundamento" que soa plausível mas não está na lista literal do Art. 2º (como "anonimato de expressão").
- Atribuir a governança da PNCiber a um órgão técnico (CGI.br) ou militar, quando o modelo brasileiro centraliza no GSI.
- Achar que a violação do dever de sigilo profissional exige comprovação de intenção de vantagem — a conduta em si já é a violação.

## Como resolver questões

1. Para neutralidade de rede, teste se a alternativa descreve tratamento igual ou alguma forma de discriminação/priorização — só a primeira está correta.
2. Para LGPD, identifique qual princípio (finalidade, necessidade, transparência, segurança, responsabilização) ou qual base legal está em jogo no cenário descrito.
3. Para crimes informáticos, associe o fato descrito à norma específica (invasão = 12.737/2012; fraude eletrônica agravada = 14.155/2021).
4. Para questões envolvendo biometria, lembre que se trata de dado pessoal sensível, com exigências reforçadas de finalidade e segurança.

### Complementos: exceção do Art. 21 do Marco Civil, tratamento de dados para segurança pública, e alterações da Lei 12.737/2012 (questões autorais fundamentadas em lei)

- **Exceção do Art. 21 do Marco Civil**: dispensa ordem judicial (basta notificação extrajudicial da vítima) apenas para conteúdo de **nudez ou atos sexuais privados divulgados sem consentimento** — regra geral do Art. 19 (exigência de ordem judicial) vale para os demais casos.
- **Tratamento de dados para segurança pública/investigação penal (Art. 4º, III e §1º, LGPD)**: fica fora do regime geral da LGPD, mas não fica sem controle — exige legislação específica proporcional e necessária, com a LGPD servindo de parâmetro subsidiário na ausência dessa norma própria.
- **Lei 12.737/2012**: além de criar o Art. 154-A (invasão de dispositivo) e o Art. 154-B (ação penal), também alterou o Art. 266 (interrupção/perturbação de serviço informático) e o Art. 298 (equiparação de documento eletrônico a documento particular para falsificação) — não criou o furto mediante fraude eletrônica (isso veio da Lei 14.155/2021) nem a ANPD ou o Marco Civil (leis distintas).

## Lacunas honestas

- Ainda não há questão real localizada sobre a Lei de Acesso à Informação neste levantamento — a teoria está coberta acima, falta a camada de prática com questão real conferida.

## Checklist de revisão

- [ ] Sei explicar o princípio da neutralidade de rede com precisão.
- [ ] Sei os cinco princípios centrais da LGPD e o que cada um exige.
- [ ] Sei diferenciar dado pessoal comum de dado pessoal sensível, e por que biometria entra nessa segunda categoria.
- [ ] Sei em qual lei está tipificada a invasão de dispositivo informático, e qual lei tratou fraude eletrônica e agravantes.
- [ ] Sei a base legal da LGPD que autoriza tratamento de dados por órgão de segurança pública para investigação criminal.
- [ ] Sei diferenciar os fundamentos da LGPD (Art. 2º) das hipóteses de exclusão de aplicação (Art. 4º).
- [ ] Sei que a governança da PNCiber é centralizada no GSI, com foco em infraestruturas críticas.
- [ ] Sei que o dever de sigilo profissional em TI independe de intenção de vantagem.
- [ ] Sei a exceção do Art. 21 do Marco Civil e o regime de tratamento de dados para segurança pública (Art. 4º LGPD).
- [ ] Sei exatamente quais alterações a Lei 12.737/2012 promoveu no Código Penal.
- [ ] Resolvi as cinco questões reais comentadas deste tema sem olhar o gabarito antes.
- [ ] Marquei a lacuna de fonte registrada acima.

## Questões relacionadas

- [Resolver questões deste tema](../../provas/tecnologia/006_legislacao-etica-digital.md)

## Referências

**Prova/FGV**

- FGV. PCMG 2024 - Perito Criminal Área I, Tipo 1. Caderno oficial, questão 24. Gabarito definitivo publicado pela FGV.
- FGV. MPE-ES, 2026. Questão 1 localizada em banco de questões (qconcursos), com gabarito oficial da banca.
- FGV. AL-GO, 2026. Questão 18 localizada em banco de questões (qconcursos), com gabarito oficial da banca.
- FGV. DPE-RO, 2025. Questão 9 localizada em banco de questões (qconcursos), com gabarito oficial da banca.
- FGV. CNU, 2025. Questão 10 localizada em banco de questões (qconcursos), com gabarito oficial da banca.
- Edital PCPR n.º 01/2026, retificado em 31/07/2026 - FGV.

**Material local**

- `Curso Alfacon/Tecnologias e sistema de informacao e seguranca cibernética.pdf`

**Atualização/fonte externa**

- [Lei Federal n.º 12.965/2014 - Marco Civil da Internet](https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2014/lei/l12965.htm)
- [Lei Federal n.º 13.709/2018 - LGPD](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm)
- [Lei Federal n.º 12.737/2012 - Delitos informáticos](https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/lei/l12737.htm)
- [Lei Federal n.º 14.155/2021 - fraudes eletrônicas e invasão de dispositivo](https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2021/lei/l14155.htm)
- [Portal FGV Conhecimento - concursos aplicados](https://conhecimento.fgv.br/concursos) - usado para localizar cadernos oficiais e gabaritos definitivos.

> Regra de uso: este capítulo reescreve e organiza o conteúdo em linguagem própria. A questão citada é real, com fonte, ano e gabarito oficial conferidos; onde não há questão real disponível, a lacuna está registrada explicitamente. Para literalidade exata de lei, sempre conferir a fonte oficial.
