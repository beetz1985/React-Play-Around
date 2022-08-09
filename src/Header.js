import logo from './react_logo.png';

function Header() {
    return (
      <header className="header">
          <nav className="navigation_menu">
            <img className="image_logo" src={logo} alt="logo"/>
            <ul className="nav-items">
                  <li>Pricing</li>
                  <li>About Us</li>
                  <li>Contact Us</li>
              </ul>
          </nav>
      </header> 
    )
}

export default Header;