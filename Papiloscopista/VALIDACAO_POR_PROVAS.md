# Validação Por Provas Semelhantes

> Objetivo: conferir se os 61 temas do material realmente preparam para o padrão FGV e para provas próximas de Papiloscopista/Polícia Científica. Esta página não substitui o banco de questões; ela orienta quais questões devem entrar primeiro.

## Veredito geral

O material atual cobre o edital inteiro em estrutura e já tem boa base para resolver grande parte das questões por tema. A validação, porém, mostra que a próxima etapa não deve ser “mais resumo genérico”: deve ser **questão comentada por padrão de cobrança**.

| Resultado | Interpretação |
|---|---|
| Forte | Português, informática operacional, Penal, Processo Penal, Criminalística básica, Biologia forense, Física básica aplicada e Química básica aparecem no material e conversam diretamente com provas FGV já localizadas. |
| Boa, com reforço | Papiloscopia específica, Medicina Legal, Química forense, Física com cálculo, Biologia aplicada à identificação e crimes digitais precisam de mais questões comentadas para fixação. |
| Parcial | Legislação estadual/institucional, Realidade do Paraná e normas recentes da PCPR quase não aparecem em provas antigas semelhantes; aqui o edital e a lei seca mandam mais do que prova anterior. |
| Lacuna operacional | O banco interativo ainda tem poucas questões convertidas. A validação existe, mas a etapa seguinte deve alimentar os arquivos em `provas/` por tema. |

## Prova-matriz: FGV SEAD/AP 2022 Papiloscopista

Fonte: [caderno oficial Tipo 1](https://conhecimento.fgv.br/sites/default/files/concursos/papiloscopistacnsm016_tipo_1.pdf) e [gabarito definitivo](https://conhecimento.fgv.br/sites/default/files/concursos/seadapperitos2022_gabarito_definitivo_2023-03-10.pdf).

| Bloco da prova | Questões | Padrão cobrado | Temas do nosso menu | Cobertura |
|---|---:|---|---|---|
| Língua Portuguesa | 1-10 | Valor de preposição, polissemia, contradição lógica, sentido lexical, sequência narrativa, estrutura de narrativa, reescrita, argumentação, interrogação indireta e voz passiva pronominal | [001](temas/portugues/001_interpretacao-compreensao-texto.md), [003](temas/portugues/003_modos-discursivos-tipos-textuais-literarios.md), [004](temas/portugues/004_frase-sintaxe-discurso-pontuacao.md), [005](temas/portugues/005_morfologia-classes-palavras.md), [006](temas/portugues/006_semantica-vocabulario-ortografia-crase.md) | Forte |
| Informática | 11-15 | Registro do Windows, atalho do Chrome, busca avançada no Word, intervalo em planilha e fórmulas/rastreamento de precedentes | [013](temas/tecnologia/001_hardware-software-perifericos-armazenamento.md), [014](temas/tecnologia/002_sistemas-operacionais-aplicativos-dispositivos-moveis.md), [015](temas/tecnologia/003_internet-redes-nuvem-web-bancos-apis.md) | Boa, com reforço em suíte de escritório |
| Direito Penal e Processo Penal | 16-24 | Roubo, arrependimento posterior, atipicidade, escusa penal, confissão no inquérito, instauração de inquérito, busca e apreensão, notícia-crime, corpo de delito e perícias | [047](temas/penal/001_principios-teoria-crime-penas.md), [048](temas/penal/002_crimes-pessoa-patrimonio-dignidade-fe-publica-administracao.md), [050](temas/processo-penal/001_principios-inquerito-acao-direitos-investigado.md), [051](temas/processo-penal/002_provas-cadeia-custodia-busca-reconhecimento.md) | Forte |
| Provas, perícia e Medicina Legal | 25-30 | Indício, valoração da prova, corpo de delito, perícias em geral, exame complementar e cronotanatognose | [019](temas/ciencias-forenses/001_medicina-legal-identificacao-papiloscopia.md), [022](temas/ciencias-forenses/004_tanatologia-necropsia-toxicologia-psicopatologia.md), [023](temas/ciencias-forenses/005_criminalistica-local-crime-cadeia-custodia.md), [051](temas/processo-penal/002_provas-cadeia-custodia-busca-reconhecimento.md) | Boa, reforçar com questões |
| Biologia | 31-40 | Luminol e grupo funcional, alteração cromossômica, DNA forense, membranas fetais, impressão digital latente, tipagem sanguínea, células epiteliais, retículo endoplasmático, investigação de paternidade e hemofilia | [027](temas/biologia/001_citologia.md), [028](temas/biologia/002_genetica.md), [029](temas/biologia/003_embriologia-cristas-papilares.md), [030](temas/biologia/004_biologia-identificacao-humana-biometria.md), [039](temas/quimica/005_quimica-identificacao-reagentes-fluorescencia.md) | Forte, mas exige questões aplicadas |
| Física | 41-50 | Óptica geométrica, reflexão/refração, lentes, sistema afocal, circuito elétrico, interferência e relação entre frequência, energia e velocidade | [031](temas/fisica/001_optica-formacao-imagens.md), [032](temas/fisica/002_uv-fluorescencia-ondas-eletromagnetismo.md), [033](temas/fisica/003_eletricidade-circuitos-simples.md), [034](temas/fisica/004_fisica-captura-imagens-biometria-equipamentos.md) | Boa, reforçar cálculo |
| Química | 51-60 | Química forense, função orgânica, eletrólise, equilíbrio, radioisótopo, estequiometria, cinética, ppm, entalpia, composição elementar e ponto de ebulição | [035](temas/quimica/001_estrutura-materia-tabela-periodica-ligacoes.md), [036](temas/quimica/002_misturas-solucoes-separacao-concentracao.md), [037](temas/quimica/003_reacoes-balanceamento-velocidade-equilibrio.md), [038](temas/quimica/004_funcoes-quimicas-organica.md), [039](temas/quimica/005_quimica-identificacao-reagentes-fluorescencia.md) | Forte em teoria, precisa bateria de cálculo |
| Discursiva | 1 | Anemia falciforme, mutação pontual, proteína e aminoácidos essenciais | [027](temas/biologia/001_citologia.md), [028](temas/biologia/002_genetica.md) | Reforço útil para explicação aberta |

### O que essa prova ensina sobre a FGV

- A FGV cobra conceito aplicado em enunciado curto e com alternativa muito próxima.
- Português não é só gramática: exige valor semântico, efeito textual e reescrita.
- Informática mistura operação real de sistema, navegador, editor de texto e planilha.
- Em Direito, o padrão é caso concreto pequeno com instituto penal/processual.
- Em ciência, a banca aceita cálculo, tabela, fenômeno físico/químico e aplicação forense.
- Papiloscopia não pode ficar isolada: aparece conectada a biologia, química, fotografia, perícia, corpo de delito e identificação humana.

## Validação por disciplina do edital PCPR

| Disciplina | Provas que mais validam | Nosso material resolve? | Reforço necessário antes do banco |
|---|---|---|---|
| Português | SEAD/AP Papiloscopista, PCAM, PCMG, PCRJ, PCRN | Forte | Criar série FGV com 40+ questões de interpretação, reescrita, pontuação, semântica e classes |
| RLM | PCMG, PCRN, PCAM e provas FGV administrativas | Boa | Separar questões por lógica, porcentagem, gráficos, contagem e probabilidade |
| Realidade do Paraná | Edital PCPR e fontes oficiais do PR | Parcial por prova anterior | Criar questões autorais baseadas em IBGE, IPARDES e Governo do Paraná; prova semelhante não substitui atualização local |
| Tecnologia | SEAD/AP, PCPI Informática Forense, PCAM Processamento de Dados, PDFs locais | Forte | Ampliar suíte de escritório, redes, nuvem, segurança, evidência digital, OSINT, LGPD e Marco Civil |
| Ciências Forenses | SEAD/AP, PCMG Perito, PCRJ Perito, PCAM Peritos, PF/Papiloscopista | Boa | Mais papiloscopia específica, cadeia de custódia, vestígio/evidência, documentoscopia, tanatologia e medicina legal |
| Biologia | SEAD/AP, PCAM Biologia e PDFs locais | Forte | Converter questões de genética, DNA, tipagem sanguínea, células e cristas papilares |
| Física | SEAD/AP e PCAM Física | Boa | Criar treino de cálculo simples em óptica, ondas, eletricidade e captura de imagem |
| Química | SEAD/AP, PCAM Química e PCRJ Perito Química | Forte | Criar treino de funções orgânicas, soluções, equilíbrio, cinética e reagentes de impressão latente |
| Legislação estadual/institucional | Edital PCPR, Constituição do PR e legislação atual | Parcial por histórico | Fazer questões autorais/literalidade: LC 259/2023, Lei 23.213/2026, Lei 21.894/2024, Lei 14.735/2023 e regime jurídico |
| Penal | SEAD/AP, PCAM Investigador, PCMG Investigador, PCRJ, PCRN | Forte | Casos curtos sobre parte geral, crimes contra patrimônio, pessoa, administração e leis especiais |
| Processo Penal | SEAD/AP, PCAM, PCMG, PCRJ, PCRN | Forte | Cadeia de custódia, inquérito, busca, reconhecimento, prisões e prova pericial |
| Constitucional | PCMG Investigador, PCAM, PCRJ, PCRN | Boa | Direitos fundamentais, art. 144, remédios constitucionais e segurança pública |
| Administrativo | PCAM Investigador, PCMG, PCRN e provas FGV administrativas | Boa | Atos, poderes, responsabilidade, improbidade, licitações e agentes públicos |
| Direitos Humanos | PCMG/PCRJ/PCRN e provas policiais recentes | Boa | Uso da força, grupos vulneráveis, sistema internacional/interamericano, pessoa presa e Agenda 2030 |

## Comparação FGV por prova

| Prova | O que mais aproveita | Impacto no material |
|---|---|---|
| FGV SEAD/AP 2022 Papiloscopista | Mesma função, banca FGV, bloco científico e jurídico | Deve ser a primeira prova a virar banco comentado |
| FGV PCPI 2025 Perito Informática Forense | Informática forense, segurança e tecnologia policial | Reforça tecnologia, crimes digitais e evidência eletrônica |
| FGV PCMG 2024 Perito Criminal | Prova policial/pericial recente, com padrão FGV atual | Ajuda a calibrar nível de criminalística e ciências forenses |
| FGV PCAM 2021 Peritos | Cadernos separados de Biologia, Química, Física e Processamento de Dados | Excelente para preencher questões técnicas por disciplina |
| FGV PCRJ 2021 Perito Criminal | Perícia e matérias jurídicas em prova policial | Apoio para criminalística, química/física e Direito |
| FGV PCRJ/PCMG/PCRN Investigador/Inspetor | Direito, Português, Administrativo, Constitucional e DH | Útil para blocos jurídicos e gerais que não dependem de papiloscopia |

## Comparação com bancas semelhantes

| Banca/fonte | O que confirma | Cuidado |
|---|---|---|
| PF/Cebraspe Papiloscopista | Papiloscopia, identificação humana, perícia e Direito em cargo federal análogo | Estilo certo/errado é diferente da FGV; usar para conteúdo, não para simular formato |
| AOCP PCGO/PCPA Papiloscopista | Cargo muito parecido, com foco em identificação e rotina policial | Conferir gabarito oficial; se usar banco secundário, marcar origem |
| IBFC PC/RJ e Polícia Científica | Conteúdo pericial e papiloscopia em banca alternativa | Estilo de alternativa difere; serve para lacuna técnica |
| PDFs locais `Questões FGV/` | Treino pronto por informática, criminalística, criminologia e biologia | Filtrar aderência ao edital e conferir gabarito antes de converter |

## Temas que já estão bem alinhados

- [Português 001](temas/portugues/001_interpretacao-compreensao-texto.md), [003](temas/portugues/003_modos-discursivos-tipos-textuais-literarios.md), [004](temas/portugues/004_frase-sintaxe-discurso-pontuacao.md) e [006](temas/portugues/006_semantica-vocabulario-ortografia-crase.md).
- [Tecnologia 014](temas/tecnologia/002_sistemas-operacionais-aplicativos-dispositivos-moveis.md), [015](temas/tecnologia/003_internet-redes-nuvem-web-bancos-apis.md), [016](temas/tecnologia/004_seguranca-informacao-malware-phishing-backup.md), [017](temas/tecnologia/005_crimes-digitais-evidencias-osint.md).
- [Ciências Forenses 019](temas/ciencias-forenses/001_medicina-legal-identificacao-papiloscopia.md), [022](temas/ciencias-forenses/004_tanatologia-necropsia-toxicologia-psicopatologia.md), [023](temas/ciencias-forenses/005_criminalistica-local-crime-cadeia-custodia.md).
- [Biologia 027](temas/biologia/001_citologia.md), [028](temas/biologia/002_genetica.md), [030](temas/biologia/004_biologia-identificacao-humana-biometria.md).
- [Física 031](temas/fisica/001_optica-formacao-imagens.md), [032](temas/fisica/002_uv-fluorescencia-ondas-eletromagnetismo.md), [033](temas/fisica/003_eletricidade-circuitos-simples.md).
- [Química 036](temas/quimica/002_misturas-solucoes-separacao-concentracao.md), [037](temas/quimica/003_reacoes-balanceamento-velocidade-equilibrio.md), [038](temas/quimica/004_funcoes-quimicas-organica.md), [039](temas/quimica/005_quimica-identificacao-reagentes-fluorescencia.md).
- [Penal 047](temas/penal/001_principios-teoria-crime-penas.md), [048](temas/penal/002_crimes-pessoa-patrimonio-dignidade-fe-publica-administracao.md), [Processo Penal 050](temas/processo-penal/001_principios-inquerito-acao-direitos-investigado.md), [051](temas/processo-penal/002_provas-cadeia-custodia-busca-reconhecimento.md).

## Pontos que a validação mandou reforçar

1. **Papiloscopia aplicada:** princípios, tipos de impressão, coleta, revelação, confronto, AFIS, limitações, cadeia de custódia e valor probatório.
2. **Questões de cálculo científico:** Física e Química precisam de questões guiadas, com raciocínio passo a passo.
3. **Biologia forense:** DNA, herança, tipagem sanguínea e citologia devem aparecer com situação-problema.
4. **Informática prática:** Windows, navegador, Word/LibreOffice, Excel/Calc, redes, nuvem, segurança e crimes digitais.
5. **Legislação PCPR:** por ser nova/local, deve ser estudada por lei seca e questão autoral literal.
6. **Realidade do Paraná:** precisa de atualização oficial e questões autorais; provas de outros Estados não validam esse bloco.

## Próximo movimento

A ordem recomendada para montar o banco é:

1. Converter SEAD/AP Papiloscopista 2022 por tema.
2. Alimentar Tecnologia com PCPI 2025, PCAM Processamento de Dados e PDFs locais.
3. Alimentar Biologia, Física e Química com SEAD/AP e PCAM/PCRJ.
4. Alimentar Direito com SEAD/AP, PCAM, PCMG, PCRJ e PCRN.
5. Alimentar Papiloscopia/Criminalística com PF/Cebraspe, AOCP/IBFC e PDFs locais, sempre marcando fonte.
6. Criar questões autorais para Legislação PCPR e Realidade do Paraná.

