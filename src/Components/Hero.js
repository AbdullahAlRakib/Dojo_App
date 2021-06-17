const Hero = () => {
    return ( 
        <div className="hero-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="hero-content">
                            <h2>Welcome to DOJO App</h2>
                            <h3>Make Your Journey easy with DOJO App</h3>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="hero-img">
                            <img src="/hero-img.png" className="img-fluid" alt={"hero-img"}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Hero;