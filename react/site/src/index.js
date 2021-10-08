import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import './styles.css'

import App from './InfoX/home'
import Carrinho from "./InfoX/carrinho"
import DetalheProduto from "./InfoX/detalheProduto"
import Contador from "./InfoX/carrinho/contador"
import CarrinhoItem from "./InfoX/carrinho/carrinhoItem"

const rootElement = document.getElementById("root");
ReactDOM.render(
    <StrictMode>
        <BrowserRouter>
           <Switch>
               <Route path="/" exact={true} component={App}/>
               <Route path="/detalhe" component={DetalheProduto}/>
               <Route path="/carrinho"  component={Carrinho}/>
               <Route path="/contador" exact={true}  component={Contador}/>
               <Route path="/itemcarrinho"  component={CarrinhoItem}/>
           </Switch>
        </BrowserRouter>
    </StrictMode>,
rootElement
);

