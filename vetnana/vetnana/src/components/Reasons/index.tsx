export const Razoes = () => {
    return (
        <section className="p-10">
            <div><p className="text-gray-700 text-4xl font-semibold pb-16 md:font-bold md:text-6xl md:pb-32 md:mt-12">Por que a VetNana?</p></div>

            <div className="flex flex-col gap-16 md:flex-row md:px-20 md:justify-center">

                <div className="flex flex-col justify-center items-center gap-5 md:w-1/3">
                    <img className="pb-5" src='https://cdn-icons-png.flaticon.com/512/1364/1364184.png' width='16%'/>
                    <h3 className="font-semibold text-lg uppercase">Recepção e consultório exclusivo para felinos</h3>
                    <p>Aqui seu gatinho não fica estressado enquanto aguarda atendimento 
                        e pode usufruir de uma sala onde somente os felinos são permitidos!
                    </p>
                </div>

                <div className="flex flex-col justify-center items-center gap-5 md:w-1/3">
                    <img className="pb-5" src='https://cdn-icons-png.flaticon.com/512/3331/3331125.png' width='16%'/>
                    <h3 className="font-semibold text-lg uppercase">Equipe super carinhosa</h3>
                    <p>Somos nota 4,8 no Google com mais de 1,2 mil avaliações. Temos 
                        orgulho de nossa equipe e nosso atendimento!
                    </p>
                </div>

                <div className="flex flex-col justify-center items-center gap-5 md:w-1/3">
                    <img className="pb-5" src='https://cdn-icons-png.flaticon.com/512/1365/1365806.png' width='16%'/>
                    <h3 className="font-semibold text-lg uppercase">Cirurgias com transparência</h3>
                    <p>Você que nunca se separou do seu filho pet pode assistir a cirurgia 
                        em ambiente próprio e climatizado.
                    </p>
                </div>

            </div>

            <div className="flex flex-col gap-5 mt-20 md:flex-row md:items-center md:justify-center md:mb-12">

                <div><button className='text-amber-400 text-lg font-semibold rounded-full px-6 py-3 border-2 border-yellow-400'>Pesquisa de satisfação</button></div>
                <div><button className='bg-blue-500 text-white text-lg font-semibold rounded-full px-6 py-3'>Fale conosco</button></div>

            </div>

        </section>
    )
}