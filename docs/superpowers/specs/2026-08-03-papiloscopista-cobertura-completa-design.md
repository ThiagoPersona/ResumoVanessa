# Papiloscopista PCPR FGV - Cobertura Completa Do Edital

## Objetivo

Expandir o material `Papiloscopista/` para cobrir todos os temas do edital PCPR n.º 01/2026 para Papiloscopista Policial, com leitura organizada pelo menu lateral, textos completos e estruturados, questões comentadas quando houver fonte local confiável e lacunas explícitas quando a base documental ainda não sustentar comentário seguro.

## Decisão De Escopo

A expansão seguirá a abordagem recomendada: capítulos por macrotema do edital, agrupados por disciplina no menu lateral. Cada capítulo pode ser longo, desde que preserve estrutura visual clara, seções previsíveis e leitura navegável no celular.

O material público não versionará PDFs, apostilas, cadernos de prova, gabaritos integrais ou cópias longas de fonte protegida. O repositório conterá apenas texto próprio, citações curtas quando necessárias, referências, HTML/JS/CSS e imagens próprias ou recortes essenciais permitidos.

## Arquitetura

O site continuará como uma aplicação estática em `Papiloscopista/`, servida por GitHub Pages e renderizada com Docsify.

Arquivos de conteúdo ficam em Markdown. O menu lateral usa `_sidebar.md` com agrupamento por disciplina. Cada capítulo de teoria terá arquivo correspondente em `temas/<disciplina>/...`. Cada banco de questões terá arquivo correspondente em `provas/<disciplina>/...`, mesmo que comece com poucas questões.

O HTML existente continuará responsável por renderizar Markdown, tabelas, imagens e cards de questão. A persistência de respostas continuará em `localStorage`, usando a rota do arquivo como chave.

## Estrutura Final Desejada

```text
Papiloscopista/
  LEITURA_OFICIAL.md
  REGRAS_DO_MATERIAL.md
  TEMPLATE_TEMA.md
  MAPA_DE_QUESTOES.md
  PROVAS.md
  INTENSIVAO.md
  _sidebar.md
  index.html
  provas-utils.js
  assets/
  temas/
    portugues/
    rlm/
    realidade-pr/
    tecnologia/
    ciencias-forenses/
    biologia/
    fisica/
    quimica/
    legislacao/
    penal/
    processo-penal/
    constitucional/
    administrativo/
    direitos-humanos/
  provas/
    portugues/
    rlm/
    realidade-pr/
    tecnologia/
    ciencias-forenses/
    biologia/
    fisica/
    quimica/
    legislacao/
    penal/
    processo-penal/
    constitucional/
    administrativo/
    direitos-humanos/
```

## Menu Lateral Completo

### Início

- Leitura oficial
- Mapa de questões
- Provas
- Intensivão
- Regras do material

### Língua Portuguesa

1. Interpretação e compreensão de texto
2. Organização textual, coesão, coerência e intertextualidade
3. Modos de organização discursiva, tipos textuais e textos literários
4. Frase, sintaxe, ordem, discurso e pontuação
5. Morfologia e classes de palavras
6. Semântica, vocabulário, ortografia, acentuação e crase

### Raciocínio Lógico-Matemático

1. Lógica proposicional, equivalências, quantificadores e conjuntos
2. Números, porcentagem, juros, proporcionalidade e medidas
3. Geometria, plano cartesiano, gráficos e tabelas
4. Problemas lógicos, contagem, probabilidade e raciocínio sequencial

### Realidade Do Paraná

1. História, formação territorial, geografia física e humana do Paraná
2. Cultura, indicadores, economia, governo, políticas públicas e atualidades do Paraná

### Tecnologia, Segurança Cibernética E Crimes Digitais

1. Hardware, software, periféricos, armazenamento, BIOS, UEFI, drivers e firmware
2. Sistemas operacionais, aplicativos, Microsoft 365, LibreOffice, Google Workspace e dispositivos móveis
3. Internet, intranet, navegadores, redes, IP, DNS, VPN, nuvem, cookies, cache, HTML, CSS, JavaScript, bancos de dados e APIs
4. Segurança da informação, autenticação, logs, auditoria, criptografia, certificados, backup, vulnerabilidades, malware, ransomware, phishing e engenharia social
5. Crimes digitais, investigação digital, evidências eletrônicas, cadeia de custódia digital, OSINT e redes sociais
6. Marco Civil da Internet, LGPD, Lei Carolina Dieckmann, Lei n.º 14.155/2021, sigilo funcional e ética digital

### Ciências Forenses

1. Medicina Legal, perícia médico-legal, identificação humana e papiloscopia
2. Antropologia forense, odontologia legal, DNA, reconhecimento facial e inteligência artificial na identificação
3. Sexologia, traumatologia, lesões corporais, instrumentos lesivos, asfixiologia e balística
4. Tanatologia, morte, fenômenos cadavéricos, necropsia, toxicologia e psicopatologia forense
5. Criminalística, vestígios, indícios, evidências, local de crime, preservação e cadeia de custódia
6. Documentoscopia, grafoscopia, análise documental, assinaturas e falsificações
7. Criminologia, escolas criminológicas, vitimologia, controle social, prevenção e política criminal
8. Criminologia digital, investigação tecnológica, deep web, dark web, rastreamento, logs, metadados e OSINT

### Biologia

1. Citologia: composição química, estrutura celular, membrana, organelas, núcleo e divisão celular
2. Genética: DNA, RNA, genes, cromossomos, Mendel, herança ligada ao sexo, determinação do sexo e grupos sanguíneos
3. Embriologia humana, gametogênese, fecundação, desenvolvimento embrionário e formação das cristas papilares
4. Biologia aplicada à identificação humana, bases biológicas das impressões digitais, biometria e características biológicas

### Física

1. Óptica: natureza da luz, reflexão, refração, espelhos, lentes e formação de imagens
2. Luz ultravioleta, fluorescência, ondas, eletromagnetismo e espectro eletromagnético
3. Eletricidade: carga, corrente, diferença de potencial, resistência e circuitos simples
4. Física aplicada à captura de imagens, fotografia digital, sistemas biométricos e equipamentos ópticos/eletrônicos

### Química

1. Estrutura da matéria, modelos atômicos, elementos, tabela periódica e ligações químicas
2. Misturas, métodos de separação, soluções, concentração e solubilidade
3. Reações químicas, balanceamento, velocidade e equilíbrio químico
4. Funções químicas, ácidos, bases, sais, óxidos, química orgânica e propriedades dos compostos orgânicos
5. Química aplicada à identificação humana, reagentes de revelação de impressões digitais e fluorescência

### Legislação Estadual E Institucional

1. Constituição do Estado do Paraná: Administração Pública, servidores, segurança pública e Polícia Civil
2. Lei Complementar Estadual n.º 259/2023: estruturação das carreiras da Polícia Civil do Paraná
3. Lei Federal n.º 14.735/2023: Lei Orgânica Nacional das Polícias Civis
4. Lei Estadual n.º 23.213/2026: Lei Orgânica da Polícia Civil do Paraná
5. Lei Estadual n.º 21.894/2024: Código Disciplinar da Polícia Civil do Paraná
6. Lei Estadual n.º 6.174/1970: regime jurídico dos servidores públicos do Paraná
7. Abuso de Autoridade, Identificação Criminal, LGPD, LAI, sigilo funcional e proteção de informações institucionais

### Direito Penal Aplicado

1. Princípios, aplicação da lei penal, teoria do crime, dolo, culpa, tentativa, concurso de pessoas, penas e extinção da punibilidade
2. Crimes contra a pessoa, patrimônio, dignidade sexual, fé pública e Administração Pública
3. Lei Maria da Penha, Lei de Drogas, Estatuto do Desarmamento, Organizações Criminosas, Abuso de Autoridade, uso legítimo da força, cadeia de custódia e garantias do investigado

### Direito Processual Penal Aplicado

1. Princípios, aplicação da lei processual penal, inquérito policial, notícia do crime, ação penal e direitos do investigado
2. Provas, cadeia de custódia, preservação de local de crime, busca e apreensão, reconhecimento de pessoas e coisas
3. Prisões, liberdade provisória, cautelares, Lei Maria da Penha, Lei de Drogas, Organizações Criminosas, Interceptação Telefônica, Abuso de Autoridade e Estatuto da OAB

### Direito Constitucional

1. Princípios fundamentais, direitos e garantias fundamentais e remédios constitucionais
2. Organização do Estado, competências, Poderes da União e segurança pública no art. 144 da Constituição Federal
3. Controle de constitucionalidade e Constituição do Estado do Paraná aplicada à Administração, servidores, segurança pública e Polícia Civil

### Direito Administrativo

1. Conceito, fontes, princípios, LINDB, Administração direta e indireta
2. Atos administrativos, poderes administrativos, abuso de poder, serviços públicos, licitações e contratos
3. Agentes públicos, responsabilidade civil do Estado, improbidade administrativa e controle da Administração

### Direitos Humanos

1. Teoria geral dos Direitos Humanos, evolução histórica, sistemas de proteção, tratados, Constituição de 1988, democracia e cidadania
2. Grupos vulneráveis, dignidade humana, uso proporcional da força, prevenção da tortura, direitos da pessoa presa e atuação policial
3. Política Nacional de Direitos Humanos, educação em Direitos Humanos, cultura de proteção e Agenda 2030/ODS

## Padrão De Cada Capítulo

Cada capítulo deve seguir o template aprovado:

1. Por que cai
2. Leitura rápida
3. Conteúdo essencial
4. Tabelas e esquemas
5. Pegadinhas da banca
6. Como resolver questões
7. Checklist de revisão
8. Questões relacionadas
9. Referências

Além disso, capítulos jurídicos devem separar:

- texto seco da lei;
- entendimento prático para prova;
- ponto de atualização normativa;
- lacuna quando a versão da lei não foi conferida em fonte oficial no momento da escrita.

Capítulos técnicos e científicos devem separar:

- conceito-base;
- aplicação na identificação humana ou atividade policial;
- diferença que costuma aparecer em alternativa;
- erro comum de candidato.

## Questões

Cada capítulo deve ter um arquivo espelho em `provas/<disciplina>/...`.

Quando houver questão local:

- preservar gabarito local/oficial sem alteração;
- informar fonte;
- reescrever comentário com linguagem própria;
- explicar alternativa correta e incorretas;
- marcar se a questão é FGV ou apoio.

Quando não houver questão suficiente:

- criar o arquivo de questões com seção "Banco em construção";
- listar os subitens do edital que ainda precisam de questão;
- não inventar questão como se fosse prova anterior.

## Mapa De Questões

`MAPA_DE_QUESTOES.md` deve evoluir para conter:

- tabela por disciplina com peso oficial;
- tabela por capítulo com quantidade de questões convertidas;
- separação entre FGV e apoio;
- distribuição de letras por banco convertido;
- pegadinhas recorrentes por disciplina;
- lacunas de cobertura;
- ordem sugerida de estudo;
- estratégia de prova.

## Intensivão

`INTENSIVAO.md` deve virar uma revisão de reta final organizada por peso:

1. Português
2. Tecnologia
3. Ciências Forenses
4. Biologia
5. Legislação Estadual
6. Química e Física aplicadas
7. RLM e Realidade do Paraná
8. Direitos de menor peso

Cada bloco do intensivão deve conter síntese, tabelas de memorização e alertas de pegadinhas.

## Testes E Verificação

Antes de cada commit:

- rodar `node --test Papiloscopista/tests/provas-dashboard.test.js`;
- verificar links Markdown locais;
- servir localmente com `python -m http.server`;
- checar rotas principais por HTTP;
- renderizar ao menos a página inicial e uma página de questões com Chrome headless quando disponível;
- confirmar que `_sidebar.md` é servido no GitHub Pages por causa de `.nojekyll`.

## Critérios De Conclusão

A cobertura completa estará pronta quando:

- todos os capítulos listados no menu lateral existirem;
- `LEITURA_OFICIAL.md`, `_sidebar.md`, `PROVAS.md`, `MAPA_DE_QUESTOES.md` e `INTENSIVAO.md` apontarem para a mesma estrutura;
- cada capítulo tiver conteúdo próprio suficiente para estudo inicial;
- cada arquivo de questões existir, ainda que alguns estejam marcados como banco em construção;
- as lacunas estiverem explícitas;
- testes e links passarem;
- commit e push estiverem feitos no repositório público.
