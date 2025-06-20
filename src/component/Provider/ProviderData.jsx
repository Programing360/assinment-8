import React, { createContext, useEffect, useState } from 'react';
import { getPrice, getProductToStr } from '../Utility/Utility';
export const dataContext  = createContext('')


const ProviderData = ({children}) => {
    const [product, setProduct] = useState(0)

  useEffect(()=>{
    const product = getProductToStr()
    setProduct(product)
  },[])
    
    console.log(product)
    const price = getPrice()

    const sendData = {
      product:  product,
        price: price
    }
    return <dataContext.Provider value={sendData}>{children}</dataContext.Provider>
    ;
};

export default ProviderData;