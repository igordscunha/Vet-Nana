import './App.css';
import { Banner } from './components/Banner';
import { Abvh } from './components/Abhv';
import { Razoes } from './components/Reasons';
import { Serviços } from './components/Services';
import { Feedbacks } from './components/Feedbacks';
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Scrollbar } from 'swiper';
import { Estatico, Estatico2, EstaticoFooter } from './components/Static';
import { Artigos } from './components/Articles';
import { Infos } from './components/Infos';
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import 'swiper/css/scrollbar'
import './shared/styles/swiperpointer.css'

function App() {

const feedbacks = [
    {
      nome: "Júlia Alvarenga",
      texto: "Eu simplesmente amo a Vet Nana! Foi a escolha mais assertiva que já fiz, eles cuidaram muito bem da minha gatinha e hoje em dia ela está ótima!",
      rating: "https://cdn-icons-png.flaticon.com/512/991/991986.png",
    },

    {
      nome: "Roberto Carlos",
      texto: "Estou muito satisfeito com o atendimento e profissionais da VetNana. Obrigado por cuidar tão bem do meu pet.",
      rating: "https://cdn-icons-png.flaticon.com/512/991/991986.png",
    },

    {
      nome: "Bruna Griphao",
      texto: "Uma das únicas clínicas que eu pude assistir a cirurgia do meu gato. Além do que eles servem pipoca para os tutores durante todo o dia. Lugar muito atencioso e aconchegante.",
      rating: "https://cdn-icons-png.flaticon.com/512/991/991986.png"
    },

    {
      nome: "Galvão Bueno",
      texto: "Meu cachorro e eu fomos muito bem atendidos pelos profissionais da VetNana. Gostei bastante da recepção.",
      rating: "https://cdn-icons-png.flaticon.com/512/991/991986.png"
    },

    {
      nome: "Julinho da Van",
      texto: "Eu como trabalhador do transporte público quase não tenho tempo e por isso curti demais a rapidez e agilidade no atendimento do meu pet.",
      rating: "https://cdn-icons-png.flaticon.com/512/991/991986.png"
    },

    {
      nome: "Pedro Raul",
      texto: "Obrigado VetNana. Meu pet fez uma cirurgia super complicada e foi tudo bem sucedido!",
      rating: "https://cdn-icons-png.flaticon.com/512/991/991986.png"
    }
]

const artigos = [
  {
    imagem: "/images/gatoartigo.jpg",
    categoria: "Cuidados",
    texto: "Tártaro em Cães e Gatos: os riscos da doença, como prevenir e tratar",
  },

  {
    imagem: "/images/cachorroartigo2.jpg",
    categoria: "Cuidados",
    texto: "Castração de gatos e cães: o que você precisa saber antes de optar pelo procedimento",
  },

  {
    imagem: "/images/cachorroartigo.jpg",
    categoria: "Prevenção",
    texto: "Insuficiencia renal em pets: o que é, quais os tipos e como prevenir",
  }
]

  return (
    <div className="App">

    <Banner/>
    <Abvh/>
    <Razoes/>
    <Serviços/>
    <Estatico/>
    <Swiper
      modules={[Scrollbar, Autoplay]}
      breakpoints={{640:{width: 1480, slidesPerView: 3}}}
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      scrollbar={{hide: true}}
      autoplay={{delay: 8000, disableOnInteraction: true}}
      centeredSlides={false}
    >

      {feedbacks.map((feedback) => (
        <SwiperSlide key={feedback.nome}>
          <Feedbacks 
          nome={feedback.nome}
          texto={feedback.texto}
          rating={feedback.rating}
        />
        </SwiperSlide>
      ))}    
    </Swiper>

    <Estatico2/>

    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={20}
      centeredSlides={true}
      pagination={{clickable: true}}
      autoplay={{delay: 2500, disableOnInteraction: false}}
    >
      {artigos.map((artigo) => (
        <SwiperSlide key={artigo.texto}>
          <Artigos
            imagem={artigo.imagem}
            categoria={artigo.categoria}
            texto={artigo.texto}
          />
        </SwiperSlide>
      ))}
    </Swiper>
    <Infos/>
    <EstaticoFooter/>

    </div>
  );
}

export default App;
