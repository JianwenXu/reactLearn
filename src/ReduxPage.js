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
      type: 'ADD'
    })
  }

  onMinus = () => {
    store.dispatch({
      type: 'MINUS'
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