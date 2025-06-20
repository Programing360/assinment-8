import NavBar from "../NavBar/NavBar";
import glass from '../../assets/vr-virtual-headset.avif';
import { Link, useLoaderData } from "react-router-dom";
import Product from "../Product/Product";
import { useEffect, useState } from "react";
const Home = () => {
    // const [product,setProduct] = useState([])
    // console.log(product)
    const [product, setProduct] = useState([])
//    console.log(product)
   const allProducts = useLoaderData()
    useEffect( () => {
        fetch('devices.json')
        .then(res => res.json())
        .then (data => setProduct(data))
    },[])

    const handleAllProduct = () => {
        // console.log(allProducts)
        setProduct(allProducts)
    }

    const handleLaptopProduct = () => {
       const allProduct = allProducts.filter(p => p.category === 'laptop')
       setProduct(allProduct)
    //    console.log(allProduct)
    }
    const handlePhoneProduct = () => {
        const allProduct = allProducts.filter(p => p.category === 'phone')
        setProduct(allProduct)
        // console.log(allProduct)
    }
    const handleAccessoriesProduct = () => {
         const allProduct = allProducts.filter(p => p.category === 'accessories')
         
         if(allProduct){
            setProduct(allProduct)
         }
         else{
            setProduct('')
         }
    }
    const handleSmartProduct = () => {
        const allProduct = allProducts.filter(p => p.category === "smart watch")
        setProduct(allProduct)
    }
    return (
        <div>
            <div className=" mx-8 text-white bg-[#9538E2] mt-8 rounded-xl">
                <div className="">
                    <NavBar></NavBar>
                </div>
                <div className="text-center  h-96 leading-6 mt-4 pb-6">
                    <h1 className="text-4xl">Upgrade Your Tech Accessorize with <br></br> <span>Gadget Heaven Accessories</span></h1>
                    <p className="w-[300px] lg:w-[700px] mx-auto my-4 text-wrap">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                    <button className="btn bg-white btn-primary text-purple-500 mt-4 rounded-2xl">Shop Now</button>

                    <div className="flex justify-center mt-16 ">
                        <img className="w-md border-2 p-4 rounded-xl bg-[#FFFFFF4D]" src={glass} alt="" />
                    </div>
                </div>
            </div>
            <div className="mt-70">
                <h1 className="text-4xl font-bold text-center mb-9">Explore Cutting-Edge Gadgets</h1>
                <div className="container mx-auto lg:gap-2 flex flex-col lg:flex-row">
                    <div className="border-2 rounded-xl lg:h-[500px] p-6 lg:flex flex-col lg:gap-4 gap-4">
                        <Link to=''><button onClick={handleAllProduct} className="btn rounded-4xl">All Product</button></Link>
                        <Link><button onClick={handleLaptopProduct} className="btn rounded-4xl">Laptop</button></Link>
                        <Link><button onClick={handlePhoneProduct} className="btn rounded-4xl">Phones</button></Link>
                        <Link ><button onClick={handleAccessoriesProduct} className="btn rounded-4xl">Accessories</button></Link>
                        <Link ><button onClick={handleSmartProduct} className="btn rounded-4xl">Smart Watches</button></Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {
                             product.map((product, index) => <Product key={index} Product={product}></Product>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;