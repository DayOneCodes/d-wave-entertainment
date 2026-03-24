function ContactHero () {
  return (
    <>
      <div className="@container w-full mt-2 md:mt-0">
          <div className="relative flex min-h-[400px] flex-col gap-6 bg-primary bg-cover bg-center bg-no-repeat items-center justify-center p-8" data-alt="Dark moody concert crowd with purple stage lights" style={{backgroundImage: `url(https://res.cloudinary.com/dslzm3lo6/image/upload/v1774264291/image_xpufb6.jpg)`}}>
              <div className="flex flex-col gap-4 text-center max-w-[700px]">
                  <h1 className="text-white text-[2.6rem] font-black leading-tight tracking-[-0.033em] md:text-6xl stroke-primary">
                      GET IN TOUCH
                  </h1>
                  <h2 className="text-gray-300 text-lg font-medium leading-relaxed md:text-xl">
                     Ready to elevate your event? Whether it's artist management, private parties, or general inquiries, we're here to make it happen.
                  </h2>
              </div>
          </div>
      </div>
    </>
  )
}

export default ContactHero;