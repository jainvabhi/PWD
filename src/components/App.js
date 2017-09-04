import React from 'react';
import { Route } from 'react-router-dom';
import Async from 'react-code-splitting';

import Header from './Header';

const Home = () => <Async load={import('./Home')} />;

const App = () =>
  <div className="atom">
    <Header />
    <Route exact path="/" component={Home} />
  </div>;

export default App;
