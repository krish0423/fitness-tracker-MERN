const mongoose = require("mongoose");

mongoose.set("strictQuery", false);


mongoose.connect( "mongodb+srv://Krish:Krish@cluster1.rv20t2c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, err => {
  if (err) throw err;
  console.log('Connected to MongoDB!')
}

);

module.exports = mongoose.connection;
