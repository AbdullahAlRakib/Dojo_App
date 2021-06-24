import React from "react";
import {BrowserRouter,Switch,Route} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";
import ContactPage from "./Pages/ContactPage";
import ServicesPage from "./Pages/ServicesPage";


function App() {
  
  return (
    <>
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/about" component={AboutPage}/>
      <Route exact path="/service" component={ServicesPage}/>
      <Route exact path="/login" component={LoginPage}/>
      <Route exact path="/signup" component={SignUpPage}/>
      <Route exact path="/contact" component={ContactPage}/>
    </Switch>
    </BrowserRouter>
      
    </>
  
  );
}

export default App;
