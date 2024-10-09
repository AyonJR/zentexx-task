import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast"; 

const UpdateItem = () => {
  const item = useLoaderData(); 
  const [formData, setFormData] = useState({
    r1: item.r1,
    r2: item.r2,
    r3: item.r3,
    r4: item.r4,
    r5: item.r5,
    r6: item.r6,
    r7: item.r7,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://task-server-rho-peach.vercel.app/price/${item._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        toast.success(data.message); 
      } else {
        toast.error("Error updating item"); // Error message using react-hot-toast
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Error submitting form"); // Error toast for form submission failure
    }
  };
  
  return (
    <div className="min-h-screen mt-10 text-white flex items-center justify-center ">
  <div className="bg-[#222624] shadow-md rounded-lg px-8 py-6 w-full max-w-2xl">
    <Toaster />
    <h2 className="text-3xl font-bold text-center mb-6">Update </h2>
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Form Fields */}
      <div>
        <label className="block mb-2 font-medium">Trading Period</label>
        <input
          type="text"
          name="r1"
          value={formData.r1}
          onChange={handleChange}
          className="border px-4 py-2 w-full rounded-md focus:outline-none "
        />
      </div>

      <div>
        <label className="block mb-2 font-medium">Profit Target</label>
        <input
          type="text"
          name="r2"
          value={formData.r2}
          onChange={handleChange}
          className="border px-4 py-2 w-full rounded-md focus:outline-none "
        />
      </div>

      <div>
        <label className="block mb-2 font-medium">Maximum Daily Loss</label>
        <input
          type="text"
          name="r3"
          value={formData.r3}
          onChange={handleChange}
          className="border px-4 py-2 w-full rounded-md focus:outline-none "
        />
      </div>

      <div>
        <label className="block mb-2 font-medium">Maximum Overall Loss</label>
        <input
          type="text"
          name="r4"
          value={formData.r4}
          onChange={handleChange}
          className="border px-4 py-2 w-full rounded-md focus:outline-none "
        />
      </div>

      <div>
        <label className="block mb-2 font-medium">Drawdown Type</label>
        <input
          type="text"
          name="r5"
          value={formData.r5}
          onChange={handleChange}
          className="border px-4 py-2 w-full rounded-md focus:outline-none "
        />
      </div>

      <div>
        <label className="block mb-2 font-medium">News Trading</label>
        <input
          type="text"
          name="r6"
          value={formData.r6}
          onChange={handleChange}
          className="border px-4 py-2 w-full rounded-md focus:outline-none "
        />
      </div>

      <div>
        <label className="block mb-2 font-medium">Weekend Holding</label>
        <input
          type="text"
          name="r7"
          value={formData.r7}
          onChange={handleChange}
          className="border px-4 py-2 w-full rounded-md focus:outline-none "
        />
      </div>

      {/* Submit button */}
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-custom-gradient text-white font-semibold w-full px-6 py-2 rounded-lg  transition duration-300" 
        >
          Update
        </button>
      </div>
    </form>
  </div>
</div>

  );
};

export default UpdateItem;
