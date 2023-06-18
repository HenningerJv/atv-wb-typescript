import Cliente from "../modelo/cliente";
import Servico from "../modelo/servico";
import Listagem from "./listagem";

export default class ConsumoProdutoServicoClienteGenero extends Listagem {
    private clientes: Array<Cliente>
    private servicos: Array<Servico>
    constructor(clientes:Array<Cliente>, servicos:Array<Servico>){
        super();
        this.clientes = clientes
        this.servicos = servicos
    }

    public listar(){
        let listaServico:any = []
        this.servicos.forEach((servico)=>{
            let linha = {
                id:servico.valor,
                servico:servico.nome,
                consumoMasculino:0,
                consumoFeminino:0
            }
            this.clientes.forEach((cliente)=>{
                if(cliente.getClienteGenero === 'feminino'){
                    cliente.getServicosConsumidos.forEach((consumoServico)=>{
                        if(consumoServico.nome === servico.nome){
                            linha.consumoFeminino += 1
                        }
                    })
                }
                else if (cliente.getClienteGenero === 'masculino'){
                    cliente.getServicosConsumidos.forEach((consumoServico)=>{
                        if(consumoServico.nome === servico.nome){
                            linha.consumoMasculino += 1
                        }
                    })
                }
            })
            listaServico.push(linha)
        })
        let listaFeminina = listaServico.sort((a, b)=>{return b.consumoFeminino - a.consumoFeminino}) 
        let listaMasculino = listaServico.sort((a, b)=>{return b.consumoMasculino - a.consumoMasculino})

        console.log('Serviços mais consumido por Mulheres:')
        let contagem = 1
        listaFeminina.forEach((lista)=>{
            if(contagem <= 5){
                console.log(`ID: ${lista.id} | ${lista.servico} | Consumido ${lista.consumoFeminino} vezes`)
                contagem += 1
            }
        })
        contagem = 1
        console.log('\nServiços mais consumido por Homens:')
        listaMasculino.forEach((lista)=>{
            if(contagem <= 5){
                console.log(`ID: ${lista.id} | ${lista.servico} | Consumido ${lista.consumoMasculino} vezes`)
                contagem += 1
            }
        })
    }
}