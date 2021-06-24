const Main = () => {
    return ( 
        <div className="main-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="main-content-img">
                            <img src="/main.png" className="img-fluid" alt={"main"}/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="main-contentOne">
                            <h2>Beat Traffic, Save Time</h2>
                            <p>Nothing Beat Traffic using <span className="dojo">DOJO</span> services.Save time,save money and reach your destination safely</p>
                            
                        </div>
                        <div className="main-contentOne">
                            <h2>Always Available</h2>
                            <p>Be it early in the morning or late in the night, our trained Dojos are always available to provide you with the best service!</p>
                            
                        </div>
                        <div className="main-contentOne">
                            <h2>Hasslefree and Quick</h2>
                            <p>With just a few clicks on the app, you can find a car easily, in minutes.</p>
                            
                        </div>
                        <div className="explore-btn py-3">
                        <button type="button" class="btn btn-secondary">Explore More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Main;