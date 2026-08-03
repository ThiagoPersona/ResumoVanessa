(function(root) {
  function normalizeText(value) {
    return String(value || "")
      .replace(/\s+/g, " ")
      .trim();
  }

  function isCorrectValue(value) {
    return value === true || value === "1" || value === 1 || value === "true";
  }

  function getQuizProgressStats(progress, total) {
    const rows = progress && typeof progress === "object" ? Object.values(progress) : [];
    const answered = rows.filter((item) => item && item.selected).length;
    const correct = rows.filter((item) => item && item.selected && isCorrectValue(item.correct)).length;
    const safeTotal = Math.max(Number(total) || answered, answered);
    const wrong = answered - correct;

    return {
      answered,
      correct,
      wrong,
      total: safeTotal,
      completion: safeTotal ? Math.round((answered / safeTotal) * 100) : 0,
      accuracy: answered ? Math.round((correct / answered) * 100) : null
    };
  }

  function calculateCompletedThemeAverage(items) {
    const rows = Array.isArray(items) ? items : [];
    const completed = rows.filter((item) => {
      const total = Number(item && item.total) || 0;
      const answered = Number(item && item.answered) || 0;
      const accuracy = item && item.accuracy;
      return total > 0 && answered >= total && accuracy !== null && accuracy !== undefined && Number.isFinite(Number(accuracy));
    });

    const average = completed.length
      ? Math.round(completed.reduce((sum, item) => sum + Number(item.accuracy), 0) / completed.length)
      : null;

    return {
      completedThemes: completed.length,
      totalThemes: rows.length,
      average
    };
  }

  function formatLogDate(date) {
    const value = date instanceof Date && !Number.isNaN(date.getTime()) ? date : new Date();
    try {
      return value.toLocaleString("pt-BR", {
        dateStyle: "short",
        timeStyle: "short"
      });
    } catch (error) {
      return value.toISOString();
    }
  }

  function buildWrongAnswersLog(entries, options) {
    const list = Array.isArray(entries) ? entries : [];
    const settings = options || {};
    const lines = [
      "LOG DE QUESTOES ERRADAS - PAPILOSCOPISTA PCPR FGV",
      `Gerado em: ${formatLogDate(settings.generatedAt)}`,
      `Total de erros registrados: ${list.length}`,
      ""
    ];

    if (!list.length) {
      lines.push("Nenhuma questao errada registrada neste navegador.");
      lines.push("Responda questoes, confira o gabarito e gere o log novamente.");
      return lines.join("\n");
    }

    list.forEach((entry, index) => {
      const title = normalizeText(entry.theme || "Tema nao identificado");
      const source = normalizeText(entry.source || "Fonte nao identificada");
      const questionNumber = normalizeText(entry.questionNumber);
      const selected = normalizeText(entry.selected || "-");
      const answer = normalizeText(entry.answer || "-");
      const route = normalizeText(entry.route);
      const prompt = normalizeText(entry.prompt);
      const selectedText = normalizeText(entry.selectedText);
      const answerText = normalizeText(entry.answerText);
      const selectedExplanation = normalizeText(entry.selectedExplanation);
      const thinking = normalizeText(entry.thinking);

      lines.push(`ERRO ${index + 1}`);
      lines.push(`Tema: ${title}`);
      lines.push(`Questao: ${source}${questionNumber ? ` | item ${questionNumber}` : ""}`);
      lines.push(`Marcada: ${selected}${selectedText ? ` - ${selectedText}` : ""}`);
      lines.push(`Gabarito: ${answer}${answerText ? ` - ${answerText}` : ""}`);
      if (prompt) lines.push(`Enunciado: ${prompt}`);
      if (thinking) lines.push(`Como pensar: ${thinking}`);
      if (selectedExplanation) lines.push(`Por que errei/ponto-chave: ${selectedExplanation}`);
      if (route) lines.push(`Arquivo: ${route}.md`);
      lines.push("");
    });

    return lines.join("\n");
  }

  const api = {
    buildWrongAnswersLog,
    calculateCompletedThemeAverage,
    getQuizProgressStats
  };

  root.PapiloQuizTools = api;

  if (typeof module !== "undefined" && module.exports) {
    module.exports = api;
  }
})(typeof window !== "undefined" ? window : globalThis);
