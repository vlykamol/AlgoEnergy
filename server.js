const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
require('dotenv').config()

PORT = process.env.PORT || 5000
const mongoURI = process.env.MONGO_URI

const app = express();

//connect to database
mongoose.connect(mongoURI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch(() => {
    console.log("MongoDB not connected");
  });


// Middleware
app.use(cors());
app.use(express.json());


//routes
const assetRoute = require('./routes/assetRoute')
const performanceRoute = require('./routes/perMatricRoute')
const userRoute = require('./routes/userRoutes')

app.use('/asset', assetRoute)
app.use('/performance', performanceRoute)
app.use('/user', userRoute)



// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on  http://localhost:${PORT}`);
});