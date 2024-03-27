import React from 'react';
import { AppUi } from './AppUI';
import { TodoProvider } from './components/TodoContext';

function App() {
  return (
    <TodoProvider>
      <AppUi />
    </TodoProvider>
  );
}



export default App;

