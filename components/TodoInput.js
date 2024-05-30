import React from 'react';

const TodoInput = ({ userInput, updateInput, addItem }) => (
  <div className="todo-input">
    <input
      type="text"
      placeholder="Write your task here and click 'Add' button"
      value={userInput}
      onChange={(e) => updateInput(e.target.value)}
    />
    <button onClick={addItem}>Add</button>
  </div>
);

export default TodoInput;
