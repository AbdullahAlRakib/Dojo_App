const Hero = () => {
    return ( 
        <div className="hero-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="hero-content pb-2">
                            <h2>Welcome to <span className="dojo">DOJO</span> App</h2>
                            <h3>Make Your Journey easy with <span className="dojo">DOJO</span> App</h3>
                            <div className="playstore py-5">
                            <img src="/google-play.PNG" className="img-fluid google-play" alt={"play-img"}/>
                            <img src="/ios.PNG" className="img-fluid px-3 google-play"alt={"play-img"}/>
                            </div>
                           

                   
                        </div>
                    </div>
                    <div className="col-md-6 py-3">
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