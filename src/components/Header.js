import {useState} from 'react'
import Logo from "../assets/img/logo.png"
import {Link} from "react-router-dom"

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
        <Link to="/">
          <li>Home</li>
        </Link>

        <Link to="/about">
          <li>About</li>
        </Link>

        <Link to="/" >
          <li>Contact</li>
        </Link>

        <Link to="/" >
          <li>Cart</li>
        </Link>
        {
          isLoggedIn 
          ?<button onClick={()=>setIsLoggedIn(false)}>Logout</button>
          :<button onClick={()=>setIsLoggedIn(true)}>Login</button>
        }
     </ul>
     <Link to="/about">Go to about Page</Link>
    </div>
  );
}

export default Header;