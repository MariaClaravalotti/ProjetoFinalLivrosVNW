import Facebook from "../../assets/facebook.png"
import Instagram from "../../assets/instagram.png"
import Linkedin from "../../assets/linkedin.png"
import Twitt from "../../assets/twitt.png"
import Youtube from "../../assets/youtube.png"
import S from "./footer.module.scss"

export default function Footer() {
    return (
        <footer>
            <section className={S.cardRedes}>
                <h3>4002-8922</h3>

                <nav>
                    <a href=""><img src={Facebook} alt="" /></a>
                    <a href=""><img src={Twitt} alt="" /></a>
                    <a href=""><img src={Youtube} alt="" /></a>
                    <a href=""><img src={Linkedin} alt="" /></a>
                    <a href=""><img src={Instagram} alt="" /></a>
                </nav>
            </section>
            <section className={S.cardTexto}>
                <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024</p>
            </section>

        </footer>

    )
}