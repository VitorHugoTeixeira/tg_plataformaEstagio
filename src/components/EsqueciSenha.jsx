import Footer from "./Footer"
import Menu from "./Menu"
import styles from "../styles/EsqueciSenha.module.css"
import * as React from 'react';
import { Box, TextField, FormControlLabel, Checkbox, Button } from '@mui/material';
import Textarea from '@mui/joy/Textarea';

const EsqueciSenha = () => {
    return(
        <>
            <Menu />
            <div className="flex items-center justify-center mb-28 xl:mb-0 xl:mt-0 lg:mb-0 lg:mt-0 md:mb-0 md:mt-0 h-screen">
                <Box component="form" className="flex justify-center items-center flex-col h-full w-screen sm:w-full md:w-8/12 lg:w-8/12 p-8 md:p-0 ">
                    <h1 className={`${styles.esqueciSenhaTitulo} text-2xl xl:text-3xl lg:text-3xl md:text-3xl font-bold mb-4`}>Esqueci a minha senha </h1>
                    <h3 className={`${styles.esqueciSenhaTitulo} text-sm xl:text-lg lg:text-lg md:text-lg mb-16 w-full xl:w-6/12 lg:w-6/12 md:w-6/12 text-center`}>Para redefinir sua senha , informe seu e-mail cadas-trado e lhe enviaremos um link  </h3>
                    <TextField className="mb-4 w-full xl:w-8/12 lg:w-8/12 md:w-8/12" type="email" variant="standard" label="E-mail" />
                    <Button className={`${styles.esqueciSenhaBotaoEnviar} text-sm xl:text-xl w-full xl:w-6/12 lg:w-6/12 md:w-6/12`} type="submit">Enviar</Button>
                    <Button className={`${styles.esqueciSenhaBotaoCancelar} text-sm xl:text-xl w-full xl:w-6/12 lg:w-6/12 md:w-6/12`}>Cancelar</Button>
                </Box>
            </div>
            <Footer />        
        </>
    )
}

export default EsqueciSenha