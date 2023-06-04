import Footer from "../components/Footer"
import * as React from 'react';
import Menu from "../components//Menu"
import styles from "../styles/CadastroAluno.module.css"
import { Box, TextField, MenuItem, InputLabel, Button, InputAdornment, IconButton, Input, FormControl } from '@mui/material';
import '@emotion/react';
import InputMask from "react-input-mask"
import { useState } from "react";
import { faculdades, cursos, periodo, semestre, cidadesBrasil, estadosBrasil } from "../components/data/DataSelect";
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
    const [Instituicao, setInstituicao] = useState('Fatec - São Roque')
    const [Curso, setCurso] = useState('')
    const [Periodo, setPeriodoFaculdade] = useState('')
    const [Semestre, setSemestreFaculdade] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = React.useState('')

    const [nomeError, setNomeError] = React.useState(false)
    const [labelNome, setLabelNome] = React.useState('Nome')
    const [cursoError, setCursoError] = React.useState(false)
    const [labelCurso, setLabelCurso] = React.useState('Curso')
    const [periodoError, setPeriodoError] = React.useState(false)
    const [labelPeriodo, setLabelPeriodo] = React.useState('Período')
    const [semestreError, setSemestreError] = React.useState(false)
    const [labelSemestre, setLabelSemestre] = React.useState('Semestre')
    const [labelRG, setLabelRG] = React.useState('RG')
    const [RGError, setRGError] = React.useState(false)
    const [logradouroError, setLogradouroError] = React.useState(false)
    const [labelLogradouro, setLabelLogradouro] = React.useState('Logradouro')
    const [numeroError, setNumeroError] = React.useState(false)
    const [labelNumero, setLabelNumero] = React.useState('Número')
    const [bairroError, setBairroError] = React.useState(false)
    const [labelBairro, setLabelBairro] = React.useState('Bairro')
    const [cpfError, setCPFError] = React.useState(false)
    const [labelCpf, setLabelCpf] = React.useState('CPF')
    const [telefoneError, setTelefoneError] = React.useState(false)
    const [labelTelefone, setLabelTelefone] = React.useState('Celular')
    const [dataError, setDataError] = React.useState(false)
    const [labelData, setLabelData] = React.useState('Data de Nascimento')
    const [cidadeError, setCidadeError] = React.useState(false)
    const [labelCidade, setLabelCidade] = React.useState('Cidade')
    const [estadoError, setEstadoError] = React.useState(false)
    const [labelEstado, setLabelEstado] = React.useState('Estado')
    const [raError, setRAError] = React.useState(false)
    const [labelRa, setLabelRA] = React.useState('RA')
    const [emailError, setEmailError] = React.useState(false)
    const [labelEmail, setLabelEmail] = React.useState('E-mail')
    const [passwordError, setPasswordError] = React.useState(false)
    const [labelPassword, setLabelPassword] = React.useState('Senha')
    const [passwordConfirmError, setPasswordConfirmError] = React.useState(false)
    const [labelConfirmPassword, setLabelConfirmPassword] = React.useState('Confirmar Senha')



    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickShowConfirmPassword = () => setConfirmShowPassword((show) => !show);

    const handleMouseDownPassword = (event = React.MouseEvent) => {
        event.preventDefault();
    };

    const [open, setOpen] = React.useState(true);
    const router = useRouter()
    const { exibirMensagem } = router.query
    const view = exibirMensagem ? 'flex' : 'none'

    function validarCampos() {
        let contador = 0

        const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        if (!validEmail.test(email)) {
            setEmailError(true)
            setLabelEmail("Por favor digite o E-mail de forma correta!")
            contador++
        }
        else {
            setEmailError(false)
            setLabelEmail("E-mail")
        }

        if (name == '') {
            setNomeError(true)
            setLabelNome("Preencha o campo Nome")
            contador++
        }
        else {
            setNomeError(false)
            setLabelNome("Nome")
        }

        if (password.length < 8 || password === '') {
            setPasswordError(true)
            setLabelPassword("Por favor digite a senha com no minimo 8 caracteres")
            contador++
        }
        else {
            setPasswordError(false)
            setLabelPassword("Senha")
        }

        if (dob == null || dob == undefined || dob == '' || Date.parse(dob) >= new Date().getTime()) {
            setDataError(true)
            setLabelData("Escolha uma data válida")
            contador++
        }
        else {
            setDataError(false)
            setLabelData("Data de Abertura")
        }

        if (!cidadesBrasil.filter(item => item.Nome == Cidade).length > 0) {
            setCidadeError(true)
            setLabelCidade("Digite uma cidade válida")
            contador++
        }
        else {
            setCidadeError(false)
            setLabelCidade("Cidade")
        }

        if (!estadosBrasil.filter(item => item.Nome == Estado).length > 0) {
            setEstadoError(true)
            setLabelEstado("Digite um Estado válido")
            contador++
        }
        else {
            setEstadoError(false)
            setLabelEstado("Estado")
        }

        if (RA === '' || RA.length < 13) {
            setRAError(true)
            setLabelRA("Digite um RA válido")
            contador++
        }
        else {
            setRAError(false)
            setLabelRA("RA")
        }

        if (confirmPassword.length == password.length && confirmPassword === password) {
            setLabelConfirmPassword('Confirmar senha')
            setPasswordConfirmError(false)
        }
        else {
            setLabelConfirmPassword("Senhas não conferem")
            setPasswordConfirmError(true)
            contador++
        }

        if (cpf == '') {
            setLabelCpf('Preencha o campo CPF')
            setCPFError(true)
            contador++
        }
        else {
            setLabelCpf('CPF')
            setCPFError(false)
        }

        if (rg == '') {
            setLabelRG('Preencha o campo RG')
            setRGError(true)
            contador++
        }
        else {
            setLabelRG('RG')
            setRGError(false)
        }
        if (logradouro == '') {
            setLabelLogradouro('Preencha o campo Logradouro')
            setLogradouroError(true)
            contador++
        }
        else {
            setLabelLogradouro('Logradouro')
            setLogradouroError(false)
        }
        if (num == '') {
            setLabelNumero('Preencha o campo Número')
            setNumeroError(true)
            contador++
        }
        else {
            setLabelNumero('Número')
            setNumeroError(false)
        }
        if (Semestre == '') {
            setLabelSemestre('Preencha o campo Semestre')
            setSemestreError(true)
            contador++
        }
        else {
            setLabelSemestre('Semestre')
            setSemestreError(false)
        }
        if (Curso == '') {
            setLabelCurso('Preencha o campo Curso')
            setCursoError(true)
            contador++
        }
        else {
            setLabelCurso('Curso')
            setCursoError(false)
        }
        if (Periodo == '') {
            setLabelPeriodo('Preencha o campo Período')
            setPeriodoError(true)
            contador++
        }
        else {
            setLabelPeriodo('Período')
            setPeriodoError(false)
        }
        if (Bairro == '') {
            setLabelBairro('Preencha o campo Bairro')
            setBairroError(true)
            contador++
        }
        else {
            setLabelBairro('Bairro')
            setBairroError(false)
        }

        if (contador > 0) return false
        else return true
    }

    function cadastrarAluno() {
        const url = "http://localhost:3001/signupAluno/"
        const usuario = {
            name, email, password, cpf, dob,
            rg, logradouro, num, Bairro, Cidade,
            Estado, RA, Instituicao, Curso, Periodo, Semestre
        }

        const validar = validarCampos()
        console.log(validar)

        if (validar) {
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
        }



    }



    return (
        <>
            <Menu />
            <Box className="w-[100%] xl:w-[30%] lg:w-[30%] md:w-[50%] sm:w-[100%]" sx={{ display: view }}>
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
                    label={labelNome}
                    error={nomeError}
                    placeholder="Digite seu nome completo"
                    variant="standard"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                >
                </TextField>
                <TextField
                    InputLabelProps={{ shrink: true }}
                    type="date"
                    variant="standard"
                    value={dob}
                    onChange={(e) => setData(e.target.value)}
                    className="w-6/12 xl:w-4/12 mt-8"
                    label={labelData}
                    error={dataError}
                    required
                />
                <InputMask mask="999.999.999-99" value={cpf} onChange={(e) => setCPF(e.target.value)}>
                    {(inputProps) =>
                        <TextField
                            {...inputProps}
                            variant="standard"
                            className="w-6/12 xl:w-4/12 mt-8 "
                            label={labelCpf}
                            error={cpfError}
                            required
                        />}
                </InputMask>
                <InputMask mask="99.999.999-*" value={rg} onChange={(e) => setRG(e.target.value)}>
                    {(inputProps) =>
                        <TextField
                            {...inputProps}
                            variant="standard"
                            className="w-6/12 xl:w-4/12 mt-8"
                            label={labelRG}
                            error={RGError}
                            required
                        />}
                </InputMask>
                <TextField
                    className="w-6/12 xl:w-4/12 mt-8"
                    required
                    label={labelLogradouro}
                    error={logradouroError}
                    placeholder="Rua Adonis Creed"
                    variant="standard"
                    value={logradouro}
                    onChange={e => setLogradouro(e.target.value)}
                >
                </TextField>
                <div className="w-6/12 flex justify-between items-center flex-col xl:w-4/12 lg:w-6/12 xl:flex-row lg:flex-col md:flex-col sw:flex-col">
                    <TextField className="w-full mt-8 xl:w-4/12 sm:mt-8"
                        required
                        label={labelNumero}
                        error={numeroError}
                        placeholder="213"
                        variant="standard"
                        type="number"
                        value={num}
                        onChange={e => setNumero(e.target.value)}
                    >
                    </TextField>
                    <TextField className="w-full mt-8 xl:w-7/12 sm:mt-8"
                        required
                        label={labelBairro}
                        error={bairroError}
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
                        label={labelCidade}
                        error={cidadeError}
                        placeholder="Rio de Janeiro"
                        variant="standard"
                        value={Cidade}
                        onChange={e => setCidade(e.target.value)}
                    >
                    </TextField>
                    <TextField className="w-full mt-8 xl:w-7/12 sm:mt-8"
                        required
                        label={labelEstado}
                        error={estadoError}
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
                    label={labelEmail}
                    error={emailError}
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
                    label={labelRa}
                    error={raError}
                    placeholder="981273912"
                    variant="standard"
                    type="number"
                    value={RA}
                    onChange={e => setRA(e.target.value)}
                >
                </TextField>
                <TextField
                    disabled
                    label="Instuição de Ensino"
                    className="w-6/12 xl:w-4/12 mt-8"
                    required
                    variant="standard"
                    value={Instituicao}
                    onChange={(e) => setInstituicao(e.target.value)}
                >
                </TextField>
                <TextField
                    select
                    label={labelCurso}
                    error={cursoError}
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
                    label={labelPeriodo}
                    error={periodoError}
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
                    label={labelSemestre}
                    error={semestreError}
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
                    <InputLabel htmlFor="standard-adornment-password" error={passwordError}>{labelPassword}</InputLabel>
                    <Input className="w-full mt-8"
                        id="standard-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Digite sua senha"
                        error={passwordError}
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
                    <InputLabel htmlFor="standard-adornment-Confirmpassword" error={passwordConfirmError}>{labelConfirmPassword}</InputLabel>
                    <Input className="w-full mt-8"
                        id="standard-adornment-Confirmpassword"
                        type={showConfirmPassword ? 'text' : 'password'}
                        placeholder="Confirme a sua senha"
                        error={passwordConfirmError}
                        value={confirmPassword}
                        onChange={e => {
                            setConfirmPassword(e.target.value)
                            if (e.target.value.length > password.length) {
                                setLabelConfirmPassword("Senhas não conferem")
                                setPasswordConfirmError(true)
                            }
                            else {
                                setLabelConfirmPassword('Confirmar senha')
                                setPasswordConfirmError(false)
                            }
                        }}
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