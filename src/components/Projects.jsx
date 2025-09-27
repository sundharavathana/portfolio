import './css/project.css'
function Projects(){
    return(
        <section className="projects">
            <div className="project-row">
                <div className="project-col" data-aos="fade-up"
     data-aos-duration="3000">
                    <a href="https://sundharas-cafe.netlify.app/"target="_blank" rel="noopener noreferrer"><img src="/cafe.png" alt="" className='cafe'/></a>
                   
                </div>
                 <div className="project-col" data-aos="fade-up"
     data-aos-duration="3000">
                    <a href="https://sundhara-todolist.netlify.app/"target="_blank" rel="noopener noreferrer"><img src="/todo.png" alt="" /></a>
                </div>
                 <div className="project-col" data-aos="fade-up"
     data-aos-duration="3000">
                    <a href="https://sundhara-youtubeclone.netlify.app/"target="_blank" rel="noopener noreferrer"><img src="/utube.png" alt="" /></a>
                    
                </div>
            </div>
            <div className="project-row">
                <div className="project-col" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
                    <img src="/paypal.png" alt="" />
                </div>
                 <div className="project-col"data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
                   <a href="https://sundhara-library-management.netlify.app/" target="_blank" rel="noopener noreferrer"> <img src="/clg.png" alt="" /></a>
                </div>
            </div>
            
        </section>
    )
}
export default Projects;