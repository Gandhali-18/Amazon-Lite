import "../styles/navbar.css";
import Location from "./Location";
import SearchBar from "./SearchBar";
import { useAuth } from "../context/AuthContext";

export default function NavBar() {
  const { user, logout } = useAuth();
  return (
    <nav className="navbar">
      <img className="nav-logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon Logo" />
      <Location />
      <SearchBar />

      <div className="right-section">
        <select id="language" className="language-select">
            <option>EN</option>
        </select>
        <button 
          id="signBtn" 
          className="nav-btn"
          onClick={() => { if(user) logout() }}
        >
            <div className="btn-top-text">
              Hello, {user ? user.email.split('@')[0] : "sign in"}
            </div>
            <div className="btn-bottom-text">
              {user ? "Sign Out" : "Accounts & Lists"}
            </div>
        </button>
        <button id="returnBtn" className="nav-btn">
            <div className="btn-top-text">Returns</div>
            <div className="btn-bottom-text">& Orders</div>
        </button>
        <button id="cartBtn" className="nav-cart-btn">
          <span className="cart-icon">🛒</span> Cart
        </button>
      </div>

    </nav>
  );
}
