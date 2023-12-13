import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ item }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <Link to={`/menu/${item._id}`}>
        <figure>
          <img
            src={item.image}
            alt=""
            className="hover:scale-105 transition-all duration-200 md:h-72"
          />
        </figure>
      </Link>
      <div className="card-body">
        <Link to={`/menu/${item._id}`}>
          <h2 className="card-title">{item.name}</h2>
        </Link>
        <p>Descripcion del plato</p>
        <div className="card-actions justify-between items-center mt-2">
          <h5 className="font-semibold">
            <span className="text-sm text-red">Bs</span> {item.price}
          </h5>
          <button className="btn bg-orange text-white">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
