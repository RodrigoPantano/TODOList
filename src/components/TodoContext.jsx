import React from "react";
import { useLocalStorage } from '../hooks/useLocalStorage';


const TodoContext = React.createContext();

function TodoProvider({ children }) {

  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorage('TODOS_V1', []); //usamos el hook creado para manejar la lista de TODOs
  const [searchValue, setSearchValue] = React.useState('');  //useState para manejar los cambios del input search
  
  const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;


  const searchedTodos = todos.filter(  //función para busacar los valores que coincidan con los todos
    (todo) => (
      todo.text.toLowerCase().includes(searchValue.toLowerCase())
    )
  )

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      text,
      completed: false,
    })
    saveTodos(newTodos);
  }

  const completeTodo = (text) => {    //logica para marcar completados los TODOs
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {      //logica para borrar un TODO
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <TodoContext.Provider value={{
      completedTodos,
      totalTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      completeTodo,
      deleteTodo,
      loading,
      error,
      openModal,
      setOpenModal,
      addTodo,
    }}>
      {children}
    </TodoContext.Provider>
  );
}




export { TodoContext, TodoProvider };