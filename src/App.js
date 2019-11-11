import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const PageOne = () => {
    return <div>PageOne</div>
};

const PageTwo = () => {
    return <div>PageTwo</div>
};

const Navigation = () => {
    return <div>
        <Link to="/">PageOne</Link>
        <br/>
        <Link to="/pagetwo">PageTwo</Link>
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
