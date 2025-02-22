import { Container } from "react-bootstrap";
import { useRef } from "react";
import { useInView } from "framer-motion";
import CityRatsImg from "../assets/img/CityRats.png";
import CactiSucImg from "../assets/img/CactiSucculentKCH.png"; 
import BusinessStrategyWeb from "../assets/img/BusinessStrategyWebsite.png";

// ProjectCard component
const ProjectCard = ({ title, description, imgUrl, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-25% 0px" });

  return (
    <div 
      ref={ref}
      className={`project-card ${isInView ? 'in-view' : ''}`}
      style={{
        transitionDelay: `${index * 0.1}s`
      }}
    >
      <div className="image-container">
        <img src={imgUrl} alt={title} />
      </div>
      <div className="content-container">
        <h3>{title}</h3>
        <ul className="features-list">
          {description.map((item, idx) => (
            <li key={idx} className="feature-item">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Projects component
export const Projects = () => {
  // Define projects array here
  const projects = [
    {
      title: "E-Commerce Website",
      description: [
        "Laravel & PHP development",
        "E-commerce platform for cacti business",
        "Secure payment integration",
        "Inventory management system"
      ],
      imgUrl: CactiSucImg,
    },
    {
      title: "CITY Rats Systems",
      description: [
        "3D interactive mapping system",
        "Real-time data visualization",
        "Custom management interface",
        "GIS integration"
      ],
      imgUrl: CityRatsImg,
    },
    {
      title: "Business Startup Suite",
      description: [
        "End-to-end business platform",
        "CRM integration",
        "Analytics dashboard",
        "Mobile-responsive design"
      ],
      imgUrl: BusinessStrategyWeb,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <h2>Featured Projects</h2>
        <p className="subtitle">Delivering impactful solutions through modern development</p>
        
        <div className="projects-wrapper">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              index={index}
              {...project}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
