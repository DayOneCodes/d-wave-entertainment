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
<h2 className="text-white text-3xl md:text-5xl font-bold leading-tight mb-2">Oduwaiye E. Uwamose</h2>
<p className="text-white text-xl font-medium mb-6">Founder &amp; CEO</p>
<div className="space-y-6 text-white text-lg leading-relaxed">
<p>
                                    Based in the heart of Coventry, Oduwaiye E. Uwamose founded D-Wave Entertainment with a passion for community building and a sharp eye for the evolving entertainment landscape. His vision was to create a brand that doesn't just host events, but cultivates a lifestyle.
                                </p>
<p>
                                    With extensive experience in event curation and a deep understanding of youth culture, Oduwaiye has positioned D-Wave as a pivotal bridge between intentional high-quality production and raw community energy.

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