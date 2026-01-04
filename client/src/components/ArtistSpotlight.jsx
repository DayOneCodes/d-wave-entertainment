
function ArtistSpotlight () {
  return (
  <div className="bg-surface-dark rounded-2xl border border-border-dark p-5 shadow-lg">
<div className="flex items-center justify-between mb-4">
<h3 className="text-primary text-lg font-bold">Artist Spotlight</h3>
</div>
<div className="flex flex-col gap-4">
<div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden group">
<img alt="photo" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src=""/>
<div className="absolute inset-0 bg-primary opacity-90"></div>
<div className="absolute bottom-0 left-0 right-0 p-4">
<h4 className="text-white font-bold text-xl neon-text-shadow">TEXT</h4>
<p className="text-white text-xs font-bold uppercase tracking-wider">TEXT</p>
</div>
</div>
<p className="text-text-muted text-sm leading-relaxed">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo magnam earum, illo excepturi sunt corrupti eos dolorum rerum aperiam beatae.
                            </p>
</div>
</div>
  )
}


export default ArtistSpotlight;