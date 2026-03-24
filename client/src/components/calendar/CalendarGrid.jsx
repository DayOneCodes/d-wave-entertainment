
export default function CalendarGrid () {
  return (
      <div className={`${viewMode === "calendar" ? "block" : "hidden"} flex-1 w-full bg-surface-dark rounded-2xl border border-border-dark overflow-hidden shadow-xl`}>

      {/* <!-- Calendar Header (Month Navigation) --> */}
          <div className="flex items-center justify-between p-6 border-b border-border-dark bg-[#281828]">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">event</span>
              {`${thisMonth} ${ thisYear}`}
              </h3>
          </div>

      {/* <!-- Days of Week Header --> */}
          <div className="grid grid-cols-7 border-b border-border-dark bg-[#281828]">
              <div className="py-3 text-center text-xs font-bold uppercase tracking-widest text-white">Mon</div>
              <div className="py-3 text-center text-xs font-bold uppercase tracking-widest text-white">Tue</div>
              <div className="py-3 text-center text-xs font-bold uppercase tracking-widest text-white">Wed</div>
              <div className="py-3 text-center text-xs font-bold uppercase tracking-widest text-white">Thu</div>
              <div className="py-3 text-center text-xs font-bold uppercase tracking-widest text-white">Fri</div>
              <div className="py-3 text-center text-xs font-bold uppercase tracking-widest text-text-muted text-blue-500">Sat</div>
              <div className="py-3 text-center text-xs font-bold uppercase tracking-widest text-text-muted text-blue-500">Sun</div>
          </div>

      {/* <!-- Dates Grid --> */}
          <div className="grid grid-cols-7 auto-rows-fr bg-[#221022]">
              {
                !thisMonthEvents ? 
                <p>Loading...</p>:
                gridsFunction()
              }
          </div>
      </div>
  )
}