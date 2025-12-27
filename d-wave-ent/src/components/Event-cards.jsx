function Eventcard ({ month, date, location, category, title, imageUrl, ticketUrl }) {
  return (
      <div className="group bg-white dark:bg-[#2a1d30] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-white/5" onClick={
        () => {window.open(`https://${ticketUrl}`, '_blank')}
      }>
          <div className="relative h-64 overflow-hidden">
              <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/80 backdrop-blur text-center p-2 rounded-lg z-10 shadow-lg min-w-[60px]">
                  <span className="block text-xs font-bold uppercase text-slate-500 dark:text-gray-400">{month}</span>
                  <span className="block text-2xl font-black text-slate-900 dark:text-white">{date}</span>
              </div>
              <div className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700" data-alt="Neon lights at a club party with dj" style={{
              backgroundImage: `url("${imageUrl}")`
              }}>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60"></div>
              </div>
          <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                  <span className="text-primary text-xs font-bold uppercase tracking-wider bg-primary/10 px-2 py-1 rounded">{category}</span>
                  <span className="text-slate-500 dark:text-gray-400 text-sm flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">location_on</span>{location}
                  </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-primary transition-colors">{title}</h3>
              <button className="w-full py-3 rounded-lg border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-bold hover:bg-primary hover:text-white hover:border-primary transition-colors flex justify-center items-center gap-2">
                  Get Tickets
              </button>
          </div>
      </div>
  )
}

export default Eventcard;