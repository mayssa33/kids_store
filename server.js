const express=require ('express');
const connectDB = require("./config/connectDB");
const user=require('./routes/user');
const product=require('./routes/product');
var cors = require('cors')


const app = express();
app.use(cors())
app.use(express.json());
app.use('/user',user);
app.use('/product',product);

connectDB(); 
app.listen(5000,
    (err)=>err?console.error(err):console.log('server running on port 5000'))