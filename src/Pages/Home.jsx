import { useEffect, useState } from "react";
import Cards from "../layout/Cards";
import Funding from "../layout/Funding";
import axios from "axios";

const Home = () => {
  const [standardFunding, setStandardFunding] = useState([]);
  const [instantFunding, setInstantFunding] = useState([]);
  const [selectedButton, setSelectedButton] = useState(""); 

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
    handleStandardFunding();
  }, []);

  return (
    <div className="mt-40">
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
              selectedButton === "standard" ? "bg-custom-gradient border-0 text-white" : ""
            }`}
          >
            Standard Challenge
          </button>

          <button
            onClick={handleInstantFunding}
            className={`w-[300px] border border-[#77FED6] rounded-[30px] py-2 ${
              selectedButton === "instant" ? "bg-custom-gradient border-0 text-white" : ""
            }`}
          >
            Instant Funding
          </button>
        </div>
      </div>

      {/* Price ranges */}
      <div className="mt-5 flex justify-center">
        <div className="flex gap-5 text-[#77FED6]">
          <button className="w-[140px] border border-[#77FED6] py-2 rounded-3xl ">
            $10,000
          </button>
          <button className="w-[130px] border border-[#77FED6] py-2 rounded-3xl ">
            $20,000
          </button>
          <button className="w-[130px] border border-[#77FED6] py-2 rounded-3xl ">
            $30,000
          </button>
          <button className="w-[130px] border border-[#77FED6] py-2 rounded-3xl ">
            $50,000
          </button>
          <button className="w-[130px] border border-[#77FED6] py-2 rounded-3xl ">
            $60,000
          </button>
        </div>
      </div>

      {/* Table and the card */}
      <div className="flex w-full mt-10 gap-10">
        <div className="w-2/3 ml-20">
          <Funding
            fundingData={selectedButton === "standard" ? standardFunding : instantFunding}
          />
        </div>
        
        {/* Cards */}
        <div className="w-1/3 mr-20">
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default Home;
