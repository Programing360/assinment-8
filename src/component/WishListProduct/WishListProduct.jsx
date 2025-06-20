import React from 'react';
import { addProductToStr } from '../Utility/Utility';
import { ToastContainer } from 'react-toastify';

const WishListProduct = ({ product }) => {
    const { product_image, product_title, description, price, product_id } = product
    // console.log(product)
    const handleCartBtn = (id) => {
        console.log(id)
        addProductToStr(id)
    }
    return (
        <div>
            <div className='flex gap-6 border-2 rounded-2xl p-6 mb-4 shadow-xl bg-fuchsia-800 text-white'>
                <img className='w-32 border-2 rounded-2xl border-gray-400 p-3' src={product_image} alt="" />
                <div className=''>
                    <h2 className="text-xl font-bold">{product_title}</h2>
                    <p className='font-bold'>Description : <span>{description}</span></p>
                    <p className="font-bold">Price : {price}</p>

                    <div className='pt-4'>
                        <button onClick={() => handleCartBtn(product_id)} className='btn border-2 rounded-2xl p-4'>Add To Cart</button>
                        <ToastContainer></ToastContainer>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default WishListProduct;