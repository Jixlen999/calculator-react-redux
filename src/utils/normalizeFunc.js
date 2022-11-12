export default function normalizeExpression(expr) {
  // функция для совмещения числа с минусом, идущим перед ним
  let trimmedExpr = expr.trim();
  trimmedExpr = trimmedExpr.split(' ');
  const normExpr = [];
  for (let i = 0; i < trimmedExpr.length; i += 1) {
    if (
      trimmedExpr[i] === '-' &&
      (Number.isNaN(+trimmedExpr[i - 1]) || i === 0) &&
      !Number.isNaN(+trimmedExpr[i + 1])
    ) {
      console.log(`trim: ${trimmedExpr}`);
      i += 1;
      normExpr.push(`-${trimmedExpr[i]}`);
      console.log(normExpr);
    } else {
      normExpr.push(trimmedExpr[i]);
    }
  }
  console.log(normExpr);
  return normExpr;
}
