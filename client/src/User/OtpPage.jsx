import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import OtpInput from 'react-otp-input';


const OtpPage = () => {
    const [otp, setOtp] = useState('');
    return (
        <div >
            <div className="-XmWnMOTP ">
                <div className="s2gOFdOTP">Verify Your Account</div>
                <div className="orqM3-OTP">We are sending a OTP to validate your</div>
                <div className="orqM3-OTP">email account, Hang on!</div>
                <div className='otpDiv'>
                    <OtpInput
                         value={otp}
                         onChange={setOtp}
                         numInputs={6}
                         containerStyle={{marginBottom:"40px" }} // Adjust width and height as needed
                         inputStyle={{ width: '50px', height: '50px', fontSize: '18px',margin:"0px 10px" }} // Adjust input width, height, and font size
                         renderInput={(props) => <input {...props} />}
                    />
                </div>
                <div className="orqM3-OTP">A OTP sent to <b style={{color:"black"}}>aslam@gmail.com</b></div>
                <Link to={'/User/ForgotResetPswrd'}>
                <button className='btnOTPPage'>Submit</button>
                </Link>
            </div>
        </div>
    )
}

export default OtpPage