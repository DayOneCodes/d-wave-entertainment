function ContentManagement() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h3 className="text-white text-xl font-bold">Content Management</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Homepage Edit Card */}
        <div className="bg-surface-dark rounded-xl border border-border-dark p-6 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">home</span>
              <h4 className="text-white font-semibold">Homepage</h4>
            </div>
            <span className="text-xs text-text-muted">Last updated 2h ago</span>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs text-text-muted font-medium uppercase">
              Hero Title
            </label>
            <input
              className="bg-background-dark border border-border-dark rounded-lg px-3 py-2 text-sm text-white focus:border-primary focus:ring-0 w-full"
              type="text"
              value="Experience the Night"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs text-text-muted font-medium uppercase">
              Subtitle
            </label>
            <input
              className="bg-background-dark border border-border-dark rounded-lg px-3 py-2 text-sm text-white focus:border-primary focus:ring-0 w-full"
              type="text"
              value="The best parties in the city."
            />
          </div>

          <button className="mt-2 text-sm text-primary font-bold self-start hover:underline">
            Edit Full Page
          </button>
        </div>

        {/* About Page Edit Card */}
        <div className="bg-surface-dark rounded-xl border border-border-dark p-6 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">info</span>
              <h4 className="text-white font-semibold">About Us</h4>
            </div>
            <span className="text-xs text-text-muted">Last updated 1d ago</span>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs text-text-muted font-medium uppercase">
              Mission Statement
            </label>
            <textarea
              className="bg-background-dark border border-border-dark rounded-lg px-3 py-2 text-sm text-white focus:border-primary focus:ring-0 w-full resize-none"
              rows="3"
            >
              We bring people together through music and unforgettable experiences.
            </textarea>
          </div>

          <button className="mt-2 text-sm text-primary font-bold self-start hover:underline">
            Edit Full Page
          </button>
        </div>

        {/* Contact Info Card */}
        <div className="bg-surface-dark rounded-xl border border-border-dark p-6 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">
                contact_support
              </span>
              <h4 className="text-white font-semibold">Contact</h4>
            </div>
            <span className="text-xs text-text-muted">Last updated 5d ago</span>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs text-text-muted font-medium uppercase">
              Email Address
            </label>
            <input
              className="bg-background-dark border border-border-dark rounded-lg px-3 py-2 text-sm text-white focus:border-primary focus:ring-0 w-full"
              type="email"
              value="contact@nightlife.com"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs text-text-muted font-medium uppercase">
              Phone
            </label>
            <input
              className="bg-background-dark border border-border-dark rounded-lg px-3 py-2 text-sm text-white focus:border-primary focus:ring-0 w-full"
              type="text"
              value="+1 (555) 123-4567"
            />
          </div>

          <button className="mt-2 text-sm text-primary font-bold self-start hover:underline">
            Edit Full Page
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContentManagement;
