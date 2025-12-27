import { forwardRef } from "react";

const Services = forwardRef(function Services (props, ref) {
  return (
    <>
      <section className="py-24 px-4 md:px-10 lg:px-40 bg-white dark:bg-[#150c1a]" id="services" ref={ref}>
          <div className="max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Management</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
                                    Elevating Talent to the <span className="text-primary">Global Stage</span>
          </h2>
          <p className="text-slate-600 dark:text-gray-300 text-lg mb-10 leading-relaxed">
                                    We provide comprehensive artist management services designed to nurture creativity while handling the business. From booking world tours to building a distinct brand identity.
                                </p>
          <div className="grid gap-6">
          <div className="flex gap-4 p-4 rounded-xl bg-background-light dark:bg-[#231b27] border border-gray-100 dark:border-white/5 hover:border-primary/50 transition-colors">
          <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
          <span className="material-symbols-outlined">trending_up</span>
          </div>
          <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">Career Development</h3>
          <p className="text-slate-500 dark:text-gray-400 text-sm">Strategic planning for long-term growth and sustainable success in the industry.</p>
          </div>
          </div>
          <div className="flex gap-4 p-4 rounded-xl bg-background-light dark:bg-[#231b27] border border-gray-100 dark:border-white/5 hover:border-primary/50 transition-colors">
          <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
          <span className="material-symbols-outlined">public</span>
          </div>
          <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">Global Booking</h3>
          <p className="text-slate-500 dark:text-gray-400 text-sm">Connecting our roster with premier venues and festivals worldwide.</p>
          </div>
          </div>
          <div className="flex gap-4 p-4 rounded-xl bg-background-light dark:bg-[#231b27] border border-gray-100 dark:border-white/5 hover:border-primary/50 transition-colors">
          <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
          <span className="material-symbols-outlined">campaign</span>
          </div>
          <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">Brand Promotion</h3>
          <p className="text-slate-500 dark:text-gray-400 text-sm">Building recognizable personal brands through targeted marketing campaigns.</p>
          </div>
          </div>
          </div>
          </div>
          <div className="order-1 lg:order-2 relative">
          <div className="absolute -inset-4 bg-primary/20 rounded-2xl blur-2xl"></div>
          <div className="relative grid grid-cols-2 gap-4">
          <div className="space-y-4 translate-y-8">
          <div className="bg-cover bg-center rounded-2xl h-64 w-full shadow-lg" data-alt="Female singer performing on stage" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBi9snnsHO7Xtru6MXu-SEB-OuCAAdtWSTgjjvpqsjEQ8pPCWo0Ix8qJ6hhsEwkA70Yh7VSIi9N5fmn29m9bdYgWyxAi8BDfcBqJ9OtHOJ66cdgcVb9i3287mkoW7_oXdp6781-kyHofyOuRZYcZlJY30qFokDtph3vJe4oAJK7SDfgeJaxCebKFdSZt2pCFod364G9A_SZcqhcKbdFu1EtjmN96oy58LWs7TQm76FG4jz2MLW9nzj50Ezg8JLXlDYDHvTiaSptcMs')"}}></div>
          <div className="bg-cover bg-center rounded-2xl h-48 w-full shadow-lg" data-alt="Sound mixing console close up" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDXaDwqblSgmcBYObTKgCAXjNzbeP7DiBw5_BYfH8PgYPY8pwQ0E3_82zkKurGVfQFfASOHCKQBFwEXDkish6gZhxk5-Sd5xTLP1QZNQ3EprXvoQ2QnE6L4KzcWkM03YpS6BgV_1MoM4y_Tabv4VOtc-RsLVU7FaAWsQr2XCHy5jjpdfDaUA1hONidZQZpwjkCxTxUVWMRedleZ_lGPtibEYc7iHyhSKtEuPdoHfikM1uaY_x-pKiMEKUU6hwdCOYhGs1ODg83zrrY')"}}></div>
          </div>
          <div className="space-y-4">
          <div className="bg-cover bg-center rounded-2xl h-48 w-full shadow-lg" data-alt="Backstage pass and equipment" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuANG8asLlTIJxf7eatrp0UP0T9sByw2oFfErBwPKijq2KQNq0J2Rcun8cKdaoCnMaRE2s8tf23_0YAOHjU-Wa6arHE_dDupt6OHx2QjMwIjVCQEZwsrYycJv0DoPsU6Q6lHzZVuEe0OpdNt8MrYC0ZTP9vqieF_BJ-HgBPtpS4Gbu-gpvuJUz1hqVXEl8dhuPtTayI8jxu1n48-b80sfssHP20QYZYNRef154lPIKEeR2hRWg9tZ2OJqnCH5CJq1rdV02XdFNnPhTg')"}}></div>
          <div className="bg-cover bg-center rounded-2xl h-64 w-full shadow-lg" data-alt="Crowd cheering at a concert" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBAyYcezR5CvZDVFLUiC5b3nIa1sfJ79sTZz5tMzW5nqkLeWeTj3pdDUd5No9qSxsu8-zdY31xQ0xJ933kpAuE3VQMfmkowtsgwX6uxGxaIthPaoPvOW2Krtgnu-O5ovPf4PwSZci3awYSRzXj9zh4pWQsTZzurnzEF_seDTnMB8BQGR4sgCMUhZE1CzMnuEa5Q5xZxqXVD2HPLCjSuZqpbhLxpPvgS-ITOeU4Tjq_r7KrLYYjCxD1r2G1um-C3P-ZDwAdP0_2yp_g')"}}></div>
          </div>
          </div>
          </div>
          </div>
          </div>
      </section>
    </>
  )
})

export default Services;