function Toast ({message, type}) {
  const styles = {
    success: "bg-green-600",
    error: "bg-red-600",
    info: "bg-background-dark"
  }

  return(
    <div className={`w-[95%] px-3 py-3 rounded flex items-center text-white shadow ${styles[type]}`}>
      {message}
    </div>
  )
}

export default Toast