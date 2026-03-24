import DescriptionModal from "./DescriptionModal.jsx";

export default function ModalsContainer ({display, modal}) {
  return (
      <div className={`h-full ${!display ? "hidden" : "flex"} items-center justify-center fixed inset-0 z-50 w-full bg-black/80 backdrop-blur-sm px-4`}>
        { modal }      
      </div>
  )
};