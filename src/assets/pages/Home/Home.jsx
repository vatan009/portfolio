import { ReactTyped } from 'react-typed';
import React, { useState } from 'react';
import './Home.css';

const MyComponent = ({ onComplete }) => {
  const [showSecondLine, setShowSecondLine] = useState(false);

  return (
    <div className="heroBox">
      <div className="helloIam">
        <ReactTyped
          strings={["Hello, I am Vatan Pawar"]}
          typeSpeed={70}
          showCursor={false}
          onComplete={() => {
            setShowSecondLine(true);
            onComplete && onComplete(); // Notify parent when done
          }}
        />
      </div>

      <div className="aProgrammer">
        {showSecondLine && (
          <ReactTyped
            strings={[
              " a programmer",
              " a developer",
              " a student",
              " a reader",
              " a trader",
            ]}
            typeSpeed={20}
            backSpeed={30}
            loop
          />
        )}
      </div>
    </div>
  );
};

const Para = () => {
  return (
    <div className="paraContainer">
      <h3 className='paraHead'>I build and design impactful digital experiences.</h3>
      <br />
    <ReactTyped
      strings={[
      

`As a B.Tech Electronics and Communication Engineering student with a deep passion for software development, I specialize in crafting scalable, high-performance web applications using React.js, Redux, Node.js, Express.js, Firebase, and SQL, backed by strong problem-solving skills in C++, Python, and JavaScript. My work blends clean UI/UX with robust engineering to deliver solutions that are both intuitive and efficient.

From personal projects to real-world applications, I’ve tackled challenges in full-stack development, algorithmic optimization, and data-driven systems—continuously learning, iterating, and pushing technical boundaries.

When I’m not building, you’ll find me exploring music, diving into strategy games, or reading books that spark new ideas.`
      ]}
      typeSpeed={2}
      showCursor={false}
    />
    </div>
  );
};

function Home() {
  const [showPara, setShowPara] = useState(false);

  return (
    <>
      <MyComponent onComplete={() => setShowPara(true)} />
      {showPara && <Para />}

      
    </>
  );
}

export default Home;
