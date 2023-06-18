import Cliente from "../modelo/cliente";

export default class ExcluidorCliente {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes
    }
    public excluir(clienteAlvo: string) {
        this.clientes.forEach(cliente =>{
            if(cliente.getCpfValor === clienteAlvo){
                let indice = this.clientes.indexOf(cliente)
                delete this.clientes[indice]
            }
        })
    }
}