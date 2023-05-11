import Footer from "../components/Footer"
import Menu from "../components/Menu"
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button, Divider } from "@mui/material";
import styles from '../styles/Duvidas.module.css'
import Link from "next/link";

const Duvidas = () => {
    return (
        <>
            <Menu />
            <div className="w-full">
                <Box className="bg-[#FF6B35] p-12 border-none relative flex flex-col justify-center">
                    <h1 className="font-[Barlow] text-3xl text-center mb-12 font-bold text-zinc-100">Dúvidas Frequentes</h1>
                    <Accordion className="bg-[#f85114]">
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon className="text-3xl font-bold" sx={{ color: "#004E89" }} />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className="font-bold font-[Barlow] text-lg xl:text-xl text-zinc-200">Como se cadastrar no P.E?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className="font-thin font-[Source Serif Pro] text-sm xl:text-md text-zinc-200">
                                Para se cadastrar no P.E primeiro você deve definir se é um aluno, empresa, faculdade ou orientador. Depois clique no botão de cadastro para ser encaminhado para a página correta.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className="bg-[#f85114]">
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon className="text-3xl font-bold" sx={{ color: "#004E89" }} />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography className="font-bold font-[Barlow] text-lg xl:text-xl text-zinc-200">Como enviar a documentação do estágio?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className="font-thin font-[Source Serif Pro] text-sm xl:text-md text-zinc-200">
                                Clique em login, para logar em sua conta. Depois, já em seu perfil suas documentações serão listadas. Lá você deve clicar na documentação que deseja enviar. Por último, assine a documentação que autoamaticamente ela será enviada para o orientador e a emrpresa.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className="bg-[#f85114]">
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon className="text-3xl font-bold" sx={{ color: "#004E89" }} />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography className="font-bold font-[Barlow] text-lg xl:text-xl text-zinc-200">Como acessar painel do aluno?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className="font-thin font-[Source Serif Pro] text-sm xl:text-md text-zinc-200">
                                Clique em login, para logar em sua conta. Depois, você será encaminhado para o perfil do aluno.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className="bg-[#f85114]">
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon className="text-3xl font-bold" sx={{ color: "#004E89" }} />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography className="font-bold font-[Barlow] text-lg xl:text-xl text-zinc-200">Como contatatar o suporte?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className="font-thin font-[Source Serif Pro] text-sm xl:text-md text-zinc-100">
                                Clique no botão Contato no fim da página ou no menu para se encaminhado para o formulário de contato, ao enviar um mensagem logo estaremos te respondendo via e-mail
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Box >
            </div>
            <div className="w-full flex justify-center items-end flex-col mr-12 mb-12">
                    <img src="/assets/imagens/Duvidas.png" className="w-[100%] h-[10%]" alt="Classname" />
                    <div className="absolute flex flex-col justify-center items-center w-7/12 ">
                        <h1 className="text-lg xl:text-6xl lg:text-4xl md:text-4xl sm:text-4xl font-[Barlow] text-zinc-50 font-bold mb-0 xl:mb-2">Precisa de Ajuda?</h1>
                        <h3 className="text-sm xl:text-2xl lg:text-xl md:text-xl sm:text-xl font-[Barlow] text-zinc-50 text-center">Vem para a nossa central de dúvidas!</h3>
                    </div>
                </div>
                <div className="flex justify-center items-center flex-col w-full h-[30%] mb-12">
                    <h1 className="text-3xl font-[Barlow] mb-8 text-center">Não encontrou o que estava procurando?</h1>
                    <Link href="/Contato" className={`${styles.DuvidasBotao} text-center font-bold text-md xl:text-xl w-4/12 xl:w-2/12 lg:w-2/12 sm:w-3/12`}>Contato</Link>
                </div>
            <Footer />
        </>
    )
}


export default Duvidas