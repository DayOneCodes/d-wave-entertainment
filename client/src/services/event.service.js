import { EventAPI } from "../api/eventApi.js";

class EventService {
  async getEvents() {
    return EventAPI.fetchAll();
  }

  async addEvent(event) {
    console.log(event)
    this.#validateEvent(event);
    return EventAPI.create(event);
  }

  async updateEvent(eventId, event) {
    if (!eventId) throw new Error("Event ID is required");
    return EventAPI.update(eventId, event)
  }

  async deleteEvent(eventId) {
    if (!eventId) throw new Error("Event ID is required");
    return EventAPI.delete(eventId);
  }

  async uploadImage (file) {
    const formData = new FormData();
    formData.append("imageUrl", file);
    return EventAPI.upload(formData);
  }

  #validateEvent(event) {
    if (!event?.title) throw new Error ("Event title is required");
    if (!event?.day) throw new Error ("Event date is required");
    if (!event?.location) throw new Error ("Event location is required");
  }
}

export const eventService = Object.freeze(new EventService());