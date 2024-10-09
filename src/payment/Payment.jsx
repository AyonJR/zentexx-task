import { useState } from "react";
import { SiStartrek } from "react-icons/si";

const Payment = ({ total }) => {
  const [addons, setAddons] = useState({
    payout7Days: false,
    profitSplit: false,
    bothAddons: false,
  });

  // Ensure total is a valid number
  const baseTotal = parseFloat(total) || 0;

  // Calculate the new total
  const calculateTotal = () => {
    let newTotal = baseTotal;

    // Add 5% if "7 day payout vs 14 Days" is selected
    if (addons.payout7Days) {
      newTotal += (baseTotal * 5) / 100;
    }

    // Add 5% if "90% profit split vs 85%" is selected
    if (addons.profitSplit) {
      newTotal += (baseTotal * 5) / 100;
    }

    // Add 10% if "Both (Save 5%)" is selected
    if (addons.bothAddons) {
      newTotal += (baseTotal * 10) / 100;
    }

    // Ensure newTotal is a number and fix to 2 decimal places
    return typeof newTotal === 'number' ? newTotal.toFixed(2) : '0.00';
  };

  const handleCheckboxChange = (addonName) => {
    setAddons((prevAddons) => ({
      ...prevAddons,
      [addonName]: !prevAddons[addonName],
    }));
  };

  return (
    <div>
      <div className="relative p-[1px] rounded-xl bg-gradient-to-r from-[#007991] to-[#77FED6]">
        <div className="p-5 rounded-xl shadow-md bg-[#050907]">
          <h2 className="text-xl text-white">Available Addons</h2>

          {/* Addon Checkboxes */}
          <div className="mt-4 space-y-4">
            {/* First Checkbox: "7 day payout vs 14 Days" */}
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={addons.payout7Days}
                onChange={() => handleCheckboxChange("payout7Days")}
              />
              <div className="w-4 h-4 rounded-full border-2 border-[#007991] peer-checked:bg-custom-gradient peer-checked:border-blue-500 transition-colors"></div>
              <span className="text-white ml-4">7 day payout vs 14 Days</span>
              <div className="ml-auto text-white">+5%</div>
            </label>

            {/* Second Checkbox: "90% profit split vs 85%" */}
            <label className="flex items-center cursor-pointer w-full">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={addons.profitSplit}
                onChange={() => handleCheckboxChange("profitSplit")}
              />
              <div className="w-4 h-4 rounded-full border-2 border-[#007991] peer-checked:bg-custom-gradient peer-checked:border-blue-500 transition-colors"></div>
              <span className="text-white ml-4">90% profit split vs 85%</span>
              <div className="ml-auto text-white">+5%</div>
            </label>

            {/* Third Checkbox: "Both (Save 5%)" */}
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={addons.bothAddons}
                onChange={() => handleCheckboxChange("bothAddons")}
              />
              <div className="w-4 h-4 rounded-full border-2 border-[#007991] peer-checked:bg-custom-gradient peer-checked:border-blue-500 transition-colors"></div>
              <span className="text-white ml-4">Both (Save 5%)</span>
              <div className="ml-auto text-white">+10%</div>
            </label>
          </div>
        </div>
      </div>

      {/* Order Summary */}
      <div>
        <div className="relative p-[1px] mt-10 rounded-xl">
          <div className="p-5 rounded-xl shadow-md bg-[#050907]">
            <h2 className="text-2xl font-semibold text-white">Your Order</h2>

            <div className="mt-4 space-y-4">
              <label className="flex items-center cursor-pointer">
                <span className="text-white">Product</span>
                <div className="ml-auto text-white">Subtotal</div>
              </label>

              <label className="flex items-center cursor-pointer w-full">
                <span className="text-white">
                  2 Step - Power Challenge (100K) * 1
                </span>
                <div className="ml-auto text-white">${baseTotal}</div>
              </label>

              <label className="flex items-center cursor-pointer">
                <span className="text-white">Subtotal</span>
                <div className="ml-auto text-white">${baseTotal}</div>
              </label>

              {/* Addon Summary */}
              {addons.payout7Days && (
                <label className="flex items-center cursor-pointer">
                  <span className="text-white">7 day payout vs 14 days</span>
                  <div className="ml-auto text-white">+5%</div>
                </label>
              )}

              {addons.profitSplit && (
                <label className="flex items-center cursor-pointer">
                  <span className="text-white">90% profit split vs 85%</span>
                  <div className="ml-auto text-white">+5%</div>
                </label>
              )}

              {addons.bothAddons && (
                <label className="flex items-center cursor-pointer">
                  <span className="text-white">Both Addons</span>
                  <div className="ml-auto text-white">+10%</div>
                </label>
              )}

              {/* Total */}
              <label className="flex items-center cursor-pointer">
                <span className="text-white">Total</span>
                <div className="ml-auto text-white">${calculateTotal()}</div>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Tazapay Section */}
      <div>
        <div className="relative p-[1px] mt-10 rounded-xl">
          <div className="p-5 rounded-xl shadow-md bg-[#050907]">
            <label className="flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-4 h-4 rounded-full border-2 border-[#007991] peer-checked:bg-custom-gradient peer-checked:border-blue-500 transition-colors"></div>
              <span className="text-white font-normal text-base custom-font ml-4">
                Tazapay
              </span>
            </label>

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
                <input type="checkbox" />
                <span className="text-white text-sm ml-4">
                  I have read and agree to the website terms and conditions{" "}
                  <br />
                  <span className="ml-7">
                    and I agree to receive email & sms updates and news.
                  </span>
                </span>
              </div>

              <div>
                <input type="checkbox" />
                <span className="text-white text-sm ml-4">
                  Create a new account with these information{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-5">
          <button className="w-full bg-custom-gradient font-semibold text-white rounded-md py-2 flex items-center justify-center gap-2">
            <SiStartrek className="text-xl"></SiStartrek>
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
