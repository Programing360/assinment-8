
import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { dataContext } from "../Provider/ProviderData";
import '../NavBar/Nav.css'
import img from '../../assets/Star-Icon-by-arus-3.jpg'
import { wishListContext } from "../ProductDetails/ProductDetails";
import { getProductToStr } from "../Utility/Utility";
import { getWishList } from "../WishList/WishList";


const NavBar = () => {
  const {pathname} = useLocation()
  // console.log(data)
  const list = <>
    <NavLink to='/'><li className="text-bold text-cyan-700">Home</li></NavLink>
    <li><NavLink to='/statistics'
    >Statistics</NavLink></li>
    <li><NavLink to='/dashbord'>Dashboard</NavLink></li>
  </>
  const { price } = useContext(dataContext)
  // const data = useContext(wishListContext)
  // const [product, setProduct] = useState(0)

  const pro = getProductToStr()
  const wishPro = getWishList()

  return (


    <div className="navbar justify-between items-center shadow-sm">
      <div className="">
        <a className="btn btn-ghost text-xl">Gadget Heaven</a>
      </div>

      <nav className="flex gap-4 right-2/5 absolute ">
        {list}
      </nav>

      <div className="flex-none ">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
              <span className="badge badge-sm indicator-item">{pro.length}</span>
            </div>
          </div>

          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
            <div className="card-body">
              <h3 className="text-10">Item : {pro.length}</h3>
              <span className="text-lg font-bold">{}</span>
              <span className="text-info">Subtotal: ${price}</span>
              <div className="card-actions">
                <Link to='/dashbord'>
                  <button className="btn btn-primary btn-block">View cart</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator ml-2">
              <img className="w-20 btn-circle" src={img} alt="" />
              <span className="badge badge-sm indicator-item">{wishPro.length}</span>
            </div>
          </div>

          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
            <div className="card-body">
              <h3 className="text-10">Wish List Item : {wishPro.length}</h3>
              <span className="text-lg font-bold">{}</span>
              <span className="text-info">Subtotal: ${price}</span>
              <div className="card-actions">
                <Link to='/dashbord'>
                  <button className="btn btn-primary btn-block">View cart</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;