import React from 'react';
import Counter from './component/counter'
import './App.css';

function App(props) {
  const {getState,dispatch} = props;

  return (
    <div>
      <Counter
        value={getState()}
        onIncrement={() => dispatch({type:'INCREMENT'})}
        onDecrement={() => dispatch({type:'DECREMENT'})}
        onIncrementAsync={() => dispatch({type:'INCREMENT_ASYNC'})}
      />
    </div>
  );
}

// store.subscribe(App)

export default App;
