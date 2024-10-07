// Алгоритм Дейкстры для поиска кратчайшего пути в графе

// Учитывается также длина пройденного пути (ребра) - это вес
// 1 этап: Для первых 2 точек пишется вес (B, C), для остальных - ∞ (недостижимые)
// 2 этап: B, C - рассмотренные точки
// 3 этап: Рассматриваем вершины, в которые мы можем попасть из точек B и C
// и в таблицу записываем значения от точки А до точек, которые мы достигаем из вершин B и C
// помечаем эти точки как уже рассмотренные
// 4 этап: достигаем G, но происходит перерасчет
// мы находим путь до F, который является короче и перезаписываем значение в таблице
// находим самый оптимальный путь

const graph = {};
graph.a = { b: 2, c: 1 };
graph.b = { f: 7 };
graph.c = { d: 5, e: 2 };
graph.d = { f: 2 };
graph.e = { f: 1 };
graph.f = { g: 1 };
graph.g = {};

function shortPath(graph, start, end) {
  const costs = {}; // минимальные стоимости всех ребер (кратчайшие пути)
  const processed = []; // те узлы, которые мы уже проверили
  let neighbors = {}; // соседние вершины рассматриваемого узла

  // Вершины тех, в которые мы можем попасть со стартовой (от A)
  // costs здесь будет равен { b: 2, c: 1, d: 100000000, e: 100000000, f: 100000000, g: 100000000 }
  Object.keys(graph).forEach((node) => {
    if (node !== start) {
      let value = graph[start][node];
      costs[node] = value || 100000000;
    }
  });

  // Найти вершину, в которую на данный момент мы можем попасть из "А"
  // и путь в которую самый короткий
  let node = findNodeLowestCost(costs, processed);
  // пока мы не обойдем весь граф
  while (node) {
    const cost = costs[node]; // стоимость текущей вершины
    neighbors = graph[node]; // узлы, в которые мы можем попасть из этой вершины
    Object.keys(neighbors).forEach((neighbor) => {
      let newCost = cost + neighbors[neighbor];
      if (newCost < costs[neighbor]) {
        // Обновление значений в таблице, в которой мы хранили минимальные пути
        costs[neighbor] = newCost;
      }
    });

    // Добавляем обработанную вершину
    processed.push(node);
    // Ищем новую вершину
    node = findNodeLowestCost(costs, processed);
  }

  return costs;
}

function findNodeLowestCost(costs, processed) {
  let lowestCost = 100000000;
  let lowestNode;

  Object.keys(costs).forEach((node) => {
    let cost = costs[node];
    if (cost < lowestCost && !processed.includes(node)) {
      lowestCost = cost;
      lowestNode = node;
    }
  });

  return lowestNode;
}

console.log('res', shortPath(graph, 'a', 'g'));
