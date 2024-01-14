import React, {useContext} from 'react';

import './MyFavoriteStyle.css';
import FavoriteContext from "../../store/favorite-context";
import {Meetup} from "../../components";


const MyFavorite = () => {
    const favoritesCtx = useContext(FavoriteContext);


    return (
        <main className={'myFavorite width flex-direction'}>
            {
                favoritesCtx.favorites.length > 0 &&
                favoritesCtx.favorites.map(meet => <Meetup key={meet.id} meet={meet}/>)
            }
        </main>
    );
};

export {MyFavorite};