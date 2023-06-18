import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import RG from "../modelo/rg";
import Telefone from "../modelo/telefone";
import Cadastro from "./cadastro";

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do cliente`);
        let entrada = 0
        let nome = this.entrada.receberTexto(`Por favor, informe o nome do cliente: `)
        let nomeSocial = this.entrada.receberTexto(`Por favor, informe o nome social do cliente: `)
        let valor = this.entrada.receberTexto(`Por favor, informe o número do cpf: `);
        let data = this.entrada.receberTexto(`Por favor, informe a data de emissão do cpf, no padrão dd/mm/yyyy: `);
        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()
        let dataEmissao = new Date(ano, mes, dia)
        let cpf = new CPF(valor, dataEmissao);
        let telefones: Array<Telefone> = [];
        let rgs: Array<RG> = [];
        let dataCadastro = new Date();
        let clienteGenero = this.entrada.receberTexto(`Por favor, informe o gênero do cliente: `)
        let execucao = true;
        while (execucao) {
            console.log(`Opções:`);
            console.log(`1 - Cadastrar telefone`);
            console.log(`0 - Parar de Cadastrar Telefones`);

            let opcao = this.entrada.receberNumero(`Por favor, escolha uma opção: `)

            switch (opcao) {
                case 1:
                    //opção 1
                    let numero = this.entrada.receberTexto(`Por favor, informe o seu número: `);
                    let ddd = this.entrada.receberTexto(`Por favor, informe o seu ddd: `)
                    let telefone = new Telefone(ddd, numero);
                    telefones.push(telefone)
                    break;
                case 0:
                    //opção 2
                    execucao = false
                    console.log(`Parando de cadastrar telefone`)
                    break;
            }
        };

        execucao = true

        while (execucao) {
            console.log(`Opções:`)
            console.log(`1 - Cadastrar rgs`);
            console.log(`0 - Parar de Cadastrar Rgs`);

            let opcao = this.entrada.receberNumero(`Por favor, escolha um rg: `)

            switch (opcao) {
                case 1:
                    //opção 1
                    let valorRG = this.entrada.receberTexto(`Por favor, informe o número do RG: `);
                    let dataRG = this.entrada.receberTexto(`Por favor informe a data de emissão do RG, no padrão dd/mm/yyyy: `);
                    let partesDataRG = dataRG.split('/')
                    let anoRG = new Number(partesDataRG[2].valueOf()).valueOf()
                    let mesRG = new Number(partesDataRG[1].valueOf()).valueOf()
                    let diaRG = new Number(partesDataRG[0].valueOf()).valueOf()
                    let dataEmissaoRG = new Date(anoRG, mesRG, diaRG)
                    let rg = new RG(valorRG, dataEmissaoRG);
                    rgs.push(rg);
                    break;
                
                case 0:
                    //opção 2
                    execucao = false
                    console.log(`Parando de cadastrar rg`)
                    break;
            }
        }
        
        let cliente = new Cliente(nome, nomeSocial, cpf, rgs, telefones, clienteGenero);
        
        this.clientes.push(cliente)
        console.log(`\nCadastro concluído :)\n`);
    }
}