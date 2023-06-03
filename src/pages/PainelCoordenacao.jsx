import Footer from "../components/Footer"
import Menu from "../components/Menu"
import * as React from 'react';
import { Box, Button, Divider, Badge, IconButton, Avatar } from "@mui/material";
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import styles from '../styles/Duvidas.module.css'
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


function PagePanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="pagepanel"
            hidden={value !== index}
            id={`simple-pagepanel-${index}`}
            aria-labelledby={`simple-page-${index}`}
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

PagePanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-page-${index}`,
        'aria-controls': `simple-page-${index}`,
    };
}

const PainelCoordenacao = () => {
    const [page, setPage] = React.useState(1);

    const handleChange = (event, newPage) => {
        setPage(newPage);
        console.log(page)
    };

    return (
        <>
            <Menu />
            <Box className="w-full">
                <div className="flex justify-center items-center p-4 xl:p-12 lg:p-12 md:p-12 sm:p-8">
                    <div className="mr-4 xl:mr-8 md:mr-8 lg:mr-8 sm:mr-4 flex flex-col justify-center items-center">
                        <IconButton className="hover:bg-zinc-150">
                            <LogoutIcon className="text-[#d3592d] font-bold text-4xl xl:text-6xl lg:text-6xl md:text-6xl sm:text-4xl transition-all" />
                        </IconButton>
                        <h4 className="text-md xl:text-xl lg:text-xl md:text-xl sm:text-md font-normal font-[Barlow]">Logout</h4>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <IconButton className="hover:bg-zinc-150">
                            <Badge badgeContent={4} color="primary" className="z-0">
                                <NotificationsIcon className="text-[#d3592d] font-bold text-4xl xl:text-6xl lg:text-6xl md:text-6xl sm:text-4xl transition-all" />
                            </Badge>
                        </IconButton>
                        <h4 className="text-md xl:text-xl lg:text-xl md:text-xl sm:text-md font-normal font-[Barlow]">Notificações</h4>
                    </div>
                    <Divider className="flex-1 h-2/4 bg-[#004E89] m-8" />
                    <div className="flex justify-center items-start flex-col">
                        <h1 className="text-[#004E89] text-2xl xl:text-4xl lg:text-4xl md:text-4xl sm:text-xl font-bold mb-1">Olá USP</h1>
                        <h3 className="text-[#004E89] text-lg xl:text-2xl lg:text-2xl md:text-2xl sm:text-lg font-thin">Bom dia!!</h3>
                    </div>
                </div>
                <section className="w-full bg-[#FF6B35] p-8 xl:p-12 lg:p-12 md:p-12 sm:p-8 text-[#fff] mt-12">
                    <h2 className="font-[Barlow] text-2xl font-bold mb-2">Seja bem vindo!</h2>
                    <h3 className="font-[Source-serif-Pro] font-thin w-full xl:w-8/12 lg:w-8/12 md:w-8/12 sm:w-full mt-4 mb-2 text-lg">Esse painel te dará acesso a todas as turmas da instituição, a partir daqui pode acessar as documentações dos alunos para revisão. Qualquer dúvida clique no botão ao lado para te ajudarmos!</h3>
                    <div className="w-full flex justify-end items-end p-0 xl:p-4 lg:p-4 md:p-4 sm:p-2">
                        <a className="p-3 border-solid border-2 border-[#fff] rounded-3xl w-40 text-center font-bold hover:bg-[#d3592d]" href="">Dúvidas</a>
                    </div>
                </section>
                <section className="flex justify-center items-center w-full mb-12 mt-12 flex-col">
                    <Box className="w-full">
                        <h1 className="font-[Barlow] text-xl xl:text-2xl lg:text-2xl md:text-2xl sm:text-xl font-bold p-4 xl:p-12 lg:p-12 md:p-12 sm:p-8">Turmas</h1>
                        <PagePanel value={page} index={1}>
                            <Card sx={{ maxWidth: 350, borderRadius: 5 }} className="w-[300px] m-1 xl:m-4 lg:m-4 md:m-4 sm:m-4">
                                <CardActions className="w-full flex flex-col h-20">
                                    <AssignmentIcon className="ml-2 mt-2 text-[#d3592d] self-start p-0" />
                                    <Divider className="h-5 text-[#000] font-bold w-full" />
                                </CardActions>
                                <CardContent className="flex justify-center items-center flex-col">
                                    <h2 className="font-[Barlow] text-xl">
                                        Sistemas para a internet
                                    </h2>
                                    <h3 className="text-md font-thin font=[Barlow]">
                                        1° Semestre
                                    </h3>
                                </CardContent>
                                <CardActions className="flex justify-center items-center flex-col">
                                    <Divider className="h-1 text-[#000] font-bold w-full" />
                                    <button className="self-end text-sm p-3 m-4 bg-[#FF6B35] text-[#fff] rounded-xl hover:bg-[#d3592d]" size="small">Ver Alunos</button>
                                </CardActions>
                            </Card>
                            <Card sx={{ maxWidth: 350, borderRadius: 5 }} className="w-[300px] m-1 xl:m-4 lg:m-4 md:m-4 sm:m-4">
                                <CardActions className="w-full flex flex-col h-20">
                                    <AssignmentIcon className="ml-2 mt-2 text-[#d3592d] self-start p-0" />
                                    <Divider className="h-5 text-[#000] font-bold w-full" />
                                </CardActions>
                                <CardContent className="flex justify-center items-center flex-col">
                                    <h2 className="font-[Barlow] text-xl">
                                        Sistemas para a internet
                                    </h2>
                                    <h3 className="text-md font-thin font=[Barlow]">
                                        2° Semestre
                                    </h3>
                                </CardContent>
                                <CardActions className="flex justify-center items-center flex-col">
                                    <Divider className="h-1 text-[#000] font-bold w-full" />
                                    <button className="self-end text-sm p-3 m-4 bg-[#FF6B35] text-[#fff] rounded-xl hover:bg-[#d3592d]" size="small">Ver Alunos</button>
                                </CardActions>
                            </Card>

                            <Card sx={{ maxWidth: 350, borderRadius: 5 }} className="w-[300px] m-1 xl:m-4 lg:m-4 md:m-4 sm:m-4">
                                <CardActions className="w-full flex flex-col h-20">
                                    <AssignmentIcon className="ml-2 mt-2 text-[#d3592d] self-start p-0" />
                                    <Divider className="h-5 text-[#000] font-bold w-full" />
                                </CardActions>
                                <CardContent className="flex justify-center items-center flex-col">
                                    <h2 className="font-[Barlow] text-xl">
                                        Sistemas para a internet
                                    </h2>
                                    <h3 className="text-md font-thin font=[Barlow]">
                                        3° Semestre
                                    </h3>
                                </CardContent>
                                <CardActions className="flex justify-center items-center flex-col">
                                    <Divider className="h-1 text-[#000] font-bold w-full" />
                                    <button className="self-end text-sm p-3 m-4 bg-[#FF6B35] text-[#fff] rounded-xl hover:bg-[#d3592d]" size="small">Ver Alunos</button>
                                </CardActions>
                            </Card>

                            <Card sx={{ maxWidth: 350, borderRadius: 5 }} className="w-[300px] m-1 xl:m-4 lg:m-4 md:m-4 sm:m-4">
                                <CardActions className="w-full flex flex-col h-20">
                                    <AssignmentIcon className="ml-2 mt-2 text-[#d3592d] self-start p-0" />
                                    <Divider className="h-5 text-[#000] font-bold w-full" />
                                </CardActions>
                                <CardContent className="flex justify-center items-center flex-col">
                                    <h2 className="font-[Barlow] text-xl">
                                        Sistemas para a internet
                                    </h2>
                                    <h3 className="text-md font-thin font=[Barlow]">
                                        4° Semestre
                                    </h3>
                                </CardContent>
                                <CardActions className="flex justify-center items-center flex-col">
                                    <Divider className="h-1 text-[#000] font-bold w-full" />
                                    <button className="self-end text-sm p-3 m-4 bg-[#FF6B35] text-[#fff] rounded-xl hover:bg-[#d3592d]" size="small">Ver Alunos</button>
                                </CardActions>
                            </Card>
                            <Card sx={{ maxWidth: 350, borderRadius: 5 }} className="w-[300px] m-1 xl:m-4 lg:m-4 md:m-4 sm:m-4">
                                <CardActions className="w-full flex flex-col h-20">
                                    <AssignmentIcon className="ml-2 mt-2 text-[#d3592d] self-start p-0" />
                                    <Divider className="h-5 text-[#000] font-bold w-full" />
                                </CardActions>
                                <CardContent className="flex justify-center items-center flex-col">
                                    <h2 className="font-[Barlow] text-xl">
                                        Sistemas para a internet
                                    </h2>
                                    <h3 className="text-md font-thin font=[Barlow]">
                                        5° Semestre
                                    </h3>
                                </CardContent>
                                <CardActions className="flex justify-center items-center flex-col">
                                    <Divider className="h-1 text-[#000] font-bold w-full" />
                                    <button className="self-end text-sm p-3 m-4 bg-[#FF6B35] text-[#fff] rounded-xl hover:bg-[#d3592d]" size="small">Ver Alunos</button>
                                </CardActions>
                            </Card>
                            <Card sx={{ maxWidth: 350, borderRadius: 5 }} className="w-[300px] m-1 xl:m-4 lg:m-4 md:m-4 sm:m-4">
                                <CardActions className="w-full flex flex-col h-20">
                                    <AssignmentIcon className="ml-2 mt-2 text-[#d3592d] self-start p-0" />
                                    <Divider className="h-5 text-[#000] font-bold w-full" />
                                </CardActions>
                                <CardContent className="flex justify-center items-center flex-col">
                                    <h2 className="font-[Barlow] text-xl">
                                        Sistemas para a internet
                                    </h2>
                                    <h3 className="text-md font-thin font=[Barlow]">
                                        6° Semestre
                                    </h3>
                                </CardContent>
                                <CardActions className="flex justify-center items-center flex-col">
                                    <Divider className="h-1 text-[#000] font-bold w-full" />
                                    <button className="self-end text-sm p-3 m-4 bg-[#FF6B35] text-[#fff] rounded-xl hover:bg-[#d3592d]" size="small">Ver Alunos</button>
                                </CardActions>
                            </Card>
                        </PagePanel>
                        <PagePanel value={page} index={2}>
                            <Card sx={{ maxWidth: 350, borderRadius: 5 }} className="w-[300px] m-1 xl:m-4 lg:m-4 md:m-4 sm:m-4">
                                <CardActions className="w-full flex flex-col h-20">
                                    <AssignmentIcon className="ml-2 mt-2 text-[#d3592d] self-start p-0" />
                                    <Divider className="h-5 text-[#000] font-bold w-full" />
                                </CardActions>
                                <CardContent className="flex justify-center items-center flex-col">
                                    <h2 className="font-[Barlow] text-xl">
                                        Gestão em Turismo
                                    </h2>
                                    <h3 className="text-md font-thin font=[Barlow]">
                                        1° Semestre
                                    </h3>
                                </CardContent>
                                <CardActions className="flex justify-center items-center flex-col">
                                    <Divider className="h-1 text-[#000] font-bold w-full" />
                                    <button className="self-end text-sm p-3 m-4 bg-[#FF6B35] text-[#fff] rounded-xl hover:bg-[#d3592d]" size="small">Ver Alunos</button>
                                </CardActions>
                            </Card>
                            <Card sx={{ maxWidth: 350, borderRadius: 5 }} className="w-[300px] m-1 xl:m-4 lg:m-4 md:m-4 sm:m-4">
                                <CardActions className="w-full flex flex-col h-20">
                                    <AssignmentIcon className="ml-2 mt-2 text-[#d3592d] self-start p-0" />
                                    <Divider className="h-5 text-[#000] font-bold w-full" />
                                </CardActions>
                                <CardContent className="flex justify-center items-center flex-col">
                                    <h2 className="font-[Barlow] text-xl">
                                        Gestão em Turismo
                                    </h2>
                                    <h3 className="text-md font-thin font=[Barlow]">
                                        2° Semestre
                                    </h3>
                                </CardContent>
                                <CardActions className="flex justify-center items-center flex-col">
                                    <Divider className="h-1 text-[#000] font-bold w-full" />
                                    <button className="self-end text-sm p-3 m-4 bg-[#FF6B35] text-[#fff] rounded-xl hover:bg-[#d3592d]" size="small">Ver Alunos</button>
                                </CardActions>
                            </Card>

                            <Card sx={{ maxWidth: 350, borderRadius: 5 }} className="w-[300px] m-1 xl:m-4 lg:m-4 md:m-4 sm:m-4">
                                <CardActions className="w-full flex flex-col h-20">
                                    <AssignmentIcon className="ml-2 mt-2 text-[#d3592d] self-start p-0" />
                                    <Divider className="h-5 text-[#000] font-bold w-full" />
                                </CardActions>
                                <CardContent className="flex justify-center items-center flex-col">
                                    <h2 className="font-[Barlow] text-xl">
                                        Gestão em Turismo
                                    </h2>
                                    <h3 className="text-md font-thin font=[Barlow]">
                                        3° Semestre
                                    </h3>
                                </CardContent>
                                <CardActions className="flex justify-center items-center flex-col">
                                    <Divider className="h-1 text-[#000] font-bold w-full" />
                                    <button className="self-end text-sm p-3 m-4 bg-[#FF6B35] text-[#fff] rounded-xl hover:bg-[#d3592d]" size="small">Ver Alunos</button>
                                </CardActions>
                            </Card>

                            <Card sx={{ maxWidth: 350, borderRadius: 5 }} className="w-[300px] m-1 xl:m-4 lg:m-4 md:m-4 sm:m-4">
                                <CardActions className="w-full flex flex-col h-20">
                                    <AssignmentIcon className="ml-2 mt-2 text-[#d3592d] self-start p-0" />
                                    <Divider className="h-5 text-[#000] font-bold w-full" />
                                </CardActions>
                                <CardContent className="flex justify-center items-center flex-col">
                                    <h2 className="font-[Barlow] text-xl">
                                        Gestão em Turismo
                                    </h2>
                                    <h3 className="text-md font-thin font=[Barlow]">
                                        4° Semestre
                                    </h3>
                                </CardContent>
                                <CardActions className="flex justify-center items-center flex-col">
                                    <Divider className="h-1 text-[#000] font-bold w-full" />
                                    <button className="self-end text-sm p-3 m-4 bg-[#FF6B35] text-[#fff] rounded-xl hover:bg-[#d3592d]" size="small">Ver Alunos</button>
                                </CardActions>
                            </Card>
                            <Card sx={{ maxWidth: 350, borderRadius: 5 }} className="w-[300px] m-1 xl:m-4 lg:m-4 md:m-4 sm:m-4">
                                <CardActions className="w-full flex flex-col h-20">
                                    <AssignmentIcon className="ml-2 mt-2 text-[#d3592d] self-start p-0" />
                                    <Divider className="h-5 text-[#000] font-bold w-full" />
                                </CardActions>
                                <CardContent className="flex justify-center items-center flex-col">
                                    <h2 className="font-[Barlow] text-xl">
                                        Gestão em Turismo
                                    </h2>
                                    <h3 className="text-md font-thin font=[Barlow]">
                                        5° Semestre
                                    </h3>
                                </CardContent>
                                <CardActions className="flex justify-center items-center flex-col">
                                    <Divider className="h-1 text-[#000] font-bold w-full" />
                                    <button className="self-end text-sm p-3 m-4 bg-[#FF6B35] text-[#fff] rounded-xl hover:bg-[#d3592d]" size="small">Ver Alunos</button>
                                </CardActions>
                            </Card>
                            <Card sx={{ maxWidth: 350, borderRadius: 5 }} className="w-[300px] m-1 xl:m-4 lg:m-4 md:m-4 sm:m-4">
                                <CardActions className="w-full flex flex-col h-20">
                                    <AssignmentIcon className="ml-2 mt-2 text-[#d3592d] self-start p-0" />
                                    <Divider className="h-5 text-[#000] font-bold w-full" />
                                </CardActions>
                                <CardContent className="flex justify-center items-center flex-col">
                                    <h2 className="font-[Barlow] text-xl">
                                        Gestão em Turismo
                                    </h2>
                                    <h3 className="text-md font-thin font=[Barlow]">
                                        6° Semestre
                                    </h3>
                                </CardContent>
                                <CardActions className="flex justify-center items-center flex-col">
                                    <Divider className="h-1 text-[#000] font-bold w-full" />
                                    <button className="self-end text-sm p-3 m-4 bg-[#FF6B35] text-[#fff] rounded-xl hover:bg-[#d3592d]" size="small">Ver Alunos</button>
                                </CardActions>
                            </Card>
                        </PagePanel>
                        <PagePanel value={page} index={3}>
                            <Card sx={{ maxWidth: 350, borderRadius: 5 }} className="w-[300px] m-1 xl:m-4 lg:m-4 md:m-4 sm:m-4">
                                <CardActions className="w-full flex flex-col h-20">
                                    <AssignmentIcon className="ml-2 mt-2 text-[#d3592d] self-start p-0" />
                                    <Divider className="h-5 text-[#000] font-bold w-full" />
                                </CardActions>
                                <CardContent className="flex justify-center items-center flex-col">
                                    <h2 className="font-[Barlow] text-xl">
                                        Gestão Comercial
                                    </h2>
                                    <h3 className="text-md font-thin font=[Barlow]">
                                        1° Semestre
                                    </h3>
                                </CardContent>
                                <CardActions className="flex justify-center items-center flex-col">
                                    <Divider className="h-1 text-[#000] font-bold w-full" />
                                    <button className="self-end text-sm p-3 m-4 bg-[#FF6B35] text-[#fff] rounded-xl hover:bg-[#d3592d]" size="small">Ver Alunos</button>
                                </CardActions>
                            </Card>
                            <Card sx={{ maxWidth: 350, borderRadius: 5 }} className="w-[300px] m-1 xl:m-4 lg:m-4 md:m-4 sm:m-4">
                                <CardActions className="w-full flex flex-col h-20">
                                    <AssignmentIcon className="ml-2 mt-2 text-[#d3592d] self-start p-0" />
                                    <Divider className="h-5 text-[#000] font-bold w-full" />
                                </CardActions>
                                <CardContent className="flex justify-center items-center flex-col">
                                    <h2 className="font-[Barlow] text-xl">
                                        Gestão Comercial
                                    </h2>
                                    <h3 className="text-md font-thin font=[Barlow]">
                                        2° Semestre
                                    </h3>
                                </CardContent>
                                <CardActions className="flex justify-center items-center flex-col">
                                    <Divider className="h-1 text-[#000] font-bold w-full" />
                                    <button className="self-end text-sm p-3 m-4 bg-[#FF6B35] text-[#fff] rounded-xl hover:bg-[#d3592d]" size="small">Ver Alunos</button>
                                </CardActions>
                            </Card>

                            <Card sx={{ maxWidth: 350, borderRadius: 5 }} className="w-[300px] m-1 xl:m-4 lg:m-4 md:m-4 sm:m-4">
                                <CardActions className="w-full flex flex-col h-20">
                                    <AssignmentIcon className="ml-2 mt-2 text-[#d3592d] self-start p-0" />
                                    <Divider className="h-5 text-[#000] font-bold w-full" />
                                </CardActions>
                                <CardContent className="flex justify-center items-center flex-col">
                                    <h2 className="font-[Barlow] text-xl">
                                        Gestão Comercial
                                    </h2>
                                    <h3 className="text-md font-thin font=[Barlow]">
                                        3° Semestre
                                    </h3>
                                </CardContent>
                                <CardActions className="flex justify-center items-center flex-col">
                                    <Divider className="h-1 text-[#000] font-bold w-full" />
                                    <button className="self-end text-sm p-3 m-4 bg-[#FF6B35] text-[#fff] rounded-xl hover:bg-[#d3592d]" size="small">Ver Alunos</button>
                                </CardActions>
                            </Card>

                            <Card sx={{ maxWidth: 350, borderRadius: 5 }} className="w-[300px] m-1 xl:m-4 lg:m-4 md:m-4 sm:m-4">
                                <CardActions className="w-full flex flex-col h-20">
                                    <AssignmentIcon className="ml-2 mt-2 text-[#d3592d] self-start p-0" />
                                    <Divider className="h-5 text-[#000] font-bold w-full" />
                                </CardActions>
                                <CardContent className="flex justify-center items-center flex-col">
                                    <h2 className="font-[Barlow] text-xl">
                                        Gestão Comercial
                                    </h2>
                                    <h3 className="text-md font-thin font=[Barlow]">
                                        4° Semestre
                                    </h3>
                                </CardContent>
                                <CardActions className="flex justify-center items-center flex-col">
                                    <Divider className="h-1 text-[#000] font-bold w-full" />
                                    <button className="self-end text-sm p-3 m-4 bg-[#FF6B35] text-[#fff] rounded-xl hover:bg-[#d3592d]" size="small">Ver Alunos</button>
                                </CardActions>
                            </Card>
                            <Card sx={{ maxWidth: 350, borderRadius: 5 }} className="w-[300px] m-1 xl:m-4 lg:m-4 md:m-4 sm:m-4">
                                <CardActions className="w-full flex flex-col h-20">
                                    <AssignmentIcon className="ml-2 mt-2 text-[#d3592d] self-start p-0" />
                                    <Divider className="h-5 text-[#000] font-bold w-full" />
                                </CardActions>
                                <CardContent className="flex justify-center items-center flex-col">
                                    <h2 className="font-[Barlow] text-xl">
                                        Gestão Comercial
                                    </h2>
                                    <h3 className="text-md font-thin font=[Barlow]">
                                        5° Semestre
                                    </h3>
                                </CardContent>
                                <CardActions className="flex justify-center items-center flex-col">
                                    <Divider className="h-1 text-[#000] font-bold w-full" />
                                    <button className="self-end text-sm p-3 m-4 bg-[#FF6B35] text-[#fff] rounded-xl hover:bg-[#d3592d]" size="small">Ver Alunos</button>
                                </CardActions>
                            </Card>
                            <Card sx={{ maxWidth: 350, borderRadius: 5 }} className="w-[300px] m-1 xl:m-4 lg:m-4 md:m-4 sm:m-4">
                                <CardActions className="w-full flex flex-col h-20">
                                    <AssignmentIcon className="ml-2 mt-2 text-[#d3592d] self-start p-0" />
                                    <Divider className="h-5 text-[#000] font-bold w-full" />
                                </CardActions>
                                <CardContent className="flex justify-center items-center flex-col">
                                    <h2 className="font-[Barlow] text-xl">
                                        Gestão Comercial
                                    </h2>
                                    <h3 className="text-md font-thin font=[Barlow]">
                                        6° Semestre
                                    </h3>
                                </CardContent>
                                <CardActions className="flex justify-center items-center flex-col">
                                    <Divider className="h-1 text-[#000] font-bold w-full" />
                                    <button className="self-end text-sm p-3 m-4 bg-[#FF6B35] text-[#fff] rounded-xl hover:bg-[#d3592d]" size="small">Ver Alunos</button>
                                </CardActions>
                            </Card>
                        </PagePanel>
                    </Box>
                    <Stack spacing={2} className="w-full flex justify-center items-center">
                        <Pagination className="" onChange={handleChange} count={3} color="primary" />
                    </Stack>
                </section>
                <div className="w-full flex justify-center items-end flex-col">
                    <img src="/assets/imagens/ContatoFaculdade.png" className="w-[100%] h-[100%]" />
                    <div className="absolute flex flex-col justify-center items-center w-7/12 ">
                        <h1 className="text-lg xl:text-6xl lg:text-4xl md:text-4xl sm:text-4xl font-[Barlow] text-zinc-50 font-bold mb-0 xl:mb-2">Precisa de Ajuda?</h1>
                        <h3 className="text-sm xl:text-2xl lg:text-xl md:text-xl sm:text-xl font-[Barlow] text-zinc-50 text-center">Faça contato com o nosso suporte!</h3>
                </div>
            </div>
        </Box >
            <Footer />
        </>
    )
}

export default PainelCoordenacao