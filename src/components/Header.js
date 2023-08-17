import {useState} from 'react'
import Logo from "../assets/img/logo.png"

const Header = () => {
  const [isLoggedIn,setIsLoggedIn]=useState(false);
  return (
    <div className="header">
      <img
        className="logo"
        src={Logo}
        alt="logo"
      />
      <ul className="navbar">
        <a href="#">
          <li>Home</li>
        </a>
        <a href="#">
          <li>About</li>
        </a>
        <a href="#">
          <li>Contact</li>
        </a>
        <a href="#">
          <li>Cart</li>
        </a>
        {
          isLoggedIn 
          ?<button onClick={()=>setIsLoggedIn(false)}>Logout</button>
          :<button onClick={()=>setIsLoggedIn(true)}>Login</button>
        }
     </ul>
    </div>
  );
}

export default Header;