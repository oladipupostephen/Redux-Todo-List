import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import TodoApp from './Components/TodoApp';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TodoApp />
      </div>
    </Provider>
  );
}

export default App;