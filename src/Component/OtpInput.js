import React, { useState } from 'react';
import OTPInput from 'react-otp-input';
export const OTPInputs = () => {
    const [otp, setOtp] = useState('');
    return (
        <OTPInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            shouldAutoFocus
            renderSeparator={<span></span>}
            inputStyle="inputStyle"
            renderInput={(props) => <input {...props} />}
        />
        // otp inputStyle css in index.css file
    );
};