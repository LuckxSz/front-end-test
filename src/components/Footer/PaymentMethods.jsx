import alelo from '../../assets/payments/alelo.png'
import amex from '../../assets/payments/amex.png'
import dinners from '../../assets/payments/dinners.png'
import elo from '../../assets/payments/elo.png'
import ifood from '../../assets/payments/ifood.png'
import mastercard from '../../assets/payments/mastercard.png'
import pix from '../../assets/payments/pix.png'
import sodexo from '../../assets/payments/sodexo.png'
import ticket from '../../assets/payments/ticket.png'
import visa from '../../assets/payments/visa.png'

const paymentMethods = {
  alelo: alelo,
  amex: amex,
  dinners: dinners,
  elo: elo,
  ifood: ifood,
  mastercard: mastercard,
  pix: pix,
  sodexo: sodexo,
  ticket: ticket,
  visa: visa
};

export const PaymentMethods = () => {
  return (


    <div>
      <h1 className="mb-3 font-bold">FORMAS DE PAGAMENTO</h1>

      <div className='grid grid-cols-3 gap-4 justify-center'>
        {Object.keys(paymentMethods).map((method, index) => (
          <img key={index} src={paymentMethods[method]} alt={method} />
        ))}
      </div>
    </div>
  );
};