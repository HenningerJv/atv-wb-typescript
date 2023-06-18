import Cliente from "../modelo/cliente";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";
import Entrada from "../io/entrada";

export default class ConsumoProdutoServicoCliente {
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>, produtos: Array<Produto>, servicos: Array<Servico>) {
        this.clientes = clientes
        this.produtos = produtos
        this.servicos = servicos
        this.entrada = new Entrada
    }

    public consumoProduto(nomeCliente: string, produtoNome: string): void{
        let clienteAlvo: Array<Cliente> = []
        let produtoAlvo: Produto
        this.produtos.forEach(produto => {
            if(produto.nome === produtoNome) {
                produtoAlvo = produto
            }
        })
        this.clientes.forEach(cliente => {
            if(cliente.nome === nomeCliente) {
                cliente.getProdutosConsumidos.push(produtoAlvo)
                clienteAlvo.push(cliente)
            }

            else{
                clienteAlvo.push(cliente)
            }
        })
    }

        public consumoServico(nomeCliente: string, servicoNome: string): void{
            let clienteAlvo: Array<Cliente> = []
            let servicoAlvo: Servico
            this.servicos.forEach(servico => {
                if(servico.nome === servicoNome) {
                    servicoAlvo = servico
                }
            })
            this.clientes.forEach(cliente => {
                if(cliente.nome === nomeCliente) {
                    cliente.getServicosConsumidos.push(servicoAlvo)
                    clienteAlvo.push(cliente)
                }
    
                else{
                    clienteAlvo.push(cliente)
                }
            })

        this.clientes = clienteAlvo
    }
}