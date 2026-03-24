import StatsCard from "../components/admin-components/StatsCard.jsx";
import EventListItem from "../components/admin-components/EventListItem.jsx";
import { useEffect } from "react";
import { useEvents } from "../contexts/EventContext.jsx";
import { useModal } from "../hooks/useModal.js";
import DescriptionModal from "../components/add-event-flow-components/DescriptionModal.jsx";
import { useEventMeta } from "../hooks/useEventMeta.js";
import { useAdmin } from "../hooks/useAdmin.js";
import { useToast } from "../contexts/ToastContext.jsx";
import { useAuth } from "../contexts/AuthContext.jsx";
import { useNavigate } from "react-router-dom";
import EditEventModal from "../components/admin-components/EditEventModal.jsx";

function Admin () {
  const { showModal, changeModal, closeModal } = useModal();
  const { deleteEvent, addEvent, uploadEventImage } = useAdmin();
  const eventMeta = useEventMeta();
  let { events, loading, error, futureEvents, pastEvents, todaysEvents } = useEvents();
  const {showToast} = useToast();
  const auth = useAuth();
  const navigate = useNavigate();


useEffect(() => {  
  if (!auth.loading && (auth.error || auth.user?.role !== "admin")) {
     navigate("/");
  }

}, [auth.loading, auth.user, auth.error, navigate]);

 
  if (auth.loading) {
    return <p>Loading...</p>
  }

  if (auth.error || auth.user?.role !== "admin") {
    return <p>UNAUTHORISED</p>
  }

  if (!auth.error && auth.user?.role === "admin") { 
    return (
        <div className="flex-1 p-8 overflow-y-auto">
        <header class="flex items-center justify-between border-b border-primary/10 py-4 mb-10 sticky z-50">
          <div class="flex items-center gap-4 text-primary cursor-pointer" onClick={
            () => navigate("/")
          }>
          <span className="material-symbols-outlined">arrow_back</span>
          <h2 class="text-xl font-black leading-tight tracking-tighter uppercase">D-WAVE ENT.</h2>
          </div>
          <p className="flex justify-center items-center">
            Logout 
          <span className="material-symbols-outlined cursor-pointer" onClick={
            () => auth.useLogout()
          }> logout</span>
          </p>
        </header>
          <div className="flex flex-wrap justify-between items-end gap-4 mb-8">
          <div className="flex flex-col gap-2">
          <p className="text-primary text-4xl font-black leading-tight tracking-tight">Event Management</p>
          <p className="text-[#9da6b9] text-base font-normal">System database of all D-Wave Entertainment events.</p>
          </div>
          <button className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg shadow-primary/20" 
          onClick={
            () => {
              showModal(
                <DescriptionModal 
                  admin={addEvent} 
                  photo={uploadEventImage}
                  close={closeModal} 
                  next={changeModal}  
                  callback={eventMeta} 
                  showToast={showToast}/>
              )
            }
          }>
          <span className="material-symbols-outlined text-xl">add_circle</span>
          <span>Create New Event</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <StatsCard 
            name="Total Events"
            icon="event_available"
            value={loading ? "Loading..." : error ? "error" : events.length}
            analysis="+0% from last month"/>

          <StatsCard 
            name="Tickets Sold"
            icon="confirmation_number"
            value="0"
            analysis="+0% from last month"/>

          <StatsCard 
            name="Total Revenue"
            icon="money"
            value="£0"
            analysis="+0% from last month"/> 
        </div>

        <div className="flex flex-col gap-4 max-h-96 overflow-y-scroll">
          {
            loading ? <p>Loading Events...</p> :
            error ? <p>Unable to load Events</p> :
            events.length === 0 ? <p>No Events Found</p> :

            [...events]
            .reverse()
            .map((event) => {
              let status = "COMPLETED";

              if(futureEvents.includes(event)) {
                status = "UPCOMING"
              } else if (todaysEvents.includes(event)){
                status = "LIVE"
              }

              return <EventListItem 
              key={event._id} 
              event={event} 
              status={status} 
              deleteEvent={deleteEvent} 
              updateEvent={() => {showModal(<EditEventModal event={event} closeModal={closeModal}/>)}}
              showModal={showModal}
              changeModal={changeModal}
              closeModal={closeModal}/>
            })
          }
        </div>
        </div>
  ) }
}

export default Admin;