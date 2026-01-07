import mongoose, { Schema }from "mongoose";


const ticketSchema = new Schema({
  type: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
    required: true,
    maxLength: 50,
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  quantityAvailable: {
    type: Number,
    default: 0,
    min: 0
  }
});


const eventSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    minLength: 1,
    maxLength: 100
  },
  time: {
    type: Date,
    required: true,
  },
  day: {
    type: Number,
    required: true,
    min: 1,
    max: 31,
    trim: true
  },
  location: {
    type: String,
    required: true,
    trim: true
  },
  month: {
    type: String,
    required: true,
    trim: true
  },
  year: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    required: true,
    trim: true
  },
  imageUrl: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: true,
    maxLength: 200
  },
  ticketUrl: {
    type: String,
    validate: {
      validator: function (v) {
        if ((!this.tickets || this.tickets.length === 0) && !v){
          return false;
        }
        return true;
      },

      message: "ticketUrl is required if tickets array is empty",
    },
  },
  tickets: {
  type:  [ticketSchema],
  validate: {
    validator: function (v) {
      if (!this.ticketUrl && (!v || v.length === 0)){
        return false;
      }
      return true;
    },

    message: "At least one ticket category is required if ticketUrl is missing"
  },
  },
}, {
  timestamps: true
});



export const Event = mongoose.model("Event", eventSchema)