import theVisionary from "../assets/the-visionary.jpeg"
function TheVisionary () {
  return (
    
<section className="bg-primary py-20 border-y border-border-dark">
<div className="px-4 md:px-10 lg:px-20 xl:px-40 flex justify-center">
<div className="w-full max-w-[1200px]">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
<div className="order-2 md:order-1">
<div className="flex items-center gap-2 text-white font-bold uppercase tracking-widest text-sm mb-4">
<span className="w-8 h-[2px] bg-white"></span>
                                The Visionary
                            </div>
<h2 className="text-white text-3xl md:text-5xl font-bold leading-tight mb-2">Oduwaiye Uwamose</h2>
<p className="text-white text-xl font-medium mb-6">Founder &amp; CEO</p>
<div className="space-y-6 text-white text-lg leading-relaxed">
<p>
                                    Alex founded Pulse &amp; Play with a singular ambition: to dismantle the barriers between the raw, chaotic energy of underground rave culture and the sophisticated structure of professional artist management.
                                </p>
<p>
                                    Starting his journey in the basements of Berlin's most exclusive clubs, Alex realized that true talent often lacked the business infrastructure to thrive. With over 15 years of industry experience, he has bridged that gap, curating unforgettable nights while building sustainable careers for the artists who soundtrack them.
                                </p>
<p className="text-white font-medium italic border-l-4 border-white pl-4 my-6">
                                    "We don't just manage artists; we amplify their souls. We don't just host parties; we curate memories."
                                </p>
<img alt="Alex Chen Signature" class="h-12 opacity-80 invert brightness-0" src={theVisionary} style={{filter: `invert(1)`}}/>
</div>
</div>
<div className="order-1 md:order-2 relative">
<div className="aspect-[3/4] rounded-2xl overflow-hidden border border-border-dark relative z-10 shadow-2xl shadow-black/50">
<div className="w-full h-full bg-cover bg-center" style={{backgroundImage: `url(${theVisionary})`}}></div>
{/* <div className="absolute inset-0 bg-gradient-to-t from-[#161118] via-transparent to-transparent opacity-30"></div> */}
</div>
<div className="absolute -top-6 -right-6 w-3/4 h-3/4 border-2 border-white rounded-2xl -z-0 hidden md:block"></div>
<div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/30 blur-[80px] rounded-full -z-0"></div>
</div>
</div>
</div>
</div>
</section>

  )
}

export default TheVisionary;