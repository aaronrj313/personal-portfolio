// ProjectCard.js
export const ProjectCard = ({ title, description, imgUrl, animationClass, delay }) => {
  return (
    <div className={`project-card ${animationClass}`} style={{ animationDelay: `${delay}ms` }}>
      <div className="image-container">
        <img src={imgUrl} alt={title} />
      </div>
      
      <div className="content-container">
        <h3>{title}</h3>
        <ul className="features-list">
          {description.map((item, index) => (
            <li key={index} className="feature-item">
              <span className="bullet">•</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
