function AboutUsHero() {
  return (
      <section className="relative -mt-8">
          <div className="px-4 py-12 md:px-10 lg:px-20 xl:px-40 flex justify-center">
              <div className="w-full max-w-[1200px]">
                  <div>
                      <div>
                          <div className="relative flex bg-primary min-h-[560px] flex-col gap-6 overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat items-center justify-center p-8 text-center" style={{
                            backgroundImage: `url(https://res.cloudinary.com/dslzm3lo6/image/upload/v1774264291/image_xpufb6.jpg)`}}>
    
                              <div className="relative z-10 flex flex-col gap-4 max-w-3xl">
                                  <h1 className="text-white text-5xl font-black leading-[1.1] tracking-[-0.033em] md:text-6xl lg:text-7xl stroke-primary">
                                      Curating Chaos,<br/> <span className="text-white">Managing Talent.</span>
                                  </h1>
                                  <h2 className="text-white  font-semibold leading-relaxed text-xl">
                                      We bridge the gap between high-energy nightlife and professional artist management. From underground raves to sold-out arenas, we define the rhythm.
                                  </h2>
                              </div>
                              {/* <div className="relative z-10 flex gap-4 mt-4">
                                  <button className="flex text-sm min-w-[84px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-primary text-white md:text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-all shadow-lg shadow-primary/25">
                                     Our Story
                                  </button>
                                  <button className="flex min-w-[84px] text-sm cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-[#332839] text-white md:text-base font-bold leading-normal tracking-[0.015em] hover:bg-[#403247] transition-all">
                                      View Roster
                                  </button>
                              </div> */}
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

  )
}

export default AboutUsHero;