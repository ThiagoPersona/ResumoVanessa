# 031 - Óptica e formação de imagens

## Leitura rápida

- A lei de Snell-Descartes (n₁·senθ₁ = n₂·senθ₂) rege toda refração — e tem uma consequência pouco intuitiva, mas muito cobrada: atravessar camadas paralelas de meios diferentes (como vidro dentro d'água) não muda o ângulo final, se o raio volta ao mesmo meio de destino.
- Lentes convergentes formam imagem real quando o objeto está além do foco; a posição da lente (mais perto ou mais longe do objeto) muda o tamanho da imagem projetada, mantendo o produto de certas grandezas constante.
- Sistema óptico afocal (usado em luneta/telescópio, por exemplo) combina duas lentes de forma que a distância entre elas seja igual à soma dos focos — ponto de cálculo direto e recorrente.
- Vergência (medida em dioptrias) é o inverso da distância focal (C = 1/f) — lentes convergentes têm vergência positiva; divergentes, negativa.

## Por que cai

Óptica é diretamente aplicada à área pericial: exame de vestígios com lupa/microscópio, fotografia forense, sistemas ópticos de equipamentos de captura de imagem — o entendimento de como a luz se comporta ao atravessar lentes e meios diferentes é pré-requisito técnico para o uso correto desses instrumentos.

| Prova (fonte oficial conferida) | Ano | O que caiu neste tema |
|---|---:|---|
| FGV SEAD/AP Papiloscopista, Tipo 1 | 2022 | Q45: ângulos de refração de um raio de luz atravessando meios de índices de refração diferentes antes de chegar à água. Q47: cálculo da vergência de uma lente divergente num sistema óptico afocal. |

## Conteúdo completo orientado ao edital

### Lei de Snell-Descartes: a base da refração

Quando um raio de luz passa de um meio para outro com índice de refração diferente, ele muda de direção (refrata), segundo a lei de Snell-Descartes:

**n₁ · sen(θ₁) = n₂ · sen(θ₂)**

onde n₁ e n₂ são os índices de refração dos meios de origem e destino, e θ₁, θ₂ são os ângulos de incidência e refração, medidos a partir da normal à superfície.

**Consequência importante para prova**: se um raio de luz atravessa uma sequência de meios com faces **paralelas** entre si e retorna ao mesmo meio de destino final, o ângulo de saída depende **apenas dos índices de refração do meio inicial e do meio final** — os meios intermediários (por mais que desviem o raio internamente) não alteram o ângulo final, porque os desvios se cancelam matematicanente ao longo do percurso paralelo. Esse é um resultado que surpreende quem não domina a lei de Snell aplicada em cadeia.

### Lentes: convergentes e divergentes

| Tipo | Formato típico | Efeito sobre raios paralelos |
|---|---|---|
| Convergente | Mais espessa no centro | Converge os raios para um ponto focal real |
| Divergente | Mais fina no centro | Diverge os raios, com foco virtual |

**Vergência** (C) é o inverso da distância focal (f), medida em dioptrias (di) quando f está em metros: **C = 1/f**. Lentes convergentes têm vergência positiva; divergentes, negativa.

### Formação de imagens por lentes convergentes

Uma lente convergente forma imagem **real** (pode ser projetada num anteparo) quando o objeto está além do foco; forma imagem **virtual** (não pode ser projetada, só vista através da lente) quando o objeto está entre o foco e a lente (como numa lupa).

**Duas posições, mesma tela**: para um objeto e um anteparo a distância fixa entre si, existem duas posições possíveis da lente convergente que produzem imagem nítida no anteparo (uma mais perto do objeto, outra mais perto do anteparo) — fenômeno conhecido como método de Bessel. Nessas duas posições, as imagens têm tamanhos diferentes (uma ampliada, outra reduzida), mas existe uma relação fixa entre a altura do objeto e as alturas das duas imagens formadas, que pode ser explorada para medir a distância focal experimentalmente sem conhecer previamente a posição exata do foco.

### Sistemas ópticos com duas lentes: o sistema afocal

Quando duas lentes (uma convergente e outra divergente, ou duas convergentes) são combinadas de modo que o foco imagem da primeira coincida com o foco objeto da segunda, o sistema resultante é chamado **afocal**: raios paralelos que entram no sistema saem paralelos (não convergem para um ponto focal único) — é o princípio óptico por trás de luneta e telescópio.

**Condição para sistema afocal com duas lentes delgadas**: a distância entre as lentes (d) deve ser igual à soma algébrica das distâncias focais das duas lentes: **d = f₁ + f₂** (respeitando o sinal de cada foco: positivo para convergente, negativo para divergente).

## Prioridades FGV dentro deste tema

| Prioridade | Por que é prioridade | Como treinar |
|---|---|---|
| Aplicar a lei de Snell em sequência de meios paralelos, reconhecendo que o ângulo final só depende dos meios inicial e final | Evidenciado na questão real SEAD/AP Q45 | Lembre: n_inicial·senθ_inicial = n_final·senθ_final, independente do que há no meio do caminho, se as faces são paralelas |
| Calcular a vergência de uma lente a partir da condição de sistema afocal (d = f₁+f₂) | Evidenciado na questão real SEAD/AP Q47 | Converta vergência em foco (f=1/C), monte a equação afocal, resolva para o foco desconhecido, converta de volta para vergência |
| Diferenciar lente convergente de divergente pelo sinal da vergência/foco | Base de qualquer cálculo com lentes | Lembre: convergente = vergência positiva; divergente = vergência negativa |
| Reconhecer a formação de imagem real x virtual conforme a posição do objeto em relação ao foco | Base teórica de óptica geométrica | Associe: além do foco = imagem real; entre o foco e a lente = imagem virtual |

## Diferenças que a banca costuma trocar

| Conceito A | Conceito B | Como a banca troca | Como não cair |
|---|---|---|---|
| Lente convergente (vergência positiva) | Lente divergente (vergência negativa) | Ambas são "lentes esféricas delgadas" | Convergente tem foco real e vergência positiva; divergente tem foco virtual e vergência negativa |
| Imagem real (pode ser projetada) | Imagem virtual (só vista através da lente) | Ambas são "imagens formadas por lente" | Real forma-se além do foco (objeto), projetável; virtual forma-se entre foco e lente, não projetável |
| Ângulo de refração dependente só dos meios inicial/final | Ângulo de refração alterado por cada meio intermediário | Ambos envolvem "passar por vários meios" | Em meios de faces paralelas, o ângulo final só depende do meio inicial e do final — os intermediários se cancelam |
| Sistema afocal (raios paralelos entram e saem paralelos) | Sistema com foco único | Ambos são "sistemas de duas lentes" | Afocal exige d=f₁+f₂; sistema comum converge para um ponto focal definido |

## Como caiu na prova: questões comentadas

**Fonte: FGV, SEAD/AP Papiloscopista, Tipo 1 - Branca, 2022, questão 45 (gabarito oficial: E)**

> Um raio de luz monocromática, vindo do ar, chega com ângulo de incidência î à superfície livre da água [...]. Sendo o índice de refração da água nA, ele emerge com ângulo de refração r1. Se para chegar à água esse raio tiver que atravessar uma tampa de vidro de índice de refração nV > nA [...], emergirá com ângulo de refração r2. Se, porém, tiver que atravessar uma tampa de plástico de índice nP < nA [...], emergirá com ângulo de refração r3. Esses ângulos de refração são tais que
>
> (A) r2 > r1 = r3. (B) r2 < r1 < r3. (C) r2 > r1 > r3. (D) r2 > r1 < r3. (E) r2 = r1 = r3.

1. **Aplique a lei de Snell em cadeia**: em cada caso, o raio parte do ar e termina na água — os meios intermediários (vidro ou plástico) têm faces paralelas às da água.
2. **Reconheça a propriedade central**: quando o raio atravessa camadas de faces paralelas e retorna ao mesmo meio de destino (água), o ângulo final na água depende **apenas** dos índices do ar e da água — os desvios causados pelos meios intermediários se cancelam matematicamente ao longo do percurso.
3. **Conclua**: independentemente de o raio atravessar vidro, plástico ou nada além do ar, o ângulo de refração final na água é sempre o mesmo.
4. **E é o gabarito**: r2 = r1 = r3.

**Fonte: FGV, SEAD/AP Papiloscopista, Tipo 1 - Branca, 2022, questão 47 (gabarito oficial: B)**

> Duas lentes esféricas e delgadas, uma convergente de 2 di e outra divergente, de mesmo eixo principal, estão separadas por uma distância de 25cm. Nessas condições, formam um sistema óptico afocal. A convergência da lente divergente é:
>
> (A) – 8 di. (B) – 4 di. (C) – 2 di. (D) – 1 di. (E) – 0,5 di.

1. **Converta a vergência da lente convergente em foco**: C₁ = 2 di → f₁ = 1/C₁ = 0,5 m = 50 cm.
2. **Aplique a condição de sistema afocal**: d = f₁ + f₂ → 25 = 50 + f₂ → f₂ = 25 - 50 = -25 cm = -0,25 m.
3. **Converta o foco de volta em vergência**: C₂ = 1/f₂ = 1/(-0,25) = -4 di.
4. **B é o gabarito**: -4 di.

## Pegadinhas da banca

- Achar que cada meio intermediário atravessado altera o ângulo final de refração, ignorando o cancelamento que ocorre com faces paralelas e retorno ao mesmo meio de destino.
- Esquecer de converter vergência em foco (e vice-versa) antes de aplicar a fórmula do sistema afocal.
- Trocar o sinal do foco/vergência da lente divergente (deve ser negativo).
- Confundir imagem real com virtual ao posicionar o objeto em relação ao foco da lente convergente.

## Como resolver questões

1. Para refração em sequência de meios, identifique se as faces são paralelas e se o raio retorna ao mesmo meio de destino — se sim, use apenas os índices inicial e final.
2. Para sistemas de duas lentes, converta sempre vergência em foco (f=1/C) antes de somar ou subtrair distâncias.
3. Para sistema afocal, aplique d=f₁+f₂, respeitando o sinal de cada foco (positivo para convergente, negativo para divergente).
4. Para formação de imagem, localize o objeto em relação ao foco da lente antes de decidir se a imagem é real ou virtual.

## Lacunas honestas

- Ainda não há questão real localizada especificamente sobre o método de Bessel (duas posições de lente convergente) neste levantamento — a teoria está coberta acima, falta a camada de prática com questão real conferida.

## Checklist de revisão

- [ ] Sei aplicar a lei de Snell-Descartes (n₁senθ₁=n₂senθ₂).
- [ ] Sei que, em meios de faces paralelas com retorno ao mesmo meio de destino, o ângulo final só depende dos meios inicial e final.
- [ ] Sei calcular vergência a partir da distância focal (C=1/f) e vice-versa.
- [ ] Sei a condição de sistema óptico afocal (d=f₁+f₂) e aplico corretamente os sinais de lente convergente/divergente.
- [ ] Sei diferenciar imagem real de virtual conforme a posição do objeto em relação ao foco.
- [ ] Resolvi as duas questões reais comentadas deste tema sem olhar o gabarito antes.
- [ ] Marquei a lacuna de fonte registrada acima.

## Questões relacionadas

- [Resolver questões deste tema](provas/fisica/001_optica-formacao-imagens.md)

## Referências

**Prova/FGV**

- FGV. SEAD/AP - Peritos 2022 - Papiloscopista, Tipo 1 - Branca. Caderno oficial, questões 45 e 47. Gabarito definitivo publicado pela FGV.
- Edital PCPR n.º 01/2026, retificado em 31/07/2026 - FGV.

**Material local**

- `Materiais QB/Física/` (quando disponível)

**Atualização/fonte externa**

- [Portal FGV Conhecimento - concursos aplicados](https://conhecimento.fgv.br/concursos) - usado para localizar cadernos oficiais e gabaritos definitivos das provas citadas acima.

> Regra de uso: este capítulo reescreve e organiza o conteúdo em linguagem própria. As questões citadas são reais, com fonte, ano e gabarito oficial conferidos; onde não há questão real disponível, a lacuna está registrada explicitamente.
