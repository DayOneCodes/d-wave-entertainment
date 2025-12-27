import Eventcard from "./Event-cards";
import { forwardRef } from "react";

const UpcomingEvents = forwardRef(function UpcomingEvents (props, ref) {
  return (
    <> 
      <section className="py-24 px-4 md:px-10 lg:px-40 bg-background-light dark:bg-background-dark" id="events" ref={ref}>
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">Upcoming Events</h2>
          <p className="text-slate-600 dark:text-gray-400">Don't miss out on the hottest parties in the city.</p>
          </div>
          <a className="text-primary font-bold flex items-center gap-1 hover:gap-2 transition-all" href="#">
          View Full Calendar <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Eventcard 
            month="DEC"
            date="27"
            location="Catch twenty two Night club"
            category="Club Night"
            title="Secret Saturday: Santa's Party"
            imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuCGmOJ0WNuVr9qkwMesI1_5_4hXBSE9Y282Xr-twuYqnK9VLON2EUnoq_mVG7Kk3SZZBGKFSfOkh--ga3tABtFvqaDp5uA9XjdRi3cKmar_VSbe4qwK1AGanxxnuviFEp45U4jhABmDbqOhBRZ4mBY5cyivshwon3_Q1N6DlBRsJxytMnjsTDx_2kTNsasWHijZSfOv3jnV3pZJNFfa3gHykAK1yYwYhFVHZzChYGkYmra0yzPhZODX8JyFKuKaZQZ6q1X4nC0m0V4"
            ticketUrl="Fatsoma.com/auranbeats."
          />
          <Eventcard 
            month="DEC"
            date="06"
            location="Players"
            category="All white Party"
            title="The winter soiÉe"
            imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuA-85zTV_uDzWkljqqX1cEpmrMXO9YD5hMhczL0SNJZvP8wjCeER1beag4XSCpSiJFR4iso0E4xPhfC017tfaSwbsGtpdgLhaubXbWKsw5jmnKt_wY8xKf5IThr9BuUzCXnNQ9YzccwIeMG6w9lweo1XtJEFTQG2QwWdbBfn_jAggkwMCCRulMWvZleFqtc4jNUhSyj7kA2yDDNQEDZNwA2K-wLMVYdzkHJ-kCh4GvHzPaa2DF8h4-Fdhsvp0daG0gSp7cXXRAiuVo"
          />
          <Eventcard 
            month="NOV"
            date="22"
            location="Junction 1ten night club"
            category="After Party"
            title="The Gist: Sodom & Gomorrah"
            imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuC4tP0bwWopqHaJPyGprO_FeEyNvb8ztZOjUv2FzMwn4v2ZMLuK9o5shZiIDBRN4EOP6deelF5ir7vHAcJcXvvEW8Z2PtCjvOlETAd8IRB3pkc1BOBnCWdrcZeNy2AQU-68SuPIO4T4u3MXNKtQcZ-bg8g_Dk4Pf0au2ML7c7mNrsJNHDUoJh1m3gC94u_UWFXa4gdXYL6uGKra0D4B-D-ncXx05tdL9ybVhRMGDhmnfpcUYxgnzwop4_f6uL6b8s-3grz6p7bhHaI"
          />

          </div>
        </div>
      </section>
    </>
  )
})

export default UpcomingEvents;