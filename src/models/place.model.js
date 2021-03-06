const { Schema, model } = require('mongoose')

const Lugares = model('Lugares', {
  name: {
    type: String,
    required: true,
  },
  location: {
    lat: Number,
    lng: Number,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  cityId: {
    type: Schema.Types.ObjectId,
    ref: 'City',
  },
})

module.exports = Lugares
