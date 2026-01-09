import { useGetTicket } from "../contexts/GetTicketContext.jsx";
import EventSummary from "../components/order-confirmation-components/EventSummary.jsx";
import TicketItem from "../components/order-confirmation-components/TicketItem.jsx";
import OrderSummary from "../components/order-confirmation-components/OrderSummary.jsx";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useEvents } from "../contexts/EventContext.jsx";
import { useNavigate, useLocation } from "react-router-dom";

function OrderConfirmation() {
  const { eventId } = useParams();
  const {events, loading, error} = useEvents();
  const [event, setEvent] = useState(null);
  const navigate = useNavigate();


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

  const handleProceedToPayment = async () => {
    const payload = {
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
    if (location.state.sourcePage){
      switch (location.state.sourcePage){
        case "/":
          setSourcePage("/")
        return;
        case "/events":
          setSourcePage("/events")
        return;
      }
    }
  }, [])

  return (
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
                   event.tickets.map((ticket) => (
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
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderConfirmation;
