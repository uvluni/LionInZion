const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
	title: String,
	type: String,
	generalDesc: String,
	currency: String,
	price: [
		{
			amount: Number,
			total: Number
		}
	],
	imageUrl: String,
	address: {
		country: String,
		city: String,
		street: String,
		number: Number,
		lat: Number,
		lng: Number
	},
	userId: {
		type: Schema.Types.ObjectId,
		ref: 'user'
	},
	reviews: [
		{
			type: Schema.Types.ObjectId,
			ref: 'review'
		}
	],
	addedDate: String,
	lastUpdate: String
});

const item = mongoose.model('item', ItemSchema);

module.exports = item;
