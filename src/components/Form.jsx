import axios from "axios";
import { useState, useEffect } from "react";

const Form = () => {
  const [searchBar, setSearchBard] = useState(null);
  const [meal, setMeal] = useState(null);

  const apiKey = "9106687aa002608785d98d2e5bf2c844";
  const apiId = "795a37fe";

  // const apps = {
  //   apikey: process.env.REACT_APP_apiKey,
  //   apiId: process.env.REACT_APP_apiId,
  // }

  const getApi = () => {
    axios
      .get(
        `https://api.edamam.com/search?q=${searchBar}&app_id=${apiId}&app_key=${apiKey}&mealType=${meal}`
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <>
      <div className="flex justify-center items-center mt-5 flex-wrap">
        <div className="flex gap-3">
          <input
            type="text"
            className="bg-black text-white p-2 rounded-lg"
            placeholder="Search"
            onChange={(e) => {
              setSearchBard(e.target.value);
            }}
          />
          <select
            className="rounded-lg bg-black text-white p-1"
            onChange={(e) => {
              setMeal(e.target.value);
            }}
          >
            <option value="breakfast">Breakfast</option>
            <option value="brunch">Brunch</option>
            <option value="lunch">Lunch/Dinner</option>
            <option value="snack">Snack</option>
            <option value="teatime">Teatime</option>
          </select>
        </div>
        <button className="rounded-lg bg-black text-white p-2 w-[5rem] ml-5" onClick={() => getApi()}>
          Search
        </button>
      </div>
    </>
  );
};

export default Form;
