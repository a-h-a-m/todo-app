import React from 'react';

const TodoList = ({ list, deleteItem, editItem }) => (
  <div className="todo-list">
    {list.length > 0 ? (
      list.map((item) => (
        <div key={item.id} className="todo-item">
          <span className="todo-value">{item.value}</span>
          <div className="todo-actions">
            <button onClick={() => deleteItem(item.id)}>Delete</button>
            <button onClick={() => editItem(item.id, item.value)}>Edit</button>
          </div>
        </div>
      ))
    ) : (
      <div className="no-items">No tasks in the list</div>
    )}
  </div>
);

export default TodoList;
