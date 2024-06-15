import { Items } from "./Items";
import { Products } from "./Products";

export const RelatedProducts = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-7 group">
        <div className="flex items-center w-full max-w-4xl">
          <div className="relative flex-grow">
            <div className="border-t  border-[#F71963] transform transition-transform duration-300 ease-out origin-left group-hover:scale-x-100 scale-x-0"></div>
          </div>
          <h1 className="mx-4 text-[#F71963] text-[30px] font-bold">Produtos relacionados</h1>
          <div className="relative flex-grow">
            <div className="border-t  border-[#F71963] transform transition-transform duration-300 ease-out origin-right group-hover:scale-x-100 scale-x-0"></div>
          </div>
        </div>
      </div>
      <Products />
      <Items />
    </>
  );
}
