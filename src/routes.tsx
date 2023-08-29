import { Route, Routes } from "react-router-dom";
import Inicio from "./pages/inicio";
import Carrinho from "./pages/carrinho";
import CompraRealizada from "./pages/compra-realizada";
import { createContext, useState } from "react";
import Estrutura from "./pages/estrutura";
import Cliente from "./shared/@types/cliente";
import { pegarCliente } from "./shared/service/armazenamentoDeCliente";

export const ClienteContext = createContext({});

function AppRoutes() {
  const [cliente, setCliente] = useState<Cliente>(pegarCliente());
  return (
    <ClienteContext.Provider value={{ cliente, setCliente }}>
      <Routes>
        <Route Component={Estrutura} path="/">
          <Route index Component={Inicio} />
          <Route path="carrinho" Component={Carrinho} />
          <Route path="compra-realizada" Component={CompraRealizada} />
        </Route>
      </Routes>
    </ClienteContext.Provider>
  );
}

export default AppRoutes;
