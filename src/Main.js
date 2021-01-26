import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import TIForm from './pages/TIForm/TIForm';

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/ti' component={TIForm}></Route>
    </Switch>
  );
}

export default Main;