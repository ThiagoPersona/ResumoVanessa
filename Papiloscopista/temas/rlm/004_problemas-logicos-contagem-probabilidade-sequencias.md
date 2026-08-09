# 010 - Problemas lógicos, contagem, probabilidade e sequências

## Leitura rápida

- Contagem, probabilidade e sequências compartilham uma mesma exigência: organizar o problema em etapas antes de calcular, nunca "chutar" a operação pela intuição.
- O erro mais caro em contagem é confundir situações em que a **ordem importa** (arranjo) com situações em que **não importa** (combinação) — a mesma pergunta muda de fórmula conforme esse detalhe.
- Em probabilidade, o erro mais caro é esquecer que, **sem reposição**, o total de casos possíveis diminui a cada evento — e que probabilidade de eventos consecutivos multiplica (não soma).
- Nas provas reais localizadas, a FGV aplicou contagem, sequência geométrica e probabilidade a cenários periciais concretos (amostras de local de crime, gravação de câmera de segurança, tentativa de abrir cofre) — todos resolvidos pelo mesmo método: traduzir o cenário para uma estrutura matemática antes de calcular.

## Por que cai

Este bloco cobre associações arbitrárias entre elementos, dedução de informações, raciocínio sequencial, problemas de contagem, probabilidade e sequências/padrões — o núcleo "resolva o problema" do RLM, sem depender de fórmula pronta de porcentagem ou geometria. Nas provas reais localizadas, cada questão embutiu um raciocínio de contagem, sequência ou probabilidade dentro de um cenário investigativo, exigindo primeiro entender a estrutura do problema, só depois calcular.

| Prova (fonte oficial conferida) | Ano | O que caiu neste tema |
|---|---:|---|
| FGV PCMG Perito Criminal Área I, Tipo 1 | 2024 | Q12: contagem de combinações escolhendo itens de categorias diferentes. Q13: sequência com padrão geométrico (duplicação) aplicada a tempo de gravação. Q19: probabilidade sem reposição, várias tentativas. |

## Conteúdo completo orientado ao edital

### Princípio fundamental da contagem

Se uma tarefa se divide em etapas independentes, com m possibilidades na primeira etapa, n possibilidades na segunda etapa, e assim por diante, o número total de resultados possíveis é o **produto** de todas as possibilidades: m × n × ... Esse é o princípio multiplicativo, base de quase todo problema de contagem em concurso.

### Arranjo, combinação e permutação: a diferença que decide a fórmula

| Conceito | Quando usar | A ordem importa? | Fórmula |
|---|---|---|---|
| Permutação | Organizar todos os n elementos de um conjunto | Sim | n! (n fatorial: n×(n-1)×...×1) |
| Arranjo | Escolher e ordenar p elementos entre n disponíveis | Sim | n! / (n-p)! |
| Combinação | Escolher p elementos entre n disponíveis, sem se importar com a ordem | Não | n! / [p! × (n-p)!] |

Teste prático: se trocar a ordem dos elementos escolhidos gera um resultado **diferente** (uma senha, um pódio, uma sequência), é arranjo ou permutação. Se trocar a ordem gera o **mesmo** resultado (um grupo de pessoas, um conjunto de itens selecionados), é combinação.

Quando um problema de contagem envolve escolher itens de **categorias diferentes e distintas entre si** (por exemplo, um item de cada uma de várias categorias), a solução costuma ser o produto do número de opções em cada categoria escolhida, somado sobre todas as combinações de categorias possíveis — é uma aplicação combinada de combinação (escolher quais categorias entram) e princípio multiplicativo (escolher o item dentro de cada categoria).

### Probabilidade

A probabilidade de um evento é a razão entre **casos favoráveis** e **casos possíveis**: P = casos favoráveis / casos possíveis, sempre um número entre 0 e 1 (ou entre 0% e 100%).

| Situação | Como calcular |
|---|---|
| Evento único | P = favoráveis / possíveis |
| Eventos sucessivos **com** reposição | Multiplicam-se as probabilidades individuais, mantendo o total de casos possíveis constante a cada tentativa |
| Eventos sucessivos **sem** reposição | Multiplicam-se as probabilidades individuais, mas o total de casos possíveis **diminui** a cada tentativa (o elemento já escolhido sai do grupo) |
| Eventos mutuamente exclusivos (não podem ocorrer juntos) | Probabilidade de um **ou** outro ocorrer: soma-se as probabilidades |
| Eventos independentes (um não afeta o outro) | Probabilidade de ambos ocorrerem: multiplicam-se as probabilidades |

Um problema clássico: uma pessoa tem várias tentativas para acertar um item correto entre vários, sem repetir tentativa (sem reposição), e as tentativas são interrompidas se o acerto ocorrer antes do limite. Nesse caso, mais simples do que somar probabilidades tentativa por tentativa: **se todas as sequências têm a mesma chance e o número de tentativas permitidas é conhecido, a probabilidade de sucesso dentro do limite de tentativas é simplesmente (número de tentativas permitidas) / (total de casos possíveis)** — desde que o item correto só possa ser sorteado uma vez e as tentativas erradas sejam descartadas sem devolução ao conjunto.

### Sequências e padrões

**Progressão Aritmética (PA)**: sequência em que cada termo é obtido somando uma razão constante (r) ao termo anterior. Termo geral: aₙ = a₁ + (n-1)×r. Soma dos n primeiros termos: Sₙ = n×(a₁+aₙ)/2.

**Progressão Geométrica (PG)**: sequência em que cada termo é obtido multiplicando o termo anterior por uma razão constante (q). Termo geral: aₙ = a₁ × q^(n-1). Soma dos n primeiros termos (q≠1): Sₙ = a₁×(qⁿ-1)/(q-1).

Um padrão muito cobrado em prova: uma grandeza que **dobra a cada etapa** (razão q=2) — típico de problemas de duração de eventos que se repetem com duração crescente geometricamente (1, 2, 4, 8, 16...). Para resolver, é preciso somar os termos já ocorridos e comparar com o total disponível, encontrando em qual termo da sequência o total se esgota — geralmente por tentativa direta (somar termo a termo) mais do que pela fórmula fechada, quando o número de termos é pequeno.

### Problemas lógicos de associação e dedução

Problemas que associam pessoas, lugares, eventos ou características a partir de pistas textuais ("A não fez X", "B fez depois de C", "quem fez X não fez Y") são resolvidos por eliminação sistemática: monte uma tabela com todas as combinações possíveis e vá eliminando as que contradizem cada pista, uma de cada vez, até sobrar uma única solução consistente. Não tente resolver de cabeça — o erro mais comum é aplicar uma pista e esquecer de verificar se ela ainda é compatível com as pistas anteriores.

### Orientação espacial e temporal

Problemas de dias da semana, calendário e sequência de posições (fila, ordem de chegada) seguem lógica cíclica ou de contagem direta: para saber que dia da semana cai um número de dias à frente, calcule o resto da divisão por 7 e conte a partir do dia conhecido; para posições em fila/ordem, monte a lista e aplique as restrições dadas uma a uma, como nos problemas de associação lógica.

## Prioridades FGV dentro deste tema

| Prioridade | Por que é prioridade | Como treinar |
|---|---|---|
| Escolher corretamente entre arranjo, combinação e princípio multiplicativo puro | Evidenciado na questão real PCMG Q12 | Pergunte se a ordem de escolha muda o resultado; identifique se há categorias distintas envolvidas |
| Resolver sequência com razão que dobra a cada termo, somando etapa por etapa | Evidenciado na questão real PCMG Q13 | Monte a soma termo a termo até encontrar onde o total do problema se esgota, em vez de aplicar só a fórmula fechada |
| Calcular probabilidade sem reposição em tentativas sucessivas | Evidenciado na questão real PCMG Q19 | Identifique se o total de casos possíveis diminui a cada tentativa, e se o número de tentativas permitidas é a chave do cálculo |

## Diferenças que a banca costuma trocar

| Conceito A | Conceito B | Como a banca troca | Como não cair |
|---|---|---|---|
| Combinação (ordem não importa) | Arranjo/permutação (ordem importa) | Ambos "escolhem alguns itens de um grupo maior" | Pergunte se trocar a ordem dos escolhidos muda o resultado prático do problema |
| Probabilidade com reposição | Probabilidade sem reposição | Ambas envolvem "tentativas sucessivas" | Verifique se o item já usado volta ou não ao conjunto de possibilidades |
| Progressão aritmética (soma constante) | Progressão geométrica (multiplicação constante) | Ambas são "sequências com padrão" | Veja se a diferença entre termos é constante (PA) ou se a razão entre termos é constante (PG) |
| Eventos mutuamente exclusivos (somam probabilidade) | Eventos independentes (multiplicam probabilidade) | Ambos envolvem "dois eventos" e uma pergunta de probabilidade combinada | "Ou" que não podem ocorrer juntos soma; "e" que ocorrem sem se afetar multiplica |

## Como caiu na prova: questões comentadas

**Fonte: FGV, PCMG Perito Criminal Área I, Tipo 1, 2024, questão 12 (gabarito oficial: C)**

> Um perito criminal precisa analisar um conjunto de quatro amostras coletadas de uma cena de crime: cinco fibras de tecido; três fios de cabelo; dois fragmentos de vidro; e uma amostra de solo. Para realizar a análise, ele precisa escolher exatamente três itens entre as amostras, mas cada item deve pertencer a uma amostra diferente. O número total de diferentes trios de itens que o perito pode escolher é
>
> (A) 59. (B) 60. (C) 61. (D) 62. (E) 63.

1. **Identifique a estrutura**: escolher 3 itens, cada um de uma categoria diferente, entre 4 categorias disponíveis (tecido=5, cabelo=3, vidro=2, solo=1).
2. **Determine quais 3 categorias entram**: existem C(4,3)=4 combinações possíveis de categorias (deixando de fora uma categoria por vez).
3. **Calcule o produto de opções dentro de cada combinação de categorias**: tecido+cabelo+vidro = 5×3×2=30; tecido+cabelo+solo = 5×3×1=15; tecido+vidro+solo = 5×2×1=10; cabelo+vidro+solo = 3×2×1=6.
4. **Some os quatro resultados**: 30+15+10+6 = 61. **C é o gabarito**.

**Fonte: FGV, PCMG Perito Criminal Área I, Tipo 1, 2024, questão 13 (gabarito oficial: D)**

> Durante as investigações de um sinistro, foram obtidos exatos 20 minutos e 15 segundos contínuos de gravação de uma câmera de segurança. Por um dano na câmera, ao longo de toda a gravação, alternam-se 2 minutos de imagens nítidas com períodos variáveis de imagens sem qualquer nitidez. O primeiro trecho sem nitidez dura 1 segundo e cada um dos demais dura o dobro do tempo do trecho defeituoso precedente. Com base nessas informações, é correto concluir que o tempo total de imagens sem nitidez nessa gravação é de exatamente
>
> (A) 4 minutos. (B) 4 minutos e 3 segundos. (C) 4 minutos e 7 segundos. (D) 4 minutos e 15 segundos. (E) 5 minutos e 31 segundos.

1. **Reconheça o padrão geométrico**: os trechos sem nitidez formam uma PG de razão 2: 1s, 2s, 4s, 8s, 16s, 32s, 64s, 128s...
2. **Monte a sequência completa**: clara(120s), defeito(1s), clara(120s), defeito(2s), clara(120s), defeito(4s)... alternando.
3. **Some acumulando até bater com o total (1215s = 20min15s)**: após 8 blocos claros (8×120=960s) e 7 defeitos (1+2+4+8+16+32+64=127s), o total é 1087s; restam 1215-1087=128s, que é exatamente a duração do 8º defeito (2⁷=128s) — a gravação termina exatamente no fim desse trecho defeituoso.
4. **Some o tempo total sem nitidez**: 127s (sete primeiros defeitos) + 128s (oitavo defeito) = 255s = 4 minutos e 15 segundos. **D é o gabarito**.

**Fonte: FGV, PCMG Perito Criminal Área I, Tipo 1, 2024, questão 19 (gabarito oficial: D)**

> Um perito criminal está investigando o furto, sem arrombamento, do conteúdo em um cofre que bloqueia automaticamente a sua abertura após três tentativas incorretas e consecutivas de se digitar a senha. A perícia indica que o suspeito tinha um conjunto de 10 sequências possíveis de dígitos no momento do sinistro, sendo apenas uma a senha correta. [...] uma sequência, uma vez utilizada, foi descartada de novas escolhas, antes de o suspeito fazer qualquer tentativa, a probabilidade de ele conseguir abrir o cofre, antes do bloqueio, por meio da senha correta era
>
> (A) 8,1%. (B) 25,0%. (C) 27,1%. (D) 30,0%. (E) 32,1%.

1. **Identifique a estrutura**: 10 sequências possíveis, 1 correta, sem reposição (cada tentativa usada é descartada), até 3 tentativas permitidas antes do bloqueio.
2. **Reconheça o atalho**: como todas as 10 sequências têm a mesma probabilidade de serem escolhidas e são descartadas sem reposição, a chance de a senha correta estar entre as 3 primeiras tentativas é simplesmente 3 (tentativas permitidas) dividido por 10 (total de sequências) — não é preciso somar probabilidade tentativa por tentativa.
3. **Calcule**: 3/10 = 0,30 = 30,0%. **D é o gabarito**.
4. **Cuidado de prova**: somar as probabilidades de acertar exatamente na 1ª, exatamente na 2ª e exatamente na 3ª tentativa (sem reposição) chega ao mesmo resultado, mas de forma mais longa — o atalho de "tentativas/total" só vale porque todas as sequências têm a mesma chance e não há reposição.

## Pegadinhas da banca

- Usar fórmula de arranjo quando o problema pede combinação (ou o contrário), sem checar se a ordem importa.
- Esquecer de reduzir o total de casos possíveis em problemas de probabilidade sem reposição.
- Tentar aplicar a fórmula fechada de soma de PG num problema onde é mais seguro somar termo a termo até bater com o total dado.
- Somar probabilidades de eventos que não são mutuamente exclusivos (dupla contagem).
- Em problema de contagem por categorias, esquecer de somar todas as combinações possíveis de categorias, calculando só uma delas.

## Como resolver questões

1. Antes de escolher fórmula, pergunte: a ordem dos elementos escolhidos muda o resultado? Isso decide entre arranjo/permutação e combinação.
2. Em probabilidade, identifique se há reposição (mantém casos possíveis) ou não (reduz casos possíveis a cada tentativa).
3. Em sequência, teste se a diferença entre termos é constante (PA) ou se a razão é constante (PG); em problemas pequenos, some termo a termo em vez de aplicar só a fórmula fechada.
4. Em problema de associação lógica, monte tabela de possibilidades e elimine sistematicamente por pista, conferindo compatibilidade com as pistas já aplicadas.
5. Em problema de contagem por categorias distintas, calcule cada combinação de categorias separadamente e some os resultados.

## Lacunas honestas

- Ainda não há questão real localizada especificamente sobre problemas de associação lógica com tabela de pistas (verdade/mentira, quem fez o quê) neste levantamento.
- Ainda não há questão real localizada sobre progressão aritmética pura (sem contexto de duplicação geométrica).
- Ainda não há questão real localizada sobre orientação temporal/calendário (dia da semana) neste levantamento.

## Checklist de revisão

- [ ] Sei diferenciar arranjo, combinação e permutação pelo critério "a ordem importa?".
- [ ] Sei calcular probabilidade com e sem reposição.
- [ ] Sei diferenciar progressão aritmética de geométrica e suas fórmulas de termo geral e soma.
- [ ] Sei resolver problema de contagem por categorias distintas, somando todas as combinações possíveis.
- [ ] Sei resolver problema de associação lógica por eliminação sistemática com tabela.
- [ ] Resolvi as três questões reais comentadas deste tema sem olhar o gabarito antes.
- [ ] Marquei as lacunas de fonte registradas acima.

## Questões relacionadas

- [Resolver questões deste tema](provas/rlm/004_problemas-logicos-contagem-probabilidade-sequencias.md)

## Referências

**Prova/FGV**

- FGV. PCMG 2024 - Perito Criminal Área I, Tipo 1. Caderno oficial, questões 12, 13 e 19. Gabarito definitivo publicado pela FGV.
- Edital PCPR n.º 01/2026, retificado em 31/07/2026 - FGV.

**Material local**

- `Materiais QB/RLM/raciocinio-logico-mapas-do-concursado.pdf`
- `Materiais QB/Matematica/`

**Atualização/fonte externa**

- [Portal FGV Conhecimento - concursos aplicados](https://conhecimento.fgv.br/concursos) - usado para localizar cadernos oficiais e gabaritos definitivos das provas citadas acima.

> Regra de uso: este capítulo reescreve e organiza o conteúdo em linguagem própria. As questões citadas são reais, com fonte, ano e gabarito oficial conferidos; onde não há questão real disponível, a lacuna está registrada explicitamente.
