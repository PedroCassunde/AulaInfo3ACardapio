import { useState } from "react";
import "../src/globals.css";


export default function App() {
    const [listaProdutos, setProdutos] = useState([

        {

            id: 1,

            item: "Hambúrguer",

            imagem: "https://www.assai.com.br/sites/default/files/shutterstock_1806472312.jpg",

            preco: "R$ 125,99"

        },

        {

            id: 2,

            item: "Coca-cola 350ml",

            imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm4S15squn95k7qtrVOpMX1MOJGe48y4B7FQ&s",

            preco: "R$ 389,99"

        },

        {

            id: 3,

            item: "Batata Frita",

            imagem: "https://gastronomiacarioca.zonasul.com.br/wp-content/uploads/2023/05/batata_frita_destaque_ilustrativo_zona_sul.jpg",

            preco: "R$ 78,99"

        },

        {

            id: 4,

            item: "Suco Natural",

            imagem: "https://helenalunardelli.com.br/wp-content/uploads/2013/02/sucos.jpg",

            preco: "R$ 128,99"

        },

    ]);

    const [listaPedidos, setPedidos] = useState([]);

   const adicionarProdutoPedido = (produto) => {
    setPedidos([...listaPedidos, produto]);
   }
   console.table(listaPedidos);    

   const removerItem = (id)=> {
    let remover = false;
    let listaAux = listaPedidos.filter((pedido)=>{
        if(pedido.id == id){
            if(remover == false){
                remover = true;
                return null
            }
        }else{
             return pedido;
        }
    });
    setPedidos(listaAux, remover);
   }

    return (
       <div className="bloco-principal">
        <div className="bloco-produtos">
        {
            listaProdutos.map((produto)=>
            <div key={produto.id}>
                <img src={produto.imagem}/>
                <p>{produto.item}</p>
                <button onClick={() =>
                adicionarProdutoPedido(produto)}>Quero</button>
            </div>
            )
            }
       </div>
       <div className="bloco-pedidos">
<p>Meus Pedidos</p>
{
    listaPedidos.map((produto)=>
    <table key = {produto.id}>
        <tr>
            <td>{produto.item}</td>
            <tb>{produto.preco}</tb>
            <td>
                <button onClick={()=> removerItem(produto.id)} className="buttonType">X</button>
            </td>
        </tr>
    </table>
    )
}
       </div>
       </div>

    );
}