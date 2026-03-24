const Error = ({close, message}) => {
  return (
    

      <div className="relative z-10 w-full max-w-lg mx-4 bg-white border border-outline-variant/15 rounded-xl">

        {/* Modal Shell */}
        <div className=" overflow-hidden flex flex-col items-center p-12 text-center">

          {/* Close Trigger */}
          <button className={`${!close && "hidden" }absolute top-6 right-6 text-on-surface-variant/40 hover:text-on-surface transition-colors`}>
            <span className={`${!close && "hidden" } material-symbols-outlined`}>close</span>
          </button>

          {/* Error Icon Visual */}
          <div className="relative mb-10">

            {/* Pulsing Rings */}
            <div className="absolute bg-primary inset-0 rounded-full bg-error/20 animate-ping opacity-25"></div>
            <div className="absolute bg-red-500 inset-[-10px] rounded-full bg-error/10 animate-pulse opacity-20"></div>

            {/* Main Icon Circle */}
            <div className="relative w-24 h-24 rounded-full flex items-center justify-center border border-error/30">
              <span
                className="text-primary material-symbols-outlined text-5xl text-on-error-container"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                error
              </span>
            </div>

          </div>

          {/* Typography */}
          {/* <h1 className="font-headline text-primary text-4xl mb-4 text-on-surface tracking-tight">
            Error
          </h1> */}

          <p className="text-on-surface-variant text-lg text-primary font-light leading-relaxed max-w-sm mb-12">
            {message}
          </p>

          {/* Brand Anchor */}
          <div className="mt-16 flex flex-col items-center space-y-3 opacity-60">
            <div className="flex items-center space-x-2">
              <span className="h-[1px] w-8 bg-outline-variant/40"></span>
              <span className="h-[1px] w-8 bg-outline-variant/40"></span>
            </div>
            <p className="font-label text-[10px] uppercase tracking-[0.2rem] text-on-surface-variant">
              D-Wave Entertainment
            </p>
          </div>

        </div>
      </div>

  );
};

export default Error;