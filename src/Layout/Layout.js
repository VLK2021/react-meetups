import React from 'react';
import {Outlet} from  'react-router-dom';

import {Header} from "../components";


const Layout = () => {

    return (
        <main className={'layout width flex-direction'}>
            <div className={'layout-block-header width'}>
                <Header/>
            </div>

            <div className={'layout-block-outlet width flex'}>
                <Outlet/>
            </div>

        </main>
    );
};

export {Layout};