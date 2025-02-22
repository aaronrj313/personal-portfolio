import React from 'react';
import { Code2, Server, Brain, Rocket, Trophy, GitBranch, Layout } from 'lucide-react';

const SkillsGrid = () => {
  const skills = [
    {
      icon: <Code2 className="skill-icon" />,
      title: 'Frontend Development',
      description: 'React, TypeScript, Next.js, Modern CSS'
    },
    {
      icon: <Server className="skill-icon" />,
      title: 'Backend Architecture',
      description: 'Node.js, Express, REST APIs, Databases'
    },
    {
      icon: <Brain className="skill-icon" />,
      title: 'Problem Solving',
      description: 'Algorithms, Optimization, System Design'
    }
  ];

  return (
    <div className="grid-container">
      <div className="left-column">
        {skills.map((skill, index) => (
          <div key={index} className="grid-item">
            <div className="content">
              {skill.icon}
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="right-column">
        <div className="featured-item">
          <Rocket className="skill-icon" />
          <h2>Holistic Approach</h2>
          <p>Full-stack solutions with emphasis on:</p>
          <div className="highlights">
            <div className="highlight">
              <Trophy className="icon-sm" />
              <span>Best Practices</span>
            </div>
            <div className="highlight">
              <GitBranch className="icon-sm" />
              <span>Version Control</span>
            </div>
            <div className="highlight">
              <Layout className="icon-sm" />
              <span>UI/UX Focus</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsGrid;
