# Banco FGV Papiloscopista Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the first FGV-focused interactive question bank for Papiloscopista PCPR, with at least one commented question for every edital theme and extra density on high-impact FGV patterns.

**Architecture:** Add a structured question-bank module with source-aware question objects. Update the generator to render quiz cards from that module into the existing `provas/` files and compute per-theme question counts from the data. Preserve Docsify/static GitHub Pages compatibility.

**Tech Stack:** Node.js CommonJS modules, Markdown/HTML quiz cards, Docsify, Node built-in test runner.

## Global Constraints

- Focus on FGV style and official FGV exam patterns.
- Avoid copying full public exam books; use original/adapted FGV-style questions unless a public item is intentionally converted later with source and gabarito checked.
- Every question must have source, answer, thinking, correct explanation, explanations for all wrong alternatives, and a main trap.
- Each of the 61 themes must have at least one interactive question.
- Theme totals in `PROVAS.md` and `MAPA_DE_QUESTOES.md` must come from the structured question bank.

---

### Task 1: Structured Question Bank

**Files:**
- Create: `Papiloscopista/question-bank-fgv.js`

**Interfaces:**
- Produces: `fgvQuestionBank`, an array of objects:

```js
{
  id: "fgv-001",
  chapterId: "001",
  source: "Questão autoral FGV/PCPR - padrão FGV validado por provas policiais/periciais",
  prompt: "Texto da questão.",
  options: {
    A: "Alternativa A.",
    B: "Alternativa B.",
    C: "Alternativa C.",
    D: "Alternativa D.",
    E: "Alternativa E."
  },
  answer: "A",
  thinking: "Como pensar.",
  correct: "Por que a correta está certa.",
  explanations: {
    A: "Correta.",
    B: "Incorreta.",
    C: "Incorreta.",
    D: "Incorreta.",
    E: "Incorreta."
  },
  trap: "Pegadinha principal."
}
```

- [ ] **Step 1: Add at least 61 questions**

Create one question for each chapter ID `001` through `061`, based on FGV-style commands and the validation sources.

- [ ] **Step 2: Add extra density for highest-return topics**

Add extra questions for:
- Tecnologia 014-017.
- Ciências Forenses 019, 023 and 025.
- Biologia 028-030.
- Física 031-034.
- Química 036-039.
- Penal/Processo Penal 047-052.

### Task 2: Generator Integration

**Files:**
- Modify: `Papiloscopista/content-manifest.js`
- Modify: `scripts/generate-papiloscopista-content.js`

**Interfaces:**
- Consumes: `fgvQuestionBank`.
- Produces: generated question Markdown files with quiz cards.

- [ ] **Step 1: Compute per-theme counts**

Add helpers in `content-manifest.js`:

```js
const { fgvQuestionBank } = require("./question-bank-fgv");

function questionCountForChapter(id) {
  return fgvQuestionBank.filter((question) => question.chapterId === id).length;
}
```

Use this count when building chapter metadata.

- [ ] **Step 2: Render cards**

In the generator, replace empty-question output with `buildQuestionsMarkdown(chapter, questions)` when the bank has matching entries.

- [ ] **Step 3: Preserve source transparency**

Generated question files must say when questions are authoral/adapted to the FGV pattern and must not describe them as official FGV items unless source is official.

### Task 3: Tests

**Files:**
- Modify: `Papiloscopista/tests/content-coverage.test.js`

**Interfaces:**
- Consumes: `fgvQuestionBank`.
- Produces: verification that the bank is structurally complete.

- [ ] **Step 1: Add bank integrity tests**

Assert:
- Every question has all required fields.
- Every answer is A-E.
- Every option A-E exists.
- Every explanation A-E exists.
- Every chapter has at least one question.

- [ ] **Step 2: Assert generated files contain cards**

For each chapter, read `chapter.questionPath` and assert it includes `quiz-card`.

### Task 4: Regenerate, Verify, Commit, Push

**Files:**
- Generated: all `Papiloscopista/provas/**/*.md`
- Generated: `Papiloscopista/PROVAS.md`
- Generated: `Papiloscopista/MAPA_DE_QUESTOES.md`

- [ ] **Step 1: Regenerate**

Run:

```powershell
node scripts/generate-papiloscopista-content.js
```

- [ ] **Step 2: Tests**

Run:

```powershell
node --test Papiloscopista/tests/*.test.js
```

- [ ] **Step 3: Link check**

Run the local Markdown link checker.

- [ ] **Step 4: Local render**

Start a local static server and use Chrome headless to confirm a generated question page renders a quiz card.

- [ ] **Step 5: Commit and push**

Run:

```powershell
git add Papiloscopista docs/superpowers/plans/2026-08-03-banco-fgv-papiloscopista.md scripts/generate-papiloscopista-content.js
git commit -m "feat: cria banco fgv por tema"
git push
```
