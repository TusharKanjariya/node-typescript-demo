import mongoose, { mongo } from "mongoose";

interface todo {
    title: string,
    description: string
}

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

const Todo = mongoose.model('todo', todoSchema);

export { Todo }