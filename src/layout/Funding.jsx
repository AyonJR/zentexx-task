const Funding = ({ fundingData, pricingData }) => {
  console.log(fundingData, pricingData);

  const data = fundingData.length > 0 ? fundingData[0] : {};

  const data2 = pricingData.length > 0 ? pricingData[0] : {};

  console.log(data2)


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
          <tbody className="text-white">
            {/* row 1 */}
            <tr>
              <th className="font-normal">{data.r1}</th>
              <td className="py-5">{data2.r1}</td>
              <td>{data2.r1}</td>
              <td>{data2.r1}</td>
            </tr>
            {/* row 2 */}
            <tr>
              <th className="font-normal">{data.r2}</th>
              <td className="py-5">{data2.r2}</td>
              <td>{data2.r2}</td>
              <td>{data2.r2}</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th className="font-normal py-5">{data.r3}</th>
              <td>{data2.r3}</td>
              <td>{data2.r3}</td>
              <td>{data2.r3}</td>
            </tr>
            {/* row 4 */}
            <tr>
              <th className="font-normal py-5">{data.r4}</th>
              <td>{data2.r4}</td>
              <td>{data2.r4}</td>
              <td>{data2.r4}</td>
            </tr>
            {/* row 5 */}
            <tr>
              <th className="font-normal">{data.r5}</th>
              <td className="py-5">{data2.r5}</td>
              <td>{data2.r5}</td>
              <td>{data2.r5}</td>
            </tr>
            {/* row 6 */}
            <tr>
              <th className="font-normal">{data.r6}</th>
              <td className="py-5">{data2.r6}</td>
              <td>{data2.r6}</td>
              <td>{data2.r6}</td>
            </tr>
            {/* row 7 */}
            <tr>
              <th className="font-normal">{data.r7}</th>
              <td className="py-5">{data2.r7}</td>
              <td>{data2.r7}</td>
              <td>{data2.r7}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Funding;
