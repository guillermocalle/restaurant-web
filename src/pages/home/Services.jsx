import React from "react";

const serviceList = [
  {
    id: 1,
    title: "Servicio de eventos",
    des: "Deleite a sus invitados con nuestros sabores y presentación",
    image: "/public/images/home/services/icon1.png",
  },
  {
    id: 2,
    title: "Entrega rapida",
    des: "Le entregamos su pedido puntualmente en la puerta de su casa",
    image: "/public/images/home/services/icon2.png",
  },
  {
    id: 3,
    title: "Pedidos en linea",
    des: "Explore el menú y haga su pedido fácilmente a través de Pedidos en línea",
    image: "/public/images/home/services/icon3.png",
  },
  {
    id: 4,
    title: "Tarjetas de regalo",
    des: "Regale una cena excepcional con las tarjetas regalo",
    image: "/public/images/home/services/icon4.png",
  },
];

const Services = () => {
  return (
    <div className="section-container my-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2">
          <div className="text-left md:w-4/5">
            <p className="subtitle">Nuestra historia y servicios</p>
            <h2 className="title">
              Nuestro viaje culinario y nuestros servicios
            </h2>
            <p className="my-5 text-secondary leading-[30px]">
              Fundamentados en la pasión, forjamos experiencias gastronómicas
              inolvidables al brindar servicios excepcionales. Fusionamos el
              arte culinario con una hospitalidad cálida, creando así momentos
              que perduran en la memoria de quienes nos eligen.
            </p>

            <button className="btn bg-orange text-white px-8 py-3 rounded-full">
              Explore
            </button>
          </div>
        </div>

        <div className="md:w-1/2">
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-8 items-center">
            {serviceList.map((service) => (
              <div
                key={service.id}
                className="shadow-md rounded-sm py-5 px-4 text-center space-y-2 text-orange cursor-pointer hover:border-indigo-600 transition-all duration-200 hover:border"
              >
                <img src={service.image} alt="" className="mx-auto" />
                <h5 className="pt-3 font-semibold">{service.title}</h5>
                <p className="text-secondary">{service.des}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
