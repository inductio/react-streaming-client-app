import React from 'react';
import { Route, Router } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamShow from './streams/StreamShow';
import StreamList from './streams/StreamList';
import StreamDelete from './streams/StreamDelete';
import Header from './Header';
import history from '../history';

const App = () => {
  return (
      <div className="ui container">
        <Router history={history}>
          <Header />
          <Route path='/' exact component={StreamList}/>
          <Route path='/streams/new' component={StreamCreate}/>
          <Route path='/streams/edit/:id' component={StreamEdit}/>
          <Route path='/streams/delete/:id' component={StreamDelete}/>
          <Route path='/streams/show/:id' component={StreamShow}/>
        </Router>
      </div>
  );
};

export default App;
