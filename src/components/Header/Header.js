import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";

import './HeaderStyle.css';
import FavoriteContext from "../../store/favorite-context";


const Header = () => {
    const favoritesCtx = useContext(FavoriteContext);


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

                <NavLink to={'/my-favorite'} className={'flex'}>
                    <li>My Favorite</li>
                    <span className={'total flex'}>{favoritesCtx.totalFavorites}</span>
                </NavLink>
            </ul>

        </main>
    );
};

export {Header};