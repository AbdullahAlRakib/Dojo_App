import {NavLink} from "react-router-dom";
const Navbar = () => {
    return ( 
        <div className="navbar-section">
          
                <div className="row">
                    <div className="col-md-12">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                    <div className="container">
                    <NavLink to="/">
                    <a className="navbar-brand">DOJO</a>
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink to="/">
                            <a className="nav-link active">Home</a>
                            </NavLink>
                        </li>
                    
                        <li class="nav-item">
                            <NavLink to="/about">
                            <a class="nav-link">About</a>
                            </NavLink>
                        </li>
                        <li class="nav-item">
                        <NavLink to="/service">
                            <a class="nav-link">Services</a>
                            </NavLink>
                        </li>

                        <li class="nav-item">
                            <NavLink to="/contact">
                            <a class="nav-link">Contact</a>
                            </NavLink>
                        </li>

                        <li class="nav-item">
                        <NavLink to="/login">
                            <a class="nav-link">Login</a>
                            </NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to="signup">
                            <a class="nav-link">SignUp</a>
                            </NavLink>
                        </li>
                       
                        </ul>
                    </div>

                    </div>
                    
                    </nav>
                    
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;