import CartaoAviso from "../../shared/components/cartao-aviso";
import { ReactComponent as CompraFinalizada } from "../../assets/compra-concluida.svg";

function CompraRealizadaPagina() {
  return (
    <CartaoAviso
      titulo="Compra realizada com sucesso!"
      Corpo={CompraFinalizada}
    />
  );
}

export default CompraRealizadaPagina;
