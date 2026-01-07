export default function () {
    const [tickets, setTickets] = useState([
    { id: 1, type: "Regular", description: "General admission entry before 11 PM", price: 25, quantity: 2, icon: "local_activity" },
    { id: 2, type: "VIP Access", description: "Skip the line + 1 drink ticket", price: 150, quantity: 1, icon: "diamond" },
  ]);

  return (
    <div>
        <h2 className="text-primary text-[22px] font-bold leading-tight tracking-[-0.015em] pb-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">confirmation_number</span>
          Your Tickets
        </h2>
        <div className="flex flex-col gap-4">
          {tickets.map((ticket) => (
            <TicketItem
              key={ticket.id}
              ticket={ticket}
              onAdd={() => updateQuantity(ticket.id, 1)}
              onRemove={() => updateQuantity(ticket.id, -1)}
              onDelete={() => deleteTicket(ticket.id)}
            />
          ))}
        </div>
    </div>
  )
}