export const Products = () => {
  const products = [
    { text: 'Celular' },
    { text: 'Acessórios' },
    { text: 'Tablets' },
    { text: 'Notebooks' },
    { text: 'TVs' },
    { text: 'Ver todos' },
  ];

  return (
    <div className="flex justify-center gap-6 h-20 mt-5 border border-gray-300 items-center">
      {
        products.map((product, idx) => (
          <div key={idx} className="relative group ">
            <span className=" duration-300 transform hover:-translate-y-2 border border-gray-300 rounded  px-16 shadow-sm inline-block py-2 text-lg border-b-2 border-transparent group-hover:border-gray-400 transition cursor-pointer ease-out">
              {product.text}
            </span>
          </div>
        ))
      }
    </div >
  );
}
