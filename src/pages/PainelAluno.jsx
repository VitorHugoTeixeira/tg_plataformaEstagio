import Footer from "../components/Footer"
import Menu from "../components/Menu"
import * as React from 'react';
import { Box, Button, Divider, Input, IconButton, TextField } from "@mui/material";
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import styles from '../styles/Duvidas.module.css'
import EditIcon from '@mui/icons-material/Edit';
import LogoutIcon from '@mui/icons-material/Logout';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Cookies from "js-cookie";
import Link from "next/link";
import FileUploadIcon from '@mui/icons-material/FileUpload';
import FileDownloadDoneIcon from '@mui/icons-material/FileDownloadDone';

function editarCadastro(e) {
    e.preventDefault()
    window.location = '/CadastroAluno?editarItens=true'
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }} className="flex justify-center items-center w-full flex-wrap">
                    {children}
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


const PainelAluno = () => {
    const [value, setValue] = React.useState(0);
    const [nomeAluno, setNomeAluno] = React.useState('')
    const [id, setId] = React.useState('')
    const [icon, setIcon] = React.useState(<FileUploadIcon />)
    const [icon2, setIcon2] = React.useState(<FileUploadIcon />)
    const [icon3, setIcon3] = React.useState(<FileUploadIcon />)
    const [icon4, setIcon4] = React.useState(<FileUploadIcon />)
    const [icon5, setIcon5] = React.useState(<FileUploadIcon />)
    const [icon6, setIcon6] = React.useState(<FileUploadIcon />)
    const [icon7, setIcon7] = React.useState(<FileUploadIcon />)

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function Logout(e) {
        e.preventDefault()
        Cookies.remove('email')
        Cookies.remove('password')

        window.location = '/Login/?exibirMensagem=true'
    }

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
                setNomeAluno(json.savedAluno.name.split(" ")[0])
                setId(json.savedAluno._id)
            })
            .catch(err => console.log(err))

    }, [])

    return (
        <>
            <Menu />
            <Box className="w-full">
                <div className="flex justify-center items-center p-4 xl:p-12 lg:p-12 md:p-12 sm:p-8">
                    <div className="mr-4 xl:mr-8 md:mr-8 lg:mr-8 sm:mr-4 flex flex-col justify-center items-center">
                        <IconButton className="hover:bg-zinc-150" onClick={e => Logout(e)}>
                            <LogoutIcon className="text-[#d3592d] font-bold text-4xl xl:text-6xl lg:text-6xl md:text-6xl sm:text-4xl transition-all" />
                        </IconButton>
                        <h4 className="text-md xl:text-xl lg:text-xl md:text-xl sm:text-md font-normal font-[Barlow]">Logout</h4>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <IconButton className="hover:bg-zinc-150" onClick={e => editarCadastro(e)}>
                            <EditIcon className="text-[#d3592d] font-bold text-4xl xl:text-6xl lg:text-6xl md:text-6xl sm:text-4xl transition-all" />
                        </IconButton>
                        <h4 className="text-md xl:text-xl lg:text-xl md:text-xl sm:text-md font-normal font-[Barlow]">Editar</h4>
                    </div>
                    <Divider className="flex-1 h-2/4 bg-[#004E89] m-8" />
                    <div className="flex justify-center items-start flex-col">
                        <h1 className="text-[#004E89] text-2xl xl:text-4xl lg:text-4xl md:text-4xl sm:text-xl font-bold mb-1">Olá {nomeAluno}</h1>
                    </div>
                </div>
                <section className="w-full bg-[#FF6B35] p-8 xl:p-12 lg:p-12 md:p-12 sm:p-8 text-[#fff]">
                    <h2 className="font-[Barlow] text-2xl font-bold mb-2">Seja bem vindo!</h2>
                    <h3 className="font-[Source-serif-Pro] font-thin w-full xl:w-8/12 lg:w-8/12 md:w-8/12 sm:w-full mt-4 mb-2 text-lg">Nosso site está preparado para deixar mais fácil o período mais importante da sua jornada acadêmica, se tiver alguma dúvida clique no botão ao lado para nós te ajudarmos</h3>
                    <div className="w-full flex justify-end items-end p-0 xl:p-4 lg:p-4 md:p-4 sm:p-2">
                        <a className="p-3 border-solid border-2 border-[#fff] rounded-3xl w-40 text-center font-bold hover:bg-[#d3592d]" href="">Dúvidas</a>
                    </div>
                </section>
                <Box className="w-full flex flex-col justify-center items-start p-0 xl:p-12 lg:p-12 md:p-12 sm:p-8">
                    <h1 className="font-[Barlow] text-xl xl:text-2xl lg:text-2xl md:text-2xl sm:text-xl font-bold mb-4 p-4 mt-4">Documentação</h1>
                    <Box>
                        <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons allowScrollButtonsMobile className="max-w-[300px] xl:max-w-full lg:max-w-full md:max-w-full sm:max-w-[300px]">
                            <Tab className="font-[Barlow] text-lg font-bold" label="Estágio" {...a11yProps(0)} />
                            <Tab className="font-[Barlow] text-lg font-bold" label="Empregado CLT" {...a11yProps(1)} />
                            <Tab className="font-[Barlow] text-lg font-bold" label="Consultores e MEIS" {...a11yProps(2)} />
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                        <Card sx={{ maxWidth: 350, borderRadius: 5 }} className="w-[300px] m-1 xl:m-4 lg:m-4 md:m-4 sm:m-4">
                            <CardActions className="w-full flex flex-col h-20">
                                <AssignmentIcon className="ml-2 mt-2 text-[#d3592d] self-start p-0" />
                                <Divider className="h-5 text-[#000] font-bold w-full" />
                            </CardActions>
                            <CardContent className="flex justify-center items-center flex-col">
                                <h2 className="font-[Barlow] text-xl">
                                    Declaração de Atividades
                                </h2>
                            </CardContent>
                            <CardActions className="flex justify-center items-center flex-col">
                                <Divider className="h-1 text-[#000] font-bold w-full" />
                                <Link href="/DeclaracaoAtividade" className="self-end text-sm p-3 m-4 bg-[#FF6B35] text-[#fff] rounded-xl hover:bg-[#d3592d]" size="small">Ver documento</Link>
                            </CardActions>
                        </Card>
                        <Card sx={{ maxWidth: 350, borderRadius: 5 }} className="w-[300px] m-1 xl:m-4 lg:m-4 md:m-4 sm:m-4">
                            <CardActions className="w-full flex flex-col h-20">
                                <AssignmentIcon className="ml-2 mt-2 text-[#d3592d] self-start p-0" />
                                <Divider className="h-5 text-[#000] font-bold w-full" />
                            </CardActions>
                            <CardContent className="flex justify-center items-center flex-col">
                                <h2 className="font-[Barlow] text-xl">
                                    Relatório de Atividades
                                </h2>
                            </CardContent>
                            <CardActions className="flex justify-center items-center flex-col">
                                <Divider className="h-1 text-[#000] font-bold w-full" />
                                <Link href="/RelatorioAtividade" className="self-end text-sm p-3 m-4 bg-[#FF6B35] text-[#fff] rounded-xl hover:bg-[#d3592d]" size="small">Ver documento</Link>
                            </CardActions>
                        </Card>
                        <Card sx={{ maxWidth: 350, borderRadius: 5 }} className="w-[300px] m-1 xl:m-4 lg:m-4 md:m-4 sm:m-4">
                            <CardActions className="w-full flex flex-col h-20">
                                <AssignmentIcon className="ml-2 mt-2 text-[#d3592d] self-start p-0" />
                                <Divider className="h-5 text-[#000] font-bold w-full" />
                            </CardActions>
                            <CardContent className="flex justify-center items-center flex-col">
                                <h2 className="font-[Barlow] text-xl">
                                    Avaliação
                                </h2>
                            </CardContent>
                            <CardActions className="flex justify-center items-center flex-col">
                                <Divider className="h-1 text-[#000] font-bold w-full" />
                                <Link href="/RelatorioAtividade" className="self-end text-sm p-3 m-4 bg-[#FF6B35] text-[#fff] rounded-xl hover:bg-[#d3592d]" size="small">Ver documento</Link>
                            </CardActions>
                        </Card>
                        <Card sx={{ maxWidth: 350, borderRadius: 5 }} className="w-[300px] m-1 xl:m-4 lg:m-4 md:m-4 sm:m-4">
                            <CardActions className="w-full flex flex-col h-20">
                                <AssignmentIcon className="ml-2 mt-2 text-[#d3592d] self-start p-0" />
                                <Divider className="h-5 text-[#000] font-bold w-full" />
                            </CardActions>
                            <CardContent className="flex justify-center items-center flex-col">
                                <h2 className="font-[Barlow] text-xl">
                                    Termo de Comp. de Estágio
                                </h2>
                            </CardContent>
                            <CardActions className="flex justify-center items-center flex-col">
                                <Divider className="h-1 text-[#000] font-bold w-full" />
                                <Link href="/RelatorioAtividade" className="self-end text-sm p-3 m-4 bg-[#FF6B35] text-[#fff] rounded-xl hover:bg-[#d3592d]" size="small">Ver documento</Link>
                            </CardActions>
                        </Card>
                        <Card sx={{ maxWidth: 350, borderRadius: 5 }} className="w-[300px] m-1 xl:m-4 lg:m-4 md:m-4 sm:m-4">
                            <CardActions className="w-full flex flex-col h-20">
                                <AssignmentIcon className="ml-2 mt-2 text-[#d3592d] self-start p-0" />
                                <Divider className="h-5 text-[#000] font-bold w-full" />
                            </CardActions>
                            <CardContent className="flex justify-center items-center flex-col">
                                <h2 className="font-[Barlow] text-xl">
                                    Convênio de Con. de Estágio
                                </h2>
                            </CardContent>
                            <CardActions className="flex justify-center items-center flex-col">
                                <Divider className="h-1 text-[#000] font-bold w-full" />
                                <Link href="/RelatorioAtividade" className="self-end text-sm p-3 m-4 bg-[#FF6B35] text-[#fff] rounded-xl hover:bg-[#d3592d]" size="small">Ver documento</Link>
                            </CardActions>
                        </Card>
                        <Card sx={{ maxWidth: 350, borderRadius: 5 }} className="w-[300px] m-1 xl:m-4 lg:m-4 md:m-4 sm:m-4">
                            <CardActions className="w-full flex flex-col h-20">
                                <AssignmentIcon className="ml-2 mt-2 text-[#d3592d] self-start p-0" />
                                <Divider className="h-5 text-[#000] font-bold w-full" />
                            </CardActions>
                            <CardContent className="flex justify-center items-center flex-col">
                                <h2 className="font-[Barlow] text-xl">
                                    Rescisão de Com. de Estágio
                                </h2>
                            </CardContent>
                            <CardActions className="flex justify-center items-center flex-col">
                                <Divider className="h-1 text-[#000] font-bold w-full" />
                                <Link href="/RelatorioAtividade" className="self-end text-sm p-3 m-4 bg-[#FF6B35] text-[#fff] rounded-xl hover:bg-[#d3592d]" size="small">Ver documento</Link>
                            </CardActions>
                        </Card>
                        <Card sx={{ maxWidth: 350, borderRadius: 5 }} className="w-[300px] m-1 xl:m-4 lg:m-4 md:m-4 sm:m-4">
                            <CardActions className="w-full flex flex-col h-20">
                                <AssignmentIcon className="ml-2 mt-2 text-[#d3592d] self-start p-0" />
                                <Divider className="h-5 text-[#000] font-bold w-full" />
                            </CardActions>
                            <CardContent className="flex justify-center items-center flex-col">
                                <h2 className="font-[Barlow] text-xl">
                                    Validação de Horas de Estágio
                                </h2>
                            </CardContent>
                            <CardActions className="flex justify-center items-center flex-col">
                                <Divider className="h-1 text-[#000] font-bold w-full" />
                                <Link href="/RelatorioAtividade" className="self-end text-sm p-3 m-4 bg-[#FF6B35] text-[#fff] rounded-xl hover:bg-[#d3592d]" size="small">Ver documento</Link>
                            </CardActions>
                        </Card>
                        <Card sx={{ maxWidth: 350, borderRadius: 5 }} className="w-[300px] m-1 xl:m-4 lg:m-4 md:m-4 sm:m-4">
                            <CardActions className="w-full flex flex-col h-20">
                                <AssignmentIcon className="ml-2 mt-2 text-[#d3592d] self-start p-0" />
                                <Divider className="h-5 text-[#000] font-bold w-full" />
                            </CardActions>
                            <CardContent className="flex justify-center items-center flex-col">
                                <h2 className="font-[Barlow] text-xl">
                                    Apólice de Seguro
                                </h2>
                            </CardContent>
                            <CardActions className="flex justify-center items-center flex-col">
                                <Divider className="h-1 text-[#000] font-bold w-full" />
                                <label htmlFor="upload-photo" className="self-end">
                                    <input
                                        style={{ display: 'none' }}
                                        id="upload-photo"
                                        name="upload-photo"
                                        type="file"
                                        onChange={e => {
                                            if (e.target.value) {
                                                setIcon7(<FileDownloadDoneIcon />)
                                            }

                                        }}
                                    />

                                    <Button className="self-end text-sm p-3 m-4 bg-[#FF6B35] text-[#fff] rounded-xl hover:bg-[#d3592d]" component="span">
                                        {icon7} Enviar Apólice
                                    </Button>
                                </label>
                            </CardActions>
                        </Card>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <Card sx={{ maxWidth: 350, borderRadius: 5 }} className="w-[300px] m-1 xl:m-4 lg:m-4 md:m-4 sm:m-4">
                            <CardActions className="w-full flex flex-col h-20">
                                <AssignmentIcon className="ml-2 mt-2 text-[#d3592d] self-start p-0" />
                                <Divider className="h-5 text-[#000] font-bold w-full" />
                            </CardActions>
                            <CardContent className="flex justify-center items-center flex-col">
                                <h2 className="font-[Barlow] text-xl">
                                    Declaração de Atividades
                                </h2>
                            </CardContent>
                            <CardActions className="flex justify-center items-center flex-col">
                                <Divider className="h-1 text-[#000] font-bold w-full" />
                                <Link href={`/DeclaracaoAtividade?tokenAcesso=${id}`} className="self-end text-sm p-3 m-4 bg-[#FF6B35] text-[#fff] rounded-xl hover:bg-[#d3592d]" size="small">Ver documento</Link>
                            </CardActions>
                        </Card>
                        <Card sx={{ maxWidth: 350, borderRadius: 5 }} className="w-[300px] m-1 xl:m-4 lg:m-4 md:m-4 sm:m-4">
                            <CardActions className="w-full flex flex-col h-20">
                                <AssignmentIcon className="ml-2 mt-2 text-[#d3592d] self-start p-0" />
                                <Divider className="h-5 text-[#000] font-bold w-full" />
                            </CardActions>
                            <CardContent className="flex justify-center items-center flex-col">
                                <h2 className="font-[Barlow] text-xl">
                                    Relatório de Atividades
                                </h2>
                            </CardContent>
                            <CardActions className="flex justify-center items-center flex-col">
                                <Divider className="h-1 text-[#000] font-bold w-full" />
                                <Link href="/RelatorioAtividade" className="self-end text-sm p-3 m-4 bg-[#FF6B35] text-[#fff] rounded-xl hover:bg-[#d3592d]" size="small">Ver documento</Link>
                            </CardActions>
                        </Card>
                        <Card sx={{ maxWidth: 350, borderRadius: 5 }} className="w-[300px] m-1 xl:m-4 lg:m-4 md:m-4 sm:m-4">
                            <CardActions className="w-full flex flex-col h-20">
                                <AssignmentIcon className="ml-2 mt-2 text-[#d3592d] self-start p-0" />
                                <Divider className="h-5 text-[#000] font-bold w-full" />
                            </CardActions>
                            <CardContent className="flex justify-center items-center flex-col">
                                <h2 className="font-[Barlow] text-xl">
                                    Avaliação de Estágio
                                </h2>
                            </CardContent>
                            <CardActions className="flex justify-center items-center flex-col">
                                <Divider className="h-1 text-[#000] font-bold w-full" />
                                <Link href="/Avaliacao" className="self-end text-sm p-3 m-4 bg-[#FF6B35] text-[#fff] rounded-xl hover:bg-[#d3592d]" size="small">Ver documento</Link>
                            </CardActions>
                        </Card>
                        <Card sx={{ maxWidth: 350, borderRadius: 5 }} className="w-[300px] m-1 xl:m-4 lg:m-4 md:m-4 sm:m-4">
                            <CardActions className="w-full flex flex-col h-20">
                                <AssignmentIcon className="ml-2 mt-2 text-[#d3592d] self-start p-0" />
                                <Divider className="h-5 text-[#000] font-bold w-full" />
                            </CardActions>
                            <CardContent className="flex justify-center items-center flex-col">
                                <h2 className="font-[Barlow] text-xl">
                                    Validação de Horas de Estágio
                                </h2>
                            </CardContent>
                            <CardActions className="flex justify-center items-center flex-col">
                                <Divider className="h-1 text-[#000] font-bold w-full" />
                                <Link href="/FichaHoras" className="self-end text-sm p-3 m-4 bg-[#FF6B35] text-[#fff] rounded-xl hover:bg-[#d3592d]" size="small">Ver documento</Link>
                            </CardActions>
                        </Card>
                        <Card sx={{ maxWidth: 350, borderRadius: 5 }} className="w-[300px] m-1 xl:m-4 lg:m-4 md:m-4 sm:m-4">
                            <CardActions className="w-full flex flex-col h-20">
                                <AssignmentIcon className="ml-2 mt-2 text-[#d3592d] self-start p-0" />
                                <Divider className="h-5 text-[#000] font-bold w-full" />
                            </CardActions>
                            <CardContent className="flex justify-center items-center flex-col">
                                <h2 className="font-[Barlow] text-xl">
                                    Requerimento de Equivalência
                                </h2>
                            </CardContent>
                            <CardActions className="flex justify-center items-center flex-col">
                                <Divider className="h-1 text-[#000] font-bold w-full" />
                                <Link href="/RequerimentoEquivalencia" className="self-end text-sm p-3 m-4 bg-[#FF6B35] text-[#fff] rounded-xl hover:bg-[#d3592d]" size="small">Ver documento</Link>
                            </CardActions>
                        </Card>
                        <Card sx={{ maxWidth: 350, borderRadius: 5 }} className="w-[300px] m-1 xl:m-4 lg:m-4 md:m-4 sm:m-4">
                            <CardActions className="w-full flex flex-col h-20">
                                <AssignmentIcon className="ml-2 mt-2 text-[#d3592d] self-start p-0" />
                                <Divider className="h-5 text-[#000] font-bold w-full" />
                            </CardActions>
                            <CardContent className="flex justify-center items-center flex-col">
                                <h2 className="font-[Barlow] text-xl">
                                    Cópia da carteira de trabalho
                                </h2>
                            </CardContent>
                            <CardActions className="flex justify-center items-center flex-col">
                                <Divider className="h-1 text-[#000] font-bold w-full" />
                                <label htmlFor="upload-photo" className="self-end">
                                    <input
                                        style={{ display: 'none' }}
                                        id="upload-photo"
                                        name="upload-photo"
                                        type="file"
                                        onChange={e => {
                                            if (e.target.value) {
                                                setIcon(<FileDownloadDoneIcon />)
                                            }

                                        }}
                                    />

                                    <Button className="self-end text-sm p-3 m-4 bg-[#FF6B35] text-[#fff] rounded-xl hover:bg-[#d3592d]" component="span">
                                        {icon} Enviar CTPS
                                    </Button>
                                </label>
                            </CardActions>
                        </Card>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <Card sx={{ maxWidth: 350, borderRadius: 5 }} className="w-[300px] m-1 xl:m-4 lg:m-4 md:m-4 sm:m-4">
                            <CardActions className="w-full flex flex-col h-20">
                                <AssignmentIcon className="ml-2 mt-2 text-[#d3592d] self-start p-0" />
                                <Divider className="h-5 text-[#000] font-bold w-full" />
                            </CardActions>
                            <CardContent className="flex justify-center items-center flex-col">
                                <h2 className="font-[Barlow] text-xl">
                                    Contra. Prestação de Serviço
                                </h2>
                            </CardContent>
                            <CardActions className="flex justify-center items-center flex-col">
                                <Divider className="h-1 text-[#000] font-bold w-full" />
                                <label htmlFor="upload-photo" className="self-end">
                                    <input
                                        style={{ display: 'none' }}
                                        id="upload-photo"
                                        name="upload-photo"
                                        type="file"
                                        onChange={e => {
                                            if (e.target.value) {
                                                setIcon2(<FileDownloadDoneIcon />)
                                            }

                                        }}
                                    />

                                    <Button className="self-end text-sm p-3 m-4 bg-[#FF6B35] text-[#fff] rounded-xl hover:bg-[#d3592d]" component="span">
                                        {icon2} Enviar
                                    </Button>
                                </label>
                            </CardActions>
                        </Card>
                        <Card sx={{ maxWidth: 350, borderRadius: 5 }} className="w-[300px] m-1 xl:m-4 lg:m-4 md:m-4 sm:m-4">
                            <CardActions className="w-full flex flex-col h-20">
                                <AssignmentIcon className="ml-2 mt-2 text-[#d3592d] self-start p-0" />
                                <Divider className="h-5 text-[#000] font-bold w-full" />
                            </CardActions>
                            <CardContent className="flex justify-center items-center flex-col">
                                <h2 className="font-[Barlow] text-xl">
                                    Contra. MEI
                                </h2>
                            </CardContent>
                            <CardActions className="flex justify-center items-center flex-col">
                                <Divider className="h-1 text-[#000] font-bold w-full" />
                                <label htmlFor="upload-photo3" className="self-end">
                                    <input
                                        style={{ display: 'none' }}
                                        id="upload-photo3"
                                        name="upload-photo3"
                                        type="file"
                                        onChange={e => {
                                            if (e.target.value) {
                                                setIcon3(<FileDownloadDoneIcon />)
                                            }

                                        }}
                                    />

                                    <Button className="self-end text-sm p-3 m-4 bg-[#FF6B35] text-[#fff] rounded-xl hover:bg-[#d3592d]" component="span">
                                        {icon3} Enviar
                                    </Button>
                                </label>
                            </CardActions>
                        </Card>

                        <Card sx={{ maxWidth: 350, borderRadius: 5 }} className="w-[300px] m-1 xl:m-4 lg:m-4 md:m-4 sm:m-4">
                            <CardActions className="w-full flex flex-col h-20">
                                <AssignmentIcon className="ml-2 mt-2 text-[#d3592d] self-start p-0" />
                                <Divider className="h-5 text-[#000] font-bold w-full" />
                            </CardActions>
                            <CardContent className="flex justify-center items-center flex-col">
                                <h2 className="font-[Barlow] text-xl">
                                    Contra. Social da Empresa
                                </h2>
                            </CardContent>
                            <CardActions className="flex justify-center items-center flex-col">
                                <Divider className="h-1 text-[#000] font-bold w-full" />
                                <label htmlFor="upload-photo4" className="self-end">
                                    <input
                                        style={{ display: 'none' }}
                                        id="upload-photo4"
                                        name="upload-photo4"
                                        type="file"
                                        onChange={e => {
                                            if (e.target.value) {
                                                setIcon4(<FileDownloadDoneIcon />)
                                            }

                                        }}
                                    />

                                    <Button className="self-end text-sm p-3 m-4 bg-[#FF6B35] text-[#fff] rounded-xl hover:bg-[#d3592d]" component="span">
                                        {icon4} Enviar
                                    </Button>
                                </label>
                            </CardActions>
                        </Card>

                        <Card sx={{ maxWidth: 350, borderRadius: 5 }} className="w-[300px] m-1 xl:m-4 lg:m-4 md:m-4 sm:m-4">
                            <CardActions className="w-full flex flex-col h-20">
                                <AssignmentIcon className="ml-2 mt-2 text-[#d3592d] self-start p-0" />
                                <Divider className="h-5 text-[#000] font-bold w-full" />
                            </CardActions>
                            <CardContent className="flex justify-center items-center flex-col">
                                <h2 className="font-[Barlow] text-xl">
                                    Declaração da Empresa
                                </h2>
                            </CardContent>
                            <CardActions className="flex justify-center items-center flex-col">
                                <Divider className="h-1 text-[#000] font-bold w-full" />
                                <label htmlFor="upload-photo5" className="self-end">
                                    <input
                                        style={{ display: 'none' }}
                                        id="upload-photo5"
                                        name="upload-photo5"
                                        type="file"
                                        onChange={e => {
                                            if (e.target.value) {
                                                setIcon5(<FileDownloadDoneIcon />)
                                            }

                                        }}
                                    />

                                    <Button className="self-end text-sm p-3 m-4 bg-[#FF6B35] text-[#fff] rounded-xl hover:bg-[#d3592d]" component="span">
                                        {icon5} Enviar
                                    </Button>
                                </label>
                            </CardActions>
                        </Card>
                        <Card sx={{ maxWidth: 350, borderRadius: 5 }} className="w-[300px] m-1 xl:m-4 lg:m-4 md:m-4 sm:m-4">
                            <CardActions className="w-full flex flex-col h-20">
                                <AssignmentIcon className="ml-2 mt-2 text-[#d3592d] self-start p-0" />
                                <Divider className="h-5 text-[#000] font-bold w-full" />
                            </CardActions>
                            <CardContent className="flex justify-center items-center flex-col">
                                <h2 className="font-[Barlow] text-xl text-center">
                                    Notas Fiscais
                                </h2>
                            </CardContent>
                            <CardActions className="flex justify-center items-center flex-col">
                                <Divider className="h-1 text-[#000] font-bold w-full" />
                                <label htmlFor="upload-photo6" className="self-end">
                                    <input
                                        style={{ display: 'none' }}
                                        id="upload-photo6"
                                        name="upload-photo6"
                                        type="file"
                                        onChange={e => {
                                            if (e.target.value) {
                                                setIcon6(<FileDownloadDoneIcon />)
                                            }

                                        }}
                                    />

                                    <Button className="self-end text-sm p-3 m-4 bg-[#FF6B35] text-[#fff] rounded-xl hover:bg-[#d3592d]" component="span">
                                        {icon6} Enviar
                                    </Button>
                                </label>
                            </CardActions>
                        </Card>
                    </TabPanel>
                </Box>
            </Box>
            <Footer />
        </>
    )
}

export default PainelAluno