import { useContext } from "react";
import styled from "styled-components";
import { CarrinhoContext } from "../../routes";
import { CarrinhoContextType } from "../../shared/@types/carrinho";
import { Botao, Cartao, Divisor } from "../../shared/UI";
import { ReactComponent as CarrinhoVazio } from "../../assets/carrinho-vazio.svg";

import CartaoAviso from "../../shared/components/cartao-aviso";
import ItemListaProduto from "./components/item-lista-produto";
import mascaraMonetaria from "../../shared/util/mascara-monetaria";
import { useNavigate } from "react-router-dom";

function CarrinhoPagina() {
  const { carrinho, atualizarCarrinho } = useContext(
    CarrinhoContext
  ) as CarrinhoContextType;

  const navigate = useNavigate();

  const deletarProduto = (id: number) => {
    atualizarCarrinho(carrinho.itens.filter((item) => item.produto.id !== id));
  };

  const modificarProduto = (id: number, quantidade: number) => {
    const novoCarrinho = [...carrinho.itens];
    if (quantidade === 0) return;
    for (let i = 0; i < novoCarrinho.length; i++) {
      const item = novoCarrinho[i];
      if (item.produto.id === id) {
        novoCarrinho[i].quantidade = quantidade;
      }
    }
    atualizarCarrinho(novoCarrinho);
  };

  const finalizarPedido = () => {
    atualizarCarrinho([]);
    navigate("/compra-realizada");
  };

  return carrinho.totalItens ? (
    <Cartao>
      <ListaProdutos>
        <Cabecalho>
          <span className="cabecalho__produto">Produto</span>
          <span className="cabecalho__quantidade">Qtd</span>
          <span className="cabecalho__subtotal">SubTotal</span>
        </Cabecalho>
        <ul className="lista">
          {carrinho.itens.map((item) => (
            <ItemListaProduto
              key={item.produto.id}
              item={item}
              deletarProduto={deletarProduto}
              modificarQuantidade={modificarProduto}
            />
          ))}
        </ul>
        <Divisor />
        <Finalizacao>
          <Botao className="finalizacao__botao" onClick={finalizarPedido}>
            Finalizar Pedido
          </Botao>
          <div className="finalizacao">
            <span>Total</span>
            <span className="finalizacao__preco">
              {mascaraMonetaria(carrinho.totalValor)}
            </span>
          </div>
        </Finalizacao>
      </ListaProdutos>
    </Cartao>
  ) : (
    <CartaoAviso
      titulo="Parece que não há nada por aqui :("
      Corpo={CarrinhoVazio}
    />
  );
}

const ListaProdutos = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  @media (max-width: 640px) {
    min-height: calc(100vh - 96px);
  }
  gap: 21px;
  .lista {
    display: flex;
    flex-direction: column;
    gap: 21px;
    flex: 1 1;
  }
`;

const Cabecalho = styled.div`
  display: grid;
  gap: 52px;
  grid-template-columns: 89px 1fr 120px 1fr 18px;
  width: 100%;
  text-transform: uppercase;
  color: #999999;
  font-size: 14px;
  font-weight: 700;
  .cabecalho {
    &__produto {
      grid-column: 1 / 3;
    }
    &__quantidade {
      grid-column: 3 / 4;
    }
    &__subtotal {
      grid-column: 4 / 6;
    }
  }
  @media (max-width: 640px) {
    display: none;
  }
`;

const Finalizacao = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  .finalizacao {
    display: flex;
    gap: 5px;
    color: #999999;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    align-items: center;
    &__preco {
      min-width: 130px;
      text-align: center;
      color: #2f2e41;
      font-size: 24px;
    }
    &__botao {
      width: 235px;
      @media (max-width: 640px) {
        width: 100%;
      }
    }
  }
  @media (max-width: 640px) {
    gap: 16px;
    align-items: flex-end;
    flex-direction: column-reverse;
  }
`;

export default CarrinhoPagina;
