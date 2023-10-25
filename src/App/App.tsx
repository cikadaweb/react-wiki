import './App.css';
import React from 'react';

import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

import Header from './pages/RouterPages/Header';
import User from './pages/RouterPages/User';
import Users from './pages/RouterPages/Users';

const App = () => {

    // const location = useLocation();

    // React.useEffect(() => {
    //     log('Страница поменялась!');
    // }, [location]);

    return (
        <div className='app'>
            <BrowserRouter>
            <Header />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Users/>}/>
                    <Route path="/user">
                        <Route path=":id" element={<User/>}></Route>
                    </Route>
                    <Route path="*" element={<Navigate to="/" replace/>}/>
                </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;
