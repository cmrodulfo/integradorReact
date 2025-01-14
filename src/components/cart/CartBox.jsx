import { Badge, Button } from "react-bootstrap";
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";

export const CartBox = ({products}) => {

    const [counter, setCounter] = useState(0);
    

    const {addProduct} = useContext(CartContext);
    
    const sumProd = products.price*counter;

    function add(){
        setCounter(counter + 1);  //restringir de acuerdo al stock en base de datos
        
    }

    function remove(){
       counter > 0 && setCounter(counter - 1);
       
    }


    return(
        <div className="cart-box">

            <div style={{justifyContent:"center"}}>
                <div >
                    <button style={{marginRight:".3em"}} onClick={remove}>-</button> {/*centrar estos botones*/}
                    <Badge bg="dark"  pill>
                        {counter}
                    </Badge>
                    <button style={{marginLeft:".3em"}} onClick={add}>+</button>
                </div>
                
                <h5 style={{marginTop:"1em"}}>Total: {sumProd} </h5>
           </div>

            
           
            <Link to = {'/cart'}>

                <Button variant="dark" onClick={ () =>addProduct(counter, products, sumProd)}>Agregar al carrito</Button>

            </Link>
           
        </div>
    )
}

//deberían ubicarse un item debajo del otro en el cart al comprar varios pero no está pasando, solo muestra 1