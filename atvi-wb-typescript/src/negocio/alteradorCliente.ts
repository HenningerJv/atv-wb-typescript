import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import SelecionadorCliente from "./selecionadorCliente";

export default class AlteradorCliente {
    private clientes: Array<Cliente>
    private selecionador: SelecionadorCliente
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes
        // INSTANCIO O SELECIONADOR PARA PODER USAR A FUNÇÃO SELECIONAR ENQUANTO PASSO A LISTA DE CLIENTES PARA O SELECIONADOR 
        this.selecionador =  new SelecionadorCliente(clientes)
        this.entrada = new Entrada
    }
    public alterar(cpf: string) {
        // SELECIONO O CLIENTE 
        const cliente =  this.selecionador.selecionar(cpf);
        let nome = this.entrada.receberTexto(`Por favor, informe o nome do cliente: `)
        let nomeSocial = this.entrada.receberTexto(`Por favor, informe o nome social do cliente: `)
        let clienteGenero = this.entrada.receberTexto(`Por favor, informe o gênero do cliente: `)
        if (cliente){
            cliente.nomeSocial = nomeSocial
            cliente.nome = nome
            cliente.setClienteGenero = clienteGenero
            console.log("Cliente alterado")
        } else {
            console.log("Cliente não encontrado")
        }

    }
}