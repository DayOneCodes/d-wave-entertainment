function Newsletter () {
  return (
    <>
    
<section className="py-20 px-4 md:px-10 lg:px-40 bg-white border-t border-slate-200">
<div className="max-w-4xl mx-auto text-center">
<div className="inline-flex items-center justify-center p-3 rounded-full bg-primary/10 text-primary mb-6">
<span className="material-symbols-outlined text-3xl">mail</span>
</div>
<h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">Be the First to Know</h2>
<p className="text-slate-600  mb-8 text-lg">Join our exclusive guest list to get early access to tickets, artist announcements, and VIP offers.</p>
<form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
<input className="flex-1 bg-background-light border border-gray-300 rounded-lg px-6 py-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Enter your email address" type="email"/>
<button className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-primary/40 transition-all whitespace-nowrap" type="button">
                        Sign Up
                    </button>
</form>
<p className="mt-4 text-xs text-slate-500 ">We respect your privacy. Unsubscribe at any time.</p>
</div>
</section>
    </>
  )
}

export default Newsletter;