const productsArray = [
    {
        id: "1",
        title: "product1",
        price: 70
    },
    {
        id: "2",
        title: "product2",
        price: 80
    },
    {
        id: "3",
        title: "product3",
        price: 90
    }
]

function getProductData(id) {

    let productData = productsArray.find(product => product.id === id)

    if (productData == undefined) {
        console.log("product data does not exist for ID:" + id);
        return undefined;
    }
    return productData;
}
export { productsArray, getProductData };