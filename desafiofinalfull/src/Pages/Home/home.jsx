import S from "./home.module.scss"
import Cardone from "../../assets/cardone.png"
import Cardtwo from "../../assets/cardtwo.png"
import Cardthree from "../../assets/cardthree.png"
import Cardfour from "../../assets/cardfour.png"


export default function Home() {
    return (
        <main>
            <section>
                <section className={S.post}>
                    <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
                </section>

                <section className={S.devoDoar}>
                    <div>
                        <h2>Por que devo Doar?</h2>
                    </div>
                </section>

                <section className={S.boxCard}>
                    <article>
                        <img src={Cardone} alt="Juntos somos mais fortes " />
                        <p>Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
                    </article>
                    <article>
                        <img src={Cardtwo} alt="Juntos somos mais fortes " />
                        <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
                    </article>
                    <article>
                        <img src={Cardthree} alt="Juntos somos mais fortes " />
                        <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
                    </article>
                    <article>
                        <img src={Cardfour} alt="Juntos somos mais fortes " />
                        <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
                    </article>

                </section>
            </section>
        </main>

    )
}