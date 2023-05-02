import { Swiper } from "swiper/react"
import 'swiper/css'
import 'swiper/css/pagination'

interface FeedbackProps {
    nome: string
    texto: string
    rating: string
}

export const Feedbacks = ({nome, texto, rating}:FeedbackProps) => {

    return(
        <Swiper>
            <div className="bg-gray-100 h-96 px-2 py-10 rounded-md cursor-grab">
                <div className="bg-white border-2 border-blue-900 rounded-lg min-h-full">
                    <div className="flex flex-col items-center text-center">
                        <h4 className='text-xl font-semibold py-6'>{nome}</h4>
                        <p className="p-4">{texto}</p>
                        <img className='w-1/4 md:w-1/12' src={rating} alt="Nota do cliente"/>                        
                    </div>
                </div>
            </div>
        </Swiper>
    )
}