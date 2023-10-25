import './App.css';
import React from 'react';

import {Routes, Route, Outlet, BrowserRouter} from 'react-router-dom';

import Header from './pages/RouterPages/Header';
import User from './pages/RouterPages/User';
import Users from './pages/RouterPages/Users';

const Main = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
};

const Index = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
};

// const App = () => {

//     // const location = useLocation();

//     // React.useEffect(() => {
//     //     log('Страница поменялась!');
//     // }, [location]);

//     return (
//         <div className='app'>
//             <BrowserRouter>
//             <Header />
//             <div className="container">
//                 <Routes>
//                     <Route path="/" element={<Users/>}/>
//                     <Route path="/user">
//                         <Route path=":id" element={<User/>}></Route>
//                     </Route>
//                     <Route path="*" element={<Navigate to="/" replace/>}/>
//                 </Routes>
//                 </div>
//             </BrowserRouter>
//         </div>
//     );
// };

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />}>
                    <Route path="users" element={<Users />} />
                    <Route path="user/:id" element={<User />} />
                    <Route index element={<Index />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
