import { useLoaderData, useParams } from 'react-router-dom';
import ProductDetail from '../ProductDetail/ProductDetail';
import NavBar from '../NavBar/NavBar';
import DashBord from '../DashBord/DashBord';
import { createContext, useEffect, useState } from 'react';
import { addPrice, addProductToStr } from '../Utility/Utility';
import { ToastContainer } from 'react-toastify';
import { addWishList, getWishList } from '../WishList/WishList';
import img from '../../assets/black-flat.webp'
export  const wishListContext = createContext(0)
const ProductDetails = () => {
    const [product, setProduct] = useState([])
    const [wishLength, setWishLength] = useState(0)
    console.log(wishLength)
    const { product_id } = useParams()
    const productId = parseInt(product_id)
    const products = useLoaderData()

    // provied data from nav.jsx by context Api
   

    useEffect(() => {
        const onePro = products.find(product => product.product_id === productId)
        setProduct(onePro)
    }, [])
    const { product_title, price, description, specification, rating, product_image, availability } = product
    // <FontAwesomeIcon icon="fa-light fa-cart-shopping" />
    const handleProductList = (id) => {
        // const num = parseInt(id)
        // console.log('hello',id)
        addPrice(price)
        addProductToStr(id)

    }
    const handleWishListBtn = (id) => {
        addWishList(id)
        const wishList = getWishList()
        setWishLength(wishList.length)
    }
    return (
        <wishListContext.Provider value={wishLength}>
            <div >
                <NavBar></NavBar>
                <div className=''>
                    <div className="bg-[#9538E2] h-50 lg:h-70 lg:mb-96 mb-[800px]">
                        <h1 className="text-4xl font-bold text-white text-center pt-4">Product Details</h1>
                        <p className='w-[700px] mx-auto text-center pt-4 text-white'>{description}</p>
                        <div className="hero bg-base-200 lg:w-[1000px] w-[500px] mx-auto mt-8 rounded-2xl">
                            <div className="hero-content flex-col lg:flex-row">
                                <img
                                    src={product_image}
                                    className="lg:max-w-sm  w-56 rounded-lg shadow-2xl"
                                />
                                <div>
                                    <h1 className="text-xl lg:text-4xl font-bold">{product_title}</h1>
                                    <p className="font-bold py-3">Price : ${price}</p>

                                    <p className='bg-[#309C081A] w-30 p-1 rounded-2xl'><span className='text-[#309C08]'>{availability}</span></p>

                                    <p className="py-3">
                                        {description}
                                    </p>
                                    <div>
                                        <h2 className='font-bold'>specification</h2>
                                        {
                                            specification && specification.map((d, index) => <li key={index}>{d}</li>)
                                        }
                                    </div>
                                    <div className='py-4 '>
                                        <h1 className="font-bold">Rating</h1>
                                        <div className='lg:flex items-center gap-8'>
                                            <div className="rating">
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />

                                            </div>
                                            <div className='bg-fuchsia-200 p-2 rounded-xl'>
                                                {rating}
                                            </div>
                                        </div>
                                    </div>

                                    <div className='flex justify-center items-center gap-4'>
                                        <button onClick={() => handleProductList(product_id)} className="btn btn-primary">Add To Card </button>
                                        <ToastContainer></ToastContainer>
                                        <div onClick={() => handleWishListBtn(product_id)} className="dropdown dropdown-end">
                                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar ">
                                                <div className="w-10 rounded-full">
                                                    <img className="w-20" src={img} alt="" />
                                                </div>


                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </wishListContext.Provider>
    );
};

export default ProductDetails;