function MissionSection  () {
  return (
    <section className="bg-[#161118] relative overflow-hidden">

<div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
<div className="px-4 py-16 md:px-10 lg:px-20 xl:px-40 flex justify-center relative z-10">
<div className="w-full max-w-[960px]">
<div className="flex flex-col gap-10 px-4 py-10">
<div className="flex flex-col gap-4">
<div className="flex items-center gap-2 text-white font-bold uppercase tracking-widest text-sm">
<span className="w-8 h-[2px] bg-white"></span>
                                    Our Mission
                                </div>
<h2 className="text-white tracking-light text-[32px] font-bold leading-tight md:text-4xl lg:text-5xl max-w-[720px]">
                                    Two Worlds, <span className="text-transparent bg-clip-text bg-white">One Vision</span>
</h2>
<p className="text-white text-lg font-normal leading-relaxed max-w-[720px]">
                                    We are the nexus where chaotic creativity meets structured success. From throwing the wildest underground parties to guiding the careers of top-tier talent, we do it all with passion and precision.
                                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
<div className="group flex flex-col gap-4">
<div className="w-full h-64 bg-center bg-primary bg-no-repeat bg-cover rounded-xl border border-border-dark group-hover:border-primary/50 transition-all duration-300 relative overflow-hidden" data-alt="Abstract vibrant rave lights and smoke" style={{
  backgroundImage: `url("")`}}>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
</div>
<div>
<h3 className="text-white text-xl font-bold leading-normal mb-2">The Experience</h3>
<p className="text-white text-base font-normal leading-relaxed">
                                            Immersive event production, venue partnerships, and unforgettable nights. We create the moments that people talk about for years.
                                        </p>
</div>
</div>
<div className="group flex flex-col gap-4">
<div className="w-full h-64 bg-center bg-primary bg-no-repeat bg-cover rounded-xl border border-border-dark group-hover:border-primary/50 transition-all duration-300 relative overflow-hidden" data-alt="Music producer working in a dark studio with purple lighting" style={{
  backgroundImage: `url("")`}}>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
</div>
<div>
<h3 className="text-white text-xl font-bold leading-normal mb-2">The Talent</h3>
<p className="text-white text-base font-normal leading-relaxed">
                                            Comprehensive artist management, booking representation, and career growth strategies. We handle the business so artists can handle the music.
                                        </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

  )
}

export default MissionSection;