import { useEffect, useState } from "react";
import { useChronologicalEvents } from "../contexts/EventChronologicalContext";
import DiscoverOurVision from "./DiscoverOurVision";
import ArtistSpotlight from "./ArtistSpotlight";

function FullCalendarMainContent() {
  const { eventsChronological, thisMonthEvent } = useChronologicalEvents();

  const todayDate = new Date();
  const daysOfTheWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const lesMoins = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const [ceMoinIndex, setCeMoinIndex] = useState(todayDate.getMonth());
  const [currentDate, setCurrentDate] = useState(0);
  const [daysInMonth, setDaysInMonth] = useState(0);
  const [firstDay, setFirstDay] = useState(0);
  const [lastMonthLastDay, setLastMonthLastDay] = useState(0);
  const [thisMonth, setThisMonth] = useState(lesMoins[ceMoinIndex]);
  const [thisYear, setThisYear] = useState(todayDate.getFullYear())
  const [viewMode, setViewMode] = useState("list");



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
          if (y-numberOfDaysFromLastMonth > daysInMonth) {
            grids.push(
                  <div className="min-h-[120px] p-2 border-b border-r border-border-dark bg-white/[0.02]">
                  <span className="text-white font-medium text-sm">{totalGrids - (y - numberOfDaysFromNextMonth)}</span>
                  </div>)
          }
          else {

            const dayNumber = y -numberOfDaysFromLastMonth
            const eventDay = thisMonthEvent.find((event)=>{
              return String(event.date) === String(dayNumber)
            });

            if (dayNumber === currentDate){
              grids.push(
                <div className="min-h-[120px] p-2 border-b border-r border-border-dark bg-white/5 shadow-inner relative ring-1 ring-inset ring-primary/30">
                <span className="flex items-center justify-center size-7 rounded-full bg-primary text-white font-bold text-sm shadow-[0_0_8px_blue]">{y-numberOfDaysFromLastMonth}</span>
                </div>
              )
            } else if (eventDay) {
                grids.push(
                  <div className="min-h-[120px] p-2 border-b border-r border-border-dark hover:bg-white/5 transition-colors group">
                  <span className="text-white font-medium text-sm">{dayNumber}</span>
                  <div className="mt-2 p-1.5 rounded bg-primary/20 border border-primary/40 cursor-pointer hover:bg-primary/30 transition-colors shadow-[0_0_10px_blue]">
                  <div className="flex items-center gap-1 mb-0.5">
                  <div className="size-1.5 rounded-full bg-primary"></div>
                  <span className="text-[10px] text-white font-bold">11:00 PM</span>
                  </div>
                  <p className="text-xs text-white font-bold truncate">{eventDay.location}</p>
                  </div>
                  </div>
                )
            }
            else {
              grids.push(
              <div className="min-h-[120px] p-2 border-b border-r border-border-dark bg-white/[0.02]">
              <span className="text-white font-medium text-sm">{y-numberOfDaysFromLastMonth}</span>
              </div>
              )
            }
          }
          
        }
  }

      return (
        grids
      )
    }


    function listViewFunction () {
      const listView = [];

      eventsChronological.forEach((event) => {

      listView.push(
        <div className="group flex flex-col md:flex-row gap-4 p-5 border-b border-border-dark hover:bg-white/5 transition-all relative overflow-hidden mb-4">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary opacity-100 transition-opacity"></div>
        <div className="flex flex-row md:flex-col items-center justify-center gap-2 md:gap-0 md:w-20 md:h-20 rounded-2xl border border-primary/50 bg-primary/10 transition-colors shrink-0 p-3 md:p-0">
        <span className="text-sm font-bold text-primary uppercase">{event.month}</span>
        <span className="text-2xl md:text-3xl font-black text-primary leading-none">{event.date}</span>
        </div>
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center">
        <div className="lg:col-span-2 flex flex-col gap-1.5">
        <div className="flex items-center gap-3 text-xs font-bold tracking-wide">
        <span className="text-primary">10:00 PM</span>
        <span className="w-1 h-1 rounded-full bg-border-dark"></span>
        <span className="text-text-muted uppercase">Featured</span>
        </div>
        <h4 className="text-primary text-xl font-bold transition-colors">{event.title}</h4>
        <div className="flex items-center gap-2 text-sm text-text-muted mt-0.5">
        <span className="material-symbols-outlined text-base">location_on</span>
                                {event.location}
                            </div>
        </div>
        <div className="flex md:flex-col lg:flex-row items-center justify-start md:justify-end gap-3 mt-2 md:mt-0">
        <a className="hidden md:flex items-center justify-center size-10 rounded-full border text-white hover:text-primary bg-primary hover:bg-primary/10 border-primary transition-all" href="#">
        <span className="material-symbols-outlined">arrow_outward</span>
        </a>
        <a className="md:hidden text-sm font-bold text-primary" href="#">View Details</a>
        </div>
        </div>
        </div>
      )
      });

      return (listView)
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
<option>All Categories</option>
<option>Club Night</option>
<option>After Party</option>
<option>Rooftop</option>
<optio>All White Party</optio>
</select>
<span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none text-sm">expand_more</span>
</div>
<div className="w-px bg-border-dark my-1"></div>
</div>
{/* <!-- View Switcher --> */}
<div className="flex h-12 items-center rounded-xl bg-surface-dark p-1 border border-border-dark">
<label className={`flex cursor-pointer h-full items-center justify-center rounded-lg px-4 ${viewMode === "calendar" ? "bg-primary/10 text-primary shadow-sm" : "hover:bg-white/5 text-text-muted"} transition-all`} onClick={() => {
  setViewMode("calendar");
}}>
<span className="material-symbols-outlined mr-2 text-lg">calendar_month</span>
<span className={`text-sm ${viewMode === "calendar"? "font-bold" : "font-medium"}`}>Coming This Month</span>
<input className="hidden" name="view" type="radio" value="Calendar"/>
</label>
<label className={`flex cursor-pointer h-full items-center justify-center rounded-lg px-4 ${viewMode === "list" ? "bg-primary/10 text-primary shadow-sm" : "hover:bg-white/5 text-text-muted"}  transition-all`} onClick={() => {
  setViewMode("list");
}}>
<span className="material-symbols-outlined mr-2 text-lg">list</span>
<span className={`text-sm ${viewMode === "list"? "font-bold" : "font-medium"}`}>List</span>
<input className="hidden" name="view" type="radio" value="List"/>
</label>
</div>
</div>
</div>
{/* <!-- Calendar Content Area --> */}
<div className="flex flex-col  lg:flex-row gap-8 items-start">
{/* <!-- Calendar Grid --> */}
<div className={`${viewMode === "calendar" ? "block" : "hidden"} flex-1 w-full bg-surface-dark rounded-2xl border border-border-dark overflow-hidden shadow-xl`}>
{/* <!-- Calendar Header (Month Navigation) --> */}
<div className="flex items-center justify-between p-6 border-b border-border-dark bg-[#281828]">
<h3 className="text-xl font-bold text-white flex items-center gap-2">
<span className="material-symbols-outlined text-primary">event</span>
                                {`${thisMonth} ${ thisYear}`}
                            </h3>
{/* <div className="flex gap-2">
<button className="size-8 flex items-center justify-center rounded-lg hover:bg-white/10 text-white transition-colors">
<span className="material-symbols-outlined">chevron_left</span>
</button>
<button className="px-3 py-1 rounded-lg text-xs font-bold bg-primary text-white">
                                    Today
                                </button>
<button className="size-8 flex items-center justify-center rounded-lg hover:bg-white/10 text-white transition-colors">
<span className="material-symbols-outlined">chevron_right</span>
</button>
</div> */}
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
    !thisMonthEvent ? 
    <p>Loading...</p>:
    gridsFunction()
  }
</div>
</div>

{/* List View */}
<div className={`${viewMode === "list" ? "block" : "hidden"} flex-1 w-full bg-surface-dark border-border-dark font-poppins font-bold text-lg h-[850px] md:h-auto overflow-y-scroll no-scrollbar border shadow-lg rounded-2xl`}>
    {  
      !eventsChronological ?
      <p>Loading</p> :
      listViewFunction()
    }
  </div>
{/* End of List View */}

{/* <!-- Sidebar (Trending/Artists) --> */}
<aside className="w-full lg:w-80 flex flex-col gap-6 shrink-0">
<DiscoverOurVision />
</aside>
</div>
</div>
    </>
  )
}


export default FullCalendarMainContent;