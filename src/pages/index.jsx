import Head from 'next/head'
import Image from 'next/image'
import Menu from '../components/Menu'
import Main from '../components/Main'
import Login from '../components/Login'
import CadastroAluno from '../components/CadastroAluno'
import CadastroEmpresa from '../components/CadastroEmpresa'

export default function Home() {
  return (
    <>
      <CadastroEmpresa />
    </>
  )
}
