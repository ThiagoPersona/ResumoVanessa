# Papiloscopista Expansão De Conteúdo Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Expandir todos os temas de `Papiloscopista/` para capítulos de estudo completos, mantendo o edital PCPR/FGV como fonte estrutural.

**Architecture:** O manifesto continua definindo estrutura e links. O gerador passa a compor capítulos com biblioteca de conteúdo por disciplina e por tema, adicionando seções específicas de estudo, prioridade FGV, diferenças e aplicação ao cargo. Os bancos de questões permanecem separados e sem questão inventada.

**Tech Stack:** Markdown, JavaScript estático, Node.js `node:test`, Docsify 4.

## Global Constraints

- O edital PCPR n.º 01/2026 para Papiloscopista Policial continua sendo a fonte-mãe.
- Não copiar trechos longos de PDFs, apostilas, livros ou leis.
- Não inventar questão, gabarito, estatística ou jurisprudência.
- Fontes jurídicas e normativas devem apontar para fonte oficial.
- O banco comentado existente de Tecnologia 1.1 deve ser preservado.
- O GitHub Pages deve continuar funcional.

---

### Task 1: Criar profundidade de conteúdo

**Files:**
- Modify: `scripts/generate-papiloscopista-content.js`
- Modify: `Papiloscopista/tests/content-coverage.test.js`

**Interfaces:**
- Consumes: `getAllChapters()`, `chapterGroups`, `officialReferences` from `Papiloscopista/content-manifest.js`.
- Produces: temas Markdown com seções de estudo completas e bancos de questões preservados.

- [ ] **Step 1:** Add a chapter-depth library in the generator with topic-specific blocks for all 61 chapters.
- [ ] **Step 2:** Replace the generic `Conteúdo essencial` template with expanded sections: domínio do tema, prioridades FGV, diferenças, aplicação ao cargo and lacunas honestas.
- [ ] **Step 3:** Preserve `provas/tecnologia/001_hardware-software-perifericos-armazenamento.md` when it already contains quiz cards.
- [ ] **Step 4:** Add content-depth assertions to `content-coverage.test.js`: every manifest theme must be at least 6,000 characters and must not contain the old generic sentence.

### Task 2: Regenerar e validar

**Files:**
- Modify: `Papiloscopista/temas/**/*.md`
- Modify: `Papiloscopista/LEITURA_OFICIAL.md`
- Modify: `Papiloscopista/MAPA_DE_QUESTOES.md`
- Modify: `Papiloscopista/PROVAS.md`
- Modify: `Papiloscopista/INTENSIVAO.md`

**Interfaces:**
- Consumes: generator output.
- Produces: site content ready for GitHub Pages.

- [ ] **Step 1:** Run `node scripts/generate-papiloscopista-content.js`.
- [ ] **Step 2:** Run `node --test Papiloscopista/tests/*.test.js`.
- [ ] **Step 3:** Run the Markdown link checker.
- [ ] **Step 4:** Run local HTTP and Chrome headless render check.
- [ ] **Step 5:** Commit with message `feat: aprofunda temas de papiloscopista`.
- [ ] **Step 6:** Push and verify GitHub Pages public URLs.

## Self-Review

- The plan expands content without changing the approved menu.
- The tests create a measurable minimum for non-generic chapters.
- Question banks remain honest when no source/gabarito was converted.
