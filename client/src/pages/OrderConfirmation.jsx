import { useGetTicket } from "../contexts/GetTicketContext.jsx";
import EventSummary from "../components/order-confirmation-components/EventSummary.jsx";

function OrderConfirmation () {
  const { event } = useGetTicket();

  return (
    <div className="flex flex-1 justify-center p-4">
      <div className="layout-content-container flex flex-col max-w-[1200px] flex-1 w-full">
          <div className="flex flex-wrap justify-between gap-3 px-4 pb-6">
          <div className="flex min-w-72 flex-col gap-2">
          <h1 className="text-primary text-3xl font-black leading-tight tracking-[-0.033em]">Review Your Order</h1>
          <p className="text-primary/80 text-base font-normal leading-normal">You're almost there! Finalize your selection below.</p>
          </div>
          </div>
          <div>
<div className="flex flex-col lg:flex-row gap-8 px-4">
  {/* Left Column: Event & Tickets */}
  <div className="flex flex-col flex-[2] gap-6">
    {/* Event Card */}
    <EventSummary />

    {/* Ticket List Section */}
    <div>
      <h2 className="text-primary text-[22px] font-bold leading-tight tracking-[-0.015em] pb-4 flex items-center gap-2">
        <span className="material-symbols-outlined text-primary">confirmation_number</span>
        Your Tickets
      </h2>
      <div className="flex flex-col gap-4">
        {/* Ticket Item 1 */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-surface-dark border border-surface-highlight rounded-xl p-4 justify-between transition-colors hover:border-primary/50 group">
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <div className="text-primary flex items-center justify-center rounded-lg bg-surface-highlight shrink-0 size-12 group-hover:bg-primary/20 group-hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-[24px]">local_activity</span>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-primary text-lg font-bold leading-normal line-clamp-1">Early Bird GA</p>
              <p className="text-text-secondary text-sm font-normal leading-normal">General admission entry before 11 PM</p>
              <p className="text-primary font-bold mt-1 sm:hidden">$25.00</p>
            </div>
          </div>
          <div className="flex items-center justify-between w-full sm:w-auto gap-6 sm:gap-8 pl-[64px] sm:pl-0">
            <p className="text-primary font-bold hidden sm:block w-20 text-right">$25.00</p>
            <div className="flex items-center gap-3 text-primary bg-surface-highlight rounded-lg p-1">
              <button className="text-base font-medium flex h-8 w-8 items-center justify-center rounded hover:bg-white/10 cursor-pointer transition-colors text-text-secondary hover:text-white">
                <span className="material-symbols-outlined text-[18px]">remove</span>
              </button>
              <input className="text-base font-bold w-6 p-0 text-center bg-transparent focus:outline-0 focus:ring-0 border-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none" type="number" defaultValue={2}/>
              <button className="text-base font-medium flex h-8 w-8 items-center justify-center rounded bg-primary text-white cursor-pointer hover:bg-primary/90 transition-colors">
                <span className="material-symbols-outlined text-[18px]">add</span>
              </button>
            </div>
            <button className="text-text-secondary hover:text-red-500 transition-colors p-2 rounded-full hover:bg-red-500/10">
              <span className="material-symbols-outlined text-[20px]">delete</span>
            </button>
          </div>
        </div>

        {/* Ticket Item 2 */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-surface-dark border border-surface-highlight rounded-xl p-4 justify-between transition-colors hover:border-primary/50 group">
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <div className="text-primary flex items-center justify-center rounded-lg bg-surface-highlight shrink-0 size-12 group-hover:bg-primary/20 group-hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-[24px]">diamond</span>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-primary text-lg font-bold leading-normal line-clamp-1">VIP Access</p>
              <p className="text-text-secondary text-sm font-normal leading-normal">Skip the line + 1 drink ticket</p>
              <p className="text-primary font-bold mt-1 sm:hidden">$150.00</p>
            </div>
          </div>
          <div className="flex items-center justify-between w-full sm:w-auto gap-6 sm:gap-8 pl-[64px] sm:pl-0">
            <p className="text-primary font-bold hidden sm:block w-20 text-right">$150.00</p>
            <div className="flex items-center gap-3 text-primary bg-surface-highlight rounded-lg p-1">
              <button className="text-base font-medium flex h-8 w-8 items-center justify-center rounded hover:bg-white/10 cursor-pointer transition-colors text-text-secondary hover:text-white">
                <span className="material-symbols-outlined text-[18px]">remove</span>
              </button>
              <input className="text-base font-bold w-6 p-0 text-center bg-transparent focus:outline-0 focus:ring-0 border-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none" type="number" defaultValue={1}/>
              <button className="text-base font-medium flex h-8 w-8 items-center justify-center rounded bg-primary text-white cursor-pointer hover:bg-primary/90 transition-colors">
                <span className="material-symbols-outlined text-[18px]">add</span>
              </button>
            </div>
            <button className="text-text-secondary hover:text-red-500 transition-colors p-2 rounded-full hover:bg-red-500/10">
              <span className="material-symbols-outlined text-[20px]">delete</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Right Column: Summary Sticky */}
  <div className="flex flex-1 flex-col min-w-[320px]">
    <div className="sticky top-24 bg-surface-dark border border-surface-highlight rounded-xl p-6 shadow-xl">
      <h3 className="text-primary text-xl font-bold mb-6">Order Summary</h3>
      <div className="flex flex-col gap-3 mb-6">
        <div className="flex justify-between items-center text-text-secondary">
          <span>Subtotal (3 items)</span>
          <span className="text-primary font-medium">$200.00</span>
        </div>
        <div className="flex justify-between items-center text-text-secondary">
          <span>Service Fees</span>
          <span className="text-primary font-medium">$15.00</span>
        </div>
        <div className="flex justify-between items-center text-text-secondary">
          <span>Tax</span>
          <span className="text-primary font-medium">$0.00</span>
        </div>
      </div>
      <div className="h-px bg-surface-highlight mb-6 w-full"></div>
      <div className="flex justify-between items-end mb-8">
        <div className="flex flex-col">
          <span className="text-text-secondary text-sm">Total Amount</span>
          <span className="text-xs text-text-secondary">USD</span>
        </div>
        <span className="text-primary text-3xl font-black tracking-tight">$215.00</span>
      </div>
      <div className="flex flex-col gap-3">
        <button className="w-full bg-primary hover:bg-primary/90 text-white text-lg font-bold py-4 px-6 rounded-lg transition-all shadow-[0_0_20px_rgba(166,13,242,0.3)] hover:shadow-[0_0_30px_rgba(166,13,242,0.5)] flex items-center justify-center gap-2">
          Continue to Payment
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
        <button className="w-full bg-transparent hover:bg-surface-highlight text-text-secondary hover:text-white font-medium py-3 px-6 rounded-lg transition-colors border border-transparent hover:border-surface-highlight">
          Go Back
        </button>
      </div>
      <div className="mt-6 flex items-start gap-2 text-xs text-text-secondary/60">
        <span className="material-symbols-outlined text-[16px]">lock</span>
        <p>Secure checkout powered by Neon Pay. By continuing, you agree to the Terms of Service.</p>
      </div>
    </div>
  </div>
</div>
          </div>
      </div>
    </div>

  )
}


export default OrderConfirmation;