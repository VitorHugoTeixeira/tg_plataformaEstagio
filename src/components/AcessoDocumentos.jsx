import Footer from "./Footer"
import Menu from "./Menu"
import * as React from 'react';
import { Box, Divider } from "@mui/material";
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

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


const AcessoDocumentos = () => {

    const [page, setPage] = React.useState(1);

    const handleChange = (event, newPage) => {
        setPage(newPage);
        console.log(page)
    };

    return (
        <>
            <Menu />
            <section className="flex justify-center items-center w-full mb-12 p-4 flex-col">
                <Box className="w-full mt-12">
                    <div className="flex w-[80%] pl-4 xl:pl-12 lg:pl-12 md:pl-12 sm:pl-8 mb-4 text-[#FF6B35]">
                        <a><ArrowBackIosIcon className="font-bold text-4xl cursor-pointer" /></a>
                    </div>
                    <h1 className="font-[Barlow] text-xl xl:text-2xl lg:text-2xl md:text-2xl sm:text-xl font-bold p-4 xl:p-12 lg:p-12 md:p-12 sm:p-8">Documentos</h1>
                    <PagePanel value={page} index={1}>
                        <Card sx={{ maxWidth: 350, borderRadius: 5 }} className="w-[300px] m-1 xl:m-4 lg:m-4 md:m-4 sm:m-4">
                            <CardActions className="w-full flex flex-col h-20">
                                <AssignmentIcon className="ml-2 mt-2 text-[#d3592d] self-start p-0" />
                                <Divider className="h-5 text-[#000] font-bold w-full" />
                            </CardActions>
                            <CardContent className="flex justify-center items-center flex-col">
                                <h2 className="font-[Barlow] text-xl">
                                    Declaração de Atividades
                                </h2>
                                <h3 className="text-md font-thin font=[Barlow]">
                                    Atualizado no dia 21/12/1999
                                </h3>
                            </CardContent>
                            <CardActions className="flex justify-center items-center flex-col">
                                <Divider className="h-1 text-[#000] font-bold w-full" />
                                <button className="self-end text-sm p-3 m-4 bg-[#FF6B35] text-[#fff] rounded-xl hover:bg-[#d3592d]" size="small">Ver documento</button>
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
                                <h3 className="text-md font-thin font=[Barlow]">
                                    Atualizado no dia 21/12/1999
                                </h3>
                            </CardContent>
                            <CardActions className="flex justify-center items-center flex-col">
                                <Divider className="h-1 text-[#000] font-bold w-full" />
                                <button className="self-end text-sm p-3 m-4 bg-[#FF6B35] text-[#fff] rounded-xl hover:bg-[#d3592d]" size="small">Ver documento</button>
                            </CardActions>
                        </Card>

                        <Card sx={{ maxWidth: 350, borderRadius: 5 }} className=" w-[300px] m-1 xl:m-4 lg:m-4 md:m-4 sm:m-4">
                            <CardActions className="w-full flex flex-col h-20">
                                <AssignmentIcon className="ml-2 mt-2 text-[#d3592d] self-start p-0" />
                                <Divider className="h-5 text-[#000] font-bold w-full" />
                            </CardActions>
                            <CardContent className="flex justify-center items-center flex-col">
                                <h2 className="font-[Barlow] text-xl">
                                    Requerimento de Equivalência
                                </h2>
                                <h3 className="text-md font-thin font=[Barlow]">
                                    Atualizado no dia 21/12/1999
                                </h3>
                            </CardContent>
                            <CardActions className="flex justify-center items-center flex-col">
                                <Divider className="h-1 text-[#000] font-bold w-full" />
                                <button className="self-end text-sm p-3 m-4 bg-[#FF6B35] text-[#fff] rounded-xl hover:bg-[#d3592d]" size="small">Ver documento</button>
                            </CardActions>
                        </Card>

                        <Card sx={{ maxWidth: 350, borderRadius: 5 }} className=" w-[300px] m-1 xl:m-4 lg:m-4 md:m-4 sm:m-4">
                            <CardActions className="w-full flex flex-col h-20">
                                <AssignmentIcon className="ml-2 mt-2 text-[#d3592d] self-start p-0" />
                                <Divider className="h-5 text-[#000] font-bold w-full" />
                            </CardActions>
                            <CardContent className="flex justify-center items-center flex-col">
                                <h2 className="font-[Barlow] text-xl">
                                    Validação de Horas
                                </h2>
                                <h3 className="text-md font-thin font=[Barlow]">
                                    Atualizado no dia 21/12/1999
                                </h3>
                            </CardContent>
                            <CardActions className="flex justify-center items-center flex-col">
                                <Divider className="h-1 text-[#000] font-bold w-full" />
                                <button className="self-end text-sm p-3 m-4 bg-[#FF6B35] text-[#fff] rounded-xl hover:bg-[#d3592d]" size="small">Ver documento</button>
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
                                    Declaração de Atividades
                                </h2>
                                <h3 className="text-md font-thin font=[Barlow]">
                                    Atualizado no dia 21/12/1999
                                </h3>
                            </CardContent>
                            <CardActions className="flex justify-center items-center flex-col">
                                <Divider className="h-1 text-[#000] font-bold w-full" />
                                <button className="self-end text-sm p-3 m-4 bg-[#FF6B35] text-[#fff] rounded-xl hover:bg-[#d3592d]" size="small">Ver documento</button>
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
                                <h3 className="text-md font-thin font=[Barlow]">
                                    Atualizado no dia 21/12/1999
                                </h3>
                            </CardContent>
                            <CardActions className="flex justify-center items-center flex-col">
                                <Divider className="h-1 text-[#000] font-bold w-full" />
                                <button className="self-end text-sm p-3 m-4 bg-[#FF6B35] text-[#fff] rounded-xl hover:bg-[#d3592d]" size="small">Ver documento</button>
                            </CardActions>
                        </Card>

                        <Card sx={{ maxWidth: 350, borderRadius: 5 }} className=" w-[300px] m-1 xl:m-4 lg:m-4 md:m-4 sm:m-4">
                            <CardActions className="w-full flex flex-col h-20">
                                <AssignmentIcon className="ml-2 mt-2 text-[#d3592d] self-start p-0" />
                                <Divider className="h-5 text-[#000] font-bold w-full" />
                            </CardActions>
                            <CardContent className="flex justify-center items-center flex-col">
                                <h2 className="font-[Barlow] text-xl">
                                    Requerimento de Equivalência
                                </h2>
                                <h3 className="text-md font-thin font=[Barlow]">
                                    Atualizado no dia 21/12/1999
                                </h3>
                            </CardContent>
                            <CardActions className="flex justify-center items-center flex-col">
                                <Divider className="h-1 text-[#000] font-bold w-full" />
                                <button className="self-end text-sm p-3 m-4 bg-[#FF6B35] text-[#fff] rounded-xl hover:bg-[#d3592d]" size="small">Ver documento</button>
                            </CardActions>
                        </Card>

                        <Card sx={{ maxWidth: 350, borderRadius: 5 }} className=" w-[300px] m-1 xl:m-4 lg:m-4 md:m-4 sm:m-4">
                            <CardActions className="w-full flex flex-col h-20">
                                <AssignmentIcon className="ml-2 mt-2 text-[#d3592d] self-start p-0" />
                                <Divider className="h-5 text-[#000] font-bold w-full" />
                            </CardActions>
                            <CardContent className="flex justify-center items-center flex-col">
                                <h2 className="font-[Barlow] text-xl">
                                    Validação de Horas
                                </h2>
                                <h3 className="text-md font-thin font=[Barlow]">
                                    Atualizado no dia 21/12/1999
                                </h3>
                            </CardContent>
                            <CardActions className="flex justify-center items-center flex-col">
                                <Divider className="h-1 text-[#000] font-bold w-full" />
                                <button className="self-end text-sm p-3 m-4 bg-[#FF6B35] text-[#fff] rounded-xl hover:bg-[#d3592d]" size="small">Ver documento</button>
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
                                    Declaração de Atividades
                                </h2>
                                <h3 className="text-md font-thin font=[Barlow]">
                                    Atualizado no dia 21/12/1999
                                </h3>
                            </CardContent>
                            <CardActions className="flex justify-center items-center flex-col">
                                <Divider className="h-1 text-[#000] font-bold w-full" />
                                <button className="self-end text-sm p-3 m-4 bg-[#FF6B35] text-[#fff] rounded-xl hover:bg-[#d3592d]" size="small">Ver documento</button>
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
                                <h3 className="text-md font-thin font=[Barlow]">
                                    Atualizado no dia 21/12/1999
                                </h3>
                            </CardContent>
                            <CardActions className="flex justify-center items-center flex-col">
                                <Divider className="h-1 text-[#000] font-bold w-full" />
                                <button className="self-end text-sm p-3 m-4 bg-[#FF6B35] text-[#fff] rounded-xl hover:bg-[#d3592d]" size="small">Ver documento</button>
                            </CardActions>
                        </Card>

                        <Card sx={{ maxWidth: 350, borderRadius: 5 }} className=" w-[300px] m-1 xl:m-4 lg:m-4 md:m-4 sm:m-4">
                            <CardActions className="w-full flex flex-col h-20">
                                <AssignmentIcon className="ml-2 mt-2 text-[#d3592d] self-start p-0" />
                                <Divider className="h-5 text-[#000] font-bold w-full" />
                            </CardActions>
                            <CardContent className="flex justify-center items-center flex-col">
                                <h2 className="font-[Barlow] text-xl">
                                    Requerimento de Equivalência
                                </h2>
                                <h3 className="text-md font-thin font=[Barlow]">
                                    Atualizado no dia 21/12/1999
                                </h3>
                            </CardContent>
                            <CardActions className="flex justify-center items-center flex-col">
                                <Divider className="h-1 text-[#000] font-bold w-full" />
                                <button className="self-end text-sm p-3 m-4 bg-[#FF6B35] text-[#fff] rounded-xl hover:bg-[#d3592d]" size="small">Ver documento</button>
                            </CardActions>
                        </Card>

                        <Card sx={{ maxWidth: 350, borderRadius: 5 }} className=" w-[300px] m-1 xl:m-4 lg:m-4 md:m-4 sm:m-4">
                            <CardActions className="w-full flex flex-col h-20">
                                <AssignmentIcon className="ml-2 mt-2 text-[#d3592d] self-start p-0" />
                                <Divider className="h-5 text-[#000] font-bold w-full" />
                            </CardActions>
                            <CardContent className="flex justify-center items-center flex-col">
                                <h2 className="font-[Barlow] text-xl">
                                    Validação de Horas
                                </h2>
                                <h3 className="text-md font-thin font=[Barlow]">
                                    Atualizado no dia 21/12/1999
                                </h3>
                            </CardContent>
                            <CardActions className="flex justify-center items-center flex-col">
                                <Divider className="h-1 text-[#000] font-bold w-full" />
                                <button className="self-end text-sm p-3 m-4 bg-[#FF6B35] text-[#fff] rounded-xl hover:bg-[#d3592d]" size="small">Ver documento</button>
                            </CardActions>
                        </Card>
                    </PagePanel>
                </Box>
                <Stack spacing={2} className="w-full flex justify-center items-center">
                    <Pagination className="" onChange={handleChange} count={3} color="primary" />
                </Stack>
            </section>
            <Footer />
        </>
    )
}

export default AcessoDocumentos