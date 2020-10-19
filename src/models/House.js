import { Schema, model } from 'mongoose';

const HouseSchema = new Schema({
  thumbnail: String,
  description: String,
  price: Number,
  location: String,
  status: Boolean,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  toJSON: {
    virtuals: true
  }
});

HouseSchema.virtual('thumbnail_url').get(function () {
  return `http://YOUR_HOST:YOUR_PORT/files/${this.thumbnail}`; //Example: http://localhost:3333
});

export default model('House', HouseSchema);