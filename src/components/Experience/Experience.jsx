import "./Experience.scss";

function Experience({ experience }) {
  return (
    <div className='experience'>
      <div className='experience-card'>
        {experience.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <p className='name'>💼 {item.name}</p>
              <p>{item.where}</p>
              <p className='date'>{item.date}</p>
              <p className='description'>{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Experience;
