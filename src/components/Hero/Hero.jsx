import "./Hero.scss";
import fotoportafolio from "../../assets/fotoportafolio.jpg";

function Hero({ hero }) {
  return (
    <div className='hero'>
      <img src={fotoportafolio} alt='' />
      <div className='card'>
        <h2>
          {hero.name} {hero.adress}
        </h2>
        <p>🗺️{hero.city} </p>
        <p>🗓️{hero.birthDate}</p>
        <p>
          📧
          <a href={"mailto:" + hero.email}>d.jimenez25@hotmail.com</a>
        </p>
        <p>📱 {hero.phone}</p>
        <p>
          💾<a href={hero.gitHub}>GitHub</a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
