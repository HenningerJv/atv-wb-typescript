import Produto from "../modelo/produto"

export default class ExcluidorProduto {
    private produto: Array<Produto>
    constructor(produto: Array<Produto>) {
        this.produto = produto
    }
    public excluir(produtoAlvo: string) {
        this.produto.forEach(produto =>{
            if(produto.nome === produtoAlvo){
                let indice = this.produto.indexOf(produto)
                delete this.produto[indice]
            }
        })
    }
}