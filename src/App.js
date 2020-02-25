import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyDemo from './components/DemoComponent';
//import MyGitClassComp from './components/GithubCommitComponent';
import MyGitFunComp from './components/GithubCommitFunComponent';
import Search from './components/Search/Search';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyDemo />
        <Search />
        <div>
          {/* <MyGitClassComp/> */}

          <MyGitFunComp />
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Demo <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
