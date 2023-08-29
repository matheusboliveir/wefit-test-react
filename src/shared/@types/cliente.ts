import Filme from "./filme";

export default interface Cliente {
  carrinho: item[];
}

export type item = { produto: Filme; quantidade: number };

export type ClienteContextType = {
  cliente: Cliente;
  setCliente: React.Dispatch<React.SetStateAction<Cliente | null>>;
};
