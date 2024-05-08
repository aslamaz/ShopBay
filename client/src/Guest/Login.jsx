import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import loginPageImg from './GuestImages/FlipkartLoginpage.jpg'
import { ToastContainer, toast } from 'react-toastify';


const Login = () => {

    const navigate = useNavigate()
    const [checkEmail, setCheckEmail] = useState('');
    const [checkPassword, setCheckPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    // Define state variables to track validation status
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');





    const handleLogin = () => {
        const data = {
            userEmail: checkEmail,
            userPassword: checkPassword
        }

        axios.post('http://localhost:5000/loginCheck', data).then((response) => {
            console.log(response.data);
            const data = response.data;
            const { message, login, id,name } = data
            if (login === "admin") {
                sessionStorage.setItem("adminId", id)

                navigate("../Admin/")
            }
            else if (login === "customer") {
                sessionStorage.setItem("customerId", id)
                toast.success("successfully Login "+name);
                setTimeout(() =>   navigate("../User/"),2000)
               
            }
            else if (login === "Shop") {
                sessionStorage.setItem("shopId", id)

                navigate("../shop/");
            }



        })

        // Basic validation for email and password
        if (!checkEmail.trim()) {
            setEmailError('Please enter your email.');
            return;
        } else {
            setEmailError('');
        }
        if (!checkPassword.trim()) {
            setPasswordError('Please enter your password.');
            return;
        } else {
            setPasswordError('');
        }

    }

    return (
        <div >
            <div className='LoginFullDiv'>
                <div className='loginPageSide1div'>
                    <div className='LoginText'>Login</div>
                    <div className='LoginDescription'>Get access to your Orders, Wishlist and Recommendations</div>
                    <div style={{ display: "flex", justifyContent: "center", marginTop: "135px" }}>

                        <img src={loginPageImg} alt="img" />
                    </div>
                </div>

                <div className='loginPageSide2div'>
                    <div class="form-rowEmail">
                        <label className='labelEmail'>Enter Email</label>
                        <input type="email" id="typeahead" className='inputemail' onChange={(event) => setCheckEmail(event.target.value)} />
                        {emailError && <span style={{ color: 'red' }}>{emailError}</span>}
                    </div>

                    <div class="form-rowpswrd">
                        <label className='labelpswrd'>Enter Pasword</label>
                        <input type={showPassword ? "text" : "password"} id="typeahead" className='inputPswrd' onChange={(event) => setCheckPassword(event.target.value)} />
                        {passwordError && <span style={{ color: 'red' }}>{passwordError}</span>}

                        <div>
                            <input type='checkbox' onChange={(event) => setShowPassword(event.target.checked)} />Show Password
                        </div>

                    </div>

                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "34px" }}>

                        <button className='GuestloginBtn' onClick={handleLogin}>LOGIN</button>
                    </div>

                    <div className='LogLinks'>
                        <Link to={'/Guest/User'} className='RegisterAccount'>Create an Account?</Link>
                        <Link to={'/User/Changepassword'} className='RegisterAccount'>ForgotPassword</Link>
                    </div>

                </div>
            </div>
            <ToastContainer
                position='bottom-center'
                autoClose='3000'
                theme='dark'
                hideProgressBar="true"
                style={{ width: '500px' }} 
            />

        </div>
    )
}

export default Login
