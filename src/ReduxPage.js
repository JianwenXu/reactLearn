import { Component } from 'react';
import store from './store/ReduxStore';

class ReduxPage extends Component {

  componentDidMount() {
    store.subscribe(() => {
      this.forceUpdate();
    })
  }

  onAdd = () => {
    store.dispatch({
      type: 'ADD',
      payload: 20
    })
  }

  onMinus = () => {
    store.dispatch({
      type: 'MINUS',
      payload: 5
    })
  }

  render() {
    return (
      <div>
        {store.getState()}
        <button onClick={this.onAdd}>Add</button>
        <button onClick={this.onMinus}>Minus</button>
      </div>
    );
  }
}

export default ReduxPage;