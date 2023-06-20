import Footer from "../components/Footer"
import Menu from "../components/Menu"
import * as React from 'react';
import { Box, Divider, TextField } from "@mui/material";
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { IconButton } from "@mui/material";
import { useRouter } from "next/router";
import Link from "next/link";



const ExibicaoDocumentos = () => {
    const router = useRouter()
    const [documentos, setDocumentos] = React.useState([])

    function Retornar(e) {
        if(router.query.tokenTela) window.location.href = '/PainelEmpresa'
        else window.location.href = `/AcessoAluno?curso=${router.query.curso}&semestre=${router.query.semestre}`
    }

    React.useEffect(() => {
        const url = "http://localhost:3001/getdocumentByIdAluno/"
        fetch(url, {
            method: "POST",
            body: JSON.stringify({ idAluno: router.query.tokenAcesso }),
            headers: {
                'Content-type': 'application/json'
            },
        })
            .then(response => response.json())
            .then(json => {
                if (json.savedDocument.length) {
                    console.log(json.savedDocument)
                    setDocumentos(json.savedDocument)
                }
            })
            .catch(err => console.log(err))
    }, [router.query.tokenAcesso])

    return (
        <>
            <Menu />
            <section className="flex justify-center items-center w-full mb-12 p-4 flex-col">
                <IconButton className="self-start hover:bg-zinc-150 flex justify-center items-center" onClick={e => Retornar(e)}>
                    <ArrowBackIosIcon className="text-[#d3592d] font-bold text-4xl xl:text-6xl lg:text-6xl md:text-6xl sm:text-4xl transition-all" />
                </IconButton>
                <h1 className="self-start font-[Barlow] text-xl xl:text-2xl lg:text-2xl md:text-2xl sm:text-xl font-bold p-4 xl:p-12 lg:p-12 md:p-12 sm:p-8">Documentos</h1>
                <Box className="w-full mt-12 flex justify-center flex-wrap mb-90 h-full">
                    {documentos.map(item => <Card key={item._id} sx={{ maxWidth: 350, borderRadius: 5, maxHeight: 260 }} className="mb-90 mt-8 w-[300px] m-1 xl:m-4 lg:m-4 md:m-4 sm:m-4"><CardActions className="w-full flex flex-col h-20"><AssignmentIcon className="ml-2 mt-2 text-[#d3592d] self-start p-0" /><Divider className="h-5 text-[#000] font-bold w-full" /></CardActions><CardContent className="flex justify-center items-center flex-col"><h2 className="font-[Barlow] text-xl">{item.titulo}</h2></CardContent><CardActions className="flex justify-center items-center flex-col"><Divider className="h-1 text-[#000] font-bold w-full" /><button className="self-end text-sm p-3 m-4 bg-[#FF6B35] text-[#fff] rounded-xl hover:bg-[#d3592d]" size="small">Ver documentos </button></CardActions></Card>)[0] === undefined ?
                        <div className="h-screen flex justify-center items-center"><h1 className="font-[Barlow] text-xl xl:text-4xl lg:text-4xl md:text-3xl sm:text-xl font-bold">Não há documentos assinados por esse estagiário</h1></div> :
                        documentos.map(item => <Card key={item._id} sx={{ maxWidth: 350, borderRadius: 5, maxHeight: 260 }} className="w-[300px] m-1 xl:m-4 lg:m-4 md:m-4 sm:m-4"><CardActions className="w-full flex flex-col h-20"><AssignmentIcon className="ml-2 mt-2 text-[#d3592d] self-start p-0" /><Divider className="h-5 text-[#000] font-bold w-full" /></CardActions><CardContent className="flex justify-center items-center flex-col"><h2 className="font-[Barlow] text-xl">{item.titulo}</h2></CardContent><CardActions className="flex justify-center items-center flex-col"><Divider className="h-1 text-[#000] font-bold w-full" /><Link href={router.query.tokenTela == 'Empresa' ? `/DeclaracaoAtividade?tokenAcesso=${router.query.tokenAcesso}&tokenTela=Empresa` : `/DeclaracaoAtividade?tokenAcesso=${router.query.tokenAcesso}&tokenTela=Supervisor`} className="self-end text-sm p-3 m-4 bg-[#FF6B35] text-[#fff] rounded-xl hover:bg-[#d3592d]" size="small">Ver documentos </Link></CardActions></Card>)
                    }
                </Box>
            </section>
            <Footer />
        </>
    )
}

export default ExibicaoDocumentos