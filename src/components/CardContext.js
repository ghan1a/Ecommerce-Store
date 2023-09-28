import { createContext, useState } from 'react';
import { productsArray, getProductData } from "../productStore";

export const CartContext = createContext({
    items: [],
    getProductQuantity: (id) => { },
    addOneToCart: () => { },
    removeOneFromCart: () => { },
    deleteFromCart: () => { },
    getTotalCost: () => { }
});

export function CartProvider({ children }) {
    const [cartProducts, setCartProducts] = useState([]);

    function getProductQuantity(id) {
        const quantity = cartProducts.filter(product => product.id === id)?.length
        if (quantity === undefined) {
            return 0;
        }
        else {
            return quantity;
        }
    }

    function addOneToCart(id) {
        const productToAdd = productsArray.find(product => product.id === id);
        if (productToAdd) {
            setCartProducts([
                ...cartProducts,
                productToAdd
            ])
        }

        // else {
        //     setCartProducts(
        //         productsArray.map(
        //             product =>
        //                 product.id === id
        //                     ? { ...product, quantity: product.quantity + 1 }
        //                     : product
        //         )
        //     )
        // }

    }

    function removeOneFromCart(productId) {
        const indexToRemove = cartProducts.findIndex((product) => product.id === productId);
        if (indexToRemove !== -1) {
            const updatedCart = [...cartProducts];
            updatedCart.splice(indexToRemove, 1);
            setCartProducts(updatedCart);
        }
    };

    // function removeOneFromCart(id) {
    //     const quantity = getProductQuantity(id);

    //     if (quantity === 1) {
    //         deleteFromCart(id);
    //     }

    //     else {
    //         setCartProducts(
    //             cartProducts.map(
    //                 product =>
    //                     product.id === id
    //                         ? { ...product, quantity: product.quantity - 1 }
    //                         : product
    //             )
    //         )
    //     }
    // }

    function deleteFromCart(id) {
        setCartProducts(
            cartProducts =>
                cartProducts.filter(currentProduct => {
                    return currentProduct.id !== id;
                })
        )
    }

    function getTotalCost() {
        let totalCost = 0;
        cartProducts.map((cartItem) => {
            const productData = getProductData(cartItem.id);
            totalCost += (productData.price * cartItem.quantity);
        });
        return totalCost;
    }

    const contextValue = {
        items: cartProducts,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost
    }
    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider;