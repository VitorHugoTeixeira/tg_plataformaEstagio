import Footer from "../components/Footer"
import Menu from "../components/Menu"
import * as React from 'react';
import { Box, Button, Divider, Badge, IconButton, Avatar, TextField } from "@mui/material";
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Cookies from "js-cookie";
import Link from "next/link";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';



function Retornar(e) {
    window.location.href = '/PainelAluno'
}

const RelatorioAtividade = () => {
    const [tituloDocumento, setTituloDocumento] = React.useState('Declaração de Atividades')
    const [name, setName] = React.useState('')
    const [cpf, setCPF] = React.useState('')
    const [rg, setRG] = React.useState('')
    const [logradouro, setLogradouro] = React.useState('')
    const [num, setNumero] = React.useState('')
    const [Bairro, setBairro] = React.useState('')
    const [Cidade, setCidade] = React.useState('')
    const [Estado, setEstado] = React.useState('')
    const [Curso, setCurso] = React.useState('')
    const [nomeFantasia, setNomeFantasia] = React.useState('')
    const [logradouroEmpresa, setLogradouroEmpresa] = React.useState('')
    const [numEmpresa, setNumeroEmpresa] = React.useState('')
    const [BairroEmpresa, setBairroEmpresa] = React.useState('')
    const [CidadeEmpresa, setCidadeEmpresa] = React.useState('')
    const [EstadoEmpresa, setEstadoEmpresa] = React.useState('')
    const [representante, setRepresentante] = React.useState('')
    const [funcao, setFuncao] = React.useState('')
    const [atividades, setAtividades] = React.useState('')
    const [idAluno, setIdAluno] = React.useState('')

    React.useEffect(() => {
        const url = "http://localhost:3001/getuser/"
        const email = Cookies.get("email")
        fetch(url, {
            method: "POST",
            body: JSON.stringify({ email }),
            headers: {
                'Content-type': 'application/json'
            },
        })
            .then(response => response.json())
            .then(json => {
                setName(json.savedAluno.name)
                setCPF(json.savedAluno.cpf)
                setRG(json.savedAluno.rg)
                setLogradouro(json.savedAluno.logradouro)
                setNumero(json.savedAluno.num)
                setBairro(json.savedAluno.Bairro)
                setCidade(json.savedAluno.Cidade)
                setEstado(json.savedAluno.Estado)
                setCurso(json.savedAluno.Curso)
                fetch("http://localhost:3001/getempresaByName/", {
                    method: "POST",
                    body: JSON.stringify({ nomeFantasia: json.savedAluno.empresa }),
                    headers: {
                        'Content-type': 'application/json'
                    },
                })
                    .then(response => response.json())
                    .then(json => {
                        setNomeFantasia(json.savedEmpresa.nomeFantasia)
                        setLogradouroEmpresa(json.savedEmpresa.logradouro)
                        setNumeroEmpresa(json.savedEmpresa.num)
                        setBairroEmpresa(json.savedEmpresa.Bairro)
                        setCidadeEmpresa(json.savedEmpresa.Cidade)
                        setEstadoEmpresa(json.savedEmpresa.Estado)
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    })


    return (
        <div className="h-screen">
            <Menu />
            <div className="p-2 ml-4 xl:ml-8 md:ml-8 lg:ml-8 sm:ml-4 flex flex-col justify-start items-start">
                <IconButton className="hover:bg-zinc-150 flex justify-center items-center" onClick={e => Retornar(e)}>
                    <ArrowBackIosIcon className="text-[#d3592d] font-bold text-4xl xl:text-6xl lg:text-6xl md:text-6xl sm:text-4xl transition-all" />
                </IconButton>
            </div>
            <Box className="w-[100%] h-screen flex justify-center items-center p-4">
                <Card className="w-[100%] xl:w-[50%] lg:w-[50%] md:w-[80%] sm:w-[100%] m-1 xl:m-4 lg:m-4 md:m-4 sm:m-4">
                    <CardActions className="w-full flex flex-col h-20">
                        <AssignmentIcon className="ml-2 mt-2 text-[#d3592d] self-start p-0" />
                        <Divider className="h-5 text-[#000] font-bold w-full" />
                    </CardActions>
                    <CardContent className="flex justify-center items-center flex-col">
                        <h2 className="font-[Barlow] text-xl">
                            Relatório de Atividades
                        </h2>
                        <div className="mt-4 font-[Source Serif Pro] font-thin">
                            Empresa
                            <input
                                className="w-[50%] mr-2 ml-2 focus:shadow-none focus:outline-none border-b-2 border-[#000]"
                                placeholder="Nome da Empresa"
                                value={nomeFantasia}
                                onChange={e => setNomeFantasia(e.target.value)}
                            />

                            com sede na
                            <input
                                className="w-[40%] xl:w-[20%] lg:w-[20%] md:w-[30%] sm:w-[40%] mr-1 ml-1 focus:shadow-none focus:outline-none border-b-2 border-[#000]"
                                placeholder="Logradouro"
                                value={logradouroEmpresa}
                                onChange={e => setLogradouroEmpresa(e.target.value)}
                            />,
                            nº
                            <input
                                className="w-[20%] mr-1 ml-1 focus:shadow-none focus:outline-none border-b-2 border-[#000]"
                                placeholder="Número"
                                value={numEmpresa}
                                onChange={e => setNumeroEmpresa(e.target.value)}
                            />
                            , no Bairro
                            <input
                                className="w-[40%] mr-1 ml-1 focus:shadow-none focus:outline-none border-b-2 border-[#000]"
                                placeholder="Bairro"
                                value={BairroEmpresa}
                                onChange={e => setBairroEmpresa(e.target.value)}
                            />
                            , no Município de
                            <input
                                className="w-[40%] mr-1 ml-1 focus:shadow-none focus:outline-none border-b-2 border-[#000]"
                                placeholder="Cidade"
                                value={CidadeEmpresa}
                                onChange={e => setCidadeEmpresa(e.target.value)}
                            />,
                            no Estado
                            <input
                                className="w-[40%] mr-1 ml-1 focus:shadow-none focus:outline-none border-b-2 border-[#000]"
                                placeholder="Estado"
                                value={EstadoEmpresa}
                                onChange={e => setEstadoEmpresa(e.target.value)}
                            />,
                            neste ato representada por
                            <input
                                className="w-[40%] mr-1 ml-1 focus:shadow-none focus:outline-none border-b-2 border-[#000]"
                                placeholder="Representante"
                            />
                            ao final assinado, Estudante:
                            <input
                                className="w-[50%] mr-1 ml-1 focus:shadow-none focus:outline-none border-b-2 border-[#000]"
                                placeholder="Nome do Aluno"
                                value={name}
                                onChange={e => setName(e.target.value)}
                            /> RG nº
                            <input
                                className="w-[40%] mr-1 ml-1 focus:shadow-none focus:outline-none border-b-2 border-[#000]"
                                placeholder="RG"
                                value={rg}
                                onChange={e => setRG(e.target.value)}
                            />, CPF nº
                            <input
                                className="w-[40%] mr-1 ml-1 focus:shadow-none focus:outline-none border-b-2 border-[#000]"
                                placeholder="CPF"
                                value={cpf}
                                onChange={e => setCPF(e.target.value)}
                            />, residente à
                            <input
                                className="w-[40%] mr-1 ml-1 focus:shadow-none focus:outline-none border-b-2 border-[#000]"
                                placeholder="Logradouro"
                                value={logradouro}
                                onChange={e => setLogradouro(e.target.value)}
                            />, nº
                            <input
                                className="w-[20%] mr-1 ml-1 focus:shadow-none focus:outline-none border-b-2 border-[#000]"
                                placeholder="Numero"
                                value={num}
                                onChange={e => setNumero(e.target.value)}
                            />, no Bairro
                            <input
                                className="w-[40%] mr-1 ml-1 focus:shadow-none focus:outline-none border-b-2 border-[#000]"
                                placeholder="Bairro"
                                value={Bairro}
                                onChange={e => setBairro(e.target.value)}
                            />, no Município de
                            <input
                                className="w-[40%] mr-1 ml-1 focus:shadow-none focus:outline-none border-b-2 border-[#000]"
                                placeholder="Cidade"
                                value={Cidade}
                                onChange={e => setCidade(e.target.value)}
                            />, no Estado de
                            <input
                                className="w-[40%] mr-1 ml-1 focus:shadow-none focus:outline-none border-b-2 border-[#000]"
                                placeholder="Estado"
                                value={Estado}
                                onChange={e => setEstado(e.target.value)}
                            />, regularmente matriculado no Curso Superior de Tecnologia em
                            <input
                                className="w-[40%] mr-1 ml-1 focus:shadow-none focus:outline-none border-b-2 border-[#000]"
                                placeholder="Curso"
                                value={Curso}
                                onChange={e => setCurso(e.target.value)}
                            />
                            na Faculdade de Tecnologia de São Roque, localizada no Municipio de São Roque, Estado de São Paulo.

                            <p className="mt-4">
                                Vigência do Estágio:
                                <input
                                    className="w-[40%] mr-1 ml-1 focus:shadow-none focus:outline-none border-b-2 border-[#000]"
                                    placeholder="Curso" type="date"
                                />
                                a
                                <input
                                    className="w-[40%] mr-1 ml-1 focus:shadow-none focus:outline-none border-b-2 border-[#000]"
                                    placeholder="Curso" type="date"
                                />
                            </p>
                            <p>
                                Período: de segunda a sexta-feira das
                                <input
                                    className="w-[20%] mr-1 ml-1 focus:shadow-none focus:outline-none border-b-2 border-[#000]"
                                    placeholder="Curso" type="time"
                                />
                                as
                                <input
                                    className="w-[20%] mr-1 ml-1 focus:shadow-none focus:outline-none border-b-2 border-[#000]"
                                    placeholder="Curso" type="time"
                                />
                            </p>

                            <TextField className="mt-4" type="text" fullWidth variant="standard" placeholder="Atividades" multiline rows={4} maxlength="600" />


                        </div>
                    </CardContent>
                    <CardActions className="flex justify-center items-center flex-col">
                        <Divider className="h-1 text-[#000] font-bold w-full" />
                        <button className="self-end text-sm p-3 m-4 bg-[#FF6B35] text-[#fff] rounded-xl hover:bg-[#d3592d]" size="small">Assinar</button>
                    </CardActions>
                </Card>
            </Box>
            <Footer />
        </div>
    )
}

export default RelatorioAtividade

