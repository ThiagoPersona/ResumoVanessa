# 015 - Internet, redes, nuvem, web, bancos e APIs

## Leitura rápida

- Redes de computadores têm uma hierarquia de dispositivos por camada: hub (camada física, retransmite tudo), switch (camada de enlace, direciona por endereço MAC) e roteador (camada de rede, direciona por endereço IP entre redes diferentes) — cada um resolve um problema diferente.
- A internet funciona sobre protocolos em camadas (modelo TCP/IP): endereçamento (IP), nomes de domínio (DNS) e protocolos de aplicação (HTTP/HTTPS, FTP, e-mail).
- Nuvem (cloud computing) tem modelos de serviço bem definidos — SaaS, PaaS e IaaS — que a prova gosta de testar pela diferença de "o que o provedor entrega pronto" x "o que o cliente ainda precisa gerenciar".
- No navegador, cookies têm gerenciamento específico (bloquear, excluir ao fechar, excluir por período, excluir por site) que nem sempre inclui todas as opções "óbvias" — é preciso saber exatamente o que o navegador realmente oferece, não o que "faria sentido" oferecer.

## Por que cai

Este item reúne a infraestrutura que sustenta a comunicação digital: como as redes se organizam fisicamente e logicamente, como a internet decide para onde mandar cada pacote de dados, como a computação em nuvem redistribui responsabilidade entre provedor e cliente, e como o navegador gerencia dados de navegação. Nas provas reais localizadas, a cobrança girou em torno de uso prático do navegador e do papel de um dispositivo de rede específico dentro de uma comparação — não definição isolada.

| Prova (fonte oficial conferida) | Ano | O que caiu neste tema |
|---|---:|---|
| FGV SEAD/AP Papiloscopista, Tipo 1 | 2022 | Q12: comportamento do atalho de teclado Ctrl+Shift+T no Google Chrome. |
| FGV PCMG Perito Criminal Área I, Tipo 1 | 2024 | Q23: papel do switch em comparação com hub, repetidor e bridge. |
| FGV PCAM Investigador de Polícia, Tipo 1 | 2021 | Q22: quais operações de gerenciamento de cookies o Google Chrome realmente oferece. |

## Conteúdo completo orientado ao edital

### Modelo de camadas: por onde um dado passa até chegar ao destino

Redes de computadores funcionam em camadas, cada uma responsável por um aspecto da comunicação. De forma simplificada (aproximando o modelo TCP/IP ao OSI, que a FGV costuma citar por número de camada):

| Camada (OSI) | Função | Exemplo de protocolo/dispositivo |
|---|---|---|
| Física (1) | Transmite bits como sinais elétricos/ópticos/sem fio | Cabos, hub |
| Enlace (2) | Organiza bits em quadros, endereça por MAC dentro da rede local | Switch, endereço MAC |
| Rede (3) | Endereça e encaminha pacotes entre redes diferentes | Roteador, endereço IP |
| Transporte (4) | Garante entrega confiável (TCP) ou rápida sem garantia (UDP) | TCP, UDP |
| Aplicação (7) | Protocolos que os programas usam diretamente | HTTP/HTTPS, FTP, e-mail (SMTP/IMAP/POP) |

### Dispositivos de interconexão: hub, switch, roteador e bridge

Este é um dos pontos mais cobrados em prova real — cada dispositivo resolve um problema diferente:

| Dispositivo | Camada | Como decide para onde mandar o dado |
|---|---|---|
| Hub | Física (1) | Não decide — retransmite o sinal para todas as portas indiscriminadamente |
| Switch | Enlace (2) | Direciona por endereço MAC, entregando o quadro só à porta de destino |
| Bridge | Enlace (2) | Interconecta apenas dois segmentos de rede, filtrando tráfego entre eles |
| Roteador | Rede (3) | Direciona pacotes por endereço IP, conectando redes diferentes (por exemplo, a rede local à internet) |

O switch é, na prática, uma evolução do hub: em vez de replicar o sinal para todos, ele aprende quais dispositivos estão em cada porta (pelo endereço MAC) e envia o quadro só para o destino certo, reduzindo colisões e tráfego desnecessário.

### Endereçamento IP e DNS

Cada dispositivo numa rede TCP/IP tem um **endereço IP**, que o identifica de forma única (dentro da rede local ou globalmente, conforme o tipo de endereço). Como decorar sequências de números não é prático para humanos, o **DNS (Domain Name System)** funciona como uma "agenda telefônica" da internet, traduzindo nomes de domínio (como um endereço de site) para o endereço IP correspondente do servidor.

### Protocolos de aplicação mais cobrados

| Protocolo | Função |
|---|---|
| HTTP | Transfere páginas e recursos da web, sem criptografia |
| HTTPS | Igual ao HTTP, mas com criptografia (camada de segurança TLS/SSL) |
| FTP | Transferência de arquivos entre computadores |
| SMTP | Envio de e-mail |
| IMAP/POP | Recebimento/acesso a e-mail (IMAP sincroniza com o servidor; POP normalmente baixa e remove do servidor) |

### Computação em nuvem: modelos de serviço

A computação em nuvem oferece recursos de TI sob demanda, pela internet, com diferentes níveis de responsabilidade entre provedor e cliente:

| Modelo | O que o provedor entrega pronto | O que o cliente ainda gerencia |
|---|---|---|
| IaaS (Infraestrutura como Serviço) | Servidores virtuais, armazenamento, rede | Sistema operacional, aplicações, dados |
| PaaS (Plataforma como Serviço) | Infraestrutura + ambiente de execução (runtime, banco de dados gerenciado) | Só a aplicação e os dados |
| SaaS (Software como Serviço) | Aplicação pronta para uso via navegador/app | Praticamente nada além dos próprios dados e configurações de uso |

Modelos de implantação da nuvem: **pública** (infraestrutura compartilhada entre vários clientes, gerida por um provedor terceiro), **privada** (infraestrutura dedicada a uma única organização) e **híbrida** (combinação das duas, com dados/cargas transitando entre ambientes conforme a necessidade).

### Navegador web: gerenciamento de cookies e outras funcionalidades

**Cookies** são pequenos arquivos de dados que sites armazenam no navegador do usuário, usados para lembrar sessão de login, preferências, ou para rastreamento. Navegadores modernos oferecem opções específicas de gerenciamento — mas nem toda combinação "lógica" de opção realmente existe: por exemplo, é comum haver a opção de **bloquear cookies**, **excluir cookies automaticamente ao fechar o navegador**, **excluir cookies de um período específico** e **excluir cookies de um site específico**, mas nem sempre existe uma opção simétrica de "excluir cookies ao iniciar o navegador" — é preciso testar cada opção específica contra a interface real do programa, não presumir simetria.

**Atalhos de navegador** também são cobrados por comportamento exato: por exemplo, um atalho de "reabrir aba" tipicamente reabre a aba fechada mais recentemente, não necessariamente todo o histórico de abas fechadas — a diferença entre "recuperar a mais recente" e "listar as últimas fechadas" é sutil e decisiva para escolher a alternativa certa.

### Bancos de dados: conceitos essenciais

Um **banco de dados relacional** organiza informação em tabelas, com linhas (registros) e colunas (campos), relacionadas entre si por chaves (chave primária identifica um registro de forma única; chave estrangeira referencia um registro de outra tabela). A linguagem padrão para consultar e manipular esses dados é o **SQL** (Structured Query Language), com comandos básicos como SELECT (consultar), INSERT (inserir), UPDATE (atualizar) e DELETE (excluir).

### APIs: como sistemas diferentes conversam entre si

Uma **API (Application Programming Interface)** é um conjunto de regras que permite que diferentes sistemas de software troquem dados e funcionalidades entre si, sem que um precise conhecer os detalhes internos do outro. O padrão mais comum na web atual é a **API REST**, que usa os métodos do próprio protocolo HTTP (GET para consultar, POST para criar, PUT/PATCH para atualizar, DELETE para remover) para representar operações sobre recursos identificados por endereços (URLs).

## Prioridades FGV dentro deste tema

| Prioridade | Por que é prioridade | Como treinar |
|---|---|---|
| Diferenciar hub, switch, bridge e roteador pela camada e pelo critério de encaminhamento | Evidenciado na questão real PCMG Q23 | Associe cada dispositivo à camada OSI e ao critério de decisão (retransmite tudo x MAC x IP) |
| Saber exatamente quais operações de gerenciamento de cookies um navegador real oferece | Evidenciado na questão real PCAM Q22 | Não presuma simetria de opções (bloquear/excluir); teste cada uma contra o comportamento real do programa |
| Reconhecer o comportamento exato de um atalho de navegador | Evidenciado na questão real SEAD/AP Q12 | Diferencie "reabrir a última aba fechada" de "listar as últimas abas fechadas" |
| Diferenciar os modelos de nuvem (IaaS, PaaS, SaaS) pelo que o provedor entrega pronto | Base teórica do tema | Ordene mentalmente do menos pronto (IaaS) ao mais pronto (SaaS) |

## Diferenças que a banca costuma trocar

| Conceito A | Conceito B | Como a banca troca | Como não cair |
|---|---|---|---|
| Hub (camada física, retransmite tudo) | Switch (camada de enlace, direciona por MAC) | Ambos "interconectam" dispositivos numa rede | Switch aprende endereços MAC e direciona; hub apenas replica para todas as portas |
| Switch (rede local, por MAC) | Roteador (entre redes, por IP) | Ambos "encaminham" dados de forma direcionada | Switch atua dentro da mesma rede local; roteador conecta redes diferentes |
| HTTP | HTTPS | Ambos transferem conteúdo web | HTTPS adiciona criptografia (TLS/SSL) sobre o HTTP |
| IaaS | SaaS | Ambos são "nuvem", mas entregam níveis diferentes de prontidão | IaaS entrega só infraestrutura; SaaS entrega a aplicação pronta para uso |

## Como caiu na prova: questões comentadas

**Fonte: FGV, SEAD/AP Papiloscopista, Tipo 1 - Branca, 2022, questão 12 (gabarito oficial: E)**

> No Google Chrome, o atalho de teclado Ctrl+Shift+T permite
>
> (A) reabrir o conteúdo da aba corrente numa nova aba. (B) recuperar abas a partir do histórico. (C) recuperar todas as abas ativas quando o Google Chrome foi fechado pela última vez. (D) recuperar uma aba numa lista das dez últimas abas fechadas. (E) recuperar uma aba recém-fechada.

1. **Lembre a função exata do atalho**: Ctrl+Shift+T é o atalho padrão de "reabrir aba fechada" nos principais navegadores baseados em Chromium.
2. **Descarte as alternativas que exageram o alcance do atalho**: C descreve recuperar TODAS as abas de uma sessão fechada (isso é outra funcionalidade, de restauração de sessão); D descreve uma lista de dez abas (o atalho, usado uma vez, recupera a mais recente — usos repetidos vão recuperando as anteriores em ordem, mas a descrição direta do atalho não é "uma lista").
3. **E é a descrição mais precisa e direta**: recupera a aba fechada mais recentemente.

**Fonte: FGV, PCMG Perito Criminal Área I, Tipo 1, 2024, questão 23 (gabarito oficial: C)**

> No contexto das redes de computadores, considere as funções dos dispositivos de interconexão a seguir: hubs, repetidores, bridges e comutadores (switches). Assinale a opção que descreve corretamente o papel de um switch em comparação aos demais dispositivos.
>
> (A) Um switch opera na camada física (camada 1) e retransmite sinais elétricos para todos os dispositivos conectados. (B) Um switch segmenta a rede em domínios de broadcast, restringindo o tráfego de pacotes. (C) Um switch opera na camada de enlace (camada 2), encaminhando quadros para destinos específicos com base em endereços MAC. (D) Um switch replica pacotes para todos os dispositivos da rede, independentemente do destino, como faz um hub. (E) Um switch só pode interconectar dois segmentos de rede, como faz uma bridge, mas com menor eficiência.

1. **Lembre a camada de operação do switch**: camada de enlace (2), diferente do hub (camada física, 1).
2. **Descarte A e D**: descrevem o comportamento do hub (retransmitir para todos), não do switch.
3. **Descarte B**: switch não segmenta domínios de broadcast (isso é mais associado a VLANs ou a roteadores, que separam domínios de broadcast); switch reduz domínios de colisão, não de broadcast.
4. **Descarte E**: switch não se limita a dois segmentos como uma bridge simples — pode interconectar múltiplas portas/dispositivos simultaneamente, com eficiência maior.
5. **C é o gabarito**, descrição correta e precisa do switch.

**Fonte: FGV, PCAM Investigador de Polícia, Tipo 1, 2021, questão 22 (gabarito oficial: D)**

> Dado que o navegador web Google Chrome permite o gerenciamento de cookies, analise as ações de gerenciamento listadas: 1. bloquear cookies; 2. excluir cookies ao fechar o Google Chrome; 3. excluir cookies ao iniciar o Google Chrome; 4. excluir cookies de um período; 5. excluir cookies de um site. Dessa lista, as operações oferecidas pelo Google Chrome são
>
> (A) 2, 3, 4, somente. (B) 1, 2, 3, 5, somente. (C) 1, 4, 5, somente. (D) 1, 2, 4, 5, somente. (E) 1, 2, 3, 4, 5.

1. **Teste cada operação contra a interface real do Chrome**: bloquear cookies (1) — existe; excluir ao fechar o navegador (2) — existe (configuração de limpar dados ao sair); excluir ao **iniciar** o navegador (3) — não existe como opção distinta e nomeada dessa forma; excluir de um período específico (4) — existe (limpar dados de navegação com intervalo de tempo); excluir cookies de um site específico (5) — existe (configurações de site).
2. **Elimine a opção 3**, que não corresponde a uma funcionalidade real e distinta do Chrome.
3. **D é o gabarito**: 1, 2, 4 e 5, excluindo a opção 3.

## Pegadinhas da banca

- Confundir a camada de operação de hub, switch e roteador, ou atribuir a um dispositivo o comportamento de outro.
- Achar que switch segmenta domínio de broadcast (função mais associada a VLAN/roteador) em vez de reduzir domínio de colisão.
- Presumir que toda combinação lógica de funcionalidade de navegador realmente existe na interface (como "excluir cookies ao iniciar", que não existe no Chrome).
- Confundir "reabrir a aba mais recente fechada" com "listar as últimas N abas fechadas" ou "restaurar toda a sessão anterior".
- Tratar HTTP e HTTPS como idênticos, ignorando a camada de criptografia do segundo.
- Confundir os três modelos de nuvem (IaaS, PaaS, SaaS) quanto ao que vem pronto e ao que o cliente ainda gerencia.

## Como resolver questões

1. Para dispositivos de rede, identifique primeiro a camada OSI de operação, depois o critério usado para encaminhar o dado (nenhum, MAC ou IP).
2. Para funcionalidades de navegador/aplicativo, não presuma que uma opção existe só porque "faria sentido" — teste contra o comportamento real conhecido do programa.
3. Para nuvem, ordene mentalmente do menos gerenciado pelo provedor (IaaS) ao mais gerenciado (SaaS) antes de classificar um cenário.
4. Para protocolos, associe cada um à sua função central (transferir página, enviar e-mail, transferir arquivo) antes de comparar alternativas.

## Lacunas honestas

- Ainda não há questão real localizada especificamente sobre DNS, endereçamento IP ou bancos de dados/SQL neste levantamento — a teoria está coberta acima, falta a camada de prática com questão real conferida.
- Ainda não há questão real localizada sobre APIs REST neste levantamento.

## Checklist de revisão

- [ ] Sei a camada OSI de operação de hub, switch, bridge e roteador, e o critério de encaminhamento de cada um.
- [ ] Sei diferenciar HTTP de HTTPS.
- [ ] Sei diferenciar IaaS, PaaS e SaaS pelo que o provedor entrega pronto.
- [ ] Sei que nem toda funcionalidade "lógica" de navegador existe de fato na interface real do programa.
- [ ] Sei os conceitos básicos de banco de dados relacional (tabela, chave primária, chave estrangeira) e os comandos SQL essenciais.
- [ ] Sei o que é uma API REST e os métodos HTTP associados a cada operação.
- [ ] Resolvi as três questões reais comentadas deste tema sem olhar o gabarito antes.
- [ ] Marquei as lacunas de fonte registradas acima.

## Questões relacionadas

- [Resolver questões deste tema](../../provas/tecnologia/003_internet-redes-nuvem-web-bancos-apis.md)

## Referências

**Prova/FGV**

- FGV. SEAD/AP - Peritos 2022 - Papiloscopista, Tipo 1 - Branca. Caderno oficial, questão 12. Gabarito definitivo publicado pela FGV.
- FGV. PCMG 2024 - Perito Criminal Área I, Tipo 1. Caderno oficial, questão 23. Gabarito definitivo publicado pela FGV.
- FGV. PCAM 2021 - Investigador de Polícia, 4ª Classe, Tipo 1. Caderno oficial, questão 22. Gabarito definitivo publicado pela FGV.
- Edital PCPR n.º 01/2026, retificado em 31/07/2026 - FGV.

**Material local**

- `Materiais QB/Informatica/`
- `Questões FGV/Exercicios informatica.pdf`

**Atualização/fonte externa**

- [Portal FGV Conhecimento - concursos aplicados](https://conhecimento.fgv.br/concursos) - usado para localizar cadernos oficiais e gabaritos definitivos das provas citadas acima.

> Regra de uso: este capítulo reescreve e organiza o conteúdo em linguagem própria. As questões citadas são reais, com fonte, ano e gabarito oficial conferidos; onde não há questão real disponível, a lacuna está registrada explicitamente.
