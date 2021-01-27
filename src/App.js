import ControlForm from './ControlForm'
import './App.css'

// JSX 里面渲染一个数组的时候必须有 key
// diff 的时候，首先比较 type ,然后是 key, 所以同级同类型元素，key 值必须得是惟一的
function App() {
  return (
    <div className="App">
      这是首页
      <ControlForm />
    </div>
  );
}

export default App;
