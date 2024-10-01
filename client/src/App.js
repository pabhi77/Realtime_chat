import React from 'react';
import{BrowserRouter as Router,Routes,Route}from 'react-router-dom';

import Join from'./components/Join';
import Chat from'./components/Chat';

const App=() =>(
    <Router>
        <Routes>
        <Route path="/" exact Component={Join} />
        <Route path="/Chat" Component={Chat} />

        </Routes>
       

    </Router>

);
export default App;