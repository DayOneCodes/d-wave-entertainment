import { forwardRef } from "react";
import photoUn from "../assets/service-I.webp";
import photoDeux from "../assets/service-II.webp";
import photoTrois from "../assets/service-III.webp";
import photoQuatre from "../assets/service-IV.webp";


const Services = forwardRef(function Services (props, ref) {
  return (
    <>
      <section className="py-24 px-4 md:px-10 lg:px-40 bg-white dark:bg-[#150c1a]" id="services" ref={ref}>
          <div className="max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Management</span>
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-6 leading-tight">
                                    Elevating Talent to the <span className="text-primary">Global Stage</span>
          </h2>
          <p className="text-slate-600 dark:text-gray-300 text-lg mb-10 leading-relaxed">
                                    We provide comprehensive artist management services designed to nurture creativity while handling the business. From booking world tours to building a distinct brand identity.
                                </p>
          <div className="grid gap-6">
          <div className="flex gap-4 p-4 rounded-xl bg-background-light dark:bg-[#231b27] border border-gray-100 dark:border-white/5 hover:border-primary/50 transition-colors">
          <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
          <span className="material-symbols-outlined">trending_up</span>
          </div>
          <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">Career Development</h3>
          <p className="text-slate-500 dark:text-gray-400 text-sm">Strategic planning for long-term growth and sustainable success in the industry.</p>
          </div>
          </div>
          <div className="flex gap-4 p-4 rounded-xl bg-background-light dark:bg-[#231b27] border border-gray-100 dark:border-white/5 hover:border-primary/50 transition-colors">
          <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
          <span className="material-symbols-outlined">public</span>
          </div>
          <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">Global Booking</h3>
          <p className="text-slate-500 dark:text-gray-400 text-sm">Connecting our roster with premier venues and festivals worldwide.</p>
          </div>
          </div>
          <div className="flex gap-4 p-4 rounded-xl bg-background-light dark:bg-[#231b27] border border-gray-100 dark:border-white/5 hover:border-primary/50 transition-colors">
          <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
          <span className="material-symbols-outlined">campaign</span>
          </div>
          <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">Brand Promotion</h3>
          <p className="text-slate-500 dark:text-gray-400 text-sm">Building recognizable personal brands through targeted marketing campaigns.</p>
          </div>
          </div>
          </div>
          </div>
          <div className="order-1 lg:order-2 relative">
          <div className="absolute -inset-4 bg-primary/20 rounded-2xl blur-2xl"></div>
          <div className="relative grid grid-cols-2 gap-4">
          <div className="space-y-4 translate-y-8">
          <div className="bg-cover bg-center bg-primary rounded-2xl h-64 w-full shadow-lg" data-alt="Sound mixing console close up" style={{backgroundImage: `url(${photoDeux})`}}></div>
          <div className="bg-cover bg-center bg-primary rounded-2xl h-48 w-full shadow-lg" data-alt="Sound mixing console close up" style={{backgroundImage: `url(${photoUn})`}}></div>
          </div>
          <div className="space-y-4">
          <div className="bg-cover bg-center bg-primary rounded-2xl h-48 w-full shadow-lg" data-alt="Backstage pass and equipment" style={{backgroundImage: `url(${photoTrois})`}}></div>
          <div className="bg-cover bg-center bg-primary rounded-2xl h-64 w-full shadow-lg" data-alt="Crowd cheering at a concert" style={{backgroundImage: `url(${photoQuatre})`}}></div>
          </div>
          </div>
          </div>
          </div>
          </div>
      </section>
    </>
  )
})

export default Services;