import logo from "./logo.svg";
import "./App.css";
import styles from "./App.module.less";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className={styles.red}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn ReactP
          {process.env.REACT_APP_HI}
        </a>
      </header>
    </div>
  );
}

export default App;
