import { MongoClient } from "mongodb";
export default async function ConectarAoBanco(StringConexao) {
    let mongoClient;
    try {
        mongoClient = new MongoClient(StringConexao);
        console.log('Conectando ao cluster do banco de dados...');
        await mongoClient.connect();
        console.log('Conectado ao MongoDB Atlas com sucesso!');

        return mongoClient;
    } catch (erro) {
        console.log('Falha na conexão com o banco!', erro); process.exit();
    }
};
