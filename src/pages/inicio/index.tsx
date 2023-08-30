import { useEffect, useState } from "react";

import { styled } from "styled-components";
import api from "../../shared/service/api";
import Filme from "../../shared/@types/filme";
import CartaoFilme from "./components/cartao-filme";
import Carregamento from "../../shared/components/carregamento";

const GradeDeFilmes = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 309px);
  grid-template-rows: auto;
  gap: 1rem;
  justify-content: center;
`;

function InicioPagina() {
  const [filmesDisponiveis, setFilmesDisponiveis] = useState<Filme[]>();

  useEffect(() => {
    api
      .get<Filme[]>("products")
      .then((resp) => {
        setFilmesDisponiveis(resp.data);
      })
      .catch(() => alert("Erro ao carregar filmes"));
  }, []);

  return filmesDisponiveis ? (
    <GradeDeFilmes>
      {filmesDisponiveis.map((filme) => (
        <CartaoFilme filme={filme} key={filme.id} />
      ))}
    </GradeDeFilmes>
  ) : (
    <Carregamento />
  );
}

export default InicioPagina;
