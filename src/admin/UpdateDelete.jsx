import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast"; 

const UpdateDelete = () => {
  const [prices, setPrices] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null); // Holds the ID of the item to delete

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/price`);
        setPrices(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const confirmDelete = (id) => {
    setDeleteId(id); // Set the ID of the item to delete
    setShowModal(true); // Show the confirmation modal
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/price/${deleteId}`);
      setPrices(prices.filter((price) => price._id !== deleteId)); // Update state after delete
      toast.success("Item deleted successfully!");
    } catch (error) {
      console.error("Error deleting item:", error);
      toast.error("Failed to delete item.");
    }
    setShowModal(false); // Close the modal after deletion
    setDeleteId(null); // Reset the ID
  };

  return (
    <div>
        <Toaster></Toaster>
      <div className="overflow-x-auto mt-10">
        <table className="table-auto text-white w-full border-collapse">
          <thead>
            <tr>
              <th className="border px-4 py-2">Trading Period</th>
              <th className="border px-4 py-2">Profit Target</th>
              <th className="border px-4 py-2">Maximum Daily Loss</th>
              <th className="border px-4 py-2">Maximum Overall Loss</th>
              <th className="border px-4 py-2">Drawdown Type</th>
              <th className="border px-4 py-2">News Trading</th>
              <th className="border px-4 py-2">Weekend Holding</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {prices.map((price) => (
              <tr key={price._id}>
                <td className="border px-4 py-2">{price.r1}</td>
                <td className="border px-4 py-2">{price.r2}</td>
                <td className="border px-4 py-2">{price.r3}</td>
                <td className="border px-4 py-2">{price.r4}</td>
                <td className="border px-4 py-2">{price.r5}</td>
                <td className="border px-4 py-2">{price.r6}</td>
                <td className="border px-4 py-2">{price.r7}</td>
                <td className="border px-4 py-2">
                  <Link to={`/updateItem/${price._id}`}>
                    <button className="bg-black border border-[#007991] text-white px-2 py-1 rounded mr-2">
                      Update
                    </button>
                  </Link>
                  <button
                    className="bg-black border border-[#77FED6] text-white px-2 py-1 rounded"
                    onClick={() => confirmDelete(price._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for Delete Confirmation */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Confirm Delete</h2>
            <p className="mb-4">Are you sure you want to delete this item?</p>
            <div className="flex justify-end">
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateDelete;
