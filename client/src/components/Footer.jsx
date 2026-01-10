import Logo from "../assets/logo.jpeg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons"

function Footer () {
  return (
    <>

<footer className="bg-primary text-white pt-20 pb-10 border-t border-white/5">
<div className="px-4 md:px-10 lg:px-40">
<div className="layout-content-container max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
<div className="flex flex-col gap-4 items-center md:items-start">
<div className="flex items-center gap-2 text-white mb-2">
<span className="text-xl font-bold uppercase tracking-tight">D WAVE ENTERTAINMENT</span>
</div>
<p className="text-gray-400 text-sm leading-relaxed  text-center md:text-left">
                            Premier entertainment brand and artist management agency creating unforgettable experiences worldwide.
                        </p>
</div>
<div className="flex flex-col gap-4 items-center md:items-start">
<h4 className="font-bold text-lg mb-2">Explore</h4>
<Link className="text-gray-400  text-sm" to="#">Events Calendar</Link>
<Link className="text-gray-400  text-sm" to="#">About Us</Link>
<Link className="text-gray-400  text-sm" to="#">Careers</Link>
<Link className="text-gray-400  text-sm" to="#">Reviews</Link>
<Link className="text-gray-400  text-sm" to="#">News</Link>
<Link className="text-gray-400  text-sm" to="#">Get in Touch</Link>
</div>
<div className="flex flex-col gap-4 items-center md:items-star">
<h4 className="font-bold text-lg mb-2">Services</h4>
<p className="text-gray-400 text-sm" href="#">Artist Management</p>
<p className="text-gray-400 text-sm" href="#">Event Production</p>
<p className="text-gray-400 text-sm" href="#">Brand Partnerships</p>
<p className="text-gray-400 text-sm" href="#">Booking Inquiry</p>
</div>
<div className="flex flex-col gap-4 items-center md:items-start">
<h4 className="font-bold text-lg mb-2">Contact</h4>
<p className="text-gray-400 text-sm">D-Wave Entertainment<br/>Coventry, UK</p>
<p className="text-gray-400 text-sm">info@dwaveentertainment.co.uk<br/>+44 7888 642492</p>
<div className="flex gap-4 mt-2">
<a className="text-gray-400 hover:text-white" href="#"><FontAwesomeIcon icon={faInstagram} className="size-6"/></a>
<a className="text-gray-400 hover:text-white" href="#"><FontAwesomeIcon icon={faWhatsapp} className="size-6"/></a>
<a className="text-gray-400 hover:text-white" href="#"><i className="material-symbols-outlined">alternate_email</i></a>
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