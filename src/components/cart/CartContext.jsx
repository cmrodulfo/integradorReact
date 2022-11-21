import { createContext, useState } from "react";

//lo usamos cuando algunos datos tienen q ser accesibles por varios componentes de diferente nivel
export const CartContext = createContext() 

export const CartProvider = ({children}) =>{

    const [cartCounter, setCartCounter] = useState(0)
    const [products, setProducts] = useState([])

    function addProduct (value, product){
        if(value > 0 ){
            setCartCounter(cartCounter + value)
            setProducts([...products, {...product, total: value}]) //
        }
    }



    return(
        <CartContext.Provider value={{
            addProduct,
            cartCounter,
            products
        }}>
            {children}
        </CartContext.Provider>
    )


}