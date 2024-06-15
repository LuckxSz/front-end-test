import crown from '../../assets/CrownSimple.png'
export const DownHeader = () => {
  return (
    <div className='flex items-center mt-1 mb-2  p-2 place-items-center justify-center gap-[80px]'>
      <span className=' hover:scale-110 duration-150 text-[#9F9F9F]'>Todas Categorias</span>
      <span className=' hover:scale-110  duration-150 text-[#9F9F9F]'>Supermercado</span>
      <span className=' hover:scale-110 duration-150 text-[#9F9F9F]'>Livros</span>
      <span className='  hover:scale-110  duration-150 text-[#9F9F9F]'>Moda</span>
      <span className=' hover:scale-110  duration-150 text-[#9F9F9F]'>Lançamentos</span>
      <span className=' hover:scale-110  duration-150 text-[#F71963]'> Ofertas do dia</span>
      <div className='  hover:scale-110  duration-150  flex text-[#9F9F9F]'>
        <img src={crown} alt="" />
        <span>Assinatura</span>
      </div>



    </div>
  )
}