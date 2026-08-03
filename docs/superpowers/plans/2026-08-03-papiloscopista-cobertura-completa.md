# Papiloscopista Cobertura Completa Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Expandir `Papiloscopista/` para cobrir todo o edital PCPR n.º 01/2026 para Papiloscopista Policial, mantendo o edital como base auditável do menu, dos capítulos e das questões.

**Architecture:** O site permanece estático com Docsify e Markdown. Um manifesto local passa a ser a fonte estrutural dos capítulos; testes garantem que sidebar, arquivos de tema e arquivos de questões contemplem todos os itens do manifesto. O conteúdo é escrito em Markdown, com gabaritos preservados apenas quando houver fonte local confiável.

**Tech Stack:** Markdown, HTML/CSS/JavaScript estático, Docsify 4, Node.js `node:test`, Python apenas para validações locais e leitura de PDFs quando necessário.

## Global Constraints

- O edital PCPR n.º 01/2026 para Papiloscopista Policial é a fonte-mãe; todo capítulo deve mapear para disciplina e item do edital.
- O material público não versiona PDFs, apostilas, cadernos de prova, gabaritos integrais ou cópias longas de fonte protegida.
- Todo capítulo de tema deve seguir: Por que cai, Leitura rápida, Conteúdo essencial, Tabelas e esquemas, Pegadinhas da banca, Como resolver questões, Checklist de revisão, Questões relacionadas e Referências.
- Quando houver dúvida ou falta de fonte local, escrever **Lacuna de aprofundamento** com o ponto exato faltante.
- Não inventar prova anterior, gabarito, jurisprudência, legislação ou estatística de incidência.
- Questões devem preservar gabarito local/oficial e separar item FGV de item de apoio.
- Fontes jurídicas e normativas atualizadas devem ser conferidas em fonte oficial antes de serem tratadas como atuais.
- O leitor online deve continuar funcionando no GitHub Pages, com `.nojekyll`, sidebar, Markdown, tabelas, imagens, quiz em `localStorage`, desempenho por tema e botão de limpar respostas.

---

## File Structure

### Create

- `Papiloscopista/content-manifest.js`: manifesto dos grupos, disciplinas e capítulos do edital.
- `Papiloscopista/tests/content-coverage.test.js`: testes de cobertura estrutural do manifesto.
- `Papiloscopista/temas/portugues/*.md`: 6 capítulos.
- `Papiloscopista/temas/rlm/*.md`: 4 capítulos.
- `Papiloscopista/temas/realidade-pr/*.md`: 2 capítulos.
- `Papiloscopista/temas/tecnologia/*.md`: 6 capítulos, incluindo migração do piloto.
- `Papiloscopista/temas/ciencias-forenses/*.md`: 8 capítulos.
- `Papiloscopista/temas/biologia/*.md`: 4 capítulos.
- `Papiloscopista/temas/fisica/*.md`: 4 capítulos.
- `Papiloscopista/temas/quimica/*.md`: 5 capítulos.
- `Papiloscopista/temas/legislacao/*.md`: 7 capítulos.
- `Papiloscopista/temas/penal/*.md`: 3 capítulos.
- `Papiloscopista/temas/processo-penal/*.md`: 3 capítulos.
- `Papiloscopista/temas/constitucional/*.md`: 3 capítulos.
- `Papiloscopista/temas/administrativo/*.md`: 3 capítulos.
- `Papiloscopista/temas/direitos-humanos/*.md`: 3 capítulos.
- Matching `Papiloscopista/provas/<disciplina>/*.md` files for every chapter above.

### Modify

- `Papiloscopista/_sidebar.md`: grouped sidebar reflecting the full manifesto.
- `Papiloscopista/LEITURA_OFICIAL.md`: complete reading order and edital coverage table.
- `Papiloscopista/PROVAS.md`: complete question index with progress columns injected by JS.
- `Papiloscopista/MAPA_DE_QUESTOES.md`: incidence map with FGV/support/lacuna separation.
- `Papiloscopista/INTENSIVAO.md`: high-yield review by official weight.
- `Papiloscopista/REGRAS_DO_MATERIAL.md`: add explicit edital audit rule.
- `Papiloscopista/temas/001_hardware-perifericos-armazenamento.md`: convert to compatibility link or remove only after no links depend on it.
- `Papiloscopista/provas/001_hardware-perifericos-armazenamento.md`: convert to compatibility link or remove only after no links depend on it.

### Existing Tests

- `Papiloscopista/tests/provas-dashboard.test.js`

---

## Appendix A: Chapter Manifest

Each row becomes one theory file and one question file.

| ID | Discipline | Theme File | Question File | Edital Mapping |
|---:|---|---|---|---|
| 001 | portugues | `temas/portugues/001_interpretacao-compreensao-texto.md` | `provas/portugues/001_interpretacao-compreensao-texto.md` | Língua Portuguesa 1.1 |
| 002 | portugues | `temas/portugues/002_organizacao-textual-coesao-coerencia.md` | `provas/portugues/002_organizacao-textual-coesao-coerencia.md` | Língua Portuguesa 1.2-1.3 |
| 003 | portugues | `temas/portugues/003_modos-discursivos-tipos-textuais-literarios.md` | `provas/portugues/003_modos-discursivos-tipos-textuais-literarios.md` | Língua Portuguesa 1.4-1.6 |
| 004 | portugues | `temas/portugues/004_frase-sintaxe-discurso-pontuacao.md` | `provas/portugues/004_frase-sintaxe-discurso-pontuacao.md` | Língua Portuguesa 1.7-1.17 |
| 005 | portugues | `temas/portugues/005_morfologia-classes-palavras.md` | `provas/portugues/005_morfologia-classes-palavras.md` | Língua Portuguesa 1.18-1.20 |
| 006 | portugues | `temas/portugues/006_semantica-vocabulario-ortografia-crase.md` | `provas/portugues/006_semantica-vocabulario-ortografia-crase.md` | Língua Portuguesa 1.21-1.26 |
| 007 | rlm | `temas/rlm/001_logica-proposicional-conjuntos.md` | `provas/rlm/001_logica-proposicional-conjuntos.md` | RLM 2.1-2.2 |
| 008 | rlm | `temas/rlm/002_numeros-porcentagem-juros-proporcionalidade-medidas.md` | `provas/rlm/002_numeros-porcentagem-juros-proporcionalidade-medidas.md` | RLM 2.3-2.5 |
| 009 | rlm | `temas/rlm/003_geometria-plano-cartesiano-graficos-tabelas.md` | `provas/rlm/003_geometria-plano-cartesiano-graficos-tabelas.md` | RLM 2.8, 2.11-2.12 |
| 010 | rlm | `temas/rlm/004_problemas-logicos-contagem-probabilidade-sequencias.md` | `provas/rlm/004_problemas-logicos-contagem-probabilidade-sequencias.md` | RLM 2.6-2.7, 2.9-2.10, 2.13 |
| 011 | realidade-pr | `temas/realidade-pr/001_historia-geografia-parana.md` | `provas/realidade-pr/001_historia-geografia-parana.md` | Realidade do Paraná 3.1-3.3 |
| 012 | realidade-pr | `temas/realidade-pr/002_cultura-indicadores-economia-politicas-atualidades.md` | `provas/realidade-pr/002_cultura-indicadores-economia-politicas-atualidades.md` | Realidade do Paraná 3.4-3.7 |
| 013 | tecnologia | `temas/tecnologia/001_hardware-software-perifericos-armazenamento.md` | `provas/tecnologia/001_hardware-software-perifericos-armazenamento.md` | Tecnologia 1.1 |
| 014 | tecnologia | `temas/tecnologia/002_sistemas-operacionais-aplicativos-dispositivos-moveis.md` | `provas/tecnologia/002_sistemas-operacionais-aplicativos-dispositivos-moveis.md` | Tecnologia 1.2 |
| 015 | tecnologia | `temas/tecnologia/003_internet-redes-nuvem-web-bancos-apis.md` | `provas/tecnologia/003_internet-redes-nuvem-web-bancos-apis.md` | Tecnologia 1.3 |
| 016 | tecnologia | `temas/tecnologia/004_seguranca-informacao-malware-phishing-backup.md` | `provas/tecnologia/004_seguranca-informacao-malware-phishing-backup.md` | Tecnologia 1.4 |
| 017 | tecnologia | `temas/tecnologia/005_crimes-digitais-evidencias-osint.md` | `provas/tecnologia/005_crimes-digitais-evidencias-osint.md` | Tecnologia 1.5 |
| 018 | tecnologia | `temas/tecnologia/006_legislacao-etica-digital.md` | `provas/tecnologia/006_legislacao-etica-digital.md` | Tecnologia 1.6 |
| 019 | ciencias-forenses | `temas/ciencias-forenses/001_medicina-legal-identificacao-papiloscopia.md` | `provas/ciencias-forenses/001_medicina-legal-identificacao-papiloscopia.md` | Ciências Forenses 2.1 |
| 020 | ciencias-forenses | `temas/ciencias-forenses/002_antropologia-odontologia-dna-reconhecimento-facial-ia.md` | `provas/ciencias-forenses/002_antropologia-odontologia-dna-reconhecimento-facial-ia.md` | Ciências Forenses 2.1 |
| 021 | ciencias-forenses | `temas/ciencias-forenses/003_sexologia-traumatologia-asfixiologia-balistica.md` | `provas/ciencias-forenses/003_sexologia-traumatologia-asfixiologia-balistica.md` | Ciências Forenses 2.1 |
| 022 | ciencias-forenses | `temas/ciencias-forenses/004_tanatologia-necropsia-toxicologia-psicopatologia.md` | `provas/ciencias-forenses/004_tanatologia-necropsia-toxicologia-psicopatologia.md` | Ciências Forenses 2.1 |
| 023 | ciencias-forenses | `temas/ciencias-forenses/005_criminalistica-local-crime-cadeia-custodia.md` | `provas/ciencias-forenses/005_criminalistica-local-crime-cadeia-custodia.md` | Ciências Forenses 2.2 |
| 024 | ciencias-forenses | `temas/ciencias-forenses/006_documentoscopia-grafoscopia-falsificacoes.md` | `provas/ciencias-forenses/006_documentoscopia-grafoscopia-falsificacoes.md` | Ciências Forenses 2.2 |
| 025 | ciencias-forenses | `temas/ciencias-forenses/007_criminologia-vitimologia-controle-social.md` | `provas/ciencias-forenses/007_criminologia-vitimologia-controle-social.md` | Ciências Forenses 2.3 |
| 026 | ciencias-forenses | `temas/ciencias-forenses/008_criminologia-digital-investigacao-tecnologica.md` | `provas/ciencias-forenses/008_criminologia-digital-investigacao-tecnologica.md` | Ciências Forenses 2.4 |
| 027 | biologia | `temas/biologia/001_citologia.md` | `provas/biologia/001_citologia.md` | Biologia 3.1 |
| 028 | biologia | `temas/biologia/002_genetica.md` | `provas/biologia/002_genetica.md` | Biologia 3.2 |
| 029 | biologia | `temas/biologia/003_embriologia-cristas-papilares.md` | `provas/biologia/003_embriologia-cristas-papilares.md` | Biologia 3.3 |
| 030 | biologia | `temas/biologia/004_biologia-identificacao-humana-biometria.md` | `provas/biologia/004_biologia-identificacao-humana-biometria.md` | Biologia 3.4 |
| 031 | fisica | `temas/fisica/001_optica-formacao-imagens.md` | `provas/fisica/001_optica-formacao-imagens.md` | Física 4.1 |
| 032 | fisica | `temas/fisica/002_uv-fluorescencia-ondas-eletromagnetismo.md` | `provas/fisica/002_uv-fluorescencia-ondas-eletromagnetismo.md` | Física 4.1-4.2 |
| 033 | fisica | `temas/fisica/003_eletricidade-circuitos-simples.md` | `provas/fisica/003_eletricidade-circuitos-simples.md` | Física 4.3 |
| 034 | fisica | `temas/fisica/004_fisica-captura-imagens-biometria-equipamentos.md` | `provas/fisica/004_fisica-captura-imagens-biometria-equipamentos.md` | Física 4.4 |
| 035 | quimica | `temas/quimica/001_estrutura-materia-tabela-periodica-ligacoes.md` | `provas/quimica/001_estrutura-materia-tabela-periodica-ligacoes.md` | Química 5.1 |
| 036 | quimica | `temas/quimica/002_misturas-solucoes-separacao-concentracao.md` | `provas/quimica/002_misturas-solucoes-separacao-concentracao.md` | Química 5.2 |
| 037 | quimica | `temas/quimica/003_reacoes-balanceamento-velocidade-equilibrio.md` | `provas/quimica/003_reacoes-balanceamento-velocidade-equilibrio.md` | Química 5.3 |
| 038 | quimica | `temas/quimica/004_funcoes-quimicas-organica.md` | `provas/quimica/004_funcoes-quimicas-organica.md` | Química 5.4 |
| 039 | quimica | `temas/quimica/005_quimica-identificacao-reagentes-fluorescencia.md` | `provas/quimica/005_quimica-identificacao-reagentes-fluorescencia.md` | Química 5.5 |
| 040 | legislacao | `temas/legislacao/001_constituicao-parana-administracao-seguranca.md` | `provas/legislacao/001_constituicao-parana-administracao-seguranca.md` | Legislação 6.1 |
| 041 | legislacao | `temas/legislacao/002_lc-259-2023-carreiras-pcpr.md` | `provas/legislacao/002_lc-259-2023-carreiras-pcpr.md` | Legislação 6.2 |
| 042 | legislacao | `temas/legislacao/003_lei-14735-2023-organica-nacional-policias-civis.md` | `provas/legislacao/003_lei-14735-2023-organica-nacional-policias-civis.md` | Legislação 6.3 |
| 043 | legislacao | `temas/legislacao/004_lei-23213-2026-organica-pcpr.md` | `provas/legislacao/004_lei-23213-2026-organica-pcpr.md` | Legislação 6.4 |
| 044 | legislacao | `temas/legislacao/005_lei-21894-2024-codigo-disciplinar-pcpr.md` | `provas/legislacao/005_lei-21894-2024-codigo-disciplinar-pcpr.md` | Legislação 6.5 |
| 045 | legislacao | `temas/legislacao/006_lei-6174-1970-regime-juridico-pr.md` | `provas/legislacao/006_lei-6174-1970-regime-juridico-pr.md` | Legislação 6.6 |
| 046 | legislacao | `temas/legislacao/007_abuso-identificacao-lgpd-lai-sigilo.md` | `provas/legislacao/007_abuso-identificacao-lgpd-lai-sigilo.md` | Legislação 6.7 |
| 047 | penal | `temas/penal/001_principios-teoria-crime-penas.md` | `provas/penal/001_principios-teoria-crime-penas.md` | Penal 7.1 |
| 048 | penal | `temas/penal/002_crimes-pessoa-patrimonio-dignidade-fe-publica-administracao.md` | `provas/penal/002_crimes-pessoa-patrimonio-dignidade-fe-publica-administracao.md` | Penal 7.2 |
| 049 | penal | `temas/penal/003_legislacao-extravagante-atividade-policial.md` | `provas/penal/003_legislacao-extravagante-atividade-policial.md` | Penal 7.3-7.4 |
| 050 | processo-penal | `temas/processo-penal/001_principios-inquerito-acao-direitos-investigado.md` | `provas/processo-penal/001_principios-inquerito-acao-direitos-investigado.md` | Processo Penal 8.1 |
| 051 | processo-penal | `temas/processo-penal/002_provas-cadeia-custodia-busca-reconhecimento.md` | `provas/processo-penal/002_provas-cadeia-custodia-busca-reconhecimento.md` | Processo Penal 8.2 |
| 052 | processo-penal | `temas/processo-penal/003_prisoes-cautelares-leis-processuais.md` | `provas/processo-penal/003_prisoes-cautelares-leis-processuais.md` | Processo Penal 8.3-8.4 |
| 053 | constitucional | `temas/constitucional/001_principios-direitos-garantias-remedios.md` | `provas/constitucional/001_principios-direitos-garantias-remedios.md` | Constitucional 8.1-8.3 |
| 054 | constitucional | `temas/constitucional/002_organizacao-estado-poderes-seguranca-publica.md` | `provas/constitucional/002_organizacao-estado-poderes-seguranca-publica.md` | Constitucional 8.4-8.6 |
| 055 | constitucional | `temas/constitucional/003_controle-constitucionalidade-constituicao-parana.md` | `provas/constitucional/003_controle-constitucionalidade-constituicao-parana.md` | Constitucional 8.7-8.8 |
| 056 | administrativo | `temas/administrativo/001_conceito-fontes-principios-administracao.md` | `provas/administrativo/001_conceito-fontes-principios-administracao.md` | Administrativo 9.1-9.2 |
| 057 | administrativo | `temas/administrativo/002_atos-poderes-servicos-licitacoes-contratos.md` | `provas/administrativo/002_atos-poderes-servicos-licitacoes-contratos.md` | Administrativo 9.3-9.6 |
| 058 | administrativo | `temas/administrativo/003_agentes-responsabilidade-improbidade-controle.md` | `provas/administrativo/003_agentes-responsabilidade-improbidade-controle.md` | Administrativo 9.7-9.10 |
| 059 | direitos-humanos | `temas/direitos-humanos/001_teoria-sistemas-protecao-democracia.md` | `provas/direitos-humanos/001_teoria-sistemas-protecao-democracia.md` | Direitos Humanos 10.1-10.3 |
| 060 | direitos-humanos | `temas/direitos-humanos/002_grupos-vulneraveis-atuacao-policial.md` | `provas/direitos-humanos/002_grupos-vulneraveis-atuacao-policial.md` | Direitos Humanos 10.4-10.5 |
| 061 | direitos-humanos | `temas/direitos-humanos/003_pndh-educacao-agenda-2030.md` | `provas/direitos-humanos/003_pndh-educacao-agenda-2030.md` | Direitos Humanos 10.6-10.7 |

---

### Task 1: Add Content Manifest Tests

**Files:**
- Create: `Papiloscopista/tests/content-coverage.test.js`
- Reads: `Papiloscopista/content-manifest.js`
- Reads: `Papiloscopista/_sidebar.md`
- Reads: `Papiloscopista/LEITURA_OFICIAL.md`
- Reads: `Papiloscopista/PROVAS.md`

**Interfaces:**
- Consumes: Node.js CommonJS `require("../content-manifest.js")`
- Produces: failing tests that define the expected manifest API before implementation

- [ ] **Step 1: Write the failing test**

Add this exact test file:

```javascript
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const {
  chapterGroups,
  getAllChapters,
  getChapterById,
  buildSidebarMarkdown,
  buildLeituraRows,
  buildProvasRows
} = require("../content-manifest.js");

const root = path.resolve(__dirname, "..");

test("manifest exposes the complete edital chapter set", () => {
  const chapters = getAllChapters();

  assert.equal(chapters.length, 61);
  assert.equal(chapterGroups.length, 14);
  assert.equal(getChapterById("001").title, "Interpretação e compreensão de texto");
  assert.equal(getChapterById("061").title, "PNDH, educação em Direitos Humanos e Agenda 2030");
  assert.equal(new Set(chapters.map((chapter) => chapter.id)).size, chapters.length);
  assert.equal(new Set(chapters.map((chapter) => chapter.themePath)).size, chapters.length);
  assert.equal(new Set(chapters.map((chapter) => chapter.questionPath)).size, chapters.length);
});

test("every manifest chapter has a theme and question file", () => {
  for (const chapter of getAllChapters()) {
    assert.ok(fs.existsSync(path.join(root, chapter.themePath)), `${chapter.themePath} is missing`);
    assert.ok(fs.existsSync(path.join(root, chapter.questionPath)), `${chapter.questionPath} is missing`);
  }
});

test("sidebar, leitura oficial, and provas index include every chapter", () => {
  const sidebar = fs.readFileSync(path.join(root, "_sidebar.md"), "utf8");
  const leitura = fs.readFileSync(path.join(root, "LEITURA_OFICIAL.md"), "utf8");
  const provas = fs.readFileSync(path.join(root, "PROVAS.md"), "utf8");

  for (const chapter of getAllChapters()) {
    assert.match(sidebar, new RegExp(chapter.themePath.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
    assert.match(leitura, new RegExp(chapter.themePath.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
    assert.match(provas, new RegExp(chapter.questionPath.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }
});

test("manifest builders generate stable markdown fragments", () => {
  assert.match(buildSidebarMarkdown(), /Língua Portuguesa/);
  assert.match(buildSidebarMarkdown(), /Direitos Humanos/);
  assert.match(buildLeituraRows(), /Interpretação e compreensão de texto/);
  assert.match(buildProvasRows(), /PNDH, educação em Direitos Humanos e Agenda 2030/);
});
```

- [ ] **Step 2: Run test to verify it fails**

Run:

```powershell
node --test Papiloscopista/tests/content-coverage.test.js
```

Expected: FAIL with `Cannot find module '../content-manifest.js'`.

- [ ] **Step 3: Commit the failing test**

Run:

```powershell
git add Papiloscopista/tests/content-coverage.test.js
git commit -m "test: define edital coverage manifest"
```

---

### Task 2: Implement Content Manifest

**Files:**
- Create: `Papiloscopista/content-manifest.js`
- Test: `Papiloscopista/tests/content-coverage.test.js`

**Interfaces:**
- Produces:
  - `chapterGroups: Array<{slug:string,title:string,weight:number,chapters:Array<Chapter>}>`
  - `getAllChapters(): Chapter[]`
  - `getChapterById(id: string): Chapter`
  - `buildSidebarMarkdown(): string`
  - `buildLeituraRows(): string`
  - `buildProvasRows(): string`
- `Chapter` fields:
  - `id`, `discipline`, `title`, `status`, `themePath`, `questionPath`, `edital`, `weight`, `priority`

- [ ] **Step 1: Write manifest implementation**

Create `Papiloscopista/content-manifest.js` with chapter data matching Appendix A. Use this module shape:

```javascript
const chapterGroups = [
  {
    slug: "portugues",
    title: "Língua Portuguesa",
    weight: 25,
    chapters: [
      chapter("001", "portugues", "Interpretação e compreensão de texto", "Língua Portuguesa 1.1", "temas/portugues/001_interpretacao-compreensao-texto.md", "provas/portugues/001_interpretacao-compreensao-texto.md", "Muito alta"),
      chapter("002", "portugues", "Organização textual, coesão, coerência e intertextualidade", "Língua Portuguesa 1.2-1.3", "temas/portugues/002_organizacao-textual-coesao-coerencia.md", "provas/portugues/002_organizacao-textual-coesao-coerencia.md", "Muito alta"),
      chapter("003", "portugues", "Modos discursivos, tipos textuais e textos literários", "Língua Portuguesa 1.4-1.6", "temas/portugues/003_modos-discursivos-tipos-textuais-literarios.md", "provas/portugues/003_modos-discursivos-tipos-textuais-literarios.md", "Muito alta"),
      chapter("004", "portugues", "Frase, sintaxe, discurso e pontuação", "Língua Portuguesa 1.7-1.17", "temas/portugues/004_frase-sintaxe-discurso-pontuacao.md", "provas/portugues/004_frase-sintaxe-discurso-pontuacao.md", "Muito alta"),
      chapter("005", "portugues", "Morfologia e classes de palavras", "Língua Portuguesa 1.18-1.20", "temas/portugues/005_morfologia-classes-palavras.md", "provas/portugues/005_morfologia-classes-palavras.md", "Muito alta"),
      chapter("006", "portugues", "Semântica, vocabulário, ortografia, acentuação e crase", "Língua Portuguesa 1.21-1.26", "temas/portugues/006_semantica-vocabulario-ortografia-crase.md", "provas/portugues/006_semantica-vocabulario-ortografia-crase.md", "Muito alta")
    ]
  }
];

function chapter(id, discipline, title, edital, themePath, questionPath, priority) {
  return {
    id,
    discipline,
    title,
    status: id === "013" ? "Pronto" : "Rascunho estruturado",
    edital,
    themePath,
    questionPath,
    priority
  };
}

function getAllChapters() {
  return chapterGroups.flatMap((group) => group.chapters);
}

function getChapterById(id) {
  const chapterItem = getAllChapters().find((item) => item.id === id);
  if (!chapterItem) throw new Error(`Chapter not found: ${id}`);
  return chapterItem;
}

function buildSidebarMarkdown() {
  const lines = [
    "- [Início](LEITURA_OFICIAL.md)",
    "- [Mapa de questões](MAPA_DE_QUESTOES.md)",
    "- [Provas](PROVAS.md)",
    "- [Intensivão](INTENSIVAO.md)",
    "- [Regras do material](REGRAS_DO_MATERIAL.md)",
    ""
  ];

  chapterGroups.forEach((group) => {
    lines.push(`- ${group.title}`);
    group.chapters.forEach((item) => {
      lines.push(`  - [${item.id}. ${item.title}](${item.themePath})`);
    });
  });

  return `${lines.join("\n")}\n`;
}

function buildLeituraRows() {
  return getAllChapters()
    .map((item) => `| ${item.id} | ${item.title} | ${item.edital} | ${item.status} | [Abrir](${item.themePath}) |`)
    .join("\n");
}

function buildProvasRows() {
  return getAllChapters()
    .map((item) => `| ${item.title} | 0 | 0 | 0 | [Abrir](${item.questionPath}) |`)
    .join("\n");
}

module.exports = {
  chapterGroups,
  getAllChapters,
  getChapterById,
  buildSidebarMarkdown,
  buildLeituraRows,
  buildProvasRows
};
```

Add the remaining 13 groups from Appendix A using the same `chapter(...)` call shape. Keep `id === "013"` as the migrated pilot status.

- [ ] **Step 2: Run manifest test**

Run:

```powershell
node --test Papiloscopista/tests/content-coverage.test.js
```

Expected: FAIL because files referenced by the manifest do not exist yet.

- [ ] **Step 3: Commit manifest**

Run:

```powershell
git add Papiloscopista/content-manifest.js
git commit -m "feat: add edital coverage manifest"
```

---

### Task 3: Scaffold All Theme And Question Files

**Files:**
- Create: all theme and question Markdown files listed in Appendix A.
- Modify: `Papiloscopista/temas/001_hardware-perifericos-armazenamento.md`
- Modify: `Papiloscopista/provas/001_hardware-perifericos-armazenamento.md`
- Test: `Papiloscopista/tests/content-coverage.test.js`

**Interfaces:**
- Consumes: `getAllChapters()` manifest.
- Produces: all manifest paths exist.

- [ ] **Step 1: Move pilot content into the new Tecnologia path**

Move content:

```powershell
New-Item -ItemType Directory -Force Papiloscopista/temas/tecnologia, Papiloscopista/provas/tecnologia
git mv Papiloscopista/temas/001_hardware-perifericos-armazenamento.md Papiloscopista/temas/tecnologia/001_hardware-software-perifericos-armazenamento.md
git mv Papiloscopista/provas/001_hardware-perifericos-armazenamento.md Papiloscopista/provas/tecnologia/001_hardware-software-perifericos-armazenamento.md
```

- [ ] **Step 2: Add compatibility files for old published links**

Create `Papiloscopista/temas/001_hardware-perifericos-armazenamento.md`:

```markdown
# Tema movido

Este tema agora está em [Hardware, software, periféricos e armazenamento](tecnologia/001_hardware-software-perifericos-armazenamento.md).
```

Create `Papiloscopista/provas/001_hardware-perifericos-armazenamento.md`:

```markdown
# Questões movidas

Este banco agora está em [Hardware, software, periféricos e armazenamento](tecnologia/001_hardware-software-perifericos-armazenamento.md).
```

- [ ] **Step 3: Create scaffold content for each missing theme file**

Each missing theme file must use this exact structure, replacing bracketed values with the manifest values:

```markdown
# [ID] - [Title]

## Por que cai

- **Peso no edital:** disciplina vinculada ao item `[Edital Mapping]`.
- **Como a FGV pode cobrar:** conceitos diretos, comparação entre definições, aplicação prática e atenção a termos absolutos.
- **O que confunde candidatos:** troca de conceito, leitura apressada do comando e memorização sem contexto.

## Leitura rápida

- Este capítulo cobre o item `[Edital Mapping]` do edital de Papiloscopista PCPR 2026.
- Priorize definição, diferença entre conceitos próximos e aplicação policial/forense quando existir.
- Se aparecer divergência entre material local e fonte oficial, use a fonte oficial e registre a diferença.

## Conteúdo essencial

### Base do edital

Este capítulo contempla o item `[Edital Mapping]`.

### Explicação prática

Lacuna de aprofundamento: este capítulo precisa ser expandido com base nos materiais locais e, quando jurídico ou normativo, em fonte oficial atualizada.

### Particularidades para Papiloscopista

Conectar o assunto à identificação humana, investigação, cadeia de custódia, atividade policial, análise técnica ou rotina administrativa quando houver relação direta.

## Tabelas e esquemas

| Ponto | O que guardar | Como a banca pode trocar |
|---|---|---|
| Conceito central | Definição do item do edital | Alternativa com termo parecido |
| Aplicação | Uso prático no cargo ou na prova | Generalização indevida |
| Limite | Exceção, requisito ou diferença | Palavra absoluta |

## Pegadinhas da banca

- Termos como sempre, nunca, apenas, exclusivamente e obrigatoriamente.
- Conceitos vizinhos apresentados como sinônimos.
- Alternativa parcialmente correta com detalhe final errado.

## Como resolver questões

1. Leia o comando antes do texto.
2. Identifique o item do edital cobrado.
3. Elimine alternativa com conceito trocado.
4. Verifique exceções, prazos, requisitos ou nomenclatura.
5. Marque apenas depois de comparar as alternativas restantes.

## Checklist de revisão

- [ ] Sei explicar o item `[Edital Mapping]` sem consultar o resumo.
- [ ] Sei diferenciar os conceitos próximos.
- [ ] Sei reconhecer a pegadinha provável.
- [ ] Sei conectar o tema à prova de Papiloscopista quando fizer sentido.

## Questões relacionadas

- [Abrir questões](../../[Question File])

## Referências

**Edital**

- Edital PCPR n.º 01/2026, Anexo I, item `[Edital Mapping]`.

**Material local**

- Lacuna de aprofundamento: registrar PDFs, provas ou apostilas usados ao expandir este capítulo.

**Fontes oficiais**

- Lacuna de aprofundamento: registrar fonte oficial quando houver atualização normativa, jurídica ou técnica.
```

- [ ] **Step 4: Create scaffold content for each missing question file**

Each missing question file must use this exact structure:

```markdown
# Questões - [Title]

> Banco em construção. Este arquivo existe para manter o roteiro de estudo completo e será preenchido apenas com questões cuja fonte e gabarito possam ser conferidos.

## Cobertura do edital

- Item: `[Edital Mapping]`.
- Status: Lacuna de questões comentadas.

## Questões a localizar

- Questões FGV diretamente relacionadas ao item.
- Questões de apoio de outras bancas quando ajudarem a treinar conceito do edital.

## Critério de inclusão

- Informar ano, banca, órgão/prova e identificador local.
- Preservar o gabarito local/oficial.
- Explicar raciocínio e cada alternativa.
- Não inventar questão.
```

- [ ] **Step 5: Run coverage test**

Run:

```powershell
node --test Papiloscopista/tests/content-coverage.test.js
```

Expected: FAIL because sidebar, leitura and provas index have not been updated yet.

- [ ] **Step 6: Commit scaffold files**

Run:

```powershell
git add Papiloscopista/temas Papiloscopista/provas
git commit -m "feat: scaffold edital chapters and question banks"
```

---

### Task 4: Update Navigation And Core Indexes

**Files:**
- Modify: `Papiloscopista/_sidebar.md`
- Modify: `Papiloscopista/LEITURA_OFICIAL.md`
- Modify: `Papiloscopista/PROVAS.md`
- Modify: `Papiloscopista/MAPA_DE_QUESTOES.md`
- Modify: `Papiloscopista/INTENSIVAO.md`
- Modify: `Papiloscopista/REGRAS_DO_MATERIAL.md`
- Test: `Papiloscopista/tests/content-coverage.test.js`
- Test: `Papiloscopista/tests/provas-dashboard.test.js`

**Interfaces:**
- Consumes: manifest paths and titles.
- Produces: user-visible organized reading sequence with all edital chapters.

- [ ] **Step 1: Replace `_sidebar.md` with manifest order**

Use `buildSidebarMarkdown()` output as the full sidebar. Keep top-level links for Início, Mapa de questões, Provas, Intensivão and Regras.

- [ ] **Step 2: Update `LEITURA_OFICIAL.md`**

Add:

```markdown
## Cobertura completa do edital

| ID | Tema | Item do edital | Status | Abrir |
|---:|---|---|---|---|
```

Then insert `buildLeituraRows()` output.

Also update "Primeiro ciclo de estudo" to say:

```markdown
O menu lateral agora é a trilha principal. Siga de cima para baixo quando quiser cobertura integral; em revisão de reta final, priorize Português, Tecnologia, Ciências Forenses e Biologia.
```

- [ ] **Step 3: Update `PROVAS.md`**

Add:

```markdown
| Tema | FGV | Apoio | Total | Abrir |
|---|---:|---:|---:|---|
```

Then insert `buildProvasRows()` output, manually setting the migrated Tecnologia hardware row to `1 | 5 | 6`.

- [ ] **Step 4: Update `MAPA_DE_QUESTOES.md`**

Add one incidence row per chapter. Use `0 | 0 | 0 | Banco em construção` for every new bank except Tecnologia hardware, which stays `6 | 1 | 5 | Piloto pronto`.

- [ ] **Step 5: Update `INTENSIVAO.md`**

Keep the existing informática one-page section and add high-yield headings for all disciplines in official weight order. Each heading must include at least:

```markdown
## [Disciplina]

- Peso:
- Prioridade:
- Como revisar:
- Pegadinha central:
```

- [ ] **Step 6: Update rules**

Add this rule to `REGRAS_DO_MATERIAL.md`:

```markdown
## Auditoria Do Edital

Cada tema publicado deve apontar para o item do edital que cobre. Ao final de cada rodada, conferir se `_sidebar.md`, `LEITURA_OFICIAL.md`, `PROVAS.md` e `MAPA_DE_QUESTOES.md` listam os mesmos temas.
```

- [ ] **Step 7: Run tests**

Run:

```powershell
node --test Papiloscopista/tests/content-coverage.test.js Papiloscopista/tests/provas-dashboard.test.js
```

Expected: PASS.

- [ ] **Step 8: Commit navigation**

Run:

```powershell
git add Papiloscopista/_sidebar.md Papiloscopista/LEITURA_OFICIAL.md Papiloscopista/PROVAS.md Papiloscopista/MAPA_DE_QUESTOES.md Papiloscopista/INTENSIVAO.md Papiloscopista/REGRAS_DO_MATERIAL.md Papiloscopista/tests/content-coverage.test.js
git commit -m "feat: organize full edital navigation"
```

---

### Task 5: Expand High-Weight General And Technology Content

**Files:**
- Modify: all `Papiloscopista/temas/portugues/*.md`
- Modify: all `Papiloscopista/provas/portugues/*.md`
- Modify: all `Papiloscopista/temas/tecnologia/*.md`
- Modify: all `Papiloscopista/provas/tecnologia/*.md`
- Modify: `Papiloscopista/MAPA_DE_QUESTOES.md`
- Modify: `Papiloscopista/INTENSIVAO.md`

**Interfaces:**
- Consumes: local PDFs in `Curso de Portugues/`, `Questões FGV/Exercicios informatica.pdf`, `Questões FGV/Questoes informatica.pdf`, `Curso Alfacon/Tecnologias e sistema de informacao e seguranca cibernética.pdf`.
- Produces: expanded chapters for the two biggest scoring blocks: Português 25 and Tecnologia 15.

- [ ] **Step 1: Extract source notes**

Use Python/PyMuPDF read-only extraction to identify section headings and useful questions. Do not write extracted full text into the repository.

Run:

```powershell
@'
import fitz
from pathlib import Path
for file in [Path("Curso de Portugues/Manual de Lingua Portuguesa.pdf"), Path("Questões FGV/Exercicios informatica.pdf"), Path("Questões FGV/Questoes informatica.pdf")]:
    doc = fitz.open(file)
    print(file, doc.page_count)
    print("\\n".join(page.get_text("text")[:800] for page in doc[:min(3, doc.page_count)]))
'@ | python -
```

- [ ] **Step 2: Expand Português chapters**

For each of the 6 Portuguese chapters, replace "Lacuna de aprofundamento" with original study text covering the mapped edital items. Include FGV particularities: command wording, reescritura, inferência, coesão, pontuação, classes gramaticais and crase traps as applicable.

- [ ] **Step 3: Expand Tecnologia chapters**

For each of the 6 Tecnologia chapters, write original content covering the mapped edital items. Keep the migrated hardware pilot detailed and expand it to include software, BIOS, UEFI, drivers and firmware.

- [ ] **Step 4: Convert available questions**

Add at least the existing 6 hardware questions to the migrated Tecnologia hardware bank. Add additional FGV questions from local PDFs only when the source and gabarito are visible in the same local PDF. Mark support questions as "Apoio".

- [ ] **Step 5: Update maps and intensivão**

Update `MAPA_DE_QUESTOES.md` with question counts by converted Tecnologia/Português bank. Update `INTENSIVAO.md` with expanded Portuguese and Tecnologia sections.

- [ ] **Step 6: Verify and commit**

Run:

```powershell
node --test Papiloscopista/tests/content-coverage.test.js Papiloscopista/tests/provas-dashboard.test.js
```

Then run the Markdown link checker used in earlier commits. Commit:

```powershell
git add Papiloscopista
git commit -m "feat: expand portugues and tecnologia chapters"
```

---

### Task 6: Expand Forensics, Biology, Chemistry, And Physics

**Files:**
- Modify: all `Papiloscopista/temas/ciencias-forenses/*.md`
- Modify: all `Papiloscopista/provas/ciencias-forenses/*.md`
- Modify: all `Papiloscopista/temas/biologia/*.md`
- Modify: all `Papiloscopista/provas/biologia/*.md`
- Modify: all `Papiloscopista/temas/quimica/*.md`
- Modify: all `Papiloscopista/provas/quimica/*.md`
- Modify: all `Papiloscopista/temas/fisica/*.md`
- Modify: all `Papiloscopista/provas/fisica/*.md`
- Modify: `Papiloscopista/MAPA_DE_QUESTOES.md`
- Modify: `Papiloscopista/INTENSIVAO.md`

**Interfaces:**
- Consumes: local PDFs in `Curso Alfacon/Medicina legal.pdf`, `Curso Alfacon/Biologia.pdf`, `Curso Alfacon/Quimica.pdf`, `Curso Alfacon/Fisica.pdf`, `Questões FGV/Questoes Biologia*.pdf`, `Questões FGV/Questoes Criminalistica.pdf`, `Questões FGV/Questoes Criminologia*.pdf`.
- Produces: expanded technical/scientific chapters with Papiloscopista-specific connections.

- [ ] **Step 1: Extract source notes**

Use PyMuPDF to inspect headings and question/gabarito blocks. Do not commit extracted text files.

- [ ] **Step 2: Expand Ciências Forenses**

Write all 8 chapters with special emphasis on identificação humana, papiloscopia, cadeia de custódia, local de crime, documentoscopia and criminologia digital.

- [ ] **Step 3: Expand Biologia**

Write all 4 chapters and connect genetics, embryology and biological traits to impressions, cristas papilares, biometrics and human identification.

- [ ] **Step 4: Expand Química**

Write all 5 chapters and connect solutions, organic chemistry, reagents and fluorescence to fingerprint revelation.

- [ ] **Step 5: Expand Física**

Write all 4 chapters and connect optics, UV, fluorescence, imaging and biometrics to forensic capture and identification.

- [ ] **Step 6: Convert available questions**

Convert local question blocks only when the enunciado and gabarito are readable. Keep banks without reliable questions as "Banco em construção".

- [ ] **Step 7: Verify and commit**

Run:

```powershell
node --test Papiloscopista/tests/content-coverage.test.js Papiloscopista/tests/provas-dashboard.test.js
```

Run Markdown link checker. Commit:

```powershell
git add Papiloscopista
git commit -m "feat: expand forensic and science chapters"
```

---

### Task 7: Expand Legislation And Legal Content With Official Sources

**Files:**
- Modify: all `Papiloscopista/temas/legislacao/*.md`
- Modify: all `Papiloscopista/provas/legislacao/*.md`
- Modify: all `Papiloscopista/temas/penal/*.md`
- Modify: all `Papiloscopista/provas/penal/*.md`
- Modify: all `Papiloscopista/temas/processo-penal/*.md`
- Modify: all `Papiloscopista/provas/processo-penal/*.md`
- Modify: all `Papiloscopista/temas/constitucional/*.md`
- Modify: all `Papiloscopista/provas/constitucional/*.md`
- Modify: all `Papiloscopista/temas/administrativo/*.md`
- Modify: all `Papiloscopista/provas/administrativo/*.md`
- Modify: all `Papiloscopista/temas/direitos-humanos/*.md`
- Modify: all `Papiloscopista/provas/direitos-humanos/*.md`
- Modify: `Papiloscopista/MAPA_DE_QUESTOES.md`
- Modify: `Papiloscopista/INTENSIVAO.md`

**Interfaces:**
- Consumes: edital local, local law/course PDFs, and official online sources for current law text.
- Produces: expanded legal chapters with official references and explicit update date.

- [ ] **Step 1: Verify official law sources**

Browse official sources before writing current-law statements. Use official domains such as `planalto.gov.br`, `legislacao.pr.gov.br`, `assembleia.pr.leg.br`, `pcpr.pr.gov.br`, `gov.br`, `stf.jus.br` and `stj.jus.br` when needed.

- [ ] **Step 2: Expand Legislação Estadual e Institucional**

Write all 7 chapters with tables for competence, rights, duties, disciplinary points, sigilo, LAI, LGPD, identification criminal and institutional structure.

- [ ] **Step 3: Expand Penal and Processo Penal**

Write 3 Penal and 3 Processo Penal chapters with applied policing focus, including flagrante, excludentes, cadeia de custódia, busca e apreensão and garantias.

- [ ] **Step 4: Expand Constitucional, Administrativo and Direitos Humanos**

Write all 9 remaining legal chapters. Keep art. 144, direitos fundamentais, atos/poderes administrativos, agentes públicos, responsabilidade estatal, grupos vulneráveis and atuação policial highly visible.

- [ ] **Step 5: Convert available questions**

Use local question PDFs only when source and gabarito can be verified. Otherwise keep "Banco em construção" with exact edital subitems listed.

- [ ] **Step 6: Verify and commit**

Run:

```powershell
node --test Papiloscopista/tests/content-coverage.test.js Papiloscopista/tests/provas-dashboard.test.js
```

Run Markdown link checker. Commit:

```powershell
git add Papiloscopista
git commit -m "feat: expand legal and institutional chapters"
```

---

### Task 8: Final Coverage Audit, Local Render, And GitHub Pages Push

**Files:**
- Modify: `Papiloscopista/LEITURA_OFICIAL.md`
- Modify: `Papiloscopista/MAPA_DE_QUESTOES.md`
- Modify: `Papiloscopista/PROVAS.md`
- Modify: `Papiloscopista/INTENSIVAO.md`

**Interfaces:**
- Consumes: all completed content and tests.
- Produces: pushed public site with complete sidebar and no broken local links.

- [ ] **Step 1: Run full Node test suite**

Run:

```powershell
node --test Papiloscopista/tests/*.test.js
```

Expected: PASS for dashboard and content coverage tests.

- [ ] **Step 2: Run Markdown link checker**

Run:

```powershell
@'
from pathlib import Path
import re, sys
root=Path("Papiloscopista")
missing=[]
for path in root.rglob("*.md"):
    text=path.read_text(encoding="utf-8")
    for m in re.finditer(r"\\[[^\\]]+\\]\\(([^)]+)\\)", text):
        href=m.group(1).split("#",1)[0]
        if not href or re.match(r"^[a-z]+:", href) or href.startswith("mailto:"):
            continue
        target=(path.parent / href).resolve()
        if not target.exists():
            missing.append((str(path), href))
if missing:
    print("MISSING_LINKS")
    for source, href in missing:
        print(source, "->", href)
    sys.exit(1)
print("LINKS_OK")
'@ | python -
```

Expected: `LINKS_OK`.

- [ ] **Step 3: Serve locally**

Run:

```powershell
$port = 8000
while (Get-NetTCPConnection -LocalPort $port -ErrorAction SilentlyContinue) { $port++ }
$process = Start-Process python -ArgumentList @("-m","http.server", $port) -WorkingDirectory "C:\\Projetos\\ResumoVanessa" -WindowStyle Hidden -PassThru
Write-Output "URL=http://localhost:$port/Papiloscopista/ PID=$($process.Id)"
```

- [ ] **Step 4: Check HTTP endpoints**

Run:

```powershell
$codes = @(
  (Invoke-WebRequest -UseBasicParsing "http://localhost:$port/").StatusCode,
  (Invoke-WebRequest -UseBasicParsing "http://localhost:$port/Papiloscopista/").StatusCode,
  (Invoke-WebRequest -UseBasicParsing "http://localhost:$port/Papiloscopista/LEITURA_OFICIAL.md").StatusCode,
  (Invoke-WebRequest -UseBasicParsing "http://localhost:$port/Papiloscopista/_sidebar.md").StatusCode,
  (Invoke-WebRequest -UseBasicParsing "http://localhost:$port/Papiloscopista/provas/tecnologia/001_hardware-software-perifericos-armazenamento.md").StatusCode
)
Write-Output ("HTTP_CODES=" + ($codes -join ","))
```

Expected: `HTTP_CODES=200,200,200,200,200`.

- [ ] **Step 5: Render with Chrome headless**

Run:

```powershell
$tmp = 'C:\Projetos\ResumoVanessa\tmp\browser-final-check'
New-Item -ItemType Directory -Path $tmp -Force | Out-Null
$out = Join-Path $tmp 'quiz.out.html'
$err = Join-Path $tmp 'quiz.err.html'
$profile = Join-Path $tmp 'quiz-profile'
New-Item -ItemType Directory -Path $profile -Force | Out-Null
$cmd = '\"C:\Program Files\Google\Chrome\Application\chrome.exe\" --headless --disable-gpu --no-first-run --disable-extensions --user-data-dir=\"' + $profile + '\" --virtual-time-budget=8000 --dump-dom http://localhost:' + $port + '/Papiloscopista/#/provas/tecnologia/001_hardware-software-perifericos-armazenamento > \"' + $out + '\" 2> \"' + $err + '\"'
$cmd = $cmd -replace '\\\"','"'
cmd /c $cmd
$dom = ((Get-Content -Raw $out -ErrorAction SilentlyContinue) + "`n" + (Get-Content -Raw $err -ErrorAction SilentlyContinue))
foreach ($needle in @('Papiloscopista PCPR 2026','Língua Portuguesa','Direitos Humanos','quiz-card','Checar resposta','Desempenho do tema')) {
  if ($dom -notmatch [regex]::Escape($needle)) { throw "Missing DOM text: $needle" }
}
Write-Output "CHROME_DOM_OK"
```

Expected: `CHROME_DOM_OK`.

The checked DOM must contain:

```text
Papiloscopista PCPR 2026
Língua Portuguesa
Direitos Humanos
quiz-card
Checar resposta
Desempenho do tema
```

- [ ] **Step 6: Stop local server**

Run:

```powershell
Stop-Process -Id $process.Id
```

- [ ] **Step 7: Push**

Run:

```powershell
git status --short --branch
git push
```

- [ ] **Step 8: Verify public Pages**

Run:

```powershell
$codes = @(
  (Invoke-WebRequest -UseBasicParsing "https://thiagopersona.github.io/ResumoVanessa/").StatusCode,
  (Invoke-WebRequest -UseBasicParsing "https://thiagopersona.github.io/ResumoVanessa/Papiloscopista/").StatusCode,
  (Invoke-WebRequest -UseBasicParsing "https://thiagopersona.github.io/ResumoVanessa/Papiloscopista/_sidebar.md").StatusCode
)
Write-Output ("PUBLIC_CODES=" + ($codes -join ","))
```

Expected: `PUBLIC_CODES=200,200,200`.

---

## Self-Review Checklist

- Spec coverage: every menu group and chapter from `2026-08-03-papiloscopista-cobertura-completa-design.md` appears in Appendix A and in tasks.
- Text scan: no task depends on unresolved paths; "Banco em construção" and "Lacuna de aprofundamento" are intentional content states required by the spec.
- Type consistency: manifest functions used by tests are named exactly as produced in Task 2.
- Scope: tasks split the work into structure, navigation, high-weight content, forensic/science content, legal content, and final verification.
