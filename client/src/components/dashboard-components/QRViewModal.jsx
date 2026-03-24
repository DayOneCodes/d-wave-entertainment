const QRViewModal = ({onClose, }) => {

  return (
    <div class="w-full max-w-md rounded-xl shadow-2xl relative border border-primary/30 bg-white">

    <button class="absolute top-4 right-4 text-primary  transition-colors">
    <span class="material-symbols-outlined" onClick={
      onClose
    }>close</span>
    </button>

    <div class="p-8 md:p-5 flex flex-col items-center">

    <div class="flex flex-col items-center gap-2 mb-8">
    <div class="text-primary mb-1">
    <img src="../../../public/logo.ico" />
    </div>
    <h2 class="text-primary text-xs font-bold tracking-[0.4em] uppercase">D-Wave Entertainment</h2>
    </div>

    <div class="relative group p-4 bg-white rounded-xl mb-8 shadow-md shadow-[0_0_30px_rgba(46, 7, 15, 0.15)]">
    <div class="w-56 h-56 bg-white flex items-center justify-center relative">

    <div class="w-full h-full opacity-90" data-alt="Modern QR code for event entry" style={{
      backgroundImage: "radial-gradient(circle at 2px 2px, #181711 1px, transparent 0)",
      backgroundSize: "8px 8px"
      }}></div>
    <div class="absolute inset-0 border-[12px] border-white"></div>

    <div class="absolute inset-0 flex items-center justify-center">
    <div class="bg-white p-2 rounded-lg shadow-sm">
    <span class="material-symbols-outlined text-background-dark text-2xl font-bold">diamond</span>
    </div>
    </div>
    </div>

    <div class="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-primary rounded-tl-lg"></div>
    <div class="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-primary rounded-tr-lg"></div>
    <div class="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-primary rounded-bl-lg"></div>
    <div class="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-primary rounded-br-lg"></div>
    </div>

    <div class="w-full text-center mb-8 space-y-2">
    <h1 class="text-2xl font-bold tracking-tight text-primary">Neon Pulse: Phase 4</h1>
    <div class="flex items-center justify-center gap-2 text-primary/80 text-sm">
    <span class="material-symbols-outlined text-base">calendar_today</span>
    <span>Oct 12, 2024 • 21:00</span>
    </div>
    <div class="flex items-center justify-center gap-2 text-slate-400 text-sm">
    <span class="material-symbols-outlined text-base">location_on</span>
    <span data-location="The Foundry, Downtown">The Foundry, Downtown</span>
    </div>
    </div>

    <div class="w-full flex items-center gap-4 mb-2">
    <div class="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
    <div class="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Entry Pass</div>
    <div class="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
    </div>

    <div class="w-full bg-white/5 rounded-lg p-4 flex items-center justify-between border border-white/10">
    <div class="flex items-center gap-3">
    <div class="size-10 rounded-full bg-primary/20 flex items-center justify-center text-primary overflow-hidden">
    <img class="w-full h-full object-cover" data-alt="Alex Rivers profile picture" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmHzbFUGPqWXOGhsWucenP11xwdbjde-dZ-WQd_reyBXBKrjBcsRVJ1dFjkcVT22vHC9CDt3KUKMpw5SjvkHL7Qtk9ePaz1uPz4HVhjvNU6ntGCfLFd0Q3geamcMCH5kE-i1H86ib1hMFSHLof3PlQ6u-txCVQ8IWVaClGfJIRTdSQ5hFSPQJhExeJbBCBtw78eZHv0sSm1w8bx8_mbpCc258pjMJ-RfbjvFb82d3YaPo7jNYGIu1BRTFA0UNSOgjqUrl60YSGdxY"/>
    </div>
    <div class="flex flex-col">
    <span class="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Guest</span>
    <span class="text-black font-medium">Alex Rivers</span>
    </div>
    </div>
    <div class="text-right">
    <span class="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Tier</span>
    <p class="text-primary font-bold">VIP ACCESS</p>
    </div>
    </div>

    </div>
    </div>
  )
}


export default QRViewModal;