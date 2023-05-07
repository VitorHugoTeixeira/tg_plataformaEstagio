import Head from 'next/head'
import Image from 'next/image'
import Menu from '../components/Menu'
import Main from '../components/Main'
import Login from '../components/Login'
import CadastroAluno from '../components/CadastroAluno'
import CadastroEmpresa from '../components/CadastroEmpresa'
import CadastroOrientador from '../components/CadastroOrientador'
import CadastroFaculdade from '../components/CadastroFaculdade'
import Contato from '../components/Contato'
import EsqueciSenha from '../components/EsqueciSenha'
import SobreNos from '../components/SobreNos'
import Duvidas from '../components/Duvidas'
import PainelAluno from '../components/PainelAluno'
import ScrollableTabsButtonAuto from '../components/Teste'
import PainelOrientador from '../components/PainelOrientador'
import PainelCoordenacao from '../components/PainelCoordenacao'
import PainelEmpresa from '../components/PainelEmpresa'

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@100;200;300;400;500;600;700;800;900&family=Source+Serif+Pro:wght@200;300;400;600;700;900&display=swap" rel="stylesheet" />
      </Head>
      <PainelEmpresa />
    </>
  )
}
