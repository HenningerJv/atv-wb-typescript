export default class Servico {
    public nome!: string
    public servicoDescricao: string
    public valor: number
    constructor(nome: string, servicoDescricao: string, valor: number) {
        this.nome = nome
        this.servicoDescricao = servicoDescricao
        this.valor = valor
    }
}