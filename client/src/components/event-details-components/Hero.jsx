

function EventDetailsHero ({event}) {
  return (
    <section className="relative w-full h-[85vh] flex flex-col justify-end overflow-hidden">
<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-black/40 z-10"></div>
<div className="absolute inset-0 hero-gradient z-20"></div>
<div className="w-full h-full bg-cover bg-center transform scale-105" data-alt="Cinematic luxury lounge atmosphere with golden lighting" style={{backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDOjuvIO1bs48_CpfLCx46n1m04M0F5na8dgeoZmodb0qSNY2Qp5buh8FAQd9S6aL9FDN4krH0f9qQTUil21oEQAqrv4mj-Ar8DTdJeFPmh0OMG71HXpL87qook4-cbgnbaBgxpLmxNLi0nzoERDbZZCdDoLCFXgLZGybX2R7abJWZPAicpvuDFTgW1rJLm-lpRjGFcK7T5b5-yQ3i-EMm1d1n1roWFoT8T5sdmdS-oQXFVmjkyPQ6c6gnKSnficITXwUtmretLbwY")`}}></div>
</div>
<div className="relative z-30 px-6 lg:px-40 pb-20 max-w-[1400px] mx-auto w-full">
<div className="flex flex-col gap-6 max-w-3xl">
<div className="flex items-center gap-3">
<span className="px-3 py-1 bg-accent-blue/20 text-accent-blue border border-accent-blue/30 text-[10px] font-bold tracking-[0.2em] rounded">EXCLUSIVE ACCESS</span>
<span className="text-primary text-sm font-bold serif-text">DECEMBER 15, 2024</span>
</div>
<h1 className="serif-text text-white text-5xl md:text-7xl font-black leading-tight tracking-tight">
                        {event.title}
</h1>
<p className="text-white/70 text-lg md:text-xl font-light leading-relaxed serif-text">
                        A curated multi-sensory journey through sound and light. Join us for an exclusive evening where high-fashion meets the underground pulse of the city.
                    </p>
<div className="flex items-center gap-8 mt-4">
<div className="flex flex-col">
<span className="text-white/40 text-[10px] font-bold tracking-widest">VENUE</span>
<span className="text-white font-medium">The Obsidian Lounge</span>
</div>
<div className="flex flex-col">
<span className="text-white/40 text-[10px] font-bold tracking-widest">DOORS</span>
<span className="text-white font-medium">10:00 PM - 04:00 AM</span>
</div>
</div>
</div>
</div>
</section>

  )
}

export default EventDetailsHero;