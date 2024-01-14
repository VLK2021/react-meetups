import React, {useRef} from 'react';

import './MeetupFormStyle.css';


const MeetupForm = ({addMeetupHandler}) => {
    const titleRef = useRef();
    const imageRef = useRef();
    const addressRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const meetUp = {
            title: titleRef.current.value,
            image: imageRef.current.value,
            address: addressRef.current.value,
        };

        addMeetupHandler(meetUp);
        titleRef.current.value = '';
        imageRef.current.value = '';
        addressRef.current.value = '';
    };


    return (
        <main className={'meetupForm'}>
            <form onSubmit={handleSubmit} className={'width flex-direction'}>
                <div className={'width input-block'}>
                    <label htmlFor={'title'} className={'width'}>Meetup Title</label> <br/>
                    <input type="text" required id={'title'} ref={titleRef}/>
                </div>

                <div className={'width input-block'}>
                    <label htmlFor={'image'} className={'width'}>Meetup Image</label> <br/>
                    <input type="text" required id={'image'} ref={imageRef}/>
                </div>

                <div className={'width input-block'}>
                    <label htmlFor={'address'} className={'width'}>Address</label> <br/>
                    <input type="text" required id={'address'} ref={addressRef}/>
                </div>

                <div className={'width flex'}>
                    <button>Add new meetup</button>
                </div>
            </form>
        </main>
    );
};

export {MeetupForm};