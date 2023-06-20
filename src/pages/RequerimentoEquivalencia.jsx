import Footer from "../components/Footer"
import Menu from "../components/Menu"
import * as React from 'react';
import { Box, Button, Divider, Badge, IconButton, Avatar, TextField, FormControlLabel, Checkbox, RadioGroup, Radio } from "@mui/material";
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

const RequerimentoEquivalencia = () => {
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
    const [ra, setRA] = React.useState('')
    const [atividades, setAtividades] = React.useState('')
    const [idAluno, setIdAluno] = React.useState('')
    const [semestre, setSemestre] = React.useState('')
    const [periodo, setPeriodo] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [emaiEmpresa, setEmailEmpresa] = React.useState('')

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
                setRA(json.savedAluno.RA)
                setNumero(json.savedAluno.num)
                setEmail(json.savedAluno.email)
                setPeriodo(json.savedAluno.Periodo)
                setSemestre(json.savedAluno.Semestre)
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
                        setEmailEmpresa(json.savedEmpresa.email)
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
                            Requerimento de Equivalência
                        </h2>
                        <div className="mt-4 font-[Source Serif Pro] font-thin w-[100%]">
                            <h3 className="font-[Barlow] text-xl font-bold mt-3">Aluno</h3>
                            Nome:
                            <input
                                className="w-[40%] mr-2 ml-2 focus:shadow-none focus:outline-none border-b-2 border-[#000]"
                                placeholder="Nome completo"
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />

                            RG:
                            <input
                                className="w-[40%] mr-2 ml-2 focus:shadow-none focus:outline-none border-b-2 border-[#000]"
                                placeholder="RG"
                                value={rg}
                                onChange={e => setRG(e.target.value)}
                            />
                            <div>
                                RA:
                                <input
                                    className="w-[20%] mr-2 ml-2 focus:shadow-none focus:outline-none border-b-2 border-[#000]"
                                    placeholder="RA"
                                    value={ra}
                                    onChange={e => setRA(e.target.value)}
                                />
                                Curso:
                                <input
                                    className="w-[40%] mr-2 ml-2 focus:shadow-none focus:outline-none border-b-2 border-[#000]"
                                    placeholder="Curso"
                                    value={Curso}
                                    onChange={e => setCurso(e.target.value)}
                                />
                                Semestre:
                                <input
                                    className="w-[20%] mr-2 ml-2 focus:shadow-none focus:outline-none border-b-2 border-[#000]"
                                    placeholder="Semestre"
                                    value={semestre}
                                    onChange={e => setSemestre(e.target.value)}
                                />
                            </div>

                            <div>
                                Turno:
                                <input
                                    className="w-[40%] mr-2 ml-2 focus:shadow-none focus:outline-none border-b-2 border-[#000]"
                                    placeholder="Período"
                                    value={periodo}
                                    onChange={e => setPeriodo(e.target.value)}
                                />
                                Ano:
                                <input
                                    className="w-[40%] mr-2 ml-2 focus:shadow-none focus:outline-none border-b-2 border-[#000]"
                                    placeholder="Ano de Ingresso"
                                    type="number"
                                    value={2020}
                                />
                            </div>
                            <div>
                                E-mail:
                                <input
                                    className="w-[40%] mr-2 ml-2 focus:shadow-none focus:outline-none border-b-2 border-[#000]"
                                    placeholder="e-mail"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />

                                Telefone:
                                <input
                                    className="w-[40%] mr-2 ml-2 focus:shadow-none focus:outline-none border-b-2 border-[#000]"
                                    placeholder="Telefone"
                                />
                            </div>
                            <h3 className="font-[Barlow] text-xl font-bold mt-3">Empresa</h3>
                            <div>
                                Empresa:
                                <input
                                    className="w-[40%] mr-2 ml-2 focus:shadow-none focus:outline-none border-b-2 border-[#000]"
                                    placeholder="Nome da Empresa"
                                    value={nomeFantasia}
                                    onChange={e => setNomeFantasia(e.target.value)}
                                />

                                Cidade:
                                <input
                                    className="w-[40%] mr-2 ml-2 focus:shadow-none focus:outline-none border-b-2 border-[#000]"
                                    placeholder="Cidade"
                                    value={CidadeEmpresa}
                                    onChange={e => setCidadeEmpresa(e.target.value)}
                                />
                            </div>
                            <div>
                                Inicio do Vinculo Empregaticio:
                                <input
                                    className="w-[20%] mr-2 ml-2 focus:shadow-none focus:outline-none border-b-2 border-[#000]"
                                    placeholder="Data"
                                    type="date"
                                />
                                Superior Imediato:
                                <input
                                    className="w-[40%] mr-2 ml-2 focus:shadow-none focus:outline-none border-b-2 border-[#000]"
                                    placeholder="Superior"
                                />
                            </div>
                            <div>
                                E-mail:
                                <input
                                    className="w-[40%] mr-2 ml-2 focus:shadow-none focus:outline-none border-b-2 border-[#000]"
                                    placeholder="e-mail"
                                    value={emaiEmpresa}
                                    onChange={e => setEmailEmpresa(e.target.value)}
                                />

                                Telefone:
                                <input
                                    className="w-[40%] mr-2 ml-2 focus:shadow-none focus:outline-none border-b-2 border-[#000]"
                                    placeholder="Telefone"
                                />
                            </div>
                            <h3 className="font-[Barlow] text-xl font-bold mt-3 flex justify-center">DECLARAÇÃO DE CIÊNCIA DE COMPATIBILIDADE DE ATIVIDADES DESENVOLVIDAS </h3>
                            Eu:
                            <input
                                className="w-[40%] mr-2 ml-2 focus:shadow-none focus:outline-none border-b-2 border-[#000]"
                                placeholder="Nome do Aluno"
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                            RA:
                            <input
                                className="w-[15%] mr-2 ml-2 focus:shadow-none focus:outline-none border-b-2 border-[#000]"
                                placeholder="RA"
                                value={ra}
                                onChange={e => setRA(e.target.value)}
                            />
                            CPF:
                            <input
                                className="w-[25%] mr-2 ml-2 focus:shadow-none focus:outline-none border-b-2 border-[#000]"
                                placeholder="CPF"
                                value={cpf}
                                onChange={e => setCPF(e.target.value)}
                            />
                            matriculado (a) no curso de:
                            <input
                                className="w-[25%] mr-2 ml-2 focus:shadow-none focus:outline-none border-b-2 border-[#000]"
                                placeholder="Curso"
                                value={Curso}
                                onChange={e => setCurso(e.target.value)}
                            />
                            da Fatec de São Roque, declaro estar ciente de que a equivalência de estágio só é permitido para os alunos que estejam trabalhando na área do curso e matriculados na disciplina estágio obrigatório no período permitido no Plano Pedagógico do curso , não sendo permitido apresentarem contratos de trabalhos anteriores ao período de obrigatoriedade do estágio obrigatório
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

export default RequerimentoEquivalencia

