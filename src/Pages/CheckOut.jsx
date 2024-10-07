import { useParams } from "react-router-dom";

const CheckOut = () => {
  const { total } = useParams();

  return (
    <div>
      <div className="flex mx-20 mt-32">
        {/* form */}
        <div className="w-2/3 p-8 rounded-lg shadow-md" style={{ backgroundColor: "#050907" }}>
          <h2 className="text-2xl font-medium mb-6 text-white">Billing Details</h2>
          <form>
            {/* First Name and Last Name */}
            <div className="flex gap-4 mb-4">
              <div className="w-1/2">
                <label htmlFor="firstName" className="block text-sm text-gray-300">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="mt-1 block w-full p-2  rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  style={{ backgroundColor: "#222624", color: "white" }}
                  required
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="lastName" className="block text-sm text-gray-300">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="mt-1 block w-full p-2 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  style={{ backgroundColor: "#222624", color: "white" }}
                  required
                />
              </div>
            </div>

            {/* Company Name */}
            <div className="mb-4">
              <label htmlFor="companyName" className="block text-sm text-gray-300">
                Company Name (Optional)
              </label>
              <input
                type="text"
                id="companyName"
                className="mt-1 block w-full p-2 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                style={{ backgroundColor: "#222624", color: "white" }}
              />
            </div>

            {/* Country/Region */}
            <div className="mb-4">
              <label htmlFor="country" className="block text-sm text-gray-300">
                Country / Region *
              </label>
              <input
                type="text"
                id="country"
                className="mt-1 block w-full p-2  rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                style={{ backgroundColor: "#222624", color: "white" }}
                required
              />
            </div>

            {/* Street Address */}
            <div className="mb-4">
              <label htmlFor="streetAddress" className="block text-sm text-gray-300">
                Street Address *
              </label>
              <input
                type="text"
                id="streetAddress"
                className="mt-1 block w-full p-2 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                style={{ backgroundColor: "#222624", color: "white" }}
                required
              />
            </div>

            {/* Town/City */}
            <div className="mb-4">
              <label htmlFor="city" className="block text-sm text-gray-300">
                Town / City *
              </label>
              <input
                type="text"
                id="city"
                className="mt-1 block w-full p-2 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                style={{ backgroundColor: "#222624", color: "white" }}
                required
              />
            </div>

            {/* Post Code / ZIP */}
            <div className="mb-4">
              <label htmlFor="postCode" className="block text-sm text-gray-300">
                Post Code / ZIP *
              </label>
              <input
                type="text"
                id="postCode"
                className="mt-1 block w-full p-2  rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                style={{ backgroundColor: "#222624", color: "white" }}
                required
              />
            </div>

            {/* Phone */}
            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm text-gray-300">
                Phone *
              </label>
              <input
                type="tel"
                id="phone"
                className="mt-1 block w-full p-2 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                style={{ backgroundColor: "#222624", color: "white" }}
                required
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm  text-gray-300">
                Email *
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full p-2  rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                style={{ backgroundColor: "#222624", color: "white" }}
                required
              />
            </div>

         
          </form>
        </div>

        {/* payment */}
        <div className="w-1/2 p-8">
          {/* You can add your payment section here */}
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
