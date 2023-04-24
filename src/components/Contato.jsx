import Menu from "./Menu"
import Footer from "./Footer"
import styles from "../styles/Contato.module.css"
import * as React from 'react';
import { Box, TextField, FormControlLabel, Checkbox, Button } from '@mui/material';
import Textarea from '@mui/joy/Textarea';

import '@emotion/react';

const Contato = () => {
    return (
        <div className="h-screen w-screen overflow-y-auto">
            <Menu />
            <div className="flex items-center justify-center mb-28 mt-28 xl:mb-0 xl:mt-0 lg:mb-0 lg:mt-0 md:mb-0 md:mt-0 h-screen">
                <Box component="form" className="flex justify-center items-center flex-col h-full w-screen sm:w-full md:w-8/12 lg:w-6/12 p-8 md:p-0 ">
                    <h1 className={`${styles.contatoTitulo} text-3xl font-bold mb-16`}>Entre em Contato com o nosso Suporte </h1>
                    <TextField className="mb-4" fullWidth type="text" variant="standard" label="Nome Completo" />
                    <TextField className="mb-4" type="email" fullWidth variant="standard" label="E-mail" />
                    <TextField className="mb-4" type="text" fullWidth variant="standard" label="Assunto" />
                    <TextField className="mb-4 mr-0 ml-0" type="text" fullWidth variant="standard" label="Mensagem" multiline rows={4} />
                    <div className="flex justify-center items-center">
                        <FormControlLabel className="mt-8 self-start" control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 32 } }}/>} />
                        <h3 className={`${styles.contatoTextoCheckBox} self-end`}>Estou de acordo com o tratamento de meus dados pessoais fornecidos no formulário acima nos termos da Política de Privacidade da Plataforma de Estagio.</h3>
                    </div>
                    <Button className={`${styles.contatoBotaoEnviar} text-sm xl:text-xl`}>Enviar</Button>
                </Box>
            </div>
            <Footer />
        </div>
    )
}


export default Contato