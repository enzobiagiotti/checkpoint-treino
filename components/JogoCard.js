import Link from "next/link";


export default function JogoCard({ jogo }) { 
  return(
    <Link href={`/details/${jogo.id}`}>
      <img src={jogo.avatar} alt={jogo.nome} width={80} />
      <h2>{jogo.nome}</h2>
      <p>{jogo.genero}</p>
    </Link>
  );
}