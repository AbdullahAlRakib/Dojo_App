const HomeCardPage = () => {
    return ( 
        <div className="card-section">
         <div className="container">
             <div className="card-heading">
                 <h4>From The Blog</h4>
             </div>
         <div className="row">
            <div className="col-md-4">
                <div className="card-content">
                <div class="card shadow">
                <img src="/blog-1.jpg" class="card-img-top"/>
                    <div class="card-body">
                  
                        <h6 class="card-subtitle mb-2 text-muted">Sun,March 20</h6>
                        <p class="card-text">Add Placess on DOJO Map</p>
                  
                    </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card-content">
                <div class="card shadow">
                <img src="/blog-2.jpg" class="card-img-top"/>
                    <div class="card-body">
                        
                        <h6 class="card-subtitle mb-2 text-muted">Mon,June 25</h6>
                        <p class="card-text">Update Your Cart on DOJO</p>
             
                    </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card-content">
                <div class="card shadow">
                <img src="/blog-3.jpg" class="card-img-top"/>
                    <div class="card-body">
                        
                        <h6 class="card-subtitle mb-2 text-muted">Tue,September 15</h6>
                        <p class="card-text">Live Tracking Services in DOJO</p>
 
                    </div>
                    </div>
                </div>
            </div>
            </div>
         </div>
        </div>


     );
}
 
export default HomeCardPage;