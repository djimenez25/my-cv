import "./Idiom.scss";

function Idiom({ idiom }) {
  return (
    <div className='idiom'>
      <div className='idiom-card'>
        {idiom.map((item) => {
          return (
            <div className='block' key={JSON.stringify(item)}>
              <p className='language'>🌍 {item.language}:</p>
              <p className='level'>{item.level}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Idiom;
