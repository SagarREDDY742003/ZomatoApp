import React from 'react';
import './Details.css';
import { useState,useEffect } from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL;

const DetailsLogic = () => {

    let params = useParams();
    let resId = params.resId;

    const [restaurantDetails, setRestaurantDetails] = useState([]);
    const [menue, setMenue] = useState([]);

    useEffect(() => {
        sessionStorage.setItem('resId',resId)
        axios.get(`${baseUrl}/details/${resId}`)
        .then((res) => {
            setRestaurantDetails(res.data);
        })
    },[resId])

    useEffect(() => {
        sessionStorage.setItem('resId',resId)
        axios.get(`${baseUrl}/menu/${resId}`)
        .then((res) => {
            setMenue(res.data);
        })
    },[resId])

    const renderDetails = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <div className='details-container'>
                        <div className='det-img'><img alt='' src={item.restaurant_thumb}/></div>
                        <div className='det-cont'>
                            <p className='resname'>{item.restaurant_name}</p>
                            <p className='resadd'><span>Address:</span>  {item.address}</p>
                            <p className='resrating'><span>Rating:</span>  {item.average_rating}</p>
                            <p className='contact'><span>Contact:</span>  {item.contact_number}</p>
                            <div className="bttn">
                                <button className="btn1"> {item.mealTypes[0].mealtype_name}</button>
                                <button className="btn2"> {item.mealTypes[1].mealtype_name}</button>
                                <button className="btn3"> {item.cuisines[0].cuisine_name}</button>
                                <button className="btn4"> {item.cuisines[1].cuisine_name}</button>
                             </div>
                        </div>

                    </div>
                )
            })
        } 
    }
    const renderMenue = (data) => {
        if(data){
            return data.map((menudata) => {
                return(
                    <div className='menu'>
                        <div className=''><img alt='' /></div>
                        <div className='det-cont'>
                            <p className='resname'>{menudata.menu_name}</p>
                            <p className='resadd'>  {menudata.description}</p>
                            <p className='resrating'>{menudata.menu_type}</p>
                            <p className='contact'> {menudata.menu_price}</p>
                        </div>
                    </div>
                )
            })
        } 

    }

        return(
            <div className='detcontainer'>
                {renderDetails(restaurantDetails)}
                {renderMenue(menue)}
            </div>
            
        )
}

export default DetailsLogic;