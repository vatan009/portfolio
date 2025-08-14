function SkillCard({ i, skillname }) {
  return (
    <div className="skill-card">
      <span className="skill-index">{i}.</span>
      <span className="skill-name">{skillname}</span>
    </div>
  );
}

export default SkillCard;
