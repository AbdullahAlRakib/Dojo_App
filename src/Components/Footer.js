const Footer = () => {
    return ( 
          <div className="footer">
              <div className="footer-top">
              <div className="container">
               <div className="row">
               <div className="col-lg-3 col-md-6 footer-contact">
               <h3><span className="dojo">DOJO</span></h3>
               <p>
              A108 Adam Street <br></br>
              New York, NY 535022<br></br>
              United States <br></br>
              <strong>Phone:</strong> +1 5589 55488 55<br></br>
              <strong>Email:</strong> info@example.com<br></br>
            </p>
              </div>
              <div class="col-lg-2 col-md-6 footer-links">
              <h4>Useful Links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About us</a></li>
              <li> <a href="#">Services</a></li>
              <li> <a href="#">Terms of service</a></li>
              <li> <a href="#">Privacy policy</a></li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><a href="#">Dojo Car</a></li>
              <li><a href="#">Dojo Bike</a></li>
              <li> <a href="#">Dojo Food</a></li>
              <li><a href="#">Dojo Percel</a></li>
              <li><a href="#">Dojo Courier</a></li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 footer-newsletter">
            <h4>Join Our Newsletter</h4>
            <form action="" method="post">
              <input type="email" name="email"/><input type="submit" value="Subscribe"/>
            </form>
          </div>
              </div>
              </div>
              </div>
              <div class="container d-md-flex py-4">

            <div class="mr-md-auto text-center text-md-left">
              <div class="copyright">Design & Developed By <strong><span>Rakib 😊 😎</span></strong>
              </div>
            </div>
            </div>
          </div>
     );
}
 
export default Footer;