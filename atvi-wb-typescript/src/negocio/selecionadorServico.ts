import Servico from "../modelo/servico"


export default class SelecionadorServico {
    private servico: Array<Servico>
    constructor(servico: Array<Servico>) {
        this.servico = servico
    }

    public selecionar(nome: string) {
        return this.servico.find(servico => servico.nome === nome)
    }
}