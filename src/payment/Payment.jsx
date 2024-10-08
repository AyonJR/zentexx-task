const Payment = () => {
  return (
    <div>
      <div className="relative p-[1px] rounded-xl bg-gradient-to-r from-[#007991] to-[#77FED6]">
        <div className="p-5 rounded-xl shadow-md bg-[#050907]">
          <h2 className="text-xl  text-white">Available Addons</h2>
          {/* input checked */}
          <div className="mt-4 space-y-4">
            {/* First Checkbox: "7 day payout vs 14 Days" */}
            <label className="flex items-center  cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-4 h-4 rounded-full border-2 border-[#007991] peer-checked:bg-custom-gradient peer-checked:border-blue-500 transition-colors"></div>
              <span className="text-white ml-4">7 day payout vs 14 Days</span>
              <div className="ml-auto text-white">+5%</div>
            </label>

            {/* Second Checkbox: "90 % profit split vs 85 %" */}
            <label className="flex items-center cursor-pointer w-full">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-4 h-4 rounded-full border-2 border-[#007991] peer-checked:bg-custom-gradient peer-checked:border-blue-500 transition-colors"></div>
              <span className="text-white ml-4">90% profit split vs 85%</span>
              <div className="ml-auto text-white">+0%</div>
            </label>

            {/* Third Checkbox: "Both (Save 5 %)" */}
            <label className="flex items-center  cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-4 h-4 rounded-full border-2 border-[#007991] peer-checked:bg-custom-gradient peer-checked:border-blue-500 transition-colors"></div>
              <span className="text-white ml-4">Both (Save 5%)</span>
              <div className="ml-auto text-white">+0%</div>
            </label>
          </div>
        </div>
      </div>

      {/* order card */}
      <div>
        <div className="relative p-[1px] mt-10 rounded-xl ">
          <div className="p-5 rounded-xl shadow-md bg-[#050907]">
            <h2 className="text-2xl font-semibold  text-white">Your Order</h2>
            {/* input checked */}
            <div className="mt-4 space-y-4">
              {/* First Checkbox: "7 day payout vs 14 Days" */}
              <label className="flex items-center  cursor-pointer">
                <span className="text-white ">Product</span>
                <div className="ml-auto text-white">Subtotal</div>
              </label>

              {/* Second Checkbox: "90 % profit split vs 85 %" */}
              <label className="flex items-center cursor-pointer w-full">
                <span className="text-white">
                  2 Step - Power Challenge (100K) * 1
                </span>
                <div className="ml-auto text-white">$400.00</div>
              </label>

              {/* Third Checkbox: "Both (Save 5 %)" */}
              <label className="flex items-center  cursor-pointer">
                <span className="text-white ">Subtotal</span>
                <div className="ml-auto text-white">$400.00</div>
              </label>

              <label className="flex items-center  cursor-pointer">
                <span className="text-white ">7 day payout vs 14 days</span>
                <div className="ml-auto text-white">+$20.00</div>
              </label>
              <label className="flex items-center  cursor-pointer">
                <span className="text-white ">Total</span>
                <div className="ml-auto text-white">$420.00</div>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Tazapay card */}

      <div>
        <div className="relative p-[1px] mt-10 rounded-xl ">
          <div className="p-5 rounded-xl shadow-md bg-[#050907]">
            <label className="flex items-center  cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-4 h-4 rounded-full border-2 border-[#007991] peer-checked:bg-custom-gradient peer-checked:border-blue-500 transition-colors"></div>
              <span className="text-white font-normal text-base custom-font ml-4">
                Tazapay
              </span>
            </label>

            {/* input checked */}
            <div className="mt-4 space-y-4">
              <p>
                Your personal data will be used to process your order, support
                your experience throughout this website and for other purposes
                described in our{" "}
                <span className="bg-clip-text font-medium text-transparent bg-gradient-to-r from-[#007991] to-[#77FED6]">
                  privacy policy.
                </span>
              </p>

              <div>
                <input type="checkbox" name="" id="" />
                <span className="text-white text-sm ml-4">
                  I have read and agree to the website terms and conditions{" "}
                  <br />{" "}
                  <span className="ml-7">
                    and I agree to receive email & sms updates and news.
                  </span>{" "}
                </span>
              </div>

              <div>
                <input type="checkbox" name="" id="" />
                <span className="text-white text-sm ml-4">
                  Create a new account with these information{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* pay button */}
      <div className="mx-5">
      <button
            className="w-full bg-custom-gradient font-semibold text-white rounded-md py-2 flex items-center justify-center gap-2"
          >
            Start Challenge
          </button>
      </div>
    </div>
  );
};

export default Payment;
