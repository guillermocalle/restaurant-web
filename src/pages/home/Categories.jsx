import React from "react";

const categoryItems = [
  {
    id: 1,
    title: "Platos",
    des: "(10 variedades)",
    image: "/public/images/home/category/img1.png",
  },
  {
    id: 1,
    title: "Sopas",
    des: "(5 variedades)",
    image: "/public/images/home/category/img1.png",
  },
  {
    id: 1,
    title: "Postres",
    des: "(5 variedades)",
    image: "/public/images/home/category/img1.png",
  },
  {
    id: 1,
    title: "Bebidas",
    des: "(6 variedades)",
    image: "/public/images/home/category/img1.png",
  },
];

const Categories = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 py-16">
      <div className="text-center">
        <p className="subtitle">Lo que más disfrutan nuestros clientes</p>
        <h2 className="title">Categorias Populares</h2>
      </div>

      {/* category card */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-8 justify-around items-center mt-12">
        {categoryItems.map((item, i) => (
          <div
            key={i}
            className="shadow-lg rounded-md bg-white py-6 px-5 w-64 mx-auto text-center cursor-pointer hover:-translate-y-4 duration-300 transition-all"
          >
            <div className="flex w-full mx-auto items-center justify-center">
              <img
                src={item.image}
                alt=""
                className="bg-[#FEE8B0] p-5 rounded-full w-28 h-28"
              />
            </div>
            <div className="mt-5 space-y-1">
              <h5>{item.title}</h5>
              <p>{item.des}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
