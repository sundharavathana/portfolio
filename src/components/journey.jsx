import './css/education.css';

function Journey() {
  const education = [
    {
      year: "2021-2025",
      deg: "Bachelor of Engineering",
      ins: "Shanmuganathan Engineering College, Thirumayam",
      cgpa: "CGPA: 7.8"
    },
    {
      year: "2019-2020",
      deg: "HSC-12th",
      ins: "Sri Saraswathi Higher Secondary School, Konapet",
      cgpa: "Percentage: 86%"
    },
    {
      year: "2017-2018",
      deg: "SSLC-10th",
      ins: "Sri Saraswathi Higher Secondary School, Konapet",
      cgpa: "Percentage: 84%"
    }
  ];

  const experiences = [
    {
    
      year: "July 2024 – Aug 2024",
      role: "Full-stack web development internship",
      company: "Accent Techno Soft | Coimbatore",
      tasks: [
        "Successfully completed intermediate full-stack web development training at Accent Techno Soft.",
        "Acquired practical skills in HTML, CSS, JavaScript, and MySQL technologies."
      ]
    },
  

  {
    
    year:"Mar-Sep",
    role:"Python Fullstack development course",
    company:"Witspire Solutions",
    tasks:["Completed a comprehensive Python Fullstack Development course, gaining hands-on experience in front-end technologies including HTML, CSS, Bootstrap, JavaScript, and ReactJS.",
"Developed multiple fullstack projects implementing back-end functionality using Python, Django, and MySQL, demonstrating end-to-end web application development skills"]
  }];

  return (
    <section className="education">
      <h2 className="heading" data-aos="zoom-out-down">
        My <span>Journey</span>
      </h2>

      <div className="education-row row">
        {/* Education column */}
        <div className="education-column col-12 col-md-6" data-aos="fade-right">
          <h3 className="title">Education</h3>
          <div className="education-box">
            {education.map((item, index) => (
              <EducationItem
                key={index}
                year={item.year}
                deg={item.deg}
                ins={item.ins}
                cgpa={item.cgpa}
              />
            ))}
          </div>
        </div>

        {/* Experience column */}
      
        <div className="education-column col-12 col-md-6" data-aos="fade-left">
        <h3 className='title'>Learning Experience</h3>
          <div className="education-box">
            {experiences.map((exp, index) => (
              <ExperienceItem
                key={index}
                title={exp.title}
                year={exp.year}
                role={exp.role}
                company={exp.company}
                tasks={exp.tasks}
              />
              
            ))}
            
          </div>
         
          
        </div>
      
        
      </div>
     
    </section>
  );
}

/* Sub-component for Education */
function EducationItem({year, deg, ins, cgpa }) {
  return (
    
 
    <div className="education-content">
      <div className="content">
        <div className="year">{year}</div>
        <h3>{deg}</h3>
        <p>{ins}</p>
        <p>{cgpa}</p>
      </div>
    </div>
  
  );
}

/* Sub-component for Experience */
function ExperienceItem({year, role, company, tasks }) {
  return (
    <>
      
    <div className="education-content">
      <div className="content">
        <div className="year">
          <i className="fa-solid fa-calendar-days"></i> {year}
        </div>
        <h3>{role}</h3>
        <p>{company}</p>
        <ul>
          {tasks.map((task, i) => (
            <li key={i}>{task}</li>
          ))}
        </ul>
      </div>
    </div>
    </>
  );
}

// function CourseItem({cname,ins,duration,year}){
//   return(
//      <div className="education-content">
//       <div className="content">
//         <div className="year">
//           <i className="fa-solid fa-calendar-days"></i> {year}
//         </div>
//         <h3>{cname}</h3>
//         <p>{ins}</p>
//         <p>{duration}</p>
//       </div>
//     </div>
//   );
// }

export default Journey;
