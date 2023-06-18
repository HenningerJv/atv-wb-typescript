import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa"
import CadastroCliente from "../negocio/cadastroCliente";
import CadastroProduto from "../negocio/cadastroProduto";
import CadastroServico from "../negocio/cadastroServico";
import ExcluidorCliente from "../negocio/excluidorCliente";
import ExcluidorProduto from "../negocio/excluidorProduto";
import ListagemClientes from "../negocio/listagemClientes";
import ListagemProdutos from "../negocio/listagemProdutos";
import ListagemServicos from "../negocio/listagemServico";
import SelecionadorCliente from "../negocio/selecionadorCliente";
import SelecionadorProduto from "../negocio/selecionadorProduto";
import ExcluidorServico from "../negocio/excluidorServico";
import SelecionadorServico from "../negocio/selecionadorServico";
import AlteradorCliente from "../negocio/alteradorCliente";
import AlteradorProduto from "../negocio/alteradorProduto";
import AlteradorServico from "../negocio/alteradorServico";
import ConsumoProdutoServicoCliente from "../negocio/consumoProdutoServicoCliente";
import ConsumoProdutoClienteGenero from "../negocio/consumoProdutoClienteGenero";
import ConsumoServicoClienteGenero from "../negocio/consumoServicoClienteGenero";

console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Listar todos os clientes`);
    console.log(`3 - Cadastrar produto`);
    console.log(`4 - Listar todos os produtos`);
    console.log(`5 - Cadastrar serviço`);
    console.log(`6 - Listar todos os serviços`);
    console.log(`7 - Excluir um cliente`);
    console.log(`8 - Excluir um produto`);
    console.log(`9 - Excluir um serviço`);
    console.log(`10 - Alterar um cliente`);
    console.log(`11 - Alterar um produto`);
    console.log(`12 - Alterar um servico`);
    console.log(`13 - Produtos Consumidos por cliente`);
    console.log(`14 - Serviços Consumidos por cliente`);
    console.log(`15 - 5 Serviços Consumidos por gênero`);
    console.log(`16 - 5 Produtos Consumidos por gênero`);
    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            let cadastro = new CadastroCliente(empresa.getClientes)
            cadastro.cadastrar()
            break;
        case 2:
            let listagem = new ListagemClientes(empresa.getClientes)
            listagem.listar()
            break;
        case 3:
            let cadastroProduto = new CadastroProduto(empresa.getProdutos)
            cadastroProduto.cadastrar()
            break;
        case 4:
            let listagemProdutos = new ListagemProdutos(empresa.getProdutos)
            listagemProdutos.listar()
            break;
        case 5:
            let cadastroServico = new CadastroServico(empresa.getServicos)
            cadastroServico.cadastrar()
            break;
        case 6:
            let listagemServicos = new ListagemServicos(empresa.getServicos)
            listagemServicos.listar()
            break;
        case 7:
            let selecionadorCliente = new SelecionadorCliente(empresa.getClientes)
            let cpf = entrada.receberTexto(`Por favor, digite o cpf do cliente para excluir: `)
            //let cliente = selecionadorCliente.selecionar(cpf)

            let excluidor = new ExcluidorCliente(empresa.getClientes)
            excluidor.excluir(cpf)
            break;
        case 8:
            let selecionadorProduto = new SelecionadorProduto(empresa.getProdutos)
            let nomeProduto = entrada.receberTexto(`Por favor, digite o nome do produto para excluir: `)
            //let produto = selecionadorProduto.selecionar(nomeProduto)

            let apagador = new ExcluidorProduto(empresa.getProdutos)
            apagador.excluir(nomeProduto)
            break;
        case 9:
            let selecionadorServico = new SelecionadorServico(empresa.getServicos)
            let nomeServico = entrada.receberTexto(`Por favor, digite o nome do serviço para excluir: `)
            let servico = selecionadorServico.selecionar(nomeServico)

            let removedor = new ExcluidorServico(empresa.getServicos)
            removedor.excluir(nomeServico)
            break;

        case 10:
            let escolhedorCliente = new SelecionadorCliente(empresa.getClientes)
            let clienteCPF = entrada.receberTexto(`Por favor, digite o cpf do Cliente para alterar: `)

            let alterador = new AlteradorCliente(empresa.getClientes)
            alterador.alterar(clienteCPF)
            break;

        case 11:
            let escolhedorProduto = new SelecionadorProduto(empresa.getProdutos)
            let produtoNome = entrada.receberTexto(`Por favor, digite o nome do Produto para alterar: `)

            let transformador = new AlteradorProduto(empresa.getProdutos)
            transformador.alterar(produtoNome)
            break;

        case 12:
            let escolhedorServico = new SelecionadorServico(empresa.getServicos)
            let servicoNome = entrada.receberTexto(`Por favor, digite o nome do Serviço para alterar: `)

            let mudador = new AlteradorServico(empresa.getServicos)
            mudador.alterar(servicoNome)
            break;

        case 13:
            let clienteNome = entrada.receberTexto(`Por favor, digite o nome do cliente que consumiu um produto: `)
            let nomeProdutoConsumido = entrada.receberTexto(`Por favor, digite o nome do produto consumido: `)

            let consumoProdutoCliente = new ConsumoProdutoServicoCliente(empresa.getClientes, empresa.getProdutos, empresa.getServicos)
            consumoProdutoCliente.consumoProduto(clienteNome, nomeProdutoConsumido)
            break;

        case 14:
            let nomeCliente = entrada.receberTexto(`Por favor, digite o nome do cliente que consumiu um serviço: `)
            let nomeServicoConsumido = entrada.receberTexto(`Por favor, digite o nome do serviço consumido: `)

            let consumoServicoCliente = new ConsumoProdutoServicoCliente(empresa.getClientes, empresa.getProdutos, empresa.getServicos)
            consumoServicoCliente.consumoServico(nomeCliente, nomeServicoConsumido)
            break;

        case 15:
            let clienteGenero = entrada.receberTexto(`Por favor, digite o genêro que consumiu 5 serviços: `)

            let consumoServico = new ConsumoServicoClienteGenero(empresa.getClientes, empresa.getServicos)
            consumoServico.listar(clienteGenero)
            break;

        case 16:
            let clienteSexo = entrada.receberTexto(`Por favor, digite o genêro que consumiu 5 produtos: `)

            let consumoProduto = new ConsumoProdutoClienteGenero(empresa.getClientes, empresa.getProdutos)
            consumoProduto.listar(clienteSexo)
            break;

        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}