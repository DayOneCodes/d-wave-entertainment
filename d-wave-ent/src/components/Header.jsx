function Header () {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background-light/80 dark:bg-background-dark/80 border-b border-gray-200 dark:border-white/10">
          <div className="layout-container flex h-full grow flex-col">
          <div className="px-4 md:px-10 lg:px-40 flex justify-center">
          <div className="layout-content-container flex w-full max-w-[1200px] items-center justify-between py-4">
          <div className="flex items-center gap-4 text-slate-900 dark:text-white">
              <div className="size-8 text-primary">
                  <span className="material-symbols-outlined text-[32px]">equalizer</span>
              </div>
              <h2 className="text-lg font-bold leading-tight tracking-tight uppercase">D Wave Entertainment</h2>
          </div>
          <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
              <div className="flex items-center gap-9">
                  <a className="text-sm font-medium hover:text-primary transition-colors" href="#events">Events</a>
                  <a className="text-sm font-medium hover:text-primary transition-colors" href="#artists">Artists</a>
                  <a className="text-sm font-medium hover:text-primary transition-colors" href="#services">Services</a>
                  <a className="text-sm font-medium hover:text-primary transition-colors" href="#contact">Contact</a>
              </div>
              <button className="bg-primary hover:bg-primary/90 transition-all text-white text-sm font-bold h-10 px-6 rounded-lg shadow-[0_0_15px_rgba(166,13,242,0.5)] hover:shadow-[0_0_25px_rgba(166,13,242,0.7)]">
                                        Book Now
              </button>
          </div>

          {/* <!-- Mobile Menu Icon --> */}
          <div className="md:hidden text-slate-900 dark:text-white">
          <span className="material-symbols-outlined">menu</span>
          </div>
          </div>
          </div>
          </div>
      </nav>
    </>
  )
}

export default Header