# 008 - Números, porcentagem, juros, proporcionalidade e medidas

## Leitura rápida

- Este tema é essencialmente "matemática aplicada a problema de texto": porcentagem, juros, razão/proporção e regra de três resolvem a maioria das questões numéricas de concurso.
- O erro mais caro não é de conta — é de **base de cálculo**: aumentar 30% e depois diminuir 30% não devolve o valor original, e aplicar dois percentuais em sequência exige multiplicar fatores, não somar os percentuais.
- Nas provas reais localizadas, a FGV gosta de embutir sistemas de equações simples (dois preços, duas compras) e proporcionalidade inversa dentro de um enunciado investigativo — o desafio é traduzir o texto para a equação certa, não resolver a conta em si.
- Distinguir grandezas diretamente proporcionais de inversamente proporcionais é decisivo: multiplicar quando devia dividir (ou o contrário) inverte a resposta.

## Por que cai

Este bloco cobre número (conjuntos numéricos, operações), porcentagem, juros simples e compostos, razão, proporção, regra de três e sistemas de medidas — a base "aritmética" do RLM, que sustenta praticamente qualquer problema com dado numérico do enunciado. Nas provas reais localizadas, a FGV aplicou esses conceitos a cenários periciais (massa de substância apreendida, índice pluviométrico, preço de produto, tempo perdido por atraso de relógio), sempre exigindo primeiro a tradução do texto para uma conta, não a fórmula pura.

| Prova (fonte oficial conferida) | Ano | O que caiu neste tema |
|---|---:|---|
| FGV PCMG Perito Criminal Área I, Tipo 1 | 2024 | Q16: porcentagem aplicada para achar composição de duas substâncias a partir de percentuais fixos por pacote. Q17: grandezas inversamente proporcionais (quantidade de substância x distância). |
| FGV PCAM Investigador de Polícia, Tipo 1 | 2021 | Q12: porcentagens sucessivas (aumento e desconto encadeados). Q13: proporcionalidade aplicada a atraso constante de relógio ao longo de um ano. Q14: sistema de duas equações lineares (preço de dois produtos). |

## Conteúdo completo orientado ao edital

### Conjuntos numéricos, rapidamente

| Conjunto | O que contém | Exemplo |
|---|---|---|
| Naturais (N) | Contagem, sem negativos nem frações | 0, 1, 2, 3... |
| Inteiros (Z) | Naturais e seus opostos negativos | ..., -2, -1, 0, 1, 2... |
| Racionais (Q) | Tudo que pode ser escrito como fração de inteiros | 1/2, 0,75, -3 |
| Irracionais | Decimais infinitos não periódicos, não representáveis como fração | π, √2 |
| Reais (R) | Racionais e irracionais juntos | qualquer número da reta numérica |

Em prova, o que mais importa não é a definição pura, mas reconhecer operações com frações e decimais sem erro de base — a maioria dos problemas de RLM é aritmética disfarçada de contexto.

### Porcentagem: a base de cálculo é tudo

Porcentagem é uma razão com denominador 100. O erro mais caro em prova de concurso é aplicar a porcentagem sobre a **base errada**.

**Aumento e desconto sucessivos** não se somam — se multiplicam como fatores:

- Aumentar X% equivale a multiplicar por (1 + X/100).
- Diminuir X% equivale a multiplicar por (1 - X/100).
- Dois aumentos sucessivos de X% e Y% equivalem a multiplicar por (1 + X/100) × (1 + Y/100) — o resultado **não** é simplesmente "aumento de (X+Y)%".

Por exemplo: uma redução de 30% seguida de um aumento de 40% sobre o novo valor equivale a multiplicar por 0,7 × 1,4 = 0,98 — ou seja, o valor final é **2% menor** que o original, não "10% maior" (40-30=10, cálculo ingênuo e errado) nem "0%" (compensação ingênua).

**Ponto percentual x variação percentual**: se uma taxa passa de 60% para 75%, a diferença **em pontos percentuais** é 75-60=15 p.p. A variação **percentual relativa** é diferente: (75-60)/60 = 25%. Confundir os dois é uma pegadinha clássica — "aumentou 15%" e "aumentou 15 pontos percentuais" são afirmações diferentes quando se fala de taxas.

### Juros simples x juros compostos

| Tipo | Fórmula do montante | Como cresce |
|---|---|---|
| Simples | M = C × (1 + i × t) | Linear: o juro de cada período incide sempre sobre o capital inicial |
| Composto | M = C × (1 + i)^t | Exponencial: o juro de cada período incide sobre o montante já acumulado (juro sobre juro) |

Onde C é o capital inicial, i é a taxa de juros (na mesma unidade de tempo de t), t é o tempo, e M é o montante final. Em juros simples, o valor de juro por período é sempre o mesmo (C × i); em compostos, cresce a cada período, porque incide sobre um capital maior.

### Razão, proporção e regra de três

**Razão** é a comparação entre duas grandezas por divisão (a/b). **Proporção** é a igualdade entre duas razões (a/b = c/d), cuja propriedade fundamental é: **produto dos meios = produto dos extremos** (a×d = b×c).

**Regra de três simples** resolve problemas com duas grandezas relacionadas:

- **Diretamente proporcionais**: quando uma aumenta, a outra aumenta na mesma proporção (dobrar uma dobra a outra). Monta-se a proporção mantendo o mesmo sentido nas duas colunas.
- **Inversamente proporcionais**: quando uma aumenta, a outra diminui na mesma proporção (dobrar uma reduz a outra à metade). Monta-se a proporção invertendo uma das colunas antes de igualar.

**Regra de três composta** envolve três ou mais grandezas relacionadas simultaneamente — resolve-se analisando a relação de cada grandeza com a grandeza-alvo isoladamente (direta ou inversa) e combinando todas na mesma equação.

**Sistemas de duas equações lineares** aparecem quando o problema dá duas combinações de preço/quantidade (ex.: "2 kg de X e 1 kg de Y custam R$92; 1 kg de X e 3 kg de Y custam R$76") e pede uma terceira combinação. Resolve-se isolando uma variável numa equação e substituindo na outra (método da substituição), ou multiplicando uma equação para eliminar uma variável ao somar/subtrair as duas (método da adição).

### Sistemas de medidas

| Grandeza | Unidade principal | Conversões mais cobradas |
|---|---|---|
| Comprimento | metro (m) | 1 km = 1000 m; 1 m = 100 cm = 1000 mm |
| Massa | quilograma (kg) | 1 kg = 1000 g; 1 g = 1000 mg; 1 tonelada = 1000 kg |
| Tempo | segundo (s) | 1 min = 60 s; 1 h = 60 min = 3600 s; 1 dia = 24 h |
| Área | metro quadrado (m²) | 1 m² = 10.000 cm²; 1 hectare = 10.000 m² |
| Volume/capacidade | litro (L) | 1 L = 1000 mL; 1 m³ = 1000 L |

Problemas de tempo acumulado (como atraso constante de relógio ao longo de dias/meses/anos) combinam conversão de unidade com proporcionalidade direta: multiplicar a taxa de variação por período pelo número de períodos, depois converter o resultado para a unidade pedida na resposta.

## Prioridades FGV dentro deste tema

| Prioridade | Por que é prioridade | Como treinar |
|---|---|---|
| Aplicar porcentagem sobre a base correta em cálculos encadeados | Evidenciado nas questões reais PCMG Q16 e PCAM Q12 | Reescreva cada percentual como fator multiplicativo (1±X/100) antes de encadear |
| Reconhecer proporcionalidade inversa e montar a proporção invertida corretamente | Evidenciado na questão real PCMG Q17 | Pergunte: quando uma grandeza dobra, a outra dobra ou cai pela metade? |
| Resolver sistema de duas equações lineares a partir de um problema de preço/quantidade | Evidenciado na questão real PCAM Q14 | Traduza cada combinação de compra em uma equação antes de tentar resolver de cabeça |
| Multiplicar taxa de variação por número de períodos e converter unidade corretamente | Evidenciado na questão real PCAM Q13 | Sempre confira em que unidade a resposta é pedida antes de converter |

## Diferenças que a banca costuma trocar

| Conceito A | Conceito B | Como a banca troca | Como não cair |
|---|---|---|---|
| Ponto percentual (diferença direta entre taxas) | Variação percentual relativa | Ambos aparecem como "aumento de X%" na alternativa | Pergunte se a questão pede a diferença direta entre as taxas ou a variação relativa a uma base |
| Percentuais sucessivos (multiplicam fatores) | Soma simples dos percentuais | Ambos "parecem" formas válidas de compor dois aumentos/descontos | Sempre multiplique os fatores (1±X/100); nunca some os percentuais diretamente |
| Juros simples (linear) | Juros compostos (exponencial) | Ambos usam capital, taxa e tempo | Verifique se o enunciado diz "sobre o capital inicial" (simples) ou "sobre o montante acumulado" (composto) |
| Proporcionalidade direta | Proporcionalidade inversa | Ambas relacionam duas grandezas numa "regra de três" | Teste: se uma grandeza dobra, a outra dobra (direta) ou cai à metade (inversa)? |

## Como caiu na prova: questões comentadas

**Fonte: FGV, PCMG Perito Criminal Área I, Tipo 1, 2024, questão 16 (gabarito oficial: A)**

> Em uma operação policial, exatos quatro pacotes foram apreendidos por conterem substâncias ilegais. Esses pacotes e as suas respectivas massas são: Pacote A: 300 g; Pacote B: 450 g; Pacote C: 350 g; Pacote D: 480 g. Dois dos pacotes continham apenas a substância ilícita S1 e os demais, apenas a substância ilícita S2. Os pacotes que continham a substância S1, juntos, totalizaram 20 gramas a menos do que a massa total dos outros dois pacotes. Nos pacotes A e B, a quantidade de substância ilícita correspondeu a 60% das massas dos respectivos pacotes. Nos pacotes C e D, a quantidade de substância ilícita correspondeu a 40% das massas dos respectivos pacotes. Pode-se concluir corretamente que, nessa operação, a quantidade apreendida de substância S1, quando comparada à quantidade apreendida de substância S2, foi
>
> (A) 38 gramas inferior.
> (B) 38 gramas superior.
> (C) igual.
> (D) 148 gramas inferior.
> (E) 149 gramas superior.

1. **Descubra quais pacotes formam o par S1**: soma total dos 4 pacotes = 300+450+350+480 = 1580 g. Se o par S1 soma X e o par S2 soma X+20, então 2X+20=1580, logo X=780.
2. **Teste as combinações de dois pacotes**: A+D = 300+480 = 780 — é o único par que soma 780. Logo, S1 = {A, D} e S2 = {B, C} (soma 800).
3. **Calcule a substância em cada pacote pelo percentual fixo do pacote** (A e B são 60%; C e D são 40%, independente de qual substância contêm): A → 60% de 300 = 180 g; D → 40% de 480 = 192 g. S1 total = 180+192 = 372 g.
4. **Calcule o par S2**: B → 60% de 450 = 270 g; C → 40% de 350 = 140 g. S2 total = 270+140 = 410 g.
5. **Compare**: S1 (372g) - S2 (410g) = -38g → S1 é 38 gramas inferior a S2. **A é o gabarito**.

**Fonte: FGV, PCMG Perito Criminal Área I, Tipo 1, 2024, questão 17 (gabarito oficial: B)**

> Um perito criminal está analisando a dispersão de uma substância química em solução líquida após o vazamento em um tanque. [...] a quantidade de substância encontrada pelo perito no local do sinistro é inversamente proporcional à distância em relação ao ponto de origem do vazamento. A 50 cm do ponto de origem do vazamento, havia 180 g da substância química. A diferença entre as quantidades encontradas dessa substância a 1,5 m e a 2,0 m de distância da origem do vazamento é de
>
> (A) 10 g. (B) 15 g. (C) 75 g. (D) 150 g. (E) 180 g.

1. **Traduza "inversamente proporcional"**: quantidade × distância = constante (k). Em 0,5 m havia 180 g, então k = 180 × 0,5 = 90.
2. **Calcule a 1,5 m**: quantidade = 90 / 1,5 = 60 g.
3. **Calcule a 2,0 m**: quantidade = 90 / 2,0 = 45 g.
4. **Calcule a diferença**: 60 - 45 = 15 g. **B é o gabarito**.
5. **Cuidado de prova**: quem tratasse a relação como diretamente proporcional (multiplicando em vez de dividir pela distância) chegaria a um resultado completamente diferente e erraria a questão.

**Fonte: FGV, PCAM Investigador de Polícia, Tipo 1, 2021, questão 12 (gabarito oficial: D)**

> Em certo município do sul do Estado do Amazonas o índice pluviométrico no ano 2010 foi 30% menor do que o do ano anterior e, em 2011, foi 40% maior do que o do ano anterior. Nesse município, o índice pluviométrico de 2011 foi, em relação ao índice de 2009,
>
> (A) maior em 10%. (B) maior em 2%. (C) igual. (D) menor em 2%. (E) menor em 10%.

1. **Nunca some os percentuais diretamente** (isso daria "10% maior", armadilha da alternativa A).
2. **Transforme cada variação em fator multiplicativo**: 2010 = 2009 × 0,70 (30% menor). 2011 = 2010 × 1,40 (40% maior).
3. **Combine os fatores**: 2011 = 2009 × 0,70 × 1,40 = 2009 × 0,98.
4. **Interprete o resultado**: 0,98 = 98% do valor de 2009, ou seja, 2% menor. **D é o gabarito**.

**Fonte: FGV, PCAM Investigador de Polícia, Tipo 1, 2021, questão 13 (gabarito oficial: A)**

> Um relógio que atrasa 2 minutos por dia, todos os dias, foi acertado à meia-noite de certo dia deste ano de 2022. Após exatamente 1 ano, à meia-noite, esse relógio marcará
>
> (A) 11h50min. (B) 12h10min. (C) 12h20min. (D) 12h50min. (E) 13h10min.

1. **Calcule o atraso total**: 2 minutos por dia × 365 dias (2022 não é bissexto) = 730 minutos.
2. **Converta para horas e minutos**: 730 min = 12h10min.
3. **Aplique o atraso à hora real**: a hora real, após 1 ano, volta a ser meia-noite (00h00). O relógio, atrasado 12h10min, mostra 00h00 - 12h10min = 11h50min (do dia anterior, mas como marcação de relógio, aparece como 11h50min). **A é o gabarito**.

**Fonte: FGV, PCAM Investigador de Polícia, Tipo 1, 2021, questão 14 (gabarito oficial: C)**

> Madalena comprou, numa certa semana, 2 kg de carne (patinho) e 1 kg de frango (coxas), e pagou R$ 92,00. Na semana seguinte, os preços ainda eram os mesmos e ela comprou 1 kg da mesma carne e 3 kg do mesmo frango, pagando R$ 76,00. Se Madalena comprasse 1 kg de carne e 1 kg de frango pagaria
>
> (A) R$ 48,00. (B) R$ 50,00. (C) R$ 52,00. (D) R$ 54,00. (E) R$ 56,00.

1. **Monte o sistema**: seja c = preço do kg de carne, f = preço do kg de frango. 2c + f = 92; c + 3f = 76.
2. **Isole c na segunda equação**: c = 76 - 3f.
3. **Substitua na primeira**: 2(76-3f) + f = 92 → 152 - 6f + f = 92 → 152 - 5f = 92 → 5f = 60 → f = 12.
4. **Calcule c**: c = 76 - 3(12) = 76-36 = 40.
5. **Responda o que foi pedido**: 1 kg de carne + 1 kg de frango = 40+12 = 52. **C é o gabarito**.

## Pegadinhas da banca

- Somar percentuais sucessivos em vez de multiplicar os fatores correspondentes.
- Confundir "aumento em pontos percentuais" com "aumento percentual relativo".
- Aplicar proporcionalidade direta quando o enunciado descreve uma relação inversa (ou o contrário).
- Esquecer de determinar corretamente qual par/grupo satisfaz uma condição textual (como a soma de massas) antes de aplicar o percentual.
- Errar a conversão de unidade de tempo ao final de um cálculo de proporcionalidade acumulada.
- Tentar resolver sistema de duas equações "de cabeça" sem montar as equações, entrando em contradição.

## Como resolver questões

1. Traduza cada informação do enunciado para uma equação, fator ou proporção antes de calcular.
2. Em porcentagem sucessiva, use fatores multiplicativos (1±X/100), nunca soma direta de percentuais.
3. Em proporcionalidade, teste mentalmente "se uma dobra, a outra dobra ou cai à metade?" antes de montar a regra de três.
4. Em sistema de equações, isole uma variável e substitua na outra equação, conferindo o resultado nas duas equações originais.
5. Sempre confira a unidade de medida pedida na resposta antes de finalizar o cálculo.

## Lacunas honestas

- Ainda não há questão real localizada especificamente sobre juros compostos neste levantamento — a fórmula está coberta acima, falta a camada de prática com questão real conferida.
- Ainda não há questão real localizada sobre regra de três composta (três ou mais grandezas simultâneas).

## Checklist de revisão

- [ ] Sei diferenciar ponto percentual de variação percentual relativa.
- [ ] Sei compor percentuais sucessivos multiplicando fatores, não somando.
- [ ] Sei diferenciar juros simples de juros compostos e a fórmula de cada um.
- [ ] Sei montar regra de três simples direta e inversa, e reconhecer qual se aplica pelo comportamento das grandezas.
- [ ] Sei resolver sistema de duas equações lineares a partir de um problema de preço/quantidade.
- [ ] Sei converter entre as principais unidades de comprimento, massa, tempo, área e volume.
- [ ] Resolvi as cinco questões reais comentadas deste tema sem olhar o gabarito antes.
- [ ] Marquei as lacunas de fonte registradas acima.

## Questões relacionadas

- [Resolver questões deste tema](../../provas/rlm/002_numeros-porcentagem-juros-proporcionalidade-medidas.md)

## Referências

**Prova/FGV**

- FGV. PCMG 2024 - Perito Criminal Área I, Tipo 1. Caderno oficial, questões 16 e 17. Gabarito definitivo publicado pela FGV.
- FGV. PCAM 2021 - Investigador de Polícia, 4ª Classe, Tipo 1. Caderno oficial, questões 12, 13 e 14. Gabarito definitivo publicado pela FGV.
- Edital PCPR n.º 01/2026, retificado em 31/07/2026 - FGV.

**Material local**

- `Materiais QB/RLM/raciocinio-logico-mapas-do-concursado.pdf`
- `Materiais QB/Matematica/`

**Atualização/fonte externa**

- [Portal FGV Conhecimento - concursos aplicados](https://conhecimento.fgv.br/concursos) - usado para localizar cadernos oficiais e gabaritos definitivos das provas citadas acima.

> Regra de uso: este capítulo reescreve e organiza o conteúdo em linguagem própria. As questões citadas são reais, com fonte, ano e gabarito oficial conferidos; onde não há questão real disponível, a lacuna está registrada explicitamente.
