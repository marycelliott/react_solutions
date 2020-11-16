const express = require("express");
const app = express();
const cors = require("cors");

// READNG JSON DATA AND ALLOWING FOR POST DATA
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// BRING IN ROUTES
require("./config/mongoose.config");
require("./routes/shark.routes")(app);

app.listen(8000, () => console.log(`Listening on port: 8000`));
