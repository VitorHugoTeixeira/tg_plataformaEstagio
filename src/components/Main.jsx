import Menu from "./Menu"
import styles from "../styles/Main.module.css"

const Main = () => {
    return (
        <>
            <Menu />
            <main className={styles.mainBackground}>
                <article>
                    <div className={styles.mainPainelPrincipal}>
                        <img className={styles.mainImagem} src="/assets/imagens/background-image.png" alt="" />
                        <div className={styles.mainDescricao}>
                            <h2 className={styles.mainTitulo}>Plataforma digital para estágio!</h2>
                            <h1 className={styles.mainSubtitulo}>Documentação online para facilitar o seu estágio</h1>
                            <div className={styles.mainDivisaoLinkDetalhes}>
                                <a className={styles.mainLinkDetalhes} href="">Saiba Mais</a>
                            </div>
                        </div>
                    </div>
                    <section className={styles.mainSaibaMais}>
                        <h2 className={styles.mainTituloVerMais}>O que acham de nós?</h2>
                        <h3 className={styles.mainSubtituloVerMais}>Um site que facilita a gestão de estágios em sua instituiçao, integrando de forma digital a documentação necessária para a conclusão dessa etapa importante.</h3>
                        <div className={styles.mainDivBotaoVerMais}>
                            <a className={styles.mainBotaoVerMais} href="">Ver Mais</a>
                        </div>
                    </section>
                </article>
            </main>
        </>
    )
}

export default Main