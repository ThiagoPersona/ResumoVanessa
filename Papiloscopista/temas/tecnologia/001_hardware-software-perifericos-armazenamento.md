# 013 - Hardware, software, periféricos e armazenamento

## Leitura rápida

- Hardware é a parte física do computador; software é o conjunto de instruções que o faz funcionar; firmware é um software especial, gravado no próprio hardware, que controla o funcionamento básico do dispositivo.
- A distinção mais cobrada em prova é entre memória **volátil** (RAM, perde os dados ao desligar) e armazenamento **não volátil** (HD, SSD, pendrive — mantém os dados sem energia).
- BIOS/UEFI, driver e firmware são três coisas diferentes que a banca gosta de misturar: BIOS/UEFI inicializam o computador; driver permite que o sistema operacional converse com um periférico específico; firmware é o software embutido que controla o hardware em si.
- Backup não é sincronização: um backup precisa permitir restauração de uma versão anterior dos dados, mesmo depois de o arquivo original ter sido apagado ou corrompido — sincronização automática em nuvem, sozinha, pode replicar até um erro ou exclusão.

## Por que cai

Este item do edital cobre a base física e lógica da informática: hardware, software, periféricos, dispositivos móveis, armazenamento, backup e os componentes que participam da inicialização do computador (BIOS/UEFI, drivers, firmware). É o alicerce sobre o qual os demais temas de Tecnologia se apoiam — sistemas operacionais, redes e segurança da informação pressupõem esse vocabulário básico.

## Conteúdo completo orientado ao edital

### Hardware x software x firmware

- **Hardware**: a parte física do computador — processador (CPU), memória, placa-mãe, fontes de energia, periféricos, cabos.
- **Software**: o conjunto de instruções (programas) que roda sobre o hardware — sistema operacional, aplicativos, drivers.
- **Firmware**: um tipo especial de software, gravado diretamente em um chip do próprio hardware, que controla o funcionamento básico do dispositivo (por exemplo, o firmware de um SSD ou de um roteador). Diferente de um aplicativo comum, o firmware normalmente não é removido nem trocado pelo usuário no dia a dia — é atualizado via procedimento específico do fabricante.

### Componentes centrais do computador

| Componente | Função |
|---|---|
| CPU (processador) | Executa instruções, faz os cálculos e o processamento central |
| Memória RAM | Armazena dados e instruções em uso no momento — é **volátil** (perde tudo ao desligar) |
| Placa-mãe | Conecta e integra todos os componentes internos |
| Armazenamento (HD/SSD) | Guarda dados de forma permanente — é **não volátil** (mantém os dados sem energia) |
| Fonte de alimentação | Converte energia elétrica para os componentes internos |

### Memória volátil x armazenamento não volátil: a distinção mais cobrada

| | Memória RAM | Armazenamento (HD/SSD/pendrive) |
|---|---|---|
| Volatilidade | Volátil — perde os dados ao desligar | Não volátil — mantém os dados sem energia |
| Velocidade | Muito rápida | Mais lenta que a RAM (SSD é mais rápido que HD, mas ainda mais lento que RAM) |
| Função | Área de trabalho temporária para o que está em uso | Guarda de dados e programas a longo prazo |
| Capacidade típica | Menor (gigabytes) | Maior (centenas de gigabytes a terabytes) |

**HD (disco rígido)** usa discos magnéticos giratórios; **SSD (unidade de estado sólido)** usa memória flash, sem partes móveis, sendo mais rápido, mais resistente a impacto e mais silencioso, ao custo de preço por gigabyte geralmente mais alto que o HD tradicional.

### Periféricos: entrada, saída e entrada/saída

| Tipo | Função | Exemplos |
|---|---|---|
| Entrada | Enviam dados/comandos para o computador | Teclado, mouse, scanner, webcam, microfone |
| Saída | Recebem dados do computador para o usuário | Monitor, impressora, caixa de som |
| Entrada e saída | Fazem os dois papéis | Tela touch screen, impressora multifuncional (imprime e digitaliza), pendrive |

### BIOS, UEFI e o processo de inicialização

**BIOS (Basic Input/Output System)** e sua sucessora, a **UEFI (Unified Extensible Firmware Interface)**, são firmwares gravados na placa-mãe responsáveis por iniciar o computador: testam o hardware básico (POST — Power-On Self-Test), localizam o dispositivo de inicialização e carregam o sistema operacional. A UEFI é mais moderna, suporta discos maiores, inicialização mais rápida e interface gráfica, mas cumpre função equivalente à BIOS clássica — nenhuma das duas é, em si, o sistema operacional (que é carregado depois, por elas).

**Driver** é o software que permite que o sistema operacional se comunique com um periférico ou componente específico (uma impressora, uma placa de vídeo). Sem o driver correto, o hardware pode não funcionar plenamente mesmo estando fisicamente conectado e íntegro.

### Backup: o que garante restauração de verdade

Backup é uma cópia de segurança dos dados, feita com o propósito específico de permitir **restauração** em caso de perda, corrupção ou exclusão acidental do original. Características que diferenciam um backup real de uma simples cópia ou sincronização:

- **Versionamento**: um bom backup mantém versões anteriores dos arquivos, não apenas o estado mais recente — isso é o que protege contra exclusão ou corrupção acidental, algo que a sincronização automática (que replica mudanças, inclusive exclusões, para todos os dispositivos conectados) não garante sozinha.
- **Independência do original**: o backup deve estar armazenado separadamente do dado original (outro disco, outro local, nuvem), para sobreviver a uma falha que afete o original.

| Tipo de backup | Como funciona |
|---|---|
| Completo (full) | Copia todos os dados a cada execução |
| Incremental | Copia apenas o que mudou desde o último backup (de qualquer tipo) |
| Diferencial | Copia tudo o que mudou desde o último backup completo |

A regra prática **3-2-1** (frequentemente citada em segurança da informação) recomenda manter 3 cópias dos dados, em 2 tipos de mídia diferentes, com 1 cópia fora do local físico principal.

### Dispositivos móveis: o que muda em relação a um computador de mesa

Smartphones e tablets seguem a mesma lógica de hardware/software/armazenamento, mas com particularidades: armazenamento geralmente em memória flash embutida (sem partes móveis), sistemas operacionais próprios (Android, iOS), e maior dependência de conectividade sem fio (Wi-Fi, dados móveis, Bluetooth) para grande parte de suas funções.

## Prioridades FGV dentro deste tema

| Prioridade | Por que é prioridade | Como treinar |
|---|---|---|
| Diferenciar memória volátil (RAM) de armazenamento não volátil (HD/SSD) | Distinção mais clássica de prova de informática básica | Para cada componente citado, pergunte: perde dado ao desligar? |
| Separar BIOS/UEFI, driver e firmware | Termos parecidos, funções bem diferentes | Associe cada um à sua função: inicializar (BIOS/UEFI), comunicar SO-periférico (driver), controlar hardware (firmware) |
| Exigir versionamento e independência para considerar algo "backup" de verdade | Erro comum de quem confunde sincronização com backup | Pergunte: essa cópia sobrevive a uma exclusão acidental do original replicada automaticamente? |
| Classificar periférico por direção do fluxo de dados (entrada, saída, ambos) | Base de qualquer questão sobre periféricos | Pergunte: o dado vai para o computador, sai do computador, ou os dois? |

## Diferenças que a banca costuma trocar

| Conceito A | Conceito B | Como a banca troca | Como não cair |
|---|---|---|---|
| RAM (volátil) | Armazenamento SSD/HD (não volátil) | Ambos "guardam dados", mas de forma diferente | RAM perde tudo ao desligar; armazenamento mantém |
| BIOS/UEFI | Sistema operacional | Ambos "iniciam" o funcionamento do computador | BIOS/UEFI prepara o hardware e entrega o controle ao SO, que é carregado depois |
| Driver | O próprio periférico | Confusão de nome comum | Driver é o software que permite a comunicação; o periférico é o hardware em si |
| Backup | Sincronização em nuvem | Ambos "protegem" dados na aparência | Backup precisa de versionamento e independência; sincronização replica mudanças, inclusive exclusões |

## Pegadinhas da banca

- Chamar todo serviço em nuvem de "backup", mesmo quando é apenas sincronização sem versionamento.
- Tratar SSD como se fosse RAM, ou o contrário.
- Confundir driver com o próprio periférico, ou com firmware.
- Considerar UEFI como sinônimo de sistema operacional.
- Ignorar a diferença entre periférico de entrada, saída e entrada/saída ao classificar um dispositivo.

## Como resolver questões

1. Classifique o item pela função: processar, armazenar temporariamente (RAM), armazenar permanentemente, comunicar, inicializar.
2. Em questão de backup, teste se a estratégia descrita sobrevive a uma exclusão acidental replicada automaticamente.
3. Em questão de periférico, identifique a direção do fluxo de dados (entrada, saída, ambos).
4. Em questão de inicialização, separe o papel da BIOS/UEFI (preparar o hardware) do papel do sistema operacional (carregado depois).

## Lacunas honestas

- Ainda não há questão real de banca FGV localizada especificamente para este tema neste levantamento — as questões reais de Tecnologia localizadas até agora (nas provas SEAD/AP, PCMG e PCAM) tratam de sistemas operacionais e aplicativos (tema 014) e de redes (tema 015), não de hardware/periféricos/armazenamento puro. É prioridade de busca para sessão futura.

## Checklist de revisão

- [ ] Sei diferenciar memória RAM (volátil) de armazenamento HD/SSD (não volátil).
- [ ] Sei diferenciar BIOS/UEFI, driver e firmware pela função de cada um.
- [ ] Sei os critérios que tornam uma cópia um backup de verdade (versionamento, independência).
- [ ] Sei classificar periféricos por direção do fluxo de dados.
- [ ] Sei diferenciar HD de SSD tecnicamente.
- [ ] Marquei a lacuna de fonte registrada acima.

## Questões relacionadas

- [Resolver questões deste tema](../../provas/tecnologia/001_hardware-software-perifericos-armazenamento.md)

## Referências

**Prova/FGV**

- Edital PCPR n.º 01/2026, retificado em 31/07/2026 - FGV.
- Nenhuma questão real de FGV localizada especificamente para este tema até o momento (lacuna registrada acima).

**Material local**

- `Curso Alfacon/Tecnologias e sistema de informacao e seguranca cibernética.pdf`
- `Materiais QB/Informatica/`
- `Questões FGV/Exercicios informatica.pdf`
- `Questões FGV/Questoes informatica.pdf`

**Atualização/fonte externa**

- [Portal FGV Conhecimento - concursos aplicados](https://conhecimento.fgv.br/concursos) - usado para localizar cadernos oficiais e gabaritos definitivos.

> Regra de uso: este capítulo reescreve e organiza o conteúdo em linguagem própria. Onde não há questão real disponível, a lacuna está registrada explicitamente.
