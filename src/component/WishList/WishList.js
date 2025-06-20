const getWishList = () => {
    const data = localStorage.getItem('wish-list')
    if(data){
        const dataStr = JSON.parse(data)
        return dataStr
    }
    return []
}


const addWishList = (id) => {
    console.log(id)
    const WishProduct = getWishList()
    if(WishProduct.includes(id)){
        console.log('found it')
    }
    else{
        WishProduct.push(id)
        const product = JSON.stringify(WishProduct)
        localStorage.setItem('wish-list', product)
    }
}

export {addWishList, getWishList}