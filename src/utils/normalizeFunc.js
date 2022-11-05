export default function normalizeExpression(expr) {
    //функция для совмещения числа с минусом, идущим перед ним
    expr = expr.trim().split(' ');
    expr.forEach((el, index) => {
        if (el !== ')' && Number.isNaN(+el) && expr[index + 1] === '-') {
            expr.splice(index + 1, 1);
            expr[index + 1] = `-${expr[index + 1]}`;
        }
    });
    return expr;
}
