import React from 'react';
import Header from './Header';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const TodoApp = ({ userInput, updateInput, addItem, list, deleteItem, editItem }) => {
  return (
    <div className="container">
      <Header title="TO-DO LIST APP" subtitle="A simple app to record your tasks" />
      <TodoInput userInput={userInput} updateInput={updateInput} addItem={addItem} />
      <TodoList list={list} deleteItem={deleteItem} editItem={editItem} />
    </div>
  );
};

export default TodoApp;
