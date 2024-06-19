import logo from '../../assets/Logo.png'
export const Brands = () => {
  return (
    <div>
      <div className="flex justify-center mt-20">
        <div className="group relative inline-block">
          <h1 className="text-[#F71963] text-[30px] font-bold mb-1">Navegue por Marcas</h1>
          <div className="absolute left-0 bottom-0 w-1/2 h-0.5 bg-[#F71963] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></div>
          <div className="absolute right-0 bottom-0 w-1/2 h-0.5 bg-[#F71963] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-right"></div>
        </div>
      </div>
      <div className="flex justify-center gap-7 items-center mb-3">
        <div className="w-44  h-44 rounded-full bg-white shadow-lg flex justify-center items-center">
          <img src={logo} alt="logo" className="w-36 h-36 object-contain" />
        </div>
        <div className="w-44 h-44 rounded-full bg-white shadow-lg flex justify-center items-center">
          <img src={logo} alt="logo" className="w-36 h-36 object-contain" />
        </div>
        <div className="w-44 h-44 rounded-full bg-white shadow-lg flex justify-center items-center">
          <img src={logo} alt="logo" className="w-36 h-36 object-contain" />
        </div>
        <div className="w-44 h-44 rounded-full bg-white shadow-lg flex justify-center items-center">
          <img src={logo} alt="logo" className="w-36 h-36 object-contain" />
        </div>
        <div className="w-44 h-44 rounded-full bg-white shadow-lg flex justify-center items-center">
          <img src={logo} alt="logo" className="w-36 h-36 object-contain" />
        </div>
      </div>

    </div>
  )
}