import React from 'react';
import {createContext,useState} from 'react';
import productSet from '../../Metasite/productSet'

export const CartContext = createContext([])

function CartContextProvider({children}) {
    const [cartList, setCartList] = useState(productSet)
    const [NotItems, SetNoItems] = useState()

    const addToBag=(item,count)=>{

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
    
    const clearBag = () =>{
        setCartList([])
    }
    
    const itemsFinder = () => {
       
        if (cartList.length === 0) {
            SetNoItems(true);
        }
        else {
            SetNoItems(false);
        } 
    }

    const deleteItem = (id) =>{
        const indenterItem = cartList.filter((thisItem) => thisItem.id !== id);
        setCartList(indenterItem);
    }

    const calcTotalItems = cartList.reduce((acc,product) =>{
        return  acc + (product.cantidad * product.Price);
    },0);

    
    const calcSumTotalItems = cartList.reduce((acc,product) => {
        return acc + (product.cantidad);
    },0);


    return (
        <CartContext.Provider value={{cartList,deleteItem,addToBag,clearBag,itemsFinder,NotItems,calcTotalItems,calcSumTotalItems}}>
           {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
