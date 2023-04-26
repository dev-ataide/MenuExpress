import prismaClient from "../../prisma";
interface CategoryRequest{
    name: string;
}


class CreateCategoryService{
    async execute({name}){
        return { CreateCategoryService: "Esta Funcionando"  }
    }
}

export {CreateCategoryService}