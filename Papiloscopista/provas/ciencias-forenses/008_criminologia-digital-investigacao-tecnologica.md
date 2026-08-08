# Questões - Criminologia digital e investigação tecnológica

> Depois de clicar em **Checar resposta**, a alternativa fica salva neste navegador e entra no desempenho do tema.

**Itens neste banco:** 3 questões (2 questões oficiais FGV com fonte e gabarito conferidos + 1 questão autoral no padrão FGV).

## Foco FGV

Estas questões são autorais e calibradas pelo padrão observado em provas FGV policiais/periciais, especialmente SEAD/AP 2022 Papiloscopista, PCPI 2025, PCMG 2024, PCAM 2021, PCRJ 2021 e PCRN 2020. A finalidade é treinar o raciocínio que a banca costuma exigir, sem copiar caderno oficial inteiro.

## Fontes de padrão

- Questão autoral FGV/PCPR - padrão FGV validado por provas policiais e periciais

## Fontes reais usadas neste banco

- FGV, TCE-SC, 2026. Questão localizada em banco de questões (qconcursos), com gabarito oficial da banca.
- FGV, PC-PI, 2026. Questão localizada em banco de questões (qconcursos), com gabarito oficial da banca.

<div class="quiz-card" data-answer="B">
<p class="quiz-source">FGV - TCE-SC, 2026</p>
<p><strong>1. Após a detecção de um acesso indevido à base de dados de processos sigilosos, o Auditor de TI é convocado para realizar uma análise forense no servidor Linux comprometido. De acordo com o princípio da Ordem de Volatilidade, assinale a opção que deve ser capturada primeiramente, para preservar evidências que podem ser perdidas com o desligamento da máquina.</strong></p>
<div class="quiz-options">
<label class="quiz-option"><input type="radio" name="fgv-026-tcesc-q1" value="A"> A. Arquivos de log de auditoria no disco rígido (SSD).</label>
<label class="quiz-option"><input type="radio" name="fgv-026-tcesc-q1" value="B"> B. Conteúdo da memória RAM e tabelas de roteamento.</label>
<label class="quiz-option"><input type="radio" name="fgv-026-tcesc-q1" value="C"> C. Cópias de segurança (backups) em fita magnética.</label>
<label class="quiz-option"><input type="radio" name="fgv-026-tcesc-q1" value="D"> D. Registro de configurações da BIOS/UEFI.</label>
<label class="quiz-option"><input type="radio" name="fgv-026-tcesc-q1" value="E"> E. Cablagem de rede e topologia física.</label>
</div>
<button class="quiz-check" type="button">Checar resposta</button>
<div class="quiz-feedback" hidden>
<p><strong>Resposta: B.</strong> Fonte: FGV, TCE-SC, 2026. Gabarito oficial da banca.</p>
<p><strong>Como pensar:</strong> A Ordem de Volatilidade prioriza a coleta dos dados que desaparecem mais rápido — memória RAM e conexões de rede ativas somem no instante em que a máquina é desligada; dados em disco, backup ou configurações de hardware persistem por muito mais tempo.</p>
<p><strong>Por que a B deve ser marcada:</strong> RAM e tabelas de roteamento são os elementos mais voláteis da lista, perdidos irrecuperavelmente ao desligar a máquina.</p>
<ul class="quiz-explain">
<li><strong>A, C, D e E.</strong> <strong>Não marque.</strong> São dados persistentes (disco, backup, BIOS, cabeamento físico) que sobrevivem ao desligamento — podem ser coletados depois, sem risco de perda imediata.</li>
<li><strong>B.</strong> <strong>Deve ser marcada.</strong> É o dado mais volátil da lista, deve ser coletado primeiro.</li>
</ul>
<p><strong>Pegadinha principal:</strong> Priorizar a coleta de dados persistentes (fáceis de imaginar como "importantes", como logs em disco) em vez dos dados voláteis, que se perdem para sempre se não forem capturados imediatamente.</p>
</div>
</div>

<div class="quiz-card" data-answer="B">
<p class="quiz-source">FGV - PC-PI, 2026</p>
<p><strong>2. Após uma invasão generalizada em uma empresa, um perito precisa classificar corretamente os tipos de fontes de vestígio encontradas no local digital do crime para poder utilizar as ferramentas apropriadas de análise: 1. Volátil; 2. Não volátil; 3. Físicos; 4. De rede. Associe corretamente o tipo de vestígio digital ao seu exemplo.</strong></p>
<div class="quiz-options">
<label class="quiz-option"><input type="radio" name="fgv-026-pcpi-q19" value="A"> A. (1) Arquivos no HD / (2) RAM / (3) Pacotes TCP / (4) BIOS.</label>
<label class="quiz-option"><input type="radio" name="fgv-026-pcpi-q19" value="B"> B. (1) Conteúdo da RAM / (2) Arquivos em disco / (3) USB / (4) Pacotes TCP.</label>
<label class="quiz-option"><input type="radio" name="fgv-026-pcpi-q19" value="C"> C. (1) CD-ROM / (2) Registro do Windows / (3) Pacotes / (4) RAM.</label>
<label class="quiz-option"><input type="radio" name="fgv-026-pcpi-q19" value="D"> D. (1) Hashes SHA-256 / (2) Interface USB / (3) DNS / (4) Documentos Word.</label>
<label class="quiz-option"><input type="radio" name="fgv-026-pcpi-q19" value="E"> E. (1) Registro do Windows / (2) Conteúdo da RAM / (3) Pacotes TCP / (4) Arquivos em disco.</label>
</div>
<button class="quiz-check" type="button">Checar resposta</button>
<div class="quiz-feedback" hidden>
<p><strong>Resposta: B.</strong> Fonte: FGV, PC-PI, 2026. Gabarito oficial da banca.</p>
<p><strong>Como pensar:</strong> Associe cada categoria à sua natureza física/lógica: volátil = perde-se ao desligar (RAM); não volátil = persiste sem energia (disco); físico = componente/dispositivo tangível (USB); de rede = dado em trânsito na comunicação (pacotes TCP).</p>
<p><strong>Por que a B deve ser marcada:</strong> É a única associação em que os quatro exemplos correspondem exatamente à categoria correta.</p>
<ul class="quiz-explain">
<li><strong>A, C, D e E.</strong> <strong>Não marque.</strong> Trocam pelo menos um exemplo de categoria (colocam RAM como não volátil, ou arquivo de disco como físico, por exemplo).</li>
<li><strong>B.</strong> <strong>Deve ser marcada.</strong> Classificação integralmente correta.</li>
</ul>
<p><strong>Pegadinha principal:</strong> Confundir "físico" (dispositivo/mídia tangível, como USB) com "não volátil" (dado que persiste sem energia, como arquivo em disco) — são categorias relacionadas, mas não idênticas.</p>
</div>
</div>

<div class="quiz-card" data-answer="A">
<p class="quiz-source">Questão autoral FGV/PCPR - padrão FGV validado por provas policiais e periciais</p>
<p><strong>3. A expressão &#39;cifra negra&#39; da criminalidade refere-se:</strong></p>
<div class="quiz-options">
<label class="quiz-option"><input type="radio" name="fgv-026" value="A"> A. à criminalidade que não chega ao conhecimento oficial do sistema de justiça.</label>
<label class="quiz-option"><input type="radio" name="fgv-026" value="B"> B. aos crimes registrados duas vezes.</label>
<label class="quiz-option"><input type="radio" name="fgv-026" value="C"> C. a crimes praticados apenas pela internet.</label>
<label class="quiz-option"><input type="radio" name="fgv-026" value="D"> D. a delitos necessariamente violentos.</label>
<label class="quiz-option"><input type="radio" name="fgv-026" value="E"> E. à soma das condenações transitadas em julgado.</label>
</div>
<button class="quiz-check" type="button">Checar resposta</button>
<div class="quiz-feedback" hidden>
<p><strong>Resposta: A.</strong> Questão autoral no padrão FGV; não é reprodução literal de caderno oficial.</p>
<p><strong>Como pensar:</strong> Criminologia digital e estudo do crime exigem separar fato ocorrido, registro e punição.</p>
<p><strong>Por que a alternativa correta está certa:</strong> Cifra negra é o conjunto de crimes não registrados oficialmente.</p>
<ul class="quiz-explain">
<li><strong>A.</strong> Correta. É a criminalidade oculta aos dados oficiais.</li>
<li><strong>B.</strong> Incorreta. Registro duplicado não é cifra negra.</li>
<li><strong>C.</strong> Incorreta. Não se limita a crimes digitais.</li>
<li><strong>D.</strong> Incorreta. Pode envolver delitos não violentos.</li>
<li><strong>E.</strong> Incorreta. Condenação é etapa formal, não criminalidade oculta.</li>
</ul>
<p><strong>Pegadinha principal:</strong> Ler estatística oficial como retrato completo da criminalidade.</p>
</div>
</div>

## Próxima ampliação

- Inserir questões oficiais FGV quando o enunciado, imagens e gabarito estiverem conferidos.
- Adicionar questões semelhantes de PF/Cebraspe, AOCP e IBFC apenas quando preencherem lacuna técnica do tema.
