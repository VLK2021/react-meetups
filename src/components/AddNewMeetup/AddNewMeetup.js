import React, {useRef} from 'react';

import './AddNewMeetupStyle.css';


const AddNewMeetup = () => {
    const titleRef = useRef();
    const imageRef = useRef();
    const addressRef = useRef();

    const addMeetupHandler = async (meetUp) => {
        await fetch('https://react-meetup-e5ce3-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetUp),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
    }


    const handleSubmit = (event) => {
        event.preventDefault();

        const currentTitle = titleRef.current.value;
        const currentImage = imageRef.current.value;
        const currentAddress = addressRef.current.value;

        const meetUp = {
            title: currentTitle,
            image: currentImage,
            address: currentAddress
        };

        addMeetupHandler(meetUp);
    }


    return (
        <main className={'addNewMeetup flex-direction'}>
            <h1 className={'width flex'}>Add New Meetup</h1>

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

export {AddNewMeetup};