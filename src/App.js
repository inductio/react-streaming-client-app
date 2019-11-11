import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

const PageOne = () => {
    return <div>PageOne</div>
};

const PageTwo = () => {
    return <div>PageTwo</div>
};

const Navigation = () => {
    return <div>
        <a href="/">PageOne</a>
        <br/>
        <a href="/pagetwo">PageTwo</a>
        <br/><br/>
    </div>
};

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Route path='/' component={Navigation}/>
                <Route path='/' exact component={PageOne}/>
                <Route path='/pagetwo' component={PageTwo}/>
            </BrowserRouter>
        </div>
    );
};

export default App;
