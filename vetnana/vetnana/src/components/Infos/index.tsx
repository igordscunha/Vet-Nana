import { informacoes } from '../../shared/components/infos'

export const Infos = () => {
    
    return(
        <section className="bg-gray-100 flex flex-col gap-10 text-left p-10 text-stone-600 md:flex-row md:flex-wrap md:justify-center">
            <div className='md:w-1/5'>
                <h3 className='text-xl font-medium py-4'>Navegue</h3>
                <ul>
                    <a href=""><li className="md: hover:text-neutral-300">SOBRE</li></a>
                    <a href=""><li className="md: hover:text-neutral-300">SERVIÇOS</li></a>
                    <a href=""><li className="md: hover:text-neutral-300">BLOG</li></a>
                    <a href=""><li className="md: hover:text-neutral-300">CONTATO</li></a>
                </ul>
            </div>

            <div className='md:w-1/5'>
                <h3 className='text-xl font-medium py-4'>Contato</h3>
                <p>{informacoes.numero1}</p>
                <p>{informacoes.numero2}</p>
                <p>{informacoes.numero3}</p>
                <p>{informacoes.email}</p>
                <p>{informacoes.endereco}</p>
                <p>{informacoes.cidade}</p>
                <p>{informacoes.cep}</p>
            </div>

            <div className="md:w-1/5">
                <h3 className='text-xl font-medium py-4'>Funcionamento</h3>
                <p>Seg a sex &#128073; 8h às 22h</p>
                <p>Sab, dom e feriados &#128073; 8h às 20h</p>
                <p className="text-lg py-2">&#128073; Atendimento 24 horas aos clientes cadastrados mediante agendamento prévio.</p>
            </div>

            <div className='md:w-1/5'>
                <h3 className='text-xl font-medium py-4'>Pagamento</h3>
                <p>&#128073; Aceitamos todas as principais bandeiras de cartão de crédito.</p>
                <p>&#128073; Parcelamos em até 10x sem juros.</p>
            </div>
        </section>
    )
}