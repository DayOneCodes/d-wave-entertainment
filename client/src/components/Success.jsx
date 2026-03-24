import { useEffect } from 'react';

export default function Success ({ close, message,}) {
  useEffect(() => {
      const timer = setTimeout(() => {
        if (close) close();
        // console.log("CLOSED")
      }, 3000);
      return () => clearTimeout(timer);
  }, [close]);

  return (
      <div className="relative border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-2xl w-full max-w-sm overflow-hidden animate-in zoom-in duration-300 bg-white">
        
        {/* Content Section */}
        <div className="p-10 flex flex-col items-center text-center space-y-6">
          
          {/* Animated Icon: Morphs from red shadow to gold check */}
          <div className="relative size-20">
            <div className="absolute inset-0 bg-green-500/20 rounded-full animate-ping duration-[2000ms]"></div>
            <div className="relative size-20 bg-green-500 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(46, 7, 15, 0.15)]">
              <svg 
                className="size-10 text-white animate-draw-check" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth="3"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-2">
            <h2 className="text-primary text-lg tracking-widest">
              {message}
            </h2>
          </div>

          {/* Manual Close Button */}
          <button 
            onClick={() => close()}
            className="text-[10px] text-primary hover:text-brand-hover font-bold uppercase tracking-[3px] pt-4"
          >
            Dismiss
          </button>
        </div>

        {/* Auto-dismiss Progress Bar */}
        <div className="origin-left absolute animate-progress bottom-0 left-0 h-1 bg-primary w-full"></div>
      </div>
  );
};