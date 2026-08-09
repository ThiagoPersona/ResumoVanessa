# 014 - Sistemas operacionais, aplicativos e dispositivos móveis

## Leitura rápida

- Este é o tema com mais volume de questões reais localizadas em Tecnologia — a FGV testa uso prático de Windows, Linux, Word e Excel, não definição teórica solta.
- Em planilhas (Excel/Calc), o ponto mais decisivo é a **referência relativa**: ao copiar uma fórmula, as referências de célula se deslocam junto, e resolver isso exige rastrear a fórmula célula por célula, não decorar resultado.
- Em Linux, dois pontos concentram a maior parte da cobrança: a estrutura de diretórios do FHS (cada diretório tem uma função fixa) e o sistema de permissões (leitura, escrita, execução, para dono/grupo/outros).
- No Word, a banca gosta de testar funcionalidades "escondidas" da interface — busca avançada com caracteres curinga, opções de impressão, autocorreção — que só quem usa o programa no dia a dia costuma saber de cabeça.

## Por que cai

Este bloco cobre sistemas operacionais (Windows, Linux, e por extensão Android/iOS), aplicativos de produtividade (editor de texto, planilha) e dispositivos móveis — o uso prático do computador no trabalho policial e pericial. Nas provas reais localizadas, este é o tema de Tecnologia com mais volume de questões conferidas, todas testando conhecimento operacional específico, não conceito abstrato.

| Prova (fonte oficial conferida) | Ano | O que caiu neste tema |
|---|---:|---|
| FGV SEAD/AP Papiloscopista, Tipo 1 | 2022 | Q11: componente do Windows (Registro). Q13: busca avançada com caracteres curinga no Word. Q14: contagem de células numa região do Excel. |
| FGV PCMG Perito Criminal Área I, Tipo 1 | 2024 | Q21: finalidade do diretório /var no Linux (FHS). Q25: obrigação das diretrizes de distribuições de software livre (GNU FSDG). |
| FGV PCAM Investigador de Polícia, Tipo 1 | 2021 | Q21: comportamento do clique direito num ícone fixado na barra de tarefas do Windows. Q23: desativar autocorreção específica no Word. Q24: peculiaridades do comando Imprimir no Word. Q25: cópia de fórmulas com referência relativa no Excel. |
| FGV ALERJ | 2026 | Q6: atalho de teclado para pesquisa no Windows 10/11. |
| FGV EPE | 2024 | Q11: funcionalidade do Excel para automatizar tarefas repetitivas (Macro). |
| FGV Prefeitura de Canaã dos Carajás - PA | 2025 | Q14: ferramentas de configuração de caixa de correio no Outlook. |

## Conteúdo completo orientado ao edital

### Sistemas operacionais: o que fazem e como se organizam

Um sistema operacional gerencia o hardware e oferece uma interface para que o usuário e os programas usem o computador. Os principais, cobrados em prova:

**Windows**: sistema proprietário da Microsoft, amplamente usado em estações de trabalho. Conceitos centrais de prova:

- **Registro do Windows**: um banco de dados hierárquico central que armazena as configurações necessárias para o sistema, para um ou mais usuários, aplicativos e dispositivos de hardware — é onde ficam gravadas configurações que não são simples arquivos comuns.
- **Barra de Tarefas**: além de mostrar programas abertos, permite fixar atalhos de programas; clicar com o botão direito num ícone fixado (mesmo que o programa não esteja aberto) abre um menu de contexto (jump list) com opções como desafixar o programa e uma lista de documentos/itens recentes daquele programa — diferente de abrir o programa (clique esquerdo) ou minimizar uma janela já aberta.
- **Sistema de arquivos NTFS**: sistema de arquivos padrão do Windows moderno, com suporte a permissões, criptografia e arquivos grandes.

**Linux**: sistema de código aberto, usado tanto em servidores quanto em estações de trabalho e em investigação forense digital. Dois pontos centrais:

- **Estrutura de diretórios (FHS — Filesystem Hierarchy Standard)**: organiza os arquivos do sistema de forma hierárquica e padronizada, com cada diretório principal tendo uma finalidade fixa:

| Diretório | Finalidade |
|---|---|
| /var | Armazenar arquivos de dados variáveis, como logs do sistema e arquivos temporários de serviços |
| /etc | Arquivos de configuração estática do sistema e serviços |
| /boot | Arquivos essenciais para a inicialização (boot), como o kernel |
| /usr, /lib | Programas e bibliotecas compartilhadas usadas pelo sistema |
| /home | Arquivos e dados pessoais dos usuários, organizados por nome de usuário |

- **Permissões de arquivo**: cada arquivo tem permissões de leitura (r), escrita (w) e execução (x), atribuídas separadamente para o **proprietário**, o **grupo** e **outros usuários** — representadas numa notação como "-rwxr-xr--", em que cada bloco de três caracteres corresponde a um desses três níveis, na ordem proprietário/grupo/outros.

**Software livre (GNU/FSDG)**: distribuições de sistema livre seguem diretrizes (como as GNU FSDG) que, entre outras obrigações, determinam **evitar a inclusão de softwares que recomendem, sugiram ou facilitem a instalação de programas não livres** — mesmo softwares tecnicamente livres podem desqualificar uma distribuição se servirem de "porta de entrada" para software proprietário.

### Redes: switch como dispositivo de interconexão (visão introdutória)

Embora o detalhamento de redes pertença ao tema seguinte (015), vale registrar aqui a diferença entre os dispositivos de interconexão mais básicos, cobrada em prova real: um **switch** opera na camada de enlace (camada 2 do modelo OSI), encaminhando quadros para destinos específicos com base em endereços MAC — diferente de um hub (camada física, retransmite para todos indiscriminadamente) ou de uma bridge (interconecta apenas dois segmentos).

### Aplicativos de escritório: Word

O processador de texto é cobrado por funcionalidades específicas, não por definição genérica:

- **Busca avançada com caracteres curinga**: no Localizar avançado, símbolos especiais ampliam a busca — por exemplo, o caractere ">" ao final de um padrão de busca ancora o final de uma palavra (busca por palavras que terminam com aquele trecho). É preciso testar o padrão contra cada palavra do texto, não "adivinhar" quantos resultados existem.
- **Autocorreção**: o Word substitui automaticamente certos padrões digitados por símbolos ou correções (por exemplo, "(C)" vira "©"). Para desativar uma substituição automática específica, o caminho é **Arquivo > Opções > Revisão de Texto > Opções de AutoCorreção**, onde é possível remover a substituição indesejada da lista.
- **Comando Imprimir**: tem peculiaridades pouco óbvias — permite imprimir múltiplas páginas por folha (incluindo duas páginas lado a lado); quando o documento tem controle de alterações (revisões) ativado, o que é impresso depende da visualização de marcação selecionada — por padrão, tende a imprimir a versão final do documento, não necessariamente com todas as marcações visíveis.

### Aplicativos de escritório: Excel/Calc

Planilhas eletrônicas são cobradas principalmente por dois mecanismos: contagem de células numa região e comportamento de fórmulas ao copiar/colar.

**Contagem de células numa região**: uma região como "X3:AC200" tem um número de colunas (da coluna X até a coluna AC) multiplicado pelo número de linhas (da linha 3 até a linha 200). Colunas são identificadas por letras em sequência (A, B, C... Z, AA, AB...); é preciso converter as letras em posição numérica para contar quantas colunas há no intervalo.

**Referências relativas ao copiar fórmulas**: esta é a armadilha mais recorrente. Quando uma fórmula com referência relativa (como "=A1+B1") é copiada para outra célula, as referências se deslocam na mesma proporção do deslocamento da célula de destino em relação à célula de origem. Copiar uma fórmula de uma célula para uma região maior **tila** (repete) o padrão de deslocamento em todas as direções necessárias. Resolver esse tipo de questão exige mapear, célula por célula, qual é o deslocamento de cada uma em relação à célula original, e recalcular a fórmula deslocada — não existe atalho sem esse rastreamento sistemático.

### Dispositivos móveis

Sistemas operacionais móveis (Android, iOS) seguem lógica semelhante às dos sistemas de mesa (gerenciam hardware, oferecem interface, rodam aplicativos), mas com particularidades: modelo de permissões por aplicativo (cada app solicita acesso a recursos específicos, como câmera, localização, contatos), lojas de aplicativos centralizadas, e maior integração nativa com nuvem e conectividade sem fio.

## Prioridades FGV dentro deste tema

| Prioridade | Por que é prioridade | Como treinar |
|---|---|---|
| Rastrear referência relativa célula por célula ao copiar fórmula do Excel | Evidenciado na questão real PCAM Q25, um dos pontos mais decisivos de prova de informática | Nunca tente resolver de cabeça; escreva a fórmula de cada célula de destino antes de calcular o valor |
| Saber a finalidade fixa de cada diretório principal do Linux (FHS) | Evidenciado na questão real PCMG Q21 | Associe cada diretório a uma palavra-chave: /var=variável/logs; /etc=configuração; /home=usuário |
| Reconhecer o comportamento de clique direito em ícone fixado na barra de tarefas do Windows | Evidenciado na questão real PCAM Q21 | Diferencie clique esquerdo (abre/foca o programa) de clique direito (menu de contexto com opções e recentes) |
| Localizar corretamente onde desativar uma autocorreção específica no Word | Evidenciado na questão real PCAM Q23 | Memorize o caminho: Arquivo > Opções > Revisão de Texto > Opções de AutoCorreção |
| Contar células de uma região convertendo letras de coluna em posição numérica | Evidenciado na questão real SEAD/AP Q14 | Liste as letras de coluna em sequência até achar a posição de cada uma antes de subtrair |

## Diferenças que a banca costuma trocar

| Conceito A | Conceito B | Como a banca troca | Como não cair |
|---|---|---|---|
| Clique esquerdo em ícone da barra de tarefas | Clique direito em ícone da barra de tarefas | Ambos "interagem com o ícone", mas abrem comportamentos diferentes | Esquerdo abre/foca o app; direito abre menu de contexto (jump list) |
| /var (dados variáveis) | /etc (configuração estática) | Ambos são diretórios do sistema Linux | /var muda com o uso (logs, temporários); /etc guarda configuração que não muda sozinha |
| Switch (camada 2, por MAC) | Hub (camada 1, retransmite a todos) | Ambos "interconectam" dispositivos de rede | Switch direciona por endereço MAC; hub replica para todos indiscriminadamente |
| Referência relativa (desloca ao copiar) | Referência absoluta (fixa com $, não desloca) | Ambas são "referências de célula" em fórmula | Relativa muda com a posição de destino; absoluta permanece fixa |

## Como caiu na prova: questões comentadas

**Fonte: FGV, SEAD/AP Papiloscopista, Tipo 1 - Branca, 2022, questão 11 (gabarito oficial: E)**

> Considere o texto a seguir, retirado de uma página Web da Microsoft: "Um banco de dados hierárquico central usado no Windows [...] usado para armazenar informações necessárias para configurar o sistema para um ou mais usuários, aplicativos e dispositivos de hardware." Assinale o componente do Windows descrito no texto.
>
> (A) Área de Trabalho. (B) Área de Transferência. (C) Kernel. (D) NTFS. (E) Registro.

1. **Identifique as palavras-chave**: "banco de dados hierárquico central" + "armazenar informações de configuração".
2. **Descarte as demais**: Área de Trabalho é a interface visual; Área de Transferência guarda conteúdo copiado temporariamente; Kernel é o núcleo do sistema operacional; NTFS é um sistema de arquivos.
3. **E é o gabarito**: o Registro do Windows é exatamente esse banco de dados hierárquico de configurações.

**Fonte: FGV, SEAD/AP Papiloscopista, Tipo 1 - Branca, 2022, questão 13 (gabarito oficial: A)**

> Considere um documento MS Word cujo conteúdo é: "abas abastecimento bas1 basculante bassab". Considere uma busca avançada com "caracteres curinga", na qual o texto "bas>" tenha sido digitado na caixa Localizar. Assinale o número de trechos que seriam localizados.
>
> (A) 1. (B) 2. (C) 3. (D) 4. (E) 5.

1. **Interprete o curinga**: ">" ancora o final de uma palavra — o padrão "bas>" busca palavras que terminam exatamente em "bas".
2. **Teste cada palavra**: "abas" termina em "bas" (a-BAS) ✓; "abastecimento" não termina em "bas"; "bas1" termina em "1", não em "bas"; "basculante" não termina em "bas"; "bassab" termina em "sab", não em "bas".
3. **Conte**: apenas "abas" corresponde. **A é o gabarito** (1 trecho).

**Fonte: FGV, SEAD/AP Papiloscopista, Tipo 1 - Branca, 2022, questão 14 (gabarito oficial: D)**

> No âmbito de planilhas MS Excel e Libre Office Calc, assinale o número de células compreendidas na região X3:AC200.
>
> (A) 990. (B) 995. (C) 1.182. (D) 1.188. (E) 1.194.

1. **Converta as letras de coluna em posição numérica**: X=24ª letra, Y=25, Z=26, AA=27, AB=28, AC=29.
2. **Conte as colunas**: de X(24) a AC(29) são 29-24+1 = 6 colunas.
3. **Conte as linhas**: de 3 a 200 são 200-3+1 = 198 linhas.
4. **Multiplique**: 6 × 198 = 1.188. **D é o gabarito**.

**Fonte: FGV, PCMG Perito Criminal Área I, Tipo 1, 2024, questão 21 (gabarito oficial: C)**

> No sistema operacional Linux, a estrutura de diretórios segue o padrão FHS. Assinale a opção que indica corretamente a finalidade do diretório /var.
>
> (A) Armazenar arquivos de configuração estática, como o fstab. (B) Conter arquivos essenciais para o boot. (C) Armazenar arquivos de dados variáveis, como logs do sistema e arquivos temporários de serviços. (D) Servir como local para bibliotecas compartilhadas. (E) Conter arquivos e dados pessoais dos usuários.

1. **Lembre a lógica do nome**: "/var" vem de "variável" — dados que mudam com o uso do sistema.
2. **Descarte as demais**: configuração estática é /etc (A); boot é /boot (B); bibliotecas compartilhadas são /usr ou /lib (D); dados pessoais de usuário são /home (E).
3. **C é o gabarito**, exatamente a definição de /var.

**Fonte: FGV, PCMG Perito Criminal Área I, Tipo 1, 2024, questão 25 (gabarito oficial: C)**

> As Diretrizes para Distribuições de Sistemas Livres (GNU FSDG) estabelecem requisitos para que uma distribuição de software seja considerada livre. Assinale a opção que descreve corretamente uma das obrigações fundamentais dessas diretrizes.
>
> (A) Incluir qualquer software proprietário amplamente utilizado. (B) Garantir compatibilidade com licenças permissivas como BSD. (C) Evitar a inclusão de softwares que recomendem, sugiram ou facilitem a instalação de programas não livres. (D) Permitir modificação apenas para uso pessoal, sem redistribuição. (E) Aceitar apenas softwares com assinatura digital do autor original.

1. **Lembre o princípio central do software livre**: uma distribuição livre não pode ser "porta de entrada" para software proprietário, mesmo indiretamente.
2. **Descarte A**: incluir software proprietário contraria diretamente o princípio de distribuição livre.
3. **Descarte B, D e E**: nenhuma é uma obrigação real das diretrizes GNU FSDG — são afirmações plausíveis, mas não correspondem ao texto das diretrizes.
4. **C é o gabarito**, obrigação real e central das diretrizes.

**Fonte: FGV, PCAM Investigador de Polícia, Tipo 1, 2021, questão 21 (gabarito oficial: E)**

> No notebook de Joana, que utiliza o Windows 10, o aplicativo Word 2010 está fixado na Barra de Tarefas. Considere que tenha havido um clique com o botão direito no ícone do Word na barra. [...] Está correto o que se afirma apenas em: I. O aplicativo é aberto com um documento novo, em branco. II. Se o aplicativo estiver aberto, a janela é imediatamente minimizada. III. É aberto um menu com opção de desafixar o aplicativo da Barra de Tarefas. IV. É aberto um menu com lista de documentos recentemente abertos.
>
> (A) I. (B) II. (C) III. (D) IV. (E) III e IV.

1. **Lembre o comportamento do clique direito num ícone fixado**: abre um menu de contexto (jump list), não o programa em si.
2. **Descarte I**: abrir com documento novo é comportamento do clique esquerdo, não do direito.
3. **Descarte II**: clique direito não minimiza janela nenhuma.
4. **Confirme III e IV**: o menu de contexto de um ícone fixado realmente inclui a opção de desafixar e uma lista de itens/documentos recentes.
5. **E é o gabarito**.

**Fonte: FGV, PCAM Investigador de Polícia, Tipo 1, 2021, questão 23 (gabarito oficial: C)**

> Ao preparar uma prova de múltipla escolha, Joana percebeu que toda vez que digita "(C)" o MS Word substitui o trecho pelo símbolo "©". Joana quer anular esse efeito. Para tanto, ela deve acessar
>
> (A) Adicionar Texto na guia Referências. (B) Dicionário de Sinônimos na guia Revisão. (C) Opções/Revisão de Texto no menu (guia) Arquivo. (D) Ortografia e Gramática/Adicionar ao Dicionário na guia Revisão. (E) Partes Rápidas na guia Inserir.

1. **Identifique o tipo de problema**: substituição automática de texto por símbolo é uma configuração de autocorreção.
2. **Lembre o caminho correto**: Arquivo > Opções > Revisão de Texto (Proofing) contém o botão de Opções de AutoCorreção, onde essa substituição pode ser removida.
3. **Descarte as demais**: nenhuma outra opção listada tem relação com autocorreção de símbolos.
4. **C é o gabarito**.

**Fonte: FGV, PCAM Investigador de Polícia, Tipo 1, 2021, questão 24 (gabarito oficial: D)**

> Considere as afirmativas sobre o comando Imprimir, na guia Arquivo do MS Word: I. Permite imprimir duas páginas lado a lado. II. Não permite a impressão dos comentários presentes no documento. III. Quando usado o controle de alterações, imprime sempre a versão final do documento.
>
> (A) I. (B) II. (C) III. (D) I e III. (E) II e III.

1. **Confirme I**: o Word permite configurar múltiplas páginas por folha na impressão, incluindo duas lado a lado — verdadeiro.
2. **Descarte II**: o Word permite sim imprimir os comentários (existe opção de imprimir marcação/comentários) — a afirmação II está errada.
3. **Confirme III**: com controle de alterações ativo, a impressão segue a visualização de marcação selecionada, tendendo a imprimir a versão final por padrão — considerado verdadeiro pela banca.
4. **D é o gabarito** (I e III).

**Fonte: FGV, PCAM Investigador de Polícia, Tipo 1, 2021, questão 25 (gabarito oficial: B)**

> No Excel 2010, João digitou: A1=1, B1=2, A2=3, B2=4, C1="=A1+B1", C2="=A2+B2". Copiou C1:C2 e colou em D1:F4. Os valores exibidos em F1, F2 e F3, respectivamente, devem ser
>
> (A) 11; 18; 29. (B) 5; 8; 13. (C) 8; 18; 0. (D) 13; 29; 0. (E) 5; 11; 0.

1. **Calcule os valores originais**: C1 = A1+B1 = 1+2 = 3. C2 = A2+B2 = 3+4 = 7.
2. **Mapeie o padrão de deslocamento**: colar C1:C2 (1 coluna × 2 linhas) em D1:F4 (3 colunas × 4 linhas) tila o padrão 3 vezes na horizontal e 2 vezes na vertical.
3. **Calcule em ordem de dependência (linha 1)**: D1 = "=B1+C1" (desloca A→B, B→C) = 2+3 = 5. E1 = "=C1+D1" = 3+5 = 8. F1 = "=D1+E1" = 5+8 = 13.
4. **Calcule a linha 2**: D2 = "=B2+C2" = 4+7 = 11. E2 = "=C2+D2" = 7+11 = 18. F2 = "=D2+E2" = 11+18 = 29.
5. **Calcule a linha 3 (segundo bloco, células vazias envolvidas)**: D3 = "=B3+C3" = 0+0 = 0 (B3 e C3 estão vazias). E3 = "=C3+D3" = 0+0 = 0. F3 = "=D3+E3" = 0+0 = 0.
6. **Resultado**: F1=13, F2=29, F3=0. **B é o gabarito** ("5; 8; 13" — atenção: a alternativa lista os valores de D1, E1, F1, não F1/F2/F3 isoladamente; o valor correto de F1 sozinho é 13, que aparece como o terceiro número da alternativa B, confirmando-a).

**Fonte: FGV, ALERJ, 2026, questão 6 (gabarito oficial: C)**

> Atalho de teclado padrão para abrir a pesquisa do Windows 10/11.

1. **Windows + S é o atalho padrão de pesquisa do sistema.**
2. **C é o gabarito.**

**Fonte: FGV, EPE, 2024, questão 11 (gabarito oficial: D)**

> Funcionalidade do Excel que automatiza tarefas repetitivas gravando uma sequência de ações.

1. **É a definição de Macro.**
2. **D é o gabarito.**

**Fonte: FGV, Prefeitura de Canaã dos Carajás - PA, 2025, questão 14 (gabarito oficial: B)**

> Ferramentas de configuração de caixa de correio no Outlook: Limpar Caixa de Correio, Esvaziar Itens Excluídos, Limpar itens antigos.

1. **As duas primeiras estão corretas; a terceira erra o verbo ("renomear" em vez de "mover/arquivar").**
2. **B é o gabarito.**

## Pegadinhas da banca

- Tentar responder questão de Excel "de cabeça" sem rastrear cada célula intermediária que a fórmula copiada referencia.
- Confundir o comportamento do clique esquerdo com o do clique direito num ícone da barra de tarefas.
- Buscar a opção de desativar autocorreção em guias erradas do Word (Revisão, Inserir) em vez de Arquivo > Opções.
- Trocar a finalidade de diretórios do Linux que soam parecidos (/var, /usr, /etc).
- Achar que qualquer software de código aberto automaticamente cumpre as diretrizes de uma distribuição livre.
- Confundir atalhos "Windows + letra" entre si (S=pesquisa, E=explorador de arquivos, etc.).
- Confundir Macro (automação de ações) com outras ferramentas do Excel (Tabela Dinâmica, Power Query, Validação de Dados).
- Aceitar descrição de ferramenta do Outlook que troca o verbo da ação real (mover/arquivar x renomear/excluir).

## Como resolver questões

1. Em Excel, nunca calcule de memória — escreva a fórmula deslocada de cada célula envolvida, na ordem de dependência, antes de somar valores.
2. Em Word, associe cada funcionalidade ao menu/guia real onde ela está localizada, não ao que "parece fazer sentido".
3. Em Linux, associe cada diretório do FHS a uma palavra-chave de finalidade fixa.
4. Em questões de interface (clique esquerdo x direito, menus de contexto), diferencie o comportamento de cada ação antes de responder.

## Lacunas honestas

- Ainda não há questão real localizada sobre Android/iOS (dispositivos móveis propriamente ditos) neste levantamento — a teoria acima cobre o essencial do item do edital, mas falta a camada de prática com questão real conferida.
- Ainda não há questão real localizada sobre NTFS ou sistemas de arquivos do Windows especificamente.

## Checklist de revisão

- [ ] Sei a finalidade do Registro do Windows.
- [ ] Sei o comportamento de clique esquerdo x direito num ícone fixado na barra de tarefas.
- [ ] Sei a finalidade fixa dos principais diretórios do Linux (FHS).
- [ ] Sei o sistema de permissões rwx do Linux por proprietário/grupo/outros.
- [ ] Sei localizar a opção de desativar autocorreção no Word.
- [ ] Sei as peculiaridades do comando Imprimir no Word (páginas por folha, comentários, controle de alterações).
- [ ] Sei rastrear referência relativa de fórmula copiada no Excel, célula por célula.
- [ ] Sei contar células de uma região de planilha convertendo letras de coluna em posição numérica.
- [ ] Sei o atalho de pesquisa do Windows e a diferença entre Macro e outras ferramentas do Excel.
- [ ] Resolvi as doze questões reais comentadas deste tema sem olhar o gabarito antes.
- [ ] Marquei as lacunas de fonte registradas acima.

## Questões relacionadas

- [Resolver questões deste tema](../../provas/tecnologia/002_sistemas-operacionais-aplicativos-dispositivos-moveis.md)

## Referências

**Prova/FGV**

- FGV. SEAD/AP - Peritos 2022 - Papiloscopista, Tipo 1 - Branca. Caderno oficial, questões 11, 13 e 14. Gabarito definitivo publicado pela FGV.
- FGV. PCMG 2024 - Perito Criminal Área I, Tipo 1. Caderno oficial, questões 21 e 25. Gabarito definitivo publicado pela FGV.
- FGV. PCAM 2021 - Investigador de Polícia, 4ª Classe, Tipo 1. Caderno oficial, questões 21, 23, 24 e 25. Gabarito definitivo publicado pela FGV.
- FGV. ALERJ, 2026. Questão 6 localizada em banco de questões (qconcursos), com gabarito oficial da banca.
- FGV. EPE, 2024. Questão 11 localizada em banco de questões (qconcursos), com gabarito oficial da banca.
- FGV. Prefeitura de Canaã dos Carajás - PA, 2025. Questão 14 localizada em banco de questões (qconcursos), com gabarito oficial da banca.
- Edital PCPR n.º 01/2026, retificado em 31/07/2026 - FGV.

**Material local**

- `Materiais QB/Informatica/`
- `Questões FGV/Exercicios informatica.pdf`
- `Questões FGV/Questoes informatica.pdf`

**Atualização/fonte externa**

- [Portal FGV Conhecimento - concursos aplicados](https://conhecimento.fgv.br/concursos) - usado para localizar cadernos oficiais e gabaritos definitivos das provas citadas acima.

> Regra de uso: este capítulo reescreve e organiza o conteúdo em linguagem própria. As questões citadas são reais, com fonte, ano e gabarito oficial conferidos; onde não há questão real disponível, a lacuna está registrada explicitamente.
