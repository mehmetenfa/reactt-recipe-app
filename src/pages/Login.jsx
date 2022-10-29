import { useNavigate } from "react-router-dom";
import reacticon from "../assets/reacticon.png";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="bgcontainer flex justify-center items-center ">
      <div className="rounded-full h-[25rem] w-[25rem] flex flex-col justify-center items-center ">
        <div className="flex flex-col mb-28 text-center">
          <h1 className="text-6xl text-white mb-5">Recipe App</h1>
          <p className="w-[25rem] h-[0.3rem] bg-slate-400 rounded-xl"></p>
        </div>
        <form
          className=" flex flex-col gap-4"
          onSubmit={() => navigate("home")}
        >
          <img
            src={reacticon}
            alt=""
            className="mx-auto w-[20rem]"
            draggable="false"
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter Your Name"
            className="hover:bg-white hover:text-black bg-black text-white p-2 rounded-xl "
            required
          />
          <p className="w-[20rem] h-[0.3rem] bg-slate-200 rounded-xl"></p>
          <input
            type="password"
            name=""
            id=""
            placeholder="Enter Your Password"
            className="hover:bg-white hover:text-black bg-black text-white p-2 rounded-xl"
            required
          />
          <p className="w-[20rem] h-[0.3rem] bg-slate-200 rounded-xl"></p>
          <button className="rounded-lg bg-black text-white w-[7rem] mx-auto p-1 hover:bg-cyan-500 hover:text-black hover:scale-125 ">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
