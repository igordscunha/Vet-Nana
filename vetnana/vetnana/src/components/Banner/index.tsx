import './Banner.css'
import { informacoes } from '../../shared/components/infos'
import { useState } from 'react'
import {Twirl as Hamburger } from 'hamburger-react'

export const Banner = () => {

const linksMenu = [
    {
        nome: 'SOBRE', link: ''
    },
    {
        nome: 'SERVIÇOS', link: ''
    },
    {
        nome: 'BLOG', link: ''
    },
    {
        nome: 'CONTATO', link: ''
    }
]

const [isOpen, setOpen] = useState(false)
const [mostrarNavBar, setmostrarNavBar] = useState(false)

const toggleNavItems = () => {
    setmostrarNavBar(!mostrarNavBar)
}

    return(
        <header className='banner'>

            <div className="md:bg-white md:py-2">
                <div className='hidden md:flex md:justify-evenly md:items-center'>
                    <div className='flex space-x-5 items-start'>
                        <span><a href=""><i className="fa fa-facebook-f"/></a></span>
                        <span><a href=""><i className="fa fa-youtube-play"/></a></span>
                        <span><a href=""><i className="fa fa-instagram"/></a></span>
                    </div>
                    <div>{informacoes.numero1} / {informacoes.numero2} / {informacoes.numero3} • {informacoes.email} • {informacoes.cidade}</div>
                </div>
            </div>
            <div>
                <div className='md:flex md:justify-around md:pt-8 items-center'>

                    <div className='flex justify-between p-8 md:p-0'>
                        <div><a href=""><img className='w-4/12 md:w-5/12' src="/images/logo.png" alt="logovetnana"/></a></div>
                        
                        <div className='md:hidden z-20' onClick={toggleNavItems}>
                            <Hamburger toggled={isOpen} toggle={setOpen}/>
                        </div>
                    </div>
                    
                    <div className={`bg-blue-400 absolute top-0 right-0 flex justify-center md:static md:bg-transparent w-2/3 rounded-2xl 
                    md:w-auto pt-32 pb-20 md:pb-0 md:pt-0 text-2xl md:text-lg hidden transition duration-1000 ease-in-out md:flex overflow-hidden nav-elements ${mostrarNavBar && 'active'}`}>
                        <ul className='space-y-8 md:space-y-0 md:flex md:space-x-12 text-white md:transition-none'>
                        {linksMenu.map((item) => (
                            <li key={item.nome} className='hover:text-gray-900'>
                                <a href={item.link}>{item.nome}</a>
                            </li>
                        ))}
                        <div className='flex justify-around md:hidden'>
                            <span><a href=""><i className="fa fa-facebook-f"/></a></span>
                            <span><a href=""><i className="fa fa-youtube-play"/></a></span>
                            <span><a href=""><i className="fa fa-instagram"/></a></span>
                        </div>
                        </ul>
                    </div>
                </div>
            </div>

            {/* ###BANNER### */}
            
            <div className='text-white text-left mb-12 px-10 md:px-32 md:w-4/5'>
                <h2 className="text-4xl mt-20 font-semibold md:text-6xl">Vet Nana, uma clínica veterinária para chamar de sua</h2>
                <p className="text-xl mt-12">Seu pet está passando por algum problema de saúde e precisa de 
                    atendimento profissional diferenciado e de excelência? 
                    Ou precisa atualizar as vacinas e exames de check up? 
                    Para todas as situações a Vet Nana é o seu lugar!
                </p>
                <button className='bg-blue-500 text-white text-lg font-semibold rounded-full mt-10 px-8 py-4'>Fale conosco</button>
            </div>
    
        </header>
    )
}