import Filme from "./filme";

export default interface Carrinho {
  itens: item[];
  totalItens: number;
  totalValor: number;
}

export type item = { produto: Filme; quantidade: number };

export type CarrinhoContextType = {
  carrinho: Carrinho;
  atualizarCarrinho: (carrinho: item[]) => void;
};
