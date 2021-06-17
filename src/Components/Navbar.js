const Navbar = () => {
    return ( 
        <div className="navbar-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand" href="#">DOJO APP</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                    
                        <li class="nav-item">
                            <a class="nav-link" href="#">New Blog</a>
                        </li>
                       
                        </ul>
                    </div>
                    </nav>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;