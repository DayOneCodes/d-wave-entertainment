import { Event } from "../models/events.model.js";

const createEvent = async (req, res) => {
  try {
    const { title, time, day, location, month, year, category, imageUrl, description, ticketUrl, tickets } = req.body;

    if (!title || !time || !day || !location || !description ||!month || !category  || !year ) {
      return res.status(400).json({
        message: "Fill ALL required fields"
      })
    };
    
    const event = await Event.create({
      title,
      time,
      day,
      location,
      month,
      year,
      category,
      imageUrl,
      description,
      ticketUrl,
      tickets
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

    const monthIndex = {
      January: 0,
      February: 1,
      March: 2,
      April: 3,
      May: 4,
      June: 5,
      July: 6,
      August: 7,
      September: 8,
      October: 9,
      November: 10,
      December: 11
    }

    events.sort((a,b) => {
      const dateA = new Date(
        a.year,
        monthIndex[a.month],
        a.day
      );

      const dateB = new Date(
        b.year,
        monthIndex[b.month],
        b.day
      );

      return dateA - dateB
    })
    

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
    message: `Server Error: ${err.message}`
   })
  }
};


const updateEvent = async (req, res) => {
  try {
    const updated =  await Event.findByIdAndUpdate(
      req.params.id,
      req.body,
      {new: true}
    );

    res.status(200).json({
      message: "Event updates successfully",
      event: updated,
    })
  } catch (err) {
    res.status(500).json({
      message: `Server Error: ${err.message}`
    })
  }
}

export { 
  createEvent,
  readEvents,
  deleteEvent,
  updateEvent
 };