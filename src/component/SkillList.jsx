import React from 'react';
import SkillCard from './SkillCard';

const SkillList = ({ skills, onDelete }) => {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <SkillCard key={skill.id} skill={skill} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default SkillList;