import { useState } from "react"
import Loading from "../Loading.jsx";
import Success from "../Success.jsx";

export default function ConfirmDelete ({event, deleteEvent, closeModal, changeModal}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleDelete = async () => {
    setLoading(true);
    setError(null);

    try {
      await deleteEvent(event._id)
      changeModal(<Success close={closeModal} message="Event deleted Successfully"/>)
    }
    catch (err) {
      setError(err.message || "Failed to delete event")
    }
    finally {
      setLoading(false)
    }
  }

  if (loading) return <Loading message={`Deleting ${event.title}`}/>
  if (error) return <p>Error deleting event</p>

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-transparent">
      <div className="bg-white border border-red-100 shadow-2xl rounded-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-300">
        
        {/* Warning Header */}
        <div className="p-8 pb-4 text-center">
          <div className="size-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-red-100">
            <span className="material-symbols-outlined text-red-700 text-3xl">delete_forever</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-poppins text-primary tracking-wide uppercase">
            Delete Event?
          </h1>
          <p className="text-gray-500 text-sm mt-2 px-4 leading-relaxed">
            Are you sure you want to remove this event? This action <span className="text-red-700 font-bold underline">cannot be undone</span> and will remove all associated ticket data.
          </p>
        </div>

        {/* Event Summary Preview (To ensure they delete the right one) */}
        <div className="mx-8 p-4 bg-gray-50 rounded-xl border border-gray-100 mb-6">
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">Target Event</p>
          <p className="text-black font-semibold text-base truncate">{event.title}</p>
          <p className="text-gray-500 text-xs italic">{event.day} {event.month} {event.year}</p>
        </div>

        {/* Action Buttons */}
        <div className="p-6 bg-gray-50/50 flex flex-col-reverse sm:flex-row items-center justify-center gap-3 border-t border-gray-100">
          <button 
            className="w-full sm:w-auto px-8 py-3 text-gray-500 hover:text-primary text-[10px] font-bold uppercase tracking-[2px] transition-colors" 
            onClick={closeModal}
          >
            Go Back
          </button>

          <button 
            className="w-full sm:w-auto bg-red-700 text-white px-8 py-3 rounded-lg text-xs font-bold uppercase tracking-[2px] hover:bg-red-800 shadow-lg shadow-red-200 transition-all active:scale-95" 
            onClick={() => handleDelete()}
          >
            Confirm Delete
          </button>
        </div>
      </div>
    </div>
  )
}