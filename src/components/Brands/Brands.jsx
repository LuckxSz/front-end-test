import logo from '../../assets/Logo.png'
export const Brands = () => {
  return (
    <div>
      <div className="flex justify-center mt-20">
        <h1 className="text-[#F71963] text-[30px] font-bold">Navegue por Marcas</h1>
      </div>
      <div className="bg-red rounded-full ">
        <img src={logo} alt="logo" />
      </div>
    </div>
  )
}