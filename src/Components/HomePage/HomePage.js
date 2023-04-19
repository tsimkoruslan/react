import React from 'react';
import {Link, Route, Routes} from "react-router-dom";

import styleHomePage from "./styleHomePage.css"
import Albums from "../Albums/Albums";
import Todos from "../Todos/Todos";
import Comments from "../Comments/Comments";
import PostByComment from "../PostByComment/PostByComment";

const HomePage = () => {
    return (
        <div>
            <div>
                <ul className={'flex'}>
                    <li>
                        <Link to={'/albums'}>Albums</Link>
                    </li>
                    <li>
                        <Link to={'/comments'}>Comments</Link>
                    </li>
                    <li>
                        <Link to={'/todos'}>Todos</Link>
                    </li>
                </ul>
            </div>
            <div>
                <Routes>
                    <Route path={'/albums'} element={<Albums/>}/>
                    <Route path={'/comments'} element={<Comments/>}>
                        <Route path={':id'} element={<PostByComment/>}/>
                    </Route>
                    <Route path={'/todos'} element={<Todos/>}/>
                </Routes>
            </div>
        </div>
    );
};

export default HomePage;