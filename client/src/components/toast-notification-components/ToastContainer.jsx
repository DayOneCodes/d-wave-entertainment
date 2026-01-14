import Toast from "./Toast";

function ToastContainer ({toasts}) {
  return (
    <div className="fixed top-6 md:right-6 z-50 flex items-center flex-col gap-3">
      {toasts.map(t => (
        <Toast key={t.id} {...t}/>
      ))}
    </div>
  )
}

export default ToastContainer