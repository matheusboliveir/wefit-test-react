import { useContext, useEffect, useState } from "react";

import { styled } from "styled-components";
import { CarrinhoContextType } from "../../../shared/@types/carrinho";
import { CarrinhoContext } from "../../../routes";
import Filme from "../../../shared/@types/filme";
import { Cartao, Botao } from "../../../shared/UI";
import { ReactComponent as Carrinho } from "../../../assets/carrinho.svg";
import mascaraMonetaria from "../../../shared/util/mascara-monetaria";

interface Props {
  filme: Filme;
}

function CartaoFilme({ filme }: Props) {
  const [tipoBotao, setTipoBotao] = useState<"sucesso" | "padrao">("padrao");
  const [quantidadeDeFilmes, setQuantidadeDeFilmes] = useState<number>(0);

  const { carrinho, atualizarCarrinho } = useContext(
    CarrinhoContext
  ) as CarrinhoContextType;

  useEffect(() => {
    if (carrinho.itens) {
      for (let i = 0; i < carrinho.itens.length; i++) {
        const filmeDoCarrinho = carrinho.itens[i];
        if (filmeDoCarrinho.produto.id === filme.id) {
          setTipoBotao("sucesso");
          setQuantidadeDeFilmes(filmeDoCarrinho.quantidade);
        }
      }
    }
  }, [carrinho, filme]);

  const adicionarItemAoCarrinho = () => {
    const novoCarrinho = carrinho.itens.filter(
      (item) => item.produto.id !== filme.id
    );
    novoCarrinho.push({ produto: filme, quantidade: quantidadeDeFilmes + 1 });
    atualizarCarrinho(novoCarrinho);
  };

  return (
    <Cartao>
      <ConteudoDoCartao>
        <img className="filme__poster" src={filme.image} alt={filme.title} />
        <h3 className="filme__titulo">{filme.title}</h3>
        <span className="filme__preco">{mascaraMonetaria(filme.price)}</span>
      </ConteudoDoCartao>
      <Botao $tipo={tipoBotao} onClick={adicionarItemAoCarrinho}>
        <TextoDoBotao>
          <span className="botao__thin">
            <Carrinho />
            {quantidadeDeFilmes}
          </span>
          <span className="botao__acao">
            {quantidadeDeFilmes ? "Item adicionado" : "Adicionar ao carrinho"}
          </span>
        </TextoDoBotao>
      </Botao>
    </Cartao>
  );
}

const ConteudoDoCartao = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .filme {
    &__titulo {
      font-weight: 700;
      font-size: 12px;
      margin: 7px 0 2px;
    }
    &__preco {
      color: #2f2e41;
      font-size: 16px;
      font-weight: 700;
    }
    &__poster {
      height: 188px;
      width: fit-content;
    }
  }
`;

const TextoDoBotao = styled.span`
  display: flex;
  gap: 12px;
  .botao {
    &__thin {
      display: flex;
      gap: 4px;
      font-weight: 400;
    }
    &__acao {
      min-width: 157px;
    }
  }
`;

export default CartaoFilme;
