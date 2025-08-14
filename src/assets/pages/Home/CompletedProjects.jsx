import React from "react";
import "./CompletedProjects.css";

const CompletedProjects = () => {
  const projects = [
    {
      title: "Recursive Tree Visualizer",
      description: "Visualizes recursion calls with memoization highlighting and draggable nodes.",
      image: "./images/temp.png",
      github: "https://github.com/vatanp/recursive-tree-visualizer",
    },
    {
      title: "React Portfolio Website",
      description: "Personal portfolio with animations, skill showcase, and responsive design.",
      image: "./images/temp.png",
      github: "https://github.com/vatanp/portfolio",
    },
    {
      title: "Graph Algorithms Practice",
      description: "Implemented BFS, DFS, Dijkstra, and Kruskal with visualizations.",
      image: "./images/temp.png",
      github: "https://github.com/vatanp/graph-algos",
    },
  ];

  return (
    <div className="completedProjects">
      <h2 className="sectionTitle">Completed Projects</h2>
      <div className="projectsList">
        {projects.map((proj, idx) => (
          <div
            className={`projectPanel ${idx % 2 === 0 ? "fromLeft" : "fromRight"}`}
            key={idx}
          >
            <div className="panelContent">
              <img src={proj.image} alt={proj.title} />
              <div className="textContent">
                <h3>{proj.title}</h3>
                <p>{proj.description}</p>
                <a href={proj.github} target="_blank" rel="noopener noreferrer">
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompletedProjects;
