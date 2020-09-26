import React from 'react';
import './App.css';

function App() {
  return (
    <div className="main">
      <h1>Hey there <span role="img" aria-label="emoji">👋</span> I'm Rohith.</h1>

      <h2><span role="img" aria-label="emoji">👨🏻‍💻</span> About Me </h2>
      <div>
        <ul>
          <li><span role="img" aria-label="emoji">🤔 &nbsp;</span> Exploring new technologies and developing software solutions and quick hacks.</li>
          <li><span role="img" aria-label="emoji">🎓 &nbsp;</span> Studied <b>Information Science and Engineering</b> at <i>R V College Of Engineering</i>.</li>
          <li><span role="img" aria-label="emoji">💼 &nbsp;</span> Working as a <b>Principal Software Developer</b> at <i>Perfios Software Solutions Pvt Ltd</i>.</li>
          <li><span role="img" aria-label="emoji">🌱 &nbsp;</span> Learning more about React, Spring, Systems Design and Good Ethics.</li>
          <li><span role="img" aria-label="emoji">⚡  &nbsp;</span> Pursuing <i>Numismatics</i> as hobbie/side hustles.</li>
        </ul>
      </div>
      <h2><span role="img" aria-label="emoji">🛠</span> Tech Stack</h2>
      <div>
        <ul>
          <li><span role="img" aria-label="emoji">💻 &nbsp;</span>  Java | C++ | C</li>
          <li><span role="img" aria-label="emoji">🌐 &nbsp;</span> HTML | CSS | JavaScript | Bootstrap | ReactJS</li>
          <li><span role="img" aria-label="emoji">🔧 &nbsp;</span> Git | Markdown | Ansible </li>
          <li><span role="img" aria-label="emoji">🛢 &nbsp;</span> MySQL</li>
        </ul>
      </div>

      <h2><span role="img" aria-label="emoji">🤝🏻</span> Connect with Me </h2>
      <div className="box"> 
        <a href="https://www.linkedin.com/in/rohithmahesh/" target="_blank" rel="noopener noreferrer"><img alt="LinkedIn" src="https://img.shields.io/badge/LinkedIn-Rohith%20M-blue?style=flat-square&logo=linkedin"/></a>
        <a href="https://www.instagram.com/rohith_m94/" target="_blank" rel="noopener noreferrer"><img alt="Instagram" src="https://img.shields.io/badge/Instagram-rohith_m94-blue?style=flat-square&logo=instagram"/></a>
      </div>
    </div>
  );
}

export default App;
