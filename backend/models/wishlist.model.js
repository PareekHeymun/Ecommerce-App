const mongoose = require('mongoose');

const wishlistSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'product' }],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('wishlist', wishlistSchema);
