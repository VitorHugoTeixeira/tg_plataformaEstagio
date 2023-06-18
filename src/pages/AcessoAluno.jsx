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

function PagePanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="pagepanel"
            hidden={value !== index}
            id={`simple-pagepanel-${index}`}
            aria-labelledby={`simple-page-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }} className="flex justify-center items-center w-full flex-wrap">
                    {children}
                </Box>
            )}
        </div>
    );
}


PagePanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function Retornar(e) {
    window.location.href = '/PainelOrientador'
}

function a11yProps(index) {
    return {
        id: `simple-page-${index}`,
        'aria-controls': `simple-page-${index}`,
    };
}


const AcessoAluno = () => {
    const router = useRouter()
    const [estagiarios, setEstagiarios] = React.useState([])

    function retornarEstagiarios() {
        if (router.query.curso && router.query.semestre) {
            const url = "http://localhost:3001/getEstagiarios/"
            const obj = { curso: router.query.curso, semestre: router.query.semestre }
            fetch(url, {
                method: "POST",
                body: JSON.stringify(obj),
                headers: {
                    'Content-type': 'application/json'
                },

            })
                .then(response => response.json())
                .then(json => {
                    setEstagiarios(json.savedAluno)
                })
                .catch(err => console.log(err))
        }
    }

    React.useEffect(() => {
        retornarEstagiarios()
    }, [router.query.curso])
    return (
        <>
            <Menu />
            <section className="flex justify-center items-center w-full mb-12 p-4 flex-col">
                <IconButton className="self-start hover:bg-zinc-150 flex justify-center items-center" onClick={e => Retornar(e)}>
                    <ArrowBackIosIcon className="text-[#d3592d] font-bold text-4xl xl:text-6xl lg:text-6xl md:text-6xl sm:text-4xl transition-all" />
                </IconButton>
                <h1 className="self-start font-[Barlow] text-xl xl:text-2xl lg:text-2xl md:text-2xl sm:text-xl font-bold p-4 xl:p-12 lg:p-12 md:p-12 sm:p-8">Estagiários</h1>
                <Box className="w-full mt-12 flex justify-center flex-wrap mb-90 h-full">
                    {estagiarios.map(item => <Card key={item._id} sx={{ maxWidth: 350, borderRadius: 5, maxHeight: 260 }} className="mb-90 mt-8 w-[300px] m-1 xl:m-4 lg:m-4 md:m-4 sm:m-4"><CardActions className="w-full flex flex-col h-20"><AssignmentIcon className="ml-2 mt-2 text-[#d3592d] self-start p-0" /><Divider className="h-5 text-[#000] font-bold w-full" /></CardActions><CardContent className="flex justify-center items-center flex-col"><h2 className="font-[Barlow] text-xl">{item.name}</h2><h3 className="text-md font-thin font=[Barlow]">{item.Curso}</h3></CardContent><CardActions className="flex justify-center items-center flex-col"><Divider className="h-1 text-[#000] font-bold w-full" /><button className="self-end text-sm p-3 m-4 bg-[#FF6B35] text-[#fff] rounded-xl hover:bg-[#d3592d]" size="small">Ver documentos </button></CardActions></Card>)[0] === undefined ? 
                    <div className="h-screen flex justify-center items-center"><h1 className="font-[Barlow] text-xl xl:text-6xl lg:text-6xl md:text-4xl sm:text-xl font-bold">Não há estagiários para esse semestre</h1></div> :
                    estagiarios.map(item => <Card key={item._id} sx={{ maxWidth: 350, borderRadius: 5, maxHeight: 260 }} className="w-[300px] m-1 xl:m-4 lg:m-4 md:m-4 sm:m-4"><CardActions className="w-full flex flex-col h-20"><AssignmentIcon className="ml-2 mt-2 text-[#d3592d] self-start p-0" /><Divider className="h-5 text-[#000] font-bold w-full" /></CardActions><CardContent className="flex justify-center items-center flex-col"><h2 className="font-[Barlow] text-xl">{item.name}</h2><h3 className="text-md font-thin font=[Barlow]">{item.Curso}</h3></CardContent><CardActions className="flex justify-center items-center flex-col"><Divider className="h-1 text-[#000] font-bold w-full" /><button className="self-end text-sm p-3 m-4 bg-[#FF6B35] text-[#fff] rounded-xl hover:bg-[#d3592d]" size="small">Ver documentos </button></CardActions></Card>)
                    }
                </Box>
            </section>
            <Footer />
        </>
    )
}

export default AcessoAluno