const Header = () => {
  return (
    <div className="header">
      <img
        className="logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRq_LmiEG7PEV3p9MGjSYDxsn1BzvEy5fEdg&usqp=CAU"
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
      </ul>
    </div>
  );
}

export default Header;