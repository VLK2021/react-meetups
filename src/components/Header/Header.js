import React from 'react';
import { NavLink } from "react-router-dom";

import './HeaderStyle.css';


const Header = () => {
    return (
        <main className={'header width flex'}>
            <h1 className={'header-title'}>React Meetups</h1>

            <ul className={'header-ul flex'}>
                <NavLink to={'/'}>
                    <li>All Meetups</li>
                </NavLink>

                <NavLink to={'/add-new-meetup'}>
                    <li>Add New Meetup</li>
                </NavLink>

                <NavLink to={'/my-favorite'}>
                    <li>My Favorite</li>
                </NavLink>
            </ul>

        </main>
    );
};

export {Header};