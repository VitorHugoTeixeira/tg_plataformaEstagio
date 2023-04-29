import Footer from "./Footer"
import Menu from "./Menu"
import { ImageList, ImageListItem, IconButton } from "@mui/material"
import { itemData } from "../components/data/DataSelect"


const SobreNos = () => {
    return (
        <>
            <Menu />
            <main>
                <div className="flex justify-center items-center flex-col">
                    <img className="w-full" src="/assets/imagens/SobreNos.png" alt="Imagens de Background da Página Sobre Nós com quatro jovens no topo da montanha" />
                    <h1 className="absolute text-4xl xl:text-6xl lg:text-6xl md:text-6xl font-bold text-zinc-200">Sobre Nós</h1>
                </div>
                <div className="w-full h-[479px] bg-[#FF6B35] xl:p-16 lg:p-16 p-4 flex justify-center items-center flex-col">
                    <h2 className="text-3xl font-bold font-['Barlow'] mb-4 xl:self-start lg:self-start text-zinc-100">Nossa missão</h2>
                    <p className="w-8/12 text-md xl:text-xl md:text-xl lg:text-xl font-thin font-[Source Serif Pro] text-zinc-100 mb-4">Nossa missao consiste em facilitar a avaliação das documentações, organizá-las facilitando o processo massivo do orientador e do aluno para que o estágio seja simples e foque somente no aprendizado do aluno.</p>
                    <p className="w-8/12 text-md xl:text-xl md:text-xl lg:text-xl font-thin font-[Source Serif Pro] text-zinc-100">Visamos ter uma plataforma rápida, acessível e fácil que faça a navegação ser intuitiva mostrando uma performace que auxilie ainda mas o usuário a conseguir o seu objetivo.</p>
                </div>
                <div className="w-full h-[479px] bg-[#004E89] xl:p-16 lg:p-16 p-4 flex justify-center items-center flex-col">
                    <h2 className="text-3xl font-bold font-['Barlow'] mb-4 xl:self-start lg:self-start text-zinc-100">Nossos Valores</h2>
                    <div className="flex justify-start items-start flex-col w-8/12">
                        <p className="text-xl xl:text-xl md:text-xl lg:text-xl font-thin font-[Source Serif Pro] text-zinc-100 mb-4">Organizar de forma objetiva os documentos do estágio;</p>
                        <p className="text-xl xl:text-xl md:text-xl lg:text-xl font-thin font-[Source Serif Pro] text-zinc-100 mb-4">Priorizar a acessibilidade e rápidez na navegação do site;</p>
                        <p className="text-xl xl:text-xl md:text-xl lg:text-xl font-thin font-[Source Serif Pro] text-zinc-100 mb-4">Facilitar a comunicação entre empresa, faculdade e aluno;</p>
                        <p className="text-xl xl:text-xl md:text-xl lg:text-xl font-thin font-[Source Serif Pro] text-zinc-100">Corrigir e apontar erros na documentação.</p>
                    </div>
                </div>
                <ImageList sx={{ width: "100%", height: 450 }} className="flex flex-col xl:flex-row" cols={4} gap={0} loading="lazy">
                    {itemData.map((item) => (
                        <ImageListItem key={item.img} className="flex justify-end items-center xl:overflow-hidden">
                            <img
                                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=164&h=164&fit=fill&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            />
                            <h1 className="absolute text-3xl font-bold text-zinc-100 font-['Barlow'] mb-16">{item.title}</h1>
                            <h3 className="absolute text-xl font-bold text-zinc-100 font-['Barlow'] mb-8">{item.age} anos</h3>
                        </ImageListItem>
                    ))}
                </ImageList>
            </main>
            <Footer />
        </>
    )
}

export default SobreNos