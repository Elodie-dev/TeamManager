import React from 'react';
import './App.css';
import Home from './component/Home';
import Team from './component/Team';
import TeamDetails from './component/TeamDetails';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

function NotFound(){
  return(<div>
    <p>Error 404 Page not found</p>
      </div>)
}

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/teams" component={Team} />
          <Route exact path="/teams/:id" component={TeamDetails} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;