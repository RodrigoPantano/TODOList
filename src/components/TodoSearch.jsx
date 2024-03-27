import React from 'react';
import '../styles/TodoSearch.css'
import { TodoContext } from './TodoContext';

function TodoSearch() {
  const {
    searchValue,
    setSearchValue
} = React.useContext(TodoContext)

    return (
        <input 
          placeholder="completar los items" 
          className='TodoSearch' 
          value={searchValue}
          onChange={(event) => {
            setSearchValue(event.target.value)}}
          />        
    )
  }

export { TodoSearch };