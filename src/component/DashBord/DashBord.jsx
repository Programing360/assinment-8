import React, { useContext, useEffect, useState } from 'react';
import NavBar from '../NavBar/NavBar';
import { getPrice, getProductToStr } from '../Utility/Utility';
import { Link, useLoaderData } from 'react-router-dom';
import CardList from '../CardList/CardList';
import { getWishList } from '../WishList/WishList';
import WishListProduct from '../WishListProduct/WishListProduct';
import { dataContext } from '../Provider/ProviderData';
import payImg from '../../assets/success 1.jpg'





const DashBord = () => {
    const [product1, setProduct1] = useState([])
    const [price, setPrice] = useState('0.00')
    const [wishPro, setWishPro] = useState([])
    // const [id, setId] = useState(0)
    const productData = useLoaderData()
    // const { product } = useContext(dataContext)


    // useEffect(() => {
    //     setId(parseInt(product))
    // }, [])
    
    useEffect(() => {
        const priceList = getPrice()
        setPrice(priceList)
    }, [])

    const handlepurchasebtn = (e) => {
        document.getElementById('my_modal_3').showModal()
        // const getPrices = getPrice()
        // localStorage.removeItem(getPrices)

        // const getProduct = getProductToStr()
        //  localStorage.removeItem(getProduct)
        e.preventDefault()
        
        localStorage.getItem('price-list')
        localStorage.removeItem('price-list')
        localStorage.getItem('product-list')
        localStorage.removeItem('product-list')
        // console.log(d)
    }
    useEffect(() => {
        const getProduct = getProductToStr()
        // console.log(getProduct)
        const productId = getProduct.map(id => parseInt(id))
        // console.log(productId)
        const productItem = productData.filter(product => productId.includes(product.product_id))
        // console.log(productItem)
        setProduct1(productItem)
        // ----------------------------------------------------------

        const getWishProduct = getWishList()
        const wishProduct = getWishProduct.map(p => parseInt(p))
        const allData = productData.filter(p => wishProduct.includes(p.product_id))
        setWishPro(allData)
    }, [])

    const handleSortBtn = () => {
        // const sortData = product1.map(p => p.price)
        // const priceSort = (sortData.sort((a, b) => a - b))
        // // const d = priceSort

        // const sortProduct = product1.filter(p => priceSort.includes(p.price))
        // console.log(sortProduct,priceSort)

        const sortData = [...product1].sort((a, b) => a.price - b.price)
        setProduct1(sortData)
        // console.log(product1)
        // console.log(sortData)



    }

    // const handleCartBtn = () => {

    // }

    return (
        <div>
            <NavBar></NavBar>
            <div className='text-center bg-[#9538E2] leading-6 '>
                <h1 className='text-3xl text-white font-bold py-4'>Dashbord</h1>
                <p className='text-white text-wrap'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>

                {/* <div>
                    <Link><button onClick={handlecartbtn} className='btn'>Cart</button></Link>
                    <button className='btn'>wishlist</button>
                </div> */}

                {/* name of each tab group should be unique */}
                <div className="tabs tabs-border justify-center">
                    <input type="radio" name="my_tabs_2" className="tab" aria-label="Cart" />
                    <div className="tab-content border-base-300 bg-base-100 p-10">
                        <div className='container mx-auto mt-7'>
                            <div className='flex justify-between'>
                                <div>
                                    <h2 className="text-lg font-bold">Cart</h2>
                                </div>
                                <div className='flex items-center gap-4'>
                                    <h2 className="text-md font-bold">Total Cost : ${price}</h2>
                                    <button onClick={handleSortBtn} className="btn rounded-4xl p-4">Short by Price </button>
                                    {/* <button onClick={() => handlepurchasebtn(id)} className="btn rounded-4xl p-4">purchase</button> */}
                                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                    
                                    <Link to='/'><button className="btn rounded-4xl" onClick={handlepurchasebtn}>purchasel</button></Link>
                                    <dialog id="my_modal_3" className="modal">
                                        <div className="modal-box">
                                            <form method="dialog">
                                                {/* if there is a button in form, it will close the modal */}
                                                <Link to='/'><button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button></Link>
                                            </form>
                                            <img className='mx-auto' src={payImg} alt="" />
                                            <h3 className="font-bold text-lg">Payment Successfully</h3>
                                            <p className="py-4">Thanks for purchasing.</p>
                                            <p className="py-4">Total: ${price}</p>
                                        </div>
                                    </dialog>
                                </div>
                            </div>
                            <div className='pt-6'>
                                {
                                    product1.map(products => <CardList key={products.product_id} product={products}></CardList>)
                                }
                            </div>
                        </div>
                    </div>

                    <input type="radio" name="my_tabs_2" className="tab" aria-label="Wishlist" defaultChecked />
                    <div className="tab-content border-base-300 bg-base-100 p-10">

                        {
                            wishPro.map(p => <WishListProduct key={p.product_id} product={p}></WishListProduct>)
                        }

                    </div>

                </div>

                {/* <div className='flex justify-center gap-6 py-10'>
                    <button onClick={handleCartBtn} className="btn bg-[#9538E2] rounded-4xl text-white px-10">Cart</button>
                    <button className="btn bg-[#9538E2] rounded-4xl text-white px-8">Wishlist</button>
                </div> */}
            </div>


        </div>
    );
};

export default DashBord;