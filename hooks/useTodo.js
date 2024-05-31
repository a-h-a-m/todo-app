import { useState, useEffect } from 'react';
import { fetchTodos, addTodo, deleteTodo, editTodo } from '../services/todoService';

//React hooks

//React state
const useTodo = () => {
  const [userInput, setUserInput] = useState('');
  const [list, setList] = useState([]);

  useEffect(() => {
    loadTodos();
  }, []);

  //display data
  const loadTodos = async () => {
    const data = await fetchTodos();
    if (data.success) {
      setList(data.data);
    }
  };

  //update input data
  const updateInput = (value) => {
    setUserInput(value);
  };

  //add data to list
  const addItem = async () => {
    if (userInput.trim() !== '') {
      const data = await addTodo(userInput);
      if (data.success) {
        setList([...list, data.data]);
        setUserInput('');
      }
    }
  };

  //delete data
  const deleteItem = async (id) => {
    const data = await deleteTodo(id);
    if (data.success) {
      setList(list.filter((item) => item.id !== id));
    }
  };

  //edit data
  const editItem = async (id, value) => {
    const editedTodo = prompt('Edit task name:', value);
    if (editedTodo !== null && editedTodo.trim() !== '') {
      const data = await editTodo(id, editedTodo);
      if (data.success) {
        setList(
          list.map((item) =>
            item.id === id ? { ...item, value: editedTodo } : item
          )
        );
      } else {
        console.error('Update failed:', data);
      }
    }
  };

  return {
    userInput,
    updateInput,
    addItem,
    list,
    deleteItem,
    editItem,
  };
};

export default useTodo;
