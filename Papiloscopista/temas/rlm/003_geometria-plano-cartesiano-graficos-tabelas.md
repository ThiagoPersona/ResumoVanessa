# 009 - Geometria, plano cartesiano, gráficos e tabelas

## Leitura rápida

- Este tema junta duas frentes: geometria plana básica (ângulos, triângulos, áreas, perímetros) e leitura/interpretação de dados (plano cartesiano, gráficos, tabelas, estatística descritiva).
- A geometria de concurso raramente exige demonstração — exige aplicar fórmula de área/perímetro/Pitágoras a um problema com contexto, e não confundir as fórmulas entre si.
- Em gráficos e tabelas, o erro mais caro não é de conta, é de **leitura**: ignorar a escala do eixo, comparar valor absoluto quando a pergunta pede taxa (razão por população/unidade), ou vice-versa.
- Nas provas reais localizadas, a FGV testou leitura de tabela com cálculo de taxa por habitante e estatística descritiva (quartis e outliers) — ambos exigem method sistemático, não intuição visual.

## Por que cai

Este bloco cobre geometria básica (ângulos, triângulos, polígonos, perímetro, área), plano cartesiano (coordenadas, distância) e leitura de gráficos/tabelas — incluindo estatística descritiva simples. Nas provas reais localizadas, o padrão foi aplicar leitura de tabela a um cálculo de taxa (não apenas comparar números absolutos) e interpretar uma medida estatística (quartil, outlier) a partir de uma lista de dados brutos — exatamente o tipo de raciocínio útil para analisar indicadores na rotina policial.

| Prova (fonte oficial conferida) | Ano | O que caiu neste tema |
|---|---:|---|
| FGV PCMG Perito Criminal Área I, Tipo 1 | 2024 | Q14: leitura de tabela com cálculo de taxa de criminalidade por 1.000 habitantes (não apenas comparação de valores absolutos). Q18: cálculo de quartis e identificação de outliers a partir de uma lista de medidas. |

## Conteúdo completo orientado ao edital

### Ângulos e triângulos

| Conceito | Definição/regra |
|---|---|
| Ângulo reto | 90° |
| Ângulo agudo | Menor que 90° |
| Ângulo obtuso | Maior que 90° e menor que 180° |
| Ângulos complementares | Somam 90° |
| Ângulos suplementares | Somam 180° |
| Soma dos ângulos internos de um triângulo | Sempre 180° |
| Soma dos ângulos internos de um polígono de n lados | (n-2) × 180° |

Classificação de triângulos: por lados (equilátero — todos os lados iguais; isósceles — dois lados iguais; escaleno — todos diferentes) e por ângulos (acutângulo — todos os ângulos agudos; retângulo — um ângulo reto; obtusângulo — um ângulo obtuso).

**Teorema de Pitágoras** (triângulo retângulo): a soma dos quadrados dos catetos é igual ao quadrado da hipotenusa — **a² + b² = c²**, onde c é a hipotenusa (o lado oposto ao ângulo reto, sempre o maior lado). É a ferramenta mais cobrada em problemas de distância, escada apoiada em parede, diagonal de retângulo.

### Perímetro e área das figuras planas principais

| Figura | Perímetro | Área |
|---|---|---|
| Quadrado (lado L) | 4L | L² |
| Retângulo (base b, altura h) | 2(b+h) | b × h |
| Triângulo (lados a, b, c; base B, altura H) | a+b+c | (B × H) / 2 |
| Círculo (raio r) | 2πr (circunferência) | πr² |
| Trapézio (bases B e b, altura H) | soma dos 4 lados | ((B+b) × H) / 2 |

Problema clássico de prova: dado a área de uma figura (ou uma restrição, como "o maior círculo que cabe dentro do retângulo sem ultrapassar as paredes"), calcular o perímetro ou uma dimensão que não foi dada diretamente — exige montar uma equação a partir da fórmula de área antes de aplicar a de perímetro.

### Plano cartesiano

O plano cartesiano é formado por dois eixos perpendiculares (x horizontal, y vertical), dividindo o plano em quatro **quadrantes**:

| Quadrante | Sinal de x | Sinal de y |
|---|---|---|
| 1º | positivo | positivo |
| 2º | negativo | positivo |
| 3º | negativo | negativo |
| 4º | positivo | negativo |

**Distância entre dois pontos** A(x₁,y₁) e B(x₂,y₂): d = √[(x₂-x₁)² + (y₂-y₁)²] — é, na prática, o Teorema de Pitágoras aplicado às diferenças de coordenadas.

**Ponto médio** entre A(x₁,y₁) e B(x₂,y₂): M = ((x₁+x₂)/2, (y₁+y₂)/2) — a média simples de cada coordenada.

### Leitura e interpretação de gráficos e tabelas

Os tipos mais cobrados: **gráfico de barras/colunas** (compara categorias), **gráfico de linhas** (mostra evolução ao longo do tempo) e **gráfico de setores/pizza** (mostra proporção de um todo, geralmente em percentual). O erro mais recorrente em prova é ler o valor de uma barra ou ponto **sem checar a escala do eixo** — se o eixo sobe de 5 em 5 (não de 1 em 1), a terceira marca acima do zero vale 15, não 3.

Em tabelas, o cuidado central é diferenciar **valor absoluto** de **taxa/razão**: uma área com mais crimes registrados não é necessariamente a mais violenta em termos relativos — depende também da população. A taxa por unidade populacional (ex.: crimes por 1.000 habitantes) é: **taxa = (ocorrências / população) × 1.000** (ou × 100.000, dependendo da escala pedida). Duas áreas podem ter o mesmo número absoluto de crimes e taxas bem diferentes, se as populações forem diferentes — e o contrário também é possível.

### Medidas de tendência central e de dispersão

| Medida | O que é | Como calcular |
|---|---|---|
| Média | Soma de todos os valores dividida pela quantidade de valores | (v₁+v₂+...+vₙ) / n |
| Mediana | Valor central de uma lista ordenada | Se n for ímpar, é o valor do meio; se par, é a média dos dois valores centrais |
| Moda | Valor que mais se repete | Contagem de frequência |
| Quartis (Q1, Q2, Q3) | Dividem a lista ordenada em quatro partes iguais | Q2 é a mediana; Q1 é a mediana da metade inferior; Q3 é a mediana da metade superior |
| Amplitude interquartil (IQR) | Mede a dispersão central dos dados | Q3 - Q1 |
| Outlier | Valor fora do padrão esperado | Maior que Q3 + 1,5×IQR, ou menor que Q1 - 1,5×IQR |

Para calcular quartis com uma quantidade par de valores (ex.: 14 valores), divide-se a lista ordenada em duas metades de 7; Q1 é o termo central da metade inferior, Q3 é o termo central da metade superior. Outliers são identificados comparando cada valor aos limites Q3+1,5×IQR (limite superior) e Q1-1,5×IQR (limite inferior) — valores fora desses limites são estatisticamente atípicos.

## Prioridades FGV dentro deste tema

| Prioridade | Por que é prioridade | Como treinar |
|---|---|---|
| Calcular taxa por população, não comparar apenas valor absoluto | Evidenciado na questão real PCMG Q14 | Sempre pergunte se a comparação pedida é sobre quantidade bruta ou sobre uma razão/taxa |
| Calcular quartis corretamente e aplicar a fórmula de outlier | Evidenciado na questão real PCMG Q18 | Ordene a lista, divida em metades, ache os termos centrais de cada metade, calcule os limites com IQR |
| Ler a escala do eixo antes de estimar valor de gráfico | Base teórica do tema | Confira o intervalo entre marcas do eixo antes de contar quantas marcas a barra alcança |
| Montar equação a partir de área para achar dimensão não informada | Base teórica do tema | Escreva a fórmula de área com a incógnita antes de tentar achar o perímetro |

## Diferenças que a banca costuma trocar

| Conceito A | Conceito B | Como a banca troca | Como não cair |
|---|---|---|---|
| Valor absoluto (contagem bruta) | Taxa/razão por unidade (ex.: por 1.000 habitantes) | A área com mais casos em número absoluto não é necessariamente a de maior taxa | Sempre calcule a razão pedida, não compare só o número bruto da tabela |
| Mediana | Média | Ambas são "medida central", mas calculadas de formas diferentes | Mediana é o valor do meio da lista ordenada; média é a soma dividida pela quantidade |
| Quartil (Q1/Q3) | Mediana (Q2) | Todos são "quartis", mas Q2 é o único que coincide com a mediana da lista inteira | Q1 e Q3 são medianas das metades inferior e superior, não da lista toda |
| Perímetro | Área | Ambos descrevem "o tamanho" da figura, mas medem coisas diferentes | Perímetro é o contorno (soma dos lados); área é a superfície (produto de dimensões) |

## Como caiu na prova: questões comentadas

**Fonte: FGV, PCMG Perito Criminal Área I, Tipo 1, 2024, questão 14 (gabarito oficial: E)**

> Um perito criminal está analisando dados sobre a criminalidade em cinco áreas diferentes de uma cidade. Tais dados são apresentados na tabela: Área 1: 20 crimes, 10.000 habitantes; Área 2: 15 crimes, 8.000 habitantes; Área 3: 25 crimes, 12.000 habitantes; Área 4: 30 crimes, 18.000 habitantes; Área 5: 10 crimes, 4.000 habitantes. A área que apresenta a maior taxa de criminalidade por 1.000 habitantes é a de número
>
> (A) 1. (B) 2. (C) 3. (D) 4. (E) 5.

1. **Não compare o número bruto de crimes** — a área 4 tem o maior número absoluto (30), mas isso não decide a questão, que pede taxa por 1.000 habitantes.
2. **Calcule a taxa de cada área** (crimes/população × 1000): Área 1 = 20/10000×1000 = 2,0; Área 2 = 15/8000×1000 = 1,875; Área 3 = 25/12000×1000 ≈ 2,083; Área 4 = 30/18000×1000 ≈ 1,667; Área 5 = 10/4000×1000 = 2,5.
3. **Compare as taxas calculadas**: a maior é a da área 5 (2,5), mesmo tendo o menor número absoluto de crimes (10) — porque também tem a menor população.
4. **E é o gabarito.**

**Fonte: FGV, PCMG Perito Criminal Área I, Tipo 1, 2024, questão 18 (gabarito oficial: B)**

> Um perito criminal investiga marcas de frenagem em uma estrada após uma série de acidentes em um mesmo trecho. As distâncias das marcas de frenagem (em metros) foram: 19 – 22 – 20 – 18 – 23 – 30 – 22 – 18 – 21 – 19 – 24 – 18 – 21 – 20. [...] São considerados outliers os valores maiores que Q3 + 1,5×(Q3-Q1) e os menores que Q1 - 1,5×(Q3-Q1). Com base nessas informações, pode-se afirmar que o conjunto de distâncias registradas pelo perito
>
> (A) não possui outlier.
> (B) possui um único outlier, sendo esse maior do que Q3.
> (C) possui um único outlier, sendo esse menor do que Q1.
> (D) possui dois únicos outliers, sendo ambos maiores do que Q3.
> (E) possui dois únicos outliers, sendo um deles maior do que Q3 e o outro menor do que Q1.

1. **Ordene a lista** (14 valores): 18, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 24, 30.
2. **Divida em duas metades de 7**: metade inferior (18,18,18,19,19,20,20) e metade superior (21,21,22,22,23,24,30).
3. **Ache Q1 e Q3**: Q1 = termo central da metade inferior (4º valor) = 19. Q3 = termo central da metade superior (4º valor) = 22.
4. **Calcule o IQR e os limites**: IQR = Q3-Q1 = 22-19 = 3. Limite superior = 22 + 1,5×3 = 26,5. Limite inferior = 19 - 1,5×3 = 14,5.
5. **Compare cada valor aos limites**: nenhum valor é menor que 14,5 (o mínimo é 18). Apenas o valor 30 é maior que 26,5.
6. **Conclua**: há exatamente um outlier (30), e ele é maior que Q3. **B é o gabarito**.

## Pegadinhas da banca

- Comparar apenas o número absoluto de uma tabela quando a pergunta pede taxa/razão por unidade populacional.
- Ler valor de gráfico contando marcas sem checar o intervalo da escala do eixo.
- Confundir Q1/Q3 com a mediana da lista inteira (só Q2 coincide com ela).
- Trocar fórmula de perímetro por fórmula de área (ou o contrário) numa figura composta.
- Esquecer que a soma dos ângulos internos de um triângulo é sempre 180°, mesmo em problemas com informação aparentemente incompleta.

## Como resolver questões

1. Em tabela com dado de população e ocorrência, calcule a taxa pedida antes de comparar — nunca decida só pelo valor bruto.
2. Em gráfico, confira a escala do eixo antes de estimar qualquer valor.
3. Em geometria com dimensão não informada, monte a equação a partir do dado que você tem (geralmente área) antes de calcular o que foi pedido (geralmente perímetro).
4. Em estatística descritiva, ordene a lista completa antes de qualquer cálculo de quartil, mediana ou outlier.
5. Em plano cartesiano, trate distância como aplicação direta de Pitágoras nas diferenças de coordenadas.

## Lacunas honestas

- Ainda não há questão real localizada especificamente sobre geometria pura (perímetro/área sem contexto estatístico) neste levantamento com gabarito plenamente conferido de forma independente — a teoria de ângulos, triângulos e áreas está coberta acima, mas a prática com questão real segue como prioridade de busca.
- Ainda não há questão real localizada sobre plano cartesiano (coordenadas, distância entre pontos, ponto médio) neste levantamento.
- Ainda não há questão real localizada sobre gráfico de setores (pizza) neste levantamento.

## Checklist de revisão

- [ ] Sei a soma dos ângulos internos de um triângulo e de um polígono qualquer.
- [ ] Sei aplicar o Teorema de Pitágoras.
- [ ] Sei as fórmulas de perímetro e área das figuras planas principais.
- [ ] Sei os quadrantes do plano cartesiano e as fórmulas de distância e ponto médio.
- [ ] Sei diferenciar valor absoluto de taxa/razão por unidade populacional.
- [ ] Sei calcular média, mediana, moda, quartis e identificar outliers.
- [ ] Resolvi as duas questões reais comentadas deste tema sem olhar o gabarito antes.
- [ ] Marquei as lacunas de fonte registradas acima.

## Questões relacionadas

- [Resolver questões deste tema](../../provas/rlm/003_geometria-plano-cartesiano-graficos-tabelas.md)

## Referências

**Prova/FGV**

- FGV. PCMG 2024 - Perito Criminal Área I, Tipo 1. Caderno oficial, questões 14 e 18. Gabarito definitivo publicado pela FGV.
- Edital PCPR n.º 01/2026, retificado em 31/07/2026 - FGV.

**Material local**

- `Materiais QB/RLM/raciocinio-logico-mapas-do-concursado.pdf`
- `Materiais QB/Matematica/`

**Atualização/fonte externa**

- [Portal FGV Conhecimento - concursos aplicados](https://conhecimento.fgv.br/concursos) - usado para localizar cadernos oficiais e gabaritos definitivos das provas citadas acima.

> Regra de uso: este capítulo reescreve e organiza o conteúdo em linguagem própria. As questões citadas são reais, com fonte, ano e gabarito oficial conferidos; onde não há questão real disponível, a lacuna está registrada explicitamente.
