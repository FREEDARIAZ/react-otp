import logo from './logo.svg';
import './App.css';
import { OTPInputs } from './Component/OtpInput';

function App() {
  return (
    <div className="App">
      <div style={{width:"100%", height:"100vh", display:"flex", justifyContent:"center", alignItems:"center"}}>
        <div>
          <h1 style={{padding:"10px"}}>
          OTP Input
            </h1>
      <OTPInputs/>
      </div>
      </div>
  
    </div>
  );
}

export default App;
