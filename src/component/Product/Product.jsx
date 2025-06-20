import { Link } from 'react-router-dom';
import '../Product/product.css';
import { useState } from 'react';
const Product = ({ Product }) => {
    const { product_title, product_image, price, product_id } = Product
    
    return (
        <div>

            <div className="card bg-base-100 w-80 shadow-sm mb-5">
                <figure>
                    <img

                        className="product w-60"
                        src={product_image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{product_title}</h2>
                    <p>Price : {price}</p>
                    <div className="card-actions justify-start">
                        <Link to={`/datas/${product_id}`}>
                            <button className="btn rounded-4xl border-e-purple-400">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;