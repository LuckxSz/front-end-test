import logo from '../../assets/Logo.png'
import magnifyng from '../../assets/MagnifyingGlass.png'
import group from '../../assets/Group.png'
import heart from '../../assets/Heart.png'
import cart from '../../assets/ShoppingCart.png'
import profile from '../../assets/UserCircle.png'
export const Header = () => {
  return (
    <div className='border-y-2 mt-2 border-y-gray-200 py-4'>
      <div className='max-w-7xl mx-auto flex items-center gap-8 justify-center'>
        <div className='mr-16'>

          <img src={logo} alt="logo" />
        </div>
        <div className='flex relative'>
          <input
            type="text"
            placeholder='O que você está buscando?'
            className='w-[657px] h-[48px] rounded-[10px] bg-[#F6F5F2] pl-4 pr-14'
          />
          <img
            src={magnifyng}
            className='bg-[#F6F5F2] w-[30px] h-[30px] hover:scale-125 duration-150 absolute right-2 top-1/2 transform -translate-y-1/2'
            alt="magnifying"
          />
        </div>
        <div className='items-center ml-9 flex gap-8'>
          <img className='hover:scale-125 duration-100' src={group} alt="group" />
          <img className='hover:scale-125 duration-100' src={heart} alt="heart" />
          <img className='hover:scale-125 duration-100' src={cart} alt="cart" />
          <img className='hover:scale-125 duration-100' src={profile} alt="profile" />
        </div>
      </div>
    </div>
  );
};