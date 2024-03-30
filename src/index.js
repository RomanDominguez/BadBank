import React from 'react';
import { createRoot } from 'react-dom/client';
import NavBar from './navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home';
import CreateAccount from './createaccount';
import AllData from './alldata';
import Balance from './balance';
import Deposit from './deposit';
import Login from './login';
import Withdraw from './withdraw';
import './index.css';

const UserContext = React.createContext(null);

function Spa () {

    return (
        
        <>
            <BrowserRouter>
                    <h1>Welcome to BadBank</h1>
                    <NavBar/>
                    <UserContext.Provider value={{users:[{name:'Roman', email:'roman_ipn@mit.edu', password:'secret', balance: 200}]}}>
                        <Routes>
                            <Route path='/'              element={ <Home/> } exact />
                            <Route path='/CreateAccount' element={ <CreateAccount/> } exact />
                            <Route path='/alldata'       element={ <AllData/> } exact />
                            <Route path='/balance'       element={ <Balance/> } exact />
                            <Route path='/deposit'       element={ <Deposit/> } exact />
                            <Route path='/login'         element={ <Login/> } exact />
                            <Route path='/withdraw'      element={ <Withdraw/> } exact />
                        </Routes>                           
                    </UserContext.Provider>
            </BrowserRouter>
        </>

    );
}

const container = document.getElementById('root');
const root = createRoot(container); 
root.render(<Spa/>);

export default UserContext;