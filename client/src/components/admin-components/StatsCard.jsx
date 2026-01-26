export default function ({ name, icon, value, analysis}) {
  return (
      <div className="flex flex-col gap-2 rounded-xl p-6 border border-slate-200 bg-white dark:bg-[#111318]/50">
      <div className="flex justify-between items-center mb-1">
      <p className="text-slate-500 text-sm font-medium">{name}</p>
      <span className="material-symbols-outlined text-primary">{icon}</span>
      </div>
      <p className="text-slate-900 text-3xl font-bold">{value}</p>
      <p className="text-xs text-green-500 flex items-center gap-1 font-medium"><span className="material-symbols-outlined text-xs">trending_up</span>{analysis}</p>
      </div>
  )
}