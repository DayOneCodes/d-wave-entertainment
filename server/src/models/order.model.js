import mongoose, {Schema} from "mongoose" 

const OrderTicketSchema = new Schema ({
      ticketType: {
        type: String,
        required: true,
        trim: true,
      },
      quantity: {
        type: Number,
        required: true,
        min: 1,
      },
      unitPrice: {
        type: Number,
        required: true,
        min: 0,
      }, 
},
{
  _id: false
}
);


const orderSchema = new Schema({
  eventId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event",
    required: true,
    index: true,
  },
  tickets: {
    type: [OrderTicketSchema],
    required: true,
    validate: {
      validator: (v) => Array.isArray(v) && v.length > 0,
      message: "Order must contain at least one ticket"
    },
  },
  subtotal: {
    type: Number,
    required: true,
    min: 0,
  },
  serviceFee: {
    type: Number,
    required: true,
    min: 0,
    default: 0,
  },
  tax: {
    type: Number,
    required: true,
    min: 0,
    default: 0,
  },
  totalAmount: {
    type: Number,
    required: true,
    min: 0,
  },
  currency: {
    type: String,
    required: true,
    default: "GBP",
    uppercase: true
  },
  status: {
    type: String,
    enum: ["PENDING", "PAID", "CANCELLED", "EXPIRED"],
    default: "PENDING",
    index: true,
  },
  paymentProvider: {
    type: String,
    default: null,
  },
  paymentRef: {
    type: String,
    default: null,
    index: true
  },
},
{
  timestamps: true,
});

export const Order = mongoose.model("Order", orderSchema);