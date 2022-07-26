import { useState } from "react";
import "./App.scss";
import Hero from ".//components/Hero/Hero";
import Education from ".//components/Education/Education";
import Experience from ".//components/Experience/Experience";
import Idiom from "./components/Idiom/Idiom";
import Skills from ".//components/Skills/Skills";
import { CV } from "./CV/CV";

const { hero, education, experience, idiom, skills } = CV;

function App() {
  const [showEducation, setShowEducation] = useState(true);
  const [showIdiom, setShowIdiom] = useState(true);

  return (
    <div className='App'>
      <Hero hero={hero} />
      <div className='btn'>
        <button
          className='custom-btn btn-4'
          onClick={() => setShowEducation(true)}
        >
          Educacion
        </button>
        <button
          className='custom-btn btn-4'
          onClick={() => setShowEducation(false)}
        >
          Experiencia
        </button>
      </div>
      <div>
        {showEducation ? (
          <Education education={education} />
        ) : (
          <Experience experience={experience} />
        )}

        <div className='btn'>
          <button
            className='custom-btn btn-4'
            onClick={() => setShowIdiom(true)}
          >
            Idiomas
          </button>
          <button
            className='custom-btn btn-4'
            onClick={() => setShowIdiom(false)}
          >
            Habilidades
          </button>
        </div>
      </div>
      <div>
        {showIdiom ? <Idiom idiom={idiom} /> : <Skills skills={skills} />}
      </div>
    </div>
  );
}

export default App;
