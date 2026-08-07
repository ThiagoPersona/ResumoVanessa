# 007 - Lógica proposicional e conjuntos

## Leitura rápida

- Lógica proposicional trabalha com frases (proposições) que só podem ser verdadeiras ou falsas, nunca as duas coisas ao mesmo tempo, e estuda como combiná-las com conectivos.
- O ponto que mais derruba candidato é a **negação do condicional**: a negação de "se P então Q" não é "se não P então não Q" — é "P e não Q". Errar isso sozinho já invalida boa parte das questões de lógica de concurso.
- Conjuntos e lógica proposicional se conectam: quantificadores ("todo", "algum", "nenhum") descrevem relações entre conjuntos, e a fórmula de inclusão-exclusão (|A∪B| = |A|+|B|-|A∩B|) resolve a maioria dos problemas de conjuntos com números.
- A FGV, nas provas reais localizadas, prefere aplicar lógica a um cenário concreto (uma lei fictícia, um caso investigativo) em vez de perguntar a tabela-verdade pura — por isso o método de tradução do enunciado para símbolos importa mais que decorar tabela.

## Por que cai

Lógica proposicional e conjuntos é a porta de entrada da disciplina RLM: praticamente todo problema mais complexo (de contagem, probabilidade, geometria com condições) usa, por baixo, os mesmos mecanismos de negação, condicional e classificação por conjuntos. Nas provas reais localizadas, a FGV aplicou lógica proposicional a cenários de investigação — não como exercício abstrato, mas como ferramenta para concluir algo a partir de premissas dadas.

| Prova (fonte oficial conferida) | Ano | O que caiu neste tema |
|---|---:|---|
| FGV PCMG Perito Criminal Área I, Tipo 1 | 2024 | Q11: aplicação de conjunção/disjunção numa lei penal fictícia (interpretar "e"/"ou" com rigor lógico). Q20: encadeamento de condicionais para concluir por modus tollens, em caso de fraude financeira. |
| FGV PCAM Investigador de Polícia, Tipo 1 | 2021 | Q11: negação de uma proposição condicional. |

## Conteúdo completo orientado ao edital

### Proposições e valores lógicos

Uma proposição é toda frase declarativa que pode ser classificada como **verdadeira (V)** ou **falsa (F)**, nunca as duas coisas nem nenhuma delas. "Curitiba é a capital do Paraná" é proposição (V); "Feche a porta!" e "Que horas são?" não são proposições, porque não afirmam algo que possa ser julgado verdadeiro ou falso.

### Os conectivos lógicos e suas tabelas-verdade

Proposições simples se combinam em proposições compostas por meio de conectivos. Cada conectivo tem uma tabela-verdade fixa — a base de tudo neste tema:

**Negação (~P ou ¬P)**: inverte o valor lógico.

| P | ~P |
|---|---|
| V | F |
| F | V |

**Conjunção (P ∧ Q, "P e Q")**: só é verdadeira quando **ambas** as partes são verdadeiras.

| P | Q | P ∧ Q |
|---|---|---|
| V | V | V |
| V | F | F |
| F | V | F |
| F | F | F |

**Disjunção inclusiva (P ∨ Q, "P ou Q")**: é verdadeira quando **pelo menos uma** das partes é verdadeira; só é falsa quando as duas são falsas.

| P | Q | P ∨ Q |
|---|---|---|
| V | V | V |
| V | F | V |
| F | V | V |
| F | F | F |

**Disjunção exclusiva (P ⊻ Q, "ou P ou Q", nunca os dois)**: verdadeira quando exatamente uma das partes é verdadeira.

| P | Q | P ⊻ Q |
|---|---|---|
| V | V | F |
| V | F | V |
| F | V | V |
| F | F | F |

**Condicional (P → Q, "se P então Q")**: só é falsa quando P é verdadeira e Q é falsa. Em todos os outros casos é verdadeira — inclusive quando P é falsa (esse é o ponto que mais confunde: uma condicional com antecedente falso é sempre considerada verdadeira, por convenção lógica).

| P | Q | P → Q |
|---|---|---|
| V | V | V |
| V | F | F |
| F | V | V |
| F | F | V |

**Bicondicional (P ↔ Q, "P se e somente se Q")**: verdadeira quando as duas partes têm o **mesmo** valor lógico (ambas V ou ambas F).

| P | Q | P ↔ Q |
|---|---|---|
| V | V | V |
| V | F | F |
| F | V | F |
| F | F | V |

### Negações: a parte que mais derruba candidato

| Proposição original | Negação correta | Erro comum |
|---|---|---|
| P ∧ Q | ~P ∨ ~Q (nega e troca "e" por "ou") | Negar só uma parte, ou trocar por "e" |
| P ∨ Q | ~P ∧ ~Q (nega e troca "ou" por "e") | Trocar por "ou" ao negar |
| P → Q | P ∧ ~Q (afirma P e nega Q) | Fazer "~P → ~Q" (isso NÃO é a negação, é outra condicional) |
| Todo A é B | Algum A não é B | Achar que a negação é "nenhum A é B" |
| Algum A é B | Nenhum A é B | Achar que a negação é "algum A não é B" |

As duas primeiras linhas (negação de conjunção e de disjunção) são conhecidas como **Leis de De Morgan**: negar sempre troca o conectivo (e↔ou) e nega cada parte.

A negação do condicional é a mais cobrada e a mais errada: candidato tende a negar "se P então Q" como "se não P então não Q" (isso é a **inversa**, uma proposição logicamente diferente) ou como "se P então não Q" — nenhuma das duas é a negação correta. A negação de "P → Q" é sempre "P ∧ ~Q": afirma-se o antecedente e nega-se o consequente, eliminando o conectivo condicional por completo.

### Equivalências lógicas essenciais

| Proposição | Equivalente lógico | Nome/uso |
|---|---|---|
| P → Q | ~Q → ~P | Contrapositiva — sempre equivalente à condicional original |
| P → Q | ~P ∨ Q | Forma alternativa da condicional |
| P ↔ Q | (P → Q) ∧ (Q → P) | Bicondicional é a condicional "nos dois sentidos" |

A contrapositiva é a ferramenta mais usada em prova para "dar a volta" num argumento: se "P → Q" é verdadeira, "~Q → ~P" também é, automaticamente — sem precisar checar de novo.

**Atenção**: a **inversa** (~P → ~Q) e a **recíproca** (Q → P) de uma condicional **não** são logicamente equivalentes à condicional original — só a contrapositiva é. Essa é uma pegadinha clássica de prova.

### Argumentos válidos: as formas de concluir corretamente

| Nome | Estrutura | Exemplo |
|---|---|---|
| Modus ponens | P → Q é verdadeira; P é verdadeira; logo, Q é verdadeira | Se chove, a rua molha. Choveu. Logo, a rua molhou. |
| Modus tollens | P → Q é verdadeira; Q é falsa; logo, P é falsa | Se chove, a rua molha. A rua não molhou. Logo, não choveu. |
| Silogismo hipotético | P → Q e Q → R são verdadeiras; logo, P → R | Se A, então B. Se B, então C. Logo, se A, então C. |

Modus tollens é especialmente comum em questões de investigação/prova (como a questão real sobre fraude financeira comentada abaixo): parte-se da negação do consequente para concluir a negação do antecedente.

### Quantificadores e sua relação com conjuntos

Frases com "todo", "algum" e "nenhum" descrevem relações entre conjuntos e têm negações específicas:

| Quantificador | Significado em termos de conjunto | Negação |
|---|---|---|
| Todo A é B | O conjunto A está contido no conjunto B | Algum A não é B |
| Algum A é B | A interseção entre A e B não é vazia | Nenhum A é B |
| Nenhum A é B | A interseção entre A e B é vazia | Algum A é B |

### Conjuntos: operações e a fórmula de inclusão-exclusão

Um **conjunto** é uma coleção de elementos distintos. As operações básicas:

| Operação | Símbolo | Significado |
|---|---|---|
| Pertence | ∈ | O elemento está no conjunto |
| Subconjunto | ⊂ | Todos os elementos de A também estão em B |
| União | A ∪ B | Elementos que estão em A ou em B (ou nos dois) |
| Interseção | A ∩ B | Elementos que estão em A e em B ao mesmo tempo |
| Diferença | A - B | Elementos que estão em A, mas não em B |
| Complementar | A^c | Elementos que não estão em A (dentro de um universo definido) |

A fórmula mais cobrada em problemas de conjuntos com quantidades (número de pessoas, itens, casos) é a de **inclusão-exclusão**, para dois conjuntos:

**|A ∪ B| = |A| + |B| - |A ∩ B|**

Isso evita contar duas vezes quem está nos dois grupos ao mesmo tempo. Para três conjuntos, a fórmula se expande:

**|A ∪ B ∪ C| = |A| + |B| + |C| - |A∩B| - |A∩C| - |B∩C| + |A∩B∩C|**

O diagrama de Venn (círculos sobrepostos) é a ferramenta prática para resolver esses problemas: preencher primeiro a interseção mais interna (quem está em todos os grupos), depois as interseções de dois, depois o que sobra de cada conjunto isolado.

## Prioridades FGV dentro deste tema

| Prioridade | Por que é prioridade | Como treinar |
|---|---|---|
| Negar corretamente uma condicional (P ∧ ~Q, não a inversa) | Evidenciado na questão real PCAM Q11 | Para cada condicional, escreva a negação como "afirma P, nega Q" antes de olhar as alternativas |
| Interpretar "e"/"ou" com rigor lógico dentro de um enunciado jurídico ou técnico | Evidenciado na questão real PCMG Q11 | Reescreva a regra como fórmula (D ∧ (P ∨ L)) antes de testar cada alternativa |
| Aplicar modus tollens em cadeia de premissas | Evidenciado na questão real PCMG Q20 | Identifique a condicional, localize a negação do consequente nas premissas, conclua a negação do antecedente |
| Não confundir contrapositiva (válida) com inversa/recíproca (inválidas) | Base teórica do tema | Escreva as três formas (contrapositiva, inversa, recíproca) de uma condicional dada e teste qual é logicamente idêntica à original |

## Diferenças que a banca costuma trocar

| Conceito A | Conceito B | Como a banca troca | Como não cair |
|---|---|---|---|
| Negação de "P → Q" (= P ∧ ~Q) | Inversa (~P → ~Q) | Ambas "parecem" ser o oposto da condicional original | Lembre: negação de condicional nunca é outra condicional — é sempre uma conjunção |
| Contrapositiva (~Q → ~P, válida) | Recíproca (Q → P, inválida) | As quatro formas (original, contrapositiva, inversa, recíproca) aparecem juntas em alternativas | Só a contrapositiva é logicamente equivalente à condicional original |
| "Todo A é B" negado como "algum A não é B" | Negado (errado) como "nenhum A é B" | Ambas soam como "o oposto de todo" | "Nenhum" nega "algum", não "todo" — basta uma exceção para negar "todo" |
| |A∪B| = \|A\|+\|B\|-\|A∩B\| | |A∪B| = \|A\|+\|B\| (sem subtrair interseção) | Problema não deixa claro se há sobreposição entre os grupos | Sempre pergunte se pode haver elemento nos dois conjuntos ao mesmo tempo antes de somar direto |

## Como caiu na prova: questões comentadas

**Fonte: FGV, PCMG Perito Criminal Área I, Tipo 1, 2024, questão 11 (gabarito oficial: A)**

> Uma lei penal fictícia estabelece o seguinte: "É crime praticar qualquer ato que gere dano a outra pessoa e ocorra de forma premeditada ou com intenção de lucro." Com base no que é estabelecido textualmente por esta lei e de acordo com os fundamentos da lógica proposicional, é correto concluir que
>
> (A) um indivíduo que aja premeditadamente e cause dano a outra sem intenção de lucro comete crime.
> (B) um indivíduo que cause a outrem dano não premeditado e sem intenção de lucro não poderá ser criminalizado.
> (C) um indivíduo que cause a outrem dano não premeditado e sem intenção de lucro deverá ser criminalizado.
> (D) apenas atos premeditados e que gerem lucro são considerados crime.
> (E) não há crime se o dano causado a outrem não gerar lucro, independentemente de premeditação.

1. **Traduza a lei para símbolos**: seja D = causa dano, P = premeditado, L = intenção de lucro. A lei diz: crime = D ∧ (P ∨ L).
2. **Teste a alternativa A**: causa dano (D=V), premeditado (P=V), sem intenção de lucro (L=F). D ∧ (P ∨ L) = V ∧ (V ∨ F) = V ∧ V = V → é crime. A alternativa afirma exatamente essa aplicação direta da regra — correta.
3. **Descarte B e C**: a lei só afirma uma **condição suficiente** para crime (se D ∧ (P∨L), então é crime); ela não afirma que essa é a **única** forma de crime. Concluir "não poderá ser criminalizado" (B) ou "deverá ser criminalizado" (C) quando a condição não se cumpre exige a **recíproca** da regra, que a lei não garante.
4. **Descarte D**: troca o "ou" da lei por "e", exigindo premeditação **e** lucro ao mesmo tempo — não é o que a lei diz.
5. **Descarte E**: ignora que premeditação sozinha (sem lucro) já satisfaz P ∨ L, contradizendo a própria lei.
6. **A é o gabarito**, única aplicação direta e válida da regra tal como está escrita.

**Fonte: FGV, PCMG Perito Criminal Área I, Tipo 1, 2024, questão 20 (gabarito oficial: E)**

> Um crime financeiro foi cometido em uma empresa, e o perito criminal precisa determinar se o gerente participou do desvio de verba. Os seguintes fatos foram apurados: Se o gerente tivesse aprovado a transação suspeita, então ela deveria ter sido registrada no sistema até o dia 15. A transação não foi registrada no sistema até o dia 15. Se a transação não foi registrada no sistema até o dia 15, então o gerente não a aprovou. Com base nessas informações, o perito pode concluir corretamente que
>
> (A) o gerente aprovou a transação suspeita, mas alguém falhou em registrá-la.
> (B) a transação suspeita foi registrada após o dia 15.
> (C) não é possível determinar se o gerente aprovou a transação.
> (D) o gerente não aprovou a transação suspeita, mas alguém a registrou em alguma data posterior ao dia 15.
> (E) o gerente não aprovou a transação suspeita.

1. **Identifique as premissas em símbolos**: G = gerente aprovou; R = registrada até dia 15. Premissa 1: G → R. Premissa 2: ~R (não foi registrada). Premissa 3: ~R → ~G (que é, na verdade, a contrapositiva da premissa 1, reforçando a mesma informação).
2. **Aplique modus tollens** na premissa 1 com a premissa 2: G → R é verdadeira, e R é falsa (~R), logo G é falsa (~G) — o gerente não aprovou.
3. **Confirme pela premissa 3 diretamente**: ~R → ~G, e temos ~R, logo ~G, por modus ponens direto.
4. **Descarte A, B, C e D**: nenhuma delas decorre logicamente das premissas — A e D inventam informação (alguém registrou depois, alguém falhou) que as premissas não fornecem; B contradiz a premissa 2; C ignora que a conclusão É possível de se determinar.
5. **E é o gabarito**, a única conclusão que decorre estritamente das três premissas.

**Fonte: FGV, PCAM Investigador de Polícia, Tipo 1, 2021, questão 11 (gabarito oficial: A)**

> Considere a afirmação: "Se Jonas é um soldado então é forte". A negação dessa afirmação é
>
> (A) Jonas é um soldado e não é forte.
> (B) Se Jonas não é um soldado então é forte.
> (C) Se Jonas é um soldado então não é forte.
> (D) Se Jonas não é um soldado então não é forte.
> (E) Se Jonas não é forte então não é um soldado.

1. **Identifique a estrutura**: P = "Jonas é soldado", Q = "Jonas é forte". A afirmação é P → Q.
2. **Aplique a regra de negação de condicional**: a negação de "P → Q" é sempre "P ∧ ~Q" — nunca outra condicional.
3. **Descarte B, C, D e E**: todas mantêm a estrutura "se... então...", ou seja, continuam sendo condicionais — nenhuma delas pode ser a negação de uma condicional. E, além disso, é a contrapositiva de P → Q (logicamente equivalente à original, não sua negação).
4. **A é a única no formato correto**: "Jonas é um soldado e não é forte" = P ∧ ~Q — a negação certa.

## Pegadinhas da banca

- Negar condicional como se fosse outra condicional (inversa ou recíproca), em vez de virar conjunção.
- Concluir a recíproca ou a inversa de uma regra, achando que são equivalentes à condicional original — só a contrapositiva é.
- Tratar uma condição suficiente ("se X, então crime") como se também fosse necessária ("só é crime se X").
- Trocar "e" por "ou" (ou o contrário) ao interpretar uma regra composta.
- Somar dois conjuntos sem subtrair a interseção, contando elementos repetidos.
- Confundir a negação de "todo" com "nenhum", ou de "algum" com "algum não".

## Como resolver questões

1. Traduza o enunciado para símbolos lógicos (P, Q, R...) antes de julgar qualquer alternativa.
2. Para negar, use as regras fixas: negação de "e" vira "ou" com as partes negadas (e vice-versa); negação de condicional vira "afirma P, nega Q".
3. Para concluir a partir de premissas, procure modus ponens (afirma o antecedente), modus tollens (nega o consequente) ou silogismo hipotético (encadeamento de condicionais).
4. Em problemas de conjuntos com números, desenhe o diagrama de Venn e preencha de dentro para fora (interseção total primeiro).
5. Desconfie de alternativas que "soam plausíveis no mundo real", mas exigem uma recíproca ou inversa não garantida pelas premissas.

## Lacunas honestas

- Ainda não há questão real localizada especificamente sobre operações com conjuntos (união, interseção, diferença, inclusão-exclusão com números) neste levantamento — a teoria está coberta acima, falta a camada de prática com questão real conferida.
- Ainda não há questão real localizada sobre diagramas de Venn com três conjuntos.
- Questões reais sobre lógica de argumentação com premissas categóricas (silogismos com "todo/algum/nenhum" puros, sem contexto de caso) ainda não foram localizadas para este item.

## Checklist de revisão

- [ ] Sei montar a tabela-verdade dos seis conectivos (negação, conjunção, disjunção inclusiva/exclusiva, condicional, bicondicional).
- [ ] Sei negar corretamente conjunção, disjunção e condicional.
- [ ] Sei diferenciar contrapositiva (válida) de inversa e recíproca (inválidas).
- [ ] Sei aplicar modus ponens, modus tollens e silogismo hipotético.
- [ ] Sei negar corretamente "todo", "algum" e "nenhum".
- [ ] Sei usar a fórmula de inclusão-exclusão para dois e para três conjuntos.
- [ ] Resolvi as três questões reais comentadas deste tema sem olhar o gabarito antes.
- [ ] Marquei as lacunas de fonte registradas acima.

## Questões relacionadas

- [Resolver questões deste tema](../../provas/rlm/001_logica-proposicional-conjuntos.md)

## Referências

**Prova/FGV**

- FGV. PCMG 2024 - Perito Criminal Área I, Tipo 1. Caderno oficial, questões 11 e 20. Gabarito definitivo publicado pela FGV.
- FGV. PCAM 2021 - Investigador de Polícia, 4ª Classe, Tipo 1. Caderno oficial, questão 11. Gabarito definitivo publicado pela FGV.
- Edital PCPR n.º 01/2026, retificado em 31/07/2026 - FGV.

**Material local**

- `Materiais QB/RLM/raciocinio-logico-mapas-do-concursado.pdf`
- `Materiais QB/Matematica/`

**Atualização/fonte externa**

- [Portal FGV Conhecimento - concursos aplicados](https://conhecimento.fgv.br/concursos) - usado para localizar cadernos oficiais e gabaritos definitivos das provas citadas acima.

> Regra de uso: este capítulo reescreve e organiza o conteúdo em linguagem própria. As questões citadas são reais, com fonte, ano e gabarito oficial conferidos; onde não há questão real disponível, a lacuna está registrada explicitamente.
