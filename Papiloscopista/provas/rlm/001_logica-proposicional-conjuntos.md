# Questões - Lógica proposicional e conjuntos

> Depois de clicar em **Checar resposta**, a alternativa fica salva neste navegador e entra no desempenho do tema.

**Itens neste banco:** 4 questões (3 questões oficiais FGV com fonte e gabarito conferidos + 1 questão autoral no padrão FGV).

## Fontes reais usadas neste banco

- FGV, PCMG 2024, Perito Criminal Área I, Tipo 1. Gabarito definitivo publicado pela FGV.
- FGV, PCAM 2021, Investigador de Polícia - 4ª Classe, Tipo 1. Gabarito definitivo publicado pela FGV.

<div class="quiz-card" data-answer="A">
<p class="quiz-source">FGV - PCMG Perito Criminal Área I, Tipo 1, 2024, questão 11 (gabarito oficial: A)</p>
<p><strong>1. Uma lei penal fictícia estabelece o seguinte: "É crime praticar qualquer ato que gere dano a outra pessoa e ocorra de forma premeditada ou com intenção de lucro." Com base no que é estabelecido textualmente por esta lei e de acordo com os fundamentos da lógica proposicional, é correto concluir que</strong></p>
<div class="quiz-options">
<label class="quiz-option"><input type="radio" name="fgv-007-pcmg-q11" value="A"> A. um indivíduo que aja premeditadamente e cause dano a outra sem intenção de lucro comete crime.</label>
<label class="quiz-option"><input type="radio" name="fgv-007-pcmg-q11" value="B"> B. um indivíduo que cause a outrem dano não premeditado e sem intenção de lucro não poderá ser criminalizado.</label>
<label class="quiz-option"><input type="radio" name="fgv-007-pcmg-q11" value="C"> C. um indivíduo que cause a outrem dano não premeditado e sem intenção de lucro deverá ser criminalizado.</label>
<label class="quiz-option"><input type="radio" name="fgv-007-pcmg-q11" value="D"> D. apenas atos premeditados e que gerem lucro são considerados crime.</label>
<label class="quiz-option"><input type="radio" name="fgv-007-pcmg-q11" value="E"> E. não há crime se o dano causado a outrem não gerar lucro, independentemente de premeditação.</label>
</div>
<button class="quiz-check" type="button">Checar resposta</button>
<div class="quiz-feedback" hidden>
<p><strong>Resposta: A.</strong> Fonte: FGV PCMG Perito Criminal 2024, questão 11. Gabarito oficial: A.</p>
<p><strong>Como pensar:</strong> Traduza a lei para símbolos: D = causa dano, P = premeditado, L = intenção de lucro. Crime = D ∧ (P ∨ L). Teste cada alternativa contra essa fórmula.</p>
<p><strong>Por que a A deve ser marcada:</strong> Causa dano (D=V), premeditado (P=V), sem lucro (L=F): D ∧ (P∨L) = V ∧ (V∨F) = V → é crime. Aplicação direta e válida da regra.</p>
<ul class="quiz-explain">
<li><strong>A.</strong> <strong>Correta.</strong> Aplicação direta da regra: satisfaz D ∧ (P ∨ L).</li>
<li><strong>B.</strong> <strong>Incorreta.</strong> A lei só dá uma condição suficiente para crime; não garante que fora dela não há crime (isso exigiria a recíproca, não afirmada).</li>
<li><strong>C.</strong> <strong>Incorreta.</strong> Pelo mesmo motivo de B, mas na direção oposta — também exige a recíproca não garantida.</li>
<li><strong>D.</strong> <strong>Incorreta.</strong> Troca o "ou" da lei por "e", exigindo premeditação e lucro simultâneos.</li>
<li><strong>E.</strong> <strong>Incorreta.</strong> Ignora que premeditação sozinha já satisfaz a regra, mesmo sem lucro.</li>
</ul>
<p><strong>Pegadinha principal:</strong> B e C tratam uma condição suficiente ("se X, é crime") como se fosse também necessária ("só é crime se X") — a lei não afirma isso.</p>
</div>
</div>

<div class="quiz-card" data-answer="E">
<p class="quiz-source">FGV - PCMG Perito Criminal Área I, Tipo 1, 2024, questão 20 (gabarito oficial: E)</p>
<p><strong>2. Um crime financeiro foi cometido em uma empresa, e o perito criminal precisa determinar se o gerente participou do desvio de verba. Os seguintes fatos foram apurados: Se o gerente tivesse aprovado a transação suspeita, então ela deveria ter sido registrada no sistema até o dia 15. A transação não foi registrada no sistema até o dia 15. Se a transação não foi registrada no sistema até o dia 15, então o gerente não a aprovou. Com base nessas informações, o perito pode concluir corretamente que</strong></p>
<div class="quiz-options">
<label class="quiz-option"><input type="radio" name="fgv-007-pcmg-q20" value="A"> A. o gerente aprovou a transação suspeita, mas alguém falhou em registrá-la.</label>
<label class="quiz-option"><input type="radio" name="fgv-007-pcmg-q20" value="B"> B. a transação suspeita foi registrada após o dia 15.</label>
<label class="quiz-option"><input type="radio" name="fgv-007-pcmg-q20" value="C"> C. não é possível determinar se o gerente aprovou a transação.</label>
<label class="quiz-option"><input type="radio" name="fgv-007-pcmg-q20" value="D"> D. o gerente não aprovou a transação suspeita, mas alguém a registrou em alguma data posterior ao dia 15.</label>
<label class="quiz-option"><input type="radio" name="fgv-007-pcmg-q20" value="E"> E. o gerente não aprovou a transação suspeita.</label>
</div>
<button class="quiz-check" type="button">Checar resposta</button>
<div class="quiz-feedback" hidden>
<p><strong>Resposta: E.</strong> Fonte: FGV PCMG Perito Criminal 2024, questão 20. Gabarito oficial: E.</p>
<p><strong>Como pensar:</strong> G = gerente aprovou; R = registrada até dia 15. Premissa 1: G→R. Premissa 2: ~R. Aplique modus tollens: G→R verdadeira e ~R verdadeira, logo ~G.</p>
<p><strong>Por que a E deve ser marcada:</strong> Modus tollens sobre a premissa 1 com a premissa 2 (~R) conclui ~G (o gerente não aprovou) — confirmado diretamente pela premissa 3, que é a contrapositiva da premissa 1.</p>
<ul class="quiz-explain">
<li><strong>A.</strong> <strong>Incorreta.</strong> Inventa informação (falha de registro) que as premissas não fornecem.</li>
<li><strong>B.</strong> <strong>Incorreta.</strong> Contradiz a premissa 2, que afirma que não foi registrada até o dia 15 (nada se diz sobre registro posterior).</li>
<li><strong>C.</strong> <strong>Incorreta.</strong> É possível determinar, por modus tollens.</li>
<li><strong>D.</strong> <strong>Incorreta.</strong> Acerta a conclusão sobre o gerente, mas inventa um registro posterior não afirmado pelas premissas.</li>
<li><strong>E.</strong> <strong>Correta.</strong> Única conclusão que decorre estritamente das três premissas.</li>
</ul>
<p><strong>Pegadinha principal:</strong> A e D chegam perto da lógica correta, mas acrescentam informação extra que as premissas não garantem — atenção a alternativas que "parecem completar a história".</p>
</div>
</div>

<div class="quiz-card" data-answer="A">
<p class="quiz-source">FGV - PCAM 2021, Investigador de Polícia - 4ª Classe, Tipo 1, questão 11 (gabarito oficial: A)</p>
<p><strong>3. Considere a afirmação: "Se Jonas é um soldado então é forte". A negação dessa afirmação é</strong></p>
<div class="quiz-options">
<label class="quiz-option"><input type="radio" name="fgv-007-pcam-q11" value="A"> A. Jonas é um soldado e não é forte.</label>
<label class="quiz-option"><input type="radio" name="fgv-007-pcam-q11" value="B"> B. Se Jonas não é um soldado então é forte.</label>
<label class="quiz-option"><input type="radio" name="fgv-007-pcam-q11" value="C"> C. Se Jonas é um soldado então não é forte.</label>
<label class="quiz-option"><input type="radio" name="fgv-007-pcam-q11" value="D"> D. Se Jonas não é um soldado então não é forte.</label>
<label class="quiz-option"><input type="radio" name="fgv-007-pcam-q11" value="E"> E. Se Jonas não é forte então não é um soldado.</label>
</div>
<button class="quiz-check" type="button">Checar resposta</button>
<div class="quiz-feedback" hidden>
<p><strong>Resposta: A.</strong> Fonte: FGV PCAM Investigador 2021, questão 11. Gabarito oficial: A.</p>
<p><strong>Como pensar:</strong> A negação de "P → Q" é sempre "P ∧ ~Q" — nunca outra condicional.</p>
<p><strong>Por que a A deve ser marcada:</strong> "Jonas é um soldado e não é forte" = P ∧ ~Q, a forma correta de negar uma condicional.</p>
<ul class="quiz-explain">
<li><strong>A.</strong> <strong>Correta.</strong> Formato correto de negação: afirma o antecedente, nega o consequente.</li>
<li><strong>B.</strong> <strong>Incorreta.</strong> Continua sendo uma condicional (inversa alterada); negação de condicional nunca é outra condicional.</li>
<li><strong>C.</strong> <strong>Incorreta.</strong> Também é uma condicional, não uma conjunção.</li>
<li><strong>D.</strong> <strong>Incorreta.</strong> É a inversa da proposição original — não equivalente nem negação.</li>
<li><strong>E.</strong> <strong>Incorreta.</strong> É a contrapositiva da proposição original — logicamente equivalente a ela, portanto o oposto de uma negação.</li>
</ul>
<p><strong>Pegadinha principal:</strong> E é armadilha clássica: por ser a contrapositiva, tem exatamente o mesmo valor lógico da afirmação original — quem confunde contrapositiva com negação marca essa errada.</p>
</div>
</div>

## Questão autoral de reforço

<div class="quiz-card" data-answer="B">
<p class="quiz-source">Questão autoral FGV/PCPR - padrão FGV validado por provas policiais e periciais</p>
<p><strong>4. A negação lógica de &#39;Todos os vestígios foram fotografados&#39; é:</strong></p>
<div class="quiz-options">
<label class="quiz-option"><input type="radio" name="fgv-007" value="A"> A. Nenhum vestígio foi fotografado.</label>
<label class="quiz-option"><input type="radio" name="fgv-007" value="B"> B. Algum vestígio não foi fotografado.</label>
<label class="quiz-option"><input type="radio" name="fgv-007" value="C"> C. Todos os vestígios não foram fotografados.</label>
<label class="quiz-option"><input type="radio" name="fgv-007" value="D"> D. Algum vestígio foi fotografado.</label>
<label class="quiz-option"><input type="radio" name="fgv-007" value="E"> E. Não existem vestígios.</label>
</div>
<button class="quiz-check" type="button">Checar resposta</button>
<div class="quiz-feedback" hidden>
<p><strong>Resposta: B.</strong> Questão autoral no padrão FGV; não é reprodução literal de caderno oficial.</p>
<p><strong>Como pensar:</strong> Negar 'todo' exige encontrar pelo menos uma exceção.</p>
<p><strong>Por que a alternativa correta está certa:</strong> Basta um vestígio não fotografado para tornar falsa a afirmação original.</p>
<ul class="quiz-explain">
<li><strong>A.</strong> Incorreta. É negação forte demais.</li>
<li><strong>B.</strong> Correta. 'Algum não' é a negação de 'todo'.</li>
<li><strong>C.</strong> Incorreta. A redação é ambígua e tende a negar todos, não apenas um.</li>
<li><strong>D.</strong> Incorreta. Pode ser verdadeiro junto com a frase original.</li>
<li><strong>E.</strong> Incorreta. Altera a existência do conjunto, não a propriedade.</li>
</ul>
<p><strong>Pegadinha principal:</strong> Trocar 'algum não' por 'nenhum'.</p>
</div>
</div>

## Próxima ampliação

- Buscar questão real sobre operações com conjuntos (união, interseção, inclusão-exclusão com números).
- Buscar questão real sobre diagrama de Venn com três conjuntos.
- Adicionar questões reais de PCRJ, PCRN e PCPI assim que os cadernos forem localizados e o gabarito conferido.
