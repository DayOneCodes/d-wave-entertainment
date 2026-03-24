export default class EventMetaError extends Error {
  constructor (message, code, statusCode) {
    super(message)
    this.name = "Event meta error";
    this.code = code;
    this.statusCode = statusCode;
  }
}