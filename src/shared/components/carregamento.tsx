import { styled } from "styled-components";
import RodaCarregamento from "../../assets/roda-carregamento.png";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  .roda {
    width: 64px;
    height: 64px;
    pointer-events: none;
    user-select: none;
    animation: carregar 2s linear infinite;
  }
  @keyframes carregar {
    to {
      transform: rotate(360deg);
    }
  }
`;

function Carregamento() {
  return (
    <Container>
      <img src={RodaCarregamento} className="roda" />
    </Container>
  );
}

export default Carregamento;
