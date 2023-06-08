import Footer from "../components/Footer"
import * as React from 'react';
import Menu from "../components//Menu"
import styles from "../styles/CadastroEmpresa.module.css"
import { Box, TextField, MenuItem, InputLabel, Button, InputAdornment, IconButton, Input, FormControl } from '@mui/material';
import '@emotion/react';
import InputMask from "react-input-mask"
import { useState } from "react";
import { VisibilityOff, Visibility } from '@mui/icons-material';
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import { useRouter } from 'next/router';
import { cidadesBrasil, estadosBrasil, faculdades } from "../components/data/DataSelect"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Cookies from "js-cookie";

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
    const [confirmPassword, setConfirmPassword] = React.useState('')
    const [id, setId] = React.useState('')



    const [razaoSocialError, setRazaoSocialError] = React.useState(false)
    const [labelRazaoSocial, setLabelRazaoSocial] = React.useState('Razão Social')
    const [nomeFantasiaError, setNomeFantasiaError] = React.useState(false)
    const [labelNomeFantasia, setLabelNomeFantasia] = React.useState('Nome Fantasia')
    const [ramoError, setRamoError] = React.useState(false)
    const [labelRamo, setLabelRamo] = React.useState('Ramo de Atividade')
    const [porteError, setPorteError] = React.useState(false)
    const [labelPorte, setLabelPorte] = React.useState('Porte da Empresa')
    const [logradouroError, setLogradouroError] = React.useState(false)
    const [labelLogradouro, setLabelLogradouro] = React.useState('Logradouro')
    const [numeroError, setNumeroError] = React.useState(false)
    const [labelNumero, setLabelNumero] = React.useState('Número')
    const [bairroError, setBairroError] = React.useState(false)
    const [labelBairro, setLabelBairro] = React.useState('Bairro')
    const [cepError, setCepError] = React.useState(false)
    const [labelCep, setLabelCep] = React.useState('CEP')
    const [telefoneError, setTelefoneError] = React.useState(false)
    const [labelTelefone, setLabelTelefone] = React.useState('Celular')
    const [dataError, setDataError] = React.useState(false)
    const [labelData, setLabelData] = React.useState('Data de Abertura')
    const [cidadeError, setCidadeError] = React.useState(false)
    const [labelCidade, setLabelCidade] = React.useState('Cidade')
    const [estadoError, setEstadoError] = React.useState(false)
    const [labelEstado, setLabelEstado] = React.useState('Estado')
    const [cnpjError, setCnpjError] = React.useState(false)
    const [labelCnpj, setLabelCnpj] = React.useState('CNPJ')
    const [emailError, setEmailError] = React.useState(false)
    const [labelEmail, setLabelEmail] = React.useState('E-mail')
    const [passwordError, setPasswordError] = React.useState(false)
    const [labelPassword, setLabelPassword] = React.useState('Senha')
    const [passwordConfirmError, setPasswordConfirmError] = React.useState(false)
    const [labelConfirmPassword, setLabelConfirmPassword] = React.useState('Confirmar Senha')

    const [open, setOpen] = React.useState(true);
    const router = useRouter()
    const { exibirMensagem, editarItens } = router.query
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

        if (nomeFantasia.length == 0) {
            setNomeFantasiaError(true)
            setLabelNomeFantasia("Preencha o campo Nome Fantasia")
            contador++
        }
        else {
            setNomeFantasiaError(false)
            setLabelNomeFantasia("Nome Fantasia")
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

        if (cnpj === '' || cnpj.length < 18) {
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
            setLabelConfirmPassword("Senhas não conferem")
            setPasswordConfirmError(true)
            contador++
        }

        if (ramo == '') {
            setLabelRamo('Preencha o campo Ramo de Atividade')
            setRamoError(true)
            contador++
        }
        else {
            setLabelRamo('Ramo de Atividade')
            setRamoError(false)
        }

        if (porte == '') {
            setLabelPorte('Preencha o campo Porte da Empresa')
            setPorteError(true)
            contador++
        }
        else {
            setLabelPorte('Porte da Empresa')
            setPorteError(false)
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
        if (cep == '') {
            setLabelCep('Preencha o campo CEP')
            setCepError(true)
            contador++
        }
        else {
            setLabelCep('CEP')
            setCepError(false)
        }
        if (telefone == '') {
            setLabelTelefone('Preencha o campo Celular')
            setTelefoneError(true)
            contador++
        }
        else {
            setLabelTelefone('Celular')
            setTelefoneError(false)
        }
        if (razaoSocial == '') {
            setLabelRazaoSocial('Preencha o campo Razão Social')
            setRazaoSocialError(true)
            contador++
        }
        else {
            setLabelRazaoSocial('Razão Social')
            setRazaoSocialError(false)
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

    function cadastrarEmpresa() {
        const url = "http://localhost:3001/signupEmpresa/"
        const empresa = {
            dob, email, password, cnpj, razaoSocial,
            cep, logradouro, num, Bairro, Cidade,
            Estado, ramo, porte, telefone, nomeFantasia
        }

        if (validarCampos()) {
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
                        window.location.href = `/CadastroEmpresa/?exibirMensagem=flex`
                    }
                })
                .catch(err => console.log(err))
        }


    }

    function Retornar(e) {
        window.location.href = '/PainelEmpresa'
    }

    function atualizarEmpresa() {
        const url = "http://localhost:3001/updateempresa/"
        const empresa = {
            id, dob, email, password, cnpj, razaoSocial,
            cep, logradouro, num, Bairro, Cidade,
            Estado, ramo, porte, telefone, nomeFantasia
        }

        const validar = validarCampos()

        if (validar) {
            fetch(url, {
                method: "POST",
                body: JSON.stringify(empresa),
                headers: {
                    'Content-type': 'application/json'
                },

            })
                .then(response => response.json())
                .then(json => {
                    console.log(json)
                    if (json.token) {
                        Cookies.set("email", empresa.email)
                        Cookies.set("password", empresa.password)
                        console.log(json)

                        window.location.href = `/CadastroEmpresa?editarItens=true&exibirMensagem=flex`
                    }
                })
                .catch(err => console.log(err))
        }
    }

    React.useEffect(() => {
        if (router.query.editarItens) {
            const url = "http://localhost:3001/getEmpresa/"
            const email = Cookies.get("email")
            fetch(url, {
                method: "POST",
                body: JSON.stringify({ email }),
                headers: {
                    'Content-type': 'application/json'
                },
            })
                .then(response => response.json())
                .then(json => {
                    setId(json.savedEmpresa._id)
                    setCnpj(json.savedEmpresa.cnpj)
                    setRazaoSocial(json.savedEmpresa.razaoSocial)
                    setNomeFantasia(json.savedEmpresa.nomeFantasia)
                    setData(json.savedEmpresa.dob)
                    setRamo(json.savedEmpresa.ramo)
                    setPorte(json.savedEmpresa.porte)
                    setLogradouro(json.savedEmpresa.logradouro)
                    setNumero(json.savedEmpresa.num)
                    setBairro(json.savedEmpresa.Bairro)
                    setCidade(json.savedEmpresa.Cidade)
                    setCEP(json.savedEmpresa.cep)
                    setEstado(json.savedEmpresa.Estado)
                    setEmail(json.savedEmpresa.email)
                    setTelefone(json.savedEmpresa.telefone)
                    setPassword(Cookies.get("password"))
                    setConfirmPassword(Cookies.get("password"))
                    console.log(json)
                })
                .catch(err => console.log(err))
        }
        else {
            setId('')
            setCnpj('')
            setRazaoSocial('')
            setNomeFantasia('')
            setData('')
            setRamo('')
            setPorte('')
            setLogradouro('')
            setNumero('')
            setBairro('')
            setCidade('')
            setCEP('')
            setEstado('')
            setEmail('')
            setTelefone('')
            setPassword('')
            setConfirmPassword('')
        }
    }, [router.query.editarItens])


    return (
        <>
            <Menu />
            <div className="p-2 ml-4 xl:ml-8 md:ml-8 lg:ml-8 sm:ml-4 flex flex-col justify-start items-start" style={{ display: editarItens ? 'flex' : 'none' }}>
                <IconButton className="hover:bg-zinc-150 flex justify-center items-center" onClick={e => Retornar(e)}>
                    <ArrowBackIosIcon className="text-[#d3592d] font-bold text-4xl xl:text-6xl lg:text-6xl md:text-6xl sm:text-4xl transition-all" />
                </IconButton>
            </div>
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
                        {exibirMensagem && editarItens ? `Cadastro atualizado com sucesso` : 'Cadastro realizado com sucesso'}
                    </Alert>
                </Collapse>
            </Box>
            <Box className="flex justify-start items-center flex-col w-full"
                component="form"
                noValidate
                autoComplete="Off">
                <h1 className={`${styles.cadastroTitulo} text-3xl font-bold mt-10`}>{editarItens ? 'Editar Cadastro Empresa' : 'Cadastro Empresa'}</h1>
                <InputMask mask="99.999.999/9999-99" value={cnpj} onChange={e => (setCnpj(e.target.value))}>
                    {(inputProps) => <TextField {...inputProps} error={cnpjError} variant="standard" className="w-6/12 xl:w-4/12 mt-8 " label={labelCnpj} required />}
                </InputMask>
                <TextField
                    className="w-6/12 xl:w-4/12 mt-8"
                    required
                    label={labelRazaoSocial}
                    error={razaoSocialError}
                    placeholder="Digite a sua Razão Social"
                    variant="standard"
                    value={razaoSocial}
                    onChange={e => (setRazaoSocial(e.target.value))}
                >
                </TextField>
                <TextField
                    className="w-6/12 xl:w-4/12 mt-8"
                    required
                    label={labelNomeFantasia}
                    error={nomeFantasiaError}
                    placeholder="Digite o seu Nome Fantasia"
                    variant="standard"
                    value={nomeFantasia}
                    onChange={e => (setNomeFantasia(e.target.value))}
                >
                </TextField>

                <TextField
                    InputLabelProps={{ shrink: true }}
                    error={dataError} variant="standard"
                    className="w-6/12 xl:w-4/12 mt-8 "
                    label={labelData} type="date"
                    required
                    value={dob} onChange={e => (setData(e.target.value))}
                />

                <TextField
                    className="w-6/12 xl:w-4/12 mt-8"
                    required
                    label={labelRamo}
                    error={ramoError}
                    placeholder="Digite seu Ramo de Atividade"
                    variant="standard"
                    value={ramo}
                    onChange={e => (setRamo(e.target.value))}
                >
                </TextField>
                <TextField
                    className="w-6/12 xl:w-4/12 mt-8"
                    required
                    label={labelPorte}
                    error={porteError}
                    placeholder="Digite o Porte da Empresa"
                    variant="standard"
                    value={porte}
                    onChange={e => (setPorte(e.target.value))}
                >
                </TextField>
                <TextField
                    className="w-6/12 xl:w-4/12 mt-8"
                    required
                    label={labelLogradouro}
                    error={logradouroError}
                    placeholder="Digite o seu Endereço"
                    variant="standard"
                    value={logradouro}
                    onChange={e => (setLogradouro(e.target.value))}
                >
                </TextField>
                <TextField
                    className="w-6/12 xl:w-4/12 mt-8"
                    type="number"
                    required
                    label={labelNumero}
                    error={numeroError}
                    placeholder="Digite o Número da Residência"
                    variant="standard"
                    value={num}
                    onChange={e => (setNumero(e.target.value))}
                >
                </TextField>
                <TextField
                    className="w-6/12 xl:w-4/12 mt-8"
                    required
                    label={labelBairro}
                    error={bairroError}
                    placeholder="Digite o seu Bairro"
                    variant="standard"
                    value={Bairro}
                    onChange={e => (setBairro(e.target.value))}
                >
                </TextField>
                <TextField
                    className="w-6/12 xl:w-4/12 mt-8"
                    required
                    label={labelCidade}
                    error={cidadeError}
                    placeholder="Digite a sua Cidade"
                    variant="standard"
                    value={Cidade}
                    onChange={e => (setCidade(e.target.value))}
                >
                </TextField>
                <InputMask mask="99999-999" value={cep} onChange={e => (setCEP(e.target.value))}>
                    {(inputProps) => <TextField
                        {...inputProps}
                        variant="standard"
                        className="w-6/12 xl:w-4/12 mt-8 "
                        label={labelCep}
                        error={cepError}
                        required
                    />}
                </InputMask>
                <TextField
                    className="w-6/12 xl:w-4/12 mt-8"
                    required
                    label={labelEstado}
                    error={estadoError}
                    placeholder="Digite o seu Estado"
                    variant="standard"
                    value={Estado}
                    onChange={e => (setEstado(e.target.value))}
                >
                </TextField>
                <TextField
                    className="w-6/12 xl:w-4/12 mt-8"
                    required
                    label={labelEmail}
                    error={emailError}
                    placeholder="Digite o seu e-mail"
                    variant="standard"
                    type="email"
                    value={email}
                    onChange={e => (setEmail(e.target.value))}
                >
                </TextField>
                <InputMask mask="(99) 99999-9999" value={telefone} onChange={e => (setTelefone(e.target.value))}>
                    {(inputProps) => <TextField
                        {...inputProps}
                        variant="standard"
                        className="w-6/12 xl:w-4/12 mt-8"
                        label={labelTelefone}
                        error={telefoneError}
                        required
                    />}
                </InputMask>
                <FormControl sx={{ m: 1 }} variant="standard" className="w-6/12 xl:w-4/12 flex justify-center items-center mt-8">
                    <InputLabel htmlFor="standard-adornment-password" error={passwordError}>{labelPassword}</InputLabel>
                    <Input className="w-full mt-8"
                        id="standard-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Digite sua senha"
                        value={password}
                        error={passwordError}
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
                    <InputLabel htmlFor="standard-adornment-Confirmpassword" error={passwordConfirmError}>{labelConfirmPassword}</InputLabel>
                    <Input className="w-full mt-8"
                        id="standard-adornment-Confirmpassword"
                        type={showConfirmPassword ? 'text' : 'password'}
                        placeholder="Confirme a sua senha"
                        value={confirmPassword}
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
                                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <Button className={`${styles.cadastroBotao} text-sm xl:text-xl`} onClick={editarItens ? atualizarEmpresa : cadastrarEmpresa}>{editarItens ? 'Editar' : 'Cadastrar'}</Button>
            </Box>
            <Footer />
        </>

    )
}

export default CadastroEmpresa