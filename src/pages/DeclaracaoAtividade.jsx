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
import { useRouter } from "next/router";
import { FormatAlignJustifyRounded } from "@mui/icons-material";
import Collapse from '@mui/material/Collapse';
import Alert from '@mui/material/Alert';
import CloseIcon from '@mui/icons-material/Close';





const DeclaracaoAtividade = () => {
    const router = useRouter()
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
    const [idAluno, setIdAluno] = React.useState(router.query.tokenAcesso)
    const [mensagem, setMensagem] = React.useState(false)
    const [open, setOpen] = React.useState(true);

    function Retornar(e) {
        if (router.query.tokenTela == 'Supervisor') window.location.href = "ExibicaoDocumentos?tokenAcesso=648f31565c04a2a5b0f68a5b&curso=Sistemas%20para%20a%20Internet&semestre=6"
        else if (router.query.tokenTela == 'Empresa') window.location.href = "ExibicaoDocumentos?tokenAcesso=648f31565c04a2a5b0f68a5b&curso=Sistemas%20para%20a%20Internet&semestre=6&tokenTela=Empresa"
        else window.location.href = '/PainelAluno'
    }

    function assinarDocumento(e) {
        e.preventDefault()
        const documento = {
            tituloDocumento, name, cpf, rg, logradouro, num, Bairro, Cidade, Estado, Curso, nomeFantasia, logradouroEmpresa, numEmpresa, BairroEmpresa, CidadeEmpresa, EstadoEmpresa, representante, funcao, atividades, idAluno
        }
        fetch("http://localhost:3001/assinarDocumento/", {
            method: "POST",
            body: JSON.stringify(documento),
            headers: {
                'Content-type': 'application/json'
            },
        })
            .then(response => response.json())
            .then(json => {
                if(json) setMensagem(true)
            })
            .catch(err => console.log(err))
    }

    React.useEffect(() => {
        const url = "http://localhost:3001/getdocumentByNameAndId/"
        fetch(url, {
            method: "POST",
            body: JSON.stringify({ titulo: tituloDocumento, idAluno: router.query.tokenAcesso }),
            headers: {
                'Content-type': 'application/json'
            },
        })
            .then(response => response.json())
            .then(json => {
                if (json.savedDocument.length) {
                    console.log(json)
                    setName(json.savedDocument[0].nomeAluno)
                    setCPF(json.savedDocument[0].cpfAluno)
                    setRG(json.savedDocument[0].rgAluno)
                    setLogradouro(json.savedDocument[0].logradouroAluno)
                    setNumero(json.savedDocument[0].numAluno)
                    setBairro(json.savedDocument[0].bairroAluno)
                    setCidade(json.savedDocument[0].cidadeAluno)
                    setEstado(json.savedDocument[0].estadoAluno)
                    setCurso(json.savedDocument[0].cursoAluno)
                    setRepresentante(json.savedDocument[0].representante)
                    setFuncao(json.savedDocument[0].funcao)
                    setAtividades(json.savedDocument[0].atividades)
                    setNomeFantasia(json.savedDocument[0].nomeFantasia)
                    setLogradouroEmpresa(json.savedDocument[0].logradouroEmpresa)
                    setNumeroEmpresa(json.savedDocument[0].numEmpresa)
                    setBairroEmpresa(json.savedDocument[0].bairroEmpresa)
                    setCidadeEmpresa(json.savedDocument[0].cidadeEmpresa)
                    setEstadoEmpresa(json.savedDocument[0].estadoEmpresa)
                }
                else {
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
                }
            })
            .catch(err => console.log(err))

    }, [router.query.tokenAcesso])

    return (
        <div className="h-screen">
            <Menu />
            <div className="p-2 ml-4 xl:ml-8 md:ml-8 lg:ml-8 sm:ml-4 flex flex-col justify-start items-start">
                <IconButton className="hover:bg-zinc-150 flex justify-center items-center" onClick={e => Retornar(e)}>
                    <ArrowBackIosIcon className="text-[#d3592d] font-bold text-4xl xl:text-6xl lg:text-6xl md:text-6xl sm:text-4xl transition-all" />
                </IconButton>
            </div>
            <Box className="w-[100%] xl:w-[30%] lg:w-[30%] md:w-[50%] sm:w-[100%]" sx={{ display: mensagem ? 'flex' : 'none' }}>
                <Collapse in={open}>
                    <Alert
                        action={
                            <IconButton
                                aria-label="close"
                                color="inherit"
                                size="small"
                                onClick={() => {
                                    setOpen(false);
                                }}
                            >
                                <CloseIcon fontSize="inherit" />
                            </IconButton>
                        }
                        sx={{ mb: 2, fontWeight: 'bold' }}
                    >
                        {mensagem ? `Assinatura realizada com sucesso!!! Verifique a mensagem no seu email` : ''}
                    </Alert>
                </Collapse>
            </Box>
            <Box className="w-[100%] flex justify-center items-center p-4">
                <Card className="w-[100%] xl:w-[50%] lg:w-[50%] md:w-[80%] sm:w-[100%] m-1 xl:m-4 lg:m-4 md:m-4 sm:m-4">
                    <CardActions className="w-full flex flex-col h-20">
                        <AssignmentIcon className="ml-2 mt-2 text-[#d3592d] self-start p-0" />
                        <Divider className="h-5 text-[#000] font-bold w-full" />
                    </CardActions>
                    <CardContent className="flex justify-center items-center flex-col">
                        <h2 className="font-[Barlow] text-xl">
                            {tituloDocumento}
                        </h2>
                        <div className="mt-4 font-[Source Serif Pro] font-thin">
                            A Empresa
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
                                type="number"
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
                                value={representante}
                                onChange={e => setRepresentante(e.target.value)}
                            />
                            ao final assinado, declara para fins de comprovação de Estágio Curricular Obrigatório, que o estudante
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
                            na Faculdade de Tecnologia de São Roque, desempenha nesta empresa a função de
                            <input
                                className="w-[40%] mr-1 ml-1 focus:shadow-none focus:outline-none border-b-2 border-[#000]"
                                placeholder="Função"
                                value={funcao}
                                onChange={e => setFuncao(e.target.value)}

                            /> com carga horária semanal de 44 horas.

                            <p className="mt-2">
                                Informamos ainda que o funcionário realiza práticas voltadas ao aprendizado e desenvolvimento das competências e habilidades atinentes ao Curso Superior de Tecnologia em Sistemas para a Internet, conforme atividades descritas abaixo:
                                Descrever as atividades desenvolvidas pelo funcionário. (Até 600 caracteres)
                            </p>
                            <TextField className="mt-4" type="text" fullWidth variant="standard" placeholder="Atividades" multiline rows={4} maxLength="600" value={atividades}
                                onChange={e => setAtividades(e.target.value)} />
                        </div>
                    </CardContent>
                    <CardActions className="flex justify-center items-center flex-col">
                        <Divider className="h-1 text-[#000] font-bold w-full" />
                        <button onClick={e => assinarDocumento(e)} className="self-end text-sm p-3 m-4 bg-[#FF6B35] text-[#fff] rounded-xl hover:bg-[#d3592d]" size="small">Assinar</button>
                    </CardActions>
                </Card>
            </Box>
            <Footer />
        </div>
    )
}

export default DeclaracaoAtividade

