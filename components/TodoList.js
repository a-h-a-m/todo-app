import React from 'react';

//TodoList component, showing table rows, each row contains data value, delete button, edit button
const TodoList = ({ list, deleteItem, editItem }) => (
  <div className="todo-list">
    {list.length > 0 ? (
      list.map((item) => (
        <div key={item.id} className="todo-item">
          {/* data value in each row */}
          <span className="todo-value">{item.value}</span>
          <div className="todo-actions">
            {/* delete and edit buttons in each row */}
            <button onClick={() => deleteItem(item.id)}>Delete</button>
            <button onClick={() => editItem(item.id, item.value)}>Edit</button>
          </div>
        </div>
      ))
    ) : (
      //if table is empty, this below text is displayed
      <div className="no-items">No tasks in the list</div>
    )}
  </div>
);

export default TodoList;
