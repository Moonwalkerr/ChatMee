import './App.css';
import Sidebar from './comps/sidebar';

// BEM Naming convention
function App() {
  return (
  <div className="app">
     {/* <h2>Folks Chat</h2> */}
     <div className="inner__App">
      {/* SideBar */}
      <Sidebar/>
      {/* Chat */}
     </div>
    </div>
  );
}

export default App;
