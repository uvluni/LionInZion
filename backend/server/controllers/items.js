const Items = require('../models/items');

/*
1. getItems     GET/items
2. getItem      GET/items/:id
3. addItem      POST => /items
4. updateItem   PUT => /items/:id
5. deleteItem   DELETE => /items/:id
*/

module.exports = {
    getItems: async (req, res) => {
        try {
            const items = await Items.find({}, '-__v').populate([
                { path: 'userId', populate: { path: 'receivedReviews' } }
                // { path: 'reviews', populate: { path: 'userId' } }
            ]);
            res.status(200).json(items);
        } catch (error) {
            res.send(error);
        }
    },

    getItem: async (req, res) => {
        try {
            const item = await Items.findById(
                { _id: req.params.itemId },
                '-__v'
            ).populate([{ path: 'userId' }, { path: 'reviews', populate: { path: 'userId' } }]);
            res.status(200).json(item);
        } catch (error) {
            res.send(error);
        }
    },

    addItem: async (req, res) => {
        const newItem = new Items(req.body);
        try {
            const item = await newItem.save();
            res.status(200).json({ item, message: 'Created successfully' });
        } catch (error) {
            res.send(error);
        }
    }
};
