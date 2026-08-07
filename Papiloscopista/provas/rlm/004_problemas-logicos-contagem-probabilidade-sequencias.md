# Questões - Problemas lógicos, contagem, probabilidade e sequências

> Depois de clicar em **Checar resposta**, a alternativa fica salva neste navegador e entra no desempenho do tema.

**Itens neste banco:** 4 questões (3 questões oficiais FGV com fonte e gabarito conferidos + 1 questão autoral no padrão FGV).

## Fontes reais usadas neste banco

- FGV, PCMG 2024, Perito Criminal Área I, Tipo 1. Gabarito definitivo publicado pela FGV.

<div class="quiz-card" data-answer="C">
<p class="quiz-source">FGV - PCMG Perito Criminal Área I, Tipo 1, 2024, questão 12 (gabarito oficial: C)</p>
<p><strong>1. Um perito criminal precisa analisar um conjunto de quatro amostras coletadas de uma cena de crime. As amostras incluem os seguintes itens distintos: cinco fibras de tecido; três fios de cabelo; dois fragmentos de vidro; e uma amostra de solo. Para realizar a análise, ele precisa escolher exatamente três itens entre as amostras, mas cada item deve pertencer a uma amostra diferente. O número total de diferentes trios de itens que o perito pode escolher é</strong></p>
<div class="quiz-options">
<label class="quiz-option"><input type="radio" name="fgv-010-pcmg-q12" value="A"> A. 59.</label>
<label class="quiz-option"><input type="radio" name="fgv-010-pcmg-q12" value="B"> B. 60.</label>
<label class="quiz-option"><input type="radio" name="fgv-010-pcmg-q12" value="C"> C. 61.</label>
<label class="quiz-option"><input type="radio" name="fgv-010-pcmg-q12" value="D"> D. 62.</label>
<label class="quiz-option"><input type="radio" name="fgv-010-pcmg-q12" value="E"> E. 63.</label>
</div>
<button class="quiz-check" type="button">Checar resposta</button>
<div class="quiz-feedback" hidden>
<p><strong>Resposta: C.</strong> Fonte: FGV PCMG Perito Criminal 2024, questão 12. Gabarito oficial: C.</p>
<p><strong>Como pensar:</strong> Determine quais 3 das 4 categorias entram (C(4,3)=4 combinações), calcule o produto de opções dentro de cada combinação, e some os quatro resultados.</p>
<p><strong>Por que a C deve ser marcada:</strong> tecido+cabelo+vidro=5×3×2=30; tecido+cabelo+solo=5×3×1=15; tecido+vidro+solo=5×2×1=10; cabelo+vidro+solo=3×2×1=6. Soma: 30+15+10+6=61.</p>
<ul class="quiz-explain">
<li><strong>A.</strong> <strong>Incorreta.</strong> Erro de soma ou de uma das multiplicações.</li>
<li><strong>B.</strong> <strong>Incorreta.</strong> Erro de soma ou de uma das multiplicações.</li>
<li><strong>C.</strong> <strong>Correta.</strong> Soma completa e correta das quatro combinações de categorias.</li>
<li><strong>D.</strong> <strong>Incorreta.</strong> Erro de soma ou de uma das multiplicações.</li>
<li><strong>E.</strong> <strong>Incorreta.</strong> Erro de soma ou de uma das multiplicações.</li>
</ul>
<p><strong>Pegadinha principal:</strong> Esquecer que existem quatro combinações possíveis de categorias (não apenas uma) e calcular só uma delas, ou esquecer de somar todas ao final.</p>
</div>
</div>

<div class="quiz-card" data-answer="D">
<p class="quiz-source">FGV - PCMG Perito Criminal Área I, Tipo 1, 2024, questão 13 (gabarito oficial: D)</p>
<p><strong>2. Durante as investigações de um sinistro, foram obtidos exatos 20 minutos e 15 segundos contínuos de gravação de uma câmera de segurança. Por um dano na câmera, ao longo de toda a gravação, alternam-se 2 minutos de imagens nítidas com períodos variáveis de imagens sem qualquer nitidez. O primeiro trecho sem nitidez dura 1 segundo e cada um dos demais dura o dobro do tempo do trecho defeituoso precedente. Com base nessas informações, é correto concluir que o tempo total de imagens sem nitidez nessa gravação é de exatamente</strong></p>
<div class="quiz-options">
<label class="quiz-option"><input type="radio" name="fgv-010-pcmg-q13" value="A"> A. 4 minutos.</label>
<label class="quiz-option"><input type="radio" name="fgv-010-pcmg-q13" value="B"> B. 4 minutos e 3 segundos.</label>
<label class="quiz-option"><input type="radio" name="fgv-010-pcmg-q13" value="C"> C. 4 minutos e 7 segundos.</label>
<label class="quiz-option"><input type="radio" name="fgv-010-pcmg-q13" value="D"> D. 4 minutos e 15 segundos.</label>
<label class="quiz-option"><input type="radio" name="fgv-010-pcmg-q13" value="E"> E. 5 minutos e 31 segundos.</label>
</div>
<button class="quiz-check" type="button">Checar resposta</button>
<div class="quiz-feedback" hidden>
<p><strong>Resposta: D.</strong> Fonte: FGV PCMG Perito Criminal 2024, questão 13. Gabarito oficial: D.</p>
<p><strong>Como pensar:</strong> Os trechos sem nitidez formam uma PG de razão 2 (1,2,4,8,16,32,64,128...). Some blocos claros (120s) e defeitos até bater com o total de 1215s.</p>
<p><strong>Por que a D deve ser marcada:</strong> Após 8 blocos claros (960s) e 7 defeitos (1+2+4+8+16+32+64=127s), total=1087s; restam 128s, exatamente o 8º defeito (2⁷=128s). Tempo sem nitidez total: 127+128=255s=4min15s.</p>
<ul class="quiz-explain">
<li><strong>A.</strong> <strong>Incorreta.</strong> Soma incompleta da PG.</li>
<li><strong>B.</strong> <strong>Incorreta.</strong> Soma incompleta da PG.</li>
<li><strong>C.</strong> <strong>Incorreta.</strong> Soma incompleta da PG (para no 7º termo apenas).</li>
<li><strong>D.</strong> <strong>Correta.</strong> Soma completa de todos os trechos defeituosos até o limite exato do tempo total de gravação.</li>
<li><strong>E.</strong> <strong>Incorreta.</strong> Ultrapassa o tempo total disponível de gravação.</li>
</ul>
<p><strong>Pegadinha principal:</strong> Parar de somar a sequência antes do último termo (que pode não estar completo, dependendo de onde a gravação termina) é o erro mais comum — aqui o último termo (128s) coube inteiro, mas é preciso verificar isso, não presumir.</p>
</div>
</div>

<div class="quiz-card" data-answer="D">
<p class="quiz-source">FGV - PCMG Perito Criminal Área I, Tipo 1, 2024, questão 19 (gabarito oficial: D)</p>
<p><strong>3. Um perito criminal está investigando o furto, sem arrombamento, do conteúdo em um cofre que bloqueia automaticamente a sua abertura após três tentativas incorretas e consecutivas de se digitar a senha. A perícia indica que o suspeito tinha um conjunto de 10 sequências possíveis de dígitos no momento do sinistro, sendo apenas uma a senha correta. O perito supõe que o suspeito não tinha qualquer preferência entre as sequências que detinha, e todas teriam a mesma probabilidade de serem escolhidas. Sabendo-se que uma sequência, uma vez utilizada, foi descartada de novas escolhas, a probabilidade de ele conseguir abrir o cofre, antes do bloqueio, por meio da senha correta era</strong></p>
<div class="quiz-options">
<label class="quiz-option"><input type="radio" name="fgv-010-pcmg-q19" value="A"> A. 8,1%.</label>
<label class="quiz-option"><input type="radio" name="fgv-010-pcmg-q19" value="B"> B. 25,0%.</label>
<label class="quiz-option"><input type="radio" name="fgv-010-pcmg-q19" value="C"> C. 27,1%.</label>
<label class="quiz-option"><input type="radio" name="fgv-010-pcmg-q19" value="D"> D. 30,0%.</label>
<label class="quiz-option"><input type="radio" name="fgv-010-pcmg-q19" value="E"> E. 32,1%.</label>
</div>
<button class="quiz-check" type="button">Checar resposta</button>
<div class="quiz-feedback" hidden>
<p><strong>Resposta: D.</strong> Fonte: FGV PCMG Perito Criminal 2024, questão 19. Gabarito oficial: D.</p>
<p><strong>Como pensar:</strong> Como todas as sequências têm a mesma probabilidade e não há reposição, a chance de a senha correta estar entre as 3 primeiras tentativas é 3 (tentativas permitidas) dividido por 10 (total de sequências).</p>
<p><strong>Por que a D deve ser marcada:</strong> 3/10 = 0,30 = 30,0%.</p>
<ul class="quiz-explain">
<li><strong>A.</strong> <strong>Incorreta.</strong> Resultado de cálculo incorreto (ex.: 3×0,9×0,9×0,1 ou similar mal aplicado).</li>
<li><strong>B.</strong> <strong>Incorreta.</strong> Seria 1/4, não corresponde à estrutura do problema (10 sequências, 3 tentativas).</li>
<li><strong>C.</strong> <strong>Incorreta.</strong> Próximo do correto, mas de um cálculo com erro de arredondamento ou fórmula.</li>
<li><strong>D.</strong> <strong>Correta.</strong> Atalho "tentativas permitidas / total de casos" aplicado corretamente.</li>
<li><strong>E.</strong> <strong>Incorreta.</strong> Resultado de cálculo incorreto.</li>
</ul>
<p><strong>Pegadinha principal:</strong> Tentar somar a probabilidade de acertar exatamente na 1ª, na 2ª e na 3ª tentativa separadamente (o que também daria 30%, mas de forma mais longa e sujeita a erro de conta) em vez de usar o atalho direto tentativas/total.</p>
</div>
</div>

## Questão autoral de reforço

<div class="quiz-card" data-answer="E">
<p class="quiz-source">Questão autoral FGV/PCPR - padrão FGV validado por provas policiais e periciais</p>
<p><strong>4. Uma senha provisória deve ter duas letras distintas escolhidas entre A, B e C, seguidas de um algarismo entre 1 e 4. O número de senhas possíveis é:</strong></p>
<div class="quiz-options">
<label class="quiz-option"><input type="radio" name="fgv-010" value="A"> A. 6.</label>
<label class="quiz-option"><input type="radio" name="fgv-010" value="B"> B. 8.</label>
<label class="quiz-option"><input type="radio" name="fgv-010" value="C"> C. 12.</label>
<label class="quiz-option"><input type="radio" name="fgv-010" value="D"> D. 18.</label>
<label class="quiz-option"><input type="radio" name="fgv-010" value="E"> E. 24.</label>
</div>
<button class="quiz-check" type="button">Checar resposta</button>
<div class="quiz-feedback" hidden>
<p><strong>Resposta: E.</strong> Questão autoral no padrão FGV; não é reprodução literal de caderno oficial.</p>
<p><strong>Como pensar:</strong> Use princípio multiplicativo e observe a restrição 'distintas'.</p>
<p><strong>Por que a alternativa correta está certa:</strong> Há 3 escolhas para a primeira letra, 2 para a segunda e 4 para o algarismo: 3 x 2 x 4 = 24.</p>
<ul class="quiz-explain">
<li><strong>A.</strong> Incorreta. Considera apenas as letras.</li>
<li><strong>B.</strong> Incorreta. Ignora parte das combinações das letras.</li>
<li><strong>C.</strong> Incorreta. Trata as duas letras como uma única escolha de 3 possibilidades.</li>
<li><strong>D.</strong> Incorreta. Não aplica corretamente o algarismo.</li>
<li><strong>E.</strong> Correta. Multiplica todas as etapas com a restrição.</li>
</ul>
<p><strong>Pegadinha principal:</strong> Esquecer que a ordem das letras importa na senha.</p>
</div>
</div>

## Próxima ampliação

- Buscar questão real sobre problema de associação lógica com tabela de pistas.
- Buscar questão real sobre progressão aritmética pura.
- Buscar questão real sobre orientação temporal/calendário.
- Adicionar questões reais de PCRJ, PCRN e PCPI assim que os cadernos forem localizados e o gabarito conferido.
