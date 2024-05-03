import React from 'react';

const SkillCard = ({ skill, onDelete }) => {
  const { title, description, level } = skill;

  return (
    <div className="skill-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Уровень: {level}%</p>
      <button onClick={() => onDelete(skill)}>Удалить</button>
    </div>
  );
};

export default SkillCard;