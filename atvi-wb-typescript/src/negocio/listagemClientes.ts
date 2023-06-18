import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void {
        console.log(`\nLista de todos os clientes:`);
        this.clientes.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            console.log(`Gênero: ` + cliente.getClienteGenero);
            cliente.getTelefones.forEach(telefone => {
                console.log(`DDD: ` , telefone.getDdd);
                console.log(`Telefone: ` , telefone.getNumero);
            })
            cliente.getRgs.forEach(rg => {
                console.log(`RG: ` + rg.getValor);
            })
            cliente.getProdutosConsumidos.forEach(produto => {
                console.log(`Produto Consumido: ` + produto.nome);
                console.log(`Valor do Produto: ` + produto.valor);
            })
            cliente.getServicosConsumidos.forEach(servico => {
                console.log(`Serviço Consumido: ` + servico.nome);
                console.log(`Valor do Serviço: ` + servico.valor);
            })
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}