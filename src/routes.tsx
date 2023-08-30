import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createContext, useState } from "react";
import Carrinho, { item } from "./shared/@types/carrinho";
import {
  pegarCarrinho,
  salvarCarrinho,
} from "./shared/service/armazenamentoDeCarrinho";
import EstiloGlobal from "./EstiloGlobal";
import CarrinhoPagina from "./pages/carrinho";
import InicioPagina from "./pages/inicio";
import EstruturaPagina from "./pages/estrutura";
import CompraRealizadaPagina from "./pages/compra-realizada";

export const CarrinhoContext = createContext({});

function AppRoutes() {
  const [carrinho, setCarrinho] = useState<Carrinho>(pegarCarrinho());
  const atualizarCarrinho = (itens: item[]) => {
    let totalItens = 0;
    let totalValor = 0;
    for (let i = 0; i < itens.length; i++) {
      const item = itens[i];
      totalItens += item.quantidade;
      totalValor += item.quantidade * item.produto.price;
    }
    const carrinhoAtualizado: Carrinho = {
      itens,
      totalItens,
      totalValor,
    };
    setCarrinho(carrinhoAtualizado);
    salvarCarrinho(carrinhoAtualizado);
  };

  return (
    <CarrinhoContext.Provider value={{ carrinho, atualizarCarrinho }}>
      <EstiloGlobal />
      <BrowserRouter>
        <Routes>
          <Route Component={EstruturaPagina} path="/">
            <Route index Component={InicioPagina} />
            <Route path="carrinho" Component={CarrinhoPagina} />
            <Route path="compra-realizada" Component={CompraRealizadaPagina} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CarrinhoContext.Provider>
  );
}

export default AppRoutes;
