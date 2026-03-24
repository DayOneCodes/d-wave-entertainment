import { useEventMeta } from "../../hooks/useEventMeta.js";
import { useRef } from "react";
import TicketsModal from "./TicketsModal.jsx";


export default function LogisticsModal ({close, next, callback, admin, photo, showToast}) {
const form = useRef()

// use date provider
const daysInMonth = new Date()

const handleProceed = (e) => {
 e.preventDefault();

 const eventLogistics = {
  day : form.current.day.value,
  time : form.current.time.value,
  month: form.current.month.value,
  year : form.current.year.value,
  location : form.current.location.value,
  }

  callback.addLogistics(eventLogistics)
  next(<TicketsModal
     close={close} 
     next={next} 
     callback={callback} 
     admin={admin}
     photo={photo}
     showToast={showToast}
     />);
}
  return (
    <div className="flex items-center justify-center h-[80vh] w-screen p-4 sm:p-6 lg:p-8">
      <div className="bg-white border border-input-border shadow-2xl rounded-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in duration-300">
        {/* Header Section */}
        <div className="p-6 sm:p-8 border-b border-white/5 bg-gradient-to-b from-white/5 to-transparent">
          <h1 className="text-xl sm:text-2xl font-poppins text-primary tracking-wide uppercase">
            When & Where
          </h1>
        </div>

        <form ref={form} className="p-6 sm:p-8 space-y-5 sm:space-y-6">
          {/* Date Grid: Day, Month, Year */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <label className="block space-y-1.5">
              <p className="text-black text-[9px] sm:text-[10px] font-bold uppercase tracking-widest px-1">Day</p>
              <div className="relative">
                <select name="day" className="w-full bg-input-background border border-input-border rounded-lg h-11 px-4 text-black text-sm appearance-none focus:border-primary focus:ring-1 focus:ring-primary transition-all focus:outline-none">
                  <option value=""></option>
                  {[...Array(31)].map((_, i) => (
                    <option key={i+1} value={i+1} className="bg-input-background">{i+1}</option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-primary">
                  <span className="material-symbols-outlined text-sm">expand_more</span>
                </div>
              </div>
            </label>

            <label className="block space-y-1.5 col-span-1">
              <p className="text-primary text-[9px] sm:text-[10px] font-bold uppercase tracking-widest px-1">Month</p>
              <div className="relative">
                <select name="month" className="w-full bg-input-background border border-input-border rounded-lg h-11 px-4 text-black text-sm appearance-none transition-all focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none">
                  {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].map(m => (
                    <option key={m} value={m} className="bg-input-background">{m}</option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-primary">
                  <span className="material-symbols-outlined text-sm">expand_more</span>
                </div>
              </div>
            </label>

            <label className="block space-y-1.5 col-span-2 sm:col-span-1">
              <p className="text-primary text-[9px] sm:text-[10px] font-bold uppercase tracking-widest px-1">Year</p>
              <input 
                className="w-full bg-input-background border border-input-border rounded-lg h-11 px-4 text-black text-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all placeholder:text-input-placeholder" 
                type="text" 
                name="year" 
                placeholder="2024"
              />
            </label>
          </div>

          {/* Time & Location */}
          <div className="space-y-5">
            <label className="block space-y-1.5">
              <p className="text-primary text-[9px] sm:text-[10px] font-bold uppercase tracking-widest px-1">Start Time</p>
              <input 
                className="w-full bg-input-background border border-input-border rounded-lg h-11 px-4 text-black text-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all placeholder:text-input-placeholder" 
                type="time" 
                name="time"
              />
            </label>

            <label className="block space-y-1.5">
              <p className="text-primary text-[9px] sm:text-[10px] font-bold uppercase tracking-widest px-1">Location / Venue</p>
              <input 
                className="w-full bg-input-background border border-input-border rounded-lg h-11 px-4 text-black text-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all placeholder:text-input-placeholder" 
                type="text" 
                name="location"
                placeholder="e.g. The Sky Lounge, Coventry"
              />
            </label>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col-reverse sm:flex-row items-center justify-end gap-3 sm:gap-4 pt-2 sm:pt-4">
            <button 
              className="w-full sm:w-auto text-gray-500 hover:text-primary text-[10px] font-bold uppercase tracking-[2px] py-2 transition-colors" 
              onClick={(e) => { e.preventDefault(); close(); }}
              type="button"
            >
              Discard
            </button>

            <button 
              type="submit" 
              className="w-full sm:w-auto bg-primary text-white px-8 py-3 rounded-lg text-xs font-bold uppercase tracking-[2px] hover:bg-brand-hover shadow-[0_0_20px_rgba(46, 7, 15, 0.15)] transition-all active:scale-95" 
              onClick={handleProceed}
            >
              Save & Proceed
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}