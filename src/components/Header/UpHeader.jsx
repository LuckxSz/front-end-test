import shield from '../../assets/ShieldCheck.png'
import truck from '../../assets/Truck.png'
import card from '../../assets/CreditCard.png'

export const UpHeader = () => {
  return (
    <>

      <div className="flex flex-row gap-12 justify-center items-center w-[1280px] h-[32px] mt-2 m-auto  ">
        <div className='flex items-center'>
          <img className='mr-3' src={shield} alt="shield" /> <span className='text-[#9F9F9F]'>Compra <span className='text-[#F71963] font-bold'>100% segura</span> </span>
        </div>
        <div className='flex items-center'>
          <img className='mr-3' src={truck} alt="shield" /> <span className='text-[#9F9F9F]'> <span className='text-[#F71963] font-bold'>Frete grátis</span> acima de R$ 200</span>
        </div>  <div className='flex items-center'>
          <img className='mr-3' src={card} alt="shield" /> <span className='text-[#9F9F9F]'> <span className='text-[#F71963] font-bold'>Parcele</span> suas compras</span>
        </div>
      </div>
    </>
  )
}