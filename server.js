const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

require('dotenv').config();

const db = require('./config/database');

db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//DB Routes
app.use('/builds', require('./routes/builds'));

db.sync().then(function() {
    app.listen(PORT, function() {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
    });
});