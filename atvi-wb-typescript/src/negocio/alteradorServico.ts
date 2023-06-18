import Entrada from "../io/entrada";
import Servico from "../modelo/servico";
import SelecionadorServico from "./selecionadorServico";

export default class AlteradorServico {
    private servico: Array<Servico>
    private entrada: Entrada
    selecionador: any;
    constructor(servico: Array<Servico>) {
        this.servico = servico
        this.selecionador = new SelecionadorServico(servico)
        // INSTANCIO O SELECIONADOR PARA PODER USAR A FUNÇÃO SELECIONAR ENQUANTO PASSO A LISTA DE SERVIÇOS PARA O SELECIONADOR 
        this.entrada = new Entrada
    }
    public alterar(nomeServico: string) {
        // SELECIONO O SERVIÇO 
        const servicos =  this.selecionador.selecionar(nomeServico);
        let nome = this.entrada.receberTexto(`Por favor, informe o nome do serviço: `)
        let servicoDescricao = this.entrada.receberTexto(`Por favor, informe a descrição do serviço: `)
        let valor = this.entrada.receberNumero(`Por favor, informe o valor do serviço: `);
        let servico = new Servico(nome, servicoDescricao, valor)
        if (servico){
            servico.servicoDescricao = servicoDescricao
            servico.nome = nome
            console.log("Serviço alterado")
        } else {
            console.log("Serviço não encontrado")
        }

    }
}