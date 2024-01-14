import React from 'react';

import './AddNewMeetupStyle.css';
import {MeetupForm} from "../../components";
import { useNavigate } from 'react-router-dom';


const AddNewMeetup = () => {
    const navigate = useNavigate();

    const addMeetupHandler = async (meetUp) => {
        await fetch('https://react-meetup-e5ce3-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetUp),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(() => navigate('/'));
    };


    return (
        <main className={'addNewMeetup flex-direction width'}>
            <h1 className={'width flex'}>Add New Meetup</h1>

            <div className={'width flex'}>
                <MeetupForm addMeetupHandler={addMeetupHandler}/>
            </div>
        </main>
    );
};

export {AddNewMeetup};