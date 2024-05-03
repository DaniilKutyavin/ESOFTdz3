import React, { useState } from 'react';

const SkillForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [level, setLevel] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description || level < 0 || level > 100) return;
    onAdd({ title, description, level });
    setTitle('');
    setDescription('');
    setLevel(0);
  };

  return (
    <form onSubmit={handleSubmit} className="skill-form">
      <div className="input-group">
        <label htmlFor="title">Название:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="description">Описание:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <div className="input-group">
        <label htmlFor="level">Уровень:</label>
        <input
          type="number"
          id="level"
          value={level}
          onChange={(e) => setLevel(e.target.value)}
        />
      </div>
      <button type="submit">Создать</button>
    </form>
  );
};

export default SkillForm;
