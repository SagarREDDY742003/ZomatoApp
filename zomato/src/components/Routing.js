import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Home from './Home/Home';
import Listing from './Listing/ListingLogic';
import DetailsLogic from './Details/DetalisLogic';

const Routing = () => {
    return(
        <>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<Main/>}>
                        <Route index element={<Home/>}/>
                        <Route path="listing/:mealId" element={<Listing/>}/>
                        <Route path="details/:resId" element={<DetailsLogic/>}/>
                    </Route>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </>
    )
}
export default Routing;