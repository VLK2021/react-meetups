import React, {useContext} from 'react';

import './MeetupStyle.css';
import FavoriteContext from "../../store/favorite-context";


const Meetup = (props) => {
    const {meet: {id, title, image, address}} = props;

    const favoritesCtx = useContext(FavoriteContext);
    console.log(favoritesCtx);

    const itemIsFavorite = favoritesCtx.itemIsFavorite(id);

    function toggleFavoriteStatusHandler() {
        if (itemIsFavorite) {
            favoritesCtx.removeFavorite(id);
        } else {
            favoritesCtx.addFavorite({
                id: id,
                title: title,
                image: image,
                address: address
            });
        }
    }


    return (
        <main className={'meetup flex-direction'}>
            <h1>{title}</h1>
            <div className={'meetup-block width'}>
                <img src={image} alt=""/>
            </div>

            <p>{address}</p>

            <div className={'meetup-block-btn width flex'}>
                <button
                    onClick={toggleFavoriteStatusHandler}
                >
                    {itemIsFavorite ? 'Remove' : 'To Favorites'}
                </button>
            </div>
        </main>
    );
};

export {Meetup};