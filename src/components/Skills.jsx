import React from 'react';

import './css/skill.css'
import Certificates from './Certificates';

function Skills(){

  return(
 
    <section className="skillssection">
        <h2 className="head"data-aos="fade-down-left"><span>Skills</span></h2> 
        {/* <h3 className='subhead'>Technical <span>Skills</span></h3> */}
      
      <div className="division1">
        
          <div className="tagdiv">
              <div className="cont1">
                   <div className="subtagdiv">
                        Programming Language
                   </div>
                <div className="imgdiv" data-aos="fade-right">
                  <div className="item1">
                       <img src="/python.png" alt="pylogo" className='logoimg' />
                      <h5 className='title'>Python</h5>
                  </div>
                   
                </div>
              </div>
              <div className="cont1">
                   <div className="subtagdiv">
                        Frontend Technologies
                </div>
                <div className="imgdiv"data-aos="fade-right">
                   <div className="item1">
                        <img src="/html-5.png" alt="htmllogo" className='logoimg img-fluid' />
                      <h5 className='title'>HTML5</h5>
                   </div>
                    <div className="item1">
                        <img src="/css-3.png" alt="htmllogo" className='logoimg img-fluid' />
                      <h5 className='title'>CSS3</h5>
                   </div>
                   <div className="item1">
                        <img src="\icons8-javascript-48.png" alt="htmllogo" className='logoimg img-fluid' />
                      <h5 className='title'>Javascript</h5>
                   </div>
                       
                </div>
              </div>
               <div className="cont1">
                   <div className="subtagdiv">
                        Libraries/Framework
                </div>
                <div className="imgdiv"data-aos="fade-right">
                  <div className="item1">
                      <img src="/boostrap.png" alt="" className='logoimg'/>
                      <h5 className="title">Bootstrap</h5>
                  </div>
                   <div className="item1">
                    <img src="/react.png"          alt=""className='logoimg' />
                    <h5 className="title">React Js</h5>
                   </div>
                    <div className="item1">
                    <img src="/dj.png"     alt=""className='logoimg' />
                    <h5 className="title">Django</h5>
                   </div>
                </div>
              </div>
               <div className="cont1">
                   <div className="subtagdiv">
                        Tools/Platforms
                </div>
                <div className="imgdiv tooldiv"data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
                  <div className="item1">
                    <img src="\icons8-visual-studio-code-2019-48.png" alt="pylogo" className='logoimg' />
                    <h5 className="title">VS Code</h5>

                  </div>
                  <div className="item1">
                    <img src="/meta.jpg" alt="pylogo" className='logoimg meta' />
                    <h5 className="title">Meta Spark Studio</h5>

                  </div>
                  <div className="item1">
                    <img src="/github.png" alt="pylogo" className='logoimg' />
                    <h5 className="title">Github</h5>

                  </div>
         
                 
                 
                      
                </div>
                
              </div>
               <div className="cont1">
                   <div className="subtagdiv db">
                        Databases
                </div>
                <div className="imgdiv" data-aos="fade-right">
                  <div className="item1">
                    <img src="/mysql.png" alt="pylogo" className='logoimg' />
                    <h5 className="title">My Sql</h5>

                  </div>
              </div>
             
              
           </div>
           
      </div>
     
      </div>
  
      <br /><br />
    
         <Certificates/>
        
    </section>     
         


   
   )
}
export default Skills;