const express = require("express");
const cors = require("cors");
const connectDataBase = require("./ConnectDb/connectdb");
const authRoute = require("./Routes/auth");
const createPostRoute = require("./Routes/createPost");
const createProductRoute = require("./Routes/product");
const PORT = 8000;

// ________|CONNECT DB WITH MONGODB|_________
connectDataBase();
// ________|CONNECT DB WITH MONGODB|_________

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

// ________|ALL ROUTES|_________
app.use('/api/auth',authRoute);
app.use('/api/create/userpost',createPostRoute);
app.use('/api/create/product',createProductRoute);
app.use('/',express.static('/createpost'));
// ________|ALL ROUTES|_________

// ________|APP IS RUNNING|_________
app.listen(PORT, (error) => {
  if (error) {
    console.log(`SOMETHING WENT WRONG ${error}`);
  }
  console.log(`APP IS RUNNING IN PORT ${PORT}`);
});
// ________|APP IS RUNNING|_________
