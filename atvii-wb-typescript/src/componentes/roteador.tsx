import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import TelaCliente from "./telaCliente";
import TelaProduto from "./telaProduto";
import TelaServico from "./telaServiço";
import FormularioCadastroCliente from "./cadastroCliente";
import FormularioCadastroProduto from "./cadastroProduto";
import FormularioCadastroServico from "./cadastroServico";
import ListaProduto from "./listaProduto";
import ListaCliente from "./listaCliente";
import ListaServico from "./listaServico";
import ListaConsumo from "./listaConsumo";
import ListaConsumoProduto from "./listaConsumoProduto";
import DadoCliente from "./dadoCliente";
import DadoProduto from "./dadoProduto";
import DadoServico from "./dadoServico";
import ListaConsumoServico from "./listaConsumoServico";

type state = {
    tela: string

}

export default class Roteador extends Component<{}, state> {
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Clientes'
        }
        this.selecionarView = this.selecionarView.bind(this)
    }

    selecionarView(novaTela: string, evento: Event) {
        evento.preventDefault()
        console.log(novaTela);
        this.setState({
            tela: novaTela
        })
    }

    render() {
        let barraNavegacao = <BarraNavegacao seletorView={this.selecionarView} tema="blue lighten-1" botoes={['Clientes', 'Produtos', 'Servicos', 'Listagens Específicas']} />
        if (this.state.tela === 'Clientes') {
            return (
                <>
                    {barraNavegacao}
                    <TelaCliente tema="blue lighten-1" seletorView={this.selecionarView}/>
                </>
            )
        } else if (this.state.tela === 'Cadastrar Cliente') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroCliente tema="blue darken-4" seletorView={this.selecionarView}/>
                </>
            )
        } else if (this.state.tela === 'Listar Clientes') {
            return (
                <>
                    {barraNavegacao}
                    <ListaCliente tema="blue lighten-1" seletorView={this.selecionarView}/>
                </>
            )
        } else if (this.state.tela === 'Dados Cliente') {
            return (
                <>
                    {barraNavegacao}
                    <DadoCliente tema="blue lighten-1" seletorView={this.selecionarView}/>
                </>
            )
        } else if (this.state.tela === 'Produtos') {
            return (
                <>
                    {barraNavegacao}
                    <TelaProduto tema="blue ligthen-1" seletorView={this.selecionarView}/>
                </>
            )
            
        } else if (this.state.tela === 'Cadastrar Produto') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroProduto tema="blue darken-4" seletorView={this.selecionarView}/>
                </>
            )
        } else if (this.state.tela === 'Listar Produtos') {
            return (
                <>
                    {barraNavegacao}
                    <ListaProduto tema="blue ligthen-1" seletorView={this.selecionarView}/>
                </>
            )
        } else if (this.state.tela === 'Dados Produto') {
            return (
                <>
                    {barraNavegacao}
                    <DadoProduto tema="blue ligthen-1" seletorView={this.selecionarView}/>
                </>
            )
        } else if (this.state.tela === 'Servicos') {
            return (
                <>
                    {barraNavegacao}
                    <TelaServico tema="blue ligthen-1" seletorView={this.selecionarView}/>
                </>
            )
        } else if (this.state.tela === 'Cadastrar Servico') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroServico tema="blue darken-4" seletorView={this.selecionarView}/>
                </>
            )
        } else if (this.state.tela === 'Listar Servicos') {
            return (
                <>
                    {barraNavegacao}
                    <ListaServico tema="blue ligthen-1" seletorView={this.selecionarView}/>
                </>
            )
        } else if (this.state.tela === 'Dados Servico') {
            return (
                <>
                    {barraNavegacao}
                    <DadoServico tema="blue ligthen-1" seletorView={this.selecionarView}/>
                </>
            )
        } else if (this.state.tela === 'Listar Consumo') {
            return (
                <>
                    {barraNavegacao}
                    <ListaConsumo tema="blue ligthen-1" seletorView={this.selecionarView}/>
                </>
            )
        } else if (this.state.tela === 'Listar Consumo Produto') {
            return (
                <>
                    {barraNavegacao}
                    <ListaConsumoProduto tema="blue ligthen-1" seletorView={this.selecionarView}/>
                </>
            )
        } else if (this.state.tela === 'Listar Consumo Servico') {
            return (
                <>
                    {barraNavegacao}
                    <ListaConsumoServico tema="blue ligthen-1" seletorView={this.selecionarView}/>
                </>
            )
        }
       /*  else if (this.state.tela === 'Vincular Produto Servico') {
            return (
                <>
                    {barraNavegacao}
                    <VinculaProdutoServico tema="blue ligthen-1" seletorView={this.selecionarView}/>
                </>
            )
        } */
    }
}