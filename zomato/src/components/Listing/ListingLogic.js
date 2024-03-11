import React from 'react';
import { useState,useEffect } from 'react';
import './Listing.css';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import ListingDisplay from './ListingDisplay';
import CuisineFilter from '../Filter/CuisineFilter';
import CostFilter from '../Filter/CostFilter';

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

    const setDataFilter = (data) => {
        setRestaurantList(data);
    }

    return(
        <div className="container">
            <div className="selection">
                <div className="selection1">
                    <CuisineFilter mealId={mealId} restPerCuisine = {(data) => {setDataFilter(data)}}/>
                    <CostFilter restPerCost={(data) => {setDataFilter(data)}} mealId={mealId}/>
                    
                </div>
                {/* <div className="apply"><button>Apply</button></div> */}
            </div>
            <ListingDisplay listData={restaurantList}/>
        </div>
    )
}

export default ListingLogic;