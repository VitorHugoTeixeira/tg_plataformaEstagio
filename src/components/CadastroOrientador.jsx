import styles from '../styles/CadastroOrientador.module.css'
import Footer from "./Footer"
import * as React from 'react';
import Menu from "./Menu"
import { Box, TextField, MenuItem, InputLabel, Button, InputAdornment, IconButton, Input, FormControl, FormControlLabel, Checkbox, FormGroup } from '@mui/material';
import '@emotion/react';
import InputMask from "react-input-mask"
import { useState } from "react";
import { faculdades, cursos, periodo, semestre } from "./data/DataSelect";
import { VisibilityOff, Visibility } from '@mui/icons-material';

const CadastroOrientador = (props) => {
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
                    marginBottom: 90
                }}
                noValidate
                autoComplete="Off">
                <h1 className={`${styles.cadastroTitulo} text-3xl font-bold mt-16`}>Cadastro do Aluno</h1>
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
                <TextField
                    className="w-6/12 xl:w-4/12 mt-8"
                    required
                    label="Cidade"
                    placeholder="Rio de Janeiro"
                    variant="standard"
                >
                </TextField>
                <TextField
                    className="w-6/12 xl:w-4/12 mt-8"
                    required
                    label="Estado"
                    placeholder="Rio de Janeiro"
                    variant="standard"
                >
                </TextField>
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
                    label="Registro Acadêmico (RA)"
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
                <div className="xl:w-4/12 flex justify-start items-start xl:flex-row flex-col pl-2 xl:pl-0">
                    <FormGroup className="w-full xl:w-6/12 flex justify-start items-start mt-8 gap-1" >
                        <h3 className={`${styles.cadastroCheckBoxTitulo} text-xl mb-4`}>Cursos</h3>
                        <FormControlLabel control={<Checkbox />} label="Sistemas Para a Internet" />
                        <FormControlLabel control={<Checkbox />} label="Gestão Comercial" />
                        <FormControlLabel control={<Checkbox />} label="Gestão de Turismo" />
                    </FormGroup>
                    <FormGroup className="w-full xl:w-6/12 flex justify-start items-start mt-8 gap-1" >
                        <h3 className={`${styles.cadastroCheckBoxTitulo} text-xl mb-4`}>Período</h3>
                        <div>
                            <FormControlLabel control={<Checkbox />} label="Manhã" />
                            <FormControlLabel control={<Checkbox />} label="Tarde" />
                        </div>
                        <div>
                            <FormControlLabel control={<Checkbox />} label="Noite" />
                            <FormControlLabel control={<Checkbox />} label="Integral" />
                        </div>
                    </FormGroup>
                </div>
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

export default CadastroOrientador