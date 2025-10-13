import './css/project.css';

function Projects() {
  const projectData = [
    {
      img: '/bldbnk.png',
      link: 'https://sundhara-library-management.netlify.app/',
      title: 'Bloodbank Website',
      tech: 'HTML, CSS, Bootstrap, JS, Django, MySQL',
    },
    {
      img: '/portfolio.png',
      link: 'https://sundharavathana-portfolio.netlify.app/',
      title: 'Portfolio Website',
      tech: 'HTML, CSS, Bootstrap, Javascript, React',
    },
    {
      img: '/cafe.png',
      link: 'https://sundharas-cafe.netlify.app/',
      title: "Sundhara's Café",
      tech: 'HTML, CSS, Bootstrap',
    },
    {
      img: '/todo.png',
      link: 'https://sundhara-todolist.netlify.app/',
      title: 'To-Do List App',
      tech: 'HTML, CSS, Javascript',
    },
    {
      img: '/utube.png',
      link: 'https://sundhara-youtubeclone.netlify.app/',
      title: 'YouTube Clone',
      tech: 'HTML, CSS',
    },
    {
      img: '/paypal.png',
      link: '#',
      title: 'PayPal UI Clone',
      tech: 'HTML, CSS, React',
    },
    {
      img: '/clg.png',
      link: 'https://sundhara-library-management.netlify.app/',
      title: 'Library Management',
      tech: 'Raw HTML',
    },
  ];

  return (
    <section className="projects">
      <h2 className="heading" data-aos="zoom-out-down">
        <span>Projects</span>
      </h2>

      {projectData.map((project, index) => (
        <div className="project-card col-md-4 col-12" key={index} data-aos="fade-up">
          <img src={project.img} alt={project.title} />
          <div className="project-info">
            <h3>{project.title}</h3>
            <p>{project.tech}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <button className="view-btn">View Project</button>
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Projects;
