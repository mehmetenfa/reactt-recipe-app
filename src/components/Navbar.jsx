import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between p-3 text-xl bg-green-300">
      <div>
        <NavLink
          className="text-blue-500"
          to="/home"
          style={({ isActive }) => ({
            color: isActive ? "red" : "",
          })}
        >
          RECIPE
        </NavLink>
      </div>
      <div className="flex gap-5 text-gray-600">
        <NavLink
          className="hover:text-blue-400 transition ease-out delay-100 hover:scale-125"
          to="/about"
          style={({ isActive }) => ({
            color: isActive ? "red" : "",
          })}
        >
          ABOUT
        </NavLink>

        <a
          className="hover:text-blue-400 transition ease-out delay-100 hover:scale-125"
          href="https://github.com/qxan/reactt-recipe-app"
        >
          GITHUB
        </a>

        <NavLink
          className="hover:text-blue-400 transition ease-out delay-100 hover:scale-125"
          to="/"
        >
          LOGOUT
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
