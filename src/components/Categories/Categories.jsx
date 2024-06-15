import tech from '../../assets/monitorar-tablet-e-smartohone 1.png';
import market from '../../assets/supermercados 1.png';
import drink from '../../assets/whiskey.png';
import tools from '../../assets/ferramentas 1.png';
import healthy from '../../assets/cuidados-de-saude 1.png';
import corrida from '../../assets/corrida 1.png';
import moda from '../../assets/moda 1.png';
import { useState } from 'react';

export const Categories = () => {
  const [active, setActive] = useState(null)
  const categories = [
    { img: tech, text: 'Tech', color: '#F71963' },
    { img: market, text: 'Supermercados', color: 'black' },
    { img: drink, text: 'Whiskey', color: 'black' },
    { img: tools, text: 'Ferramentas', color: 'black' },
    { img: healthy, text: 'Cuidados de Saúde', color: 'black' },
    { img: corrida, text: 'Corrida', color: 'black' },
    { img: moda, text: 'Moda', color: 'black' },
  ];

  return (
    <div className='flex flex-row flex-wrap items-center justify-center gap-16 mt-8'>
      {categories.map((category, index) => (
        <div key={index} className='flex flex-col items-center  rounded'>
          <div className={`rounded-xl hover:bg-[#1f1e1e15] duration-300 transform hover:-translate-y-2 text-${category.color} p-7 mb-2`}>
            <img onClick={() => setActive(active)} className='hover:scale-105 duration-150 h-11' src={category.img} alt={category.text} />
          </div>
          <p style={{ color: category.color }}>{category.text}</p>
        </div>
      ))}
    </div>
  );
};
