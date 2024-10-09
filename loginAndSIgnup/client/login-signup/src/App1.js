import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserLogin from './components/UserLogin';
import UserRegister from './components/UserResgister';


const App1 = () => {
    return (
        <div className="App">
        <Routes>
            <Route path='/register' element={<UserRegister />} />
            <Route path='/login' element={<UserLogin />} />
        </Routes>
    </div>
    );
};

export default App1;
