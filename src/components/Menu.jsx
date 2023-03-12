import { useEffect, useLayoutEffect, useState } from 'react'
import styles from '../styles/Menu.module.css'
import { iconClose, iconMenuMobile } from './icons/icon'

export default function Menu(props) {
    const [mobile, setMobileMenu] = useState('none')
    const [desktop, setDesktopMenu] = useState('flex')

    const alteraVisibilidadeMenu = () => {
        mobile == 'none' ? setMobileMenu('flex') : setMobileMenu('none');
        desktop == 'flex' ? setDesktopMenu('none') : setDesktopMenu('flex');
    }

    useEffect(() => {
        window.addEventListener('resize', () => {
            if (window.innerWidth > 1050) {
                setDesktopMenu('flex')
                setMobileMenu('none')
            }
        })
    }, [])


    return (
        <>
            <div className={styles.menu} style={{ display: desktop }}>
                <div className={styles.menuDivImg}>
                    <img src="/assets/imagens/logo.png" alt="Imagem com o logo do site, nessa imagem temos o nome do projeto: Plataforma de Estágio" />
                </div>
                <div className={styles.menuDivIconMobile} onClick={alteraVisibilidadeMenu}>
                    {iconMenuMobile}
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
                <div className={styles.menuDivLoginCadastro}>
                    <div className={styles.menuDivCadastro}>
                        <div className={styles.menuDivButtons}>
                            <button className={styles.menuDropdown}>Cadastrar</button>
                            <div className={styles.menuDropdownContent}>
                                <span>
                                    <a className={styles.dropdownListItemMobile} href="">Empresa</a>
                                </span>
                                <span>
                                    <a className={styles.dropdownListItemMobile} href="">Aluno</a>
                                </span>
                                <span>
                                    <a className={styles.dropdownListItemMobile} href="">Faculdade</a>
                                </span>
                                <span style={{ border: 'none' }}>
                                    <a className={styles.dropdownListItemMobile} href="">Orientador</a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <a href="" className={styles.menuLoginButton}>Login</a>
                </div>
            </div>

            {/* Menu Mobile */}

            <div className={styles.menuMobile} style={{ display: mobile }}>
                <span className={styles.closeIcon} onClick={alteraVisibilidadeMenu}>{iconClose}</span>
                <div className={styles.menuDivImgMobile}>
                    <img src="/assets/imagens/logo.png" alt="Imagem com o logo do site, nessa imagem temos o nome do projeto: Plataforma de Estágio" />
                </div>
                <div className={styles.menuNavMobile}>
                    <ul className={styles.menuListMobile}>
                        <li className={styles.menuListItemMobile}><a href="">Home</a></li>
                        <li className={styles.menuListItemMobile}><a href="">Contato</a></li>
                        <li className={styles.menuListItemMobile}><a href="">Sobre Nós</a></li>
                        <li className={styles.menuListItemMobile}><a href="">Termos de Uso</a></li>
                    </ul>
                </div>
                <div className={styles.menuDivLoginCadastroMobile}>
                    <div className={styles.menuDivCadastroMobile}>
                        <button className={styles.menuDropdownMobile}>Cadastrar</button>
                        <div className={styles.menuDropdownContentMobile}>
                            <span>
                                <a className={styles.dropdownListItemMobile} href="">Empresa</a>
                            </span>
                            <span>
                                <a className={styles.dropdownListItemMobile} href="">Aluno</a>
                            </span>
                            <span>
                                <a className={styles.dropdownListItemMobile} href="">Faculdade</a>
                            </span>
                            <span style={{ border: 'none' }}>
                                <a className={styles.dropdownListItemMobile} href="">Orientador</a>
                            </span>
                        </div>
                    </div>
                    <a href="" className={styles.menuLoginButtonMobile}>Login</a>
                </div>
            </div>

        </>

    )
}
