import Footer from "../components/Footer"
import Menu from "../components/Menu"
import * as React from 'react';
import { Box, Button, Divider, Badge, IconButton, Avatar } from "@mui/material";
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import EditIcon from '@mui/icons-material/Edit';
import LogoutIcon from '@mui/icons-material/Logout';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Cookies from "js-cookie";

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

function Logout(e) {
    e.preventDefault()
    Cookies.remove('email')
    Cookies.remove('password')

    window.location = '/Login/?exibirMensagem=true'
}

function editarCadastro(e) {
    e.preventDefault()
    window.location = '/CadastroOrientador?editarItens=true'
}

const PainelOrientador = () => {
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
                        <h1 className="text-[#004E89] text-2xl xl:text-4xl lg:text-4xl md:text-4xl sm:text-xl font-bold mb-1">Olá Vitor</h1>
                    </div>
                </div>

                <section className="flex justify-center items-center w-full mb-12 flex-col">
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
            </Box >
            <Footer />
        </>
    )
}

export default PainelOrientador
