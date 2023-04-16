import Footer from "./Footer"
import * as React from 'react';
import Menu from "./Menu"
import styles from "../styles/CadastroEmpresa.module.css"
import { Box, TextField, MenuItem, InputLabel, Button, InputAdornment, IconButton, Input, FormControl } from '@mui/material';
import '@emotion/react';
import InputMask from "react-input-mask"
import { useState } from "react";
import { faculdades, cursos, periodo, semestre } from "./data/DataSelect";
import { VisibilityOff, Visibility } from '@mui/icons-material';

const CadastroEmpresa = (props) => {
    const [data, setData] = useState()
    const [showPassword, setShowPassword] = React.useState(true);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event = React.MouseEvent) => {
        event.preventDefault();
    };
    return (
        <>
            <Menu />
            <Box className="flex justify-start items-center flex-col w-full"
                component="form"
                sx={{
                    height: "100vh",
                    marginBottom: 100
                }}
                noValidate
                autoComplete="Off">
                <h1 className={`${styles.cadastroTitulo} text-3xl font-bold mt-16`}>Cadastro da Empresa</h1>
                <InputMask mask="99.999.999/9999-99" value={props.value} onChange={props.onChange}>
                    {(inputProps) => <TextField {...inputProps} variant="standard" className="w-6/12 xl:w-4/12 mt-8 " label="CNPJ" required />}
                </InputMask>
                <TextField
                    className="w-6/12 xl:w-4/12 mt-8"
                    required
                    label="Razão Social"
                    placeholder="Digite a sua Razão Social"
                    variant="standard"
                >
                </TextField>
                <TextField
                    className="w-6/12 xl:w-4/12 mt-8"
                    required
                    label="Nome Fantasia"
                    placeholder="Digite o seu Nome Fantasia"
                    variant="standard"
                >
                </TextField>
                <InputMask mask="99/99/9999" value={props.value} onChange={props.onChange}>
                    {(inputProps) => <TextField {...inputProps} variant="standard" className="w-6/12 xl:w-4/12 mt-8 " label="Data de Abertura" required />}
                </InputMask>
                <TextField
                    className="w-6/12 xl:w-4/12 mt-8"
                    required
                    label="Ramo de Atividade"
                    placeholder="Digite seu Ramo de Atividade"
                    variant="standard"
                >
                </TextField>
                <TextField
                    className="w-6/12 xl:w-4/12 mt-8"
                    required
                    label="Porte da Empresa"
                    placeholder="Digite o Porte da Empresa"
                    variant="standard"
                >
                </TextField>
                <TextField
                    className="w-6/12 xl:w-4/12 mt-8"
                    required
                    label="Logradouro"
                    placeholder="Digite o seu Endereço"
                    variant="standard"
                >
                </TextField>
                <TextField
                    className="w-6/12 xl:w-4/12 mt-8"
                    required
                    label="Número"
                    placeholder="Digite o Número da Residência"
                    variant="standard"
                >
                </TextField>
                <TextField
                    className="w-6/12 xl:w-4/12 mt-8"
                    required
                    label="Bairro"
                    placeholder="Digite o seu Bairro"
                    variant="standard"
                >
                </TextField>
                <TextField
                    className="w-6/12 xl:w-4/12 mt-8"
                    required
                    label="Cidade"
                    placeholder="Digite a sua Cidade"
                    variant="standard"
                >
                </TextField>
                <InputMask mask="99999-999" value={props.value} onChange={props.onChange}>
                    {(inputProps) => <TextField {...inputProps} variant="standard" className="w-6/12 xl:w-4/12 mt-8 " label="CEP" required />}
                </InputMask>
                <TextField
                    className="w-6/12 xl:w-4/12 mt-8"
                    required
                    label="Estado"
                    placeholder="Digite o seu Estado"
                    variant="standard"
                >
                </TextField>
                <TextField
                    className="w-6/12 xl:w-4/12 mt-8"
                    required
                    label="E-mail"
                    placeholder="Digite o seu e-mail"
                    variant="standard"
                    type="email"
                >
                </TextField>
                <InputMask mask="(99) 99999-9999" value={props.value} onChange={props.onChange}>
                    {(inputProps) => <TextField {...inputProps} variant="standard" className="w-6/12 xl:w-4/12 mt-8 " label="Celular" required />}
                </InputMask>
                <TextField
                    className="w-6/12 xl:w-4/12 mt-8"
                    required
                    label="Usuário"
                    placeholder="Digite seu usuário"
                    variant="standard"
                ></TextField>
                <FormControl sx={{ m: 1 }} variant="standard" className="w-6/12 xl:w-4/12 flex justify-center items-center mt-8">
                    <InputLabel htmlFor="standard-adornment-password">Senha</InputLabel>
                    <Input className="w-full mt-8"
                        id="standard-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Digite sua senha"
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                    size="string"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <FormControl sx={{ m: 1 }} variant="standard" className="w-6/12 xl:w-4/12 flex justify-center items-center mt-8">
                    <InputLabel htmlFor="standard-adornment-Confirmpassword">Confirmar Senha</InputLabel>
                    <Input className="w-full mt-8"
                        id="standard-adornment-Confirmpassword"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Confirme a sua senha"
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                    size="string"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <Button className={`${styles.cadastroBotao} text-sm xl:text-xl`}>Cadastrar</Button>
            </Box>
            <Footer />
        </>

    )
}

export default CadastroEmpresa