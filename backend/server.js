require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const serviceRoutes = require('./routes/serviceRoutes');

const contactRoutes = require('./routes/contactRoutes');
const cors = require("cors");


connectDB();

const app = express();


app.use(cors({
    allowedHeaders:
    ['Authorization', 'Content-Type', 'X-Forwarded-For', 'X-Forwarded-Proto', 'X-Forwarded-Port', 'Access-Control-Allow-Origin'], 
    origin: '*'
}));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

app.use(express.json());



app.use('/api/products', productRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/contact', contactRoutes)


const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



  




