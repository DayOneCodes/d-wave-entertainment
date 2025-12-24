function Footer () {
  return (
    <>

<footer className="bg-[#110a14] dark:bg-[#0f0813] text-white pt-20 pb-10 border-t border-white/5">
<div className="px-4 md:px-10 lg:px-40">
<div className="layout-content-container max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
<div className="flex flex-col gap-4">
<div className="flex items-center gap-2 text-white mb-2">
<span className="material-symbols-outlined text-primary text-3xl">equalizer</span>
<span className="text-xl font-bold uppercase tracking-tight">VIBE.INC</span>
</div>
<p className="text-gray-400 text-sm leading-relaxed">
                            Premier entertainment brand and artist management agency creating unforgettable experiences worldwide.
                        </p>
</div>
<div className="flex flex-col gap-4">
<h4 className="font-bold text-lg mb-2">Explore</h4>
<a className="text-gray-400 hover:text-primary transition-colors text-sm" href="#">Events Calendar</a>
<a className="text-gray-400 hover:text-primary transition-colors text-sm" href="#">Artist Roster</a>
<a className="text-gray-400 hover:text-primary transition-colors text-sm" href="#">Our Venues</a>
<a className="text-gray-400 hover:text-primary transition-colors text-sm" href="#">News &amp; Press</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="font-bold text-lg mb-2">Services</h4>
<a className="text-gray-400 hover:text-primary transition-colors text-sm" href="#">Artist Management</a>
<a className="text-gray-400 hover:text-primary transition-colors text-sm" href="#">Event Production</a>
<a className="text-gray-400 hover:text-primary transition-colors text-sm" href="#">Brand Partnerships</a>
<a className="text-gray-400 hover:text-primary transition-colors text-sm" href="#">Booking Inquiry</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="font-bold text-lg mb-2">Contact</h4>
<p className="text-gray-400 text-sm">123 Music Row<br/>Los Angeles, CA 90028</p>
<p className="text-gray-400 text-sm">hello@vibeinc.com<br/>+1 (555) 123-4567</p>
<div className="flex gap-4 mt-2">
<a className="text-gray-400 hover:text-white" href="#"><i className="material-symbols-outlined">public</i></a>
<a className="text-gray-400 hover:text-white" href="#"><i className="material-symbols-outlined">alternate_email</i></a>
<a className="text-gray-400 hover:text-white" href="#"><i className="material-symbols-outlined">forum</i></a>
</div>
</div>
</div>
<div className="max-w-[1200px] mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
<p>© 2025 DayOneCodes. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white" href="#">Privacy Policy</a>
<a className="hover:text-white" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>
    </>
  )
}

export default Footer;