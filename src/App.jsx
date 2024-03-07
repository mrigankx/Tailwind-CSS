import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="grid h-screen place-content-center">
      <h1 className=" text-white text-4xl">Hello world!</h1>
      {/* 
      <div>
        <div className="p-6 max-w-sm mx-auto bg-white rounded-3xl shadow-lg flex items-center space-x-4">
          <div>
            <img
              className="h-12 w12"
              src="https://www.shutterstock.com/shutterstock/photos/2323818911/display_1500/stock-vector-jerry-mouse-character-cartoon-illustration-2323818911.jpg"
              alt="jerry"
            />
          </div>
          <div>
            <div className="text-xl font-medium text-black">
              TAILWIND CSS
              <p className="text-slate-500 text-base">By Mriganka</p>
            </div>
          </div>
        </div>

        <div className="bg-white max-w my-8 h-60 flex items-center flex-col rounded-3xl">
          <img
            className="h-4/5 w-full rounded-t-3xl"
            src="https://www.shutterstock.com/shutterstock/photos/2323818911/display_1500/stock-vector-jerry-mouse-character-cartoon-illustration-2323818911.jpg"
            alt="jerry"
          />
          <div className="bg-slate-400 w-full flex flex-col h-full rounded-b-3xl">
            <p className="text-center  font-bold">Mriganka</p>
            <p className="text-center text-sm">-Frontend Developer</p>
          </div>
        </div>
      </div>
      <button className="bg-sky-500 text-white md:text-green-500 sm:text-red-500 p-2 text-xl rounded-lg hover:bg-red-600 hover:text-black">
        BUY NOW
      </button> */}
      <div className="mt-3">
        <div className="max-w-sm mx-auto bg-white rounded-xl md:max-w-2xl p-3 overflow-hidden ">
          <div className="md:flex">
            <div>
              <img
                className="h-48 w-full object-cover md:h-full md:w-48"
                src="https://www.shutterstock.com/shutterstock/photos/2323818911/display_1500/stock-vector-jerry-mouse-character-cartoon-illustration-2323818911.jpg"
                alt="jerry"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wider text-sm text-indigo-500 font-semibold">
                An Awesome Class
              </div>
              <a
                className="block text-lg font-medium text-black hover:text-blue-700"
                href="https://github.com/"
              >
                Tailwind css is amazing once you understand the{" "}
                <span className="font-bold text-white uppercase p-[5px] bg-black">
                  power
                </span>{" "}
                of it
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
