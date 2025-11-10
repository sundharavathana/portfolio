import './css/certificate.css'
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import jsimg from "/jscertificate.png";
import pyimg from "/pycertificate.png";
import topcoder from "/jscertificate.png";
import intern from "/intern.jpg";



function Certificates() {
  const cert_vals = [
    {
      name: "JS BASICS",
      img: jsimg,
      cont: "It covers topics like, Functions, Currying, Hoisting, Scope, Inheritance, Events and Error Handling."

    },
    {
      name: "PYTHON BASICS",
      img: pyimg,
      cont: "It covers topics like Scalar Types, Operators and Control Flow, Strings, Collections and Iteration, Modularity, Objects and Types and Classes"

    },
    {
      name: "python fullstack development course",
      img: topcoder,
      cont: "completed python fullstack course from apr-sep"

    },
   
    
    
   
    {
      name: "INTERNSHIP",
      img: intern,
      cont: " Interned in Full-Stack Development"

    }
  ];

 
  return (
    <section className="certifications">
      <h2 className="heading" data-aos="zoom-out-down">
        <span>Certifications</span>

      </h2>


      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={800}
        slidesPerView={1}
        navigation
        centeredSlides={true}
        pagination={{ clickable: true }}
        className='cert-swiper' data-aos="zoom-in-left">

       {cert_vals.map((item, index) => (
          <SwiperSlide key={index}>
            <Dynamic name={item.name} img={item.img} cont={item.cont} />
          </SwiperSlide>
        ))}
        
      </Swiper>
     






    </section>
  );
}
export default Certificates;
// sub function
function Dynamic({name, img, cont}) {
  return(
     
    <div className="card">
      <div className="card-body">

      <h1>{name}</h1>
      <img src={img} />
      <p>{cont}</p>


    </div>
    </div>
 
  )
  
}

