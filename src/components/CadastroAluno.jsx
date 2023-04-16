import Footer from "./Footer"
import * as React from 'react';
import Menu from "./Menu"
import styles from "../styles/CadastroAluno.module.css"
import { Box, TextField, MenuItem, InputLabel, Button, InputAdornment, IconButton, Input, FormControl } from '@mui/material';
import '@emotion/react';
import InputMask from "react-input-mask"
import { useState } from "react";
import { faculdades, cursos, periodo, semestre } from "./data/DataSelect";
import { VisibilityOff, Visibility } from '@mui/icons-material';

const CadastroAluno = (props) => {
    const [data, setData] = useState()
    const [showPassword, setShowPassword] = React.useState(true);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event = React.MouseEvent) => {
        event.preventDefault();
    };
    return (
        <>
            <Menu />
            <Box className="flex justify-start items-center flex-col mt-16 w-full"
                component="form"
                sx={{
                    height: "100vh",
                    marginBottom: 90
                }}
                noValidate
                autoComplete="Off">
                <h1 className={`${styles.cadastroTitulo} text-3xl font-bold`}>Cadastro do Aluno</h1>
                <TextField
                    className="w-6/12 xl:w-4/12 mt-8"
                    required
                    label="Nome Completo"
                    placeholder="Digite seu nome completo"
                    variant="standard"
                >
                </TextField>
                <InputMask mask="99/99/9999" value={props.value} onChange={props.onChange}>
                    {(inputProps) => <TextField {...inputProps} variant="standard" className="w-6/12 xl:w-4/12 mt-8 " label="Data de Nascimento" required />}
                </InputMask>
                <InputMask mask="999.999.999-99" value={props.value} onChange={props.onChange}>
                    {(inputProps) => <TextField {...inputProps} variant="standard" className="w-6/12 xl:w-4/12 mt-8 " label="CPF" required />}
                </InputMask>
                <InputMask mask="99.999.999-9" value={props.value} onChange={props.onChange}>
                    {(inputProps) => <TextField {...inputProps} variant="standard" className="w-6/12 xl:w-4/12 mt-8 " label="RG" required />}
                </InputMask>
                <TextField
                    className="w-6/12 xl:w-4/12 mt-8"
                    required
                    label="Logradouro"
                    placeholder="Rua Adonis Creed"
                    variant="standard"
                >
                </TextField>
                <div className="w-6/12 flex justify-between items-center flex-col xl:w-4/12 lg:w-6/12 xl:flex-row lg:flex-col md:flex-col sw:flex-col">
                    <TextField className="w-full mt-8 xl:w-4/12 sm:mt-8"
                        required
                        label="Número"
                        placeholder="213"
                        variant="standard"
                        type="number"
                    >
                    </TextField>
                    <TextField className="w-full mt-8 xl:w-7/12 sm:mt-8"
                        required
                        label="Bairro"
                        placeholder="Jardim Flora"
                        variant="standard"
                    >
                    </TextField>
                </div>
                <div className="w-6/12 flex justify-between items-center flex-col xl:w-4/12 lg:w-6/12 xl:flex-row lg:flex-col md:flex-col sw:flex-col">
                    <TextField className="w-full mt-8 xl:w-4/12 sm:mt-8"
                        required
                        label="Cidade"
                        placeholder="Rio de Janeiro"
                        variant="standard"
                    >
                    </TextField>
                    <TextField className="w-full mt-8 xl:w-7/12 sm:mt-8"
                        required
                        label="Estado"
                        placeholder="Bahia"
                        variant="standard"
                    >
                    </TextField>
                </div>
                <TextField
                    className="w-6/12 xl:w-4/12 mt-8"
                    required
                    label="E-mail"
                    placeholder="adonis@gmail.com   "
                    variant="standard"
                    type="email"
                >
                </TextField>
                <TextField
                    className="w-6/12 xl:w-4/12 mt-8"
                    required
                    label="Registro"
                    placeholder="9812739127"
                    variant="standard"
                    type="number"
                >
                </TextField>
                <TextField
                    select
                    label="Instuição de Ensino"
                    className="w-6/12 xl:w-4/12 mt-8"
                    required
                    variant="standard"

                >
                    {faculdades.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    select
                    label="Curso"
                    className="w-6/12 xl:w-4/12 mt-8"
                    required
                    variant="standard"

                >
                    {cursos.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    select
                    label="Período"
                    className="w-6/12 xl:w-4/12 mt-8"
                    required
                    variant="standard"

                >
                    {periodo.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    select
                    label="Semestre"
                    className="w-6/12 xl:w-4/12 mt-8"
                    required
                    variant="standard"

                >
                    {semestre.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
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
                <Button className={`${styles.cadastroBotao} text-xl`}>Cadastrar</Button>
            </Box>
            <Footer />
        </>

    )
}

export default CadastroAluno