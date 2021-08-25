import express from 'express';
import { Todo } from '../models/todo';
const router = express.Router();

router.get('/todo', async (req, res) => {
    const todo = await Todo.find({});
    return res.status(200).send(todo);
});

router.post('/todo', async (req, res) => {
    const { title, description } = req.body;
    const todo = new Todo({ title: title, description: description });
    await todo.save();
    return res.send('Todo Created');
});

router.delete('/todo/:id', async (req, res) => {
    const { id } = req.params;
    const todo = await Todo.deleteOne({ _id: id });
    return res.send(todo);
});

router.put('/todo', async (req, res) => {
    const { id, title, description } = req.body;
    const todo = await Todo.findByIdAndUpdate(id, {
        title,
        description
    });
    return res.send(todo);
})

export { router as todoRouter }