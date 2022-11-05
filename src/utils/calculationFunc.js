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
    return new Command(div, value1, value2);
};

const Calculator = function () {
    let result = 0;

    return {
        execute: function (command) {
            result = command.execute(command.value1, command.value2);
        },

        getResult: function () {
            return result;
        },
    };
};

function calculate(op, a, b) {
    const calculator = new Calculator();
    a = Number(a);
    b = Number(b);
    // a - предпоследнее число
    // b - последнее число
    // поэтому меняем местами, чтобы первое, поделить на второе
    switch (op) {
        case '+':
            calculator.execute(new AddCommand(a, b));
            return calculator.getResult();
        case '-':
            calculator.execute(new SubCommand(b, a));
            return calculator.getResult();
        case '/':
            calculator.execute(new DivCommand(b, a));
            return calculator.getResult();
        case '*':
            calculator.execute(new MulCommand(a, b));
            return calculator.getResult();
        case '%':
            calculator.execute(new RemainderCommand(b, a));
            return calculator.getResult();
        default:
            return NaN;
    }
}

export default function calculateExpression(expr) {
    let nums = [];
    let ops = [];
    const operators = {};
    operators['+'] = 0;
    operators['-'] = 0;
    operators['*'] = 1;
    operators['/'] = 1;
    operators['%'] = 1;
    const brackets = ['(', ')'];

    try {
        for (let i = 0; i < expr.length; ++i) {
            //для числа
            if (
                !(
                    Object.keys(operators).includes(expr[i]) ||
                    brackets.includes(expr[i])
                )
            ) {
                nums.push(expr[i]);
            } else {
                //для не числа
                if (ops.length === 0) {
                    ops.push(expr[i]);
                } else {
                    if (Object.keys(operators).includes(expr[i])) {
                        let prevOp = ops[ops.length - 1];
                        if (Object.keys(operators).includes(prevOp)) {
                            let prevPrior = operators[prevOp];
                            let currOp = expr[i];
                            let currPrior = operators[currOp];
                            //если приоритет последней опериации ниже или равен приоритету предыдущей операции,
                            //то делаем рассчеты для предыдущей оперции и двух последних чисел
                            if (
                                prevPrior > currPrior ||
                                prevPrior === currPrior
                            ) {
                                let calculatedVal = calculate(
                                    prevOp,
                                    nums.pop(),
                                    nums.pop(),
                                );
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
                        //подсчеты внутри скобок
                        if (expr[i] === ')') {
                            let j = ops.length - 1;
                            while (ops[j] !== '(') {
                                let calculatedVal = calculate(
                                    ops[j],
                                    nums.pop(),
                                    nums.pop(),
                                );
                                nums.push(calculatedVal);
                                ops.pop();
                                --j;
                            }
                            ops.pop();
                        } else {
                            ops.push(expr[i]);
                        }
                    }
                }
            }
        }
        //подсчеты для оставшихся знаков
        for (let k = ops.length - 1; k >= 0; --k) {
            let calculatedVal = calculate(ops[k], nums.pop(), nums.pop());
            nums.push(calculatedVal);
            ops.pop();
        }
        //проверки на валидность ввода, деление на 0
        if (
            nums.length === 1 &&
            ops.length === 0 &&
            !Number.isNaN(nums[0]) &&
            Number.isFinite(nums[0])
        ) {
            return nums[0];
        } else {
            return 'Invalid input';
        }
    } catch {
        return 'Invalid input';
    }
}
