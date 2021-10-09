import { Container } from "./styled";
import { useState } from "react";
import Produto from "../produto";

export default function Home() {
    const [produtos, setProdutos] = useState([]);

    function listar() {
        const r = [
            {
                id: 10001,
                imagem: "data:image/jpeg;base64,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",
                titulo: "cachorro de maria chiquinha",
                preco: "R$ 3.000",
                descricao: "literalmente um cachorro de maria chiquinha, voce deixaria esse cachorro de maria chiquinha que não sabe programar fazer seu site de doces??? voce deixaria esse cachorrinho burro de maria chiquinha trabalhar no seu site hein voce deixaria?",
                especificacoes: "ele literalmente tem duas marias chiquinhas e acende no escuro"
              },
              {
                id: 10002,
                imagem: "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/m/c/mcr-fnr-pp0131.jpg",
                titulo: "Poltrona Gamer",
                preco: "R$ 1.350,00",
                descricao: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!",
                especificacoes: "Esse produto é de ótima qualidade você não vai se arrepender jamais na sua vidinha!!"
              },
              {
                id: 10003,
                imagem: "https://images-americanas.b2w.io/produtos/1846627018/imagens/teclado-gamer-de-uma-mao-hxsj-j50-com-led-mouse-gamer-iluminado-com-fio/1846627018_1_large.jpg",
                titulo: "Teclado Gamer",
                preco: "R$ 680,00",
                descricao: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!",
                especificacoes: "Esse produto é de ótima qualidade você não vai se arrepender jamais na sua vidinha!!" 
              }
        ]

        setProdutos(r);
    }

    return (
        <Container>
            <h1> Sejam bem-vindos!!!!</h1>
            <br/>

            <button onClick={listar}> Listar :) </button>
            <br/>

            <div className= "lista-produtos">
                {produtos.map(item =>
                    <Produto info={item}/>
                )}
            </div>
        </Container>
    )
}
