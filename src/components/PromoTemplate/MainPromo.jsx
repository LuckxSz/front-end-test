
export const MainPromo = () => {
  return (
    <div className=" bg-custom-wallpaper  bg-cover bg-center h-[395px] w-auto">
      <div className="flex flex-col ml-9 bg-custom-gradient">
        <span className=" hover:text-black duration-700 text-[48px] mt-6 text-[rgb(255,255,255)] font-extrabold">  Venha conhecer nossas <br /> promoções</span>
        <span className=" hover:text-black duration-700   text-[36px] text-[#FFFFFF] font-extrabold">50% Off nos produtos </span>
      </div>
      <button className=" ml-11 mt-9 hover:scale-105  hover:bg-[#C6144F] duration-150  bg-[#F71963] text-[18px] text-[#FFFFFF]  w-[227px] h-[60px] rounded">Ver Produto</button>
    </div>
  );
};
