import { toast } from "react-toastify";

const getProductToStr = () => {
    const productList = localStorage.getItem('product-list')
    if (productList) {
        const product = JSON.parse(productList)
        // console.log(product)
        return product;
    }
    else {
        return []
    }

}

const addProductToStr = (id) => {
    // console.log( id.length)

    const product = getProductToStr()
    if (product.includes(id)) {
        // console.log('I have already exit', id)
        toast('Product already add')
    }
    else {
        product.push(id)
        const products = JSON.stringify(product)
        localStorage.setItem('product-list', products)
        toast('Your product add to cart')
    }
}

const getPrice = () => {
    const price = localStorage.getItem('price-list')
    if (price) {
        const totalPrice = JSON.parse(price)
        return totalPrice
    }
    return 0
}

const addPrice = (price) => {
    const getPrices = getPrice()

    const newPrice = price + getPrices
    const priceSt = JSON.stringify(newPrice)
    localStorage.setItem('price-list', priceSt)
    toast('Price Add')

}



export { addProductToStr, getProductToStr, addPrice, getPrice }