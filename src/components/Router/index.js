import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Profile from "../Profile";
import Messenger from "../Messenger";
import Chats from "../Chats";
import {Placeholder} from "../Placeholder";
import {Home} from "../Home";
import { NoMatch } from "../NoMatch";

import "./style.scss";
import { Articles } from "../Articles";
export const Router = () => 
<BrowserRouter>
    <nav className="navigation">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/chats">Chats</NavLink>
        <NavLink to="/articles">Articles</NavLink>
    </nav>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/articles" element={<Articles/>} />
        <Route path="/chats" element={<Chats />}>
            <Route path="" element={<Placeholder/>} />
            <Route path=":chatId" element={<Messenger/>}/>
        </Route>
        <Route path="*" element={<NoMatch/>} />
</Routes>
</BrowserRouter>