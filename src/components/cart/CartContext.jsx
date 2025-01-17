import { createContext, useState } from "react";

//lo usamos cuando algunos datos tienen q ser accesibles por varios componentes de diferente nivel
export const CartContext = createContext() 

export const CartProvider = ({children}) =>{

    const [cartCounter, setCartCounter] = useState(0)
    const [products, setProducts] = useState([])
    const [total, setTotal] = useState(0)  

        
   
    
    function addProduct (value, product, sumProd){

      
      
        if(value > 0 ){
            setCartCounter(cartCounter + value)
            setProducts([...products, {...product, numProducts: value}]) 
            setTotal(total + sumProd);
           
            
        }


    }



    return(
        <CartContext.Provider value={{
            addProduct,
            cartCounter,
            products,
            
        }}>
            {children}
        </CartContext.Provider>
    )


}