import Logo from '../../images/logo.png';
import './header.css';

function Header() {
  return (
    <div id='header'>
      <div className="Header">
        <div className="HeaderContainer">
        <img className='Logo' src={Logo} alt="Logo"></img>
          <div className='Headerlinks'>
            <a className="HeaderHome" href='#main'>Home</a>
            <a className="HeaderWork"  href='#projects'>Projects</a>
            <a className="HeaderUs"  href='#us'>Us</a>
            <a className="HeaderContact"  href='#contact'>Contact</a>
          </div>
          <div className='Headerrechts'>
            </div>
         </div>
        </div>
        </div>
       );
}

export default Header;
