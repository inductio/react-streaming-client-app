import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const PageOne = () => {
  return <div>PageOne
    <a href="/pagetwo">PageTwo</a>
  </div>
};

const PageTwo = () => {
  return <div>PageTwo
    <a href="/">PageOne</a>
  </div>
};

const App = () => {
  return (
      <div>
        <BrowserRouter>
          <Route path='/' exact component={PageOne}/>
          <Route path='/pagetwo' component={PageTwo}/>
        </BrowserRouter>
      </div>
  );
};

export default App;
