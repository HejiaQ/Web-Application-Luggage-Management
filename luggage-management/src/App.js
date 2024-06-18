// import logo from './logo.svg';

import './App.css';
import { BrowserRouter as Router, Route, Routes, BrowserRouter} from 'react-router-dom';
import Login from './Frontend/Login';
import Signup from "./Frontend/Signup";
import Account from './Frontend/Account';
function App() {
  return (
    <div class="Login-component">
      
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/signup" element={<Signup />} /> 
          <Route path='/main_page' element = {<Account/>} />
        </Routes>
        
 
    </div>
    
    

  );
}


export default App;


// <p>Please click login if you have an account. Please sign up if you are new to this App!</p>
// <button id="login">Login</button>
// <br></br>
// <button id ="sign_up">Sign Up</button>