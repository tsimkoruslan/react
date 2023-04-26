import React from 'react';
import { Link, Navigate, Route, Routes} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import UsersPage from "./pages/UsersPage";
import UserDetailsPage from "./pages/UserDetailsPage";
import FormPage from "./pages/FormPage";

const App = () => {
    return (
        <div>
            <Link to={'/form'}><button>go to form</button></Link>

            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<Navigate to={'users'}/>}/>
                    <Route path={'users'} element={<UsersPage/>}>
                        <Route path={':id'} element={<UserDetailsPage/>}/>
                    </Route>
                </Route>
                <Route path={'/form'} element={<FormPage/>}/>
            </Routes>

        </div>
    );
};

export default App;