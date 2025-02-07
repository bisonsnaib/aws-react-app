import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to React
        </p>
        <a
          className="App-link"
          href="https://us-east-1.console.aws.amazon.com/apprunner/home?region=us-east-1#/welcome"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn AWS
        </a>
      </header>
    </div>
  );
}

export default App;
