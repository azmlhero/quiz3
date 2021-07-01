import React from 'react';
import Menu from './components/Menu';
import {BrowserRouter as Router,Switch,Route, Redirect} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { NotFound } from 'http-errors';

function App() {
  return (
   <Router>  
      <div>

     <Switch>
       

     <Menu />       
     <Route path="/signup" exact component={SignUp}></Route>
    
     <Route path="/signin" exact component={SignIn}></Route>
     <Route path="/not-found" exact component={NotFound}></Route>       
        
    <Route path="/" component={LandingPage}></Route>

    <Redirect to ="/not-found"/>
      
     
     </Switch>
     {/* <h1>  TaQreeb Events</h1> */}
   </div>
</Router>

  );
}

export default App;
