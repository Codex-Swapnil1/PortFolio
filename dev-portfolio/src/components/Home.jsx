import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import Fade from 'react-reveal/Fade';
import endpoints from '../constants/endpoints';
import Social from './Social';
import FallbackSpinner from './FallbackSpinner';
import About from './About';
import Skills from './Skills';
import Education from './Education';
import Experience from './Experience';
import Projects from './Projects';
import ContactMe from './ContactMe';


const styles = {
  nameStyle: {
    fontSize: '5em',
  },
  inlineChild: {
    display: 'inline-block',
  },
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    boxShadow : 'rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px'
  },
  subContainer: {
    padding: "50px",
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow : 'rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px'
  }
};

function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(endpoints.home, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  return (
    <>
      { data ? (
  <Fade>
          <section id = "shome">
          <div style={styles.mainContainer}>
            <h1 style={styles.nameStyle}>{data?.name}</h1>
            <div style={{ flexDirection: 'row' }}>
              <h2 style={styles.inlineChild}>I&apos;m&nbsp;</h2>
              <Typewriter
                options={{
                  loop: true,
                  autoStart: true,
                  strings: data?.roles,
                }}
              />
            </div>
            <Social />
          </div>
          </section>
          <section id = "sabout" style={styles.subContainer}>
          <h1 style={styles.subContainer}> About </h1>
                <About />
          </section>
          <section id = "sskills" style={styles.subContainer}>
          <h1 style={styles.subContainer}> Skills </h1>
                <Skills />
          </section>
           <section id ="seducation" style={styles.subContainer}>
          <h1 style={styles.subContainer}> Education </h1>
                <Education />
          </section>
          <section id="experience" style={styles.subContainer}>
                <h1 style={styles.subContainer}> Experience </h1>
                <Experience />
          </section>
          <section id = "sproject"style={styles.subContainer}>
          <h1 style={styles.subContainer}> Projects </h1>
                <Projects />
          </section>
          <section id="contact" style={styles.subContainer}>
          <h1 style={styles.subContainer}> Contact Me</h1>
                <ContactMe />
          </section>

      </Fade>) : <FallbackSpinner />}
    </>
  );
}

export default Home;
