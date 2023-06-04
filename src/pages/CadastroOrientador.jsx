import styles from '../styles/CadastroOrientador.module.css'
import Footer from "../components/Footer"
import * as React from 'react';
import Menu from "../components//Menu"
import { Box, TextField, MenuItem, InputLabel, Button, InputAdornment, IconButton, Input, FormControl, FormControlLabel, Checkbox, FormGroup } from '@mui/material';
import '@emotion/react';
import InputMask from "react-input-mask"
import { VisibilityOff, Visibility } from '@mui/icons-material';
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import { useRouter } from 'next/router';
import { cidadesBrasil, estadosBrasil, faculdades } from "../components/data/DataSelect"


const CadastroOrientador = (props) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const [showConfirmPassword, setConfirmShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickShowConfirmPassword = () => setConfirmShowPassword((show) => !show);

    const handleMouseDownPassword = (event = React.MouseEvent) => {
        event.preventDefault();
    };

    const [nome, setNome] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [dob, setData] = React.useState()
    const [cursos, setCursos] = React.useState([])
    const [periodos, setPeriodos] = React.useState([])
    const [Cidade, setCidade] = React.useState('')
    const [Estado, setEstado] = React.useState('')
    const [RA, setRA] = React.useState('')
    const [faculdade, setFaculdade] = React.useState('Fatec - São Roque')
    const [confirmPassword, setConfirmPassword] = React.useState('')


    const [nomeError, setNomeError] = React.useState(false)
    const [labelNome, setLabelNome] = React.useState('Nome')
    const [dataError, setDataError] = React.useState(false)
    const [labelData, setLabelData] = React.useState('Data de Nascimento')
    const [cidadeError, setCidadeError] = React.useState(false)
    const [labelCidade, setLabelCidade] = React.useState('Cidade')
    const [estadoError, setEstadoError] = React.useState(false)
    const [labelEstado, setLabelEstado] = React.useState('Estado')
    const [RAError, setRAError] = React.useState(false)
    const [labelRA, setLabelRA] = React.useState('Registro Acadêmico (RA)')
    const [cursosError, setCursosError] = React.useState(false)
    const [labelCursos, setLabelCursosError] = React.useState('Cursos')
    const [periodosError, setPeriodosError] = React.useState(false)
    const [labelPeriodos, setLabelPeriodos] = React.useState('Períodos')
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

        if (RA === '' || RA.length < 13) {
            setRAError(true)
            setLabelRA("Digite um RA válido")
            contador++
        }
        else {
            setRAError(false)
            setLabelRA("Registro Acadêmico (RA)")
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

        if (cursos.length == 0) {
            setLabelCursosError('Escolha um ou mais cursos')
            setCursosError(true)
            contador++
        }
        else {
            setLabelCursosError('Cursos')
            setCursosError(false)
        }
        if (periodos.length == 0) {
            setLabelPeriodos('Escolha um ou mais períodos')
            setPeriodosError(true)
            contador++
        }
        else {
            setLabelPeriodos('Períodos')
            setPeriodosError(false)
        }

        console.log(contador)

        if (contador > 0) return false
        else return true
    }

    function cadastrarOrientador() {
        const url = "http://localhost:3001/signupOrientador/"
        const orientador = {
            nome, email, password, dob, cursos, periodos,
            Cidade, Estado, RA, faculdade
        }

        const validar = validarCampos()
        console.log(validar)

        if (validar) {
            console.log(orientador)
            fetch(url, {
                method: "POST",
                body: JSON.stringify(orientador),
                headers: {
                    'Content-type': 'application/json'
                },

            })
                .then(response => response.json())
                .then(json => {
                    if (json.token) {
                        window.location.href = `/CadastroOrientador/?exibirMensagem=true`
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
                sx={{
                    marginBottom: 2
                }}
                noValidate
                autoComplete="Off">
                <h1 className={`${styles.cadastroTitulo} text-3xl font-bold mt-16`}>Cadastro do Supervisor</h1>
                <TextField
                    className="w-6/12 xl:w-4/12 mt-8"
                    required
                    error={nomeError}
                    label={labelNome}
                    placeholder="Digite seu nome completo"
                    variant="standard"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                >
                </TextField>
                <TextField
                    InputLabelProps={{ shrink: true }}
                    type='date'
                    variant="standard"
                    className="w-6/12 xl:w-4/12 mt-8 "
                    label={labelData}
                    error={dataError}
                    required
                    value={dob}
                    onChange={(e) => setData(e.target.value)}
                />

                <TextField
                    className="w-6/12 xl:w-4/12 mt-8"
                    required
                    label={labelCidade}
                    error={cidadeError}
                    placeholder="Rio de Janeiro"
                    variant="standard"
                    value={Cidade}
                    onChange={(e) => setCidade(e.target.value)}
                >
                </TextField>
                <TextField
                    className="w-6/12 xl:w-4/12 mt-8"
                    required
                    label={labelEstado}
                    error={estadoError}
                    placeholder="Rio de Janeiro"
                    variant="standard"
                    value={Estado}
                    onChange={(e) => setEstado(e.target.value)}
                >
                </TextField>
                <TextField
                    className="w-6/12 xl:w-4/12 mt-8"
                    required
                    label={labelEmail}
                    error={emailError}
                    placeholder="adonis@gmail.com   "
                    variant="standard"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                >
                </TextField>
                <TextField
                    className="w-6/12 xl:w-4/12 mt-8"
                    required
                    label={labelRA}
                    error={RAError}
                    placeholder="9812739127"
                    variant="standard"
                    type="number"
                    value={RA}
                    onChange={(e) => setRA(e.target.value)}
                >
                </TextField>
                <TextField
                    disabled
                    label="Instuição de Ensino"
                    className="w-6/12 xl:w-4/12 mt-8"
                    required
                    variant="standard"
                    value={faculdade}
                    onChange={(e) => setFaculdade(e.target.value)}
                >
                </TextField>
                <div className="xl:w-4/12 flex justify-start items-start xl:flex-row flex-col pl-2 xl:pl-0">
                    <FormGroup className="w-full xl:w-6/12 flex justify-start items-start mt-8 gap-1" >
                        <h3 className={`${styles.cadastroCheckBoxTitulo} text-xl mb-4 ${cursosError ? 'text-[#ff0000]' : 'text-[#000]'}`}>{labelCursos}</h3>
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
                        <h3 className={`${styles.cadastroCheckBoxTitulo} text-xl mb-4 ${periodosError ? 'text-[#ff0000]' : 'text-[#000]'}`}>{labelPeriodos}</h3>
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
                <FormControl sx={{ m: 1 }} variant="standard" className="w-6/12 xl:w-4/12 flex justify-center items-center mt-8">
                    <InputLabel htmlFor="standard-adornment-password" error={passwordError}>{labelPassword}</InputLabel>
                    <Input className="w-full mt-8"
                        id="standard-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Digite sua senha"
                        value={password}
                        error={passwordError}
                        onChange={(e) => setPassword(e.target.value)}
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
                <Button className={`${styles.cadastroBotao} text-sm xl:text-xl`} onClick={cadastrarOrientador}>Cadastrar</Button>
            </Box>
            <Footer />
        </>

    )
}

export default CadastroOrientador