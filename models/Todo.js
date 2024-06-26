// models/Todo.js
import { DataTypes } from 'sequelize';
import sequelize from '../lib/sequelize';

//To-do model
const Todo = sequelize.define('Todo', {
  value: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

(async () => {
  await sequelize.sync();
})();

export default Todo;
