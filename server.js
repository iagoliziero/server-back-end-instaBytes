// Importa o framework Express para criar a aplicação web
import express from "express";

import routes from "./src/routes/postsRoutes.js";

// Cria uma instância no Express
const app = express();

// app.use(express.static("uploads"));
app.use(express.static("uploads"));

routes(app)
// ligar o servidor na porta 3000
app.listen(3000, () => {
    console.log("Servidor escutando...");
});

