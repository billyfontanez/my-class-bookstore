import React from 'react';
import Home from '../pages/Home';
import AddBook from '../pages/AddBook';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

const routes = {
    '/': () => <Home />,
    '/add-book': () => <AddBook request={'add'}/>,
    '/login': () => <Login />,
    '/sign-up': () => <SignUp />,
}

export default routes;