require("dotenv").config();

const productData = require("./data/products");
const serviceData = require("./data/services");
const connectDB = require("./config/db");
const Product = require("./models/product");
const Service = require("./models/service");

connectDB();

const importData = async () => {
  try {
    await Product.deleteMany({});

    await Product.insertMany(productData);

    await Service.deleteMany({});

    await Service.insertMany(serviceData);

    console.log("Data Import Success");

    process.exit();
  } catch (error) {
    console.error("Error with data import", error);
    process.exit(1);
  }
};

importData();
