//API endpoint
const API_URL = '/api/todos';

//CRUD operations

//Read
export const fetchTodos = async () => {
  const res = await fetch(API_URL);
  const data = await res.json();
  return data;
};

//Create
export const addTodo = async (value) => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ value }),
  });
  const data = await res.json();
  return data;
};

//Delete
export const deleteTodo = async (id) => {
  const res = await fetch(API_URL, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id }),
  });
  const data = await res.json();
  return data;
};

//Update
export const editTodo = async (id, value) => {
  const res = await fetch(API_URL, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id, value }),
  });
  const data = await res.json();
  return data;
};
