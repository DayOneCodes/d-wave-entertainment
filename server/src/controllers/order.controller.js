import { Order } from "../models/order.model.js";
import { Event } from "../models/events.model.js";
import { calculateServiceFee, calculateTax } from "../utils/pricing.js";

export const createOrder = async (req, res) => {
  try {
    const { eventId, tickets } = req.body;

    if (!eventId){
      return res.status(400).json({message: "Event ID is required"});
    }

    if (!Array.isArray(tickets) || tickets.length === 0){
      return res.status(400).json({ message: "No tickets selected" });
    }

    const event = await Event.findById(eventId);
    if (!event){
      return res.status(404).json({ message: "Event not found"});
    }

    let subtotal = 0;
    const orderTickets = [];

    for (const item of tickets) {
      const { ticketType, quantity } = item;

      if (!ticketType || quantity <= 0) {
        return res.status(400).json({message: "Invalid ticket data"});
      }

      const ticketConfig = event.tickets.find(
        (t) => t.type === ticketType
      )

      if (!ticketConfig){
        return res.status(400).json({message: `Ticket type ${ticketType} not found`})
      }

      //upgrade idea: validate ticket availability

      const lineTotal = ticketConfig.price * quantity;
      subtotal += lineTotal;

      orderTickets.push({
        ticketType,
        quantity,
        unitPrice: ticketConfig.price,
      })
    }

    const serviceFee = calculateServiceFee(subtotal);
    const tax = calculateTax(subtotal);
    const totalAmount = subtotal + serviceFee + tax;

    const order = await Order.create({
      eventId,
      tickets: orderTickets,
      subtotal,
      serviceFee,
      tax,
      totalAmount,
      currency: "GBP",
      status: "PENDING",
    });

    return res.status(201).json({
      orderId: order._id,
      totalAmount,
      currency: order.currency,
      status: order.status
    })
  }
  catch (error) {
    console.error("Create order error:", error);
    return res.status(500).json({message: "Internal server error"})
  }
}