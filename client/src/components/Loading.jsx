export default function Loading ({message}) {

  return (
      <div className="flex flex-col items-center gap-8">
        {/* Luxury Geometric Spinner */}
        <div className="relative size-24 flex items-center justify-center">
          {/* Outer Ring */}
          <div className="absolute inset-0 border-2 border-input-border rounded-full"></div>
          
          {/* Pulsing Core */}
          {/* <div className="size-12 bg-primary rounded-sm rotate-45 animate-pulse shadow-[0_0_30px_rgba(46, 7, 15, 0.15)]"></div> */}
          
          {/* Spinning Orbiters */}
          <div className="absolute inset-0 border-t-2 border-r-2 border-white rounded-full animate-spin duration-[1500ms]"></div>
          <div className="absolute inset-2 border-b-2 border-l-2 border-brand-hover rounded-full animate-spin-reverse duration-[2000ms]"></div>
        </div>

        {/* Brand Typography */}
        <div className="text-center space-y-2">
          <h2 className="text-primary font-poppins text-lg animate-pulse">
            {message}
          </h2>
          <div className="flex justify-center gap-1">
            <span className="size-1 bg-brand-hover rounded-full animate-bounce [animation-delay:-0.3s]"></span>
            <span className="size-1 bg-brand-hover rounded-full animate-bounce [animation-delay:-0.15s]"></span>
            <span className="size-1 bg-brand-hover rounded-full animate-bounce"></span>
          </div>
        </div>

        {/* Brand Mark */}
        <p className="fixed bottom-10 text-gray-500 text-[10px] font-bold uppercase tracking-[0.5em]">
          D-Wave Entertainment
        </p>
      </div>
  );
};