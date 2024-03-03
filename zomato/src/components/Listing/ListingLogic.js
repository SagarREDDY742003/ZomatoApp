import React from 'react';
import { useState,useEffect } from 'react';
import './Listing.css';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import ListingDisplay from './ListingDisplay';

const baseUrl = process.env.REACT_APP_API_URL;

const ListingLogic = () => {

    const [restaurantList, setRestaurantList] = useState([]);

    let params = useParams();
    let mealId = params.mealId;

    useEffect(() => {
        sessionStorage.setItem('mealId',mealId)
        axios.get(`${baseUrl}/restaurants?mealId=${mealId}`)
        .then((res) => {
            setRestaurantList(res.data)
        })
    }, [mealId])


    return(
        <div class="container">
            <div class="selection">
                <div class="selection1">
                    <div class="filter1">
                        <h2>Cuisine filter</h2>
                        <form action="">
                            <div class="select"><input type="radio" name="gender" value="male"/><p>All</p></div>
                            <div class="select"><input type="radio" name="gender" value="male"/><p>North India</p></div>
                            <div class="select"><input type="radio" name="gender" value="male"/><p>South India</p></div>
                            <div class="select"><input type="radio" name="gender" value="male"/><p>Chinese</p></div>
                            <div class="select"><input type="radio" name="gender" value="male"/><p>Fast Food</p></div>
                            <div class="select"><input type="radio" name="gender" value="male"/><p>Street Food</p></div>
                        </form>
                    </div>
                    <div class="filter2">
                        <h2>Price filter</h2>
                        <form action="">
                            <div class="select"><input type="radio" name="gender" value="male"/><p>All</p></div>
                            <div class="select"><input type="radio" name="gender" value="male"/><p>0-300</p></div>
                            <div class="select"><input type="radio" name="gender" value="male"/><p>301-600</p></div>
                            <div class="select"><input type="radio" name="gender" value="male"/><p>601-900</p></div>
                            <div class="select"><input type="radio" name="gender" value="male"/><p>901-5000</p></div>
                        </form>
                    </div>
                </div>
                <div class="apply"><button>Apply</button></div>
            </div>
            <ListingDisplay listData={restaurantList}/>
        </div>
    )
}

export default ListingLogic;