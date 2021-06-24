import { useState } from "react";

const ContHero = () => {
    
    const[data,setData]=useState({
        fullname:"",
        email:"",
        msg:"",
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
        alert('SuccessFully Submitted')

       

    };
    return ( 
        <div className="contact-hero-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="contact-img">
                            <img src="/contact.png" className="img-fluid"></img>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="contact-form">
                        <form onSubmit={formSubmit} >
                        <div class="form-group">
                                <label for="exampleInputText">Full Name</label>
                                <input 
                                type="text" 
                                class="form-control" 
                                id="exampleInputText" 
                                name="fullname"
                                value={data.fullname}
                                onChange={InputEvent}
                                required
                                />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input 
                                type="email"
                                 class="form-control" 
                                 id="exampleInputEmail1" 
                                 aria-describedby="emailHelp"
                                 name="email"
                                 value={data.email}
                                 onChange={InputEvent}
                                  required/>
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">Message Us</label>
                                <textarea 
                                class="form-control"
                                 id="exampleFormControlTextarea1"
                                  rows="3" 
                                  name="msg"
                                  value={data.msg}
                                  onChange={InputEvent}
                                  required>
                                  </textarea>
                            </div>
                            
                         
                            <button type="submit" class="btn btn-secondary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default ContHero;