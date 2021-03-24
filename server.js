const express = require('express');
const path = require('path');
const app = express();
//const routes = require("./routes");
const PORT = process.env.PORT || 4200;
const mongoose = require("mongoose");

app.use(express.static(__dirname + "/dist/Dodgers")); // set static files location, in this case the route, add a file name if not
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//API Routes
app.use(routes);

//Direct To Home Page
app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname +'/dist/Dodgers/index.html'));
});

//Using Updated MongoDB Options
/* const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
} */

//MongoDB database connection
/* mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/dodgers", options)
  .then(() => {
    console.log("Mongo Connected")
  })
  .catch(err => {
    console.log("Mongo Error", err)
  }); */

//Server Connection
app.listen(PORT, () => {
  console.log("Listening on port:" + PORT);
});