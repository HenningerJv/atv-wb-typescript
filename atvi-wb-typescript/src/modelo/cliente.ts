import CPF from "./cpf"
import Produto from "./produto"
import RG from "./rg"
import Servico from "./servico"
import Telefone from "./telefone"

export default class Cliente {
    public nome: string
    public nomeSocial: string
    private cpf: CPF
    //para realizar a declaração da lista de um certo tipo é feito da seguinte forma "Array<Tipo_Dos_elementos_array>"
    private rgs: Array<RG>
    private dataCadastro: Date
    private telefones: Array<Telefone>
    private produtosConsumidos: Array<Produto>
    private servicosConsumidos: Array<Servico>
    private clienteGenero: string
    constructor(nome: string, nomeSocial: string, cpf: CPF, rgs: Array<RG>, telefones: Array<Telefone>, clienteGenero: string) {
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.cpf = cpf
        this.rgs = rgs
        this.dataCadastro = new Date()
        this.telefones = telefones
        this.produtosConsumidos = []
        this.servicosConsumidos = []
        this.clienteGenero = clienteGenero
    }
    public get getCpf(): CPF {
        return this.cpf
    }
    public get getCpfValor(): string {
        return this.cpf.getValor
    }
    public get getRgs(): Array<RG> {
        return this.rgs
    }
    public get getDataCadastro(): Date {
        return this.dataCadastro
    }
    public get getTelefones(): Array<Telefone> {
        return this.telefones
    }
    public get getProdutosConsumidos(): Array<Produto> {
        return this.produtosConsumidos
    }
    public get getServicosConsumidos(): Array<Servico> {
        return this.servicosConsumidos
    }
    public set setClienteGenero(genero) {
        this.clienteGenero = genero
    }
    public get getClienteGenero(): string {
        return this.clienteGenero
    }
}