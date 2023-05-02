// import { motion } from "framer-motion"
// import './Feedback.css'



// interface FeedbackProps {
//     nome: string
//     texto: string
//     rating: string
// }

// export const Feedback = ({nome, texto, rating}:FeedbackProps) => {


//     return (
//         <section className="bg-gray-200 box-border flex flex-nowrap justify-center w-full">
//             {/* <div><h2 className="text-3xl py-10 font-semibold">Tutores felizes &#128525;</h2></div> */}

//             <motion.div className="flex flex-nowrap bg-white h-80 p-2 rounded-md cursor-grab w-4/5" drag="x" whileTap={{cursor: "grabbing"}}>
//                 <motion.div className="flex flex-nowrap border-4 border-gray-900 w-full">
                    
//                     <motion.div className="flex flex-col justify-center items-center text-center w-full" key={nome}>                              
//                         <h5 className='text-xl font-semibold py-6'>{nome}</h5>
//                         <p className="p-4">{texto}</p>
//                         <img src={rating} alt="Feedback Cliente" width="25%"></img>
//                     </motion.div>                    

//                 </motion.div>
//             </motion.div>

//         </section>
//     )
// }



import { Swiper, SwiperProps } from "swiper/react"
import 'swiper/css'
import { ReactNode } from "react"

interface CarouselProps {
    settings: SwiperProps
    children: ReactNode
}

export const Carousel = ({settings, children}:CarouselProps) => {
    return(
        <div>
            <Swiper {...settings}>
                {children}
            </Swiper>
        </div>
    )
}