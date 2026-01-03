import backgroundImage from "../assets/club-ii.jpg"

function AboutUsHero() {
  return (
      <section className="relative mt-2 md:mt-0">
          <div className="px-4 py-12 md:px-10 lg:px-20 xl:px-40 flex justify-center">
              <div className="w-full max-w-[1200px]">
                  <div className="@container">
                      <div className="@[480px]:p-4">
                          <div className="relative flex bg-primary min-h-[560px] flex-col gap-6 overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat @[480px]:gap-8 items-center justify-center p-8 text-center" data-alt="Dark moody concert crowd with purple laser lights" style={{
                            backgroundImage: `url(${backgroundImage})`}}>
                              <div className="absolute inset-0 bg-gradient-to-t from-[#161118] via-transparent to-transparent opacity-90"></div>
                              <div className="relative z-10 flex flex-col gap-4 max-w-3xl">
                                  <h1 className="text-white text-5xl font-black leading-[1.1] tracking-[-0.033em] md:text-6xl lg:text-7xl">
                                      Curating Chaos,<br/> <span className="text-white">Managing Talent.</span>
                                  </h1>
                                  <h2 className="text-gray-200 text-lg font-normal leading-relaxed md:text-xl">
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