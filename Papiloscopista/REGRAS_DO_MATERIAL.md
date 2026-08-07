# Regras Do Material

## Fonte-mãe

O Edital PCPR n.º 01/2026, retificado em 31/07/2026, para Papiloscopista Policial é a fonte principal deste projeto. O menu lateral, a ordem de estudo e cada capítulo devem corresponder a item real do edital.

## Norte

Este material existe para uma coisa: aprovação na banca FGV. O texto deve ser denso o suficiente para que o candidato estude **só pelo capítulo**, sem precisar abrir o PDF, a apostila ou o livro de origem para entender o item do edital. Um capítulo curto, genérico ou raso não cumpre esse objetivo, mesmo que "cubra" o tópico.

**Ensinar o assunto inteiro vem antes de mapear pegadinha.** O capítulo precisa cobrir o conteúdo completo do item do edital como um professor ensinaria do zero — todos os subtópicos, todas as classificações, com definição e exemplo — e só depois empilhar a camada de "como a FGV cobra isso". Não é aceitável escrever um capítulo derivado apenas dos pontos que apareceram em questão real conferida: isso ensina a decorar gabarito de três questões, não a dominar o tema. Questão real é evidência e prática, não o limite do que deve ser ensinado.

## Hierarquia de fontes

1. **Prova oficial FGV do próprio cargo (Papiloscopista) com gabarito conferido.** Prioridade máxima — mesmo cargo, mesma banca.
2. **Prova oficial FGV de cargo policial/pericial semelhante, com gabarito conferido** (Perito Criminal, Investigador, Inspetor, Escrivão de bancas como SEAD/AP, PCMG, PCAM, PCRJ, PCRN, PCPI). Usada para ampliar incidência quando o próprio cargo não tem volume suficiente.
3. **Edital PCPR 01/2026 e retificações.** Define o menu, a ordem e o peso de cada capítulo.
4. **Lei seca, norma institucional e fonte oficial atual** (Planalto, Constituição do Paraná, sites oficiais do Estado). Prevalece sobre qualquer resumo em caso de dúvida ou atualização.
5. **PDFs locais e material de cursinho.** Usados para triagem de tema e apoio de explicação, nunca copiados literalmente.
6. **Bancos secundários** (QConcursos, Gran Cursos, PCI Concursos, Quebrando Questões e similares). Só para localizar prova ou conferir incidência; nunca como origem de comentário copiado.

Regra de conflito: se houver divergência entre fontes, vale a mais recente e a de nível hierárquico mais alto nesta lista.

## Questões reais vs questões autorais

- **Questão real** é aquela extraída de caderno oficial FGV, com enunciado fiel, alternativas fiéis e gabarito oficial conferido (prova, ano, número). É sempre a preferência do projeto — o objetivo é estudar para a banca real, não para uma banca inventada.
- **Questão autoral** é escrita por este projeto, no padrão observado da FGV, quando ainda não há questão real suficiente para o tema. Deve estar identificada como autoral no próprio card, nunca disfarçada de questão oficial.
- Quando um tema tiver poucas questões reais cobrindo o exato item do edital, isso deve ser registrado como lacuna honesta — não deve ser preenchido forçando a classificação de uma questão real em um tema ao qual ela não pertence de fato.
- Cargo diferente (Perito, Investigador, Inspetor) mas mesma banca FGV é fonte válida para disciplinas que não dependem do cargo (Português, RLM, Realidade PR, Direito, Tecnologia geral). Isso deve ficar explícito na citação da fonte.

## Estilo

- Escrever em linguagem própria, clara e prática.
- Priorizar aprovação: conceito, diferença, pegadinha e forma de resolver.
- Não copiar trechos longos de PDFs, apostilas ou livros.
- Não inventar questão, gabarito, estatística, jurisprudência ou atualização legislativa.
- Quando faltar fonte, escrever a lacuna de modo explícito.
- Tabelas para comparar conceitos parecidos, diferenças e pegadinhas.
- Não transformar o capítulo em bullet solto: desenvolver em prosa técnica quando o assunto pedir explicação encadeada.

## Questões

- Preservar o gabarito oficial ou local conferido.
- Identificar fonte, ano, prova e número quando disponível.
- Separar FGV de questão de apoio.
- Comentar a alternativa correta e cada alternativa errada.
- Não usar justificativa genérica como "está errada porque o gabarito é outro".

## Menu do site (`_sidebar.md`)

O menu lateral é curado à mão e mostra apenas **Provas** + as disciplinas/temas. As páginas de bastidor do projeto (Leitura Oficial, Mapa de Questões, Fontes de Questões, Validação por Provas, Lacunas e Reforços, Intensivão, Regras) continuam existindo como documentação interna — usadas por quem constrói o conteúdo — mas não aparecem mais na navegação do estudante.

**Atenção:** `scripts/generate-papiloscopista-content.js` ainda gera um `_sidebar.md` com todas as páginas de bastidor (via `buildSidebarMarkdown()` em `content-manifest.js`). Não rodar esse gerador sobre `_sidebar.md` (nem sobre temas/provas já reescritos à mão) sem antes conferir se ele não vai sobrescrever conteúdo curado.

## Checklist para um capítulo ficar pronto

- [ ] Tem "Por que cai" com evidência real, não afirmação genérica.
- [ ] Tem conteúdo completo em prosa, suficiente para estudar sem abrir outra fonte.
- [ ] Tem tabela de diferenças entre conceitos que a banca costuma trocar.
- [ ] Tem pelo menos uma questão real comentada, quando existir fonte disponível; se não existir, a lacuna está registrada.
- [ ] Tem pegadinhas da banca baseadas em padrão observado, não em suposição.
- [ ] Tem passo a passo de resolução de questão.
- [ ] Tem checklist de revisão e referências completas (prova/FGV, material local, fonte externa).
- [ ] O arquivo pode ser estudado sozinho, sem precisar abrir o PDF de origem.

## Fontes oficiais

Para legislação, norma institucional, dados atuais do Paraná e conteúdo sujeito a mudança, conferir fonte oficial antes de tratar como atual.

## Bancos secundários

- Bancos como QConcursos, Gran Cursos, PCI Concursos e similares podem ser usados para localizar provas e conferir incidência, mas devem ser marcados como fonte secundária.
- Quando houver caderno oficial da banca ou do órgão, a fonte oficial prevalece sobre banco secundário.
- Conteúdo de comentários privados de bancos não deve ser copiado para este projeto.
- Quando a questão for adaptada para treino, ela deve ser identificada como questão autoral/inspirada no padrão, e não como reprodução oficial.

## Publicação

- Não versionar PDFs, livros, apostilas, cadernos completos ou gabaritos integrais.
- Manter `.nojekyll` para o GitHub Pages.
- Testar links, renderização Markdown e desempenho das questões antes de publicar.
