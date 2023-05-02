import { Swiper } from "swiper/react"
import { Botao } from "../Button"
import '../../shared/styles/swiperpointer.css'

interface ArtigosProps {
    imagem: string
    categoria: string
    texto: string
}

export const Artigos = ({imagem, categoria, texto}:ArtigosProps) => {
    return(
        <Swiper>
            <div className="md:max-h-screen md:flex md:gap-12">
                <img className="md:w-screen md:h-fit md:relative md:bottom-32" src={imagem}/>
                <div className="absolute left-0 top-0 text-left text-white px-8 py-6 md:top-32 md:left-36 md:w-2/5">
                    <div className="hidden md:flex md:items-end md:space-x-8"><img className="w-1/6" src="/images/logo.png"/> <h3>Por <a className="hover:underline" href="">VetNana</a> em <a className="hover:underline" href="">{categoria}</a></h3></div>
                    <h3 className="text-2xl font-semibold md:hidden">{categoria}</h3>
                    <h4 className="mt-5 text-lg md:text-3xl md:font-light md:pb-12 md:pt-4">{texto}</h4>
                    <div className="absolute right-24 -bottom-10 w-full md:right-52"><Botao>Ler artigo &rarr;</Botao></div>
                </div>
                
            </div>
        </Swiper>
    )
}