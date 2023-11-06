const mongoose = require('mongoose')
require('dotenv').config()

const connectDB = () => {
  mongoose
    .connect(
      process.env.MONGO_URI,
      {
        dbName: process.env.DB_NAME
      },
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    )
    .then(() => console.log('Connected to MongoDB!!!'))
    .catch((err) => console.log('Failed to connect to MongoDB', err))
}
module.exports = connectDB
