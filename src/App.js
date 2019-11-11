import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import StreamCreate from './components/streams/StreamCreate';
import StreamEdit from './components/streams/StreamEdit';
import StreamShow from './components/streams/StreamShow';
import StreamList from './components/streams/StreamList';
import StreamDelete from './components/streams/StreamDelete';
import Header from './components/Header';

const App = () => {
  return (
      <div className="ui container">
        <BrowserRouter>
          <Header />
          <Route path='/' exact component={StreamList}/>
          <Route path='/streams/new' component={StreamCreate}/>
          <Route path='/streams/edit' component={StreamEdit}/>
          <Route path='/streams/delete' component={StreamDelete}/>
          <Route path='/streams/show' component={StreamShow}/>
        </BrowserRouter>
      </div>
  );
};

export default App;
