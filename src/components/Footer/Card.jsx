export const Card = () => {
  return (
    <div className=" ml-12 w-[380px] p-6 flex-col flex  h-[230px] text-[#3F3F40] bg-white rounded-xl">
      <h1 className="text-[18px]">Cadastre-se e Receba nossas
        <span className="font-bold"> novidades e promoções</span></h1>
      <span className=" mt-4 text-[12px]">Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia lorem ipsum</span>
      <div className="flex flex-row justify-center text-center p-3 gap-1">
        <input className="text-center border border-black rounded-xl w-[250px] h-[35px]" type="text" placeholder="Seu e-mail" />
        <button className="bg-[#F71963] hover:bg-[#C6144F]  hover:scale-95 duration-150 text-[15px] text-white  p-3 w-[60px] h-[35px] flex items-center justify-center rounded-2xl">OK</button>
      </div>
    </div>
  )
}