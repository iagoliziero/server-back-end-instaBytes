import 'dotenv/config';
import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js";
// Conecta ao banco de dados usando a string de conexão fornecida como variável de ambiente
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função assíncrona para buscar todos os posts
export default async function getTodosPosts() {
    // Obtém o banco de dados da conexão
     const db = conexao.db("imersão-back-end-alura");
     // Seleciona a coleção "posts" dentro do banco de dadosollecti
     const colecao = db.collection("posts")
     // Executa a consulta para encontrar todos os documentos na coleção e retorna como um array
     return colecao.find().toArray()
 };

export async function criarPost(novoPost) {
    const db = conexao.db("imersão-back-end-alura");
    const colecao = db.collection("posts");
    //insertOne em bancos de dados, como o MongoDB, serve para inserir um único documento em uma coleção.
    return colecao.insertOne(novoPost);
 };

 export async function atualizarPost(id, novoPost) {
    const db = conexao.db("imersão-back-end-alura");
    const colecao = db.collection("posts");
    const objId = ObjectId.createFromHexString(id)
    // Converte o ID do post para um formato de objeto ID do MongoDB.
    return colecao.updateOne({_id: new ObjectId(objId)}, {$set: novoPost} );
    // Atualiza um documento na coleção "posts".
  // - Busca o documento pelo ID.
  // - Substitui os campos existentes do documento pelos novos valores em 'novoPost'.
  // Retorna uma promessa que indica o resultado da operação de atualização.
 };