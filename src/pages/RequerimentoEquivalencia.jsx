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
                            />

                            RG:
                            <input
                                className="w-[40%] mr-2 ml-2 focus:shadow-none focus:outline-none border-b-2 border-[#000]"
                                placeholder="RG"
                            />
                            <div>
                                RA:
                                <input
                                    className="w-[20%] mr-2 ml-2 focus:shadow-none focus:outline-none border-b-2 border-[#000]"
                                    placeholder="RA"
                                />
                                Curso:
                                <input
                                    className="w-[40%] mr-2 ml-2 focus:shadow-none focus:outline-none border-b-2 border-[#000]"
                                    placeholder="Curso"
                                />
                                Semestre:
                                <input
                                    className="w-[20%] mr-2 ml-2 focus:shadow-none focus:outline-none border-b-2 border-[#000]"
                                    placeholder="Semestre"
                                />
                            </div>

                            <div>
                                Turno:
                                <input
                                    className="w-[40%] mr-2 ml-2 focus:shadow-none focus:outline-none border-b-2 border-[#000]"
                                    placeholder="Período"
                                />
                                Ano:
                                <input
                                    className="w-[40%] mr-2 ml-2 focus:shadow-none focus:outline-none border-b-2 border-[#000]"
                                    placeholder="Ano de Ingresso"
                                />
                            </div>
                            <div>
                                E-mail:
                                <input
                                    className="w-[40%] mr-2 ml-2 focus:shadow-none focus:outline-none border-b-2 border-[#000]"
                                    placeholder="e-mail"
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
                                />

                                Cidade:
                                <input
                                    className="w-[40%] mr-2 ml-2 focus:shadow-none focus:outline-none border-b-2 border-[#000]"
                                    placeholder="Cidade"
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
                            />
                            RA:
                            <input
                                className="w-[15%] mr-2 ml-2 focus:shadow-none focus:outline-none border-b-2 border-[#000]"
                                placeholder="RA"
                            />
                            CPF:
                            <input
                                className="w-[25%] mr-2 ml-2 focus:shadow-none focus:outline-none border-b-2 border-[#000]"
                                placeholder="CPF"
                            />
                            matriculado (a) no curso de:
                            <input
                                className="w-[25%] mr-2 ml-2 focus:shadow-none focus:outline-none border-b-2 border-[#000]"
                                placeholder="Curso"
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

