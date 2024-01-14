import React, {useEffect, useState} from 'react';

import './AllMeetupsStyle.css';
import {Meetup} from "../../components";


const AllMeetups = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);
    console.log(loadedMeetups);

    useEffect(() => {
        setIsLoading(true);
        fetch('https://react-meetup-e5ce3-default-rtdb.firebaseio.com/meetups.json')
            .then(response => response.json())
            .then(value => {
                const meetupsArray = [];

                for (const valueKey in value) {
                    value[valueKey].id = valueKey;
                    meetupsArray.push(value[valueKey]);
                }

                setIsLoading(false);
                setLoadedMeetups(meetupsArray);
            })
    }, []);

    if (isLoading) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        );
    }


    return (
        <main className={'allMeetups width flex-direction'}>
            {loadedMeetups.length > 0 &&
            loadedMeetups.map(meet => <Meetup key={meet.id} meet={meet}/>)
            }
        </main>
    );
};

export {AllMeetups};