import { ReactTyped } from 'react-typed';
import React, { useState } from 'react';
import './Home.css';
import ProjectCard from './ProjectCard';
import UpcomingProjects from './UpcomingProjects';
import CompletedProjects from './CompletedProjects';

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
            onComplete && onComplete();
          }}
        />
      </div>

      <div className="aProgrammer">
        {showSecondLine && (
          <ReactTyped
            strings={[
              " a programmer....",
              " a developer....",
              " a student....",
              " a reader....",
              " a trader....",
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
      <h3 className="paraHead">I build and design impactful digital experiences.</h3>
      <br />
      <ReactTyped
        strings={[`
As a B.Tech Electronics and Communication Engineering student with a deep passion for software development, I specialize in crafting scalable, high-performance web applications using React.js, Redux, Node.js, Express.js, Firebase, and SQL, backed by strong problem-solving skills in C++, Python, and JavaScript. My work blends clean UI/UX with robust engineering to deliver solutions that are both intuitive and efficient.

From personal projects to real-world applications, I’ve tackled challenges in full-stack development, algorithmic optimization, and data-driven systems—continuously learning, iterating, and pushing technical boundaries.

When I’m not building, you’ll find me exploring music, diving into strategy games, or reading books that spark new ideas.
        `]}
        typeSpeed={2}
        showCursor={false}
      />
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Recursive Tree Visualizer",
      description: "A tool to visualize recursive function calls in real time, highlighting memoized vs non-memoized calls and interactive dragging of nodes.",
      image: "./images/temp.png",
      githubLink: "https://github.com/vatanp/recursive-tree-visualizer"
    },
    {
      title: "React Portfolio Website",
      description: "Personal portfolio website built with React.js showcasing projects, skills, and interactive UI elements like typed text and project cards.",
      image: "./images/temp.png",
      githubLink: "https://github.com/vatanp/portfolio"
    },
    {
      title: "Graph Algorithms Practice",
      description: "Implemented multiple graph algorithms (BFS, DFS, Dijkstra, Kruskal) with a practice system to solve questions and visualize graphs in JavaScript.",
      image: "./images/temp.png",
      githubLink: "https://github.com/vatanp/graph-algos"
    },
  ];

  return (
    <div className="projectsContainer">
      {projects.map((proj, idx) => (
        <ProjectCard
          key={idx}
          title={proj.title}
          description={proj.description}
          image={proj.image}
          githubLink={proj.githubLink}
        />
      ))}
    </div>
  );
};

function Home() {
  const [showPara, setShowPara] = useState(true);

  return (
    <div className="overallContainer">
      <div className="homeContainer">
        <div className="leftSection">
          <MyComponent onComplete={() => setShowPara(true)} />
        </div>
        <div className="rightSection">
          {showPara && <Para />}
        </div>
      </div>

      <div className="projectsSection">
        <Projects />
        {/* <CompletedProjects/>   */}
      </div>

      <div className="upcomingProjectsSection">
        <UpcomingProjects />
      </div>
    </div>
  );
}

export default Home;
