import Toast from "./Toast";

function ToastContainer ({toasts}) {
  return (
    <div className="fixed w-[100%] top-6 md:right-6 z-50 flex justify-center items-center flex-col gap-3">
      {toasts.map(t => (
        <Toast key={t.id} {...t}/>
      ))}
    </div>
  )
}

export default ToastContainer