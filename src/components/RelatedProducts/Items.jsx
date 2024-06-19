import arrowR from '../../assets/arrowR.png'
import arrowL from '../../assets/arrowL.png'
import phone from '../../assets/Grupo de máscara 20 1.png'
export const Items = () => {
  const items = [
    {
      photo: phone,
      name: "Lorem ipsum dolor sit amet, consectetur",
      offPrice: "30,90 ",
      price: "28,90",
      fees: "ou 2x de R$ 49,95 sem juros",
      shipping: "Frete grátis",
    },
    {
      photo: phone,
      name: "Lorem ipsum dolor sit amet, consectetur",
      offPrice: "30,90 ",
      price: "28,90",
      fees: "ou 2x de R$ 49,95 sem juros",
      shipping: "Frete grátis",
    },
    {
      photo: phone,
      name: "Lorem ipsum dolor sit amet, consectetur",
      offPrice: "30,90 ",
      price: "28,90",
      fees: "ou 2x de R$ 49,95 sem juros",
      shipping: "Frete grátis",
    },
    {
      photo: phone,
      name: "Lorem ipsum dolor sit amet, consectetur",
      offPrice: "30,90 ",
      price: "28,90",
      fees: "ou 2x de R$ 49,95 sem juros",
      shipping: "Frete grátis",
    },
    {
      photo: phone,
      name: "Lorem ipsum dolor sit amet, consectetur",
      offPrice: "30,90 ",
      price: "28,90",
      fees: "ou 2x de R$ 49,95 sem juros",
      shipping: "Frete grátis",
    }
  ]
  return (
    <>
      <div className='flex flex-wrap justify-evenly mt-4'>

        {items.map((item, idx) => (
          <div key={idx} className='max-w-[245px] shadow-xl flex flex-col items-center p-4 shadow-l rounded-lg '>
            <img src={item.photo} alt="phone" className=' h-auto mb-2' />
            <div className='flex flex-col'>
              <span className='font-medium'>{item.name}</span>
              <span className='text-[#f71963d2] font-semibold line-through'>R$ {item.offPrice}</span>
              <span className='text-black font-bold'>R$ {item.price}</span>
              <span className='text-sm'>{item.fees}</span>
              <span className='text-sm text-[#F71963d2]'>{item.shipping}</span>
            </div>

            <button className=' cursor-pointer hover:bg-[#C6144F]  hover:scale-95 duration-150 h-12 w-32 mt-3 bg-[#F71963] text-white font-semibold rounded-md'>Comprar</button>
          </div>
        ))}
        <div className=" relative w-full flex justify-around items-end cursor-pointer p-9">
          <img className="hover:scale-75 duration-100 w-6 " src={arrowL} alt="Left Arrow" />
          <img className="hover:scale-75 duration-100 w-6 " src={arrowR} alt="Right Arrow" />
        </div>

      </div>

    </>
  );
};