import { useGetTicket } from "../contexts/GetTicketContext.jsx";
import EventSummary from "../components/order-confirmation-components/EventSummary.jsx";
import TicketItem from "../components/order-confirmation-components/TicketItem.jsx";
import OrderSummary from "../components/order-confirmation-components/OrderSummary.jsx";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useEvents } from "../contexts/EventContext.jsx";
import { useNavigate, useLocation } from "react-router-dom";
import { usePayments } from "../hooks/usePayments.js";

function OrderConfirmation() {
  const { eventId } = useParams();
  const {events, loading, error} = useEvents();
  const [event, setEvent] = useState(null);
  const navigate = useNavigate();
  const [ confirmSelection, setConfirmSelection ] = useState(false);
  const { proceedToPayment } = usePayments();


  useEffect(() => {
    if (loading) return;
    if (!events || events.length === 0) return;

    const foundEvent = events.find(e => e._id.toString() === eventId.toString());
    setEvent(foundEvent);
  }, [eventId, events, loading]);

  // const { event } = useGetTicket();
  const [subTotal, setSubTotal] = useState(0);
  const [serviceFees, setServiceFees] = useState(0);
  const [total, setTotal] = useState(0);
  const [ticketQuantities, setTicketQuantities] = useState({});
  
  useEffect(() => {
    if (!event) return;

    const initial = {};
    event.tickets.forEach((tc) => {
      initial[tc.type] = 0;
    });

    setTicketQuantities(initial);
  }, [event])

  const tax = 0;

  const handleTicketChange = (ticketType, newQty) => {
    if (newQty < 0) return;

    setTicketQuantities((prev) => {
      return { ...prev, [ticketType]: newQty };
    });
  };

  const handleOrderPreparation = () => {
    const orderSummary = event.tickets
      .filter((tc) => ticketQuantities[tc.type] > 0)
      .map((tc) => ({
        ticketType: tc.type,
        quantity: ticketQuantities[tc.type],
        unitPrice: tc.price,
      }));

    return orderSummary;
  };

  const handleProceedToPayment = () => {
    const payload =  {
      eventId: event._id,
      tickets: handleOrderPreparation(),
    };

    return payload;
  };

  useEffect(() => {
    let sumTotal = subTotal;

    if (serviceFees) {
      sumTotal += serviceFees;
    }

    if (tax) {
      sumTotal *= 1 + tax / 100;
    }

    setTotal(sumTotal);
  }, [subTotal]);


  const [sourcePage, setSourcePage] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (location.state){
      switch (location.state.sourcePage){
        case "/":
          setSourcePage("/")
        return;
        case "/events":
          setSourcePage("/events")
        return;
      }
    }else{
      const sourcePage = `/event-info/${eventId}`
      setSourcePage(sourcePage)
    }
  }, [])

  return (
    <>
<div className={`h-full ${!confirmSelection ? "hidden" : "flex"} items-center justify-center fixed inset-0 z-50 w-full bg-black/80 backdrop-blur-sm px-4`}>
  <div className="bg-white border border-white/10 shadow-2xl rounded-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-300">
    
    <div className="p-8 text-center border-b border-white/5">
      <h1 className="text-2xl text-primary tracking-wide mb-2 uppercase">Confirm Selection</h1>
      <p className="text-black/90 text-sm leading-relaxed px-4">
        You're purchasing tickets for <span className="text-primary font-medium italic">{confirmSelection && event.title}</span>
      </p>
    </div>

    <div className="p-8 space-y-6">
      <div className="flex flex-row justify-between text-[10px] uppercase tracking-[2px] text-black/90 font-bold border-b border-white/5 pb-2">
        <p className="w-1/2">Ticket Type</p>
        <p className="w-1/4 text-center">Qty</p>
        <p className="w-1/4 text-right">Subtotal</p>
      </div>

      <div className="space-y-4 max-h-[12rem] overflow-y-auto custom-scrollbar">
        {confirmSelection && 
          handleProceedToPayment().tickets.map((ticket, i) => (
            <div key={i} className="flex flex-row justify-between items-center text-sm">
              <div className="w-1/2">
                <p className="text-primary font-medium">{ticket.ticketType}</p>
                <p className="text-black/90 text-xs">£{ticket.unitPrice} each</p>
              </div>
              <p className="w-1/4 text-center text-black/90 font-mono">{ticket.quantity}</p>
              <p className="w-1/4 text-right text-black/90 font-mono">£{ticket.unitPrice * ticket.quantity}</p>
            </div>
          ))
        }
      </div>

      <div className="flex flex-row justify-between items-baseline pt-4 border-t border-white/10">
        <p className="text-xs uppercase tracking-widest text-black/90">Total Amount</p>
        <p className="text-3xl text-green-700 font-semibold">£{total}</p>
      </div>
    </div>

    <div className="flex flex-row">
      <button 
        className="flex-1 p-5 bg-transparent text-black/90 text-xs uppercase tracking-[3px] hover:text-white hover:bg-white/5 transition-all duration-300 border-t border-r border-white/5" 
        onClick={() => setConfirmSelection(false)}
      >
        Cancel
      </button>
      
      <button 
        className="flex-1 p-5 bg-green-700 text-white text-xs font-bold uppercase tracking-[3px] hover:bg-green-600 transition-all duration-300 active:scale-95" 
        onClick={() => {
          proceedToPayment(handleProceedToPayment());
        }}
      >
        Confirm & Pay
      </button>
    </div>
  </div>
</div>

    <div className="flex flex-1 justify-center py-4 px-2">
      <div className="layout-content-container flex flex-col max-w-[1200px] flex-1 w-full">
        <div className="flex flex-wrap justify-between gap-3 px-4 pb-6">
          <div className="flex min-w-72 flex-col gap-2">
            <h1 className="text-primary text-3xl font-black leading-tight tracking-[-0.033em]">
              <span className="material-symbols-outlined" onClick={
                () =>  {
                  navigate(sourcePage)
                }
              }>
                arrow_back
              </span> <br/>
              Review Your Order
            </h1>
            <p className="text-primary/80 text-base font-normal leading-normal">
              You're almost there! Finalize your selection below.
            </p>
          </div>
        </div>

        <div>
          <div className="flex flex-col lg:flex-row gap-8 px-4">
            <div className="flex flex-col flex-[2] gap-6">
              {
                !event ?
                (<p>Loading Event summary...</p>) :
                (
                <EventSummary event={event} loading={loading} error={error} sourcePage={sourcePage}/>
                )
              }

              <div>
                <h2 className="text-primary text-[22px] font-bold leading-tight tracking-[-0.015em] pb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">
                    confirmation_number
                  </span>
                  Your Tickets
                </h2>

                <div className="flex flex-col gap-4">
                  {!event ? 
                   (<p>Loading ticket options...</p>) :
                   event.tickets.map((ticket, _) => (
                    <TicketItem
                      key={ticket.id}
                      ticket={ticket}
                      setSubTotal={setSubTotal}
                      onChange={handleTicketChange}
                    />
                  ))}
                </div>
              </div>
            </div>

            <p>Get {} Tickets</p>

            <OrderSummary
              subtotal={subTotal}
              serviceFees={serviceFees}
              tax={tax}
              total={total}
              ticketQuantities={ticketQuantities}
              handleOrderPreparation={handleOrderPreparation}
              handleProceedToPayment={handleProceedToPayment}
              sourcePage={sourcePage}
              confirmSelection={confirmSelection}
              setConfirmSelection={setConfirmSelection}
            />
          </div>
        </div>
      </div>
    </div>
  </>
  );
}

export default OrderConfirmation;
