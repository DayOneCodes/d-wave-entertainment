const TicketsCard = ({event, category, onViewQR,  }) => {
  return (
          <div class="glass-card rounded-2xl overflow-hidden flex flex-col sm:flex-row group border border-primary/30 bg-background-light">
          <div class="sm:w-40 h-48 sm:h-auto overflow-hidden">
          <img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Vibrant night club scene with neon lights" src={event.imageUrl}/>
          </div>
          <div class="p-6 flex-1 flex flex-col justify-between">
          <div>
          <div class="flex justify-between items-start">
          <h3 class="text-xl font-bold mb-1">{event.title}</h3>
          <span class="bg-primary/10 text-primary text-[10px] font-bold px-2 py-1 rounded">{category}</span>
          </div>
          <p class="text-slate-400 text-sm flex items-center gap-1"><span class="material-symbols-outlined text-sm">calendar_today</span> Oct 12, 2024 • 21:00</p>
          <p class="text-slate-400 text-sm flex items-center gap-1 mt-1"><span class="material-symbols-outlined text-sm">location_on</span> {event.location}</p>
          </div>
          <div class="flex gap-2 mt-4">
          <button class="flex-1 bg-primary text-white font-bold text-xs py-2.5 rounded uppercase tracking-widest flex items-center justify-center gap-2" onClick={
            onViewQR
          }>
          <span class="material-symbols-outlined text-base">qr_code_2</span> View QR
                                          </button>
          <button class="flex-1 border border-primary/20 text-primary font-bold text-xs py-2.5 rounded uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-primary/10 transition-colors">
          <span class="material-symbols-outlined text-base">download</span> PDF
                                          </button>
          </div>
          </div>
          </div>
  )
}

export default TicketsCard;