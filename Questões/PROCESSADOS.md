# Controle de arquivos já processados

Este arquivo evita reprocessar PDFs já minerados quando novas questões forem
adicionadas à pasta `Questões/`. Cada linha indica o arquivo de origem, a
pasta, o destino (tema) onde as questões extraídas foram usadas, e o status.

Convenção de status:
- `usado` — questões relevantes já extraídas e conferidas, incorporadas ao banco.
- `revisado-sem-uso` — arquivo foi lido/extraído, mas nenhuma questão nova coube nos temas do edital (fora de escopo, duplicada, ou gabarito não verificável).
- `pendente` — ainda não processado.

## Rodada de qualidade de 11/08/2026 — reescrita das explicações do lote de importação em massa

As 446 questões importadas em massa em 09-10/08/2026 (Ciências Forenses, Tecnologia, Biologia, Português — ver seções abaixo) usaram um template genérico de explicação ("Não corresponde ao enunciado; descartada pelo gabarito oficial da banca" repetido em toda alternativa errada), a troca de rigor por volume combinada com o usuário na época. O usuário apontou, com razão, que isso não serve como material de estudo — precisa explicar *por que* cada alternativa errada está errada, não só "porque o gabarito diz que não é essa".

Iniciada rodada de reescrita, tema por tema: cada questão é lida de novo, a explicação de cada alternativa é escrita com o raciocínio real (não mais gabarito-como-autoridade), e questões que dependem de imagem/tabela não capturada na extração (ex.: "a figura mostra...", heredograma, árvore filogenética) ou que têm opções vazias/corrompidas por artefato de raspagem são **removidas** em vez de mantidas com pedaços faltando. Progresso registrado por tema conforme concluído.

- biologia/003 (embriologia): 6 questões revisadas, 1 removida (dependia de imagem não capturada) → 8 questões no total.
- biologia/002 (genética): 30 questões revisadas, 4 removidas (1 com opções vazias, 3 dependiam de figura/tabela) → 36 questões no total.
- biologia/001 (citologia): 25 questões revisadas, 5 removidas (dependiam de imagem/gráfico/esquema não capturado) → 31 questões no total. Biologia (temas 001-003) concluída nesta rodada.
- portugues/002 (organização textual): 1 questão revisada, 3 removidas (dependiam de texto-base não capturado) → 5 questões no total.
- portugues/004 (frase, sintaxe): 15 questões revisadas, 2 removidas (1 dependia de texto-base não capturado, 1 tinha texto-base incoerente com as opções) → 29 questões no total. Achado importante: a maioria das questões de sintaxe/gramática é autocontida (frases completas nas alternativas), diferente das de interpretação de texto.
- portugues/003 (modos discursivos/textos literários): 18 questões revisadas, nenhuma removida — todas autocontidas (poema/crônica/trecho citados na íntegra no próprio enunciado, ou classificação de frases dadas nas alternativas) → 25 questões no total (sem mudança de contagem).
- portugues/006 (semântica, vocabulário, ortografia e crase): 29 questões revisadas, 2 removidas (Q10 dependia de duas imagens comparadas — capa de gibi x cartaz de série — não capturadas; Q20 tinha enunciado sem nenhum texto-base, "sobre a linguagem utilizada no texto") → 35 questões no total. Também limpou contaminações de raspagem (blocos de "Provas: FGV..." e dumps de respostas numeradas coladas dentro de opções/enunciados).

## Pasta: cienciasforenses/

**Rodada de 09/08/2026 (importação em massa):** todos os arquivos desta pasta foram reprocessados de uma vez via `all_questions_dedup.json` (parser estruturado que já cobria a pasta inteira, banca/órgão/ano/gabarito extraídos automaticamente do texto). Cada questão candidata foi classificada por palavra-chave no tema mais aderente, deduplicada contra o conteúdo já existente e o gabarito extraído foi aceito como está (fonte + "gabarito oficial da banca" citados no card, sem re-derivação manual questão a questão — troca deliberada de rigor por volume, a pedido do usuário). Adicionadas 101 questões novas (qualquer banca, não só FGV): ciencias-forenses/001 +1, /002 +30, /003 +30, /004 +30, /005 +7, /007 +4. As tabelas de arquivo individuais abaixo refletem o estado *anterior* a essa rodada; ainda restam candidatas não usadas em cada arquivo (o parser extraiu 492 questões válidas do assunto, 390 ainda não entraram no banco) para uma futura rodada.

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

## Pasta: informatica/ e informatica2/

**Rodada de 09/08/2026 (importação em massa):** as duas pastas foram reprocessadas juntas via `all_questions_dedup.json` (mesmo pipeline usado em cienciasforenses nesta rodada). 644 questões válidas classificadas por palavra-chave nos temas 001-006 de tecnologia, deduplicadas contra o conteúdo já existente, gabarito extraído aceito como está. Adicionadas 151 questões novas (qualquer banca): tecnologia/001 +12, /002 +30, /003 +30, /004 +30, /005 +19, /006 +30 (30 é o teto por tema aplicado nesta rodada; sobraram candidatas em 002, 003, 004 e 006 para uma rodada futura). As tabelas abaixo refletem o estado *anterior* a essa rodada.

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

## Pasta: questoesbiologia/ e questoesportugues/

Pastas adicionadas em 09/08/2026 (17 PDFs de Biologia, 18 de Português). Processadas na mesma rodada de importação em massa, via parser estruturado (`all_questions2.json`, formato "Ano:/Banca:/Órgão:" + bloco "Respostas" do qconcursos). 288 questões válidas de Biologia e 345 de Português, classificadas por tema via palavra-chave, deduplicadas contra o conteúdo já existente, gabarito extraído aceito como está.

Adicionadas: biologia/001 +30, /002 +30, /003 +6 (66 no total); portugues/001 +30, /002 +4, /003 +18, /004 +17, /005 +30, /006 +29 (128 no total). Teto de 30 por tema aplicado nesta rodada — sobraram candidatas em quase todos os temas (especialmente português/001 com 148 válidas e 118 ainda não usadas, e português/005 com 78 válidas e 48 ainda não usadas) para uma rodada futura.

## Pasta: Alfacon/

Material de **revisão da AlfaCon** ("estilo FGV"), não são provas oficiais de banca.
Quando usadas, questões devem ser rotuladas como "Questão de revisão FGV (AlfaCon)" /
"Simulado de revisão FGV (AlfaCon)", nunca atribuídas a uma banca/órgão específico como
se fossem prova real.

**Rodada de 10/08/2026 — nasce o setor "Simulados" do site:** em vez de picotar estas questões por
tema (como as demais pastas), a AlfaCon foi usada para montar `Papiloscopista/simulados/` — simulados
completos, na ordem original do caderno, com placar único ao final (ver `SIMULADOS.md`). Escrito um
parser dedicado (formato "N. enunciado / a)-e) opções / Gabarito: X / Comentário do professor") para
os 5 arquivos com texto limpo e gabarito+comentário extraíveis: `exercicios-em-pdf_1` (Operação 01,
45 questões), `_2` (Operação 02, 49), `_7` (Operação 03, 49), `_9` (Operação 04 - Caderno de Revisão,
48) e `_15` (Operação 05, 47) = 238 questões, cada uma com o comentário completo do professor da
AlfaCon preservado no card.

| Arquivo | Status | Observação |
|---|---|---|
| AlfaCon--_1.pdf, _4.pdf, _6.pdf, _8.pdf, _12.pdf | avaliado, não usado | gabarito em tabela sem letra extraível em texto (provavelmente imagem) — não utilizável sem OCR |
| AlfaCon--_2.pdf, exercicios-em-pdf_1.pdf, _7.pdf, _9.pdf, _15.pdf | **usado** | Texto limpo (sem corrupção de acentuação) e gabarito+comentário extraíveis. Viraram os simulados Operação 01-05 em `Papiloscopista/simulados/`. |
| AlfaCon--_5.pdf, _13.pdf, _16.pdf, exercicios-em-pdf_2.pdf | avaliado, não usado | Mesmo formato "Simulado Progressivo"/"Caderno de Revisão" dos usados acima, mas com forte corrupção de acentuação na extração de texto (milhares de caracteres substituídos por "ǁ"/"ƴ" — problema de mapeamento de fonte no PDF de origem). Não usado para não publicar texto com erros de grafia; retomar apenas com OCR ou reextração via outra ferramenta. |
| AlfaCon--_14.pdf | avaliado, não usado | "Simulado Progressivo" sem nenhum gabarito/comentário extraível em texto (só o enunciado das questões) — resposta correta não verificável a partir deste arquivo. |
| AlfaCon--exercicios-em-pdf_1.pdf, _2.pdf | avaliado, não usado | mesmo perfil dos arquivos acima (revisão AlfaCon, não prova oficial) |

## Pasta: Simulados/ (adicionada em 09/08/2026)

Simulados autorais em .docx, com nota explícita de que as questões foram elaboradas pelo autor "no padrão/nível da banca FGV", fundamentadas em legislação/doutrina/jurisprudência real — **não são reprodução de provas aplicadas**. Rotuladas no site como "Questão autoral FGV/PCPR - fundamentada em [norma]", nunca como prova oficial de banca/órgão.

| Arquivo | Status | Destino | Observação |
|---|---|---|---|
| simulado_crimes_ciberneticos.docx | usado (parcial) | tecnologia/005 (8 questões), tecnologia/006 (3 questões) | 80 questões em 12 seções (crimes digitais, invasão 154-A, crimes em redes sociais, cadeia de custódia digital, rastreamento, inteligência cibernética, OSINT, Marco Civil, LGPD, Lei 12.737/2012, Lei 14.155/2021, sigilo funcional/ética). 11 aproveitadas; restante (~69 questões) ainda não avaliado a fundo — boas candidatas para reforçar ainda mais os temas 005/006 numa próxima rodada |
| simulado_direitos_humanos.docx | usado (parcial) | direitos-humanos/059 (6), 060 (6), 061 (3) | 50 questões em 7 seções. 15 aproveitadas; restante (~35 questões) ainda não avaliado a fundo — boas candidatas para reforçar ainda mais os 3 temas numa próxima rodada |
| simulado_legislacao_pc_pr_v2.docx | usado (parcial) | legislacao/040 (6), 041 (5), 042 (5), 043 (5), 044 (4), 045 (6), 046 (7) | 100 questões em 7 seções (Constituição do PR, LC 259/2023, Lei 14.735/2023, Lei 23.213/2026, Lei 21.894/2024, Lei 6.174/1970, abuso de autoridade/identificação/LGPD/LAI/sigilo). 38 aproveitadas; Q60 (classificação leve/média/grave do Código Disciplinar) descartada por contradizer conteúdo já verificado em 044/legislacao (o código não usa essa classificação); Q78/Q79 (reversão/reintegração) descartadas por duplicar autorais já existentes em 045. Restante (~60 questões) ainda não avaliado a fundo — boas candidatas para próxima rodada |

## Extração técnica (para reprocessar quando novos PDFs forem adicionados)

- Texto extraído via PyMuPDF (`fitz`) para
  `.../scratchpad/questoes-extraidas2/*.txt` (sessão local, temporário — refazer a extração quando retomar).
- Parser `parse.py` (na mesma pasta) usa o padrão `Ano:/Banca:/Órgão:` + bloco `Respostas` do qconcursos para estruturar `all_questions.json`, deduplicado em `all_questions_dedup.json`.
- Todo gabarito extraído foi/deve ser **rederivado de forma independente** (raciocínio próprio) antes de aceitar como correto — nunca copiar cegamente do "Respostas" do PDF.
