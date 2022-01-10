import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Profile from "../Profile";
import Chats from "../Chats";
import ChatList from "../ChatList";
import {Placeholder} from "../Placeholder";
import {Home} from "../Home";
import { NoMatch } from "../NoMatch";

import "./style.scss";
export const Router = () => 
<BrowserRouter>
    <nav className="navigation">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/chats">Chats</NavLink>
    </nav>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/chats" element={<ChatList />}>
            <Route path="" element={<Placeholder/>} />
            <Route path=":chatId" element={<Chats/>}/>
        </Route>
        <Route path="*" element={<NoMatch/>} />
</Routes>
</BrowserRouter>