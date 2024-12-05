import React from "react";
import S from "./header.module.scss"
import Home from "../../Pages/Home/home.jsx"
import Doados from "../../Pages/Doados/doados.jsx"
import QueroDoar from "../../Pages/QueroDoar/querodoar.jsx"
import Logo from "../../assets/logo.png"
import Lupa from "../../assets/search.png"

import { BrowserRouter, Route, Routes, Link } from "react-router-dom"

export default function Header() {
    return (
        <BrowserRouter>

            <header>
                <section className={S.boxLogo}>
                    <img src={Logo} alt="logo da empresa" />
                    <h1>Livros Vai na Web </h1>

                </section>
                <nav className={S.boxMenu}>
                    <ul>
                        <li><Link to="/">Inicio
                        </Link></li>
                        <li><Link to="Doados">Livros Doados</Link></li>
                        <li><Link to="QueroDoar">Quero Doar</Link></li>
                    </ul>
                </nav>
                <div className={S.boxSearch}>
                    <input className={S.boxInput} type="text" placeholder="O que você procura?" />
                    <img src={Lupa} alt="" />
                </div>
            </header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/doados" element={<Doados />} />
                <Route path="/querodoar" element={<QueroDoar />} />
            </Routes>
        </BrowserRouter>
    )
}