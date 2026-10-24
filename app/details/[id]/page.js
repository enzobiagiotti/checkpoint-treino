"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import Loading from "@/components/Loading";            // NOVO
import ErrorMessage from "@/components/ErrorMessage";  // NOVO

export default function Detalhes() {
  // lê o [id] da URL
  const { id } = useParams();
  // guarda o jogo encontrado
  const [jogo, setJogo] = useState(null);
  // controla se ainda está buscando
  const [loading, setLoading] = useState(true);   // NOVO
  // guarda a mensagem de erro
  const [erro, setErro] = useState(null);         // NOVO

  // busca o jogo na API; roda de novo se o id mudar
  useEffect(() => {
    async function carregar() {
      try {                                        // NOVO
        const res = await axios.get(
          `https://6adc36849cae184827ad0c9f.mockapi.io/jogos/jogos/${id}`
        );
        setJogo(res.data);
      } catch (e) {                                // NOVO
        setErro("Jogo não encontrado.");           // NOVO
      } finally {                                  // NOVO
        setLoading(false);                         // NOVO
      }                                            // NOVO
    }
    carregar();
  }, [id]);

  if (loading) return <Loading />;                         // NOVO (substitui o if (!jogo))
  if (erro) return <ErrorMessage mensagem={erro} />;       // NOVO

  return (
    <main>
      <img src={jogo.avatar} alt={jogo.nome} width={200} />
      <h1>{jogo.nome}</h1>
      <p>Gênero: {jogo.genero}</p>
      <p>{jogo.descricao}</p>
    </main>
  );
}