import Footer from "../../components/Footer"
import * as React from 'react';
import Menu from "../../components/Menu"
import styles from "../../styles/Login.module.css"
import { TextField, Input, FormControl, Button, InputAdornment, IconButton } from '@mui/material';
import '@emotion/react';
import { VisibilityOff, Visibility, Padding, Cookie } from '@mui/icons-material';
import { useRouter } from "next/router";
import Cookies from "js-cookie"



const Login = () => {
    const [showPassword, setShowPassword] = React.useState(false);
    const router = useRouter()
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [emailError, setEmailError] = React.useState(false)
    const [passwordError, setPasswordError] = React.useState(false)
    const [labelEmail, setLabelEmail] = React.useState('E-mail')
    const [labelPassword, setLabelPassword] = React.useState('Senha')

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event = React.MouseEvent) => {
        event.preventDefault();
    };

    const [open, setOpen] = React.useState(true);
    const view = router.query.token != undefined ? 'flex' : 'none'

    function efetuarLogin(e) {
        e.preventDefault()

        const url = "http://localhost:3001/signin/"
        const credentials = { email, password }

        const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        if (!validEmail.test(credentials.email)) {
            setEmailError(true)
            setLabelEmail("Por favor digite o E-mail de forma correta!")
            if (password.length < 8 || password === '') {
                setPasswordError(true)
                setLabelPassword("Por favor digite a senha com no minimo 8 caracteres!")
                return
            }
            else {
                setPasswordError(false)
                setLabelPassword("Senha")
            }
        }
        else {
            setEmailError(false)
            setLabelEmail("E-mail")
        }


        fetch(url, {
            method: "POST",
            body: JSON.stringify(credentials),
            headers: {
                'Content-type': 'application/json'
            },

        })
            .then(response => response.json())
            .then(json => {
                console.log(json)
                if (json.token) {
                    Cookies.set("email", json.user.email)
                    Cookies.set("password", credentials.password)
                    window.location.href = `/${json.tela}`
                }
            })
            .catch(err => console.log(err))



        console.log(JSON.stringify(credentials))

    }

    React.useEffect(() => {
        if(Cookies.get('email') && Cookies.get('password')){
            const obj = { email: Cookies.get('email'), password: Cookies.get('password')}
            console.log(obj)

            const url = "http://localhost:3001/signin/"
            fetch(url, {
                method: "POST",
                body: JSON.stringify(obj),
                headers: {
                    'Content-type': 'application/json'
                },
    
            })
                .then(response => response.json())
                .then(json => {
                    console.log(json)
                    if (json.token) {
                        window.location.href = `/${json.tela}`
                    }
                })
                .catch(err => console.log(err))
        }

    }, )

    return (
        <>
            <Menu />
            <main className={styles.loginMain}>
                <div className={styles.loginGroup}>
                    <h1 className={`${styles.loginTitulo} text-3xl font-bold`}>Login</h1>
                    <h3 className={`${styles.loginSubtitulo} text-md font-thin`}>Seja Bem-Vindo ao nosso portal estágios</h3>
                    <form className="fullWidth marginDense w-[60%] flex flex-col justify-center items-center">
                        <h2 className={`${styles.loginTituloInput} text-md font-thin ${emailError ? 'text-[#FF0000]' : 'text-[#000]'}`}>{labelEmail}</h2>
                        <TextField
                            sx={
                                {
                                    width: {
                                        xs: "100%",
                                        sm: "100%",
                                        md: "100%",
                                        lg: "70%",
                                        xl: "70%"
                                    },
                                    margin: "5px",
                                    paddingBottom: "10px",

                                }
                            }
                            className={styles.loginInput} id="usuarioInput" type="email" placeholder="Digite seu e-mail" variant="standard" value={email} onChange={e => setEmail(e.target.value)} error={emailError}></TextField>
                        <h2 className={`${styles.loginTituloInput} text-md font-thin ${passwordError ? 'text-[#FF0000]' : 'text-[#000]'}`}>{labelPassword}</h2>
                        <Input className={styles.loginInput}
                            sx={
                                {
                                    width: {
                                        xs: "100%",
                                        sm: "100%",
                                        md: "100%",
                                        lg: "70%",
                                        xl: "70%"
                                    },
                                    margin: "5px",
                                    paddingBottom: "10px"
                                }
                            }
                            id="filled-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Digite sua senha"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
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
                        <Button type="submit" className={`${styles.loginButton} text-xl`} onClick={(e) => efetuarLogin(e)}>Enviar</Button>
                    </form>
                </div>
            </main >
            <Footer />
        </>
    )
}

export default Login