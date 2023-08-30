import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import { CarrinhoContext } from "../../routes";
import { CarrinhoContextType } from "../../shared/@types/carrinho";
import { ReactComponent as Cesta } from "../../assets/cesta.svg";

function EstruturaPagina() {
  const { carrinho } = useContext(CarrinhoContext) as CarrinhoContextType;
  return (
    <AreaUtil>
      <Cabecalho>
        <Link to="">
          <h1 className="cabecalho__titulo">WeMovies</h1>
        </Link>

        <BotaoCarrinho to="carrinho">
          <div className="carrinho">
            <h2 className="carrinho__titulo">Meu Carrinho</h2>
            <span className="carrinho__subtitulo">
              {`${carrinho.totalItens} ${
                carrinho.totalItens !== 1 ? "itens" : "item"
              }`}
            </span>
          </div>
          <Cesta className="carrinho__icone" />
        </BotaoCarrinho>
      </Cabecalho>
      <section className="conteudo">
        <Outlet />
      </section>
    </AreaUtil>
  );
}

const Cabecalho = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 74px;
  padding: 0 10px;
  .cabecalho__titulo {
    color: #ffffff;
    font-size: 20px;
    font-weight: 700;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: left;
  }
  @media (max-width: 425px) {
    height: 68px;
  }
`;

const AreaUtil = styled.main`
  max-width: 960px;
  margin: 0 auto;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  .conteudo {
    height: 100%;
    @media (max-width: 992px) {
      margin: 0 16px;
    }
  }
`;

const BotaoCarrinho = styled(Link)`
  display: flex;
  gap: 8px;
  align-items: center;
  .carrinho {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    font-weight: 600;
    letter-spacing: 0em;
    text-align: left;
    &__titulo {
      color: #ffffff;
      font-size: 14px;
      line-height: 19px;
      @media (max-width: 425px) {
        display: none;
      }
    }
    &__subtitulo {
      font-size: 12px;
      line-height: 16px;
      color: #999999;
    }
    &__icone {
      width: 32px;
      height: 32px;
    }
  }
`;

export default EstruturaPagina;
