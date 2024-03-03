import React from 'react';
import {Link} from 'react-router-dom';

const QuickDisplay = (props) => {

    const listMeal = ({mealData}) => {
        if(mealData){
            return mealData.map((item) => {
                return(

                        <div className="types">
                            <img src={item.meal_image} alt=""/>
                            <Link to={`/listing/${item.mealtype_id}`} className='lin'>
                                <div className="type-cont">
                                    <p href="./page2.html" className='heading'>{item.mealtype}</p>
                                    <p>Best Deal for {item.mealtype}</p>
                                </div>
                            </Link>
                        </div>
                  
                )
            })
        }
    }

    return(
        <div className="quick-search">
                {listMeal(props)}
        </div> 
    )
}

export default QuickDisplay;