import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import './Checkout.css'
import Footerimg from '../components/Footerimg'

export default function Checkout() {
    const [selectedOption,setSelectedOption] = useState(null)
    const [shipping,setShipping] =useState(17)
   
    const item=useSelector((state)=>state.cart.items)
    const grandTotal = item.reduce((total,item)=>total + item.price * item.quantity,0)
    
    
    if(item.quantity === 0){
         setShipping(0)
    }
  
  return (
    <>
    <div className="check_out">
        <div className="chec">
            <div className="check_title">
                <h1>Checkout</h1>
            </div>
            
        </div>
        
        {/* two main div */}
        <div className="twoMainDiv">
                      {/* billing information */}
            <div className="checkoutBilling">
                <h1>Customer Details</h1>
                <form >
                        <div className="infoBilling">
                        <div className="nameBill">
                            <div className="">
                                <input type="text" placeholder='First Name*' required />
                            </div>
                            <div className="">
                                <input type="text" placeholder='Last Name*' required />
                            </div>
                        </div>
                        <div className="contactBill">
                            <div className="">
                                <input type="number" name="" id=""  placeholder='Number*' required/>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <h3>Costumer Address</h3>
                    </div>
                    <div className="country">
                        <input type="text" name="" id="" value="Nepal" readOnly />
                    </div>
                    <div className="state">
                        <input type="text" name="" id="" placeholder='Province*' required />
                    </div>
                    <div className="district">
                        <input type="text" name="" placeholder='District*' required id="" />
                    </div>
                    
                </form>
            </div>
            
            {/* heading of checkout */}
            <div className="checkoutList">
                <h1>Your Products</h1>
                <div className="checkHead ">
                    <div className="mar">
                        <h3>Products</h3>
                    </div>
                    <div className="mar">
                        <h3>Subtotal</h3>
                    </div>
                </div>

                {/* to display the items in cart to do checkout */}
                <div className="placeScroll">
                    {item.map((item)=>(
                        <div className="chechOutProducts" key={item.id}>
                            <div className="checkProductsList">
                                <div className="chechOutImageTitleQuan">
                                    <div className="chechoutImage marone">
                                        <img src={item.image} alt="" />
                                    </div>
                                    <div className="checktitle marone">
                                        <p>{item.title} x{item.quantity} </p>
                                    </div>
                                </div>
                                <div className="checkPrice mar">
                                    <p>${item.quantity * item.price}.00</p>
                                </div>
                            </div>
                    </div>
                    ))}
                </div>
                
                {/* total price of all the products for checkout */}
                <div className="chechoutAmount">
                    <div className="checkSubtotal marginn">
                            <div className="checkSubTitle mar">
                                <h3>Subtotal</h3>
                            </div>
                            <div className="checkSubTotalPrice mar">
                                <h3>${grandTotal}</h3>
                            </div>
                        </div>
                        <div className="checkShipping marginn">
                            <div className="ship mar">
                                <h3>Shipping</h3>
                            </div>
                            <div className="mar">
                                <h3>{shipping}.00</h3>
                            </div>
                        </div>
                        <div className="checkAfterShipping marginn">
                            <div className="mar">
                                <h3>Grand Total</h3>
                            </div>
                            <div className="mar">
                                <h3>${grandTotal - shipping}.00</h3>
                            </div>
                        </div>


                        <div className="paumentRadio">
                            <form >
                                <div className="">
                                    <label id='option1'>
                                    <div className="option">
                                            <div className="opt">
                                                <input type="radio" name="payment" id="option1" onChange={(e)=>setSelectedOption(e.target.value)} value="cash" />Cash On Delivery
                                            </div>
                                        {selectedOption === 'cash' &&(
                                            <div className="mesradio">
                                                <p>Pay with cash upon delivery.</p>
                                            </div>
                                        )}
                                    </div>
                                    </label>
                                    
                                    <label id='option2'>
                                    <div className="option">
                                        <div className="opt">
                                        <input type="radio" name="payment" id="option2" onChange={(e)=>setSelectedOption(e.target.value)} value="online" />online On Delivery
                                        </div>
                                        {selectedOption === 'online' &&(
                                            <div className="mesradio">
                                                <p>Make your payment directly into our <span className='esewa'>E-sewa</span> or <span className='khalti'>Khalti</span> account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                                            </div>
                                        )}
                                    </div>
                                    </label>
                                    
                                    
                                <label id='option3'>
                                    <div className="option">
                                        <div className="opt">
                                            <input type="radio" name="payment" id="option3" onChange={(e)=>setSelectedOption(e.target.value)} value="bank" />Direct Bank Transfer
                                        </div>
                                        
                                        {selectedOption === 'bank' &&(
                                            <div className="mesradio">
                                                <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                                            </div>
                                        )}
                                    </div>
                                </label>
                                    
                                </div>
                                <div className="place">
                                    <button >Place Order  ${grandTotal -shipping}.00</button>
                                </div>
                            </form>
                        </div>  

                        
                </div>
            </div>
  
        </div>
    </div>
    <div className="">
        <Footerimg/>
    </div>
    </>
  )
}
