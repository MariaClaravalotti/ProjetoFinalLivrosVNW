import S from "./doados.module.scss"
import livro from "../../assets/livro2.png"
import Bob from "../../assets/bob.jpg"
import axios from "axios"
import { useState, useEffect } from "react"

export default function Doados() {

   const [livros, setLivros]= useState([])

   const getLivros = async() =>{
       
       const response = await axios.get("https://livros-vnw.onrender.com/livros")
       setLivros(response.data)
   }
 
    useEffect(()=>{
        getLivros()
    },[])


    return (
        <section className={S.cardDoados}>
            <h2>Livros Doados </h2>

            <section className={S.boxCard}>
                <article>
                    <img src={livro} alt="imagem do liro o protagonista" />

                    <h3>O Protagosnista</h3>
                    <p>Susanne Andrade</p>
                    <p>Ficção</p>
                </article>
                <article>
                    <img src={Bob} alt="imagem do livro penso e acontece" className={S.bobLivro} />

                    <h3>Penso e Acontece</h3>
                    <p>Bob Proctor</p>
                    <p>Autoconhecimento</p>

                </article>
                {livros.map((item)=>(
                    <article>
                        <img src={item.imagem_url} alt="" />
                        <h3>{item.titulo}</h3>
                        <p>{item.categoria}</p>
                        <p>{item.autor}</p>
                    </article>

                ))} 
            </section>
        </section>
    )
}