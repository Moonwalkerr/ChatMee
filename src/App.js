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
      <Switch>
      <Route path="/app">
      <Sidebar/>
      <ChatDisplay/>  
      </Route>
      <Route exact path="/">
        <h1>Home Screen</h1>
      </Route>
      </Switch>
      </Router>
      
     </div>
    </div>
  );
}

export default App;
