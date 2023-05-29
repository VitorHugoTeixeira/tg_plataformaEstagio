import Footer from "../../components/Footer"
import * as React from 'react';
import Menu from "../../components/Menu"
import styles from "../../styles/Login.module.css"
import { TextField, Input, FormControl, Button, InputAdornment, IconButton } from '@mui/material';
import '@emotion/react';
import { VisibilityOff, Visibility, Padding } from '@mui/icons-material';
import { useRouter } from "next/router";
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';



const Login = () => {
    const [showPassword, setShowPassword] = React.useState(true);
    const router = useRouter()

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event = React.MouseEvent) => {
        event.preventDefault();
    };

    const [open, setOpen] = React.useState(true);
    const view = router.query.token != undefined ? 'flex' : 'none'

    return (
        <>
            <Menu />
            <Box className="w-[100%] xl:w-[30%] lg:w-[30%] md:w-[50%] sm:w-[100%]" sx={{ mt: 2, display: view}}>
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
                        <h2 className={`${styles.loginTituloInput} text-md font-thin`}>E-mail</h2>
                        <Input
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
                            className={styles.loginInput} id="usuarioInput" type="text" placeholder="Digite seu e-mail" variant="standard" />
                        <h2 className={`${styles.loginTituloInput} text-md font-thin`}>Senha</h2>
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
                        <Button className={`${styles.loginButton} text-xl`}>Enviar</Button>
                    </FormControl>
                </div>
            </main >
            <Footer />
        </>
    )
}

export default Login