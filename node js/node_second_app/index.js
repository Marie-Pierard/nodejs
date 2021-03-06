const mongoose = require("mongoose")
const express     = require("express");
const bodyParser  = require("body-parser");

const app = express();

app.use(bodyParser.json());

require("./models/Pet")(app);
require("./routes/petRoutes")(app);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running`);
mongodb://newUser:<azerty>@cluster0.ptcos.mongodb.net/<dbname>?retryWrites=true&w=majority
});