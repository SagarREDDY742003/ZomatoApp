import React from 'react';
import './Details.css';
import { useState,useEffect } from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
                    <div className='details-container' key={item.restaurant_id}>
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
    const renderDet = (data) =>{
        if(data){
            return data.map((item) => {
                return(
                    <div className='resImg'>
                        <img alt='' src={item.image_gallery[0]}/>
                        <img alt='' src={item.image_gallery[1]}/>
                        <img alt='' src={item.image_gallery[2]}/>
                        <img alt='' src={item.image_gallery[3]}/>
                    </div>
                )
            })
        }
    }

    const renderMenue = (data) => {
        if(data){
            return data.map((menudata) => {
                return(
                    <div className='menutab' key={menudata.menu_id}>
                        <div className='menuimg'><img alt='' src={menudata.menu_image} /></div>
                        <div className='menucont'>
                            <p className='menuname'>{menudata.menu_name}</p>
                            <p className='menudesc'>  {menudata.description}</p>
                            <p className='menutype'>{menudata.menu_type}</p>
                            <p className='menuprice'><span>Price:</span> {menudata.menu_price}</p>
                            <button>Add to Cart</button>
                        </div>
                    </div>
                )
            })
        } 

    }

        return(
            <div className='detcontainer'>
                {renderDetails(restaurantDetails)}
                {renderDet(restaurantDetails)}
                <div className='menu'>
                    <h1>MENU</h1>
                    {renderMenue(menue)}
                </div>
                
            </div>
            
        )
}

export default DetailsLogic;