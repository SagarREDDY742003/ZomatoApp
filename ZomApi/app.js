let express = require('express');
let app = express();
let cors = require('cors');
let bodyParser = require('body-parser');
let {dbConnect,getData,postData,updateData,deleteData} = require('./Controller/dbcontroller');
let port = 5500;
let {ObjectId} = require('mongodb');

