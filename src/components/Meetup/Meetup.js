import React from 'react';

const Meetup = (props) => {
    const {meet} = props;


    return (
        <main className={'meetup'}>
            <div>{meet.address}</div>
        </main>
    );
};

export {Meetup};