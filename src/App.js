import logo from './logo.svg';
import './App.css';

// JSX 里面渲染一个数组的时候必须有 key
// diff 的时候，首先比较 type ,然后是 key, 所以同级同类型元素，key 值必须得是惟一的
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
