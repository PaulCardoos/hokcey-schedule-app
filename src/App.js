import './App.css';
import Navigation from './components/Navigation';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import "./styles/sandstone.css"
import Friday from './screens/Friday';
import Wednesday from './screens/Wednesday';
import Home from './screens/Home';

function App() {
  return (
    <div className="App">
      <Navigation>

      </Navigation>
      <Router> 
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/wednesday" component={Wednesday}></Route>
          <Route exact path="/friday" component={Friday}></Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
