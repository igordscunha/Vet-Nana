import { ReactElement } from "react"

interface BotaoProps {
    children: ReactElement | string
}

export const Botao = ({children}:BotaoProps) => {
    return(
        <div className="flex justify-center">
            <div className='bg-lime-400 text-white text-lg font-semibold rounded-full px-5 py-2'>
                <button>
                    {children}
                </button>
            </div>
        </div>
    )
}