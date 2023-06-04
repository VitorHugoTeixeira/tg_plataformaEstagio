import Footer from "../components/Footer"
import * as React from 'react';
import Menu from "../components//Menu"
import styles from "../styles/CadastroEmpresa.module.css"
import { Box, TextField, MenuItem, InputLabel, Button, InputAdornment, IconButton, Input, FormControl } from '@mui/material';
import '@emotion/react';
import InputMask from "react-input-mask"
import { useState } from "react";
import { faculdades, cursos, periodo, semestre } from "../components/data/DataSelect";
import { VisibilityOff, Visibility } from '@mui/icons-material';
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import { useRouter } from 'next/router';

const CadastroEmpresa = (props) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const [showConfirmPassword, setConfirmShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickShowConfirmPassword = () => setConfirmShowPassword((show) => !show);


    const handleMouseDownPassword = (event = React.MouseEvent) => {
        event.preventDefault();
    };

    const [nomeFantasia, setNomeFantasia] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [dob, setData] = useState()
    const [cnpj, setCnpj] = useState('')
    const [razaoSocial, setRazaoSocial] = useState('')
    const [logradouro, setLogradouro] = useState('')
    const [num, setNumero] = useState('')
    const [Bairro, setBairro] = useState('')
    const [Cidade, setCidade] = useState('')
    const [Estado, setEstado] = useState('')
    const [cep, setCEP] = useState('')
    const [ramo, setRamo] = useState('')
    const [porte, setPorte] = useState('')
    const [telefone, setTelefone] = useState('')

    const [open, setOpen] = React.useState(true);
    const router = useRouter()
    const { exibirMensagem } = router.query
    const view = exibirMensagem ? 'flex' : 'none'



    function cadastrarEmpresa() {
        const url = "http://localhost:3001/signupEmpresa/"
        const empresa = {
            dob, email, password, cnpj, razaoSocial,
            cep, logradouro, num, Bairro, Cidade,
            Estado, ramo, porte, telefone, nomeFantasia
        }

        console.log(JSON.stringify(empresa))

        fetch(url, {
            method: "POST",
            body: JSON.stringify(empresa),
            headers: {
                'Content-type': 'application/json'
            },

        })
            .then(response => response.json())
            .then(json => {
                if (json.token) {
                    window.location.href = `/CadastroAluno/?exibirMensagem=flex`
                }
            })
            .catch(err => console.log(err))
    }
    return (
        <>
            <Menu />
            <Box className="w-[100%] xl:w-[30%] lg:w-[30%] md:w-[50%] sm:w-[100%]" sx={{ mt: 2, display: view }}>
                <Collapse in={open}>
                    <Alert
                        action={
                            <IconButton
                                aria-label="close"
                                color="inherit"
                                size="small"
                                onClick={() => {
                                    setOpen(false);
                                }}
                            >
                                <CloseIcon fontSize="inherit" />
                            </IconButton>
                        }
                        sx={{ mb: 2, fontWeight: 'bold' }}
                    >
                        Cadastro Realizado com Sucesso!!!
                    </Alert>
                </Collapse>
            </Box>
            <Box className="flex justify-start items-center flex-col w-full"
                component="form"
                sx={{
                    marginBottom: 10
                }}
                noValidate
                autoComplete="Off">
                <h1 className={`${styles.cadastroTitulo} text-3xl font-bold mt-16`}>Cadastro da Empresa</h1>
                <InputMask mask="99.999.999/9999-99" value={cnpj} onChange={e => (setCnpj(e.target.value))}>
                    {(inputProps) => <TextField {...inputProps} variant="standard" className="w-6/12 xl:w-4/12 mt-8 " label="CNPJ" required />}
                </InputMask>
                <TextField
                    className="w-6/12 xl:w-4/12 mt-8"
                    required
                    label="Razão Social"
                    placeholder="Digite a sua Razão Social"
                    variant="standard"
                    value={razaoSocial}
                    onChange={e => (setRazaoSocial(e.target.value))}
                >
                </TextField>
                <TextField
                    className="w-6/12 xl:w-4/12 mt-8"
                    required
                    label="Nome Fantasia"
                    placeholder="Digite o seu Nome Fantasia"
                    variant="standard"
                    value={nomeFantasia}
                    onChange={e => (setNomeFantasia(e.target.value))}
                >
                </TextField>
                <InputMask mask="99/99/9999" value={dob} onChange={e => (setData(e.target.value))}>
                    {(inputProps) => <TextField {...inputProps} variant="standard" className="w-6/12 xl:w-4/12 mt-8 " label="Data de Abertura" required />}
                </InputMask>
                <TextField
                    className="w-6/12 xl:w-4/12 mt-8"
                    required
                    label="Ramo de Atividade"
                    placeholder="Digite seu Ramo de Atividade"
                    variant="standard"
                    value={ramo}
                    onChange={e => (setRamo(e.target.value))}
                >
                </TextField>
                <TextField
                    className="w-6/12 xl:w-4/12 mt-8"
                    required
                    label="Porte da Empresa"
                    placeholder="Digite o Porte da Empresa"
                    variant="standard"
                    value={porte}
                    onChange={e => (setPorte(e.target.value))}
                >
                </TextField>
                <TextField
                    className="w-6/12 xl:w-4/12 mt-8"
                    required
                    label="Logradouro"
                    placeholder="Digite o seu Endereço"
                    variant="standard"
                    value={logradouro}
                    onChange={e => (setLogradouro(e.target.value))}
                >
                </TextField>
                <TextField
                    className="w-6/12 xl:w-4/12 mt-8"
                    required
                    label="Número"
                    placeholder="Digite o Número da Residência"
                    variant="standard"
                    value={num}
                    onChange={e => (setNumero(e.target.value))}
                >
                </TextField>
                <TextField
                    className="w-6/12 xl:w-4/12 mt-8"
                    required
                    label="Bairro"
                    placeholder="Digite o seu Bairro"
                    variant="standard"
                    value={Bairro}
                    onChange={e => (setBairro(e.target.value))}
                >
                </TextField>
                <TextField
                    className="w-6/12 xl:w-4/12 mt-8"
                    required
                    label="Cidade"
                    placeholder="Digite a sua Cidade"
                    variant="standard"
                    value={Cidade}
                    onChange={e => (setCidade(e.target.value))}
                >
                </TextField>
                <InputMask mask="99999-999" value={cep} onChange={e => (setCEP(e.target.value))}>
                    {(inputProps) => <TextField {...inputProps} variant="standard" className="w-6/12 xl:w-4/12 mt-8 " label="CEP" required />}
                </InputMask>
                <TextField
                    className="w-6/12 xl:w-4/12 mt-8"
                    required
                    label="Estado"
                    placeholder="Digite o seu Estado"
                    variant="standard"
                    value={Estado}
                    onChange={e => (setEstado(e.target.value))}
                >
                </TextField>
                <TextField
                    className="w-6/12 xl:w-4/12 mt-8"
                    required
                    label="E-mail"
                    placeholder="Digite o seu e-mail"
                    variant="standard"
                    type="email"
                    value={email}
                    onChange={e => (setEmail(e.target.value))}
                >
                </TextField>
                <InputMask mask="(99) 99999-9999" value={telefone} onChange={e => (setTelefone(e.target.value))}>
                    {(inputProps) => <TextField {...inputProps} variant="standard" className="w-6/12 xl:w-4/12 mt-8 " label="Celular" required />}
                </InputMask>
                <FormControl sx={{ m: 1 }} variant="standard" className="w-6/12 xl:w-4/12 flex justify-center items-center mt-8">
                    <InputLabel htmlFor="standard-adornment-password">Senha</InputLabel>
                    <Input className="w-full mt-8"
                        id="standard-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Digite sua senha"
                        value={password}
                        onChange={e => (setPassword(e.target.value))}
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
                        type={showConfirmPassword ? 'text' : 'password'}
                        placeholder="Confirme a sua senha"
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowConfirmPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                    size="string"
                                >
                                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <Button className={`${styles.cadastroBotao} text-sm xl:text-xl`} onClick={cadastrarEmpresa}>Cadastrar</Button>
            </Box>
            <Footer />
        </>

    )
}

export default CadastroEmpresa