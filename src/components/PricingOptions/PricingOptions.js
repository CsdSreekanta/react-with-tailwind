import { ArrowCircleRightIcon, ArrowRightIcon, CheckCircleIcon } from "@heroicons/react/solid";
import React from "react";
import Benefit from "../Benefit/Benefit";

const PricingOptions = ({ option }) => {
  const { name, price, benefits} = option;
  return (
    <div className="bg-white rounded-lg p-4">
      <h1 className="text-2xl py-2 font-bold rounded bg-indigo-300">{name}</h1>
      <p>
        <span className="text-5xl font-bold">{price}</span>
        <span className="text-xl text-gray-500 font-bold">/mo</span>
      </p>
      <div>
      <h1 className="text-xl text-left">Benefits:</h1>
        {
            benefits.map(benefit=><Benefit
            key={benefit.id}
            benefit={benefit}
            ></Benefit>)
        }
      </div>
      <button className="rounded font-bold mt-4 bg-green-500 w-full flex justify-center py-2 hover:bg-green-600 text-white">Buy Now <ArrowRightIcon className="w-6 h-6 ml-2"></ArrowRightIcon></button>
    </div>
  );
};

export default PricingOptions;
