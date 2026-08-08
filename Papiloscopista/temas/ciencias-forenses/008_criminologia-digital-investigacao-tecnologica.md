# 026 - Criminologia digital e investigação tecnológica

## Leitura rápida

- Criminologia digital aplica o olhar criminológico (causas, dinâmica, controle social) ao ambiente digital — por que e como o crime migra e se transforma no espaço virtual, não apenas os aspectos técnicos de perícia (já tratados no tema de crimes digitais/OSINT, item 017).
- O ambiente digital altera a lógica clássica de oportunidade criminal: reduz a necessidade de proximidade física entre agressor e vítima, amplia o alcance geográfico do crime e cria formas novas de anonimato e de rastro (digital footprint).
- Investigação tecnológica policial combina ferramentas de OSINT, análise de metadados, geolocalização e cooperação com provedores de aplicação/conexão — sempre dentro dos limites legais de proteção de dados e exigência de ordem judicial quando aplicável.
- Cibercriminalidade organizada frequentemente opera em rede transnacional, dificultando a persecução penal tradicional e exigindo cooperação entre múltiplas jurisdições.

## Por que cai

Este item conecta a criminologia (tema 025) ao ambiente digital, e complementa o bloco de Tecnologia (crimes digitais, evidência eletrônica e OSINT, tema 017) com uma perspectiva mais investigativa e criminológica: como o crime se organiza e se investiga no espaço digital, para além do exame técnico da evidência isolada.

| Prova (fonte oficial conferida) | Ano | O que caiu neste tema |
|---|---:|---|
| FGV TCE-SC | 2026 | Q1: princípio da Ordem de Volatilidade na coleta de evidências digitais. |
| FGV PC-PI | 2026 | Q19: classificação de tipos de vestígio digital (volátil, não volátil, físico, de rede). |

### Ordem de Volatilidade na perícia forense digital

Ao periciar um sistema comprometido, o perito deve coletar primeiro os dados que **desaparecem mais rápido** se a máquina for desligada ou o tempo passar — essa priorização é a **Ordem de Volatilidade**. Do mais volátil (coletar primeiro) ao menos volátil (pode esperar):

| Ordem | Tipo de dado | Exemplo |
|---|---|---|
| Mais volátil | Registradores/cache da CPU, memória RAM, conexões e tabelas de roteamento ativas | Processos em execução, conteúdo da RAM, sessões de rede abertas |
| Intermediário | Dados de disco em uso (arquivos temporários, swap) | Arquivos temporários, área de swap |
| Menos volátil | Dados em disco persistente, backups, configurações de firmware | Logs em disco, backups em fita, configurações de BIOS/UEFI |

Erro clássico de prova: priorizar a coleta de dados persistentes (parecem "mais importantes" por serem documentos/logs) em vez dos dados voláteis, que se perdem irrecuperavelmente assim que a máquina é desligada.

### Classificação dos tipos de vestígio digital

| Tipo | O que é | Exemplo |
|---|---|---|
| Volátil | Perde-se quando o dispositivo é desligado | Conteúdo da memória RAM |
| Não volátil | Persiste mesmo sem energia | Arquivos em disco |
| Físico | Componente ou mídia tangível | Pen drive/USB, HD |
| De rede | Dado em trânsito na comunicação | Pacotes TCP capturados |

Pegadinha clássica: confundir "físico" (o dispositivo/mídia em si, tangível) com "não volátil" (a propriedade de persistir sem energia) — categorias relacionadas, mas conceitualmente diferentes.

## Conteúdo completo orientado ao edital

### Como o ambiente digital transforma a dinâmica criminal

A teoria das atividades rotineiras (routine activity theory), clássica na criminologia, explica o crime pela convergência de três elementos: um agressor motivado, um alvo adequado e a ausência de um guardião capaz. O ambiente digital altera profundamente esses três elementos:

- **Alvo adequado**: multiplica-se exponencialmente (qualquer pessoa conectada é um alvo potencial, independente de localização geográfica).
- **Ausência de guardião**: o anonimato relativo da internet, o uso de ferramentas de ocultação de identidade e a dificuldade de fiscalização em tempo real reduzem a presença de "guardiões" tradicionais.
- **Agressor motivado**: ganha escala — um único agressor pode atingir milhares de vítimas simultaneamente (phishing em massa, malware distribuído), diferente do crime físico tradicional, limitado por proximidade.

### Características da criminalidade digital organizada

- **Transnacionalidade**: servidores, agressores e vítimas frequentemente estão em países diferentes, exigindo cooperação jurídica internacional (tratados de assistência mútua, cooperação entre polícias) para investigação e persecução.
- **Divisão de trabalho especializada**: grupos de cibercrime organizado frequentemente dividem funções (desenvolvimento de malware, venda de acesso, lavagem de criptoativos, exploração de dados roubados), à semelhança de estruturas de crime organizado tradicional, mas distribuídas digitalmente.
- **Baixo custo de entrada e alta escala de dano**: ferramentas de ataque cada vez mais acessíveis (inclusive "como serviço", no modelo de crime-as-a-service) reduzem a barreira técnica para cometer crimes digitais de grande escala.

### Investigação tecnológica: ferramentas e limites

A investigação de crimes digitais combina diversas técnicas, sempre dentro de limites legais:

- **OSINT** (já detalhado no tema 017): coleta de dados de fontes abertas.
- **Análise de metadados**: informações associadas a um arquivo ou comunicação (data, hora, dispositivo, localização) que ajudam a reconstituir cronologia e autoria, mesmo quando o conteúdo em si é limitado.
- **Geolocalização**: uso de dados de localização (GPS, torres de celular, endereço IP) para situar um dispositivo ou usuário no tempo e espaço, sujeita a limites de precisão técnica e a exigência de base legal para acesso.
- **Cooperação com provedores**: acesso a registros de conexão e de acesso a aplicações, mediante requisição com base legal (em regra, ordem judicial), conforme disciplinado pelo Marco Civil da Internet (ver tema 018).
- **Perícia em dispositivos apreendidos**: extração forense de dados de celulares e computadores, seguindo a cadeia de custódia digital (ver tema 017).

### Controle social no ambiente digital

Assim como no controle social tradicional (tema 025), o ambiente digital tem mecanismos formais (legislação específica, atuação policial especializada em crimes cibernéticos, moderação de conteúdo por determinação judicial) e informais (autorregulação de plataformas, educação digital, comunidades de denúncia) — mas a efetividade de ambos é desafiada pela velocidade de mudança tecnológica e pela dificuldade de fiscalização em escala global.

## Prioridades FGV dentro deste tema

| Prioridade | Por que é prioridade | Como treinar |
|---|---|---|
| Explicar como o ambiente digital altera os três elementos da oportunidade criminal | Aplica teoria criminológica clássica ao ambiente novo | Associe cada elemento (alvo, guardião, agressor) à mudança que a internet provoca |
| Reconhecer características da criminalidade digital organizada (transnacionalidade, divisão de trabalho, baixo custo) | Diferencia investigação digital de investigação tradicional | Liste os três traços e associe a um exemplo de crime digital organizado |
| Diferenciar as ferramentas de investigação tecnológica (OSINT, metadados, geolocalização, cooperação com provedores) | Evita confundir técnicas com finalidades distintas | Associe cada ferramenta ao tipo de informação que ela revela |
| Reconhecer os limites legais da investigação tecnológica (necessidade de base legal/ordem judicial) | Conecta com o tema de legislação digital (018) | Lembre que acesso a dado de conexão/aplicação em regra exige ordem judicial |

## Diferenças que a banca costuma trocar

| Conceito A | Conceito B | Como a banca troca | Como não cair |
|---|---|---|---|
| Crime digital individual/oportunista | Cibercrime organizado | Ambos ocorrem no ambiente digital | Organizado tem divisão de trabalho, escala e frequentemente transnacionalidade; individual costuma ser isolado e de menor escala |
| Metadados (dados sobre o dado) | Conteúdo da comunicação | Ambos são "informação digital" relevante para investigação | Metadados são dados associados (hora, local, dispositivo); conteúdo é a mensagem/arquivo em si, com proteção legal mais rigorosa |
| Investigação tecnológica com base legal | Acesso irrestrito a dados de conexão | Ambos envolvem "buscar informação digital" | Acesso a dados de conexão/aplicação exige, em regra, ordem judicial — não é irrestrito |
| Controle social digital formal | Controle social digital informal | Ambos buscam conter comportamento desviante online | Formal usa legislação/atuação estatal; informal usa autorregulação de plataformas e educação digital |

## Como caiu na prova: questões comentadas

**Fonte: FGV, TCE-SC, 2026, questão 1 (gabarito oficial: B)**

> Ordem de Volatilidade: o que capturar primeiro num servidor comprometido?

1. **RAM e tabelas de roteamento são os dados mais voláteis da lista — somem ao desligar a máquina.**
2. **B é o gabarito.**

**Fonte: FGV, PC-PI, 2026, questão 19 (gabarito oficial: B)**

> Classificação de tipos de vestígio digital: volátil, não volátil, físico, de rede.

1. **RAM=volátil; arquivos em disco=não volátil; USB=físico; pacotes TCP=de rede.**
2. **B é o gabarito**, única associação integralmente correta.

## Pegadinhas da banca

- Tratar todo crime digital como "crime organizado", ignorando casos individuais/oportunistas.
- Confundir metadados com o conteúdo da comunicação, tratando-os como a mesma coisa para fins de proteção legal.
- Achar que a investigação tecnológica pode acessar dados de conexão/aplicação sem base legal ou ordem judicial.
- Ignorar a dimensão de transnacionalidade e cooperação internacional na investigação de cibercrime organizado.
- Priorizar a coleta de dados persistentes em vez dos voláteis na Ordem de Volatilidade.
- Confundir "físico" (dispositivo tangível) com "não volátil" (propriedade de persistência sem energia).

## Como resolver questões

1. Para dinâmica do crime digital, aplique a lógica da oportunidade criminal (alvo, guardião, agressor) e veja como o ambiente digital altera cada elemento.
2. Para cibercrime organizado, procure sinais de divisão de trabalho, escala e transnacionalidade antes de classificar.
3. Para ferramentas de investigação, associe cada uma ao tipo específico de dado que revela (metadado, conteúdo, localização).
4. Para limites legais, lembre que acesso a dado de conexão/aplicação normalmente exige base legal específica, geralmente ordem judicial.

## Lacunas honestas

- Ainda não há questão real localizada sobre teoria criminológica aplicada ao digital (rotina/oportunidade) ou sobre transnacionalidade do cibercrime organizado neste levantamento — a teoria está coberta acima, falta a camada de prática com questão real conferida.

## Checklist de revisão

- [ ] Sei explicar como o ambiente digital altera os três elementos da oportunidade criminal (alvo, guardião, agressor).
- [ ] Sei as características centrais da criminalidade digital organizada (transnacionalidade, divisão de trabalho, baixo custo de entrada).
- [ ] Sei diferenciar as ferramentas de investigação tecnológica (OSINT, metadados, geolocalização, cooperação com provedores).
- [ ] Sei que acesso a dados de conexão/aplicação exige, em regra, base legal/ordem judicial.
- [ ] Sei a Ordem de Volatilidade na coleta de evidências digitais.
- [ ] Sei classificar vestígios digitais (volátil, não volátil, físico, de rede).
- [ ] Resolvi as duas questões reais comentadas deste tema sem olhar o gabarito antes.
- [ ] Marquei a lacuna de fonte registrada acima.

## Questões relacionadas

- [Resolver questões deste tema](../../provas/ciencias-forenses/008_criminologia-digital-investigacao-tecnologica.md)

## Referências

**Prova/FGV**

- FGV. TCE-SC, 2026. Questão 1 localizada em banco de questões (qconcursos), com gabarito oficial da banca.
- FGV. PC-PI, 2026. Questão 19 localizada em banco de questões (qconcursos), com gabarito oficial da banca.
- Edital PCPR n.º 01/2026, retificado em 31/07/2026 - FGV.

**Material local**

- `Simulados e minisimulados/pacote-exercicios-tecnologia-e-sistemas-de-informacao-e-de-comunicacao-seguranca-cibernetica-e-crimes-digitais-joao-paulo.pdf`

**Atualização/fonte externa**

- [Portal FGV Conhecimento - concursos aplicados](https://conhecimento.fgv.br/concursos) - usado para localizar cadernos oficiais e gabaritos definitivos.

> Regra de uso: este capítulo reescreve e organiza o conteúdo em linguagem própria. Onde não há questão real disponível, a lacuna está registrada explicitamente.
