import { useDispatch, useSelector } from 'react-redux'
import {  decreaseQuantity, increaseQuantity, removeFromCart } from '../store/cartSlice'
import { Link } from 'react-router-dom'
import './Cart.css'
import Footerimg from '../components/Footerimg'



export default function Cart() {
  const addedProductsincart=useSelector((state)=>state.cart.items)

    const dispatch = useDispatch()
    
    const grandTotal = addedProductsincart.reduce((total, item) => total + item.price * item.quantity, 0);

    //handel add to cart
    const handelRemove=(id)=>{
        dispatch(removeFromCart(id))
    }

    //handel increase of quantity
    const increase=(id)=>{
        dispatch(increaseQuantity(id))
    }

    //handel decrease of quantity
    const decrease=(id)=>{
        dispatch(decreaseQuantity(id))
    }

   
 
  return (
    <>
    {addedProductsincart.length === 0 ? (
      <div className="nopromsg">

      <div className="incart">
        <h1>No Producst in Cart</h1>
      </div>
      <div className="anotherMessage incart">
          <Link to="/shop">View Our Products</Link>
      </div>
      </div>
      
    ):(
      <div className="cartPage">
        <div className="titleCart">
          <h1>Cart</h1>
        </div>
      <div className="cartPageTwo">
        <div className="cartInside">
          <div className="cartDetails">
              <div className="img">
                <p></p>
              </div>
              <div className="pro">
                <p>Product</p>
              </div>
              <div className="ppp">
                <p>Price</p>
              </div>
              <div className="qqq">
                <p>Quantity</p>
              </div>
              <div className="sub">
                <p>Subtotal</p>
              </div>
            </div>


            {addedProductsincart.map((item)=>(
            <div className="mainPro">
            <div className="cartDisplay">
            
            <div className=" cartitems" key={item.id}>
                                <div className="cartimage">
                                    <img src={item.image} alt="" />
                                </div>
                                <div className="title pro">
                                    <p>{item.title}</p>
                                </div>
                                <div className="price_title">
                                    <p>${item.price}</p>
                                </div>
                                <div className="quantity">
                                    <div className="quan"><button onClick={()=>decrease(item.id)}><h5>-</h5></button></div>
                                    <div className="">
                                        <input type="text" value={item.quantity} readOnly className='quantityInput'/>
                                    </div>
                                    <div className="quan"><button onClick={()=>increase(item.id)}><h5>+</h5></button></div>
                                </div>
                                <div className="subtotal">
                                  <p> ${item.price * item.quantity}</p>
                                </div>
                                <div className="remove">
                                  <img onClick={()=>handelRemove(item.id)} src="./images/cross.png" alt="" />
                                </div>
              </div>
          </div>
            </div>
          
        ))}
        </div>
        <div className="checkout">
          <div className="checkoutTitle ">
            <h1>Cart Total</h1>
          </div>
          <div className="subcheckout check">
            <div className="">
              <h4>Sub Total:</h4>
            </div>
            <div className="">
              <h4>${grandTotal}.00</h4>
            </div>
          </div>
          <div className="deliveryCharge check">
              <div className="">
                <h4>Shipping</h4>
              </div>
              <div className="">
                <h4>$17.00</h4>
              </div>
          </div>
          <div className="grandTotal check">
            <div className="">
              <h4>Total</h4>
            </div>
            <div className="">
              <h4>${grandTotal - 17.00}.00</h4>
            </div>
          </div>
          <div className="procideToCheckout">
            <Link to="/checkout"><button> Procced To Checkout</button></Link>
          </div>
        </div>
        </div>
      </div>
    )}
    <Footerimg/>
    </>
  )
}
