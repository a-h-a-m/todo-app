import React from 'react';

//TodoInput component, displaying input area and 'Add' button
const TodoInput = ({ userInput, updateInput, addItem }) => (
  <div className="todo-input">
    {/* input area */}
    <input
      type="text"
      placeholder="Write your task here and click 'Add' button"
      value={userInput}
      onChange={(e) => updateInput(e.target.value)}
    />
    {/* button to add */}
    <button onClick={addItem}>Add</button>
  </div>
);

export default TodoInput;
