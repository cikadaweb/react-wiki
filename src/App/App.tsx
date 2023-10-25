import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Header from './pages/RouterPages/Header';
import User from './pages/RouterPages/User';
import Users from './pages/RouterPages/Users';

const App = () => {
    return (
        <div className='app'>
            <BrowserRouter>
            <Header />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Users/>}/>
                    <Route path="/user" element={<User/>}></Route>
                </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;
