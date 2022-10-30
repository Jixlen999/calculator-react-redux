export default function calculateExpression(expr) {
    let nums = [];
    let ops = [];
    const operators = {};
    operators['+'] = 0;
    operators['-'] = 0;
    operators['*'] = 1;
    operators['/'] = 1;
    const brackets = ['(', ')'];

    function calculate(op, a, b) {
        a = Number(a);
        b = Number(b);
        // a - предпоследнее число
        // b - последнее число
        // поэтому меняем местами, чтобы первое, поделить на второе
        switch (op) {
            case '+':
                return b + a;
            case '-':
                return b - a;
            case '/':
                return b / a;
            case '*':
                return b * a;
            default:
                return NaN;
        }
    }

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
