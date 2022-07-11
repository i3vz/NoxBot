const mongoose = require("mongoose");
const config = require("./config");

mongoose.connect("mongodb+srv://3vz:Iyassbilalsy1234@cluster0.e7qzf56.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  console.log("[✅ DataBase] Connected!");
});
module.exports = mongoose;
