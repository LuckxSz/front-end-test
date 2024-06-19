
import { AboutUs } from './AboutUs';
import { Card } from './Card';
import { Copyright } from './Copyright';

import { Infos } from './Infos';
import { PaymentMethods } from './PaymentMethods';

export const Footer = () => {


  return (
    <>
      <div className="flex flex-row justify-around mt-5 p-5 uppercase text-center bg-[#2A2A2A]  h-[325px] text-white">
        <AboutUs />
        <Infos />
        <PaymentMethods />
        <Card />



      </div>
      <Copyright />
    </>
  )
}