// Поиск в ширину
// Граф - асбтрактная структура данных, представляющая собой множество вершин и набор ребер
// т.е. соединений между парами вершин
// Пример графа - это карта (города, которые соединены маршрутами)
// Маршруты - ребра
// Города - вершины
// Ребра бывают однонаправленными и двунаправленными

// Очередь - FIFO (first in, first out) - структура данных, состоящая из элементов
// Элементы всегда добавляются в конец структуры,
// а извлекаются из ее начала

// Пример с однонаправленными ребрами (из точки 'a' в точку 'g')
// Отвечает на вопрос, существует ли такой путь в графе
// Находит путь за минимальное кол-во шагов
const graph = {};
graph.a = ['b', 'c'];
graph.b = ['f'];
graph.c = ['d', 'e'];
graph.d = ['f'];
graph.e = ['f'];
graph.f = ['g'];

function breadthSearch(graph, start, end) {
  let queue = [];
  queue.push(start);
  while (queue.length > 0) {
    const current = queue.shift(); // извлекаем 1 элемент из массива
    if (!graph[current]) {
      graph[current] = [];
    }
    if (graph[current].includes(end)) {
      return true;
    } else {
      queue = [...queue, ...graph[current]];
    }
  }

  return false;
}

console.log('res', breadthSearch(graph, 'a', 'g'));
