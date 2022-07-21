import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Main from "./pages/main/Main";
import Contact from "./pages/contacts/Contact";
import About from "./pages/about/About";
import Error from "./pages/404/Error";
const App = () => {
    return (
        <div>
          <Routes>
              <Route path={'/'} element={<Main/>}/>
              <Route path={'/contacts'} element={<Contact/>}/>
              <Route path={'/about'} element={<About/>}/>
              <Route path={'*'} element={<Error/>}/>
          </Routes>
        </div>
    );
};

export default App;