import Footer from "../components/Footer"
import * as React from 'react';
import Menu from "../components//Menu"
import styles from "../styles/CadastroAluno.module.css"
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


const CadastroAluno = (props) => {
    const [dob, setData] = useState()
    const [showPassword, setShowPassword] = React.useState(false);
    const [showConfirmPassword, setConfirmShowPassword] = React.useState(false);
    const [name, setName] = useState('')
    const [cpf, setCPF] = useState('')
    const [rg, setRG] = useState('')
    const [logradouro, setLogradouro] = useState('')
    const [num, setNumero] = useState('')
    const [Bairro, setBairro] = useState('')
    const [Cidade, setCidade] = useState('')
    const [Estado, setEstado] = useState('')
    const [email, setEmail] = useState('')
    const [RA, setRA] = useState('')
    const [Instituicao, setInstituicao] = useState('')
    const [Curso, setCurso] = useState('')
    const [Periodo, setPeriodoFaculdade] = useState('')
    const [Semestre, setSemestreFaculdade] = useState('')
    const [password, setPassword] = useState('')



    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickShowConfirmPassword = () => setConfirmShowPassword((show) => !show);

    const handleMouseDownPassword = (event = React.MouseEvent) => {
        event.preventDefault();
    };

    const [open, setOpen] = React.useState(true);
    const router = useRouter()
    const { exibirMensagem } = router.query
    const view = exibirMensagem ? 'flex' : 'none'

    function cadastrarAluno() {
        let id = ''
        const url = "http://localhost:3001/signupAluno/"
        const usuario = {
            name, email, password, cpf, dob,
            rg, logradouro, num, Bairro, Cidade,
            Estado, RA, Instituicao, Curso, Periodo, Semestre
        }

        console.log(JSON.stringify(usuario))

        fetch(url, {
            method: "POST",
            body: JSON.stringify(usuario),
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

        console.log(id)
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
                noValidate
                autoComplete="Off">
                <h1 className={`${styles.cadastroTitulo} text-3xl font-bold mt-16`}>Cadastro do Aluno</h1>
                <TextField
                    className="w-6/12 xl:w-4/12 mt-8"
                    required
                    label="Nome Completo"
                    placeholder="Digite seu nome completo"
                    variant="standard"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                >
                </TextField>
                <InputMask mask="99/99/9999" value={dob} onChange={(e) => setData(e.target.value)}>
                    {(inputProps) => <TextField {...inputProps} variant="standard" className="w-6/12 xl:w-4/12 mt-8" label="Data de Nascimento" required />}
                </InputMask>
                <InputMask mask="999.999.999-99" value={cpf} onChange={(e) => setCPF(e.target.value)}>
                    {(inputProps) => <TextField {...inputProps} variant="standard" className="w-6/12 xl:w-4/12 mt-8 " label="CPF" required />}
                </InputMask>
                <InputMask mask="99.999.999-*" value={rg} onChange={(e) => setRG(e.target.value)}>
                    {(inputProps) => <TextField {...inputProps} variant="standard" className="w-6/12 xl:w-4/12 mt-8 " label="RG" required />}
                </InputMask>
                <TextField
                    className="w-6/12 xl:w-4/12 mt-8"
                    required
                    label="Logradouro"
                    placeholder="Rua Adonis Creed"
                    variant="standard"
                    value={logradouro}
                    onChange={e => setLogradouro(e.target.value)}
                >
                </TextField>
                <div className="w-6/12 flex justify-between items-center flex-col xl:w-4/12 lg:w-6/12 xl:flex-row lg:flex-col md:flex-col sw:flex-col">
                    <TextField className="w-full mt-8 xl:w-4/12 sm:mt-8"
                        required
                        label="Número"
                        placeholder="213"
                        variant="standard"
                        type="number"
                        value={num}
                        onChange={e => setNumero(e.target.value)}
                    >
                    </TextField>
                    <TextField className="w-full mt-8 xl:w-7/12 sm:mt-8"
                        required
                        label="Bairro"
                        placeholder="Jardim Flora"
                        variant="standard"
                        value={Bairro}
                        onChange={e => setBairro(e.target.value)}
                    >
                    </TextField>
                </div>
                <div className="w-6/12 flex justify-between items-center flex-col xl:w-4/12 lg:w-6/12 xl:flex-row lg:flex-col md:flex-col sw:flex-col">
                    <TextField className="w-full mt-8 xl:w-4/12 sm:mt-8"
                        required
                        label="Cidade"
                        placeholder="Rio de Janeiro"
                        variant="standard"
                        value={Cidade}
                        onChange={e => setCidade(e.target.value)}
                    >
                    </TextField>
                    <TextField className="w-full mt-8 xl:w-7/12 sm:mt-8"
                        required
                        label="Estado"
                        placeholder="Bahia"
                        variant="standard"
                        value={Estado}
                        onChange={e => setEstado(e.target.value)}
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
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                >
                </TextField>
                <TextField
                    className="w-6/12 xl:w-4/12 mt-8"
                    required
                    label="RA"
                    placeholder="981273912"
                    variant="standard"
                    type="number"
                    value={RA}
                    onChange={e => setRA(e.target.value)}
                >
                </TextField>
                <TextField
                    select
                    label="Instuição de Ensino"
                    className="w-6/12 xl:w-4/12 mt-8"
                    required
                    variant="standard"
                    value={Instituicao}
                    onChange={(e) => setInstituicao(e.target.value)}

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
                    value={Curso}
                    onChange={e => setCurso(e.target.value)}

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
                    value={Periodo}
                    onChange={e => setPeriodoFaculdade(e.target.value)}

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
                    value={Semestre}
                    onChange={e => setSemestreFaculdade(e.target.value)}

                >
                    {semestre.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <FormControl sx={{ m: 1 }} variant="standard" className="w-6/12 xl:w-4/12 flex justify-center items-center mt-8">
                    <InputLabel htmlFor="standard-adornment-password">Senha</InputLabel>
                    <Input className="w-full mt-8"
                        id="standard-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Digite sua senha"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
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
                <Button className={`${styles.cadastroBotao} text-sm xl:text-xl`} onClick={cadastrarAluno}>Cadastrar</Button>
            </Box>
            <Footer />
        </>

    )
}

export default CadastroAluno