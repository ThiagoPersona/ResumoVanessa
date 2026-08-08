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
| info1.pdf–info28.pdf, infoo.pdf, infoo2.pdf | pendente | tecnologia/001-006 | |
| Questões_de_Provas_*.pdf (2 arquivos genéricos) | pendente | tecnologia/001-006 | |

## Pasta: informatica2/

| Arquivo | Status | Destino | Observação |
|---|---|---|---|
| crimes.pdf, crimes2.pdf–crimes11.pdf | pendente | tecnologia/005 (crimes digitais) | |
| seguranca.pdf, seguranca3.pdf, segurancsa.pdf, seg5.pdf, seg6.pdf | pendente | tecnologia/004 (segurança) | |
| plataformas.pdf | pendente | tecnologia/002 ou 003 | |
| 2.pdf–8.pdf, Questões_de_Provas_*.pdf | pendente | tecnologia/001-006 | |

## Pasta: Alfacon/

Material de **revisão da AlfaCon** ("estilo FGV"), não são provas oficiais de banca.
Quando usadas, questões devem ser rotuladas como "Questão de revisão FGV (AlfaCon)",
nunca atribuídas a uma banca/órgão específico como se fossem prova real.

| Arquivo | Status | Observação |
|---|---|---|
| AlfaCon--_1.pdf, _4.pdf, _6.pdf, _8.pdf, _12.pdf | pendente | gabarito em tabela sem letra extraível em texto (provavelmente imagem) — não utilizável sem OCR |
| AlfaCon--_2.pdf, _5.pdf, _7.pdf, _9.pdf, _13.pdf, _14.pdf, _15.pdf, _16.pdf | pendente | têm "GABARITO: LETRA X" inline com explicação — utilizáveis, mas exigem checar se a questão já não veio de FGV real (recorte de prova oficial) sem repetir |
| AlfaCon--exercicios-em-pdf_1.pdf, _2.pdf | pendente | têm gabarito inline, utilizáveis |

## Extração técnica (para reprocessar quando novos PDFs forem adicionados)

- Texto extraído via PyMuPDF (`fitz`) para
  `.../scratchpad/questoes-extraidas2/*.txt` (sessão local, temporário — refazer a extração quando retomar).
- Parser `parse.py` (na mesma pasta) usa o padrão `Ano:/Banca:/Órgão:` + bloco `Respostas` do qconcursos para estruturar `all_questions.json`, deduplicado em `all_questions_dedup.json`.
- Todo gabarito extraído foi/deve ser **rederivado de forma independente** (raciocínio próprio) antes de aceitar como correto — nunca copiar cegamente do "Respostas" do PDF.
