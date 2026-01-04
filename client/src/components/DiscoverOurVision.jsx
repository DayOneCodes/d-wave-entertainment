import { Link } from "react-router-dom";

function DiscoverOurVision () {
  return (
    <div className="bg-surface-dark rounded-2xl border border-border-dark p-5 shadow-lg relative overflow-hidden">
<div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
<h3 className="text-primary text-lg font-bold mb-4 relative z-10">Discover Our Vision</h3>
<div className="flex flex-col gap-4 relative z-10">
<p className="text-text-muted text-sm leading-relaxed">
                                D-Wave Entertainment is more than a brand; it's a cultural movement, pioneering afro culture & exclusive experiences. We curate immersive experiences that blend premium audio with stunning visuals, fostering a community united by sound.
                            </p>
<div className="bg-white/5 rounded-xl p-4 border border-white/10">
<div className="flex items-start gap-3 mb-3">
<span className="material-symbols-outlined text-primary text-2xl">diamond</span>
<div>
<h4 className="text-primary text-sm font-bold">Premium Management</h4>
<p className="text-xs text-text-muted mt-1">Elevating artist careers through strategic growth.</p>
</div>
</div>
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary text-2xl">all_inclusive</span>
<div>
<h4 className="text-primary text-sm font-bold">Infinite Experience</h4>
<p className="text-xs text-text-muted mt-1">Creating memories that last beyond the night.</p>
</div>
</div>
</div>
<Link className="flex items-center justify-center w-full py-3 rounded-lg bg-primary hover:bg-primary/90 text-white text-sm font-bold shadow-[0_0_20px_rgba(40,24,40,0.4)] transition-all" to="/about-us">
                                Learn More About Us
                            </Link>
</div>
</div>
  )
}

export default DiscoverOurVision;