import "./Skills.scss";

function Skills({ skills }) {
  return (
    <div className='skills'>
      <div className='skills-card'>
        {skills.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <p>🖇️ {item}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
