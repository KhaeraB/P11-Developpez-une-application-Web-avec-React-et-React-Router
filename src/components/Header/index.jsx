import { Link, NavLink} from "react-router-dom";
import Logo from "../../assets/logo.svg";
import "./style.scss";


function Header() {
  const navStyle = ({ isActive }) => {
  
    return {
      textDecoration: !isActive && "none",
      // borderBottom: isActive && "3px solid  #FF6060",
    };
  };
  return (
    <header className="container">
      <nav className="row justify-content-between align-items-center">
        <div className="col col-md-6 align-text">
          <Link to="/">
            <img className="logo" src={Logo} alt="Logo Kasa" />
          </Link>
        </div>
        <div className="col col-md-6 d-flex justify-content-end">
          
          <NavLink className={(navInfo) =>
              navInfo.isActive ? "nav-link active" : "nav-link"
              } 
              style={navStyle} to="/accueil">
            Accueil
          </NavLink>

          <NavLink className={(navInfo) =>
                navInfo.isActive ? "nav-link active" : "nav-link"
              }  to="/a-propos">
            À Propos
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;
