import React from 'react';
import { Route } from 'react-router-dom';
import Callback from '../molecules/Callback';
import Home from './Home';
import Track from './Track';

const Main = (): JSX.Element => {
  return (
    <>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/tracks" component={Track}></Route>
      <Route exact path="/callback" component={Callback}></Route>
    </>
  );
};

export default Main;
