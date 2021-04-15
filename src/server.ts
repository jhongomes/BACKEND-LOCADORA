import express from 'express';
import {categoriesRoutes} from "./routes/categories.routes"; 

const app = express()
app.use(express.json());

app.get("/", (request, response) => {
    return response.json({ message: "hello jhon"})
})

app.use("/categories", categoriesRoutes);

app.listen(3333, () => console.log('server is start'))
