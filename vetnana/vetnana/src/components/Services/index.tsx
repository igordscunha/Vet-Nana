import './Serviços.css'

export const Serviços = () => {
    return(
        <section className='serviços p-10 bg-scroll md:flex md:pb-28'>
            <div className='md:w-2/4 md:p-28'>
                <div className='flex flex-col items-start text-start gap-6'>
                    <h2 className='text-white text-3xl font-bold md:text-6xl md:font-medium md:pb-12'>Conheça nossos cuidados</h2>
                    <div><a href=""><button className='text-white text-lg rounded-full px-6 py-3 border-2 border-white'>Saiba mais</button></a></div>
                </div>
            </div>

            <div className='flex flex-col mt-20 gap-16 md:flex-row md:flex-wrap md:w-2/4 md:gap-12'>

                <div className='flex flex-col gap-4 md:w-1/3'>
                    <div><img className='md:w-full' src="https://img.freepik.com/fotos-gratis/veterinario-verificando-cachorro-tiro-medio_23-2149143871.jpg?w=996&t=st=1679963488~exp=1679964088~hmac=9ae2da4087ee4aeb0155f8aba96ab6e6c98c7024a3b58a34d5132c63faefc1e9" width="50%"/></div>
                    
                    <div className='text-white text-start md:text-justify'><h3 className='uppercase text-lg font-semibold'>Consultas</h3>
                    <p>Estrelando os veterinários carinhosos e empáticos da Rio Vet...</p></div>
                </div>

                <div className='flex flex-col gap-4 md:w-1/3'>
                    <div><img className='md:w-full' src="https://img.freepik.com/fotos-gratis/tiro-de-angulo-baixo-na-sala-de-cirurgia-assistente-entrega-instrumentos-aos-cirurgioes-durante-a-operacao-cirurgioes-realizam-a-operacao-medicos-profissionais-realizando-cirurgia_657921-1131.jpg?w=996&t=st=1679964644~exp=1679965244~hmac=bda9adde4777b80b45e0395d789d9b367b40ef59c894ee373cd07927639d4251" width="50%"/></div>
                    
                    <div className='text-white text-start md:text-justify'><h3 className='uppercase text-lg font-semibold'>Cirurgias</h3>
                    <p>Em um centro cirúrgico altamente moderno, são realizadas desde castrações 
                        até cirurgias de alta complexidade. Quer assistir? Pode também!</p></div>
                </div>

                <div className='flex flex-col gap-4 md:w-1/3'>
                    <div><img className='md:w-full' src="https://img.freepik.com/fotos-gratis/feche-o-homem-e-a-mulher-com-gato_23-2149304290.jpg?w=996&t=st=1679964837~exp=1679965437~hmac=e67d5a619172319737ff0447b1d7e726050ceecae58beba6991c9ae725ef0631" width="50%"/></div>
                    
                    <div className='text-white text-start md:text-justify'><h3 className='uppercase text-lg font-semibold'>Exames</h3>
                    <p>Ultrassonografia doppler, raios x CR, endoscopia, vídeo diagnóstico...</p></div>
                </div>

                <div className='flex flex-col gap-4 md:w-1/3'>
                    <div><img className='md:w-full' src="https://img.freepik.com/fotos-gratis/medico-perguntando-proximo-cliente-da-fila_329181-10374.jpg?w=996&t=st=1679964963~exp=1679965563~hmac=54527261d10a01d1561ac57d4ade2db589824374069c8a472b1b59110bb602b8" width="50%"/></div>
                    
                    <div className='text-white text-start md:text-justify'><h3 className='uppercase text-lg font-semibold'>Pipoca Fresquinha!</h3>
                    <p>Nossos tutores são super mimados com uma pipoca saborosa e fresquinha 
                        durante todo o dia. Solicite a sua quando for nos visitar!</p></div>
                </div>

            </div>
        </section>
    )
}