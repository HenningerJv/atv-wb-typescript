export default class Produto {
    public nome!: string
    public produtoDescricao: string
    public valor: number
    constructor(nome: string, produtoDescricao: string, valor: number) {
        this.nome = nome
        this.produtoDescricao = produtoDescricao
        this.valor = valor
    }
}