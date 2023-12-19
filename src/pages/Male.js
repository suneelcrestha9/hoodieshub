import React from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { decreaseItem, fetchProducts,increaseItem,STATUSES } from '../store/productSlice';
import { addTocart} from '../store/cartSlice';
import Footerimg from '../components/Footerimg';


export default function Male() {
    const dispatch = useDispatch()
    const {data :maleProducts,status} = useSelector((state)=>state.product)
    

    //handel add to cart
    const handelAddTocart=(item)=>{
        dispatch(addTocart(item))
    }

    //handel increase of quantity
    const increase=(id)=>{
        dispatch(increaseItem(id))
    }

    //handel decrease of quantity
    const decrease=(id)=>{
        dispatch(decreaseItem(id))
    }

    //fetching data
    useEffect(()=>{
        dispatch(fetchProducts())
    },[dispatch])

    if(status ===STATUSES.LOADING){
        return <h1>Loading....</h1>
    }
  return (
    <>
    <div className='salesale'>
        <div className="sale ">
            <div className="saleTitle maleTitle">
                <h2>Male Hoodies</h2>
            </div>
                {maleProducts.filter(item => item.categories === "male").length > 0  ? (
                    <div className="saleProducts">
                        {maleProducts
                        .filter(item=> item.categories ==="male")
                        .map((item)=>(
                            <div className="saleitems" key={item.id}>
                                <Link to={`/aboutPro/${item.id}`}>
                                <div className="saleimage">
                                    <img src={item.image} alt="" />
                                </div>
                                </Link>
                                <div className="title">
                                    <p>{item.title}</p>
                                </div>
                                <div className="price">
                                    <p>${item.price}</p>
                                </div>
                                <div className="quantity">
                                    <div className="quan"><button onClick={()=>decrease(item.id)} ><h5>-</h5></button></div>
                                    <div className="">
                                        <input type="text" value={item.quantity} readOnly className='quantityInput'/>
                                    </div>
                                    <div className="quan"  onClick={()=>increase(item.id)}><button><h5>+</h5></button></div>
                                </div>
                                <div className="addTocart">
                                    <button onClick={()=>handelAddTocart(item)} >Add To Cart</button>
                                </div>
                            </div>
                        ))}
                    </div>
                ):(
                <div className="nosaleProducts">
                        <div className="message">
                            <h1>Sorry, No Male Item in Sale Resently</h1>
                        </div>
                        <div className="anotherMessage maleMessage">
                            <Link to="/shop">View Our Products</Link>
                        </div>
                </div>
                )}
        </div>
    </div>
    <div className="">
        <Footerimg/>
    </div>
    </>
  )
}
