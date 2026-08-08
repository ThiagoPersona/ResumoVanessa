# 017 - Crimes digitais, evidências eletrônicas e OSINT

## Leitura rápida

- Evidência digital é frágil e volátil: pode ser alterada, corrompida ou perdida por manuseio incorreto — por isso a cadeia de custódia digital segue a mesma lógica da cadeia de custódia física, mas com cuidados técnicos adicionais (não ligar/desligar um dispositivo sem protocolo, preservar hash de integridade).
- O **hash** é a ferramenta central para provar que uma evidência digital não foi alterada entre a coleta e a apresentação — funciona como uma "impressão digital" matemática do arquivo.
- Crimes digitais se dividem em duas categorias: crimes em que o computador é o **alvo** (invasão, dados roubados) e crimes em que o computador é o **meio/ferramenta** (fraude, ameaça, difamação praticada pela internet).
- OSINT (Open Source Intelligence) é a coleta de informação a partir de fontes **abertas e públicas** — não envolve invasão nem acesso não autorizado; a legalidade da fonte é o que a diferencia de outras técnicas de investigação.

## Por que cai

Este item cobre a intersecção entre tecnologia e investigação criminal: como identificar, preservar e usar evidências digitais dentro da lei, os tipos de crime que ocorrem no ambiente digital, e a metodologia de investigação em fontes abertas (OSINT). É diretamente aplicável à rotina de um papiloscopista e de qualquer policial que lide com evidência eletrônica em investigação.

| Prova (fonte oficial conferida) | Ano | O que caiu neste tema |
|---|---:|---|
| FGV PC-PI | 2026 | Q7: identificar a Lei Carolina Dieckmann como a norma que tipifica a invasão de dispositivo informático. |

### Lei Carolina Dieckmann (Lei nº 12.737/2012)

Promulgada após o vazamento de fotos íntimas da atriz Carolina Dieckmann, essa lei inseriu o **Art. 154-A no Código Penal**, tipificando o crime de **invasão de dispositivo informático** (acessar dispositivo alheio, conectado ou não à rede, mediante violação indevida de mecanismo de segurança, para obter, adulterar ou destruir dados/informações, ou instalar vulnerabilidades). Não deve ser confundida com:

- **Lei nº 12.735/2012** (mesmo pacote legislativo, mesma data): trata da estruturação de órgãos policiais especializados no combate a crimes cibernéticos, **não** tipifica condutas.
- **Marco Civil da Internet** (Lei nº 12.965/2014): estabelece princípios, direitos e deveres para uso da internet, sem tipificar crimes.
- **LGPD** (Lei nº 13.709/2018): trata de proteção de dados pessoais, sem natureza penal.

## Conteúdo completo orientado ao edital

### Evidência digital: características que a diferenciam da evidência física

| Característica | O que significa na prática |
|---|---|
| Volatilidade | Alguns dados (como conteúdo em memória RAM) desaparecem ao desligar o equipamento — a ordem de coleta importa |
| Facilidade de alteração | Um arquivo pode ser modificado, movido ou apagado com poucos cliques, muitas vezes sem deixar rastro visível a olho nu |
| Duplicabilidade | É possível fazer cópias forenses exatas (bit a bit) sem alterar o original, permitindo análise sem risco à fonte primária |
| Dependência de metadado | Informação sobre o arquivo (data de criação, modificação, geolocalização) pode ser tão relevante quanto o conteúdo em si |

### Cadeia de custódia digital

A cadeia de custódia digital documenta cada etapa pela qual uma evidência eletrônica passa — coleta, transporte, armazenamento, análise — de forma a garantir que ela chegue ao julgamento íntegra e sem manipulação indevida. Elementos centrais:

- **Preservação do estado original**: sempre que possível, trabalhar sobre uma cópia forense (imagem bit a bit), preservando o dispositivo original intocado.
- **Hash de integridade**: calcular um hash (impressão digital matemática, como MD5, SHA-1 ou SHA-256) do arquivo/dispositivo no momento da coleta e conferir esse mesmo hash em cada etapa posterior — se o hash mudar, o dado foi alterado.
- **Registro documentado**: cada pessoa que teve acesso à evidência, quando e por quê, deve ficar registrado, assim como o local de armazenamento em cada momento.
- **Metadados como evidência**: informações sobre o arquivo (quando foi criado, modificado, por qual dispositivo/usuário, localização) muitas vezes são tão importantes quanto o conteúdo do arquivo em si para reconstituir uma linha do tempo.

### Tipos de crimes digitais: alvo x meio

| Categoria | O computador/sistema é... | Exemplos |
|---|---|---|
| Crime próprio/puro | O alvo direto do ataque | Invasão de dispositivo, obtenção não autorizada de dados, sabotagem de sistema |
| Crime impróprio/impuro | O meio/ferramenta para outro crime | Fraude eletrônica, ameaça por mensagem, estelionato digital, divulgação não autorizada de imagem |

Essa distinção importa porque a tipificação penal e a linha de investigação mudam: um crime "próprio" foca na perícia sobre o sistema invadido; um crime "impróprio" foca no crime-fim (fraude, ameaça), usando a tecnologia como meio de prova de autoria e materialidade.

### OSINT: inteligência de fontes abertas

**OSINT (Open Source Intelligence)** é a técnica de coletar, organizar e analisar informação disponível publicamente — redes sociais, registros públicos, sites, mecanismos de busca, imagens e vídeos publicados — para fins de investigação, sem exigir acesso não autorizado a sistemas privados. Características centrais:

- **Fonte aberta e lícita**: a informação já está publicamente acessível; o trabalho de OSINT está em localizar, correlacionar e verificar essa informação, não em obtê-la por meio ilegal.
- **Verificação e correlação**: um dado isolado (uma foto, um post) tem pouco valor probatório sozinho; o valor da técnica está em cruzar múltiplas fontes abertas para confirmar identidade, localização, cronologia ou vínculo.
- **Limite legal**: mesmo sendo fonte aberta, o uso da informação coletada por OSINT ainda precisa respeitar direitos como privacidade e proteção de dados pessoais (ver tema de legislação e ética digital) — "estar disponível publicamente" não significa "pode ser usado para qualquer finalidade sem limite".

### Perícia forense digital: visão geral do processo

A investigação de um dispositivo digital costuma seguir etapas análogas à perícia de local de crime físico: **preservação** (isolar o dispositivo, evitar alteração), **coleta** (cópia forense, com hash), **exame** (análise técnica dos dados copiados, nunca do original), **análise** (interpretação dos achados no contexto da investigação) e **apresentação** (laudo documentando método, achados e cadeia de custódia).

## Prioridades FGV dentro deste tema

| Prioridade | Por que é prioridade | Como treinar |
|---|---|---|
| Explicar a função do hash na cadeia de custódia digital | Ponto técnico central de qualquer prova de evidência digital | Associe hash a "impressão digital do arquivo" que comprova ausência de alteração |
| Diferenciar crime digital próprio (alvo) de impróprio (meio) | Organiza a lógica de investigação e tipificação | Para cada exemplo, pergunte: o sistema foi atacado, ou foi usado como ferramenta para outro crime? |
| Reconhecer OSINT como técnica de fonte aberta e lícita, não invasão | Evita confundir investigação legítima com acesso não autorizado | Teste: a informação já estava publicamente acessível, ou exigiu burlar alguma proteção? |
| Priorizar cópia forense sobre manuseio do dispositivo original | Preserva a integridade da evidência para uso judicial | Sempre pergunte: a análise está sendo feita sobre uma cópia íntegra, ou sobre o original? |

## Diferenças que a banca costuma trocar

| Conceito A | Conceito B | Como a banca troca | Como não cair |
|---|---|---|---|
| Crime digital próprio (sistema é o alvo) | Crime digital impróprio (sistema é o meio) | Ambos "envolvem tecnologia" | Pergunte se o ataque mirou o próprio sistema, ou se a tecnologia foi ferramenta para outro crime |
| Hash (verifica integridade) | Criptografia (esconde conteúdo) | Ambos usam "matemática" sobre o arquivo | Hash não é reversível e serve para provar que nada mudou; criptografia esconde e pode ser revertida com chave |
| OSINT (fonte aberta, lícita) | Invasão/acesso não autorizado | Ambos podem envolver "coletar informação sobre alguém" | OSINT usa apenas o que já é publicamente acessível, sem burlar proteção nenhuma |
| Evidência (original preservado) | Cópia forense (usada para análise) | Ambos são "o dado" em algum momento da perícia | Análise deve recair sobre a cópia forense; o original fica preservado e intocado |

## Como caiu na prova: questão comentada

**Fonte: FGV, PC-PI, 2026, questão 7 (gabarito oficial: A)**

> Assinale a lei que tipifica crimes informáticos, ao incluir no ordenamento penal brasileiro o delito de invasão de dispositivo informático.

1. **A Lei Carolina Dieckmann (12.737/2012) inseriu o Art. 154-A no CP, tipificando a invasão de dispositivo informático.**
2. **As demais alternativas descrevem leis de outra natureza** (interceptação, estrutura policial, proteção de dados, princípios de uso da internet), nenhuma delas tipifica esse crime.
3. **A é o gabarito.**

## Pegadinhas da banca

- Confundir a Lei 12.737/2012 (Carolina Dieckmann, tipifica a invasão) com a Lei 12.735/2012 (mesmo pacote, mas trata de estrutura policial).
- Tratar qualquer crime cometido "com auxílio de computador" como se fosse tecnicamente idêntico a uma invasão de sistema.
- Confundir hash com criptografia, tratando os dois como se resolvessem o mesmo problema.
- Achar que OSINT permite qualquer uso da informação coletada, sem limite legal, só porque a fonte é pública.
- Analisar ou manusear o dispositivo original em vez de trabalhar sobre cópia forense, comprometendo a cadeia de custódia.
- Ignorar metadados (data, geolocalização, autor do arquivo) como parte relevante da evidência.

## Como resolver questões

1. Para crimes digitais, classifique primeiro se o sistema foi alvo ou meio, antes de decidir a linha de investigação.
2. Para evidência digital, verifique se o cenário descrito preserva o original e trabalha sobre cópia com hash conferido.
3. Para OSINT, teste se a informação foi obtida de fonte pública sem burlar proteção alguma.
4. Para qualquer questão de perícia digital, siga a lógica preservação → coleta → exame → análise → apresentação.

## Lacunas honestas

- Ainda não há questão real localizada sobre OSINT, hash forense ou cadeia de custódia digital especificamente neste levantamento — a teoria está coberta acima, falta a camada de prática com questão real conferida.

## Checklist de revisão

- [ ] Sei explicar por que evidência digital é volátil e facilmente alterável.
- [ ] Sei a função do hash na cadeia de custódia digital.
- [ ] Sei diferenciar crime digital próprio (sistema é alvo) de impróprio (sistema é meio).
- [ ] Sei o que caracteriza OSINT como técnica de fonte aberta e lícita.
- [ ] Sei identificar a Lei Carolina Dieckmann e não confundo com a Lei 12.735/2012.
- [ ] Resolvi a questão real comentada deste tema sem olhar o gabarito antes.
- [ ] Sei as etapas do processo de perícia forense digital (preservação, coleta, exame, análise, apresentação).
- [ ] Marquei a lacuna de fonte registrada acima.

## Questões relacionadas

- [Resolver questões deste tema](../../provas/tecnologia/005_crimes-digitais-evidencias-osint.md)

## Referências

**Prova/FGV**

- FGV. PC-PI, 2026. Questão 7 localizada em banco de questões (qconcursos), com gabarito oficial da banca.
- Edital PCPR n.º 01/2026, retificado em 31/07/2026 - FGV.

**Material local**

- `Curso Alfacon/Tecnologias e sistema de informacao e seguranca cibernética.pdf`
- `Simulados e minisimulados/pacote-exercicios-tecnologia-e-sistemas-de-informacao-e-de-comunicacao-seguranca-cibernetica-e-crimes-digitais-joao-paulo.pdf`

**Atualização/fonte externa**

- [Portal FGV Conhecimento - concursos aplicados](https://conhecimento.fgv.br/concursos) - usado para localizar cadernos oficiais e gabaritos definitivos.

> Regra de uso: este capítulo reescreve e organiza o conteúdo em linguagem própria. Onde não há questão real disponível, a lacuna está registrada explicitamente.
