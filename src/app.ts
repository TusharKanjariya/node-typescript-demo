import { json } from "body-parser";
import express from "express";
import mongoose from "mongoose";
import { todoRouter } from "./routes/todo";

const app: express.Application = express();
app.use(json());
app.use('/api', todoRouter);

mongoose.connect('mongodb+srv://tushar:tushar1234@cluster0.ry4fz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority').then(() => {
    console.log('Connected');
})

app.get('/', (req: express.Request, res: express.Response) => {
    res.send('Hello');
});

app.listen(5000, () => console.log('5000 PORT'))