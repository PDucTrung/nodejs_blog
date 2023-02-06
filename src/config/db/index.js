const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

function connect() {
  mongoose
    .connect("mongodb://127.0.0.1:27017/trung_blog_dev", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connected!"))
    .catch((err) => console.log("Connect failure!"));
}

module.exports = { connect };
