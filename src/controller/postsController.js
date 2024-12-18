import getTodosPosts, { atualizarPost, criarPost } from "../models/postsModels.js";

import fs from "fs"
import gerarDescricaoComGemini from "../services/geminiServices.js";

export async function listarPosts(req, res) {
    // Chama a função para buscar os posts
    const posts = await getTodosPosts();
    // Envia os posts como resposta em formato JSON com status 200 (sucesso)
    res.status(200).json(posts);
};

// Função assíncrona para criar um novo post em resposta a uma requisição HTTP
export async function postarNovoPost(req, res) {
    // Extrai os dados do novo post do corpo da requisição HTTP
    const novoPost = req.body;
  
    // Bloco try-catch para lidar com possíveis erros durante a criação do post
    try {
      // Chama a função criarPost para inserir o novo post no banco de dados
      // Aguarda a conclusão da operação e armazena o resultado em postCriado
      const postCriado = await criarPost(novoPost);
  
      // Envia uma resposta HTTP com status 200 (sucesso) e o post criado como JSON
      res.status(200).json(postCriado);
    } catch (erro) {
      // Registra o erro no console para fins de depuração
      console.error(erro.message);
  
      // Envia uma resposta HTTP com status 500 (erro interno do servidor) e uma mensagem de erro genérica
      res.status(500).json({"Erro":"Falha na requisição."});
    }
  };

export async function uploadImagem(req, res) {
  // Essa função é responsável por fazer o upload de uma imagem e criar um novo post.
    const novoPost = {
        descricao: "",
        imgUrl: req.file.originalname, // Define o nome original da imagem como a URL da imagem.
        alt: ""
    };
    try {
        const postCriado = await criarPost(novoPost);
        // Chama a função criarPost para inserir o novo post no banco de dados e retorna o post criado.
        const imagemAtualizada = `uploads/${postCriado.insertedId}.png`
         // Cria um novo nome para a imagem, usando o ID do post criado.

        fs.renameSync(req.file.path, imagemAtualizada)
        // Move a imagem para a nova localização com o novo nome.
        res.status(200).json(postCriado);
    } catch (erro) {
        console.error(erro.message);
        res.status(500).json({"Erro":"Falha na requisição."});
    }
};

// Essa função é responsável por atualizar as informações de um post.
export async function atualizarNovoPost(req, res) {
  const id = req.params.id;
  // Obtém o ID do post que será atualizado a partir da URL da requisição. 
  const urlImagem = `http://localhost:3000/${id}.png`;
  // Cria a URL completa da imagem do post.
  try {
     // Lê a imagem em buffer
    const imgBuffer = fs.readFileSync(`uploads/${id}.png`)
     // Gera a descrição com a API do Gemini
    const descricao = await gerarDescricaoComGemini(imgBuffer)

      // Remove os \n da descrição
      const descricaoSemQuebras = descricao.replace(/\n/g, ' ');

    const post = { 
      imgUrl: urlImagem,
       // Define a URL da imagem para o novo post.
      descricao: descricaoSemQuebras,
      // Define a descrição do post, obtida do corpo da requisição.
      alt: req.body.alt
    }

    const postCriado = await atualizarPost(id, post);
    // Envia uma resposta HTTP com status 200 (sucesso) e o post criado como JSON
    res.status(200).json(postCriado);
  } catch (erro) {
    console.error(erro.message);
    res.status(500).json({"Erro":"Falha na requisição."});
  }
};