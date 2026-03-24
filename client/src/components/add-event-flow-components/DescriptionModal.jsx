import { useRef } from "react";
import LogisticsModal from "./LogisticsModal.jsx";
import { EVENT_CATEGORIES } from "../../config/env.js";


export default function DescriptionModal ({close, next, callback, admin, photo, showToast}) {
const form = useRef()

const handleProceed = (e) => {
 e.preventDefault();

 const eventDescription = {
  title : form.current.title.value,
  summary : form.current.summary.value,
  category: form.current.category.value,
  description : form.current.description.value,
  }


  callback.addDescription(eventDescription);
  next(<LogisticsModal
     close={close} 
     next={next} 
     callback={callback} 
     admin={admin}
     photo={photo}
     showToast={showToast}/>);
}

const handleCancel = (e) => {
  e.preventDefault();
  close()
}

  return (
   <div className="flex items-center justify-center h-[80vh] w-screen p-4 sm:p-6 lg:p-8">
  <div className="bg-white border border-input-border shadow-2xl rounded-2xl md:h-[95vh] w-full max-w-lg overflow-hidden animate-in fade-in zoom-in duration-300">
    {/* Header Section */}
    <div className="p-4 sm:p-6 border-b border-white/5 bg-gradient-to-b from-white/5 to-transparent">
      <h1 className="text-xl sm:text-2xl font-poppins text-primary uppercase">
        Describe Your Event
      </h1>
    </div>

    <form ref={form} className="p-6 sm:p-8 space-y-5 sm:space-y-6">
      {/* Title Input */}
      <label className="block space-y-1.5 sm:space-y-2">
        <p className="text-primary text-[9px] sm:text-[10px] font-bold uppercase tracking-widest px-1">Event Title</p>
        <input 
          className="w-full bg-input-background border border-input-border rounded-lg h-11 sm:h-12 px-4 text-black text-sm sm:text-base focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-input-placeholder" 
          type="text" 
          name="title"
          placeholder="e.g. THE GIST: Summer Solstice"
        />
      </label>

      {/* Summary Input */}
      <label className="block space-y-1.5 sm:space-y-2">
        <p className="text-primary text-[9px] sm:text-[10px] font-bold uppercase tracking-widest px-1">Short Summary</p>
        <input 
          className="w-full bg-input-background border border-input-border rounded-lg h-11 sm:h-12 px-4 text-black text-sm sm:text-base focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-input-placeholder" 
          type="text" 
          name="summary"
          placeholder="Catchy one-liner"
        />
      </label>

      {/* Category Dropdown */}
      <label className="block space-y-1.5 sm:space-y-2">
        <p className="text-primary text-[9px] sm:text-[10px] font-bold uppercase tracking-widest px-1">Category</p>
        <div className="relative">
          <select 
            name="category"
            className="w-full bg-input-background border border-input-border rounded-lg h-11 sm:h-12 px-4 text-black text-sm sm:text-base focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary appearance-none cursor-pointer"
          >
            {
              Object.values(EVENT_CATEGORIES).map((cat) => (
                <option key={cat} className="bg-input-background">{cat}</option>
              ))
            }
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-primary">
            <span className="material-symbols-outlined text-sm">expand_more</span>
          </div>
        </div>
      </label>

      {/* Detailed Description */}
      <label className="block space-y-1.5 sm:space-y-2">
        <p className="text-primary text-[9px] sm:text-[10px] font-bold uppercase tracking-widest px-1">Full Description</p>
        <textarea 
          className="w-full bg-input-background border border-input-background rounded-lg p-3 sm:p-4 text-black text-sm sm:text-base focus:outline-none focus:border-primary transition-all min-h-[80px] sm:min-h-[100px] resize-none focus:ring-1 focus:ring-primary placeholder:text-input-placeholder" 
          name="description"
          placeholder="Describe the atmosphere..."
        />
      </label>

      {/* Action Buttons */}
      <div className="flex flex-col-reverse sm:flex-row items-center justify-end gap-3 sm:gap-4 pt-2 sm:pt-4">
        <button 
          className="w-full sm:w-auto text-gray-500 hover:text-primary text-[10px] font-bold uppercase tracking-[2px] py-2 transition-colors" 
          onClick={handleCancel}
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