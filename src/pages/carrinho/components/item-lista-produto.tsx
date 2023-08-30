import { styled } from "styled-components";
import { item } from "../../../shared/@types/carrinho";
import mascaraMonetaria from "../../../shared/util/mascara-monetaria";
import { ReactComponent as BotaoMenos } from "../../../assets/botao-menos.svg";
import { ReactComponent as BotaoMais } from "../../../assets/botao-mais.svg";
import { ReactComponent as Lixeira } from "../../../assets/lixeira.svg";

interface Props {
  item: item;
  modificarQuantidade: (id: number, quantidade: number) => void;
  deletarProduto: (id: number) => void;
}

function ItemTabelaProduto({
  item,
  deletarProduto,
  modificarQuantidade,
}: Props) {
  return (
    <Produto>
      <img
        className="produto__poster"
        src={item.produto.image}
        alt={item.produto.title}
      />
      <div className="produto__informacoes">
        <h3>{item.produto.title}</h3>
        <span className="produto__preco">
          {mascaraMonetaria(item.produto.price)}
        </span>
      </div>
      <ModificadorDeQuantidade>
        <button
          className="produto__botao"
          onClick={() =>
            modificarQuantidade(item.produto.id, --item.quantidade)
          }>
          <BotaoMenos />
        </button>
        <input
          value={item.quantidade}
          className="quantidade__caixa-de-texto"
          onChange={(e) =>
            modificarQuantidade(item.produto.id, parseInt(e.target.value))
          }
        />
        <button
          className="produto__botao"
          onClick={() =>
            modificarQuantidade(item.produto.id, ++item.quantidade)
          }>
          <BotaoMais />
        </button>
      </ModificadorDeQuantidade>
      <div className="produto__subtotal">
        <span className="produto__subtotal__titulo">SubTotal</span>
        <span>{mascaraMonetaria(item.produto.price * item.quantidade)}</span>
      </div>
      <button
        className="produto__botao produto__lixeira"
        onClick={() => deletarProduto(item.produto.id)}>
        <Lixeira />
      </button>
    </Produto>
  );
}

const Produto = styled.li`
  display: grid;
  grid-template-columns: 89px 1fr 120px 1fr 18px;
  gap: 52px;
  align-items: center;
  .produto {
    &__poster {
      height: 114px;
      width: fit-content;
      @media (max-width: 640px) {
        grid-area: poster;
        height: 82px;
      }
    }
    &__informacoes {
      display: flex;
      gap: 8px;
      flex-direction: column;
      color: #2f2e41;
      font-size: 14px;
      font-weight: 700;
      @media (max-width: 640px) {
        grid-area: informacoes;
        flex-direction: row;
        justify-content: space-between;
      }
    }
    &__preco {
      font-size: 16px;
      font-weight: 700;
    }
    &__botao {
      background: none;
      border: none;
      width: 18px;
      height: 18px;
    }
    &__lixeira {
      @media (max-width: 640px) {
        grid-area: lixeira;
      }
    }
    &__subtotal {
      display: flex;
      flex-direction: column;
      color: #2f2e41;
      font-size: 16px;
      font-weight: 700;
      justify-content: flex-start;
      @media (max-width: 640px) {
        align-items: flex-end;
        grid-area: subtotal;
      }
      &__titulo {
        color: #999999;
        font-size: 12px;
        text-transform: uppercase;
        display: none;
        @media (max-width: 640px) {
          display: inline;
        }
      }
    }
  }
  @media (max-width: 640px) {
    gap: 16px;
    grid-template-columns: 64px minmax(120px, 1fr) auto 16px;
    grid-template-rows: 20px auto;
    grid-template-areas:
      "poster informacoes informacoes lixeira"
      "poster modificador  subtotal subtotal";
  }
`;

const ModificadorDeQuantidade = styled.div`
  display: flex;
  gap: 11px;
  align-items: center;
  @media (max-width: 640px) {
    grid-area: modificador;
  }
  .quantidade {
    &__caixa-de-texto {
      border-radius: 4px;
      border: 1px solid #d9d9d9;
      background: #ffffff;
      padding: 0 16px;
      width: 1fr;
      height: 26px;
      max-width: 62px;
    }
  }
`;
export default ItemTabelaProduto;
