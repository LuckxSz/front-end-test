import { Items } from "./Items";
import { Products } from "./Products";

export const RelatedProducts = () => {
  return (
    <>
      <div className="flex justify-center mt-20">
        <div className="group relative inline-block">
          <h1 className="text-[#F71963] text-[30px] font-bold">Navegue por Marcas</h1>
          <div className="absolute left-0 bottom-0 w-1/2 h-0.5 bg-[#F71963] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></div>
          <div className="absolute right-0 bottom-0 w-1/2 h-0.5 bg-[#F71963] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-right"></div>
        </div>
      </div>
      <Products />
      <Items />
    </>
  );
}
