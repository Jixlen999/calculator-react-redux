function add(x, y) {
  return x + y;
}
function sub(x, y) {
  return x - y;
}
function mul(x, y) {
  return x * y;
}
function div(x, y) {
  return x / y;
}
function remainder(x, y) {
  return x % y;
}

const Command = function (execute, value1, value2) {
  this.execute = execute;
  this.value1 = value1;
  this.value2 = value2;
};
const AddCommand = function (value1, value2) {
  return new Command(add, value1, value2);
};

const SubCommand = function (value1, value2) {
  return new Command(sub, value1, value2);
};

const MulCommand = function (value1, value2) {
  return new Command(mul, value1, value2);
};

const DivCommand = function (value1, value2) {
  return new Command(div, value1, value2);
};

const RemainderCommand = function (value1, value2) {
  return new Command(remainder, value1, value2);
};

const Calculator = function () {
  let result = 0;

  return {
    execute(command) {
      result = command.execute(command.value1, command.value2);
    },

    getResult() {
      return result;
    },
  };
};

function calculate(op, a, b) {
  const calculator = new Calculator();
  const numA = Number(a);
  const numB = Number(b);
  // a - предпоследнее число
  // b - последнее число
  // поэтому меняем местами, чтобы первое, поделить на второе
  switch (op) {
    case '+':
      calculator.execute(new AddCommand(numA, numB));
      return calculator.getResult();
    case '-':
      calculator.execute(new SubCommand(numB, numA));
      return calculator.getResult();
    case '/':
      calculator.execute(new DivCommand(numB, numA));
      return calculator.getResult();
    case '*':
      calculator.execute(new MulCommand(numA, numB));
      return calculator.getResult();
    case '%':
      calculator.execute(new RemainderCommand(numB, numA));
      return calculator.getResult();
    default:
      return NaN;
  }
}

function checkValidBrackets(str) {
  const stack = [];
  let res = true;

  const filteredStr = str.filter((el) => el === ')' || el === '(');

  filteredStr.forEach((el) => {
    if (el === '(') {
      stack.push(el);
    } else {
      if (stack.length > 0) {
        stack.pop();
      } else res = false;
    }
  });

  return res;
}

function calculateExpression(expr) {
  const nums = [];
  const ops = [];
  const operators = {};
  operators['+'] = 0;
  operators['-'] = 0;
  operators['*'] = 1;
  operators['/'] = 1;
  operators['%'] = 1;
  const brackets = ['(', ')'];

  try {
    for (let i = 0; i < expr.length; i += 1) {
      // для числа
      if (!(Object.keys(operators).includes(expr[i]) || brackets.includes(expr[i]))) {
        nums.push(expr[i]);
      } else {
        // для не числа
        if (ops.length === 0) {
          ops.push(expr[i]);
        } else {
          if (Object.keys(operators).includes(expr[i])) {
            const prevOp = ops[ops.length - 1];
            if (Object.keys(operators).includes(prevOp)) {
              const prevPrior = operators[prevOp];
              const currOp = expr[i];
              const currPrior = operators[currOp];
              // если приоритет последней опериации ниже или равен приоритету предыдущей операции,
              // то делаем рассчеты для предыдущей оперции и двух последних чисел
              if (prevPrior > currPrior || prevPrior === currPrior) {
                const calculatedVal = calculate(prevOp, nums.pop(), nums.pop());
                nums.push(calculatedVal);
                ops.pop();
                ops.push(currOp);
              } else {
                ops.push(expr[i]);
              }
            } else {
              ops.push(expr[i]);
            }
          } else {
            // подсчеты внутри скобок
            const countOpenBrackets = expr.filter((el) => el === '(').length;
            const countClosedBrackets = expr.filter((el) => el === ')').length;
            if (countOpenBrackets !== countClosedBrackets) {
              return 'Invalid input';
            }
            if (!checkValidBrackets(expr)) {
              return 'Invalid input';
            }
            if (expr[i] === ')') {
              if (expr.indexOf('(') !== -1 && expr.indexOf('(') < i) {
                let j = ops.length - 1;
                while (ops[j] !== '(') {
                  const calculatedVal = calculate(ops[j], nums.pop(), nums.pop());
                  nums.push(calculatedVal);
                  ops.pop();
                  j -= 1;
                }
                ops.pop();
              } else {
                return 'Invalid input';
              }
            } else {
              ops.push(expr[i]);
            }
          }
        }
      }
    }
    // подсчеты для оставшихся знаков
    for (let k = ops.length - 1; k >= 0; k -= 1) {
      const calculatedVal = calculate(ops[k], nums.pop(), nums.pop());
      nums.push(calculatedVal);
      ops.pop();
    }
    // проверки на валидность ввода, деление на 0
    if (nums[0] === Infinity || nums[0] === -Infinity) {
      return 'Division by zero error';
    }
    if (nums.length === 1 && ops.length === 0 && !Number.isNaN(nums[0]) && Number.isFinite(nums[0])) {
      const digitsAfterComma = nums[0].toString().includes('.') ? nums[0].toString().split('.').pop().length : 0;
      if (digitsAfterComma > 3) {
        return nums[0].toFixed(3);
      }
      return nums[0];
    }
    return 'Invalid input';
  } catch (err) {
    return 'Invalid input';
  }
}

export default calculateExpression;
