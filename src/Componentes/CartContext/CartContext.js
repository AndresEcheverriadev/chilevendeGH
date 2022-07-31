import React from 'react';
import {createContext,useState} from 'react';
import cartMock from '../../Metasite/cartMock'

export const CartContext = createContext([])

function CartContextProvider({children}) {

    const [cartList, setCartList] = useState(cartMock)

    const addToBag = (item,count)=>{
        const findDuplicates = cartList.find(
            (found) => found.id === item.id
          );

        if (findDuplicates) {
            findDuplicates.cantidad += count; 
            setCartList( [ ...cartList]);
        } else {
            setCartList( [ ...cartList, item ] )
        }  
    }
    
    const clearCart = () =>{
        setCartList([])
    };
    
    const deleteItem = (id) =>{
        const indenterItem = cartList.filter((thisItem) => thisItem.id !== id);
        setCartList(indenterItem);
    };

    const subTotalItem = (product) => { return product.price * product.cantidadCompra };

    const cartTotalBuy = cartList.reduce((acc,product) =>{
        return  acc + (product.cantidadCompra * product.price);
    },0);

    const cartTotalItems= cartList.reduce((acc,product) => {
        return acc + (product.cantidadCompra);
    },0);

    return (
        <CartContext.Provider value={{cartList,deleteItem,addToBag,clearCart,subTotalItem,cartTotalItems,cartTotalBuy}}>
           {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
