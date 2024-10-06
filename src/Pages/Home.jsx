import Cards from "../layout/Cards";
import Funding from "../layout/Funding";

const Home = () => {
  return (
    <div className="mt-40">
      <div className="flex justify-center">
        <h2 className="text-white font-semibold text-3xl">
          Pick Your Funding Programs
        </h2>
      </div>
      {/* funding options */}
      <div className="flex justify-center mt-8">
        <div className="flex gap-5 text-[#77FED6]">
          <button className="w-[300px] border border-[#77FED6] rounded-[30px] py-2">
            {" "}
            Standard Challenge
          </button>

          <button className="w-[300px] border border-[#77FED6] rounded-[30px] py-2">
            {" "}
            Instant Funding
          </button>
        </div>
      </div>

      {/* price ranges */}
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
      <div className="flex w-full mt-10 gap-10">
        <div className="w-2/3 ml-20">
          <Funding></Funding>
        </div>
        {/* cards */}
        <div className="w-1/3 mr-20">
          <Cards></Cards>
        </div>
      </div>
    </div>
  );
};

export default Home;
