import React from 'react';
import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL;

function CostFilter(props){

    const handleFilter = (event) => {
        let mealId = props.mealId;
        let cost = (event.target.value).split('-');
        let lcost = cost[0];
        let hcost = cost[1];
        let costUrl = "";
        if(event.target.value === ""){
            costUrl = `${baseUrl}/filter/${mealId}`
        }else{
            costUrl = `${baseUrl}/filter/${mealId}?lcost=${lcost}&hcost=${hcost}`
        }

        axios.get(costUrl)
            .then((res) => {props.restPerCost(res.data)})

    }

    return(
        <div className="filter2">
            <h2>Price filter</h2>
            <form action="" onChange={handleFilter}>
                <div className="select"><input type="radio" name="cost" value="0-5000"/><p>All</p></div>
                <div className="select"><input type="radio" name="cost" value="0-300"/><p>0-300</p></div>
                <div className="select"><input type="radio" name="cost" value="301-600"/><p>301-600</p></div>
                <div className="select"><input type="radio" name="cost" value="601-900"/><p>601-900</p></div>
                <div className="select"><input type="radio" name="cost" value="901-5000"/><p>901-5000</p></div>
            </form>
        </div>
    )

}
export default CostFilter;