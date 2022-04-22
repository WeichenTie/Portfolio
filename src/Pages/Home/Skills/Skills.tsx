import Icon from "../../../Components/Skills/Icon";

const SkillStrings = [
  "CSharp",
  "CSS",
  "HTML",
  "Java",
  "JS",
  "TS",
  "Python",
  "React",
  "Vue",
];

const Skills = () => {
  return (
    <div id="home-skills">
      <div className="container">
        <h1>Skills</h1>
        <div className="home-skills-container">
          {SkillStrings.map((skill, index) => (
            <Icon icon={skill} key={index}></Icon>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
