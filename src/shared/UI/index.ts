import { styled } from "styled-components";

interface PropsBotao {
  $tipo?: "sucesso" | "padrao";
  width?: string;
}

export const Botao = styled.button<PropsBotao>`
  border-radius: 4px;
  display: flex;
  gap: 12px;
  padding: 8px;
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0em;
  text-transform: uppercase;
  text-align: center;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  color: #ffffff;
  width: ${(props) => props.width || "100%"};
  background-color: ${(props) =>
    props.$tipo === "sucesso" ? "#039B00" : "#009EDD"};
`;

interface CartaoProps {
  padding?: string;
  gap?: string;
  color?: string;
}

export const Cartao = styled.div<CartaoProps>`
  background-color: #ffffff;
  padding: ${(props) => props.padding || "11px 10px"};
  display: flex;
  border-radius: 4px;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.color || "#333333"};
  gap: ${(props) => props.gap || "8px"};
  width: 100%;
`;

export const Divisor = styled.div`
  width: 100%;
  height: 1px;
  background-color: #999999;
`;
