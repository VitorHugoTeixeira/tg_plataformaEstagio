import styles from '../styles/Footer.module.css'
import { iconInstagram, iconFacebook, iconTwitter } from './icons/icon'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerHead}>
                <h4 className='text-xl'>&copy; 2022 P.E</h4>
                <a className='text-xl' href="./termosDeUso.jsx">Termos de Uso</a>
            </div>
            <div className={styles.footerBody}>
                <div className={styles.footerColunaLinks}>
                    <a href="./termosDeUso.jsx">Home</a>
                    <a href="./termosDeUso.jsx">Aluno</a>
                    <a href="./termosDeUso.jsx">Orientador</a>
                    <a href="./termosDeUso.jsx">Faculdade</a>
                </div>
                <div className={styles.footerColunaLinks}>
                    <a href="./termosDeUso.jsx">Empresa</a>
                    <a href="./termosDeUso.jsx">Sobre Nós</a>
                    <a href="./termosDeUso.jsx">Dúvidas</a>
                    <a href="./termosDeUso.jsx">Contato</a>
                </div>
                <div className={styles.footerGroupIcons}>
                    <a href="">{iconTwitter}</a>
                    <a href="">{iconFacebook}</a>
                    <a href=""> {iconInstagram}</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer