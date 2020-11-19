const mongoose = require('mongoose');

const databaseHostname =
  process.env.NODE_ENV === 'production' ? 'db' : 'localhost';

mongoose.connect(`mongodb://${databaseHostname}:27017/bookable`);

const reviewSchema = mongoose.Schema({
  username: String,
  image: String,
  dateNum: Number,
  dateStr: String,
  review: String,
  roomId: Number, //This will be mongoose.ObjectId once the room model has been created
  cleanlinessRating: Number,
  communicationRating: Number,
  checkInRating: Number,
  accuracyRating: Number,
  locationRating: Number,
  valueRating: Number,
  totalRating: Number,
});

const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;
