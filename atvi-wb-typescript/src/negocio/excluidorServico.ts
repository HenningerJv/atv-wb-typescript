import Servico from "../modelo/servico"

export default class ExcluidorServico {
    private servico: Array<Servico>
    constructor(servico: Array<Servico>) {
        this.servico = servico
    }
    public excluir(servicoAlvo: string) {
        this.servico.forEach(servico =>{
            if(servico.nome === servicoAlvo){
                let indice = this.servico.indexOf(servico)
                delete this.servico[indice]
            }
        })
    }
}