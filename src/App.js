import {Routes, Route} from "react-router-dom";

import './App.css';
import {Layout} from "./Layout";
import {AddNewMeetup, AllMeetups, MyFavorite} from "./components";


function App() {

  return (
    <main className="app">
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<AllMeetups/>}/>
                <Route path={'/add-new-meetup'} element={<AddNewMeetup/>}/>
                <Route path={'/my-favorite'} element={<MyFavorite/>}/>
            </Route>
        </Routes>
    </main>
  );
}

export {App};
