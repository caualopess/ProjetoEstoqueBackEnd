export interface ICreateProduct {
    nome:string
    categoriaId:number
}

export interface IUpdateProduct {
    id: number
    nome?: string
    categoriaId?: number
}
