import './App.css';
import ChatDisplay from './comps/chatdisplay';
import Sidebar from './comps/sidebar';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from './comps/login';
import {useStateValue} from "./stateProvider";
import ChatDisplayDefault from "./comps/chatdisplaydefault";


//Using BEM Naming convention throughout the app code
function App() {

  const [{user},dispatch] = useStateValue();
  dispatch({type:"noe"});
  return ( <div className="app">
    {!user ? <Login/>:<div className="inner__App">
      <Router>
      <Sidebar/>
      <Switch>
      <Route exact path="/rooms/:roomId">
      <ChatDisplay/>  
      </Route>
      <Route exact path="/">
      <ChatDisplayDefault/>  
      </Route>
      </Switch>
      </Router>
      
      </div>
      }
      </div>);
    }
    
    export default App;
    