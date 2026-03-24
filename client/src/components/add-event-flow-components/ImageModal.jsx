import { useRef, useState } from "react";
import Loading from "../Loading.jsx";
import Success from "../Success.jsx";

export default function ImageModal ({close, next, callback, admin, photo, showToast }) {

const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);
const [selectedImage, setSelectedImage] = useState(null)
const form = useRef();

const handleImageChange = () => {
  let imageFile = form.current?.imageUrl?.files?.[0];
  if (imageFile) {
    setSelectedImage(imageFile)
  }
}

const handleProceed = async (e) => {
 e.preventDefault();
 setLoading(true)
 next(<Loading message={"Uploading Event Image"}/>);
 let imageUrl = form.current?.imageUrl?.files?.[0];

 try {
    if (!imageUrl) {
    imageUrl = null;
    } 

    imageUrl = await photo(imageUrl);
    next(<Loading message={"Creating Event"}/>);


    const eventImage = {
      imageUrl : imageUrl,
    };

    callback.addImage(eventImage);
    const eventPayload = callback.eventDetails();
    console.log(eventPayload);
    console.log("hold")
    await admin(eventPayload);
    console.log("fire")
    showToast(`${eventPayload.title} has been created successfully`)
    next(<Success close={close} message="Event created successfully"/>)

 } catch (err) {

    console.log(err.message)
    setError(err.message)

 } finally {

    setLoading(false)
 }
// next(<Success close={close} next={next} callback={callback}/>);
}
  return (
    <div className="flex items-center justify-center min-h-screen p-4 sm:p-6 lg:p-8 bg-transparent">
      <div className="bg-white border border-input-border shadow-2xl rounded-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in duration-300">
        {/* Header Section */}
        <div className="p-6 sm:p-8 border-b border-gray-100 bg-gradient-to-b from-gray-50/50 to-transparent">
          <h1 className="text-xl sm:text-2xl font-poppins text-primary tracking-wide uppercase">
            Visual Experience
          </h1>
          <p className="text-gray-400 text-[10px] uppercase tracking-widest mt-1">Step 4: Media & Artwork</p>
        </div>

        <form ref={form} className="p-6 sm:p-8 space-y-6">
          {/* Upload Area */}
          <div className="space-y-4">
            <p className="text-primary text-[9px] sm:text-[10px] font-bold uppercase tracking-widest px-1">Event Cover Image</p>
            
            <label className="group relative flex flex-col items-center justify-center w-full h-48 sm:h-64 border-2 border-dashed border-input-border rounded-2xl bg-input-background hover:bg-gray-50 hover:border-primary transition-all cursor-pointer overflow-hidden">
              <div className="flex flex-col items-center justify-center pt-5 pb-6 text-center px-4">
                <div className="size-12 rounded-full bg-white shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary text-2xl">add_photo_alternate</span>
                </div>
                {
                  selectedImage ? 
                  
                  (
                    <p className="font-bold text-primary w-[280px]">
                      {selectedImage.name}
                    </p>
                  ) 
                  
                  :

                <>
                  <p className="text-sm text-black font-semibold mb-1 w-[280px]">Click to upload or drag and drop</p>
                  <p className="text-xs text-gray-500">High-resolution JPG, PNG or WEBP (Max. 5MB)</p>
                </>
                }
              </div>
              <input type="file" className="hidden" name="imageUrl" onChange={() => {
                handleImageChange();
              }} accept="image/*" />
            </label>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col-reverse sm:flex-row items-center justify-end gap-3 sm:gap-4 pt-2">
            <button 
              className="w-full sm:w-auto text-gray-500 hover:text-primary text-[10px] font-bold uppercase tracking-[2px] py-2 transition-colors" 
              onClick={(e) => { e.preventDefault(); close(); }}
              type="button"
            >
              Discard
            </button>

            <button 
              type="submit" 
              className="w-full sm:w-auto bg-primary text-white px-8 py-3 rounded-lg text-xs font-bold uppercase tracking-[2px] hover:bg-brand-hover shadow-lg transition-all active:scale-95" 
              onClick={handleProceed}
            >
              Finalize Event
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}