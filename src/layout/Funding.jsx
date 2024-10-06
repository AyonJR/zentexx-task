const Funding = ({ fundingData }) => {
  console.log(fundingData);

  const data = fundingData.length > 0 ? fundingData[0] : {};

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
              <th className="font-normal">{data.r1}</th>
              <td className="py-5"></td>
              <td>{data.r1 || "N/A"}</td>
              <td>{data.r1 || "N/A"}</td>
            </tr>
            {/* row 2 */}
            <tr>
              <th className="font-normal">{data.r2}</th>
              <td className="py-5">{data.r2 ? `${data.r2}%` : "N/A"}</td>
              <td>{data.r2 ? `${data.r2}%` : "N/A"}</td>
              <td>{data.r2 ? `${data.r2}%` : "N/A"}</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th className="font-normal py-5">{data.r3}</th>
              <td>{data.r3 ? `${data.r3}%` : "N/A"}</td>
              <td>{data.r3 ? `${data.r3}%` : "N/A"}</td>
              <td>{data.r3 ? `${data.r3}%` : "N/A"}</td>
            </tr>
            {/* row 4 */}
            <tr>
              <th className="font-normal py-5">{data.r4}</th>
              <td>{data.r4 ? `${data.r4}%` : "N/A"}</td>
              <td>{data.r4 ? `${data.r4}%` : "N/A"}</td>
              <td>{data.r4 ? `${data.r4}%` : "N/A"}</td>
            </tr>
            {/* row 5 */}
            <tr>
              <th className="font-normal">{data.r5}</th>
              <td className="py-5">{data.r5 || "N/A"}</td>
              <td>{data.r5 || "N/A"}</td>
              <td>{data.r5 || "N/A"}</td>
            </tr>
            {/* row 6 */}
            <tr>
              <th className="font-normal">{data.r6}</th>
              <td className="py-5">{data.r6 || "N/A"}</td>
              <td>{data.r6 || "N/A"}</td>
              <td>{data.r6 || "N/A"}</td>
            </tr>
            {/* row 7 */}
            <tr>
              <th className="font-normal">{data.r7}</th>
              <td className="py-5">{data.r7 || "N/A"}</td>
              <td>{data.r7 || "N/A"}</td>
              <td>{data.r7 || "N/A"}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Funding;
