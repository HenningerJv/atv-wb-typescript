import Produto from "../modelo/produto";


export default class SelecionadorProduto {
    private produto: Array<Produto>
    constructor(produto: Array<Produto>) {
        this.produto = produto
    }

    public selecionar(nome: string) {
        return this.produto.find(produto => produto.nome === nome)
    }
}