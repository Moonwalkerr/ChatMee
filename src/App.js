import './App.css';
import ChatDisplay from './comps/chatdisplay';
import Sidebar from './comps/sidebar';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {useState} from "react";
import Login from './comps/login';
// BEM Naming convention
function App() {

const [user,setUser] = useState("");
  return ( <div className="app">
    {!user ? <Login/>:<div className="inner__App">
      <Router>
      <Sidebar/>
      <Switch>
      <Route exact path="/rooms/:roomId">
      <ChatDisplay/>  
      </Route>
      <Route exact path="/">
      <ChatDisplay/>  
      </Route>
      </Switch>
      </Router>
      
      </div>
      }
      </div>);
    }
    
    export default App;
    