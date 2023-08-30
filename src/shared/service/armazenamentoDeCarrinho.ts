import Carrinho from "../@types/carrinho";

export const TOKEN_Carrinho = "@wemovie-Carrinho";

export const pegarCarrinho = (): Carrinho =>
  JSON.parse(`${sessionStorage.getItem(TOKEN_Carrinho)}`) || {
    itens: [],
    totalItens: 0,
    totalValor: 0,
  };

export const salvarCarrinho = (Carrinho: Carrinho): void => {
  sessionStorage.setItem(TOKEN_Carrinho, JSON.stringify(Carrinho));
};
export const removerCarrinho = (): void => {
  sessionStorage.removeItem(TOKEN_Carrinho);
};
