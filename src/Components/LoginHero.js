import { useState } from "react";
const LoginHero = () => {

    const[data,setData]=useState({
        email:"",
        pass:"",
    
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
       alert('Logged in SuccessFully');
    };
    return ( 
        <div className="login-section">
            <div className="container">
            <div className="login-heading">
                 <h4>Login</h4>
             </div>
                <div className="row justify-content-center py-5">
                    <div className="col-md-5">
               
                        <div className="login-form">
                        <form onSubmit={formSubmit}>
                        <div class="form-group row">
                            <label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
                            <div class="col-sm-10">
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
                            <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                            <div class="col-sm-10">
                            <input
                             type="password" 
                             class="form-control" 
                             id="inputPassword"
                             name="pass"
                             value={data.pass}
                             onChange={InputEvent}
                              required/>
                            </div>
                        </div>
                      
                        <div class="form-group row text-center">
                        <label for="inputPassword" class="col-sm-2 col-form-label"></label>
                        <div class="col-sm-10 ">
                        <button type="submit" class="btn btn-secondary">Login</button>
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
 
export default LoginHero;