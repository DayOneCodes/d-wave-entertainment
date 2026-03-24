import { useEventMeta } from "../../hooks/useEventMeta.js";
import { useRef, useState } from "react";
import TicketOption from "./TicketOption.jsx";
import ImageModal from "./ImageModal.jsx";


export default function TicketsModal ({close, next, callback, admin, photo, showToast}) {
const form = useRef();
const [tickets, setTickets] = useState([]);

const removeTicket = (index) => {
  setTickets(prev => prev.filter((_, i) => i !== index))
};

const handleTicketUpdate = (index, field, value) => {
  setTickets(prev => {
    const updated = [...prev];
    updated[index] = {
      ...updated[index],
      [field]: value
    };
    return updated;
  });
};

const handleProceed = (e) => {
  e.preventDefault();

  const ticketUrl = form.current?.ticketUrl?.value;

  if (ticketUrl && tickets.length) {
    showToast("Only one of ticket Url or ticket options can be used", "error")
    return;
  };

  const eventTickets = {
    ticketUrl: ticketUrl || null,
    tickets: tickets || null
  }

  callback.addTickets(eventTickets);
  next(<ImageModal
     close={close} 
     next={next} 
     callback={callback} 
     admin={admin} 
     photo={photo}
     showToast={showToast}/>)
}
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-transparent">
      {/* Modal Container: Constrained height and flex column */}
      <div className="bg-white border border-input-border shadow-2xl rounded-2xl w-full max-w-lg max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in duration-300">
        
        {/* Fixed Header Section */}
        <div className="p-5 sm:p-6 border-b border-gray-100 flex-shrink-0">
          <h1 className="text-lg sm:text-xl font-poppins text-primary tracking-wide uppercase">
            Ticketing & Access
          </h1>
          <p className="text-gray-400 text-[10px] uppercase tracking-widest mt-1">Step 3: Tickets & Pricing</p>
        </div>

        {/* Scrollable Form Content */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-8 custom-scrollbar">
          <form ref={form} className="space-y-6">
            
            {/* External Link Section */}
            <div className="space-y-3 pb-6 border-b border-gray-100">
              <label className="block space-y-1.5">
                <p className="text-primary text-[9px] font-bold uppercase tracking-widest px-1">External Ticket URL</p>
                <input 
                  className="w-full bg-input-background border border-input-border rounded-lg h-11 px-4 text-black text-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all placeholder:text-input-placeholder" 
                  type="text" 
                  name="ticketUrl"
                  placeholder="https://eventbrite.com/..."
                />
              </label>
            </div>

            {/* Internal Ticket Options Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <p className="text-primary text-[9px] font-bold uppercase tracking-widest px-1">Internal Ticket Options</p>
            </div>

            {/* Dynamic Ticket Options List (Scrollable Area) */}
            <div className="space-y-4">
              {tickets.map((_,index) => (
                <TicketOption key={index} index={index} removeTicket={removeTicket} handleTicketUpdate={handleTicketUpdate}/>
              ))}
              
              <button className="w-full py-3 border-2 border-dashed border-gray-200 rounded-xl text-gray-400 text-[10px] font-bold uppercase tracking-widest hover:border-primary hover:text-primary transition-all" onClick={(e) => {
                e.preventDefault();
                setTickets(prev => [...prev, {type: "", description: "", price: "", quantityAvailable: ""}]);
              }}>
                + Add Another Ticket Type
              </button>
            </div>
          </form>
        </div>

        {/* Fixed Footer Section */}
        <div className="p-5 sm:p-6 border-t border-gray-100 bg-gray-50/30 flex flex-col-reverse sm:flex-row items-center justify-end gap-3 flex-shrink-0">
          <button 
            className="w-full sm:w-auto text-gray-500 hover:text-primary text-[10px] font-bold uppercase tracking-[2px] py-2 transition-colors" 
            onClick={(e) => { e.preventDefault(); close(); }}
            type="button"
          >
            Discard
          </button>

          <button 
            type="submit" 
            className="w-full sm:w-auto bg-primary text-white px-8 py-3 rounded-lg text-xs font-bold uppercase tracking-[2px] hover:bg-brand-hover shadow-lg transition-all active:scale-95" 
            onClick={handleProceed}
          >
           Save & Proceed
          </button>
        </div>
      </div>
    </div>
  )
}