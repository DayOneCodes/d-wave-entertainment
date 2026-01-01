import { Event } from "../models/events.model.js";

const createEvent = async (req, res) => {
  try {
    const { title, date, location, month, year, category, imageUrl, ticketUrl } = req.body;

    if (!title || !date || !location || !month || !category || !imageUrl || !ticketUrl || !year ) {
      return res.status(400).json({
        message: "All fields are required."
      })
    };
    
    const event = await Event.create({
      title,
      date,
      location,
      month,
      year,
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

const readEvents = async (req, res) => {
  try {
    const events = await Event.find();
    return res.status(200).json(events);
  }
  catch (err) {
    return res.status(500).json({
      message: `Server Error: ${err.message}`
    })
  }
};

const deleteEvent = async (req, res) => {
  try {
    const deleted = await Event.findByIdAndDelete(req.params.id);

    if (!deleted) {return res.status(404).json({
      message: "Error event not found"
    })
    }

    return res.status(200).json({
      message: "Event Deleted Successfully",
      event: deleted
    })
  }
  catch (err) {
   return res.status(500).json({
    message: `Server: ${err.message}`
   })
  }
};

export { 
  createEvent,
  readEvents,
  deleteEvent
 };