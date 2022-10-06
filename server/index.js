const express = require("express");
const mongoConnect = require("./db");
mongoConnect();
const UserRoute = require("./routes/user");
const app = express();
app.use(express.json());
app.use("/api/user", UserRoute);
app.listen(7000, () => {
  console.log("Server running on port 7000");
});
