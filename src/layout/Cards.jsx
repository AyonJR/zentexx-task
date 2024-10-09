import { FaDiceD6 } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Cards = ({ total }) => {
  const navigate = useNavigate(); 

  const handleStartChallenge = () => {
    navigate(`/checkout/${total}`); 
  };

  return (
    <div>
      <div className="p-5 rounded-3xl shadow-md border lg:mx-0 mx-5 border-[#77FED6]">
        <h2 className="text-2xl font-semibold text-white">Pick Challenge</h2>
        <p className="dark:text-gray-400 mt-6">
          The Challenge is your initial dive into becoming a Titan Trader. Prove your trading skills, hit the profit target, maintain discipline, and showcase responsible risk management.
        </p>
        <img
          src="https://i.ibb.co.com/dMtrw31/images-44.jpg"
          alt=""
          className="object-cover object-center mt-5 w-full rounded-md h-56 dark:bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <h2 className="text-xl text-white font-semibold tracking-wide">
            Total: ${total}
          </h2>
        </div>
        <div className="mt-5">
          <button
            onClick={handleStartChallenge}
            className="w-full bg-custom-gradient font-semibold text-white rounded-xl py-2 flex items-center justify-center gap-2"
          >
            <FaDiceD6 className="text-xl" />
            Start Challenge
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
