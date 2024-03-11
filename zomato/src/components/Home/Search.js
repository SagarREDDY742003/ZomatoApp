import React from 'react';
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import './Search.css';
const baseUrl = process.env.REACT_APP_API_URL;

const Search = () => {

    const [location, setLocation] = useState([]);
    const [restaurant, setRestaurant] = useState([]);    
    const [rest, setRest] = useState([]);    



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
                    
                        <option key={items.restaurant_id} value={items.restaurant_id}>
                            {items.restaurant_name} | {items.address}
                        </option>
                )
            })
        } 
    }

    const handleRes = (event) => {
        let resId = event.target.value;
        setRest(resId);
    }
    const renderRest = (dat) => {
        console.log(dat);
        if(dat.length > 0){
            return(
                <Link to={`/details/${dat}`}><button>Submit</button></Link>
            )
        }else{
            return(
                <p>Setect Above Input</p>
            )
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
                <select onChange={handleRes}>
                    <option>-----SELECT YOUR RESTAURANTS-----</option>
                    {renderReataurant(restaurant)}
                </select>
                
            </div>
            <div className='setbt'>{renderRest(rest)}</div>
        </div>
    )
}
export default Search;