import Link from 'next/link'
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
                    <Link href="/">Home</Link>
                    <Link href="/CadastroAluno">Aluno</Link>
                    <Link href="/CadastroOrientador">Orientador</Link>
                    <Link href="/CadastroFaculdade">Faculdade</Link>
                </div>
                <div className={styles.footerColunaLinks}>
                    <Link href="/CadastroEmpresa">Empresa</Link>
                    <Link href="/SobreNos">Sobre Nós</Link>
                    <Link href="/Duvidas">Dúvidas</Link>
                    <Link href="/Contato">Contato</Link>
                </div>
                <div className={styles.footerGroupIcons}>
                    <Link href="https://twitter.com/">{iconTwitter}</Link>
                    <Link href="https://www.facebook.com/">{iconFacebook}</Link>
                    <Link href="https://www.instagram.com/"> {iconInstagram}</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer