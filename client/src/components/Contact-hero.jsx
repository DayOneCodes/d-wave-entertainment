function ContactHero () {
  return (
    <>
      <div className="@container w-full">
          <div className="relative flex min-h-[400px] flex-col gap-6 bg-primary bg-cover bg-center bg-no-repeat items-center justify-center p-8" data-alt="Dark moody concert crowd with purple stage lights" style={{backgroundImage: "linear-gradient(rgba(28, 16, 34, 0.7) 0%, rgba(28, 16, 34, 1) 100%), url('')"}}>
              <div className="flex flex-col gap-4 text-center max-w-[700px]">
                  <h1 className="text-white text-5xl font-black leading-tight tracking-[-0.033em] md:text-6xl">
                      Get In Touch
                  </h1>
                  <h2 className="text-gray-300 text-lg font-normal leading-relaxed md:text-xl">
                     Ready to elevate your event? Whether it's artist management, private parties, or general inquiries, we're here to make it happen.
                  </h2>
              </div>
          </div>
      </div>
    </>
  )
}

export default ContactHero;