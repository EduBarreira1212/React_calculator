import logo from './logo.svg';
import './App.css';
import OperationsTemplates from './components/templates/OperationsTemplate';

function App() {
  return (
    <>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          React calculator
        </h1>
      </header>
      <OperationsTemplates/>
    </>
  );
}

export default App;
