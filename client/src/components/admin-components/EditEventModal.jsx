import { useState, useEffect, useRef } from "react";
import { useAdmin } from "../../hooks/useAdmin.js";
import Loading from "../Loading.jsx";
import Success from "../Success.jsx";
import { useModal } from "../../hooks/useModal.js";
//when one wants to only update ticket quantity or price
//error: against stuff like negative number input
const EditEventModal = ({event, closeModal}) => {
  const { updateEvent, uploadEventImage } = useAdmin(); 
  const { changeModal } = useModal();
  const [ticketLogic, setTicketLogic] = useState("internal");
  const [tickets, setTickets] = useState([
 {}]);

  const [payload, setPayload] = useState({
    ...event
  })

  const imageUrl =  useRef();

  useEffect(() => {
    if (event.ticketUrl){
      setTicketLogic("external")
    } else if (event.tickets) {
      setTicketLogic("internal")
    }

    const tickets = []
    event.tickets?.forEach((t) => {
      tickets.push(t)
    });

    setTickets(tickets)
    setPayload((prev) => {
      return {
        ...prev,
        tickets
      }
    })

  }, [event])

  useEffect(() => {
    setPayload((prev) => {
      return {
        ...prev,
        tickets
      }
    })
  }, [tickets])


  const addTicketRow = () => {
    const _id = crypto.randomUUID();
    setTickets([
      ...tickets,
      { title: "", price: "", quantity: "", description: "", _id },
    ]);
  };

  const removeTicketRow = (index) => {
    setTickets(tickets.filter((_, i) => i !== index));
  };

  const handleImageUpload = async () => {
    if (imageUrl.current.files?.[0]){
      const res = await uploadEventImage(imageUrl.current.files?.[0]);
      return res;
    } else {
      return "NO image added"
    }
  }

  const handleUpdate = async (e) => {
    e.preventDefault();
    changeModal(<Loading message={`Updating ${event.title}`}/>);
    const updatedImageUrl = await handleImageUpload();
    const updatedPayload = {
      ...payload,
      imageUrl: updatedImageUrl ? updatedImageUrl : payload.imageUrl,
    }
    await updateEvent(event._id, updatedPayload)
    changeModal(<Success close={closeModal} message={`${event.title} updated successfully`}/>)
  }

  return (
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden max-h-[90vh]">
        <header className="px-8 py-6 border-b border-gray-100 flex items-center justify-between sticky top-0 bg-white z-10">
          <div>
            <h2 className="font-heading text-2xl font-bold text-primary">
              Edit Event
            </h2>
            <p className="text-sm text-slate-500">
              Update the details for D-Wave Entertainment events.
            </p>
          </div>
          <button
            aria-label="Close modal"
            className="text-slate-400 hover:text-slate-600 transition-colors"
            onClick={() => closeModal()}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M6 18L18 6M6 6l12 12"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </button>
        </header>

        <form
          className="flex-1 overflow-y-auto custom-scrollbar p-8 space-y-8"
          id="edit-event-form"
        >
          <section className="space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2">
              General Information
              <span className="h-px flex-1 bg-primary-100"></span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Event Title
                </label>
                <input
                  className="w-full rounded-lg border-gray-200 focus:border-primary-500 focus:ring-primary-500 text-sm py-2.5"
                  type="text"
                  defaultValue={event.title}
                  onChange={(e) =>
                    setPayload((prev) => {
                      return {
                        ...prev, 
                        title: e.target.value
                      }})
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Category
                </label>
                <select className="w-full rounded-lg border-gray-200 focus:border-primary-500 focus:ring-primary-500 text-sm py-2.5"
                value={payload.category}
                onChange={(e) =>
                    setPayload((prev) => {
                      return {
                        ...prev, 
                        category: e.target.value
                      }})
                  }>
                  
                  <option value="">Select Category</option>
                  {
                    ["After Party", "Club Night", "All White Party","Rooftop"].map((ctgry, i) => (
                      <option value={ctgry} key={i}>{ctgry}</option>
                    ))
                  }
    
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Location
                </label>
                <input
                  className="w-full rounded-lg border-gray-200 focus:border-primary-500 focus:ring-primary-500 text-sm py-2.5"
                  type="text"
                  defaultValue={event.location}
                  onChange={(e) =>
                    setPayload((prev) => {
                      return {
                        ...prev, 
                        location: e.target.value
                      }})
                  }
                />
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Day</label>
              <input className="w-full rounded-lg border-gray-200 focus:border-primary-500 focus:ring-primary-500 text-sm py-2.5" id="event-day" max="31" min="1" name="day" type="number" 
              defaultValue={event.day}
              onChange={(e) => 
                setPayload((prev) => {
                        return {
                          ...prev, 
                          day: e.target.value
                  }})
              }/>
              </div>
              <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Month</label>
              <select className="w-full rounded-lg border-gray-200 focus:border-primary focus:ring-primary text-sm py-2.5"  name="month"
              value={event.month}
              onChange={(e) => 
                setPayload((prev) => {
                        return {
                          ...prev, 
                          month: e.target.value
                  }})
              }>
                {["January", 
                  "February", 
                  "March", 
                  "April", 
                  "May", 
                  "June", 
                  "July", 
                  "August", 
                  "September", 
                  "October", 
                  "November", 
                  "December"].map((m,i) => (
                    <option value={m} key={i}>{m}</option>
                  ))}
              </select>
              </div>
              <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Year</label>
              <input className="w-full rounded-lg border-gray-200 focus:border-primary-500 focus:ring-primary-500 text-sm py-2.5" id="event-year" name="year" type="text" 
              // value={payload.year} 
              defaultValue={event.year}
              onChange={(e) => 
                setPayload((prev) => {
                        return {
                          ...prev, 
                          year: e.target.value
                  }})
              }/>
              </div>
              <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Time</label>
              <input className="w-full rounded-lg border-gray-200 focus:border-primary-500 focus:ring-primary-500 text-sm py-2.5" id="event-time" name="time" type="time"
              defaultValue={event.time} 
              // defaultValue={event.time}
              onChange={(e) => 
                setPayload((prev) => {
                        return {
                          ...prev, 
                          time: e.target.value
                  }})
              }/>
              </div>
              </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Description
              </label>
              <textarea
                className="w-full rounded-lg border-gray-200 focus:border-primary-500 focus:ring-primary-500 text-sm py-2.5"
                rows="3"
                defaultValue={event.description}
                onChange={(e) =>
                      setPayload((prev) => {
                        return {
                          ...prev, 
                          description: e.target.value
                        }})
                    }
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Cover Image</label>
              <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer" data-purpose="image-upload-area">
              <input type="file" ref={imageUrl} className="m-auto w-60"/>
              <span className="text-xs text-slate-400 mt-1">PNG, JPG up to 10MB</span>
              <input className="mt-4 w-full max-w-sm rounded-lg border-gray-200 focus:border-primary-500 focus:ring-primary-500 text-xs py-2" name="imageUrl" placeholder="Or paste image URL here" type="text"/>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2">
              Ticket Management
              <span className="h-px flex-1 bg-primary-100"></span>
            </h3>

            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
              <label className="block text-sm font-semibold text-slate-700 mb-3">
                Ticket Sales Method
              </label>

              <div className="flex flex-wrap gap-6">
                <label className="inline-flex items-center cursor-pointer group">
                  <input
                    type="radio"
                    name="ticket_logic"
                    value="internal"
                    checked={ticketLogic === "internal"}
                    onChange={() => {
                      setTicketLogic("internal");
                      setPayload(prev => {
                        return {
                          ...prev,
                          ticketUrl: ""
                        }
                      })
                    }}
                    className="w-4 h-4 text-primary-600 border-gray-300"
                  />
                  <span className="ml-2 text-sm font-medium text-slate-700">
                    Internal Ticketing (Native)
                  </span>
                </label>

                <label className="inline-flex items-center cursor-pointer group">
                  <input
                    type="radio"
                    name="ticket_logic"
                    value="external"
                    checked={ticketLogic === "external"}
                    onChange={() => {
                      setTicketLogic("external");
                      setTickets([])
                      setPayload(prev => {
                        return {
                          ...prev,
                          tickets: []
                        }
                      })
                    }}
                    className="w-4 h-4 text-primary-600 border-gray-300"
                  />
                  <span className="ml-2 text-sm font-medium text-slate-700">
                    External Ticket URL
                  </span>
                </label>
              </div>
            </div>

            {ticketLogic === "external" && (
              <div className="animate-fade-in">
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  External Ticket Landing Page URL
                </label>
                <input
                  type="url"
                  className="w-full rounded-lg border-gray-200 focus:border-primary-500 focus:ring-primary-500 text-sm py-2.5"
                  placeholder="www.tickets.com/your-event"
                  defaultValue={event.ticketUrl}
                  onChange={
                    (e) => setPayload((prev) => {
                      return {
                        ...prev,
                        ticketUrl: e.target.value
                      }
                    })
                  }
                />
              </div>
            )}

            {ticketLogic === "internal" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-semibold text-slate-800">
                      Ticket Options
                    </h4>
                  </div>

                  <button
                    type="button"
                    onClick={addTicketRow}
                    className="inline-flex items-center px-3 py-1.5 text-xs font-semibold text-primary bg-primary-600 rounded-lg hover:bg-primary-700"
                  >
                    Add Ticket Tier
                  </button>
                </div>

                {payload.tickets.map((ticket, i) => (
                  <div
                    key={i}
                    className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm relative group"
                  >
                    <button
                      type="button"
                      onClick={() => removeTicketRow(i)}
                      className="absolute top-3 right-3 text-red-500"
                    >
                      ✕
                    </button>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div>
                        <label>
                          Type/Title
                        </label>

                      <input
                        type="text"
                        placeholder="Type / Title"
                        className="md:col-span-2 bg-slate-50 border-gray-200 rounded-lg text-sm"
                        defaultValue={ticket.type}
                        onChange={(e) => 
                            setTickets(tickets.map((t,_) => 
                              t._id === ticket._id ? { ...t, type: e.target.value } : t
                            ))
                        }
                      />
                      </div>

                      <div>
                        <label>
                          {"Price (£)"}
                        </label>

                      <input
                        type="number"
                        placeholder="Price (£)"
                        className="bg-slate-50 border-gray-200 rounded-lg text-sm"
                        defaultValue={ticket.price}
                        onChange={(e) => 
                            setTickets(tickets.map((t,i) => 
                              t._id === ticket._id ? { ...t, price: e.target.value } : t
                            ))
                        }
                      />
                      </div>

                      
                      <div>
                        <label>
                          Quantity
                        </label>

                      <input
                        type="number"
                        placeholder="Quantity"
                        className="bg-slate-50 border-gray-200 rounded-lg text-sm"
                        defaultValue={ticket.quantityAvailable}
                        onChange={(e) => 
                            setTickets(tickets.map((t,i) => 
                              t._id === ticket._id ? { ...t, quantityAvailable: e.target.value } : t
                            ))
                        }
                      />
                      </div>
                      
                      
                      <div>
                        <label>
                          Short Description
                        </label>

                      <input
                        type="text"
                        placeholder="Short Description"
                        className="md:col-span-4 bg-slate-50 border-gray-200 rounded-lg text-sm"
                        defaultValue={ticket.description}
                        onChange={(e) => 
                            setTickets(tickets.map((t,i) => 
                              t._id === ticket._id ? { ...t, description: e.target.value } : t
                            ))
                        }
                      />
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </form>

        <footer className="px-8 py-6 border-t border-gray-100 flex items-center justify-end space-x-4 bg-white sticky bottom-0 z-10">
          <button
            type="button"
            className="px-6 py-2.5 rounded-lg text-sm font-semibold text-red-500"
            onClick={
              () => closeModal()
            }
          >
            Cancel
          </button>

          <button
            type="submit"
            form="edit-event-form"
            className="px-8 py-2.5 rounded-lg text-sm font-semibold text-white bg-primary"
            onClick={
              handleUpdate
            }
          >
            Update Event
          </button>
        </footer>
      </div>
  );
}

export default EditEventModal;