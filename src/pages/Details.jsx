import React from "react";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";

const Details = () => {
  const { state: detail } = useLocation();
  console.log(detail);
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="flex flex-col justify-center items-center">
        <p className="text-4xl text-center mt-10 mb-3">{detail.label}</p>
        <p className="w-[22rem] h-[0.3rem] bg-red-700 rounded-xl"></p>
      </div>
      <div className="flex justify-evenly items-center text-center h-[30rem] mt-10 flex-wrap">
        <ul className="bg-red-700 w-[25rem] h-[20rem] flex flex-col justify-center items-center rounded-2xl text-white">
          <p className="text-2xl mb-2">Nutriens</p>
          <p className="w-[10rem] h-[0.3rem] bg-black rounded-xl mb-5"></p>
          <li>Calcium: {detail.digest[5].total.toFixed()}mg</li>
          <li>Carbs: {detail.digest[1].total.toFixed()}g</li>
          <li>Cholesterol: {detail.digest[3].total.toFixed()}mg</li>
          <li>Energy: {detail.calories.toFixed()}kcal</li>
          <li>Fat: {detail.digest[0].total.toFixed()}</li>
          <li>Carbs: {detail.digest[1].total.toFixed()}</li>
          <li>Protein: {detail.digest[2].total.toFixed()}</li>
          <li>Cholesterol: {detail.digest[3].total.toFixed()}</li>
        </ul>
        <div className="">
          <img
            src={detail.image}
            alt={detail.label}
            width="250px"
            className="rounded-lg"
          />
        </div>
        <ul className="mt-5 bg-red-700 w-[25rem] h-[20rem] flex flex-col justify-center items-center rounded-2xl text-white">
          <div className="flex flex-col mb-5">
            <p className="text-xl mb-2">Recipe</p>
            <p className="w-[10rem] h-[0.3rem] bg-black rounded-xl mb-3"></p>
          </div>
          {detail.ingredientLines.map((item, idx) => (
            <li key={idx}> {item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Details;
