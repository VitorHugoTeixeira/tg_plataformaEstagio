import styles from '../styles/CadastroFaculdade.module.css'
import Footer from "../components/Footer"
import * as React from 'react';
import Menu from "../components//Menu"
import { Box, TextField, MenuItem, InputLabel, Button, InputAdornment, IconButton, Input, FormControl, FormControlLabel, Checkbox, FormGroup } from '@mui/material';
import '@emotion/react';
import InputMask from "react-input-mask"
import { cidadesBrasil, estadosBrasil, faculdades } from "../components/data/DataSelect"
import { VisibilityOff, Visibility } from '@mui/icons-material';
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import { useRouter } from 'next/router';
import { data } from 'autoprefixer';

const CadastroFaculdade = (props) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const [showConfirmPassword, setConfirmShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickShowConfirmPassword = () => setConfirmShowPassword((show) => !show);

    const handleMouseDownPassword = (event = React.MouseEvent) => {
        event.preventDefault();
    };

    const router = useRouter()

    const [nome, setNome] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [dob, setData] = React.useState()
    const [cursos, setCursos] = React.useState([])
    const [periodos, setPeriodos] = React.useState([])
    const [Cidade, setCidade] = React.useState('')
    const [Estado, setEstado] = React.useState('')
    const [cnpj, setCNPJ] = React.useState('')
    const [confirmPassword, setConfirmPassword] = React.useState('')

    const [nomeError, setNomeError] = React.useState(false)
    const [labelNome, setLabelNome] = React.useState('Nome')
    const [dataError, setDataError] = React.useState(false)
    const [labelData, setLabelData] = React.useState('Data de Abertura')
    const [cidadeError, setCidadeError] = React.useState(false)
    const [labelCidade, setLabelCidade] = React.useState('Cidade')
    const [estadoError, setEstadoError] = React.useState(false)
    const [labelEstado, setLabelEstado] = React.useState('Estado')
    const [cnpjError, setCnpjError] = React.useState(false)
    const [labelCNPJ, setLabelCnpj] = React.useState('CNPJ')
    const [cursosError, setCursosError] = React.useState(false)
    const [labelCursos, setLabelCursosError] = React.useState('Cursos')
    const [periodosError, setPeriodosError] = React.useState(false)
    const [labelPeriodos, setLabelPeriodos] = React.useState('Período')
    const [emailError, setEmailError] = React.useState(false)
    const [labelEmail, setLabelEmail] = React.useState('E-mail')
    const [passwordError, setPasswordError] = React.useState(false)
    const [labelPassword, setLabelPassword] = React.useState('Senha')
    const [passwordConfirmError, setPasswordConfirmError] = React.useState(false)
    const [labelConfirmPassword, setLabelConfirmPassword] = React.useState('Confirmar Senha')


    const handleRemoveCurso = (indice) => {
        setCursos(cursos.filter((_, index) => index != indice));
    };

    const handleRemovePeriodo = (indice) => {
        setPeriodos(periodos.filter((_, index) => index != indice));
    };

    const [open, setOpen] = React.useState(true);
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


        if (nome.length == 0) {
            setNomeError(true)
            setLabelNome("Preencha o campo nome")
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

        if (cnpj === '') {
            setCnpjError(true)
            setLabelCnpj("Digite um CNPJ válido")
            contador++
        }
        else {
            setCnpjError(false)
            setLabelCnpj("CNPJ")
        }

        if (confirmPassword.length == password.length && confirmPassword === password) {
            setLabelConfirmPassword('Confirmar senha')
            setPasswordConfirmError(false)
        }
        else {
            setLabelConfirmPassword("As senhas não conferem")
            setPasswordConfirmError(true)
        }

        if (contador > 0) return true
        else false
    }

    function cadastrarFaculdade(e) {
        e.preventDefault()
        const url = "http://localhost:3001/signupFaculdade/"
        const faculdade = {
            nome, email, password, dob, cursos, periodos,
            Cidade, Estado, cnpj
        }

        if (validarCampos()) {
            fetch(url, {
                method: "POST",
                body: JSON.stringify(faculdade),
                headers: {
                    'Content-type': 'application/json'
                },

            })
                .then(response => response.json())
                .then(json => {
                    if (json.token) {
                        window.location.href = `/CadastroFaculdade/?exibirMensagem=flex`
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
            <form className="flex justify-start items-center flex-col w-full"
                component="form"
                sx={{
                    marginBottom: 2
                }}
                noValidate
                autoComplete="Off">
                <h1 className={`${styles.cadastroTitulo} text-3xl font-bold mt-16`}>Cadastro da Instituição</h1>
                <TextField
                    className="w-6/12 xl:w-4/12 mt-8"
                    required
                    label={labelNome}
                    error={nomeError}
                    placeholder="Digite o nome da Instituição"
                    variant="standard"
                    value={nome}
                    onChange={e => (setNome(e.target.value))}
                    type='text'
                >
                </TextField>

                <TextField
                    value={dob}
                    error={dataError}
                    onChange={e => setData(e.target.value)}
                    variant="standard"
                    className="w-6/12 xl:w-4/12 mt-8"
                    type='date'
                    InputLabelProps={{ shrink: true }}
                    label={labelData} placeholder='Digite a data'
                />

                <TextField
                    className="w-6/12 xl:w-4/12 mt-8"
                    required
                    error={cidadeError}
                    label={labelCidade}
                    placeholder="Rio de Janeiro"
                    variant="standard"
                    value={Cidade}
                    onChange={e => (setCidade(e.target.value))}
                >
                </TextField>
                <TextField
                    className="w-6/12 xl:w-4/12 mt-8"
                    required
                    error={estadoError}
                    label={labelEstado}
                    placeholder="Rio de Janeiro"
                    variant="standard"
                    value={Estado}
                    onChange={e => (setEstado(e.target.value))}
                >
                </TextField>
                <InputMask mask="99.999.999/9999-99" value={cnpj}
                    onChange={e => (setCNPJ(e.target.value))}>
                    {(inputProps) => <TextField {...inputProps} variant="standard" className="w-6/12 xl:w-4/12 mt-8 " error={cnpjError} label={labelCNPJ} required />}
                </InputMask>
                <div className="xl:w-4/12 flex justify-start items-start xl:flex-row flex-col pl-2 xl:pl-0">
                    <FormGroup className="w-full xl:w-6/12 flex justify-start items-start mt-8 gap-1" >
                        <h3 className={`${styles.cadastroCheckBoxTitulo} text-xl mb-4`}>{labelCursos}</h3>
                        <FormControlLabel value={"Sistemas Para a Internet"} onClick={(e) => {
                        }} control={<Checkbox
                            onClick={(e) => {
                                if (!cursos.includes("Sistemas para a Internet")) setCursos([...cursos, "Sistemas para a Internet"])
                                else handleRemoveCurso(cursos.indexOf("Sistemas para a Internet"))
                            }} />} label="Sistemas Para a Internet" />
                        <FormControlLabel control={<Checkbox onClick={(e) => {
                            if (!cursos.includes("Gestão Comercial")) setCursos([...cursos, "Gestão Comercial"])
                            else handleRemoveCurso(cursos.indexOf("Gestão Comercial"))
                        }} />} label="Gestão Comercial" />
                        <FormControlLabel control={<Checkbox onClick={(e) => {
                            if (!cursos.includes("Gestão de Turismo")) setCursos([...cursos, "Gestão de Turismo"])
                            else handleRemoveCurso(cursos.indexOf("Gestão de Turismo"))
                        }} />} label="Gestão de Turismo" />
                    </FormGroup>
                    <FormGroup className="w-full xl:w-6/12 flex justify-start items-start mt-8 gap-1" >
                        <h3 className={`${styles.cadastroCheckBoxTitulo} text-xl mb-4`}>{labelPeriodos}</h3>
                        <div>
                            <FormControlLabel control={<Checkbox onClick={(e) => {
                                if (!periodos.includes("Manhã")) setPeriodos([...periodos, "Manhã"])
                                else handleRemovePeriodo(periodos.indexOf("Manhã"))
                            }}
                            />} label="Manhã" />
                            <FormControlLabel control={<Checkbox onClick={(e) => {
                                if (!periodos.includes("Tarde")) setPeriodos([...periodos, "Tarde"])
                                else handleRemovePeriodo(periodos.indexOf("Tarde"))
                            }}
                            />} label="Tarde" />
                        </div>
                        <div>
                            <FormControlLabel control={<Checkbox onClick={(e) => {
                                if (!periodos.includes("Noite")) setPeriodos([...periodos, "Noite"])
                                else handleRemovePeriodo(periodos.indexOf("Noite"))
                            }}
                            />} label="Noite" />
                            <FormControlLabel control={<Checkbox onClick={(e) => {
                                if (!periodos.includes("Integral")) setPeriodos([...periodos, "Integral"])
                                else handleRemovePeriodo(periodos.indexOf("Integral"))
                            }}
                            />} label="Integral" />
                        </div>
                    </FormGroup>
                </div>
                <TextField
                    className="w-6/12 xl:w-4/12 mt-8"
                    required
                    error={emailError}
                    label={labelEmail}
                    placeholder="Digite seu e-mail"
                    variant="standard"
                    type='email'
                    value={email}
                    onChange={e => (setEmail(e.target.value))}
                ></TextField>
                <FormControl sx={{ m: 1 }} variant="standard" className="w-6/12 xl:w-4/12 flex justify-center items-center mt-8">
                    <InputLabel htmlFor="standard-adornment-password" error={passwordError}>{labelPassword}</InputLabel>
                    <Input className="w-full mt-8"
                        id="standard-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Digite sua senha"
                        value={password}
                        onChange={e => (setPassword(e.target.value))}
                        error={passwordError}
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
                        value={confirmPassword}
                        type={showConfirmPassword ? 'text' : 'password'}
                        placeholder="Confirme a sua senha"
                        error={passwordConfirmError}
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
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <Button type='submit' className={`${styles.cadastroBotao} text-sm xl:text-xl`} onClick={e => cadastrarFaculdade(e)}>Cadastrar</Button>
            </form>
            <Footer />
        </>

    )
}

export default CadastroFaculdade