import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Appointments from './components/Appointments/Appointments/Appointments';
import Home from './components/Home/Home';
import Login from './components/Login/Login/Login';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route  path="/home" component={Home}></Route>
        <Route  path="/appointment" component={Appointments}></Route>
        <Route path='/login' component={Login}></Route>
        
      </Switch>
      
    </Router>
  );
};

export default App;