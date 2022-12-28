//https://expressjs.com/en/starter/installing.html
//https://expressjs.com/en/starter/hello-world.html
//git init
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.json());

app.listen(port, () =>
  console.log(`Server is listening at http://localhost:${port}`)
);

// https://mongoosejs.com/docs/
const mongoose = require('mongoose');
const product = require('./models/product');

main().then(() => console.log("mongodb is connected")).catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
}

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    error = { error: "no email or password" };
    console.log(`error`, error);
    return res.status(401).send(error);
  }

  login({ email, password })
    .then(product => {
      console.log('product', product);
      return res.status(200).send(product);
    })
    .catch(err => {
      console.log(`err`, err.message);
      return res.status(401).send({ error: err.message });
    });
});

app.get('/list', (req, res) => {
  const { limit = 10 } = req.query;

  getAllproducts(limit)
    .then(products => {
      console.log(`products`, products);
      return res.status(200).send(products);
    })
    .catch(err => {
      console.log(`err`, err);
      return res.status(404).send({ error: err.message });
    });
});

app.post('/register', (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(401).send({ error: "missing product data" });
  }
  addproducttoDB({ name, email, password })
    .then(product => {
      console.log(`Added product`, product);
      return res.status(200).send(product);
    })
    .catch(err => {
      console.log(`err`, err);
      return res.status(401).send({ error: err.message });
    });
});

const getAllproducts = async (n) => {
  return await (product.find().limit(n).select('-password'));
}

const addproducttoDB = async (product) => {
  //check if product exists before adding him
  const product_exists = await product.findOne({ email: product.email });
  // console.log(product_exists);
  if (!product_exists) {
    const salt = await bcrypt.genSalt(10);
    product.password = await bcrypt.hash(product.password, salt);
    const new_product = new product(product);
    await new_product.save();
    new_product.password = undefined;
    return new_product;
  }

  throw new Error("email already exists");
}

const login = async (product) => {
  //check if product exists
  const existing_product = await product.findOne({ email: product.email });
  // console.log(existing_product);
  if (!existing_product) {
    throw new Error("product doesn't exist!");
  }
  if (!bcrypt.compareSync(product.password, existing_product.password)) {
    throw new Error("Login failed");
  }
  existing_product.password = undefined;
  
  return existing_product;
}

app.get('/', (req, res) => {
  return res.status(200).send("OK");
});

module.exports = app;
