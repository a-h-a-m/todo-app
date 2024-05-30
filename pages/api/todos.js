// pages/api/todos.js
import Todo from '../../models/Todo';

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const todos = await Todo.findAll();
        res.status(200).json({ success: true, data: todos });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'POST':
      try {
        const todo = await Todo.create(req.body);
        res.status(201).json({ success: true, data: todo });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'DELETE':
      try {
        const { id } = req.body;
        if (!id) {
          return res.status(400).json({ success: false, message: 'ID is required' });
        }
        await Todo.destroy({ where: { id } });
        res.status(200).json({ success: true });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'PUT':
      try {
        const { id, value } = req.body;
        console.log(`Received for update: id=${id}, value=${value}`);
        if (!id || !value) {
          return res.status(400).json({ success: false, message: 'ID and value are required' });
        }
        const todo = await Todo.findByPk(id);
        if (todo) {
          todo.value = value;
          await todo.save();
          res.status(200).json({ success: true, data: todo });
        } else {
          res.status(404).json({ success: false, message: 'Todo not found' });
        }
      } catch (error) {
        console.error(error);
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
