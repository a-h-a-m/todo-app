import React from 'react';
import Header from './Header';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

//TodoApp component, contains Header, TodoInput, and TodoList components
const TodoApp = ({ userInput, updateInput, addItem, list, deleteItem, editItem }) => {
  return (
    <div className="container">
      {/* use Header component, contains app title and its subtitle */}
      <Header title="TO-DO LIST APP" subtitle="A simple app to record your tasks" />
      {/* use TodoInput component, to input data */}
      <TodoInput userInput={userInput} updateInput={updateInput} addItem={addItem} />
      {/* use TodoList component, to show data, contains delete and edit buttons */}
      <TodoList list={list} deleteItem={deleteItem} editItem={editItem} />
    </div>
  );
};

export default TodoApp;
