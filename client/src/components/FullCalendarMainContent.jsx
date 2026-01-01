import { useEffect, useState } from "react";


function FullCalendarMainContent() {
  const todayDate = new Date();
  const daysOfTheWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const lesMoins = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const ceMoinIndex = todayDate.getMonth();


  const [currentDate, setCurrentDate] = useState(0);
  const [daysInMonth, setDaysInMonth] = useState(0);
  const [firstDay, setFirstDay] = useState(0);
  const [lastMonthLastDay, setLastMonthLastDay] = useState(0);
  const [thisMonth, setThisMonth] = useState(lesMoins[ceMoinIndex]);
  const [thisYear, setThisYear] = useState(todayDate.getFullYear())

  useEffect (() => {
    const todayDayNumber = todayDate.getDate();
    const todayWeekDay = daysOfTheWeek[todayDate.getDay()]
    const lastDayOfLastMonth = new Date (
      todayDate.getFullYear(),
      todayDate.getMonth(), 
      0
    ).getDate();
    
    const daysInCurrentMonth = new Date (
      todayDate.getFullYear(),
      todayDate.getMonth() + 1, 
      0
    ).getDate();

    const firstDayOfCurrentMonth = new Date (
      todayDate.getFullYear(),
      todayDate.getMonth(),
      1
    ).getDay()

    setCurrentDate(todayDayNumber);
    setDaysInMonth(daysInCurrentMonth);
    setFirstDay(firstDayOfCurrentMonth);
    setLastMonthLastDay(lastDayOfLastMonth);


    console.log(todayWeekDay)
  }, [])

  useEffect (() => {
    console.log(currentDate, daysInMonth, firstDay, lastMonthLastDay);
  }, [currentDate, daysInMonth, firstDay, lastMonthLastDay]);




  function gridsFunction () {
      const grids = [];
      const totalGrids = 35;
      const numberOfDaysFromLastMonth = firstDay ? firstDay - 1: 6;
      const numberOfDaysFromNextMonth = totalGrids - numberOfDaysFromLastMonth - daysInMonth;
      const calendarLastMonthDays = [];

      const CalendarlastMonthStart = lastMonthLastDay - numberOfDaysFromLastMonth + 1;

      for (let x = CalendarlastMonthStart; x <= lastMonthLastDay; x++){
        calendarLastMonthDays.push(x)
      }

      for (let y = 1; y <= totalGrids; y++) {
        if (y <= numberOfDaysFromLastMonth) {
          grids.push(
              <div className="min-h-[120px] p-2 border-b border-r border-border-dark bg-white/[0.02]">
              <span className="text-white font-medium text-sm">{calendarLastMonthDays[y - 1]}</span>
              </div>   
          )
        }
        else if (y > numberOfDaysFromLastMonth){
          grids.push(
              y - numberOfDaysFromLastMonth > daysInMonth ?
              <div className="min-h-[120px] p-2 border-b border-r border-border-dark bg-white/[0.02]">
              <span className="text-white font-medium text-sm">{totalGrids - (y - numberOfDaysFromNextMonth)}</span>
              </div>
              :
              <div className="min-h-[120px] p-2 border-b border-r border-border-dark bg-white/[0.02]">
              <span className="text-white font-medium text-sm">{y-numberOfDaysFromLastMonth}</span>
              </div> 
          )
        }
  }

      return (
        grids
      )
    }

   async function fetchEvents () {
    const res = await fetch ();
    const data = await res.json(); 
  }



  return (
    <>
    <div className="layout-content-container max-w-[1280px] w-full px-4 sm:px-10 py-10 flex flex-col gap-8">
<div className="flex flex-col xl:flex-row gap-6 justify-between items-start xl:items-end">

<div className="flex flex-col gap-2">
<h2 className="text-primary text-4xl font-black leading-tight tracking-tight">THE SCHEDULE</h2>
<p className="text-text-muted text-lg">Explore upcoming parties and exclusive events.</p>
</div>
{/* <!-- Filters & Controls --> */}
<div className="flex flex-col sm:flex-row gap-4 w-full xl:w-auto">
{/* <!-- Filters --> */}
<div className="flex flex-1 flex-col md:flex-md  sm:flex-none gap-2 bg-surface-dark p-1.5 rounded-xl border border-border-dark">
<button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-transparent hover:bg-white/5 text-primary text-sm font-medium transition-colors">
<span className="material-symbols-outlined text-lg text-primary">filter_list</span>
                                Filter
                            </button>
<div className="w-px bg-border-dark my-1"></div>
<div className="relative group">
<select className="appearance-none bg-transparent text-primary text-sm font-medium px-4 py-2 pr-8 rounded-lg cursor-pointer focus:outline-none focus:bg-white/5">
<option>All Locations</option>
<option>Main Stage</option>
<option>Rooftop Lounge</option>
<option>Underground</option>
</select>
<span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none text-sm">expand_more</span>
</div>
<div className="w-px bg-border-dark my-1"></div>
<div className="relative group">
<select className="appearance-none bg-transparent text-primary text-sm font-medium px-4 py-2 pr-8 rounded-lg cursor-pointer focus:outline-none focus:bg-white/5">
<option>All Types</option>
<option>DJ Set</option>
<option>Live Band</option>
<option>Private</option>
</select>
<span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none text-sm">expand_more</span>
</div>
</div>
{/* <!-- View Switcher --> */}
<div className="flex h-12 items-center rounded-xl bg-surface-dark p-1 border border-border-dark">
<label className="flex cursor-pointer h-full items-center justify-center rounded-lg px-4 bg-primary/10 text-primary shadow-sm transition-all">
<span className="material-symbols-outlined mr-2 text-lg">calendar_month</span>
<span className="text-sm font-bold">Calendar</span>
<input className="hidden" name="view" type="radio" value="Calendar"/>
</label>
<label className="flex cursor-pointer h-full items-center justify-center rounded-lg px-4 hover:bg-white/5 text-text-muted transition-all">
<span className="material-symbols-outlined mr-2 text-lg">list</span>
<span className="text-sm font-medium">List</span>
<input className="hidden" name="view" type="radio" value="List"/>
</label>
</div>
</div>
</div>
{/* <!-- Calendar Content Area --> */}
<div className="flex flex-col lg:flex-row gap-8 items-start">
{/* <!-- Calendar Grid --> */}
<div className="flex-1 w-full bg-surface-dark rounded-2xl border border-border-dark overflow-hidden shadow-xl">
{/* <!-- Calendar Header (Month Navigation) --> */}
<div className="flex items-center justify-between p-6 border-b border-border-dark bg-[#281828]">
<h3 className="text-xl font-bold text-white flex items-center gap-2">
<span className="material-symbols-outlined text-primary">event</span>
                                {`${thisMonth} ${ thisYear}`}
                            </h3>
<div className="flex gap-2">
<button className="size-8 flex items-center justify-center rounded-lg hover:bg-white/10 text-white transition-colors">
<span className="material-symbols-outlined">chevron_left</span>
</button>
<button className="px-3 py-1 rounded-lg text-xs font-bold bg-primary text-white">
                                    Today
                                </button>
<button className="size-8 flex items-center justify-center rounded-lg hover:bg-white/10 text-white transition-colors">
<span className="material-symbols-outlined">chevron_right</span>
</button>
</div>
</div>
{/* <!-- Days of Week Header --> */}
<div className="grid grid-cols-7 border-b border-border-dark bg-[#281828]">
<div className="py-3 text-center text-xs font-bold uppercase tracking-widest text-white">Mon</div>
<div className="py-3 text-center text-xs font-bold uppercase tracking-widest text-white">Tue</div>
<div className="py-3 text-center text-xs font-bold uppercase tracking-widest text-white">Wed</div>
<div className="py-3 text-center text-xs font-bold uppercase tracking-widest text-white">Thu</div>
<div className="py-3 text-center text-xs font-bold uppercase tracking-widest text-white">Fri</div>
<div className="py-3 text-center text-xs font-bold uppercase tracking-widest text-text-muted text-primary">Sat</div>
<div className="py-3 text-center text-xs font-bold uppercase tracking-widest text-text-muted text-primary">Sun</div>
</div>
{/* <!-- Dates Grid --> */}
<div className="grid grid-cols-7 auto-rows-fr bg-[#221022]">
  
  {
    gridsFunction()
  }
{/* <!-- Week 1 -->
<!-- Past Month Days --> */}
{/* <div className="min-h-[120px] p-2 border-b border-r border-border-dark bg-white/[0.02]">
<span className="text-white font-medium text-sm">25</span>
</div>
<div className="min-h-[120px] p-2 border-b border-r border-border-dark bg-white/[0.02]">
<span className="text-text-muted/30 font-medium text-sm">26</span>
</div>
<div className="min-h-[120px] p-2 border-b border-r border-border-dark bg-white/[0.02]">
<span className="text-text-muted/30 font-medium text-sm">27</span>
</div>
<div className="min-h-[120px] p-2 border-b border-r border-border-dark bg-white/[0.02]">
<span className="text-text-muted/30 font-medium text-sm">28</span>
</div>
<div className="min-h-[120px] p-2 border-b border-r border-border-dark bg-white/[0.02]">
<span className="text-text-muted/30 font-medium text-sm">29</span>
</div>
<div className="min-h-[120px] p-2 border-b border-r border-border-dark bg-white/[0.02]">
<span className="text-text-muted/30 font-medium text-sm">30</span>
</div>

<div className="min-h-[120px] p-2 border-b border-border-dark hover:bg-white/5 transition-colors group relative">
<div className="flex justify-between items-start">
<span className="text-text-muted font-medium text-sm">01</span>
</div>
</div>

<div className="min-h-[120px] p-2 border-b border-r border-border-dark hover:bg-white/5 transition-colors">
<span className="text-text-muted font-medium text-sm">02</span>
</div>
<div className="min-h-[120px] p-2 border-b border-r border-border-dark hover:bg-white/5 transition-colors">
<span className="text-text-muted font-medium text-sm">03</span>
</div>
<div className="min-h-[120px] p-2 border-b border-r border-border-dark hover:bg-white/5 transition-colors group">
<span className="text-text-muted font-medium text-sm">04</span>

<div className="mt-2 p-1.5 rounded bg-blue-900/40 border border-blue-500/30 cursor-pointer hover:bg-blue-900/60 transition-colors">
<div className="flex items-center gap-1 mb-0.5">
<div className="size-1.5 rounded-full bg-blue-400"></div>
<span className="text-[10px] text-blue-200 font-bold">08:00 PM</span>
</div>
<p className="text-xs text-white font-medium truncate">Jazz Lounge</p>
</div>
</div>
<div className="min-h-[120px] p-2 border-b border-r border-border-dark hover:bg-white/5 transition-colors">
<span className="text-text-muted font-medium text-sm">05</span>
</div>
<div className="min-h-[120px] p-2 border-b border-r border-border-dark hover:bg-white/5 transition-colors group">
<span className="text-text-muted font-medium text-sm">06</span>

<div className="mt-2 p-1.5 rounded bg-primary/20 border border-primary/40 cursor-pointer hover:bg-primary/30 transition-colors shadow-[0_0_10px_rgba(244,37,244,0.15)]">
<div className="flex items-center gap-1 mb-0.5">
<div className="size-1.5 rounded-full bg-primary animate-pulse"></div>
<span className="text-[10px] text-primary font-bold">10:00 PM</span>
</div>
<p className="text-xs text-white font-bold truncate">Neon Nights</p>
</div>
</div>
<div className="min-h-[120px] p-2 border-b border-border-dark hover:bg-white/5 transition-colors">
<span className="text-text-muted font-medium text-sm">07</span>
</div>

<div className="min-h-[120px] p-2 border-b border-r border-border-dark hover:bg-white/5 transition-colors">
<span className="text-text-muted font-medium text-sm">08</span>
</div>
<div className="min-h-[120px] p-2 border-b border-r border-border-dark hover:bg-white/5 transition-colors">
<span className="text-text-muted font-medium text-sm">09</span>
</div>
<div className="min-h-[120px] p-2 border-b border-r border-border-dark hover:bg-white/5 transition-colors">
<span className="text-text-muted font-medium text-sm">10</span>
</div>

<div className="min-h-[120px] p-2 border-b border-r border-border-dark bg-white/5 shadow-inner relative ring-1 ring-inset ring-primary/30">
<span className="flex items-center justify-center size-7 rounded-full bg-primary text-white font-bold text-sm shadow-[0_0_8px_rgba(244,37,244,0.6)]">11</span>
</div>
<div className="min-h-[120px] p-2 border-b border-r border-border-dark hover:bg-white/5 transition-colors group">
<span className="text-text-muted font-medium text-sm">12</span>

<div className="mt-2 p-1.5 rounded bg-purple-900/40 border border-purple-500/30 cursor-pointer hover:bg-purple-900/60 transition-colors">
<div className="flex items-center gap-1 mb-0.5">
<div className="size-1.5 rounded-full bg-purple-400"></div>
<span className="text-[10px] text-purple-200 font-bold">09:00 PM</span>
</div>
<p className="text-xs text-white font-medium truncate">Private Gala</p>
</div>
</div>
<div className="min-h-[120px] p-2 border-b border-r border-border-dark hover:bg-white/5 transition-colors group">
<span className="text-text-muted font-medium text-sm">13</span>

<div className="mt-2 flex flex-col gap-1">
<div className="p-1 rounded bg-primary/20 border border-primary/40 cursor-pointer hover:bg-primary/30">
<div className="flex items-center gap-1">
<div className="size-1.5 rounded-full bg-primary"></div>
<p className="text-[10px] text-white font-bold truncate">Techno Bunker</p>
</div>
</div>
<div className="p-1 rounded bg-surface-dark border border-border-dark cursor-pointer hover:bg-white/10">
<div className="flex items-center gap-1">
<div className="size-1.5 rounded-full bg-gray-400"></div>
<p className="text-[10px] text-gray-300 font-medium truncate">+2 more</p>
</div>
</div>
</div>
</div>
<div className="min-h-[120px] p-2 border-b border-border-dark hover:bg-white/5 transition-colors">
<span className="text-text-muted font-medium text-sm">14</span>
</div>

<div className="min-h-[120px] p-2 border-b border-r border-border-dark hover:bg-white/5 transition-colors">
<span className="text-text-muted font-medium text-sm">15</span>
</div>
<div className="min-h-[120px] p-2 border-b border-r border-border-dark hover:bg-white/5 transition-colors">
<span className="text-text-muted font-medium text-sm">16</span>
</div>
<div className="min-h-[120px] p-2 border-b border-r border-border-dark hover:bg-white/5 transition-colors">
<span className="text-text-muted font-medium text-sm">17</span>
</div>
<div className="min-h-[120px] p-2 border-b border-r border-border-dark hover:bg-white/5 transition-colors">
<span className="text-text-muted font-medium text-sm">18</span>
</div>
<div className="min-h-[120px] p-2 border-b border-r border-border-dark hover:bg-white/5 transition-colors">
<span className="text-text-muted font-medium text-sm">19</span>
</div>
<div className="min-h-[120px] p-2 border-b border-r border-border-dark hover:bg-white/5 transition-colors group">
<span className="text-text-muted font-medium text-sm">20</span>
<div className="mt-2 p-1.5 rounded bg-primary/20 border border-primary/40 cursor-pointer hover:bg-primary/30 transition-colors shadow-[0_0_10px_rgba(244,37,244,0.15)]">
<div className="flex items-center gap-1 mb-0.5">
<div className="size-1.5 rounded-full bg-primary"></div>
<span className="text-[10px] text-primary font-bold">11:00 PM</span>
</div>
<p className="text-xs text-white font-bold truncate">Cyber Goth Night</p>
</div>
</div>
<div className="min-h-[120px] p-2 border-b border-border-dark hover:bg-white/5 transition-colors">
<span className="text-text-muted font-medium text-sm">21</span>
</div>

<div className="min-h-[120px] p-2 border-r border-border-dark hover:bg-white/5 transition-colors">
<span className="text-text-muted font-medium text-sm">22</span>
</div>
<div className="min-h-[120px] p-2 border-r border-border-dark hover:bg-white/5 transition-colors">
<span className="text-text-muted font-medium text-sm">23</span>
</div>
<div className="min-h-[120px] p-2 border-r border-border-dark hover:bg-white/5 transition-colors">
<span className="text-text-muted font-medium text-sm">25</span>
</div>
<div className="min-h-[120px] p-2 border-r border-border-dark hover:bg-white/5 transition-colors">
<span className="text-text-muted font-medium text-sm">26</span>
</div>
<div className="min-h-[120px] p-2 border-r border-border-dark hover:bg-white/5 transition-colors">
<span className="text-text-muted font-medium text-sm">27</span>
</div>
<div className="min-h-[120px] p-2 border-border-dark hover:bg-white/5 transition-colors">
<span className="text-text-muted font-medium text-sm">28</span>
</div> */}
</div>
</div>
{/* <!-- Sidebar (Trending/Artists) --> */}
<aside className="w-full lg:w-80 flex flex-col gap-6 shrink-0">
{/* <!-- Artist Spotlight Card --> */}
<div className="bg-surface-dark rounded-2xl border border-border-dark p-5 shadow-lg">
<div className="flex items-center justify-between mb-4">
<h3 className="text-primary text-lg font-bold">Featured Artists</h3>
<a className="text-primary text-xs font-bold hover:underline" href="#">View All</a>
</div>
<div className="flex flex-col gap-4">
{/* <!-- Artist 1 --> */}
<div className="flex items-center gap-3 group cursor-pointer">
<img alt="DJ Void portrait" className="size-12 rounded-full object-cover border-2 border-transparent group-hover:border-primary transition-all" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDraeXWRuGo3s_QLTJyoqeMA-u25TQssLhxPzMP2p-fsGZOVf_yPq-PVJRiGzRCdf6axI8SQw59Eyru7uo241B8YoKADg7x38vyoGZOTPDxu68EWQ2adoD0Qe6UMfuRLFBTxWLUDyQC2ZpZuVjlBQ9rp0WS9H--MzEW9ThK3op6SNT4sR7ycS38vR6GJkXgFRRCdhDAhG1yaKdDXvlQJ_8C3xrVMkQzvBi8LBqMIFf5C3732bMrsEBy1aIHyDlYoiamKGBlf_xxGbE"/>
<div>
<p className="text-black text-sm font-bold group-hover:text-primary transition-colors">Artist 1</p>
<p className="text-text-muted text-xs">Afrobeats</p>
</div>
</div>
{/* <!-- Artist 2 --> */}
<div className="flex items-center gap-3 group cursor-pointer">
<img alt="Luna Eclipse portrait" className="size-12 rounded-full object-cover border-2 border-transparent group-hover:border-primary transition-all" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAot_RO2zmSb5cNiTdKyLwMsbL43VdJd7p1F11M4n7x5wnMwk3REVFYo0x9piSfOIdtH4JmSYUuvnuEiVyPT7rA2DTAIhnUfODTcDLtJWIfVOCP0JV77g6Oot2a_6wfSEpP0aQj3ztuT2epX7CKwbGasJqG-mnNWb9bJqHzbC26TOncHyfAGnBzVUVXtT5XGI_AmrNccNN8u3MnabkKP7hlEYger0_w1uY8STgo0sRQGIE3TvIR-RNTFdkL0dFgQyiwc_ZfUrNlPUI"/>
<div>
<p className="text-black text-sm font-bold group-hover:text-primary transition-colors">Artist 2</p>
<p className="text-text-muted text-xs">Pop</p>
</div>
</div>
{/* <!-- Artist 3 --> */}
<div className="flex items-center gap-3 group cursor-pointer">
<img alt="The Midnight portrait" className="size-12 rounded-full object-cover border-2 border-transparent group-hover:border-primary transition-all" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCY4bDsq5v3mhttH1t_2QRRQ93KZ7s9Fb02pFE5dKP9iDLNXq917LM7kSC9osghaCDPkxoVX1YJ44aei0SYZ3nkokz09RkAuKP5F_na9AXDEx8Z-C61zcTLZDh82hrl-dJUJdPs_44sgD7hsw5z3qnFjkAAP2GkQLC2cgCmCa5CqWVmFbjXSliy_eJl6JNKWZq_dWfC5R_AdHm1r55nF3F1x98vHt1S0s3_-eKdF9zePSbx09EFZJFj8cHWZu4yidKPIr-XdjJRGzs"/>
<div>
<p className="text-black text-sm font-bold group-hover:text-primary transition-colors">Artist 3</p>
<p className="text-text-muted text-xs">Live Band</p>
</div>
</div>
</div>
</div>
{/* <!-- Quick List Upcoming --> */}
<div className="bg-surface-dark rounded-2xl border border-border-dark p-5 shadow-lg">
<h3 className="text-primary text-lg font-bold mb-4">Don't Miss Out</h3>
<div className="flex flex-col gap-3">
<a className="block p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-transparent hover:border-primary/30 transition-all group" href="#">
<div className="flex justify-between items-start mb-1">
<span className="text-primary text-xs font-bold uppercase">Tomorrow</span>
<span className="text-text-muted text-[10px]">Oct 12</span>
</div>
<p className="text-black font-bold text-sm leading-snug group-hover:text-primary transition-colors">Underground Bass Challenge</p>
<div className="flex items-center gap-1 mt-2 text-text-muted text-xs">
<span className="material-symbols-outlined text-sm">location_on</span>
                                        The Basement
                                    </div>
</a>
<a className="block p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-transparent hover:border-primary/30 transition-all group" href="#">
<div className="flex justify-between items-start mb-1">
<span className="text-green-400 text-xs font-bold uppercase">Selling Fast</span>
<span className="text-text-muted text-[10px]">Oct 20</span>
</div>
<p className="text-black font-bold text-sm leading-snug group-hover:text-primary transition-colors">Cyber Goth Night</p>
<div className="flex items-center gap-1 mt-2 text-text-muted text-xs">
<span className="material-symbols-outlined text-sm">location_on</span>
                                        Sector 7
                                    </div>
</a>
</div>
</div>
</aside>
</div>
</div>
    </>
  )
}


export default FullCalendarMainContent;