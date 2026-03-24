
export default function TicketOption ({removeTicket, handleTicketUpdate, index}) {

  return (
            <div key={index + 1} className="bg-gray-50/50 p-4 rounded-xl border border-gray-100 space-y-4">
              <div className="flex items-center justify-between">
                <button
                 className="text-[9px] text-red-400 font-bold uppercase tracking-widest hover:text-red-600 transition-colors"
                 onClick={() => removeTicket(index)}
                 >Remove</button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="block space-y-1.5">
                  <p className="text-primary text-[9px] font-bold tracking-widest uppercase">Type</p>
                  <input 
                    name={`type-${index}`} 
                    type="text" placeholder="e.g. VIP" 
                    className="w-full bg-white border border-input-border rounded-lg h-10 px-3 text-sm focus:border-primary focus:outline-none" 
                    onChange={(e) => handleTicketUpdate(index, "type", e.target.value)}
                  />
                </label>
                <label className="block space-y-1.5">
                  <p className="text-primary text-[9px] font-bold tracking-widest uppercase">Price (£)</p>
                  <input 
                    name={`price-${index}`} 
                    type="number" 
                    placeholder="0.00" 
                    className="w-full bg-white border border-input-border rounded-lg h-10 px-3 text-sm focus:border-primary focus:outline-none"
                    onChange={(e) => handleTicketUpdate(index, "price", e.target.value)}
                  />
                </label>
              </div>

              <label className="block space-y-1.5">
                <p className="text-primary text-[9px] font-bold tracking-widest uppercase">Description</p>
                <input 
                  name={`description-${index}`} 
                  type="text" placeholder="Access to private bar..."
                  className="w-full bg-white border border-input-border rounded-lg h-10 px-3 text-sm focus:border-primary focus:outline-none"
                  onChange={(e) => handleTicketUpdate(index, "description", e.target.value)}
                />
              </label>

              <label className="block space-y-1.5">
                <p className="text-primary text-[9px] font-bold tracking-widest uppercase">Quantity</p>
                <input
                  name={`quantity-available-${index}`}
                  type="number"
                  placeholder="50"
                  className="w-full bg-white border border-input-border rounded-lg h-10 px-3 text-sm focus:border-primary focus:outline-none"
                  onChange={(e) => handleTicketUpdate(index, "quantityAvailable", e.target.value)}
                />
              </label>
            </div>
  )
}