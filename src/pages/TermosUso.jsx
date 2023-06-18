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

const TermosUso = () => {
    return (
        <div className="h-screen">
            <Menu />
            <Box className="w-[100%] flex justify-center items-center p-4">
                <Card className="w-[100%] xl:w-[50%] lg:w-[50%] md:w-[80%] sm:w-[100%] m-1 xl:m-4 lg:m-4 md:m-4 sm:m-4 p-4">
                    <CardActions className="w-full flex flex-col h-20">
                        <AssignmentIcon className="ml-2 mt-2 text-[#d3592d] self-start" />
                        <Divider className="h-5 text-[#000] font-bold w-full" />
                    </CardActions>
                    <CardContent className="flex justify-center items-center flex-col">
                        <h2 className="font-[Barlow] text-xl">
                            Termos de Uso
                        </h2>
                        <div className="mt-4 font-[Source Serif Pro] font-thin">

                            <p>
                                Bem-vindo ao site de plataforma de estágio. Antes de começar a usar nossos serviços, leia atentamente estes Termos de Uso. Ao usar o site, você concorda em cumprir com estes termos, que podem ser atualizados periodicamente.
                            </p>

                            <p> Elegibilidade
                                Você deve ter pelo menos 18 anos de idade para usar nossos serviços. Se você tiver menos de 18 anos, deve ter permissão dos seus pais ou responsáveis legais para usar o site.</p>

                            <p>Conta de usuário
                                Para usar nossos serviços, você precisará criar uma conta de usuário. Você é responsável por manter a segurança da sua conta e senha, bem como por todas as atividades que ocorrerem na sua conta. Não compartilhe suas credenciais de login com ninguém.</p>

                            <p>Uso aceitável
                                Você concorda em usar o site apenas para fins legais e de acordo com estes Termos de Uso. Você concorda em não fazer o seguinte:</p>

                            <p>
                                publicar conteúdo que seja difamatório, ofensivo, ilegal ou que viole os direitos de terceiros;
                                enviar spam ou mensagens não solicitadas;
                                fazer engenharia reversa ou tentar hackear o site;
                                usar nossos serviços para fins comerciais sem nossa autorização prévia.
                                Conteúdo gerado pelo usuário
                                Você é responsável por todo o conteúdo que publica no site. Você concede à plataforma de estágio uma licença perpétua e irrevogável para usar, exibir, reproduzir, modificar e distribuir esse conteúdo. Você garante que tem o direito de conceder essa licença e que seu conteúdo não infringe os direitos de terceiros.
                            </p>

                            <p>
                                Cancelamento e suspensão de contas
                                Reservamo-nos o direito de cancelar ou suspender sua conta a qualquer momento, sem aviso prévio, se você violar estes Termos de Uso.
                            </p>

                            <p>
                                Privacidade
                                Valorizamos sua privacidade e estamos comprometidos em proteger suas informações pessoais. Leia nossa Política de Privacidade para obter mais informações sobre como coletamos, usamos e protegemos suas informações pessoais.
                            </p>

                            <p>Responsabilidade
                                A plataforma de estágio não é responsável por qualquer conteúdo gerado pelo usuário ou por qualquer dano que você possa sofrer como resultado do uso do site. Você usa o site por sua conta e risco.</p>

                            <p>Alterações nos Termos de Uso
                                Podemos atualizar estes Termos de Uso a qualquer momento, sem aviso prévio. O uso contínuo do site após as alterações significa que você concorda com os novos termos.</p>

                            <p>
                                Lei aplicável
                                Estes Termos de Uso são regidos pelas leis do Brasil. Qualquer disputa relacionada a estes termos será resolvida pelos tribunais do Brasil.

                                Ao usar nosso site, você concorda em cumprir estes Termos de Uso. Se você tiver alguma dúvida sobre estes termos, entre em contato conosco.
                            </p>

                        </div>
                    </CardContent>
                </Card>
            </Box>
            <Footer />
        </div>
    )
}

export default TermosUso

