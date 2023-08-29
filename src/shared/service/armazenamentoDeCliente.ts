import Cliente from "../@types/cliente";

export const TOKEN_CLIENTE = "@wemovie-cliente";

export const pegarCliente = (): Cliente =>
  JSON.parse(`${sessionStorage.getItem(TOKEN_CLIENTE)}`);

export const salvarCliente = (cliente: Cliente): void => {
  sessionStorage.setItem(TOKEN_CLIENTE, JSON.stringify(cliente));
};
export const removerCliente = (): void => {
  sessionStorage.removeItem(TOKEN_CLIENTE);
};
