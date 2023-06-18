import { Component } from "react";

type props = {
    tema: string
    seletorView: Function
}

export default class FormularioCadastroProduto extends Component<props> {
    render() {
        let estiloBotao = `btn waves-effect waves-light ${this.props.tema}`
        return (
            <div className="row ">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="product_name" type="text" className="validate" />
                            <label htmlFor="product_name">Nome do produto:</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="product_price" type="number" step="0.01" className="validate" />
                            <label htmlFor="product_price">Preço:</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12 center">
                            <button className={estiloBotao} onClick={(e) => this.props.seletorView('Produtos', e)} type="submit" name="action">{'Cadastrar'}
                                <i className="material-icons left">send</i>
                            </button>
                            <a className="waves-effect waves-light blue darken-4 btn" onClick={(e) => this.props.seletorView('Produtos', e)}><i className="material-icons left">cancel</i>{'Cancelar'}</a>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
    
}