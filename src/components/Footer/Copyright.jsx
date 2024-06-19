import logo from '../../assets/econversevtex.png'
export const Copyright = () => {
  return (
    <div className="w-full h-[80px] items-start flex flex-row justify-between  text-white border-t-[1px]  bg-[#2A2A2A;]">
      <div className="w-[700px] mt-1 p-[5px] ml-[px] h-[25px]">
        <span className=" text-[10px]">Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas imagens são de propriedade de seus respectivos donos.  <br /> É vedada a reprodução, total ou parcial, de qualquer conteúdo sem expressa autorização.</span>
      </div>
      <img className='p-6 mr-10' src={logo} alt="" />
    </div>
  )
}