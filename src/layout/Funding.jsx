import React, { useState } from "react";
import axios from "axios"; // or use fetch if preferred
import { useAuth } from "../authentication/AuthContext";
import { Link } from "react-router-dom";

const Funding = ({ fundingData, pricingData }) => {

  const data = fundingData.length > 0 ? fundingData[0] : {};
  const data2 = pricingData.length > 0 ? pricingData[0] : {};

  console.log(data2);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead className="text-lg text-white">
            <tr>
              <th></th>
              <th className="font-semibold">Challenge</th>
              <th className="font-semibold">Funded Trader</th>
              <th className="font-semibold">Verification</th>
            </tr>
          </thead>
          <tbody className="text-white">
            {[...Array(7)].map((_, index) => {
              return (
                <tr key={index}>
                  <th className="font-normal">{data[`r${index + 1}`]}</th>
                  <td className="py-5">{data2[`r${index + 1}`]}</td>
                  <td>{data2[`r${index + 1}`]}</td>
                  <td>{data2[`r${index + 1}`]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Funding;
