// Importa as dependências necessárias para criar as rotas
import { Router, Request, Response } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController"

// Cria uma nova instância do objeto Router
const router = Router();

// Cria uma rota para lidar com requisições GET na URL '/teste'
router.get('/teste', (req: Request, res: Response) =>{
    // Retorna um erro 500 com a mensagem 'Erro ao fazer essa requisição'
    throw new Error('Erro ao fazer essa requisição')
})

// Cria uma rota para lidar com requisições POST na URL '/users'
// Quando uma requisição POST é feita para essa rota, a função 'handle' do objeto 'CreateUserController' será executada
router.post('/users', new CreateUserController().handle)

// Exporta o objeto 'router' para ser utilizado em outros arquivos que o importarem
export {router}
