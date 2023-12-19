import React, { useEffect} from 'react'
import {Link} from 'react-router-dom'
import './Insale.css'
import { useDispatch, useSelector } from 'react-redux'
import { addTocart, } from '../store/cartSlice'
import { fetchProducts ,STATUSES ,increaseItem, decreaseItem} from '../store/productSlice'


export default function Insale() {
    const {data:saleProducts,status} = useSelector((state)=>state.product)
    const dispatch =useDispatch()
    

    //fetching data using redux toolkit the api call is taking place in productSlice 
    useEffect(()=>{
        dispatch(fetchProducts())
    },[dispatch])
    
    //displaying loading data
    if(status === STATUSES.LOADING){
        return <h1>Loading....</h1>
    }

    //handel add to cart
    const handelAdd=(item)=>{
        dispatch(addTocart(item))
    }

    //handel increase quantity
    const increase=(id)=>{
        dispatch(increaseItem(id))
    }

    //handel decrease of quantity
    const decrease=(id)=>{
        dispatch(decreaseItem(id))
    }
  return (
    <>
    <section>
        <div className="sale">
            <div className="saleTitle">
                <h2>Sale....</h2>
            </div>
                {saleProducts.filter(item => item.sale === "true").length > 0  ? (
                    <div className="saleProducts">
                        {saleProducts
                        .filter(item=> item.sale ==="true")
                        .slice(0,3)
                        .map((item)=>(
                            <div className="saleitems" key={item.id}>
                                <Link to={`/aboutpro/${item.id}`}>
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
                                    <div className="quan"><button onClick={()=>decrease(item.id)}><h5>-</h5></button></div>
                                    <div className="">
                                        <input type="text" value={item.quantity} readOnly className='quantityInput'/>
                                    </div>
                                    <div className="quan"><button onClick={()=>increase(item.id)}><h5>+</h5></button></div>
                                </div>
                                <div className="addTocart">
                                    <button onClick={()=>handelAdd(item)}>Add To Cart</button>
                                </div>
                            </div>
                        ))}
                    </div>
                ):(
                <div className="nosaleProducts">
                        <div className="message">
                            <h1>Sorry, No Item in Sale Resently</h1>
                        </div>
                        <div className="anotherMessage">
                            <Link to="/shop">View Our Products</Link>
                        </div>
                </div>
                )}
        </div>
    </section>
    </>
  )
}
