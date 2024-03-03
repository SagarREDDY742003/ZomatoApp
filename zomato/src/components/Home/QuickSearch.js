import React, { useEffect, useState } from 'react';
import './QuickSearch.css';
import QuickDisplay from './QuickDisplay';

const baseUrl = process.env.REACT_APP_API_URL;


const QuickSearch = () => {

    const [mealType, setmealType] = useState([]);

    useEffect(() => {
        fetch(`${baseUrl}/mealType`, {method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            setmealType(data);
        })
    }, [])

    return(
        <div className="container2">
            <h2>Quick Search</h2>
            <p>Find Restaurants by MealType</p>
            <QuickDisplay mealData={mealType}/>
        </div>
    )
}
export default QuickSearch;