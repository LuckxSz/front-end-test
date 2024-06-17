import face from '../../assets/face.png'
import insta from '../../assets/insta.png'
import yt from '../../assets/yt.png'

export const Footer = () => {
  return (
    <div className="flex flex-row justify-between uppercase text-center p-9 bg-[#2A2A2A] w-full mt-9 h-[325px] text-white">
      <div className="flex flex-col font-light items-start gap-y-3  ">
        <h1 className="mb-3 font-bold">Sobre nós</h1>
        <span className="text-[12px]">Conheça</span>
        <span className="text-[12px]">COMO COMPRAR</span>
        <span className="text-[12px]">Indicação e Desconto </span>
        <div className="flex flex-row gap-3 mt-11">
          <img src={face} alt="facebook" />
          <img src={insta} className='bg-black' alt="instagram" />
          <img src={yt} alt="youtube" />
        </div>
      </div>


      <div>
        <h1>Informações úteis </h1>
        <span>FALE CONOSCO</span>
      </div>

      <div>
        <h1>Formas de Pagamento</h1>
      </div>
      <h1>
        {/* Cadastre-se */}
      </h1>
    </div >
  )
}