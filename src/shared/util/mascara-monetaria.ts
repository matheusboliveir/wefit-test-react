export default function mascaraMonetaria(numero: number): string {
  return numero.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
}
