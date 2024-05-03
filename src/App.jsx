import { useState } from "react";
import "./App.css";
import SkillForm from "./component/SkillForm";
import SkillList from "./component/SkillList";
import SkillFilter from "./component/SkillFilter";

function App() {
  const [showSkills, setShowSkills] = useState(false);
  const [skills, setSkills] = useState([]);
  const [filteredSkills, setFilteredSkills] = useState([]);

  const toggleShowSkills = () => {
    setShowSkills(!showSkills);
  };

  const handleAddSkill = (newSkill) => {
    setSkills([...skills, { ...newSkill, id: Date.now() }]);
  };

  const handleDeleteSkill = (skillToDelete) => {
    setSkills(skills.filter((skill) => skill.id !== skillToDelete.id));
  };

  const handleFilterSkills = (filterType) => {
    if (filterType === "over50") {
      setFilteredSkills(skills.filter((skill) => skill.level > 50));
    } else if (filterType === "under50") {
      setFilteredSkills(skills.filter((skill) => skill.level < 50));
    }
    else if (filterType === "all") {
      setFilteredSkills(skills);
    }
  };

  return (
    <div className="App">
      <h1>Навыки</h1>
      <button onClick={toggleShowSkills}>
        {showSkills ? "Спрятать навыки" : "Показать навыки"}
      </button>
      {showSkills && (
        <>
          <SkillFilter onFilter={handleFilterSkills} />
          <SkillList
            skills={filteredSkills.length ? filteredSkills : skills}
            onDelete={handleDeleteSkill}
          />
          <SkillForm onAdd={handleAddSkill} />
        </>
      )}
    </div>
  );
}

export default App;
