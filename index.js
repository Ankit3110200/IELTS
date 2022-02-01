//importing require modules
const express=require('express');
const mongoose=require('mongoose');
const app=express();
const cors=require('cors');
const dotenv=require('dotenv');
dotenv.config();


//Configuration for express and cors error
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

//All Routes imports
const userRoutes=require('./src/Routes/user');
const homeRoutes=require('./src/Routes/home');

//MongoDB Connection Configuration
mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.cnyo8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(() => {
    console.log('DataBase Connected Successfully');
}).catch(err => {
    console.log('DataBase Connection Error: '+err);
});

//All Routers Information
app.use('/',homeRoutes);
// app.use('/post',post)
app.use('/user',userRoutes);

//making server on port 5000
app.listen(port ,()=>{
    console.log(`Server is running cool on ${port}`);
});

