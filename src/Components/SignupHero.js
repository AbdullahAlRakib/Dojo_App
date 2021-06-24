import { useState } from "react";

const SignupHero = () => {
    const[data,setData]=useState({
        name:"",
        email:"",
        cpass:"",
    });

    const InputEvent =(event)=>{
       
        const {name,value} = event.target;
        setData((preVal)=>{
            return{
                ...preVal,
                [name]: value,
            };
        });
    };



    const formSubmit =(e)=>{
        e.preventDefault();
        alert('You Can Now Login')

       

    };
    return ( 
        <div className="signup-section">
           <div className="container">
           <div className="signup-heading">
                 <h4>Sign Up</h4>
             </div>
               <div className="row">
                   <div className="col-md-5">
                       <div className="signup-img">
                           <img src="sign-up.png" className="img-fluid" alt={"sign-up"}/>
                       </div>
                   </div>
                   <div className="col-md-7">
                       <div className="signup-form">
                       <form onSubmit={formSubmit}>
                       <div class="form-group row ">
                            <label for="inputText" class="col-sm-4 col-form-label">Name</label>
                            <div class="col-sm-8">
                            <input
                             type="text" 
                             class="form-control"
                              id="inputText"
                              name="name"
                              value={data.name}
                              onChange={InputEvent}
                              required
                              />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputEmail" class="col-sm-4 col-form-label">Email</label>
                            <div class="col-sm-8">
                            <input
                             type="email"
                              class="form-control"
                               id="inputEmail"
                               name="email"
                               value={data.email}
                               onChange={InputEvent}
                               required/>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputPassword" class="col-sm-4 col-form-label">Password</label>
                            <div class="col-sm-8">
                            <input type="password" 
                            class="form-control" 
                            id="inputPassword"
                            name="pass"
                            value={data.pass}
                            onChange={InputEvent}
                            required/>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputPassword" class="col-sm-4 col-form-label">Confirm Password</label>
                            <div class="col-sm-8">
                            <input type="password"
                             class="form-control" 
                             id="inputPassword"
                             name="cpass"
                             value={data.cpass}
                             onChange={InputEvent}
                             required/>
                            </div>
                        </div>
                        <div class="form-group row">
                        <label class="col-sm-4 col-form-label"></label>
                        <div class="col-sm-8">
                        <button type="submit" class="btn btn-secondary">Sign Up</button>
                        </div>

                        </div>
                        </form>
                       </div>
                   </div>
               </div>
           </div>
        </div>
     );
}
 
export default SignupHero;