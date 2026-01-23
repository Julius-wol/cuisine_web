import logo from '../assets/logo/Logo.PNG';
import './Header.css';

function Header() {
    return (
        <>
            <div className="header">
                <div className="logo">
                    <a href="/"><img src={logo} alt="Logo" /></a>
                </div>

                <div className="header-content">
                    <form>
                        <input type="text" placeholder="Search in website" />
                        <button type="submit">Search</button>
                    </form>
                </div>
            </div>

            <div className="nav">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Events</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </>
    );
}

export default Header;
