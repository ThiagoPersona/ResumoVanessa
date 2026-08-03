const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const {
  buildLeituraRows,
  buildProvasRows,
  buildSidebarMarkdown,
  chapterGroups,
  getAllChapters,
  getChapterById,
  officialReferences,
  topLevelStudyPages
} = require("../content-manifest");
const { fgvQuestionBank, getAnswerDistribution, getQuestionsForChapter } = require("../question-bank-fgv");

const root = path.resolve(__dirname, "..");

test("manifesto cobre todos os grupos e capítulos definidos para Papiloscopista", () => {
  const chapters = getAllChapters();

  assert.equal(chapterGroups.length, 14);
  assert.equal(chapters.length, 61);
  assert.deepEqual(
    chapterGroups.map((group) => group.id),
    [
      "portugues",
      "rlm",
      "realidade-pr",
      "tecnologia",
      "ciencias-forenses",
      "biologia",
      "fisica",
      "quimica",
      "legislacao",
      "penal",
      "processo-penal",
      "constitucional",
      "administrativo",
      "direitos-humanos"
    ]
  );

  assert.equal(getChapterById("013").title, "Hardware, software, periféricos e armazenamento");
  assert.equal(getChapterById(61).groupId, "direitos-humanos");
  assert.match(officialReferences.editalFgv.label, /retificado em 31\/07\/2026/);
  assert.match(officialReferences.editalFgv.url, /copia-1-de-edital-01-2026-pcpr-publicacao\.docx\.pdf$/);
});

test("IDs, caminhos de tema e caminhos de prova são únicos", () => {
  const chapters = getAllChapters();
  const ids = new Set(chapters.map((chapter) => chapter.id));
  const themePaths = new Set(chapters.map((chapter) => chapter.themePath));
  const questionPaths = new Set(chapters.map((chapter) => chapter.questionPath));

  assert.equal(ids.size, chapters.length);
  assert.equal(themePaths.size, chapters.length);
  assert.equal(questionPaths.size, chapters.length);
});

test("todos os arquivos de tema e prova do manifesto existem", () => {
  for (const chapter of getAllChapters()) {
    assert.equal(fs.existsSync(path.join(root, chapter.themePath)), true, `Tema ausente: ${chapter.themePath}`);
    assert.equal(fs.existsSync(path.join(root, chapter.questionPath)), true, `Prova ausente: ${chapter.questionPath}`);
  }
});

test("capítulos têm conteúdo substancial e não genérico", () => {
  for (const chapter of getAllChapters()) {
    const filePath = path.join(root, chapter.themePath);
    const text = fs.readFileSync(filePath, "utf8");

    assert.ok(text.length >= 6000, `Tema curto demais: ${chapter.themePath} (${text.length} caracteres)`);
    assert.equal(
      text.includes("Este capítulo existe para cobrir, sem desvio"),
      false,
      `Tema manteve texto genérico antigo: ${chapter.themePath}`
    );
    assert.equal(
      text.includes("Este ponto do edital delimita o núcleo técnico"),
      false,
      `Tema manteve fallback genérico antigo: ${chapter.themePath}`
    );
    assert.match(text, /Conteúdo completo orientado ao edital/, `Falta conteúdo completo: ${chapter.themePath}`);
    assert.match(text, /Prioridades FGV dentro deste tema/, `Falta prioridade FGV: ${chapter.themePath}`);
    assert.match(text, /Diferenças que a banca costuma trocar/, `Falta seção de diferenças: ${chapter.themePath}`);
  }
});

test("sidebar e índices incluem todos os links do manifesto", () => {
  const sidebar = buildSidebarMarkdown();
  const leituraRows = buildLeituraRows();
  const provasRows = buildProvasRows();

  assert.equal(leituraRows.length, 61);
  assert.equal(provasRows.length, 61);

  for (const chapter of getAllChapters()) {
    assert.match(sidebar, new RegExp(chapter.themePath.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
    assert.ok(leituraRows.some((row) => row.temaLink === chapter.themePath));
    assert.ok(provasRows.some((row) => row.link === chapter.questionPath));
  }

  assert.ok(topLevelStudyPages.some((page) => page.path === "FONTES_DE_QUESTOES.md"));
  assert.ok(topLevelStudyPages.some((page) => page.path === "VALIDACAO_POR_PROVAS.md"));
  assert.ok(topLevelStudyPages.some((page) => page.path === "LACUNAS_E_REFORCOS.md"));
  assert.match(sidebar, /FONTES_DE_QUESTOES\.md/);
  assert.match(sidebar, /VALIDACAO_POR_PROVAS\.md/);
  assert.match(sidebar, /LACUNAS_E_REFORCOS\.md/);
});

test("banco FGV cobre todos os temas com questoes completas", () => {
  const letters = ["A", "B", "C", "D", "E"];
  const chapters = getAllChapters();

  assert.ok(fgvQuestionBank.length >= chapters.length);

  for (const chapter of chapters) {
    assert.ok(getQuestionsForChapter(chapter.id).length >= 1, `Sem questao FGV-style: ${chapter.id} ${chapter.title}`);
  }

  for (const question of fgvQuestionBank) {
    assert.match(question.id, /^fgv-\d{3}$/);
    assert.match(question.chapterId, /^\d{3}$/);
    assert.ok(chapters.some((chapter) => chapter.id === question.chapterId), `Tema inexistente: ${question.chapterId}`);
    assert.ok(question.source.includes("FGV"), `Fonte sem FGV: ${question.id}`);
    assert.ok(question.prompt.length >= 40, `Enunciado curto: ${question.id}`);
    assert.ok(letters.includes(question.answer), `Gabarito inválido: ${question.id}`);
    assert.ok(question.thinking.length >= 30, `Raciocínio curto: ${question.id}`);
    assert.ok(question.correct.length >= 30, `Justificativa correta curta: ${question.id}`);
    assert.ok(question.trap.length >= 20, `Pegadinha curta: ${question.id}`);

    for (const letter of letters) {
      assert.ok(question.options[letter], `Alternativa ${letter} ausente: ${question.id}`);
      assert.ok(question.explanations[letter], `Explicacao ${letter} ausente: ${question.id}`);
    }
  }
});

test("banco FGV mantem distribuicao equilibrada de gabaritos", () => {
  const distribution = getAnswerDistribution();
  const counts = Object.values(distribution);
  const min = Math.min(...counts);
  const max = Math.max(...counts);

  assert.ok(min > 0);
  assert.ok(max - min <= 1, `Distribuicao desequilibrada: ${JSON.stringify(distribution)}`);
});

test("arquivos de prova gerados contem cards interativos", () => {
  for (const chapter of getAllChapters()) {
    const filePath = path.join(root, chapter.questionPath);
    const text = fs.readFileSync(filePath, "utf8");

    assert.match(text, /quiz-card/, `Arquivo sem card: ${chapter.questionPath}`);
    assert.match(text, /Questão autoral no padrão FGV/, `Arquivo sem aviso FGV-style: ${chapter.questionPath}`);
  }
});
