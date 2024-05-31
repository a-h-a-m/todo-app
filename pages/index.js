//This 'index.js' file is executed first. It returns TodoApp component
import React from 'react';
import TodoApp from '../components/TodoApp';
import useTodo from '../hooks/useTodo';

const Home = () => {
  const { userInput, updateInput, addItem, list, deleteItem, editItem } = useTodo();

  //Return TodoApp component, displayed in browser
  return (
    <TodoApp
      userInput={userInput}       //input area
      updateInput={updateInput}   //update input
      addItem={addItem}           //there is button to add input
      list={list}                 //there is a table contains list of data
      deleteItem={deleteItem}     //there is delete button to delete data in the table
      editItem={editItem}         //there is edit button to edit data in the table
    />
  );
};

export default Home;
