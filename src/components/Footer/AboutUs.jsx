import { useState } from 'react';
import face from '../../assets/face.png'
import insta from '../../assets/insta.png'
import yt from '../../assets/yt.png'

export const AboutUs = () => {
  const [clickedIndex, setClickedIndex] = useState(null)
  const handleClick = (index) => {
    setClickedIndex(index);
    // Aqui você pode adicionar a lógica para lidar com o clique no span
    // Por exemplo, você pode abrir um modal ou navegar para outra parte da página
  };

  const aboutUsInfo = {
    title: "Sobre nós",
    items: [
      "Conheça",
      "como comprar",
      "Indicação e Desconto"
    ],
    socialLinks: [
      { name: "Facebook", url: "https://github.com/LuckxSz", icon: face },
      { name: "Instagram", url: "https://github.com/LuckxSz", icon: insta },
      { name: "YouTube", url: "https://github.com/LuckxSz", icon: yt }
    ]
  };
  return (
    <div className="flex flex-col font-light ml-24 items-start gap-y-3">
      <h1 className="mb-3 font-bold">{aboutUsInfo.title}</h1>
      {aboutUsInfo.items.map((item, index) => (
        <span
          key={index}
          onClick={() => handleClick(index)}
          className={`cursor-pointer text-[12px] ${clickedIndex === index ? 'text-[#F71963]' : 'text-white'}`}
        >
          {item}
        </span>
      ))}
      <div className="flex flex-row gap-7 items-center cursor-pointer mt-11">
        {aboutUsInfo.socialLinks.map((link, index) => (
          <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
            <img src={link.icon} alt={link.name} className={link.name === "Instagram" ? 'bg-black' : ''} />
          </a>
        ))}
      </div>
    </div>
  );
};
