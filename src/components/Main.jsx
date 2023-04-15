import Menu from "./Menu"
import styles from "../styles/Main.module.css"
import { iconComputer, iconNotification, iconPaste, iconStar, iconFilter, iconGear } from "./icons/icon"
import Footer from "./Footer"

const Main = () => {
    return (
        <>
            <Menu />
            <main className={styles.mainBackground}>
                <article>
                    <div className={styles.mainPainelPrincipal}>
                        <img className={styles.mainImagem} src="/assets/imagens/background-image.png" alt="Iamgem de um estudante usada como bakground de apresentação" />
                        <div className={styles.mainDescricao}>
                            <h2 className={styles.mainTitulo}>Plataforma digital para estágio!</h2>
                            <h1 className={styles.mainSubtitulo}>Documentação online para facilitar o seu estágio</h1>
                            <div className={styles.mainDivisaoLinkDetalhes}>
                                <a className={styles.mainLinkDetalhes} href="">Saiba Mais</a>
                            </div>
                        </div>
                    </div>
                    <section className={`${styles.mainSaibaMais}`}>
                        <h2 className={`${styles.mainTituloVerMais} lg:text-4xl sm:text-2xl font-bold`}>O que acham de nós?</h2>
                        <h3 className={`${styles.mainSubtituloVerMais} lg:text-3xl sm:text-1xl font-light`}>Um site que facilita a gestão de estágios em sua instituiçao, integrando de forma digital a documentação necessária para a conclusão dessa etapa importante.</h3>
                        <div className={`${styles.mainDivBotaoVerMais} lg:text-2xl sm:text-1xl font-bold`}>
                            <a className={styles.mainBotaoVerMais} href="">Ver Mais</a>
                        </div>
                    </section>
                </article>
                <section className={styles.mainServicos}>
                    <div className={styles.mainCardServicosTitle}>
                        <h3 className={`${styles.mainIconTitulo} text-3xl font-bold`}>Nossos Serviços</h3>
                    </div>
                    <div className={styles.mainGroupCardServicos}>
                        <div className={styles.mainCardServicos}>
                            {iconComputer}
                            <h3 className={`${styles.mainIconTitulo} text-1xl font-bold`}>Digital</h3>
                        </div>
                        <div className={styles.mainCardServicos}>
                            {iconFilter}
                            <h3 className={`${styles.mainIconTitulo} text-1xl font-bold`}>Filtros</h3>
                        </div>
                        <div className={styles.mainCardServicos}>
                            {iconPaste}
                            <h3 className={`${styles.mainIconTitulo} text-1xl font-bold`}>Organizado</h3>
                        </div>
                    </div>
                    <div className={styles.mainGroupCardServicos}>
                        <div className={styles.mainCardServicos}>
                            {iconStar}
                            <h3 className={`${styles.mainIconTitulo} text-1xl font-bold`}>Bem-avaliado</h3>
                        </div>
                        <div className={styles.mainCardServicos}>
                            {iconNotification}
                            <h3 className={`${styles.mainIconTitulo} text-1xl font-bold`}>Notificações</h3>
                        </div>
                        <div className={styles.mainCardServicos}>
                            {iconGear}
                            <h3 className={`${styles.mainIconTitulo} text-1xl font-bold`}>Configurações</h3>
                        </div>
                    </div>
                </section>
                <section className={styles.mainOpinioes}>
                    <h3 className={`${styles.mainTituloOpiniao} text-3xl font-bold`}>Sobre Nós</h3>
                    <div className={styles.mainGroupCriadores}>
                        <img className={styles.mainImagemCriador} src="/assets/imagens/background-image.png" alt="Imagem do primeiro criador do projeto" />
                        <h3 className={`${styles.mainNome} text-3xl font-bold`}>Nicolly Costa</h3>
                        <h4 className={`${styles.mainIdade} text-5xl font-bold`}>22 anos</h4>
                        <p className={`${styles.mainApresentacao} text-xl font-bold`}>Um sistema com uma personalidade incrivel! Quando comecei a estagiar estava preocupada náo só com o estágio mas também em como me organizar para conseguir entregar as documentacões no tempo certo, com a paltaforma de estágio consegui concluir o estágio sem mais preocupacões.</p>
                    </div>
                    <div className={styles.mainGroupCriadores}>
                        <img className={styles.mainImagemCriador} src="/assets/imagens/background-image.png" alt="Imagem do primeiro criador do projeto" />
                        <h3 className={`${styles.mainNome} text-3xl font-bold`}>Douglas Santos</h3>
                        <h4 className={`${styles.mainIdade} text-5xl font-bold`}>22 anos</h4>
                        <p className={`${styles.mainApresentacao} text-xl font-bold`}>Um sistema com uma personalidade incrivel! Quando comecei a estagiar estava preocupada náo só com o estágio mas também em como me organizar para conseguir entregar as documentacões no tempo certo, com a paltaforma de estágio consegui concluir o estágio sem mais preocupacões.</p>
                    </div>
                    <div className={styles.mainGroupCriadores}>
                        <img className={styles.mainImagemCriador} src="/assets/imagens/background-image.png" alt="Imagem do primeiro criador do projeto" />
                        <h3 className={`${styles.mainNome} text-3xl font-bold`}>Vitor Oliveira</h3>
                        <h4 className={`${styles.mainIdade} text-5xl font-bold`}>22 anos</h4>
                        <p className={`${styles.mainApresentacao} text-xl font-bold`}>Um sistema com uma personalidade incrivel! Quando comecei a estagiar estava preocupada náo só com o estágio mas também em como me organizar para conseguir entregar as documentacões no tempo certo, com a paltaforma de estágio consegui concluir o estágio sem mais preocupacões.</p>
                    </div>
                    <div className={styles.mainGroupCriadores}>
                        <img className={styles.mainImagemCriador} src="/assets/imagens/background-image.png" alt="Imagem do primeiro criador do projeto" />
                        <h3 className={`${styles.mainNome} text-3xl font-bold`}>Wesley Gomes</h3>
                        <h4 className={`${styles.mainIdade} text-5xl font-bold`}>22 anos</h4>
                        <p className={`${styles.mainApresentacao} text-xl font-bold`}>Um sistema com uma personalidade incrivel! Quando comecei a estagiar estava preocupada náo só com o estágio mas também em como me organizar para conseguir entregar as documentacões no tempo certo, com a paltaforma de estágio consegui concluir o estágio sem mais preocupacões.</p>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Main