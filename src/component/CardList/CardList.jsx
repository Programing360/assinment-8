import React from 'react';

const CardList = ({ product }) => {
    // console.log(product)
    const { product_image, product_title, description, price } = product
    return (
        <div className='flex items-center gap-3 p-5 border-2 mb-4 rounded-2xl lg:w-[800px] bg-purple-600'>
            <img className='w-24 rounded-lg' src={product_image} alt="" />
            <div>
                <h1 className="text-xl text-white">{product_title}</h1>
                <p className='text-white'>{description}</p>
                <p className='font-bold'>Price : {price}</p>
            </div>

        </div>
    );
};

export default CardList;