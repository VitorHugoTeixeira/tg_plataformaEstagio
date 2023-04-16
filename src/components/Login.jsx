import Footer from "./Footer"
import * as React from 'react';
import Menu from "./Menu"
import styles from "../styles/Login.module.css"
import { TextField, Input, FormControl, Button, InputAdornment, IconButton } from '@mui/material';
import '@emotion/react';
import { VisibilityOff, Visibility, Padding } from '@mui/icons-material';



const Login = () => {
    const [showPassword, setShowPassword] = React.useState(true);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event = React.MouseEvent) => {
        event.preventDefault();
    };
    return (
        <>
            <Menu />
            <main className={styles.loginMain}>
                <div className={styles.loginGroup}>
                    <h1 className={`${styles.loginTitulo} text-3xl font-bold`}>Login</h1>
                    <h3 className={`${styles.loginSubtitulo} text-md font-thin`}>Seja Bem-Vindo ao nosso portal estágios</h3>
                    <FormControl sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: "60%"
                    }} className="fullWidth marginDense">
                        <h2 className={`${styles.loginTituloInput} text-md font-thin`}>Usuário</h2>
                        <Input sx={
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
                            className={styles.loginInput} id="usuarioInput" type="text" placeholder="Digite seu usuário" variant="standard" />
                        <h2 className={`${styles.loginTituloInput} text-md font-thin`}>Senha</h2>
                        <Input  className={styles.loginInput}
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
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                        size="string"
                                            >
                                            { showPassword?<VisibilityOff /> : <Visibility />}
                                </IconButton>
                                </InputAdornment>
                            }
                        />
                        <Button className={`${styles.loginButton} text-xl`}>Enviar</Button>
                </FormControl>
            </div>
        </main >
            <Footer />
        </>
    )
}

export default Login