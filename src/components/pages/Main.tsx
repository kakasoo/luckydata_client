import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Callback from './Callback';
import editorPage from './Editor';
import Edit from './Edit';
import Home from './Home';
import Track from './Track';

const Main = ({ match }: any): JSX.Element => {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/callback" component={Callback}></Route>
      <Route path="/tracks" component={Track}></Route>
      <Route exact path="/edit" component={Edit}></Route>
      <Route path="/edit/:articles_id" component={editorPage}></Route>
    </Switch>
  );
};

export default Main;
