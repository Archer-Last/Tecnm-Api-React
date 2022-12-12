
import React from 'react';
import './index.css';
import {Routes,Route} from 'react-router-dom';
import  routes from '../router/routes.js';

console.log(routes)

function App() {
  return (
    <Routes>
      {
        routes.map((route,index)=>(
        <Route
        key={index}
        path={route.path}
        element={<route.component/>}
        />
        )
        )
      }
    </Routes>
  );
}

export default App;
