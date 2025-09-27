import React from 'react';
import htmllogo from '/html.png';
import csslogo from '/css.png';
import bootstraplogo from '/bootstrap.jpg';
import jslogo from '/js.png';
import reactlogo from '/react.png';
import pylogo from '/py.png'
import './css/skill.css'


function Secondskills({img, title}){
  return(
    <div className="card h-100 imgcard">
      <div className="card-img-top services-img">
         <img src={img} alt="img" className="img-fluid"/>
         <h5 className="card-title">{title}</h5>
      </div>
    </div>
  )

}

export function Skillsecond(){
  const second=[
    {
      img:htmllogo,
      title:"HTML5"

    },
     {
      img:csslogo,
      title:"CSS3"

    },
     {
      img:bootstraplogo,
      title:"BOOTSTRAP5"

    },
      {
      img:jslogo,
      title:"JAVASCRIPT"

    },
      {
      img:reactlogo,
      title:"REACT JS"

    },
      {
      img:pylogo,
      title:"CORE PYTHON"

    }

  ]
  return(  
    <div className="row g-4">
          {second.map((item,index)=>(
            <div className="col-lg-4 col-md-6 skilldiv" key={index}>
              <Secondskills 
                  img={item.img}
                  title={item.title}
               />
            </div>
          )

          )}
        </div>
  )
 
}


function Skills(){
   return(
 
     <section className="skills my-4">
        <h2 className="heading"data-aos="zoom-out-down">My <span>Skills</span></h2> 
        <Skillsecond/>      
       </section>     
         


   
   )
}
export default Skills;


// Home.jsx old content
// import React from "react";
// import { useState } from "react";
// import { useEffect } from "react";
// import "boxicons/css/boxicons.min.css";
// import './css/home.css';
// import AOS from 'aos';
// import "aos/dist/aos.css";
// import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
// import Contact from "./contact";

// function Home() {
//     useEffect(()=>{
//     AOS.init({duration:1000, once:true});
//     AOS.refresh();
//   },[])
//     return (

//         <section>
//             <div className="Home">
//                 <div className="home-content"data-aos="fade-down">
//                     <h1>Hi, I'm <span>Sundharavathana</span></h1>
//                     <div className="text-animate">
//                         <h3>Front-end Developer</h3>
//                     </div>
//                     <p>Aspiring Front-End Developer with a strong foundation in web technologies including HTML, CSS, Bootstrap, JavaScript Quick learner with a passion for building user-friendly, responsive web applications. Experienced in team-based academic projects and personal development work. Eager to contribute to innovative development teams and grow in a fast-paced tech environment.</p>
//                     <div className="btn-box">
//                         <a href="\sundharavathanaresume.pdf" download="sundharavathana_Resume.pdf">Resume</a>
//                             <Link to="/Contact">Contact Me</Link>
                       
//                     </div>
//                 </div>
//                 <div className="profile">
//                     <img src="/lalpark.jpeg" alt="" className="pic" />
//                     <span className="circle-spin"></span>
//                 </div>

//             </div>
//             <div className="links" data-aos="fade-right"> 
//                 <a href="https://www.linkedin.com/in/sundharavathana0608"target="_blank" rel="noopener noreferrer"><i className='bx bxl-linkedin linkicon'  ></i>  </a>
//                 <a href="https://www.github.com/sundharavathana"target="_blank" rel="noopener noreferrer"><i className='bx  bxl-github linkicon'  ></i> </a>
//                 <a href="https://www.hackerrank.com/svsundhara2004"target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-hackerrank linkicon"></i></a>
//             </div>
//               <footer className="fixed-bottom bg-info">
//                 <div className="ftr d-flex justify-content-center align-items-center ">
//                     <p className="text-muted mt-2">All copy rights are deserved and designed by SUNDHARAVATHANA</p>
//                 </div>
                
//             </footer> 
           
//         </section>
        
        
        
        
        

//     )
// }
// export default Home;