import { useState } from "react";

export default function TicketItem({ ticket, setSubTotal, onChange }) {
  const styles = {
    card:
      "flex flex-col items-stretch justify-start rounded-xl bg-surface-dark border border-surface-highlight overflow-hidden relative group",
    ticketCard:
      "flex-col sm:flex-row items-start sm:items-center gap-4 bg-surface-dark border border-surface-highlight rounded-xl p-4 justify-between transition-colors hover:border-primary/50 group",
    ticketIconContainer:
      "flex items-center justify-center rounded-lg bg-surface-highlight shrink-0 size-12 group-hover:bg-primary/20 group-hover:text-primary transition-colors",
    ticketQuantityControls:
      "flex items-center gap-3 text-primary bg-surface-highlight rounded-lg p-1",
    orderSummaryCard:
      "sticky top-24 bg-surface-dark border border-surface-highlight rounded-xl p-6 shadow-xl",
    buttonPrimary:
      "w-full bg-primary hover:bg-primary/90 text-white text-lg font-bold py-4 px-6 rounded-lg transition-all shadow-[0_0_20px_rgba(166,13,242,0.3)] hover:shadow-[0_0_30px_rgba(166,13,242,0.5)] flex items-center justify-center gap-2",
    buttonSecondary:
      "w-full bg-transparent hover:bg-surface-highlight text-text-secondary hover:text-white font-medium py-3 px-6 rounded-lg transition-colors border border-transparent hover:border-surface-highlight",
  };

  const [ticketQuantity, setTicketQuantity] = useState(0);
  const [status, setStatus] = useState("active");

  return (
    <div
      className={`${styles.ticketCard} ${
        status === "active" ? "flex" : "hidden"
      }`}
    >
      <div className="flex items-center gap-4 w-full sm:w-auto">
        <div className={styles.ticketIconContainer}>
          <span className="material-symbols-outlined text-[24px]">
            {ticket.type === "Regular"
              ? "local_activity"
              : "diamond"}
          </span>
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-primary text-lg font-bold leading-normal line-clamp-1">
            {ticket.type}
          </p>
          <p className="text-text-secondary text-sm font-normal leading-normal">
            {ticket.description}
          </p>
          <p className="text-primary font-bold mt-1 sm:hidden">
            ${ticket.price}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between w-full sm:w-auto gap-6 sm:gap-8 pl-[64px] sm:pl-0">
        <p className="text-primary font-bold hidden sm:block w-20 text-right">
          ${ticket.price}
        </p>

        <div className={styles.ticketQuantityControls}>
          <button
            className="text-base font-medium flex h-8 w-8 items-center justify-center rounded hover:bg-white/10 cursor-pointer transition-colors bg-white border-2 text-primary hover:text-red-500"
            onClick={() => {
              if (ticketQuantity) {
                setTicketQuantity((prev) => prev - 1);
                setSubTotal((prev) => prev - ticket.price);
              } else {
                setTicketQuantity(0);
              }
              onChange(ticket.type, ticketQuantity - 1);
            }}
          >
            <span className="material-symbols-outlined text-[18px]">
              remove
            </span>
          </button>

          <input
            type="number"
            className="text-base font-bold w-12 p-0 text-center bg-transparent focus:outline-0 focus:ring-0 border-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            value={ticketQuantity}
          />

          <button
            className="text-base font-medium flex h-8 w-8 items-center justify-center rounded bg-primary text-white cursor-pointer hover:bg-primary/90 transition-colors"
            onClick={() => {
              setTicketQuantity((prev) => prev + 1);
              setSubTotal((prev) => prev + ticket.price);
              onChange(ticket.type, ticketQuantity + 1);
            }}
          >
            <span className="material-symbols-outlined text-[18px]">
              add
            </span>
          </button>
        </div>

        <button
          className="text-red-500 hover:text-red-400 transition-colors p-2 rounded-full hover:bg-red-500/10"
          onClick={() => {
            const thisTicketPrice =
              ticketQuantity * ticket.price;
            setSubTotal((prev) => prev - thisTicketPrice);
            setTicketQuantity(0);
            setStatus("inactive");
            onChange(ticket.type, 0);
          }}
        >
          <span className="material-symbols-outlined text-[20px]">
            delete
          </span>
        </button>
      </div>
    </div>
  );
}
