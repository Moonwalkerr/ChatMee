import './App.css';
import ChatDisplay from './comps/chatdisplay';
import Sidebar from './comps/sidebar';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

// BEM Naming convention
function App() {
  return (
  <div className="app">
     <div className="inner__App">
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
    </div>
  );
}

export default App;
