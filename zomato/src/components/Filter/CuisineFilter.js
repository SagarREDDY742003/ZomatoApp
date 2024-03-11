import { Axios } from 'axios';
import React from 'react';
import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL;

const CuisineFilter = (props) => {

    const handleFilter = (event) => {
        let mealId = props.mealId;
        let cuisineId = event.target.value;
        let cuisineUrl = "";
        if(cuisineId === ""){
            cuisineUrl = `${baseUrl}/filter/${mealId}`;
        }
        else{
            cuisineUrl = `${baseUrl}/filter/${mealId}?cuisineId=${cuisineId}`;
        }
        axios.get(cuisineUrl)
            .then((res) => {
                props.restPerCuisine(res.data);
            })
    }
    return(
        <div className="filter1">
            <h2>Cuisine filter</h2>
            <form action="" onChange={handleFilter}>
                <div className="select"><input type="radio" name='sagar' value=""/><p>All</p></div>
                <div className="select"><input type="radio" name='sagar' value="1"/><p>North India</p></div>
                <div className="select"><input type="radio" name='sagar' value="2"/><p>South India</p></div>
                <div className="select"><input type="radio" name='sagar' value="3"/><p>Chinese</p></div>
                <div className="select"><input type="radio" name='sagar' value="4"/><p>Fast Food</p></div>
                <div className="select"><input type="radio" name='sagar' value="5"/><p>Street Food</p></div>
            </form>                 
        </div>
    )

}
export default CuisineFilter;