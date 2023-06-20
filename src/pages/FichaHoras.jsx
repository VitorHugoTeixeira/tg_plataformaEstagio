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

const FichaHoras = () => {
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
                            Ficha de Horas de Validação de Estágio
                        </h2>
                        <div className="mt-4 font-[Source Serif Pro] font-thin w-[100%]">
                            Nome:
                            <input
                                className="w-[40%] mr-2 ml-2 focus:shadow-none focus:outline-none border-b-2 border-[#000]"
                                placeholder="Nome completo"
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                            <div>
                                RA:
                                <input
                                    className="w-[40%] mr-2 ml-2 focus:shadow-none focus:outline-none border-b-2 border-[#000]"
                                    placeholder="RA"
                                    value={ra}
                                    onChange={e => setRA(e.target.value)}
                                />
                            </div>
                            <div>
                                Curso superior de Tecnologia em:
                                <input
                                    className="w-[40%] mr-2 ml-2 focus:shadow-none focus:outline-none border-b-2 border-[#000]"
                                    placeholder="Curso"
                                    value={Curso}
                                    onChange={e => setCurso(e.target.value)}
                                />
                            </div>
                            <div>
                                Tipo de Atividade desenvolvida e forma de comprovação:
                                <RadioGroup defaultValue="Realizado no setor privado (indústria, coméricio, serviços);" className="flex flex-col">
                                    <FormControlLabel control={<Radio />} value="Estágio realizado no setor privado (indústria, coméricio, serviços);" label="Estágio realizado no setor privado (indústria, coméricio, serviços);" />
                                    <FormControlLabel control={<Radio />} value="Estágio realizado em organizações do terceiro setor (ONGs)" label="Estágio realizado em organizações do terceiro setor (ONGs)" />
                                    <FormControlLabel control={<Radio />} value="Estágio realizado em órgãos da administração pública" label="Estágio realizado em órgãos da administração pública" />
                                    <FormControlLabel control={<Radio />} value="Estágio realizado em atividades extracurriculares sob a supervisão da FATEC como Profissional Liberal, com Declaração assinada pelo Contador, especificando ser área inerente ao Curso, informando a Inscrição no respectivo Conselho de Classe, e comprovante do cadastro da Prefeitura Municipal (no caso de prestador de serviço);" label="Estágio realizado em atividades extracurriculares sob a supervisão da FATEC como Profissional Liberal, com Declaração assinada pelo Contador, especificando ser área inerente ao Curso, informando a Inscrição no respectivo Conselho de Classe, e comprovante do cadastro da Prefeitura Municipal (no caso de prestador de serviço);" />
                                    <FormControlLabel control={<Radio />} value="Estágio realizado como Empresário com Declaração assinada pelo Contador, informando a Razão Social e o CNPJ e ramo das atividades desenvolvidas pela empresa, ou Declaração de Firma Individual;" label="Estágio realizado como Empresário com Declaração assinada pelo Contador, informando a Razão Social e o CNPJ e ramo das atividades desenvolvidas pela empresa, ou Declaração de Firma Individual;" />
                                    <FormControlLabel control={<Radio />} value="Estágio realizado através de Vínculo empregatício em organizações do terceito setor (comprovada através de registro em carteira Profissional e com Declaração da Empresa, das funções desempenhadas)" label="Estágio realizado através de Vínculo empregatício em organizações do terceito setor (comprovada através de registro em carteira Profissional e com Declaração da Empresa, das funções desempenhadas);" />
                                </RadioGroup>
                            </div>
                            <div>
                                Local:
                                <input
                                    className="w-[40%] mr-2 ml-2 focus:shadow-none focus:outline-none border-b-2 border-[#000]"
                                    placeholder="Empresa"
                                    value={nomeFantasia}
                                    onChange={e => setNomeFantasia(e.target.value)}
                                />
                            </div>
                            <div>
                                Área de atividade:
                                <input
                                    className="w-[40%] mr-2 ml-2 focus:shadow-none focus:outline-none border-b-2 border-[#000]"
                                    placeholder="Cargo"
                                />
                            </div>
                            <div>
                                Período:
                                <input
                                    className="w-[40%] mr-1 ml-1 focus:shadow-none focus:outline-none border-b-2 border-[#000]"
                                    placeholder="Curso" type="date"
                                />
                                a
                                <input
                                    className="w-[40%] mr-1 ml-1 focus:shadow-none focus:outline-none border-b-2 border-[#000]"
                                    placeholder="Curso" type="date"
                                />
                            </div>
                            <div>
                                Total de horas cumpridas:
                                <input
                                    className="w-[40%] mr-2 ml-2 focus:shadow-none focus:outline-none border-b-2 border-[#000]"
                                    placeholder="Horas"
                                    type="number"
                                />
                            </div>
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

export default FichaHoras

