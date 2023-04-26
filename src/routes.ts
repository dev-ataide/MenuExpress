// Importa as dependências necessárias para criar as rotas
import { Router, Request, Response } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController"
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
// Cria uma nova instância do objeto Router
const router = Router();

// Cria uma rota para lidar com requisições GET na URL '/teste'
router.get('/teste', (req: Request, res: Response) =>{
    // Retorna um erro 500 com a mensagem 'Erro ao fazer essa requisição'
    throw new Error('Erro ao fazer essa requisição')
})

// Cria uma rota para lidar com requisições POST/GET na URL '/...'
// Quando uma requisição POST é feita para essa rota, a função 'handle' do objeto 'CreateUserController', ou qualquer outro objeto, será executada

//############# Rotas de Usuario #############################################################################################################

//Cadastro
router.post('/users', new CreateUserController().handle)
//Autenticação
router.post('/session', new AuthUserController().handle)
// isAuthenticated é um middleware que está vereificando o Token, criando uma rota privada, na qual apenas users logados possuem acesso
router.get('/me', isAuthenticated, new DetailUserController().handle) 

//############# Rotas das categorias #############################################################################################################

// Cadastro de categorias

router.post('/createcategory', isAuthenticated, new CreateCategoryController().handle )












// Exporta o objeto 'router' para ser utilizado em outros arquivos que o importarem
export {router}
