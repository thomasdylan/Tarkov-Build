import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 

import './Styles/App.scss';

import Landing from './Views/Landing';
import Navbar from './Components/Navbar';
import Browse from './Views/Browse';
import Create from './Views/Create';

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <Navbar />
        </header>
        <Switch>
          <Route path='/' exact component={Landing}/>
          <Route path='/browse' component={Browse}/>
          <Route path='/create' component={Create}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
