import React from "react";
import { FaLinkedin, FaGithub, FaCodepen } from "react-icons/fa";
import { SiLeetcode, SiCodeforces, SiGeeksforgeeks } from "react-icons/si";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <section className="about-container" id="about">
      <h2 className="about-title">About Me</h2>

      <div className="about-card">
        <div className="about-left">
          <p className="about-intro">
            I’m <span className="accent">Vatan Pawar</span>, a final-year ECE
            student at <span className="accent">IIIT Trichy</span>, building
            interactive full-stack applications and solving complex algorithmic
            challenges.
          </p>

          <p className="about-body">
            Skilled in <span className="accent">MERN stack</span>, REST APIs,
            C++, and algorithmic problem solving. I love tackling challenges in
            web apps and competitive programming.
          </p>

          <ul className="about-highlights">
            <li>
              Built a <strong>Recursive Tree Visualizer</strong> with dynamic
              call graphs.
            </li>
            <li>
              Solved <strong>600+ DSA/CP problems</strong> (graphs, DP, etc.).
            </li>
          </ul>

          <div className="social-links">
            <a href="https://www.linkedin.com/in/vatanp/" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/vatanp" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://leetcode.com/vatanp/" target="_blank" rel="noreferrer">
              <SiLeetcode />
            </a>
            <a href="https://auth.geeksforgeeks.org/user/vatanp/" target="_blank" rel="noreferrer">
              <SiGeeksforgeeks />
            </a>
            <a href="https://codeforces.com/profile/vatanp" target="_blank" rel="noreferrer">
              <SiCodeforces />
            </a>
          </div>
        </div>

        <div className="about-right">
          <h3 className="stack-title">Core Stack</h3>
          <div className="chips">
            <span className="chip">React</span>
            <span className="chip">Node.js</span>
            <span className="chip">Express</span>
            <span className="chip">MongoDB</span>
            <span className="chip">SQL</span>
            <span className="chip">C++</span>
            <span className="chip">JavaScript</span>
            <span className="chip">REST APIs</span>
          </div>

          <h3 className="stack-title">Strengths</h3>
          <div className="chips">
            <span className="chip">Problem-Solving</span>
            <span className="chip">Systems Thinking</span>
            <span className="chip">Clean UI/UX</span>
            <span className="chip">Teamwork</span>
            <span className="chip">Fast Learning</span>
          </div>
        </div>
      </div>
       {/* Resume Button */}
  <div className="resume-section">
    <a
      className="btn primary"
      href="/Vatan_Pawar_Resume.pdf"
      target="_blank"
      rel="noreferrer"
    >
      See My Résumé
    </a>
  </div>
    </section>
  );
};

export default AboutMe;
