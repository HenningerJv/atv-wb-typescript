import Entrada from "../io/entrada";
import Produto from "../modelo/produto";
import SelecionadorProduto from "./selecionadorProduto";

export default class AlteradorProduto {
    private produto: Array<Produto>
    private entrada: Entrada
    selecionador: any;
    constructor(produto: Array<Produto>) {
        this.produto = produto
        this.selecionador = new SelecionadorProduto(produto)
        // INSTANCIO O SELECIONADOR PARA PODER USAR A FUNÇÃO SELECIONAR ENQUANTO PASSO A LISTA DE PRODUTOS PARA O SELECIONADOR 
        this.entrada = new Entrada
    }
    public alterar(nomeProduto: string) {
        // SELECIONO O PRODUTO 
        const produtos =  this.selecionador.selecionar(nomeProduto);
        let nome = this.entrada.receberTexto(`Por favor, informe o nome do produto: `)
        let produtoDescricao = this.entrada.receberTexto(`Por favor, informe a descrição do produto: `)
        let valor = this.entrada.receberNumero(`Por favor, informe o valor do produto: `);
        let produto = new Produto(nome, produtoDescricao, valor)
        if (produto){
            produto.produtoDescricao = produtoDescricao
            produto.nome = nome
            console.log("Produto alterado")
        } else {
            console.log("Produto não encontrado")
        }

    }
}