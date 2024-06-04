import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import OtpInput from 'react-otp-input';


const OtpPage = () => {
    const getOtp = sessionStorage.getItem("sendedOTP");
    const getEmail = sessionStorage.getItem("sendedEmail");
    const navigate = useNavigate()
    const [otp, setOtp] = useState('');
    const [showError, setShowError] = useState('')
    // const [showEmail, setShowEmail] = useState('')
   

    const checkOTP = () => {
        if (otp === getOtp) {
            navigate("/ForgotResetPswrd")
        } else {
            setShowError("Verification Failed! Please enter the correct OTP.");
        }
    }

    return (
        <div className='OTPHOMEDIV'>
            <div className="-XmWnMOTP ">
                <div className="s2gOFdOTP">Verify Your Account</div>
                <div className="orqM3-OTP">We are sending a OTP to validate your</div>
                <div className="orqM3-OTP">email account, Hang on!</div>
                <div className='otpDiv'>
                    <OtpInput
                        value={otp}
                        onChange={setOtp}
                        numInputs={6}
                        containerStyle={{ marginBottom: "40px" }} // Adjust width and height as needed
                        inputStyle={{ width: '50px', height: '50px', fontSize: '18px', margin: "0px 10px" }} // Adjust input width, height, and font size
                        renderInput={(props) => <input {...props} />}
                    />
                </div>

                <div className='OtpErrDiv'>
                {showError}
                </div>

                <div className="orqM3-OTPCntnt">A OTP sent to <b style={{ color: "black" }}>{getEmail}</b></div>
                <button className='btnOTPPage' onClick={checkOTP}>Submit</button>

            </div>
        </div>
    )
}

export default OtpPage