import Form from "./Form";

const Header = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center text-center">
        <p className="text-4xl text-center mt-5 mb-3">Food App</p>
        <p className="w-[20rem] h-[0.3rem] bg-red-700 rounded-xl"></p>
      </div>
      <div>
        <Form />
      </div>
    </div>
  );
};

export default Header;
