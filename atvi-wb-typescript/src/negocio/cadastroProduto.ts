import Entrada from "../io/entrada";
import Produto from "../modelo/produto"
import Cadastro from "./cadastro";

export default class CadastroProduto extends Cadastro {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do produto`);
        let nome = this.entrada.receberTexto(`Por favor, informe o nome do produto: `)
        let produtoDescricao = this.entrada.receberTexto(`Por favor, informe a descrição do produto: `)
        let valor = this.entrada.receberNumero(`Por favor, informe o valor do produto: `);
        let produtos = new Produto(nome, produtoDescricao, valor)

        this.produtos.push(produtos)
        console.log(`\nCadastro concluído :)\n`);
    }
}