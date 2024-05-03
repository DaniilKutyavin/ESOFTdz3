import React from 'react';

const SkillFilter = ({ onFilter }) => {
  return (
    <div className="skill-filter">
      <button onClick={() => onFilter('over50')}>Уровень {">"}50%</button>
      <button onClick={() => onFilter('under50')}>Уровень {"<"}50%</button>
      <button onClick={() => onFilter('all')}>Все навыки</button>
    </div>
  );
};

export default SkillFilter;