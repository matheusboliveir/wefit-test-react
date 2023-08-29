import { useContext } from "react";
import { ClienteContext } from "../routes";
import { ClienteContextType } from "../shared/@types/cliente";

function Estrutura() {
  const { cliente } = useContext(ClienteContext) as ClienteContextType;

  return (
    <>
      <header>
        <h1>WeMovies</h1>
        <button>
          <h2>Meu Carrinho</h2>
          <span>{cliente.carrinho.length} itens</span>
        </button>
      </header>
    </>
  );
}

export default Estrutura;
