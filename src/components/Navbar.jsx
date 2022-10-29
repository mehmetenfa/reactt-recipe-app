import { IoFastFood, IoHome, IoPerson, IoLogoGithub, IoExit } from "react-icons/io5";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="flex justify-between h-[6rem] p-3 text-xl bg-red-700">
      <div className="text-white  gap-3 w-[50rem] flex justify-center items-center">
        <NavLink
          className="text-white text-3xl flex items-center gap-3"
          to="/home"
        >
          <IoFastFood className="text-3xl text-black" /> RECIPE
        </NavLink>
      </div>

      <div className="text-white text-3xl w-[60rem] flex justify-center items-center gap-8">
        <NavLink
          className="flex gap-2 hover:text-black transition ease-in-out delay-100 hover:scale-125 "
          to="/home"
        >
         <IoHome className="text-black" /> HOME
        </NavLink>
        <NavLink
          className="flex gap-2 hover:text-black transition ease-in-out delay-100 hover:scale-125 "
          to="/about"
        >
         <IoPerson className="text-black" /> ABOUT
        </NavLink>

        <a
          className="flex gap-2 hover:text-black transition ease-in-out delay-100 hover:scale-125"
          href="https://github.com/qxan/reactt-recipe-app"
          target="_blank"
        >
         <IoLogoGithub className="text-black" /> GITHUB
        </a>

        <NavLink
          className="flex gap-2 hover:text-black transition ease-in-out delay-100 hover:scale-125 "
          to="/"
        >
         <IoExit className="text-black" /> LOGOUT
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
