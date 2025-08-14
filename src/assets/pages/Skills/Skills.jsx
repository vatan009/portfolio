import SkillCard from "./SkillCard";
import "./Skill.css";

function Skill() {
  const technicalSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "MongoDB",
    "Express",
    "SQL",
    "C++",
    "Data Structures & Algorithms",
    "Competitive Programming",
    "REST APIs",
    "Git & GitHub"
  ];

  const tools = [
    "VS Code",
    "Postman",
    "Figma",
    "Linux CLI",
    "Chrome DevTools"
  ];

  const softSkills = [
    "Problem-Solving",
    "Team Collaboration",
    "Adaptability",
    "Time Management",
    "Critical Thinking",
    "Quick Learning",
    "Attention to Detail"
  ];

  return (
    <section className="skills-section-container">
      <h2 className="section-title">Skills</h2>

      <div className="skills-block">
        <h3 className="skills-subtitle">Technical Skills</h3>
        <div className="skills-grid">
          {technicalSkills.map((skill, index) => (
            <SkillCard key={index} i={index + 1} skillname={skill} />
          ))}
        </div>
      </div>

      <div className="skills-block">
        <h3 className="skills-subtitle">Tools</h3>
        <div className="skills-grid">
          {tools.map((tool, index) => (
            <SkillCard key={index} i={index + 1} skillname={tool} />
          ))}
        </div>
      </div>

      <div className="skills-block">
        <h3 className="skills-subtitle">Soft Skills</h3>
        <div className="skills-grid">
          {softSkills.map((skill, index) => (
            <SkillCard key={index} i={index + 1} skillname={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skill;
