import { useState } from "react";

export const Infos = () => {
  const [clickedIndex, setClickedIndex] = useState(null);
  const spansData = [
    { text: "fale conosco" },
    { text: "dúvidas" },
    { text: "prazos de entrega" },
    { text: "formas de pagamento" },
    { text: "política de privacidade" },
    { text: "trocas e devolução" }
  ];

  const handleClick = (index) => {
    setClickedIndex(index);
    // Aqui você pode adicionar a lógica para lidar com o clique no span
    // Por exemplo, você pode abrir um modal ou navegar para outra parte da página
  };
  return (
    <div>
      <h1 className="mb-3 font-bold">Informações úteis </h1>
      <div className="links-container items-start flex flex-col gap-y-2 ">
        {spansData.map((item, index) => (
          <span
            key={index}
            className={`cursor-pointer text-[12px] ${clickedIndex === index ? 'text-[#F71963]' : 'text-white'}`}
            onClick={() => handleClick(index)}
          >
            {item.text}
          </span>
        ))}
      </div>
    </div>

  )
}