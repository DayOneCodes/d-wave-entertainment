import { useNavigate } from "react-router-dom";


function CTA ({onScrollToEvents }) {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-gradient-to-b from-card-dark to-[#161118]">
<div className="px-4 flex justify-center text-center">
<div className="max-w-2xl flex flex-col items-center gap-6">
<h2 className="text-primary text-4xl md:text-5xl font-black leading-tight">Ready to amplify your sound?</h2>
<p className="text-text-secondary text-lg">Whether you're an artist looking for management or a brand looking to host an unforgettable event.</p>
<div className="flex flex-col sm:flex-row gap-4 mt-4 w-full justify-center">
<button className="flex items-center justify-center rounded-lg h-12 px-8 bg-primary text-white text-base font-bold hover:bg-primary/90 transition-all w-full sm:w-auto" onClick={() => {
  navigate("/contact")
}
}>
                                Contact Us
                            </button>
<button className="flex items-center justify-center rounded-lg h-12 px-8 border border-primary bg-transparent text-primary text-base font-bold hover:bg-white/5 transition-all w-full sm:w-auto" onClick={() => {
 onScrollToEvents()
}
}>
                                See Upcoming Events
                            </button>
</div>
</div>
</div>
</section>

  )
}

export default CTA;