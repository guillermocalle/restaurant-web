import React from "react";
import { FaStar } from "react-icons/fa6";

const Testimonials = () => {
  return (
    <div className="section-container">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2">
          <img
            src="/images/home/testimonials/testimonials.png"
            alt=""
            className="rounded-2xl"
          />
        </div>
        <div className="md:w-1/2">
          <div className="text-left md:w-4/5">
            <p className="subtitle">Testimonios</p>
            <h2 className="title">
              Lo que dicen nuestros clientes de nosotros
            </h2>
            <blockquote className="my-5 text-secondary leading-[30px]">
              Tuve una experiencia simplemente perfecta. La atención al detalle
              en la presentación y el servicio impecable hicieron que mi cena
              fuera extraordinaria. ¡Definitivamente, un lugar que recomiendo
              siempre para degustar los mejores platos!
            </blockquote>

            <div className="flex items-center gap-4 flex-wrap">
              <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                <div className="avatar">
                  <div className="w-12">
                    <img src="/images/home/testimonials/testimonial1.png" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src="/images/home/testimonials/testimonial2.png" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src="/images/home/testimonials/testimonial2.png" />
                  </div>
                </div>
                <div className="avatar placeholder">
                  <div className="w-12 bg-neutral text-neutral-content">
                    <span>+99</span>
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <h5 className="text-lg font-semibold">Reseñas de clientes</h5>
                <div className="flex items-center gap-2">
                  <FaStar className="text-yellow-400" />
                  <span className="font-medium">4.9</span>
                  <span className="text-[#807E7E]">(3.5k Reseñas)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
