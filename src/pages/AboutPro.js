import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import './AboutPro.css'
import {addTocart} from '../store/cartSlice'
import { decreaseItem, fetchProducts,increaseItem,STATUSES } from '../store/productSlice';


export default function AboutPro() {
    const dispatch = useDispatch();
    const {data:items,status}=useSelector((state)=>state.product);

    const {id} =useParams();


    useEffect(()=>{
        dispatch(fetchProducts())
    },[dispatch])

    const handelAdd=(item)=>{
        dispatch(addTocart(item))
    }

    
    const item=items.find((item)=> item.id === parseInt(id))
    const increase=(id)=>{
      dispatch(increaseItem(id))
    }

    const decrease=(id)=>{
      dispatch(decreaseItem(id))
    }

    if(!item){
        return <h1>No Such Item Found!</h1>
    }


    if(status === STATUSES.LOADING){
        return <h1>Loading....</h1>
    }
    
  return (
    <>
    <div className="productInfo">
    <div className="sen">
      <div className="proImage">
          <img src={item.image} alt="" />
        </div>
      </div>
      <div className="infoProduct">
          <div className="infoTitle" key={item.id}>
            <h2>{item.title}</h2>
          </div>
          <div className="infoDis">
            <p>{item.discription}</p>
          </div>
          <div className="infoPrice">
            <p>${item.price}.00</p>
          </div>
          <div className="quantity quan">
            <div className="quan add"><button onClick={()=>decrease(item.id)} ><h5>-</h5></button></div>
            <div className="">
                <input type="text infoText" value={item.quantity} readOnly className='quantityInput'/>
            </div>
              <div className="quan sub"><button onClick={()=>increase(item.id)}><h5>+</h5></button></div>
           </div>
           <div className="addTocartInfo">
                <button onClick={()=>handelAdd(item)} >Add To Cart</button>
            </div>
      </div>
    </div>
    </>
  )
}
