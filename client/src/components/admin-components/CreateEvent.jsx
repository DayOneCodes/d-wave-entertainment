import { useState, useMemo } from "react";



export default function CreateEvent() {
  const [nextpageMessage, setNextPageMessage] = useState("");

  
  return (
    <div className="flex-1 overflow-y-auto p-6 md:p-10 scroll-smooth">
      <div className="max-w-5xl mx-auto flex flex-col gap-8">

        {/* Header */}
        <div className="flex flex-col gap-1">
          <h2 className="text-primary text-3xl font-bold tracking-tight">Create New Event</h2>
          <p className="text-text-muted">
            Fill in the details below to publish a new party or show.
          </p>
        </div>

        <form className="flex flex-col gap-8 pb-12">

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* LEFT COLUMN */}
            <div className="lg:col-span-1 flex flex-col gap-6">

              {/* Event Media */}
              <div className="bg-surface-dark rounded-xl border border-border-dark p-6 flex flex-col gap-4">
                <h3 className="text-primary font-semibold">Event Media</h3>

                <div className="w-full aspect-[4/3] rounded-lg border-2 border-dashed border-border-dark hover:border-primary/50 bg-background-dark/50 flex flex-col items-center justify-center cursor-pointer transition-colors group relative overflow-hidden">
                  <input
                    type="file"
                    accept="image/*,video/*"
                    className="absolute inset-0 opacity-0 cursor-pointer z-10"
                  />
                  <span className="material-symbols-outlined text-4xl text-text-muted group-hover:text-primary mb-2 transition-colors">
                    add_photo_alternate
                  </span>
                  <p className="text-xs text-text-muted text-center px-4">
                    Drag and drop or click to upload cover image
                  </p>
                </div>

                <p className="text-xs text-text-muted">
                  Recommended size: 1200x600px. Max 5MB.
                </p>
              </div>

              {/* Publish Settings */}
              <div className="bg-surface-dark rounded-xl border border-border-dark p-6 flex flex-col gap-4">
                <h3 className="text-primary font-semibold">Event Category</h3>

                <div className="flex flex-col gap-2">
                  <select className="bg-white/10 border border-border-dark rounded-lg px-3 py-2.5 text-sm text-primary focus:border-primary focus:ring-0 w-full">
                    <option value="active">Club Night</option>
                    <option value="archived">After Party</option>
                    <option value="archived">All White Party</option>
                    <option value="archived">Rooftop</option>

                  </select>
                </div>

                {/* Feature to allow user schedule event update. To be added to update */}
                {/* <div className="flex flex-col gap-2">
                  <label className="text-xs text-text-muted font-medium uppercase">
                    Schedule Post
                  </label>

                  <div className="flex items-center gap-3">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="visibility"
                        defaultChecked
                        className="text-primary focus:ring-primary bg-background-dark border-border-dark"
                      />
                      <span className="text-sm text-white">Public</span>
                    </label>

                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="visibility"
                        className="text-primary focus:ring-primary bg-background-dark border-border-dark"
                      />
                      <span className="text-sm text-white">Private</span>
                    </label>
                  </div>
                </div> */}
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="lg:col-span-2 flex flex-col gap-6">

              {/* Event Details */}
              <div className="bg-surface-dark rounded-xl border border-border-dark p-6 md:p-8 flex flex-col gap-6">
                <h3 className="text-primary text-xl font-bold border-b border-border-dark pb-4">
                  Event Details
                </h3>

                <div className="flex flex-col gap-2">
                  <label className="text-xs text-text-muted font-medium uppercase">
                    Event Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Summer Sunset Festival 2024"
                    className="bg-white/10 border border-border-dark rounded-lg px-4 py-3 text-sm text-white focus:border-primary focus:ring-0 w-full placeholder:text-text-muted/50"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {["Date", "Time", "Ticket Url"].map((label, i) => (
                    <div key={i} className="flex flex-col gap-2">
                      <label className="text-xs text-text-muted font-medium uppercase">
                        {label}{i === 0 && <span className="text-red-500">*</span>}
                      </label>
                      <div className="relative">
                        <span className="material-symbols-outlined absolute left-3 top-2.5 text-text-muted text-[20px]">
                          {label === "Date" ? "calendar_today" : label === "Time" ? "schedule" : "link"}
                        </span>
                        <input
                          type={label === "Date" ? "date" : label === "Time" ? "time" : "url"}
                          className="bg-white/10 border border-border-dark rounded-lg pl-10 pr-4 py-2.5 text-sm text-primary focus:border-primary focus:ring-0 w-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs relative text-white font-medium uppercase bg-primary w-[57%] flex justify-center items-center p-1">
                    Add Ticket Options <span className="absolute p-1 -right-6 text-primary">+</span>
                  </label>

                  <input
                    type="text"
                    placeholder="e.g. Summer Sunset Festival 2024"
                    className="bg-white/10 border border-border-dark rounded-lg px-4 py-3 text-sm text-white focus:border-primary focus:ring-0 w-full placeholder:text-text-muted/50"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs text-text-muted font-medium uppercase">
                      Venue Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Club Vertex"
                      className="bg-white/10 border border-border-dark rounded-lg px-4 py-2.5 text-sm text-white focus:border-primary focus:ring-0 w-full"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs text-text-muted font-medium uppercase">
                      Address
                    </label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3 top-2.5 text-text-muted text-[20px]">
                        location_on
                      </span>
                      <input
                        type="text"
                        placeholder="e.g. 123 Neon Ave, Downtown"
                        className="bg-white/10 border border-border-dark rounded-lg pl-10 pr-4 py-2.5 text-sm text-white focus:border-primary focus:ring-0 w-full"
                      />
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-text-muted font-medium uppercase">
                    Description
                  </label>

                  <div className="border border-border-dark rounded-lg overflow-hidden bg-white/10">
                    <div className="flex items-center gap-1 p-2 border-b border-border-dark bg-surface-dark">
                      {[
                        "format_bold",
                        "format_italic",
                        "format_underlined",
                        "format_list_bulleted",
                        "format_list_numbered",
                        "link",
                      ].map(icon => (
                        <button
                          key={icon}
                          type="button"
                          className="p-1.5 rounded hover:bg-white/10 text-text-muted hover:text-white transition-colors"
                        >
                          <span className="material-symbols-outlined text-[18px]">
                            {icon}
                          </span>
                        </button>
                      ))}
                    </div>

                    <textarea
                      placeholder="Describe the event details..."
                      className="w-full bg-white/10 text-black p-4 text-sm focus:outline-none border-none resize-y min-h-[160px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Buttons */}
          <div className="flex items-center justify-end gap-4 pt-4 border-t border-border-dark">
            <button
              type="button"
              className="px-6 py-2.5 rounded-lg border border-border-dark text-text-muted hover:text-white hover:bg-white/5 text-sm font-semibold transition-colors"
            >
              Cancel
            </button>

            <button
              type="button"
              className="px-6 py-2.5 rounded-lg bg-primary hover:bg-primary-dark text-white text-sm font-bold shadow-lg shadow-primary/25 transition-all flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-[20px]">
                save
              </span>
              
              save event
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}