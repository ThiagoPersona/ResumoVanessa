const assert = require("node:assert/strict");
const test = require("node:test");

const {
  buildWrongAnswersLog,
  calculateCompletedThemeAverage,
  getQuizProgressStats,
  getRouteFromLink
} = require("../provas-utils.js");

test("calcula estatisticas de progresso de um tema", () => {
  const result = getQuizProgressStats({
    "q-001": { selected: "A", correct: "1" },
    "q-002": { selected: "B", correct: false },
    "q-003": { selected: "C", correct: true }
  }, 5);

  assert.deepEqual(result, {
    answered: 3,
    correct: 2,
    wrong: 1,
    total: 5,
    completion: 60,
    accuracy: 67
  });
});

test("calcula media apenas dos temas totalmente respondidos", () => {
  const result = calculateCompletedThemeAverage([
    { title: "Hardware", total: 6, answered: 6, accuracy: 83 },
    { title: "Redes", total: 8, answered: 4, accuracy: 50 },
    { title: "Criminologia", total: 5, answered: 5, accuracy: 60 },
    { title: "Sem questoes", total: 0, answered: 0, accuracy: null }
  ]);

  assert.deepEqual(result, {
    completedThemes: 2,
    totalThemes: 4,
    average: 72
  });
});

test("monta log textual com dados uteis das questoes erradas", () => {
  const log = buildWrongAnswersLog([
    {
      theme: "Hardware, perifericos e armazenamento",
      source: "FGV / 2019 / Guarda Civil Municipal",
      questionNumber: "2",
      selected: "B",
      answer: "C",
      prompt: "Escolha o dispositivo com espaco suficiente e menor desperdicio.",
      selectedText: "Disquete de 1.44 MB.",
      answerText: "CD-R de 650 MB.",
      selectedExplanation: "1,44 MB nao comporta os 3.000.000 bytes do enunciado.",
      thinking: "Calcule bytes antes de comparar as alternativas.",
      route: "provas/001_hardware-perifericos-armazenamento"
    }
  ], { generatedAt: new Date("2026-08-03T09:00:00-03:00") });

  assert.match(log, /LOG DE QUESTOES ERRADAS - PAPILOSCOPISTA PCPR FGV/);
  assert.match(log, /Hardware, perifericos e armazenamento/);
  assert.match(log, /FGV \/ 2019 \/ Guarda Civil Municipal/);
  assert.match(log, /Marcada: B/);
  assert.match(log, /Gabarito: C/);
  assert.match(log, /Por que errei\/ponto-chave: 1,44 MB nao comporta/);
  assert.match(log, /Como pensar: Calcule bytes antes de comparar/);
});

test("log informa quando nao ha erros gravados", () => {
  const log = buildWrongAnswersLog([], { generatedAt: new Date("2026-08-03T09:00:00-03:00") });

  assert.match(log, /Nenhuma questao errada registrada/);
});

test("extrai a rota de um link renderizado pelo docsify (hash router)", () => {
  assert.equal(
    getRouteFromLink("#/provas/portugues/001_interpretacao-compreensao-texto"),
    "provas/portugues/001_interpretacao-compreensao-texto"
  );
});

test("extrai a rota de um link relativo ainda nao processado pelo docsify", () => {
  assert.equal(
    getRouteFromLink("provas/rlm/002_numeros-porcentagem-juros-proporcionalidade-medidas.md"),
    "provas/rlm/002_numeros-porcentagem-juros-proporcionalidade-medidas"
  );
});

test("nao esvazia a rota por causa do prefixo de hash do router", () => {
  const route = getRouteFromLink("#/provas/quimica/001_estrutura-materia-tabela-periodica-ligacoes");
  assert.notEqual(route, "");
  assert.equal(route.startsWith("provas/"), true);
});
