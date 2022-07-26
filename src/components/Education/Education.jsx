import "./Education.scss";

function Education({ education }) {
  return (
    <div className='education'>
      <div className='education-card'>
        {education.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <p className='name'>🎓 {item.name}</p>
              <p>{item.where}</p>
              <p className='date'>{item.date}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Education;
