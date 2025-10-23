import { useState } from 'react';
import Products from '../components/products/Products.jsx';
import ShoppingCart from '../components/shoppingcart/ShoppingCart.jsx';

const Inicio = () => {
  const [shoppingCart, setShoppingCart] = useState([]);

  const addItemShoppingCart = (product) => { 
    setShoppingCart([...shoppingCart, product])
   };

   const deleteItemShoppingCart = (deleteIndex) => {
     setShoppingCart(shoppingCart.filter((_,index) => index !== deleteIndex ));
    };

  
  return(
    <>
      <Products addItem = { addItemShoppingCart } /> 
      <hr/>
      <ShoppingCart
       itemsShoppingCart = { shoppingCart }
       productsDeletes = { deleteItemShoppingCart }
      
      />

    </>
  );
}

export default Inicio;