// Стек - LIFO (last in, first out) -
// элементы всегда добавляются в конец и извлекаются также из конца (как стопка бумаги)

// Деревья - рекурсивная структура данных, где каждый узел является также деревом,
// но для данного дерева каждый узел является поддеровом.

// v - value
// c - children
const tree = [
  {
    v: 5,
    c: [
      {
        v: 10,
        c: [
          {
            v: 11,
          },
        ],
      },
      {
        v: 7,
        c: [
          {
            v: 5,
            c: [
              {
                v: 1,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    v: 5,
    c: [
      {
        v: 10,
      },
      {
        v: 15,
      },
    ],
  },
];

function recursive(tree) {
  let sum = 0;
  tree.forEach((node) => {
    sum += node.v;
    if (!node.c) {
      return node.v;
    }
    sum += recursive(node.c);
  });
  return sum;
}

console.log('res-recursive', recursive(tree));

function iteration(tree) {
  if (!tree.length) return 0;
  let sum = 0;
  let stack = [];
  tree.forEach((node) => {
    stack.push(node);
  });

  while (stack.length) {
    const node = stack.pop();
    sum += node.v;
    if (node.c) {
      node.c.forEach((child) => {
        stack.push(child);
      });
    }
  }
  return sum;
}

console.log('res-iteration', iteration(tree));
