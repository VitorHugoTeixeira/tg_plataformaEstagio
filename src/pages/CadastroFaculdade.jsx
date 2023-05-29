import styles from '../styles/CadastroFaculdade.module.css'
import Footer from "../components/Footer"
import * as React from 'react';
import Menu from "../components//Menu"
import { Box, TextField, MenuItem, InputLabel, Button, InputAdornment, IconButton, Input, FormControl, FormControlLabel, Checkbox, FormGroup } from '@mui/material';
import '@emotion/react';
import InputMask from "react-input-mask"
import { faculdades } from "../components/data/DataSelect"
import { VisibilityOff, Visibility } from '@mui/icons-material';

const CadastroFaculdade = (props) => {
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
    const [cnpj, setCNPJ] = React.useState('')

    const handleRemoveCurso = (indice) => {
        setCursos(cursos.filter((_, index) => index != indice));
    };

    const handleRemovePeriodo = (indice) => {
        setPeriodos(periodos.filter((_, index) => index != indice));
    };


    function cadastrarFaculdade() {
        const url = "http://localhost:3001/signupFaculdade/"
        const faculdade = {
            nome, email, password, dob, cursos, periodos,
            Cidade, Estado, cnpj
        }

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
                    window.location.href = `/Login/?token=${json.token}`
                }
            })
            .catch(err => console.log(err))
    }


    return (
        <>
            <Menu />
            <Box className="flex justify-start items-center flex-col w-full"
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
                    label="Nome"
                    placeholder="Digite o nome da Instituição"
                    variant="standard"
                    value={nome}
                    onChange={e => (setNome(e.target.value))}
                >
                </TextField>
                <InputMask mask="99/99/9999" value={dob} onChange={e => setData(e.target.value)}>
                    {(inputProps) => <TextField {...inputProps} variant="standard" className="w-6/12 xl:w-4/12 mt-8 " label="Data de Abertura" required />}
                </InputMask>
                <TextField
                    className="w-6/12 xl:w-4/12 mt-8"
                    required
                    label="Cidade"
                    placeholder="Rio de Janeiro"
                    variant="standard"
                    value={Cidade}
                    onChange={e => (setCidade(e.target.value))}
                >
                </TextField>
                <TextField
                    className="w-6/12 xl:w-4/12 mt-8"
                    required
                    label="Estado"
                    placeholder="Rio de Janeiro"
                    variant="standard"
                    value={Estado}
                    onChange={e => (setEstado(e.target.value))}
                >
                </TextField>
                <InputMask mask="99.999.999/9999-99" value={cnpj}
                    onChange={e => (setCNPJ(e.target.value))}>
                    {(inputProps) => <TextField {...inputProps} variant="standard" className="w-6/12 xl:w-4/12 mt-8 " label="CNPJ" required />}
                </InputMask>
                <div className="xl:w-4/12 flex justify-start items-start xl:flex-row flex-col pl-2 xl:pl-0">
                    <FormGroup className="w-full xl:w-6/12 flex justify-start items-start mt-8 gap-1" >
                        <h3 className={`${styles.cadastroCheckBoxTitulo} text-xl mb-4`}>Cursos</h3>
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
                        <h3 className={`${styles.cadastroCheckBoxTitulo} text-xl mb-4`}>Período</h3>
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
                    label="E-mail"
                    placeholder="Digite seu usuário"
                    variant="standard"
                    type='email'
                    value={email}
                    onChange={e => (setEmail(e.target.value))}
                ></TextField>
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
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
               <Button className={`${styles.cadastroBotao} text-sm xl:text-xl`} onClick={cadastrarFaculdade}>Cadastrar</Button>
            </Box>
            <Footer />
        </>

    )
}

export default CadastroFaculdade