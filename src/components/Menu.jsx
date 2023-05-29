import { useEffect, useLayoutEffect, useState } from 'react'
import styles from '../styles/Menu.module.css'
import { iconClose, iconMenuMobile } from './icons/icon'
import Link from 'next/link'

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
            <div className={styles.menu} style={{ display: desktop}}>
                <div className={styles.menuDivImg}>
                    <img src="/assets/imagens/logo.png" alt="Imagem com o logo do site, nessa imagem temos o nome do projeto: Plataforma de Estágio" />
                </div>
                <div className={styles.menuDivIconMobile} onClick={alteraVisibilidadeMenu}>
                    {iconMenuMobile}
                </div>
                <div className={styles.menuDivNavbar}>
                    <nav className={styles.menuNav}>
                        <ul className={styles.menuList}>
                            <li className={styles.menuListItem}><Link href="/">Home</Link></li>
                            <li className={styles.menuListItem}><Link href="./Contato">Contato</Link></li>
                            <li className={styles.menuListItem}><Link href="/SobreNos">Sobre Nós</Link></li>
                            <li className={styles.menuListItem}><Link href="/">Termos de Uso</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className={styles.menuDivLoginCadastro}>
                    <div className={styles.menuDivCadastro}>
                        <div className={styles.menuDivButtons}>
                            <button className={styles.menuDropdown}>Cadastrar</button>
                            <div className={styles.menuDropdownContent}>
                                <span>
                                    <Link className={styles.dropdownListItemMobile} href="/CadastroEmpresa">Empresa</Link>
                                </span>
                                <span>
                                    <Link className={styles.dropdownListItemMobile} href="/CadastroAluno">Aluno</Link>
                                </span>
                                <span>
                                    <Link className={styles.dropdownListItemMobile} href="/CadastroFaculdade">Faculdade</Link>
                                </span>
                                <span style={{ border: 'none' }}>
                                    <Link className={styles.dropdownListItemMobile} href="/CadastroOrientador">Supervisor</Link>
                                </span>
                            </div>
                        </div>
                    </div>
                    <Link href="/Login" className={styles.menuLoginButton}>Login</Link>
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
                        <li className={styles.menuListItemMobile}><Link href="/">Home</Link></li>
                        <li className={styles.menuListItemMobile}><Link href="/Contato">Contato</Link></li>
                        <li className={styles.menuListItemMobile}><Link href="/SobreNos">Sobre Nós</Link></li>
                        <li className={styles.menuListItemMobile}><Link href="">Termos de Uso</Link></li>
                    </ul>
                </div>
                <div className={styles.menuDivLoginCadastroMobile}>
                    <div className={styles.menuDivCadastroMobile}>
                        <button className={styles.menuDropdownMobile}>Cadastrar</button>
                        <div className={styles.menuDropdownContentMobile}>
                            <span>
                                <Link className={styles.dropdownListItemMobile} href="/CadastroEmpresa">Empresa</Link>
                            </span>
                            <span>
                                <Link className={styles.dropdownListItemMobile} href="/CadastroAluno">Aluno</Link>
                            </span>
                            <span>
                                <Link className={styles.dropdownListItemMobile} href="/CadastroEmpresa">Faculdade</Link>
                            </span>
                            <span style={{ border: 'none' }}>
                                <Link className={styles.dropdownListItemMobile} href="/CadastroOrientador">Supervisor</Link>
                            </span>
                        </div>
                    </div>
                    <Link href="/Login" className={styles.menuLoginButtonMobile}>Login</Link>
                </div>
            </div>

        </>

    )
}
