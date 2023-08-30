import { useNavigate } from "react-router-dom";
import { Botao, Cartao } from "../UI";
import { styled } from "styled-components";

interface Props {
  titulo: string;
  Corpo: () => JSX.Element;
}

function CartaoAviso({ titulo, Corpo }: Props) {
  const navigate = useNavigate();
  return (
    <Cartao gap="32px" padding="64px">
      <Aviso>{titulo}</Aviso>
      <CorpoContainer>
        <Corpo />
      </CorpoContainer>
      <Botao onClick={() => navigate("/")} width="180px">
        Voltar
      </Botao>
    </Cartao>
  );
}

const Aviso = styled.h3`
  color: #2f2e41;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
`;

const CorpoContainer = styled.div`
  svg {
    max-width: calc(100% + 128px);
    margin-left: -64px;
  }
`;

export default CartaoAviso;
