import styles from '../styles/Menu.module.css'

export default function Menu(props){
    return(
        <div className={styles.menu}>
            <div className={styles.menuDivImg}>
                <img src="/assets/imagens/logo.png" alt="Imagem com o logo do site, nessa imagem temos o nome do projeto: Plataforma de Estágio" />
            </div>
            <div className={styles.menuDivNavbar}>
                <nav className={styles.menuNav}>
                    <ul className={styles.menuList}>
                        <li className={styles.menuListItem}><a href="">Home</a></li>
                        <li className={styles.menuListItem}><a href="">Contato</a></li>
                        <li className={styles.menuListItem}><a href="">Sobre Nós</a></li>
                        <li className={styles.menuListItem}><a href="">Termos de Uso</a></li>
                    </ul>
                </nav>
            </div>
            <div className={styles.menuDivButtons}>
                <button className={styles.menuDropdown}>Cadastrar</button>
                <div className={styles.menuDropdownContent}>
                    <a href="">Empresa</a>
                    <a href="">Aluno</a>
                    <a href="">Faculdade</a>
                    <a href="">Orientador</a>
                </div>
            </div>
        </div>
    )
}
