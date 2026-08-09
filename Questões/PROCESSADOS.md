# Controle de arquivos já processados

Este arquivo evita reprocessar PDFs já minerados quando novas questões forem
adicionadas à pasta `Questões/`. Cada linha indica o arquivo de origem, a
pasta, o destino (tema) onde as questões extraídas foram usadas, e o status.

Convenção de status:
- `usado` — questões relevantes já extraídas e conferidas, incorporadas ao banco.
- `revisado-sem-uso` — arquivo foi lido/extraído, mas nenhuma questão nova coube nos temas do edital (fora de escopo, duplicada, ou gabarito não verificável).
- `pendente` — ainda não processado.

## Pasta: cienciasforenses/

| Arquivo | Status | Destino | Observação |
|---|---|---|---|
| antropologia.txt | usado | ciencias-forenses/001, 002 | 20 questões FGV (PC-PI, PC-MG, EBSERH, SEAD-AP, PC-AM), 12 aproveitadas |
| antropologia2.txt | pendente | | ainda não lido |
| genetica.txt | pendente | | duplicata de conteúdo de gf1.txt (mesmo PDF) |
| genetica2.txt | pendente | | duplicata de conteúdo de gf2.txt |
| genetica3.txt | pendente | | duplicata de conteúdo de gf3.txt |
| gf1.txt | pendente | | idêntico a genetica.txt |
| gf2.txt | pendente | | idêntico a genetica2.txt |
| gf3.txt | pendente | | idêntico a genetica3.txt |
| tanato3.txt | usado | ciencias-forenses/004 | 6 questões aproveitadas (cronotanatognose, rigidez, comoriência, infanticídio) |
| tanato4.txt | usado | ciencias-forenses/004 | 1 questão aproveitada (mancha verde/putrefação bacteriana); restante (Q1,2,3,5,6,7,8,9 — anatomia de necropsia) ainda não avaliado a fundo |
| tanato5.txt, tanato6.txt, tanato7.txt, tanatof1.txt, tanatof2.txt, tf1.txt–tf5.txt | pendente | ciencias-forenses/004 | não lidos ainda; tf1-5 podem se sobrepor a tanato3-5/tanatof1-2 (checar antes de reprocessar) |
| asfixio2.txt–asfixio8.txt | usado (parcial) | ciencias-forenses/003 | aproveitadas: asfixio4 Q1/Q18, asfixio6 Q7/Q8. Restante (asfixio2,3,5,7,8) não lido a fundo — poucas FGV em alguns (outras bancas predominam) |
| asfixiologia.txt, asfixiologia1.txt | usado (parcial) | ciencias-forenses/003 | aproveitada: asfixiologia Q18 (máscara equimótica). asfixiologia1 não lido |
| sexolog2.txt | pendente | ciencias-forenses/003 | lido mas não usado ainda (candidatos: infanticídio docimasia, aborto legal, transtornos sexuais) |
| sexologia_forense.txt | usado (parcial) | ciencias-forenses/003 | aproveitadas: Q14, Q17, Q19 (himenologia, estado puerperal). Restante (Q1,2,7,8,10,11,13,16,18,20) ainda não avaliado a fundo — boas candidatas para próxima rodada |
| toxico1.txt | usado (parcial) | ciencias-forenses/004 | aproveitada: Q7 (digitálicos). Restante (Q1,2,3,5,14,16,17,19,20 — PMR, DL50, matrizes biológicas, CONTRAN, cianeto) ainda não avaliado a fundo |
| toxico2.txt | usado (parcial) | ciencias-forenses/004 | aproveitadas: Q17, Q18. Restante (Q1,2,3,5,7,8,10,11,12,15,19,20) ainda não avaliado a fundo |
| toxico3.txt | pendente | ciencias-forenses/004 | lido mas não usado (metais tóxicos, substância volátil, organofosforados) |
| infortunistica.txt, infortunistica2.txt | pendente | ciencias-forenses/003 (traumatologia/infortunística) | infortunistica2 tem 1 candidata FGV (Q4, simulação/metassimulação) ainda não usada; poucas FGV no geral |
| Questões_de_Provas_-_Questões_de_Concursos_*.pdf (3 arquivos genéricos) | usado (parcial) | ciencias-forenses/005, 006, 008 | 8 questões aproveitadas (ISO 17025, geologia forense, microscopia em arte, ordem de volatilidade, tipos de vestígio digital). Restante (2 questões históricas de medicina legal — Nina Rodrigues, Traité des Relatoires) ainda não usado |

## Pasta: informatica/

| Arquivo | Status | Destino | Observação |
|---|---|---|---|
| info1.pdf, info2.pdf, info10-12.pdf, info14-18.pdf, info20-22.pdf, info24.pdf, info27-28.pdf | usado (parcial) | tecnologia/001-003 | ~20 questões aproveitadas (SSD, hipervisor, atalhos Windows/Chrome/Firefox, Excel Macro, Outlook, cloud privada, navegação segura, raster/vetor). Muitas questões restantes são avançadas demais para o nível do edital (RBAC, OAuth2, ISO 27001/27002 detalhada, PTES pentest, Active Directory/Kerberos) — natural que fiquem de fora |
| info3-9.pdf, info13.pdf, info19.pdf, info23.pdf, info25-26.pdf, infoo.pdf, infoo2.pdf | pendente | tecnologia/001-003 | não lidos — ~332 questões FGV candidatas já extraídas em all_questions_dedup.json (subject=informatica), prontas para triagem se quiser aprofundar mais |
| Questões_de_Provas_*.pdf (2 arquivos genéricos) | usado (parcial) | tecnologia/002-003 | algumas aproveitadas via info1/info2 (mesmo conteúdo aparece duplicado entre esses e os arquivos genéricos) |

## Pasta: informatica2/

| Arquivo | Status | Destino | Observação |
|---|---|---|---|
| crimes.pdf | usado (parcial) | tecnologia/005 | aproveitada: Q7 (Lei Carolina Dieckmann). Restante (Q1, Q18 blockchain/penhora) não usado |
| crimes2.pdf | usado (parcial) | tecnologia/006 | aproveitadas: Q18 (LGPD fundamento privacidade), Q19 não usada (fundamentos LGPD, redundante com Q9 crimes8) |
| crimes3.pdf | usado | tecnologia/005 | Q7 aproveitada |
| crimes5.pdf | pendente | | ICP-Brasil, não usado |
| crimes6.pdf | usado (parcial) | tecnologia/006 | aproveitada: Q10 (PNCiber/GSI). Restante (Q12 IA generativa em tribunal, Q19 cloud/edge computing) não usado |
| crimes7.pdf, crimes8.pdf | usado (parcial) | tecnologia/006 | aproveitada: Q9 crimes8 (fundamentos LGPD). Restante (smart contracts, blockchain, jurimetria) fora do escopo do edital, não usado |
| crimes9.pdf, crimes10.pdf, crimes11.pdf | pendente | | não lidos |
| seguranca.pdf, seguranca3.pdf, segurancsa.pdf | pendente | tecnologia/004 | não lidos (seg5/seg6 já cobrem boa parte do tema) |
| seg5.pdf, seg6.pdf | usado (parcial) | tecnologia/004 | 8 questões aproveitadas (phishing, IDS/IPS, XSS, CSRF, vírus x worm, footprinting, engenharia social, malware). Restante (Q1, Q2, Q7-11, Q15, Q19 de seg5; Q6, Q8+ de seg6 — OWASP, STRIDE, spoofing, BAS, DDoS) ainda não usado, boas candidatas para próxima rodada |
| plataformas.pdf | pendente | tecnologia/002 ou 003 | |
| 2.pdf–8.pdf, Questões_de_Provas_*.pdf | pendente | tecnologia/001-003 | |

## Pasta: Alfacon/

Material de **revisão da AlfaCon** ("estilo FGV"), não são provas oficiais de banca.
Quando usadas, questões devem ser rotuladas como "Questão de revisão FGV (AlfaCon)",
nunca atribuídas a uma banca/órgão específico como se fossem prova real.

| Arquivo | Status | Observação |
|---|---|---|
| AlfaCon--_1.pdf, _4.pdf, _6.pdf, _8.pdf, _12.pdf | avaliado, não usado | gabarito em tabela sem letra extraível em texto (provavelmente imagem) — não utilizável sem OCR |
| AlfaCon--_2.pdf, _5.pdf, _7.pdf, _9.pdf, _13.pdf, _14.pdf, _15.pdf, _16.pdf | avaliado, não usado | Todos são material "PC PR - Missão 06 - Revisão FGV" (curso preparatório, questões escritas pela AlfaCon no "estilo FGV", não são provas oficiais). Têm "GABARITO: LETRA X" inline com explicação — tecnicamente utilizáveis, mas exigiriam rótulo obrigatório "Questão de revisão FGV (AlfaCon)" (nunca como prova oficial de banca/órgão). Conteúdo amostrado é majoritariamente Português, área já com cobertura extensa e verificada a partir de provas oficiais reais — valor marginal baixo frente ao esforço de limpar caracteres corrompidos na extração (ƴ, ǁ, Ƹ) e reverificar cada gabarito. Deixado de fora nesta rodada; retomar apenas se targetar disciplinas específicas com lacuna (ex.: RLM, Realidade PR) que este material cubra e as demais fontes não cubram. |
| AlfaCon--exercicios-em-pdf_1.pdf, _2.pdf | avaliado, não usado | mesmo perfil dos arquivos acima (revisão AlfaCon, não prova oficial) |

## Pasta: Simulados/ (adicionada em 09/08/2026)

Simulados autorais em .docx, com nota explícita de que as questões foram elaboradas pelo autor "no padrão/nível da banca FGV", fundamentadas em legislação/doutrina/jurisprudência real — **não são reprodução de provas aplicadas**. Rotuladas no site como "Questão autoral FGV/PCPR - fundamentada em [norma]", nunca como prova oficial de banca/órgão.

| Arquivo | Status | Destino | Observação |
|---|---|---|---|
| simulado_crimes_ciberneticos.docx | usado (parcial) | tecnologia/005 (8 questões), tecnologia/006 (3 questões) | 80 questões em 12 seções (crimes digitais, invasão 154-A, crimes em redes sociais, cadeia de custódia digital, rastreamento, inteligência cibernética, OSINT, Marco Civil, LGPD, Lei 12.737/2012, Lei 14.155/2021, sigilo funcional/ética). 11 aproveitadas; restante (~69 questões) ainda não avaliado a fundo — boas candidatas para reforçar ainda mais os temas 005/006 numa próxima rodada |
| simulado_direitos_humanos.docx | usado (parcial) | direitos-humanos/059 (6), 060 (6), 061 (3) | 50 questões em 7 seções. 15 aproveitadas; restante (~35 questões) ainda não avaliado a fundo — boas candidatas para reforçar ainda mais os 3 temas numa próxima rodada |
| simulado_legislacao_pc_pr_v2.docx | pendente | legislacao/040-046 | ~80 questões em 7 seções (Constituição do PR, LC 259/2023, Lei 14.735/2023, Lei 23.213/2026, Lei 21.894/2024, Lei 6.174/1970, legislação institucional/policial aplicada) — mapeiam diretamente aos temas 040-046 já existentes, nenhum tema novo necessário |

## Extração técnica (para reprocessar quando novos PDFs forem adicionados)

- Texto extraído via PyMuPDF (`fitz`) para
  `.../scratchpad/questoes-extraidas2/*.txt` (sessão local, temporário — refazer a extração quando retomar).
- Parser `parse.py` (na mesma pasta) usa o padrão `Ano:/Banca:/Órgão:` + bloco `Respostas` do qconcursos para estruturar `all_questions.json`, deduplicado em `all_questions_dedup.json`.
- Todo gabarito extraído foi/deve ser **rederivado de forma independente** (raciocínio próprio) antes de aceitar como correto — nunca copiar cegamente do "Respostas" do PDF.
