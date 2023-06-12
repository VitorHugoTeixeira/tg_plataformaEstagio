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

const Avaliacao = () => {
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
                            Avaliação do Estágio
                        </h2>
                        <div className="mt-4 font-[Source Serif Pro] font-thin">
                            <h3 className="text-lg font-bold">Empresa Concedente</h3>
                            <p>Assume responsabilidade na entrega do tabalho no prazo estabelecido?</p>
                            <RadioGroup defaultValue="Sim" className="flex flex-row">
                                <FormControlLabel control={<Radio />} value="Sim" label="Sim" />
                                <FormControlLabel control={<Radio />} value="Parcialmente" label="Parcialmente" />
                                <FormControlLabel control={<Radio />} value="Não" label="Não" />
                            </RadioGroup>
                            <p>Demonstra confiança, determinação e perseverança?</p>
                            <RadioGroup defaultValue="Sim" className="flex flex-row">
                                <FormControlLabel control={<Radio />} value="Sim" label="Sim" />
                                <FormControlLabel control={<Radio />} value="Parcialmente" label="Parcialmente" />
                                <FormControlLabel control={<Radio />} value="Não" label="Não" />
                            </RadioGroup>

                            <p>Se expressa verbalmente de forma clara e organizada?</p>
                            <RadioGroup defaultValue="Sim" className="flex flex-row">
                                <FormControlLabel control={<Radio />} value="Sim" label="Sim" />
                                <FormControlLabel control={<Radio />} value="Parcialmente" label="Parcialmente" />
                                <FormControlLabel control={<Radio />} value="Não" label="Não" />
                            </RadioGroup>

                            <h3 className="text-lg font-bold mt-4">Estagiario:</h3>
                            <p>As atividades do estágio complementaram seu aprendizado?</p>
                            <RadioGroup defaultValue="Sim" className="flex flex-row">
                                <FormControlLabel control={<Radio />} value="Sim" label="Sim" />
                                <FormControlLabel control={<Radio />} value="Parcialmente" label="Parcialmente" />
                                <FormControlLabel control={<Radio />} value="Não" label="Não" />
                            </RadioGroup>
                            <p>O estágio ampliou sua visão sobre a prática dos conceitos teóricos?</p>
                            <RadioGroup defaultValue="Sim" className="flex flex-row">
                                <FormControlLabel control={<Radio />} value="Sim" label="Sim" />
                                <FormControlLabel control={<Radio />} value="Parcialmente" label="Parcialmente" />
                                <FormControlLabel control={<Radio />} value="Não" label="Não" />
                            </RadioGroup>

                            <p>O estágio atendeu às suas espectativas?</p>
                            <RadioGroup defaultValue="Sim" className="flex flex-row">
                                <FormControlLabel control={<Radio />} value="Sim" label="Sim" />
                                <FormControlLabel control={<Radio />} value="Parcialmente" label="Parcialmente" />
                                <FormControlLabel control={<Radio />} value="Não" label="Não" />
                            </RadioGroup>

                            <p>A supervisão do estágio tem colaborado para seu aprendizado ?</p>
                            <RadioGroup defaultValue="Sim" className="flex flex-row">
                                <FormControlLabel control={<Radio />} value="Sim" label="Sim" />
                                <FormControlLabel control={<Radio />} value="Parcialmente" label="Parcialmente" />
                                <FormControlLabel control={<Radio />} value="Não" label="Não" />
                            </RadioGroup>

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

export default Avaliacao

