import React from 'react'
import { Link } from 'react-router-dom'
import myordericon from './UserImages/iconsMyorder.png'
import arrowpath from './UserImages/arrowpathwishlist.png'
import accountinfoicon from './UserImages/acountinfoicon.png'
import paymenticon from './UserImages/paymenticonwishlist.png'
import mystufficon from './UserImages/mystuff.png'
import logouticon from './UserImages/logout.jpg'

const ForgotResetPswrd = () => {
    return (
        <div>
            <div className='wishlistMainDiv'>
                <div >

                    {/* <div className='welcomeDiv'>
            <div><img src={wishlistimage} alt="img" className='wishlistimage' /></div>
            <div className='textDivwishlist'>
              <div style={{ fontFamily: "sans-serif", fontSize: "12px" }}>Hello,</div>
              <div style={{ fontFamily: "sans-serif", fontSize: "16px", paddingTop: "5px", fontWeight: "bold" }}>{logPassword.customerName}</div>
            </div>
          </div> */}

                    <div className='MyordersFullDiv'>
                        <div className='MyordersDiv'>
                            <div><img src={myordericon} alt="img" className='myordericon' /></div>
                            <Link to={'/User/Orders'} className='myOrderlink'>
                                <div style={{ display: "flex", justifyContent: "space-between", width: "450px" }}>
                                    <div>  MY ORDERS</div>
                                    <div><img src={arrowpath} alt="img" className='arrowpath' /></div>
                                </div></Link>
                        </div>
                    </div>



                    <div className='accountinfowishlist'>
                        <div><img src={accountinfoicon} alt="img" className='accountinfoicon' /></div>
                        <div className='textaccountinfo'>ACCOUNT INFORMATION</div>
                    </div>


                    <div className='profileinfowishlist'>Profile Information</div>
                    <div className='profileinfowishlist'>Manage Addresses</div>
                    <Link to={'/User/Changepassword'} className='Userlinks'> <div className='paninfowishlist'>Change Password</div></Link>

                    <div className='Paymentswishlist'>
                        <div><img src={paymenticon} alt="img" className='accountinfoicon' /></div>
                        <div className='textaccountinfo'>PAYMENTS</div>
                    </div>

                    <div style={{ display: "flex", }}>
                        <div className='profileinfowishlist'>Gift Cards <span class="PKhkts">₹0</span></div>
                    </div>
                    <div className='profileinfowishlist'>Saved UPI</div>
                    <div className='paninfowishlist'>Saved Cards</div>

                    <div className='Mystuffwishlist'>
                        <div><img src={mystufficon} alt="img" className='accountinfoicon' /></div>
                        <div className='textaccountinfo'>MY STUFF</div>
                    </div>
                    <Link to={'/User/Coupons'} style={{ textDecoration: "none", color: "black" }}> <div className='profileinfowishlist'>My Coupons</div></Link>
                    <div className='profileinfowishlist'>My Reviews & Ratings </div>
                    <div className='Notificationsinfowishlist'>All Notifications  </div>
                    <Link to={'/User/WishList'} className='infowishlistlink'> <div className='infowishlist'>My WishList</div></Link>

                    <div className='logountdivwishlistMain'>
                        <div className='logountdivwishlist'>
                            <div><img src={logouticon} alt="img" className='logouticon' /></div>
                            <div style={{ color: "#878787", fontFamily: "sans-serif", fontSize: "16px", paddingLeft: "20px", fontWeight: "bold", }}>LOGOUT</div>
                        </div>
                    </div>




                    <div className='frequentvisitFullDiv'>
                        <div class="_3dhhtB">Frequently Visited:</div>
                        <div class="OrderandHelpDiv">
                            <a class="_2YCxI1" href="/account/orders">Track Order</a>
                            <a class="_2YCxI1" href="/helpcentre">Help Center</a>
                        </div>
                    </div>
                </div>


                <div className='ResetPswrdFullDiv'>
                    <div className="resetPswrd ">
                        Reset Your Password
                    </div>
                    <div>
                    <input type="password" id="" value={""} class="form-control" autocomplete="off" />
          <label class="cstmr-floating-label">Password</label>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default ForgotResetPswrd