import Navbar from "../components/Navbar";
const About = () => {
  return (
    <div className="">
      <Navbar />
      <div>
        <div className="flex flex-col justify-center items-center text-center">
          <div className="flex flex-col justify-center items-center text-center mt-7">
            <h1 className="text-3xl mb-2">About</h1>
            <p className="w-[14rem] h-[0.3rem] bg-red-700 rounded-xl mb-5"></p>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-2xl mb-2">Tools</h1>
            <p className="w-[10rem] h-[0.3rem] bg-red-700 rounded-xl mb-5"></p>
            <div className="text-xl">
              <p>React</p>
              <p>React Router DOM v6</p>
              <p>React Icons</p>
              <p>Tailwind CSS</p>
              <p>HTML</p>
              <p>JavaScript</p>
              <p>Axios</p>
            </div>
            <div className="flex flex-col items-center">
                <h1 className="text-2xl mb-2 mt-5">Usefull Link</h1>
                <p className="w-[10rem] h-[0.3rem] bg-red-700 rounded-xl mb-5"></p>
                <a href="https://github.com/qxan" className="hover:underline text-xl">My Github Page</a>
                <a href="https://www.linkedin.com/in/menfavakitsayan/" className="hover:underline text-xl">My Linkedin Page</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
