# 037 - Reações, balanceamento, velocidade e equilíbrio

## Leitura rápida

- Uma equação química balanceada tem o mesmo número de átomos de cada elemento nos reagentes e nos produtos — é a base de qualquer cálculo estequiométrico (proporção entre quantidades de reagentes e produtos).
- A velocidade de uma reação aumenta com: maior superfície de contato (sólido em pó reage mais rápido que em pedaço), maior concentração dos reagentes, maior temperatura, e presença de catalisador.
- Um catalisador acelera a reação (diminui a energia de ativação necessária), mas **não muda** a posição de equilíbrio nem o rendimento final — só faz a reação alcançar o equilíbrio mais rápido.
- O Princípio de Le Chatelier prevê como um sistema em equilíbrio químico reage a uma perturbação (mudança de concentração, pressão ou temperatura): o equilíbrio se desloca no sentido que tende a **minimizar** o efeito da perturbação.
- Reações de eletrólise usam corrente elétrica para forçar uma reação não espontânea; a quantidade de produto formado se relaciona com a carga elétrica pela constante de Faraday.
- Termoquímica estuda a energia (calor) liberada ou absorvida numa reação: reações exotérmicas liberam calor (ΔH negativo); endotérmicas absorvem calor (ΔH positivo).

## Por que cai

Este é o núcleo mais denso do edital de Química: reações, seu balanceamento, velocidade e equilíbrio aparecem tanto isoladamente quanto embutidos em problemas de estequiometria aplicada (indústria química, eletrólise, tratamento ambiental). A FGV historicamente cobra vários desses subtemas na mesma prova, com cálculos que exigem interpretação cuidadosa do enunciado antes de qualquer conta.

| Prova (fonte oficial conferida) | Ano | O que caiu neste tema |
|---|---:|---|
| FGV SEAD/AP Papiloscopista, Tipo 1 | 2022 | Q52: rendimento de eletrólise da água usando a constante de Faraday. Q53: efeito de catalisador, pressão e temperatura sobre três sistemas em equilíbrio distintos. Q55: estequiometria do Processo de Ostwald (produção de ácido nítrico a partir de amônia, em três etapas). Q56: ordenação de três experimentos por velocidade de reação, variando superfície de contato, concentração e temperatura. Q58: termoquímica de combustão, usando um diagrama de entalpia com duas reações relacionadas. |
| FGV PCMG - Perito Criminal, Área I | 2024 | Q71: estequiometria de reações de drenagem ácida de minas (produção de ácido sulfúrico a partir de pirita, em sequência de três equações). |

## Conteúdo completo orientado ao edital

### Balanceamento de equações químicas

Uma equação química balanceada respeita a **Lei de Conservação da Massa** (Lavoisier): o número de átomos de cada elemento é o mesmo nos reagentes e nos produtos. Balancear consiste em ajustar os coeficientes (números na frente de cada fórmula) até que essa igualdade se cumpra para todos os elementos envolvidos.

**Estequiometria** é o cálculo de proporções entre quantidades (em mols, massa ou volume) de reagentes e produtos, usando os coeficientes da equação balanceada como razão de conversão. Numa sequência de reações (como o Processo de Ostwald, com três etapas), a estequiometria total deve considerar cada etapa em ordem, verificando se o produto de uma etapa é o reagente da próxima e se algum subproduto é ou não reaproveitado no processo descrito.

### Fatores que alteram a velocidade de uma reação

| Fator | Efeito sobre a velocidade | Por quê |
|---|---|---|
| Superfície de contato | Maior superfície (pó fino) = reação mais rápida | Mais pontos de contato entre reagentes por unidade de tempo |
| Concentração dos reagentes | Maior concentração = reação mais rápida | Mais partículas colidindo por unidade de volume e tempo |
| Temperatura | Maior temperatura = reação mais rápida | Partículas com mais energia cinética colidem com mais frequência e energia suficiente para reagir |
| Catalisador | Presença de catalisador = reação mais rápida | Reduz a energia de ativação necessária, sem ser consumido no processo |

Quando uma questão pede para comparar a velocidade de vários experimentos, é preciso avaliar **todos** os fatores presentes simultaneamente (superfície, concentração, temperatura) — o experimento mais rápido combina os fatores mais favoráveis; entre experimentos com fatores empatados, o critério restante decide a ordem.

### Equilíbrio químico e Princípio de Le Chatelier

Uma reação reversível atinge **equilíbrio** quando a velocidade da reação direta se iguala à velocidade da reação inversa (as concentrações param de mudar, mas as reações continuam ocorrendo nos dois sentidos). O **Princípio de Le Chatelier** prevê que, ao perturbar um sistema em equilíbrio, ele se desloca no sentido que tende a **minimizar** a perturbação:

| Perturbação | Efeito sobre o equilíbrio |
|---|---|
| Aumento de concentração de um reagente | Desloca no sentido de consumi-lo (formando mais produto) |
| Aumento de pressão (em sistema gasoso) | Desloca no sentido do menor número de mols de gás |
| Aumento de temperatura | Desloca no sentido endotérmico (absorve o calor extra) |
| Diminuição de temperatura | Desloca no sentido exotérmico (libera calor, compensando a perda) |
| Adição de catalisador | **Não desloca** o equilíbrio; apenas acelera o tempo para atingi-lo, igualmente nos dois sentidos |

**Ponto que a banca adora explorar**: catalisador **não** altera o rendimento final de uma reação em equilíbrio — só faz o sistema chegar ao equilíbrio mais rápido. Confundir "acelerar a reação" com "aumentar o rendimento" é o erro mais comum nesse assunto.

### Eletrólise e a constante de Faraday

Na **eletrólise**, uma corrente elétrica externa força uma reação química não espontânea (o inverso de uma pilha, que gera corrente a partir de reação espontânea). A quantidade de carga elétrica que passa pelo sistema é:

**Q = i · t** (corrente em ampères × tempo em segundos, resultando em carga em coulombs)

A relação entre carga e quantidade de matéria transformada usa a **constante de Faraday** (F ≈ 96.500 C/mol de elétrons): o número de mols de elétrons transferidos é n(e⁻) = Q/F. A partir daí, usa-se a estequiometria da semirreação para achar quantos mols do produto (como H₂ gasoso) são teoricamente formados, e comparar com o valor experimental para calcular o **rendimento** do processo (rendimento = quantidade real ÷ quantidade teórica × 100%).

### Termoquímica: entalpia de reação

A **entalpia (H)** é uma medida da energia contida num sistema; a variação de entalpia (ΔH) de uma reação é a diferença entre a entalpia dos produtos e a dos reagentes:

| Tipo de reação | ΔH | O que ocorre |
|---|---|---|
| Exotérmica | Negativo | Libera calor para o ambiente |
| Endotérmica | Positivo | Absorve calor do ambiente |

**Diagramas de entalpia com reações relacionadas**: quando um diagrama mostra a entalpia de mais de uma reação a partir dos mesmos reagentes (por exemplo, combustão completa de metano a CO₂ e combustão parcial a CO), a diferença entre os dois ΔH fornece a entalpia da etapa que liga os dois produtos entre si (nesse caso, a combustão de CO a CO₂), pela Lei de Hess: a variação de entalpia de um processo não depende do caminho, apenas dos estados inicial e final.

## Prioridades FGV dentro deste tema

| Prioridade | Por que é prioridade | Como treinar |
|---|---|---|
| Calcular rendimento de eletrólise usando a constante de Faraday | Evidenciado diretamente na questão real SEAD/AP Q52 | Monte Q=it, converta para mols de elétrons (Q/F), aplique a estequiometria da semirreação, compare com o valor real dado |
| Aplicar o Princípio de Le Chatelier a mudanças de catalisador, pressão e temperatura em sistemas distintos | Evidenciado diretamente na questão real SEAD/AP Q53 | Trate cada afirmação separadamente: catalisador nunca desloca equilíbrio; pressão desloca para menos mols de gás; temperatura desloca conforme o sinal do ΔH |
| Resolver estequiometria de reações em sequência (várias equações, um produto vira reagente da próxima) | Evidenciado nas questões reais SEAD/AP Q55 e PCMG Q71 | Acompanhe a substância de interesse por todas as equações, verificando se algo é regenerado/reciclado ou consumido definitivamente em cada etapa |
| Ordenar experimentos por velocidade de reação, avaliando múltiplos fatores simultâneos | Evidenciado diretamente na questão real SEAD/AP Q56 | Compare os experimentos par a par, fixando um fator de cada vez |
| Usar Lei de Hess para relacionar entalpias de reações a partir de um diagrama | Evidenciado diretamente na questão real SEAD/AP Q58 | Subtraia os ΔH dados para achar a entalpia da etapa não fornecida diretamente |

## Diferenças que a banca costuma trocar

| Conceito A | Conceito B | Como a banca troca | Como não cair |
|---|---|---|---|
| Catalisador (acelera, não desloca equilíbrio) | Aumento de concentração/pressão/temperatura (desloca o equilíbrio) | Ambos "alteram a reação em equilíbrio" | Catalisador só muda a velocidade de chegada ao equilíbrio; os outros três fatores realmente deslocam a posição do equilíbrio |
| Reação exotérmica (ΔH negativo, libera calor) | Reação endotérmica (ΔH positivo, absorve calor) | Ambas são "reações com troca de energia" | O sinal do ΔH indica a direção da troca: negativo=libera, positivo=absorve |
| Rendimento teórico (calculado pela estequiometria) | Rendimento real/experimental (medido no processo) | Ambos aparecem como "quantidade de produto" | O rendimento percentual é sempre real÷teórico×100%, nunca o contrário |
| Aumento de pressão desloca para menos mols de gás | Aumento de pressão desloca para mais mols de gás | Fácil inverter o sentido | O sistema se opõe ao aumento de pressão, deslocando para o lado com menor volume gasoso (menos mols de gás) |

## Pegadinhas da banca

- Achar que um catalisador aumenta o rendimento de uma reação em equilíbrio (ele só acelera a chegada ao equilíbrio).
- Inverter o sentido do deslocamento de equilíbrio por pressão (confundir "menos mols de gás" com "mais mols de gás").
- Esquecer de considerar todos os fatores de velocidade simultaneamente ao ordenar experimentos (focar só em temperatura e ignorar concentração ou superfície de contato, por exemplo).
- Em reações sequenciais, assumir reciclagem de um subproduto quando o enunciado não garante isso explicitamente (ou o oposto, ignorar uma reciclagem que o enunciado deixa clara).
- Trocar o sinal do ΔH ao aplicar a Lei de Hess (somar quando deveria subtrair, ou o contrário).

## Como resolver questões

1. Para estequiometria, sempre balanceie (ou confirme que já está balanceada) a equação antes de aplicar qualquer proporção.
2. Para velocidade de reação, liste todos os fatores presentes no enunciado (superfície, concentração, temperatura, catalisador) e avalie o efeito de cada um antes de concluir a ordem.
3. Para equilíbrio químico, trate cada afirmação isoladamente e lembre a regra fixa: catalisador nunca desloca; pressão desloca para menos mols de gás; temperatura desloca conforme o sinal do ΔH da reação.
4. Para eletrólise, sempre converta carga (Q=it) em mols de elétrons usando a constante de Faraday antes de aplicar a estequiometria da semirreação.
5. Para termoquímica com diagrama, identifique quais ΔH são dados diretamente e qual falta — a Lei de Hess permite obter o que falta por soma ou subtração dos valores conhecidos.

## Lacunas honestas

- Nenhuma lacuna relevante identificada para este tema — a cobertura de questões reais é ampla (6 questões de duas fontes distintas), cobrindo praticamente todos os subtemas centrais.

## Checklist de revisão

- [ ] Sei balancear uma equação química simples e aplicar estequiometria básica.
- [ ] Sei os quatro fatores que alteram a velocidade de uma reação (superfície, concentração, temperatura, catalisador).
- [ ] Sei aplicar o Princípio de Le Chatelier a mudanças de concentração, pressão e temperatura.
- [ ] Sei que catalisador não desloca equilíbrio, apenas acelera a chegada a ele.
- [ ] Sei calcular rendimento de eletrólise usando a constante de Faraday.
- [ ] Sei diferenciar reação exotérmica de endotérmica pelo sinal do ΔH.
- [ ] Sei aplicar a Lei de Hess a partir de um diagrama de entalpia.
- [ ] Resolvi as seis questões reais comentadas deste tema sem olhar o gabarito antes.

## Questões relacionadas

- [Resolver questões deste tema](../../provas/quimica/003_reacoes-balanceamento-velocidade-equilibrio.md)

## Referências

**Prova/FGV**

- FGV. SEAD/AP - Peritos 2022 - Papiloscopista, Tipo 1 - Branca. Caderno oficial, questões 52, 53, 55, 56 e 58. Gabarito definitivo publicado pela FGV.
- FGV. PCMG - Perito Criminal, Área I, Tipo Branca, 2024/2025. Caderno oficial, questão 71. Gabarito oficial definitivo publicado pela FGV (aplicada em 26/01/2025).
- Edital PCPR n.º 01/2026, retificado em 31/07/2026 - FGV.

**Material local**

- `Curso Alfacon/Quimica.pdf` (quando disponível)

**Atualização/fonte externa**

- [Portal FGV Conhecimento - concursos aplicados](https://conhecimento.fgv.br/concursos) - usado para localizar cadernos oficiais e gabaritos definitivos das provas citadas acima.

> Regra de uso: este capítulo reescreve e organiza o conteúdo em linguagem própria. As questões citadas são reais, com fonte, ano e gabarito oficial conferidos; onde não há questão real disponível, a lacuna está registrada explicitamente.
