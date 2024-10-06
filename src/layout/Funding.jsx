const Funding = () => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="text-lg text-white">
            <tr>
              <th></th>
              <th className="font-semibold">Challenge</th>
              <th className="font-semibold">Funded Trader</th>
              <th className="font-semibold">Verification</th>
            </tr>
          </thead>
          <tbody className="text-white ">
            {/* row 1 */}
            <tr>
              <th className="font-normal">Trading Period</th>
              <td className="py-5">Cy Ganderton</td>
              <td >Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
            {/* row 2 */}
            <tr className="">
              <th className="font-normal">Profit Target</th>
              <td className="py-5">Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th className="font-normal py-5">Maximum Daily Loss</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
            <tr>
              <th className="font-normal py-5">Maximum Overall Loss</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
            <tr>
              <th className="font-normal" >Drawdown Type</th>
              <td className="py-5">Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
            <tr>
              <th className="font-normal">News Trading</th>
              <td className="py-5">Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
            <tr>
              <th className="font-normal">Weekend Holding</th>
              <td className="py-5">Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Funding;
