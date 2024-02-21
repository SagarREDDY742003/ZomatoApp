let express = require('express');
let app = express();
let cors = require('cors');
let bodyParser = require('body-parser');
let {dbConnect,getData,postData,updateData,deleteData} = require('./Controller/dbcontroller');
let port = 5500;
let {ObjectId} = require('mongodb');

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.get('/',async(req,res) => {
    res.send("HII FROM SAGAR");
})

// get all location
app.get('/location',async(req,res) => {
    let query = {};
    let collection = 'location';
    let output = await getData(collection,query);
    res.send(output);

});

// get restaurant details
app.get('/restaurants',async(req,res) => {
    let query = {};
    if(req.query.stateId && req.params.mealId){
        query = {
            "state_id":Number(req.query.stateId),
            "mealTypes.mealtype_id":Number(req.query.mealId)
        }
    }
    else if(req.query.mealId){
        query = {"mealTypes.mealtype_id":Number(req.query.mealId)}
    }
    else if(req.query.stateId){
        query = {"state_id":Number(req.query.stateId)}
    }
    let collection = 'RestaurantData';
    let output = await getData(collection,query);
    res.send(output);
});

// get all meal types
app.get('/mealType', async(req,res) => {
    let query = {};
    let collection = "mealtype";
    let output = await getData(collection,query);
    res.send(output);
})

app.get('/filter/:mealId', async(req,res) => {
    let mealId = Number(req.params.mealId);
    let cuisineId = Number(req.query.cuisineId);
    let lcost = Number(req.query.lcost);
    let hcost = Number(req.query.hcost);
    if(cuisineId){
        query = {
            "mealTypes.mealtype_id":Number(mealId),
            "cuisines.cuisine_id":Number(cuisineId)
        }
    }
    else if(lcost && hcost){
        query = {
            "mealTypes.mealtype_id":Number(mealId),
            $and:[{cost:{$gt:lcost,$lt:hcost}}]
        }
    }
    else if(cuisineId && lcost && hcost){
        query = {
            "mealTypes.mealtype_id":Number(mealId),
            "cuisines.cuisine_id":Number(cuisineId),
            "mealTypes.mealtype_id":Number(mealId),
            $and:[{cost:{$gt:lcost,$lt:hcost}}]
        }
    }
    else{
        query = {}
    }
    let collection = 'RestaurantData';
    let output = await getData(collection,query);
    res.send(output);
})

//menu of restaurants
app.get('/menu/:id',async(req,res) => {
    let collection = "RestaurantMenu";
    let query = {restaurant_id:Number(req.params.id)};
    let output = await getData(collection,query);
    res.send(output);
});

// get orders
app.get('/orders',async(req,res) => {
    let collection = "Orders";
    let query = {};
    if(req.query.email){
        query = {email:req.query.email};
    }
    let output = await getData(collection,query);
    res.send(output);
});

app.listen(port,(err) => {
    dbConnect();
    if(err) throw err;
    console.log(`server is running in port ${port}`);
})