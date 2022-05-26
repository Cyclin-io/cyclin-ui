import './App.css';
import Minter from './Minter'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarCom from './components/NavbarCom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import ProjectInfo from './components/ProjectInfo';
import Team from './components/Team';
import Home from './components/Home'; 
import './index.css';


function App() {
  return (
    <Router> 
      
    <div className="App">
       
      <NavbarCom />
      
      <div className="content">
        <Switch>
          <Route path ="/home">
            <Home />
             </Route>
          <Route path="/project">
             <ProjectInfo />
          </Route>
          <Route path ="/Minter">
            <Minter></Minter>
          </Route>
          <Route path="/team">
            <Team />
          </Route>
        </Switch>
        
      
      </div>
    </div>

    </Router>
  );
}

export default App;
