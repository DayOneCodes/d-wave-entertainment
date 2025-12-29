import { Event } from "../models/events.model.js";

const createEvent = async (req, res) => {
  try {
    const { title, date, location, month, category, imageUrl, ticketUrl } = req.body;

    if (!title || !date || !location || !month || !category || !imageUrl || !ticketUrl) {
      return res.status(400).json({
        message: "All fields are required."
      })
    };
    
    const event = Event.create({
      title,
      date,
      location,
      month,
      category,
      imageUrl,
      ticketUrl
    });

    return res.status(200).json({
      message: "Event created successfully",
      event
    });
  }
  catch (err) {
    return res.status(500).json({
      message: `Server Error: ${err.message}`
    })
  }
};

export { 
  createEvent
 };