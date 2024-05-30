import React from 'react';
import TodoApp from '../components/TodoApp';
import useTodo from '../hooks/useTodo';

const Home = () => {
  const { userInput, updateInput, addItem, list, deleteItem, editItem } = useTodo();

  return (
    <TodoApp
      userInput={userInput}
      updateInput={updateInput}
      addItem={addItem}
      list={list}
      deleteItem={deleteItem}
      editItem={editItem}
    />
  );
};

export default Home;
