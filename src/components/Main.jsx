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
                </article>
            </main>
        </>
    )
}

export default Main