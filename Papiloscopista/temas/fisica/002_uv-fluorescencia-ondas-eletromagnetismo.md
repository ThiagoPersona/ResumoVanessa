# 032 - UV, fluorescência, ondas e eletromagnetismo

## Leitura rápida

- Movimento Harmônico Simples (MHS) descreve osciladores como mola e pêndulo — posição, velocidade e aceleração variam de forma senoidal/cossenoidal no tempo, e a velocidade é a derivada da posição.
- Interferência de dupla fenda (experimento de Young) produz franjas claras (construtiva) e escuras (destrutiva) conforme a diferença de percurso entre as duas fendas — cada cor de luz (comprimento de onda) gera um padrão de franjas em posição diferente.
- O espectro eletromagnético vai do rádio ao raio gama; luz ultravioleta (UV) tem comprimento de onda menor que a luz visível, e é usada em perícia para revelar fluorescência de vestígios (fibras, fluidos biológicos, alterações em documentos).
- Fótons de luz visível de cores diferentes têm a mesma velocidade no mesmo meio, mas energias diferentes — quanto menor o comprimento de onda (mais próximo do violeta), maior a energia do fóton.

## Por que cai

Este item une física ondulatória (MHS, interferência) com a aplicação forense direta de radiação eletromagnética (UV, fluorescência) usada em revelação de vestígios, documentoscopia e biologia forense — ferramentas físicas empregadas na rotina pericial.

| Prova (fonte oficial conferida) | Ano | O que caiu neste tema |
|---|---:|---|
| FGV SEAD/AP Papiloscopista, Tipo 1 | 2022 | Q41: cálculo de velocidade em movimento harmônico simples a partir da equação de posição. Q49: identificação da cor de luz usada num experimento de interferência de dupla fenda, a partir da diferença de percurso. |

## Conteúdo completo orientado ao edital

### Movimento Harmônico Simples (MHS)

Um oscilador em MHS (como uma massa presa a uma mola, ou um pêndulo de pequena amplitude) tem posição descrita por uma função do tipo:

**x(t) = A·cos(ωt + φ)**

onde A é a amplitude, ω é a frequência angular, e φ é a fase inicial. A **velocidade** é a derivada da posição em relação ao tempo:

**v(t) = -A·ω·sen(ωt + φ)**

Ponto de prova: em determinados instantes, a fase (ωt+φ) pode resultar em um múltiplo de π, fazendo o seno se anular — nesse momento, a velocidade é zero, mesmo que a amplitude e a frequência angular não sejam nulas (esse é o ponto de deslocamento máximo, onde o oscilador momentaneamente para antes de inverter o sentido do movimento).

### Ondas: conceitos básicos

Uma onda transporta energia sem transportar matéria. Elementos centrais: **comprimento de onda** (λ, distância entre duas cristas sucessivas), **frequência** (f, número de oscilações por segundo), **período** (T=1/f) e **velocidade de propagação** (v=λ·f). Ondas estacionárias (formadas, por exemplo, numa corda vibrante presa nas duas pontas) têm pontos fixos sem vibração (nós) e pontos de vibração máxima (ventres), com frequências específicas (harmônicos) relacionadas entre si por múltiplos inteiros ou semi-inteiros, conforme as condições de contorno.

### Interferência de dupla fenda (experimento de Young)

Quando luz monocromática atravessa duas fendas estreitas e próximas, os dois feixes resultantes se sobrepõem num anteparo, formando um padrão de franjas claras (interferência construtiva) e escuras (interferência destrutiva), conforme a diferença de percurso entre os dois caminhos até cada ponto do anteparo:

| Tipo de franja | Condição sobre a diferença de percurso (Δ) |
|---|---|
| Franja clara (construtiva) | Δ = m·λ (m = 0, 1, 2...) |
| Franja escura (destrutiva) | Δ = (m + 1/2)·λ (m = 0, 1, 2...) |

Para a primeira franja escura mais próxima do centro (m=0), a diferença de percurso é exatamente **meio comprimento de onda** (Δ = λ/2). Esse dado permite calcular o comprimento de onda da luz usada no experimento a partir da diferença de percurso medida, e depois identificar a cor correspondente numa tabela de comprimentos de onda.

### Espectro eletromagnético e luz ultravioleta

O espectro eletromagnético organiza as ondas por comprimento de onda/frequência: ondas de rádio, micro-ondas, infravermelho, luz visível, ultravioleta, raios X e raios gama — em ordem crescente de frequência (e de energia do fóton) e decrescente de comprimento de onda.

**Luz ultravioleta (UV)** tem comprimento de onda menor que o da luz visível (abaixo do violeta), portanto maior energia por fóton. Em perícia, luz UV é usada para revelar **fluorescência**: certas substâncias (fibras têxteis, fluidos biológicos como sêmen e saliva, tintas de segurança em documentos, alterações em papel) absorvem a energia UV e reemitem parte dela como luz visível, tornando-se visíveis mesmo quando imperceptíveis sob luz comum.

### Energia do fóton e velocidade da luz no mesmo meio

Para luz se propagando no mesmo meio (por exemplo, no ar): **todas as cores/frequências de luz visível se propagam com a mesma velocidade** (aproximadamente a velocidade da luz no meio considerado). O que muda entre as cores é a **energia do fóton**, dada por E = h·f (h = constante de Planck, f = frequência): quanto maior a frequência (menor o comprimento de onda, mais perto do violeta), maior a energia do fóton — por isso a luz violeta tem mais energia por fóton que a luz vermelha, mesmo viajando à mesma velocidade no mesmo meio.

## Prioridades FGV dentro deste tema

| Prioridade | Por que é prioridade | Como treinar |
|---|---|---|
| Derivar a velocidade a partir da equação de posição em MHS, identificando quando ela se anula | Evidenciado na questão real SEAD/AP Q41 | Lembre: v(t) = -Aω·sen(ωt+φ); calcule a fase no instante pedido e veja se cai em múltiplo de π (seno=0) |
| Calcular o comprimento de onda a partir da condição de franja escura (Δ=λ/2 para a mais próxima do centro) | Evidenciado na questão real SEAD/AP Q49 | Isole λ na fórmula Δ=λ/2, calcule o valor numérico e compare com a tabela de cores dada |
| Reconhecer que todas as cores de luz visível têm a mesma velocidade no mesmo meio, mas energias de fóton diferentes | Base teórica recorrente em prova de física óptica | Associe: mesma velocidade no mesmo meio; energia cresce com a frequência (E=hf) |
| Associar luz UV a fluorescência de vestígios forenses | Aplicação prática central deste tema | Lembre: UV excita a substância, que reemite luz visível (fluorescência) |

## Diferenças que a banca costuma trocar

| Conceito A | Conceito B | Como a banca troca | Como não cair |
|---|---|---|---|
| Franja clara (interferência construtiva) | Franja escura (interferência destrutiva) | Ambas são "franjas" do padrão de interferência | Clara: Δ=m·λ; escura: Δ=(m+1/2)·λ |
| Mesma velocidade da luz no mesmo meio | Mesma energia do fóton para todas as cores | Ambas são "propriedades da luz visível" | Velocidade é igual no mesmo meio; energia do fóton varia com a frequência (maior para violeta) |
| Posição (x) em MHS | Velocidade (v) em MHS | Ambas são funções do tempo no oscilador | Velocidade é a derivada da posição — quando posição está no extremo (amplitude máxima), velocidade é zero |
| Luz ultravioleta (menor λ, mais energia) | Luz infravermelha (maior λ, menos energia) | Ambas são "luz não visível" usada em perícia | UV tem menor comprimento de onda/mais energia; infravermelho tem maior comprimento de onda/menos energia |

## Como caiu na prova: questões comentadas

**Fonte: FGV, SEAD/AP Papiloscopista, Tipo 1 - Branca, 2022, questão 41 (gabarito oficial: C)**

> Uma esfera oscila horizontalmente em movimento harmônico simples presa à extremidade de uma mola. Seu deslocamento pode ser descrito pela equação X = 0,2·cos(3π·t + π), medida no sistema internacional de unidades. A velocidade da esfera quando t = 1 s é
>
> (A) – 1,8 m/s. (B) – 0,6 m/s. (C) 0. (D) + 0,6 m/s. (E) + 1,8 m/s.

1. **Derive a posição para achar a velocidade**: v(t) = -0,2·3π·sen(3πt+π) = -0,6π·sen(3πt+π).
2. **Calcule a fase em t=1**: 3π(1)+π = 4π.
3. **Calcule o seno da fase**: sen(4π) = 0 (4π é múltiplo de 2π, volta ao início do ciclo).
4. **Calcule a velocidade**: v(1) = -0,6π · 0 = 0.
5. **C é o gabarito.**

**Fonte: FGV, SEAD/AP Papiloscopista, Tipo 1 - Branca, 2022, questão 49 (gabarito oficial: D)**

> A figura representa dois anteparos separados por uma distância D [...] O ponto P é um dos pontos mais próximos do ponto central O [...] onde se localiza uma franja escura. A diferença de percurso no ponto P entre as duas luzes provenientes das fendas F1 e F2 é 2,4×10⁻⁷m. A tabela mostra o comprimento de onda de diferentes cores: vermelha 6,5; amarela 5,7; verde 5,4; azul 4,8; violeta 4,5 (×10⁻⁷m). Assim, a cor usada no experimento é
>
> (A) vermelha. (B) amarela. (C) verde. (D) azul. (E) violeta.

1. **Identifique a condição da primeira franja escura**: Δ = λ/2 (m=0, a mais próxima do centro).
2. **Isole λ**: λ = 2·Δ = 2 × 2,4×10⁻⁷ = 4,8×10⁻⁷ m.
3. **Compare com a tabela**: 4,8×10⁻⁷ m corresponde exatamente à cor azul.
4. **D é o gabarito.**

## Pegadinhas da banca

- Esquecer de derivar a posição para achar a velocidade em MHS, ou errar a regra de derivação do cosseno (que gera seno negativo).
- Não reconhecer quando a fase cai em múltiplo de π (ou 2π), o que anula a velocidade (ou a posição, dependendo da fase).
- Confundir a condição de franja clara (Δ=m·λ) com a de franja escura (Δ=(m+1/2)·λ).
- Achar que cores diferentes de luz visível viajam a velocidades diferentes no mesmo meio (elas têm a mesma velocidade; o que muda é a energia do fóton).
- Confundir luz ultravioleta (menor comprimento de onda que o visível) com infravermelha (maior comprimento de onda).

## Como resolver questões

1. Para MHS, sempre derive a posição para achar velocidade, e calcule a fase exata no instante pedido antes de aplicar a função trigonométrica.
2. Para interferência, identifique se a questão trata de franja clara ou escura antes de escolher a fórmula (m·λ ou (m+1/2)·λ).
3. Para comparar cores de luz, lembre que a velocidade é igual no mesmo meio; o que diferencia é frequência/comprimento de onda e, consequentemente, energia do fóton.
4. Para aplicação forense de UV, associe sempre à fluorescência (excitação e reemissão de luz visível por substâncias específicas).

## Lacunas honestas

- Ainda não há questão real localizada sobre ondas estacionárias/harmônicos (padrão vibratório de corda) neste levantamento, apesar de o tema teórico ter aparecido na prova (questão com imagem não verificável sem a figura original) — mantido como lacuna explícita.
- Ainda não há questão real localizada especificamente sobre fluorescência aplicada a vestígio forense (a teoria está coberta, falta a camada de prática com questão real conferida).

## Checklist de revisão

- [ ] Sei derivar a velocidade a partir da equação de posição em MHS.
- [ ] Sei identificar quando a velocidade se anula em MHS (fase em múltiplo de π).
- [ ] Sei as condições de franja clara e escura na interferência de dupla fenda.
- [ ] Sei que todas as cores de luz visível têm a mesma velocidade no mesmo meio, mas energias de fóton diferentes.
- [ ] Sei por que luz UV revela fluorescência de vestígios forenses.
- [ ] Resolvi as duas questões reais comentadas deste tema sem olhar o gabarito antes.
- [ ] Marquei as lacunas de fonte registradas acima.

## Questões relacionadas

- [Resolver questões deste tema](provas/fisica/002_uv-fluorescencia-ondas-eletromagnetismo.md)

## Referências

**Prova/FGV**

- FGV. SEAD/AP - Peritos 2022 - Papiloscopista, Tipo 1 - Branca. Caderno oficial, questões 41 e 49. Gabarito definitivo publicado pela FGV.
- Edital PCPR n.º 01/2026, retificado em 31/07/2026 - FGV.

**Material local**

- `Materiais QB/Física/` (quando disponível)

**Atualização/fonte externa**

- [Portal FGV Conhecimento - concursos aplicados](https://conhecimento.fgv.br/concursos) - usado para localizar cadernos oficiais e gabaritos definitivos das provas citadas acima.

> Regra de uso: este capítulo reescreve e organiza o conteúdo em linguagem própria. As questões citadas são reais, com fonte, ano e gabarito oficial conferidos; onde não há questão real disponível, a lacuna está registrada explicitamente.
