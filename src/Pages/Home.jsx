import { useEffect, useState } from "react";
import Cards from "../layout/Cards";
import Funding from "../layout/Funding";
import axios from "axios";
import Footer from "../layout/Footer";

const Home = () => {
  const [standardFunding, setStandardFunding] = useState([]);
  const [instantFunding, setInstantFunding] = useState([]);
  const [selectedButton, setSelectedButton] = useState("");
  const [selectedPricing, setSelectedPricing] = useState([]);
  const [filteredPricing, setFilteredPricing] = useState([]); // State for filtered pricing
  const [price, setPrice] = useState([]);

  const data2 = filteredPricing.length > 0 ? filteredPricing[0] : {};
  const total = data2.r7;
  console.log(total);

  // Standard Funding
  const handleStandardFunding = () => {
    const fetchStandardFunding = async () => {
      try {
        const response = await axios.get("http://localhost:5000/standardFunding");
        setStandardFunding(response.data);
      } catch (error) {
        console.error("Error fetching standard funding data:", error);
      }
    };

    fetchStandardFunding();
    setSelectedButton("standard");
  };

  // Instant Funding
  const handleInstantFunding = () => {
    const fetchInstantFunding = async () => {
      try {
        const response = await axios.get("http://localhost:5000/instantFunding");
        setInstantFunding(response.data);
      } catch (error) {
        console.error("Error fetching instant funding data:", error);
      }
    };

    fetchInstantFunding();
    setSelectedButton("instant");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/price`);
        setPrice(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(price);

  // Function to filter pricing data based on button click
  const filterPricingData = (amount) => {
    const rowMap = {
      "10000": "first",
      "20000": "second",
      "30000": "third",
      "50000": "fourth",
      "60000": "fifth",
    };

    const filtered = price.filter((item) => item.row === rowMap[amount]);
    setFilteredPricing(filtered);
  };

  useEffect(() => {
    if (price.length > 0) {
      filterPricingData("10000"); 
    }
  }, [price]); 

  useEffect(() => {
    handleStandardFunding(); 
  }, []);

  return (
    <div className="mt-32">
      <div className="flex justify-center">
        <h2 className="text-white font-semibold text-3xl">
          Pick Your Funding Programs
        </h2>
      </div>

      {/* Funding options */}
      <div className="flex justify-center mt-8">
        <div className="flex gap-5 text-[#77FED6]">
          <button
            onClick={handleStandardFunding}
            className={`w-[300px] border border-[#77FED6] rounded-[30px] py-2 ${
              selectedButton === "standard"
                ? "bg-custom-gradient border-0 text-white"
                : ""
            }`}
          >
            Standard Challenge
          </button>

          <button
            onClick={handleInstantFunding}
            className={`w-[300px] border border-[#77FED6] rounded-[30px] py-2 ${
              selectedButton === "instant"
                ? "bg-custom-gradient border-0 text-white"
                : ""
            }`}
          >
            Instant Funding
          </button>
        </div>
      </div>

      {/* Price ranges */}
      <div className="mt-5 flex justify-center">
        <div className="flex gap-5 text-[#77FED6]">
          <button
            onClick={() => filterPricingData("10000")}
            className={`w-[140px] border border-[#77FED6] py-2 rounded-3xl ${
              filteredPricing.length > 0 && filteredPricing[0]?.row === "first"
                ? "bg-custom-gradient border-0 text-white"
                : ""
            }`}
          >
            $10,000
          </button>
          <button
            onClick={() => filterPricingData("20000")}
            className={`w-[130px] border border-[#77FED6] py-2 rounded-3xl ${
              filteredPricing.length > 0 && filteredPricing[0]?.row === "second"
                ? "bg-custom-gradient border-0 text-white"
                : ""
            }`}
          >
            $20,000
          </button>
          <button
            onClick={() => filterPricingData("30000")}
            className={`w-[130px] border border-[#77FED6] py-2 rounded-3xl ${
              filteredPricing.length > 0 && filteredPricing[0]?.row === "third"
                ? "bg-custom-gradient border-0 text-white"
                : ""
            }`}
          >
            $30,000
          </button>
          <button
            onClick={() => filterPricingData("50000")}
            className={`w-[130px] border border-[#77FED6] py-2 rounded-3xl ${
              filteredPricing.length > 0 && filteredPricing[0]?.row === "fourth"
                ? "bg-custom-gradient border-0 text-white"
                : ""
            }`}
          >
            $50,000
          </button>
          <button
            onClick={() => filterPricingData("60000")}
            className={`w-[130px] border border-[#77FED6] py-2 rounded-3xl ${
              filteredPricing.length > 0 && filteredPricing[0]?.row === "fifth"
                ? "bg-custom-gradient border-0 text-white"
                : ""
            }`}
          >
            $60,000
          </button>
        </div>
      </div>

      {/* Table and the card */}
      <div className="flex w-full mt-10 gap-10">
        <div className="w-2/3 ml-20">
          <Funding
            fundingData={selectedButton === "standard" ? standardFunding : instantFunding}
            pricingData={filteredPricing} 
          />
        </div>

        {/* Cards */}
        <div className="w-1/3 mr-20">
          <Cards total={total} />
        </div>
      </div>
      <div className="mt-40">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
