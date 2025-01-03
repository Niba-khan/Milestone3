export default function ContactUs() {
    return (
      <div className="min-h-screen py-10 px-6">
        {/* Header */}
        <h1 className="text-center text-3xl font-semibold text-gray-800 mb-8">
          Contact Us
        </h1>
  
        {/* Contact Information Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div className="text-center">
            <h2 className="font-semibold text-gray-700 mb-2">Customer Service</h2>
            <p>Tel: 123.456.7890</p>
            <p>Email: khan@gmail.com</p>
          </div>
          <div className="text-center">
            <h2 className="font-semibold text-gray-700 mb-2">Visit Our Showroom</h2>
            <p>Defence Street</p>
            <p>karachi, CA 94158</p>
          </div>
          <div className="text-center">
            <h2 className="font-semibold text-gray-700 mb-2">Opening Hours</h2>
            <p>Mon. - Fri.: 8am - 8pm</p>
            <p>Saturday: 9am - 7pm</p>
            <p>Sunday: 9am - 8pm</p>
          </div>
        </div>
  
        {/* Form Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-center text-xl font-semibold text-gray-800 mb-6">
            Get in Touch
          </h2>
          <form className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  required
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  required
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Type your message here...
              </label>
              <textarea
                id="message"
              
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  