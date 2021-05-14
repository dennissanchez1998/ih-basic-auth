const mongoose = require('mongoose');
const MONGODB_URI = "mongodb+srv://l3akc47:l3akc47@cluster0.xs76a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => console.log(`Successfully connected to the database ${MONGODB_URI}`))
  .catch(error => {
    console.error(`An error ocurred trying to connect to the database ${MONGODB_URI}: `, error);
    process.exit(1);
  });
