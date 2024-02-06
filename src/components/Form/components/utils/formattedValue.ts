export function formattedValue(value: number) {
  const formatted = value.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
  });

  return `R$${formatted}`;
}
