const TicketListItem = ({title, description, soldOut, price}) => {
  return (
    <div className={`flex items-center justify-between p-4 rounded-xl ${soldOut ? "border border-white/5 bg-white/5 opacity-50" : "border-2 hover:border-primary/30 active:border-primary/30 active:bg-primary/5 hover:bg-primary/5"}`}>
    <div className="flex flex-col">
    <span className="text-sm font-bold tracking-wide">{title}</span>
    <span className="text-xs text-primary/60">{description}</span>
    </div>
    <span className={`font-black ${soldOut ? "text-xs text-red-400" : "text-lg text-primary"}`}>{
    soldOut ? 
    <p>SOLD <br/> OUT</p> : price}</span>
    </div>
  )
};

export default TicketListItem;