import logo from './logo.svg';
import './App.css';
import Signup from "./component/signup"
import TextField from "@material-ui/core/TextField";
import { spacing } from '@material-ui/system';
import Typography from "@material-ui/core/Typography";
import "fontsource-roboto";
import SignIn from './component/signin';
function App() {
  return (
    <div className="App">
      <header className="App-header">

        <div className="Material">       
         <Typography variant="h2"
        >
          Welcome To Taqreeb Events 
        </Typography>
       <TextField
       varient="filled"
       color="secondary"
        type="text"
        label="NAME"
        placeholder="ammar"/>
      <TextField
       varient="filled"
       color="secondary"
        type="email"
        label="Email"
        
        
        placeholder="ammar@gmail.com"/>

        <TextField
       varient="filled"
       color="secondary"
        type="dashed"
        label="Password"
        placeholder="*****"
      />

          <Signup  paddingTop={10}/>
      
        </div>



 <div className="Material">       
         <Typography variant="h2"
        >
          Welcome To Taqreeb Events 
        </Typography>
      <TextField
      
       varient="filled"
       color="secondary"
        type="email"
        label="Email"
        
        
        placeholder="ammar@gmail.com"/>

        <TextField
       varient="filled"
       color="secondary"
        type="dashed"
        label="Password"
        placeholder="*****"/>

        
      
        </div>
  <SignIn/>
       
       
      </header>
    </div>
  );
}

export default App;
