# Validação De Provas Semelhantes Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a documented, navigable validation layer showing which FGV and similar-bank exams support the Papiloscopista PCPR study material and where the material needs reinforcement before building the question bank.

**Architecture:** Keep the existing Docsify static site and `content-manifest.js` as the navigation source of truth. Add three Markdown pages under `Papiloscopista/` and make the generator preserve the new navigation links. Do not store full third-party exam books in the repo.

**Tech Stack:** Markdown, Docsify, Node.js generator, Node.js built-in test runner.

## Global Constraints

- Primary source is the Papiloscopista PCPR 2026 edital and official/public exam pages whenever available.
- Third-party banks may be used only as secondary discovery/index sources and must be marked as such.
- Do not copy full copyrighted exam books or private bank explanations.
- Validation must classify coverage as covered, partial, gap, or outside edital.
- Keep GitHub Pages compatibility with static files only.

---

### Task 1: Source Catalog

**Files:**
- Create: `Papiloscopista/FONTES_DE_QUESTOES.md`

**Interfaces:**
- Consumes: official FGV, PF/Cebraspe, AOCP, IBFC, and local PDF source metadata.
- Produces: source tiers later referenced by validation and bank-building pages.

- [ ] **Step 1: Create the catalog**

Include:
- Official FGV core sources.
- Similar public sources by banca/organizing institution.
- Local PDFs already present under `Questões FGV/`.
- Rules for source priority and copyright-safe extraction.

- [ ] **Step 2: Review source status**

Confirm that each catalog row has `uso`, `status`, and `observação`.

### Task 2: Coverage Validation

**Files:**
- Create: `Papiloscopista/VALIDACAO_POR_PROVAS.md`

**Interfaces:**
- Consumes: source tiers from `FONTES_DE_QUESTOES.md` and current 61-chapter menu.
- Produces: coverage matrix and exam-to-theme mapping.

- [ ] **Step 1: Create validation matrix**

Include:
- FGV SEAD/AP 2022 Papiloscopista as highest-similarity baseline.
- FGV police/perito exams as second baseline.
- Similar-bank papiloscopista/police exams as support.
- Theme coverage summary by discipline.

- [ ] **Step 2: Add actionable verdict**

Classify each discipline:
- `Forte`: current material likely resolves most directly related questions.
- `Boa, com reforço`: material covers edital but needs more issue practice.
- `Parcial`: needs expansion or local question extraction.
- `Lacuna`: source or content must be built.

### Task 3: Gaps And Reinforcement Roadmap

**Files:**
- Create: `Papiloscopista/LACUNAS_E_REFORCOS.md`

**Interfaces:**
- Consumes: validation matrix.
- Produces: ordered worklist for question-bank creation.

- [ ] **Step 1: Write prioritized gap list**

Include:
- Immediate banks to build first.
- Specific issue patterns to add per theme.
- Rules for converting questions into interactive cards.

- [ ] **Step 2: Add per-theme reinforcement table**

Use the existing 14 discipline groups and link to relevant theme files.

### Task 4: Navigation And Generator

**Files:**
- Modify: `Papiloscopista/content-manifest.js`
- Modify: `scripts/generate-papiloscopista-content.js`
- Generated: `Papiloscopista/_sidebar.md`
- Generated: `Papiloscopista/LEITURA_OFICIAL.md`
- Generated: `Papiloscopista/MAPA_DE_QUESTOES.md`

**Interfaces:**
- Consumes: new top-level pages.
- Produces: menu links and study-entry references.

- [ ] **Step 1: Add top-level resource metadata**

Expose `topLevelStudyPages` from the manifest:

```js
const topLevelStudyPages = [
  { title: "Leitura Oficial", path: "LEITURA_OFICIAL.md" },
  { title: "Mapa de Questões", path: "MAPA_DE_QUESTOES.md" },
  { title: "Fontes de Questões", path: "FONTES_DE_QUESTOES.md" },
  { title: "Validação por Provas", path: "VALIDACAO_POR_PROVAS.md" },
  { title: "Lacunas e Reforços", path: "LACUNAS_E_REFORCOS.md" },
  { title: "Provas", path: "PROVAS.md" },
  { title: "Intensivão", path: "INTENSIVAO.md" },
  { title: "Regras", path: "REGRAS_DO_MATERIAL.md" }
];
```

- [ ] **Step 2: Use metadata in sidebar**

Update `buildSidebarMarkdown()` so the menu includes the three new pages above `Provas`.

- [ ] **Step 3: Reference validation pages in generated docs**

Add a short “Validação por provas” section to `LEITURA_OFICIAL.md` and a source-confidence note to `MAPA_DE_QUESTOES.md`.

### Task 5: Verification And Publish

**Files:**
- Test: `Papiloscopista/tests/content-coverage.test.js`

**Interfaces:**
- Consumes: generated site files.
- Produces: test evidence and git history.

- [ ] **Step 1: Add test expectations**

Assert that `buildSidebarMarkdown()` contains:
- `FONTES_DE_QUESTOES.md`
- `VALIDACAO_POR_PROVAS.md`
- `LACUNAS_E_REFORCOS.md`

- [ ] **Step 2: Generate content**

Run:

```powershell
node scripts/generate-papiloscopista-content.js
```

- [ ] **Step 3: Run tests**

Run:

```powershell
node --test Papiloscopista/tests/*.test.js
```

- [ ] **Step 4: Check Markdown links**

Run a link check script over `Papiloscopista/**/*.md` to confirm local links resolve.

- [ ] **Step 5: Commit and push**

Run:

```powershell
git status --short
git add Papiloscopista docs/superpowers/plans/2026-08-03-validacao-provas-semelhantes.md scripts/generate-papiloscopista-content.js
git commit -m "feat: adiciona validacao por provas semelhantes"
git push
```
