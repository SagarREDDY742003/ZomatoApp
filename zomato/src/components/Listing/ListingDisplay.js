import React from 'react';
import { Link } from 'react-router-dom';

const ListingDisplay = (props) => {

    // const rating = (rate) => {
    //     for(let i=0;i<rate;i++){
    //         const no = document.createElement("i");
    //         no.className = "fa-sharp fa-solid fa-star fa-beat";
    //         no.style.color = "color:#ffc800";
    //         document.getElementById("star").appendChild(no);   
    //     }
    // }
    

    const renderData = ({listData}) => {
        if(listData){
            if(listData.length > 0){
                return listData.map((item) => {
                    return(
                        <div className="container-item" key={item.restaurant_id}>
                            <Link to={`/details/${item.restaurant_id}`} className='lin'>
                                <div className="item">
                                    <div className="res-img"><img src={item.restaurant_thumb} alt=""/></div>
                                    <div className="details">
                                        <h1>{item.restaurant_name}</h1>
                                        <p>{item.address}</p>
                                        <div className="star">
                                            <i className="fa-sharp fa-solid fa-star fa-beat" style={{color:"#ffc800"}} ></i>
                                            <i className="fa-sharp fa-solid fa-star fa-beat" style={{color:"#ffc800"}} ></i>
                                            <i className="fa-sharp fa-solid fa-star fa-beat" style={{color:"#ffc800"}} ></i>
                                            <i className="fa-sharp fa-solid fa-star fa-beat" style={{color:"#ffc800"}} ></i>
                                            <i className="fa-sharp fa-solid fa-star fa-beat" style={{color:"#ffc800"}} ></i>
                                            {/* {rating(item.average_rating)} */}
                                            
                                        </div>
                                        <p>Price: {item.cost}/-</p>
                                        <div className="bttn">
                                            <button className="btn1"> {item.mealTypes[0].mealtype_name}</button>
                                            <button className="btn2"> {item.mealTypes[1].mealtype_name}</button>
                                            <button className="btn3"> {item.cuisines[0].cuisine_name}</button>
                                            <button className="btn4"> {item.cuisines[1].cuisine_name}</button>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                })
            }
            else{
                return(
                    <div className="container-item">
                        <img src='/images/loader.gif' alt='' style={{height:"500px", width:"500px"}}/>
                        <h2>Loading......</h2>
    
                    </div>
                )
                
            }
        }
        else{
            return(
                <h2>No Data Found</h2>
            )
        }
        
    }

    return(
        <>
           {renderData(props)}
        </>
    )
}

export default ListingDisplay;