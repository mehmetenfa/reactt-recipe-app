import { useNavigate } from "react-router-dom";

const RecipeCard = ({ data }) => {
  const navigate = useNavigate();
  console.log(data.recipe);
  return (
    <div className="flex flex-col justify-center items-center bg-red-700 mt-5 w-[33rem] h-[26rem] text-center text-white gap-3 ml-5 rounded-2xl">
      <p className="text-3xl mb-2">{data.recipe.label}</p>
      <p className="w-[22rem] h-[0.3rem] bg-black rounded-xl"></p>
      <img
        src={data.recipe.image}
        alt=""
        width="200px"
        className="rounded-lg"
      />
      <button
        className="rounded-xl bg-black text-white p-1 w-[7rem] h-[2.5rem] mt-2"
        onClick={() => navigate("/details", { state: data.recipe })}
      >
        Details
      </button>
    </div>
  );
};

export default RecipeCard;