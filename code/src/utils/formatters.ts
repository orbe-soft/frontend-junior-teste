export const formatToBRL = (value: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};

// Retorna valor de cada parcela em um parcelamento de 8x
export const getInstallments = (value: number) => {
  const valuePerInstallment = value / 8;
  return formatToBRL(valuePerInstallment);
};

// Função que retorna o valor com um desconto de 10% do original, usada no pagamento à vista com pix
export const percentageDiscount = (value: number) => {
  const withDiscount = value - value * 0.10;
  return formatToBRL(withDiscount);
};
