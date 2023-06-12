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

const DeclaracaoAtividade = () => {
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
                            Declaração de Atividades
                        </h2>
                        <div className="mt-4 font-[Source Serif Pro] font-thin">
                            A Empresa
                            <input
                                className="w-[50%] mr-2 ml-2 focus:shadow-none focus:outline-none border-b-2 border-[#000]"
                                placeholder="Nome da Empresa"
                            />

                            com sede na
                            <input
                                className="w-[40%] xl:w-[20%] lg:w-[20%] md:w-[30%] sm:w-[40%] mr-1 ml-1 focus:shadow-none focus:outline-none border-b-2 border-[#000]"
                                placeholder="Logradouro"
                            />,
                            nº
                            <input
                                className="w-[20%] mr-1 ml-1 focus:shadow-none focus:outline-none border-b-2 border-[#000]"
                                placeholder="Número"
                            />
                            , no Bairro
                            <input
                                className="w-[40%] mr-1 ml-1 focus:shadow-none focus:outline-none border-b-2 border-[#000]"
                                placeholder="Bairro"
                            />
                            , no Município de
                            <input
                                className="w-[40%] mr-1 ml-1 focus:shadow-none focus:outline-none border-b-2 border-[#000]"
                                placeholder="Cidade"
                            />,
                            no Estado
                            <input
                                className="w-[40%] mr-1 ml-1 focus:shadow-none focus:outline-none border-b-2 border-[#000]"
                                placeholder="Estado"
                            />,
                            neste ato representada por
                            <input
                                className="w-[40%] mr-1 ml-1 focus:shadow-none focus:outline-none border-b-2 border-[#000]"
                                placeholder="Representante"
                            />
                            ao final assinado, declara para fins de comprovação de Estágio Curricular Obrigatório, que o estudante
                            <input
                                className="w-[50%] mr-1 ml-1 focus:shadow-none focus:outline-none border-b-2 border-[#000]"
                                placeholder="Nome do Aluno"
                            /> RG nº
                            <input
                                className="w-[40%] mr-1 ml-1 focus:shadow-none focus:outline-none border-b-2 border-[#000]"
                                placeholder="RG"
                            />, CPF nº
                            <input
                                className="w-[40%] mr-1 ml-1 focus:shadow-none focus:outline-none border-b-2 border-[#000]"
                                placeholder="CPF"
                            />, residente à
                            <input
                                className="w-[40%] mr-1 ml-1 focus:shadow-none focus:outline-none border-b-2 border-[#000]"
                                placeholder="Logradouro"
                            />, nº
                            <input
                                className="w-[20%] mr-1 ml-1 focus:shadow-none focus:outline-none border-b-2 border-[#000]"
                                placeholder="Numero"
                            />, no Bairro
                            <input
                                className="w-[40%] mr-1 ml-1 focus:shadow-none focus:outline-none border-b-2 border-[#000]"
                                placeholder="Bairro"
                            />, no Município de
                            <input
                                className="w-[40%] mr-1 ml-1 focus:shadow-none focus:outline-none border-b-2 border-[#000]"
                                placeholder="Cidade"
                            />, no Estado de
                            <input
                                className="w-[40%] mr-1 ml-1 focus:shadow-none focus:outline-none border-b-2 border-[#000]"
                                placeholder="Estado"
                            />, regularmente matriculado no Curso Superior de Tecnologia em
                            <input
                                className="w-[40%] mr-1 ml-1 focus:shadow-none focus:outline-none border-b-2 border-[#000]"
                                placeholder="Curso"
                            />
                            na Faculdade de Tecnologia de São Roque, desempenha nesta empresa a função de
                            <input
                                className="w-[40%] mr-1 ml-1 focus:shadow-none focus:outline-none border-b-2 border-[#000]"
                                placeholder="Função"
                            /> com carga horária semanal de 44 horas.

                            <p className="mt-2">
                                Informamos ainda que o funcionário realiza práticas voltadas ao aprendizado e desenvolvimento das competências e habilidades atinentes ao Curso Superior de Tecnologia em Sistemas para a Internet, conforme atividades descritas abaixo:
                                Descrever as atividades desenvolvidas pelo funcionário. (Até 600 caracteres)
                            </p>
                            <TextField className="mt-4" type="text" fullWidth variant="standard" placeholder="Atividades" multiline rows={4} maxlength="600"/>
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

export default DeclaracaoAtividade

