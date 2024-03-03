import React from 'react';
import { useState, useEffect } from 'react';
import './Search.css';
const baseUrl = process.env.REACT_APP_API_URL;

const Search = () => {

    const [location, setLocation] = useState([]);
    const [restaurant, setRestaurant] = useState([]);

    useEffect(() => {
        fetch(`${baseUrl}/location`, {method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            setLocation(data);
        })
    },[])

    const renderCity = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option key={item.state_id} value={item.state_id}>
                        {item.state}
                    </option>
                )
            })
        } 
    }

    const handleRestaurant = (event) => {
        let stateId = event.target.value;
        console.log(stateId);
        fetch(`${baseUrl}/restaurants?stateId=${stateId}`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            setRestaurant(data);
        })
    }
    const renderReataurant = (data) => {
        if(data){
            return data.map((items) => {
                return(
                    <option key={items.state_id} value={items.state_id}>
                        {items.restaurant_name} | {items.address}
                    </option>
                )
            })
        } 
    }

    return(
        <div className="container1">
        <img src="./images/food-wallpaper.png" alt="" className="mainimg"/>
        <div className="logo">
            <div className="roter">
                <img src="./images/healthy-plate_meals.jpg" alt=""/>
                <h3>HI</h3>
            </div> 
        </div>
        <div className="heading">
            Find Best Place Near You
        </div>
        <div className="dropdown">
            <select onChange={handleRestaurant}>
                <option>-----SELECT YOUR CITY-----</option>
                {renderCity(location)}
            </select>
            <select>
                <option>-----SELECT YOUR RESTAURANTS-----</option>
                {renderReataurant(restaurant)}
            </select>
            <button>submit</button>
        </div>
    </div>
    )
}
export default Search;