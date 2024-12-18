import express from "express";

import { atualizarNovoPost, listarPosts, postarNovoPost, uploadImagem } from "../controller/postsController.js";

import multer from "multer";

//trecho de código para funcionar corretamente no windows:
// Configuração do armazenamento de arquivos usando o multer.diskStorage
const storage = multer.diskStorage({
    // Define o diretório de destino para os arquivos
    destination: function (req, file, cb) {
      cb(null, 'uploads/');
    },
    // Define a estratégia de nomeação dos arquivos
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  });

const upload = multer({dest:"./uploads", storage})
// linux ou no mac --> const upload = multer({dest:"./uploads"})

const routes = (app) => {
    // Permite que o servidor interprete requisicoes com o corpo em formato json
    app.use(express.json());
    // Rota para buscar todos os posts
    app.get("/posts", listarPosts);
    // Rota para criar um post
    app.post("/posts", postarNovoPost);
    app.post("/upload", upload.single("imagem"), uploadImagem)
    // Rota para atualizar post
    app.put("/upload/:id", atualizarNovoPost )
};

export default routes; 