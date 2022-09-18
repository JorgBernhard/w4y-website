import './style-header.css';
import Logo from '../../assets/logo.png';

function Header() {
  return (
    <div className="Container-main">
        <div className="Head">
            <img className="Logo" src={Logo} alt="logo" />

            <div className="Links">
                <a href='#main'>HOME</a>
                <a href='#aboutme' >ABOUT ME</a>
                <a href='#design' >DESIGN</a>
                <a href='#contact' >CONTACT</a>
            </div>
        </div>
    </div>
  );
}

export default Header;