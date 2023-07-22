import React from 'react';
import Full from "./full";
import LoginPage from './welcomepage/singin';
import RegisterPage from './welcomepage/registation';
import Users from './Users';


function App() {
    const path = window.location.pathname;

    let currentPage;
    if (path === '/login') {
      currentPage = <LoginPage />;
    } else if (path === '/register') {
      currentPage = <RegisterPage />;
    } else if (path === '/user') {
      currentPage = <Users />;
    } else {
      currentPage = <Full />;
    }
  
    return <div>{currentPage}</div>;
}

export default App;

