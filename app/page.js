"use client";

import { useState, useEffect} from "react"; 
import axios from "axios"; 
import JogoCard from "@/components/JogoCard"; 

export default function Home() { 
  const [jogos, setJogos] = useState([]); 


useEffect(()=> {
  async function carregar() {
    const res = await axios.get(
      "https://6adc36849cae184827ad0c9f.mockapi.io/jogos/jogos"
    ); 
    setJogos(res.data); 

  }
  carregar(); 
}, []); 

return( 
  <main>
    <h1>Minha lista</h1>
    <pre>{JSON.stringify(jogos, null, 2)}</pre>
  </main>
)

} 