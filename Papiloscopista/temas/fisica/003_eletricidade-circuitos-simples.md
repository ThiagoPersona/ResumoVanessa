# 033 - Eletricidade e circuitos simples

## Leitura rápida

- A Lei de Ohm (U=R·i) relaciona tensão, resistência e corrente — a base de qualquer cálculo de circuito elétrico simples.
- Em série, a corrente é igual em todos os componentes e as resistências se somam; em paralelo, a tensão é igual em todos os ramos e as resistências se combinam pelo inverso (1/Req = 1/R1+1/R2+...).
- Um gerador real tem resistência interna (r), que causa queda de tensão quando circula corrente — a diferença entre a força eletromotriz (ε) e a tensão nos terminais (U) é exatamente essa queda: U = ε - r·i.
- Voltímetro ideal tem resistência infinita (não altera o circuito); amperímetro ideal tem resistência nula — essa idealização simplifica o cálculo em questões de prova.

## Por que cai

Eletricidade básica é relevante para o cargo por dois motivos: compreensão de equipamentos periciais que envolvem circuitos (câmeras, sensores, dispositivos de captura) e como parte do repertório geral de física aplicada cobrado no edital, testando raciocínio quantitativo com grandezas elétricas.

## Conteúdo completo orientado ao edital

### Grandezas elétricas fundamentais

| Grandeza | Símbolo | Unidade | Definição |
|---|---|---|---|
| Corrente elétrica | i (ou I) | Ampère (A) | Taxa de fluxo de carga elétrica por unidade de tempo |
| Tensão (diferença de potencial) | U (ou V) | Volt (V) | Energia por unidade de carga entre dois pontos |
| Resistência elétrica | R | Ohm (Ω) | Oposição à passagem de corrente |
| Potência elétrica | P | Watt (W) | Energia elétrica consumida/gerada por unidade de tempo (P=U·i) |

### Lei de Ohm

**U = R · i**

Relaciona a tensão sobre um resistor com a resistência e a corrente que o atravessa. É a equação central para resolver praticamente qualquer circuito simples, aplicada trecho a trecho.

### Associação de resistores

| Associação | Corrente | Tensão | Resistência equivalente |
|---|---|---|---|
| Série | Mesma corrente em todos os resistores | Tensão total se divide entre os resistores | Req = R1 + R2 + R3 + ... |
| Paralelo | Corrente total se divide entre os ramos | Mesma tensão em todos os resistores | 1/Req = 1/R1 + 1/R2 + 1/R3 + ... |

Regra prática: em série, a resistência equivalente é sempre maior que a maior resistência individual; em paralelo, é sempre menor que a menor resistência individual.

### Gerador real: força eletromotriz e resistência interna

Um gerador real (bateria, pilha) tem força eletromotriz (ε, a tensão que forneceria sem perdas) e resistência interna (r). Quando uma corrente i circula pelo circuito, ocorre uma queda de tensão interna igual a r·i, de forma que a tensão disponível nos terminais do gerador é:

**U = ε - r·i**

Quando o circuito está aberto (sem corrente circulando, i=0), a tensão nos terminais é igual à própria força eletromotriz (U=ε), porque não há queda interna. Ao fechar a chave e permitir corrente, a tensão nos terminais cai proporcionalmente à resistência interna e à corrente que passa a circular.

### Instrumentos de medida: voltímetro e amperímetro ideais

- **Voltímetro** mede tensão e é ligado **em paralelo** com o componente medido; idealmente tem resistência infinita, para não desviar corrente do circuito original.
- **Amperímetro** mede corrente e é ligado **em série** no trecho medido; idealmente tem resistência nula, para não introduzir queda de tensão adicional.

Essas idealizações (resistência infinita do voltímetro, nula do amperímetro) são frequentemente assumidas em questões de prova para simplificar o cálculo, permitindo tratar o instrumento como se não afetasse o circuito.

### Potência elétrica e energia

A potência dissipada ou fornecida é **P = U · i**, podendo ser reescrita, usando a Lei de Ohm, como P = R·i² ou P = U²/R. A energia consumida ao longo do tempo é E = P·t, geralmente expressa em quilowatt-hora (kWh) em aplicações de consumo doméstico.

## Prioridades FGV dentro deste tema

| Prioridade | Por que é prioridade | Como treinar |
|---|---|---|
| Aplicar a Lei de Ohm trecho a trecho num circuito | Base de qualquer questão de circuito simples | Identifique tensão, resistência e corrente conhecidas em cada trecho antes de calcular a incógnita |
| Diferenciar associação em série (soma resistências) de paralelo (soma inversos) | Erro clássico de troca de fórmula | Lembre: série=corrente igual, soma direta; paralelo=tensão igual, soma de inversos |
| Calcular a resistência interna de um gerador a partir da queda de tensão com a chave fechada | Aplicação direta e recorrente em prova | Use U=ε-r·i, isolando r a partir dos valores de tensão em aberto e fechado |
| Tratar voltímetro como resistência infinita e amperímetro como resistência nula (idealização) | Simplifica cálculo de circuito em prova | Lembre a regra de ligação de cada instrumento (paralelo/série) e sua resistência ideal |

## Diferenças que a banca costuma trocar

| Conceito A | Conceito B | Como a banca troca | Como não cair |
|---|---|---|---|
| Associação em série (soma direta de R) | Associação em paralelo (soma de inversos) | Ambas combinam resistores num circuito | Série: corrente igual, R somam direto; paralelo: tensão igual, inversos somam |
| Força eletromotriz (ε, sem perdas) | Tensão nos terminais (U, com queda interna) | Ambas são "tensão do gerador" | ε é a tensão ideal; U é o que realmente aparece nos terminais quando há corrente (U=ε-ri) |
| Voltímetro (resistência infinita, ligação paralela) | Amperímetro (resistência nula, ligação série) | Ambos são instrumentos de medida elétrica | Voltímetro em paralelo não desvia corrente; amperímetro em série não cria queda extra |

## Pegadinhas da banca

- Trocar a fórmula de resistência equivalente em série pela de paralelo, ou o contrário.
- Esquecer a queda de tensão por resistência interna ao calcular a tensão nos terminais de um gerador com corrente circulando.
- Ligar voltímetro em série ou amperímetro em paralelo (erro de montagem que inverteria o comportamento ideal esperado).
- Confundir potência com energia (P é instantânea; E=P·t acumula ao longo do tempo).

## Como resolver questões

1. Identifique o tipo de associação (série ou paralelo) antes de escolher a fórmula de resistência equivalente.
2. Para gerador real, sempre monte a equação U=ε-r·i e substitua os valores conhecidos (circuito aberto e fechado) para achar a incógnita.
3. Lembre a ligação correta de cada instrumento (voltímetro em paralelo, amperímetro em série) e sua resistência ideal.
4. Aplique a Lei de Ohm trecho a trecho, não ao circuito inteiro de uma vez, quando há múltiplos resistores.

## Lacunas honestas

- As duas questões reais de circuito localizadas nas provas conferidas (SEAD/AP Q43 e Q48) dependem de figuras de circuito não reproduzidas no texto extraído, impossibilitando verificação segura sem a imagem original — não foram incluídas neste levantamento. É prioridade de busca (com a imagem) para sessão futura.

## Checklist de revisão

- [ ] Sei aplicar a Lei de Ohm (U=Ri).
- [ ] Sei as fórmulas de resistência equivalente em série e em paralelo.
- [ ] Sei a relação entre força eletromotriz, resistência interna e tensão nos terminais (U=ε-ri).
- [ ] Sei como voltímetro e amperímetro ideais são ligados e qual sua resistência ideal.
- [ ] Sei calcular potência elétrica (P=Ui) e energia (E=Pt).
- [ ] Marquei a lacuna de fonte registrada acima.

## Questões relacionadas

- [Resolver questões deste tema](../../provas/fisica/003_eletricidade-circuitos-simples.md)

## Referências

**Prova/FGV**

- Edital PCPR n.º 01/2026, retificado em 31/07/2026 - FGV.
- Duas questões reais localizadas (SEAD/AP 2022, Q43 e Q48) dependem de imagem de circuito não verificável neste levantamento (lacuna registrada acima).

**Material local**

- `Materiais QB/Física/` (quando disponível)

**Atualização/fonte externa**

- [Portal FGV Conhecimento - concursos aplicados](https://conhecimento.fgv.br/concursos) - usado para localizar cadernos oficiais e gabaritos definitivos.

> Regra de uso: este capítulo reescreve e organiza o conteúdo em linguagem própria. Onde não há questão real disponível com segurança de verificação, a lacuna está registrada explicitamente.
