import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

function MainContentContact () {
  const [whatsappText, setWhatsappText] = useState("Hello, I would like to get in touch with D-Wave Entertainment");
  const [whatsappUrl, setWhatsappUrl] = useState("");
  const [status, setStatus] = useState("")
  const form = useRef();
  const loadTimeRef = useRef(Date.now());
  
  
  useEffect(() => {
    setWhatsappUrl(`https://wa.me/2347069400682?text=${encodeURIComponent(whatsappText)}`)
  }, [whatsappText])

  const sendEmail = (e) => {
    e.preventDefault();

    const coolDownTime = 15000;
    const lastSubmit = Number(localStorage.getItem("lastSubmit"));
    const minimumTimeToFillForm = 3000;

    if (lastSubmit && Date.now() - lastSubmit < coolDownTime){
      setStatus("Please wait before resending.");
      return;
    }

    if (form.current.company?.value){
      return;
    }

    if (Date.now() - loadTimeRef.current < minimumTimeToFillForm){
      setStatus("Form submitted too quickly, please try again.")
      return;
    }

    const emailParams = {
      title: form.current.title.value,
      name: form.current.name.value,
      message: form.current.message.value,
      phoneNumber: form.current.phoneNumber.value || ".",
      email: form.current.email.value
    }

    emailjs.send(
      import.meta.env.VITE_EMAIL_JS_SERVICE_ID,
      import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID,
      emailParams,
      import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY
    )
    .then((res) => {
      localStorage.setItem("lastSubmit", Date.now());
      setStatus("Message Send Success")
      form.current.reset();
    })
    .catch((error) => {
      console.log(error.text)
      setStatus("Message send Failed, Try Again Later")
    })


  }

  return (
<div className="layout-container flex flex-col grow w-full items-center px-4 md:px-10 lg:px-40 pb-20 mt-5">
<div className="layout-content-container flex flex-col max-w-[1200px] w-full gap-12 lg:flex-row lg:gap-16">
{/* <!-- Left Column: Contact Form --> */}
<div className="flex flex-col flex-1 gap-6">
<div className="flex flex-col gap-2">
<h3 className="text-primary text-2xl font-bold">Send us a message</h3>
<p className="text-black text-base">Fill out the form below and our team will get back to you within 24 hours.</p>
</div>
<form className="flex flex-col gap-5" ref={form} onSubmit={sendEmail}>
<div className="flex flex-col md:flex-row gap-5">
<label className="flex flex-col flex-1">
<p className="text-primary text-sm font-medium leading-normal pb-2">Name</p>
<input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-black focus:outline-0 focus:ring-1 focus:ring-primary border bg-white/20 border-[#5c5360] focus:border-primary h-14 placeholder:text-[#b09cba] p-[15px] text-base font-normal leading-normal transition-all" name="name" placeholder="Your full name" required/>
</label>
<label className="flex flex-col flex-1">
<p className="text-primary text-sm font-medium leading-normal pb-2">Email</p>
<input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-black focus:outline-0 focus:ring-1 focus:ring-primary border bg-white/20 border-[#5c5360] focus:border-primary h-14 placeholder:text-[#b09cba] p-[15px] text-base font-normal leading-normal transition-all" name="email" placeholder="name@example.com" type="email" required/>
</label>
<input className="hidden form-input w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-black focus:outline-0 focus:ring-1 focus:ring-primary border bg-white/20 border-[#5c5360] focus:border-primary h-14 placeholder:text-[#b09cba] p-[15px] text-base font-normal leading-normal transition-all" tabIndex="-1" placeholder="input company you work in" type="text" name="company" autoComplete="off"/>
</div>
<div className="flex flex-col md:flex-row gap-5">
<label className="flex flex-col flex-1">
<p className="text-primary text-sm font-medium leading-normal pb-2">Phone (Optional)</p>
<input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-black focus:outline-0 focus:ring-1 focus:ring-primary border bg-white/20 border-[#5c5360] focus:border-primary h-14 placeholder:text-[#b09cba] p-[15px] text-base font-normal leading-normal transition-all" name="phoneNumber" placeholder="+1 (555) 000-0000" type="tel"/>
</label>
<label className="flex flex-col flex-1">
<p className="text-primary text-sm font-medium leading-normal pb-2">Inquiry Type</p>
<div className="relative">
<select className="form-select flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-primary focus:outline-0 focus:ring-1 focus:ring-primary border bg-white/20 border-[#5c5360] focus:border-primary h-14 placeholder:text-[#b09cba] p-[15px] pr-10 text-base font-normal leading-normal transition-all appearance-none" name="title" defaultValue={""} required>
<option value="" disabled>Select an option</option>
<option value="artist">Artist Management</option>
<option value="events">Private Events</option>
<option value="general">General Inquiry</option>
<option value="press">Press &amp; Media</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#b09cba]">
<span className="material-symbols-outlined">expand_more</span>
</div>
</div>
</label>
</div>
<label className="flex flex-col flex-1">
<p className="text-primary text-sm font-medium leading-normal pb-2">Message</p>
<textarea className="form-textarea flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-black focus:outline-0 focus:ring-1 focus:ring-primary border bg-white/20 border-[#5c5360] focus:border-primary min-h-[160px] placeholder:text-[#b09cba] p-[15px] text-base font-normal leading-normal transition-all" name="message"  required placeholder="Tell us about your event or inquiry..."></textarea>
</label>
<button className="flex w-full md:w-auto cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-primary hover:bg-[rgba(40,24,40,0.4)] text-white text-base font-bold leading-normal tracking-[0.015em] transition-colors mt-2 shadow-[0_0_20px_rgba(40,24,40,0.4)]" type="submit">
<span className="truncate">Send Message</span>
</button>
<p className="text-green-500 font-medium font-poppins" role="alert" aria-live="polite">{status}</p>
</form>
</div>
{/* <!-- Right Column: Info & Map --> */}
<div className="flex flex-col w-full lg:w-[400px] gap-8">
{/* <!-- Info Cards --> */}
<div className="flex flex-col gap-4">
<h3 className="text-primary text-2xl font-bold">Contact Info</h3>
<div className="flex flex-col gap-4">
<div className="flex items-start gap-4 p-4 rounded-xl bg-card-dark border border-[#4c3b54]/50">
<div className="size-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0 text-primary">
<span className="material-symbols-outlined">mail</span>
</div>
<div className="flex flex-col">
<span className="text-primary text-xs font-medium uppercase tracking-wider">Email</span>
<a className="text-primary text-base font-medium hover:text-primary transition-colors" href="mailto:hello@vibeparty.com">hello@dwave.com</a>
<a className="text-primary text-sm opacity-80 hover:text-primary transition-colors" href="mailto:booking@vibeparty.com">booking@dwave.com</a>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-xl bg-card-dark border border-[#4c3b54]/50">
<div className="size-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0 text-primary">
<span className="material-symbols-outlined">call</span>
</div>
<div className="flex flex-col">
<span className="text-primary text-xs font-medium uppercase tracking-wider">Phone</span>
<a className="text-primary text-base font-medium hover:text-primary transition-colors" href="tel:+15551234567">+44 7888 642492</a>
<span className="text-primary text-sm">Mon-Fri, 9am - 6pm EST</span>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-xl bg-card-dark border border-[#4c3b54]/50">
<div className="size-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0 text-primary">
<span className="material-symbols-outlined">location_on</span>
</div>
<div className="flex flex-col">
<span className="text-primary text-xs font-medium uppercase tracking-wider">Headquarters</span>
<p className="text-primary text-base font-medium">Coventry,<br/> UK ZIPCODE</p>
</div>
</div>
</div>
</div>
{/* <!-- Socials --> */}
<div className="flex flex-col gap-3">
<h4 className="text-primary text-lg font-bold">Follow Us</h4>
<div className="flex gap-3">
<a className="size-10 rounded-lg bg-[#231b27] border border-[#4c3b54] flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all group" href="https://www.instagram.com/d_waveentertainment/" target="_blank">
<FontAwesomeIcon icon={faInstagram} className="size-6 group-hover:scale-110 transition-transform"/>
</a>

<a className="size-10 rounded-lg bg-[#231b27] border border-[#4c3b54] flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all group" href={whatsappUrl} target="_blank">
<FontAwesomeIcon icon={faWhatsapp} className="size-6 group-hover:scale-110 transition-transform"/>
</a>
</div>
</div>
</div>
</div>
</div>
)
}

export default MainContentContact;