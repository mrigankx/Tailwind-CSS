import React from "react";

const Website = () => {
  return (
    <>
      <nav className="w-full h-14 bg-indigo-200 flex justify-between px-4 items-center md:px-4">
        <div className="text-2xl text-indigo-700 font-bold">PW Skills</div>
        <ul className="md:flex hidden font-semibold">
          <li className="mx-[10px] cursor-pointer">Home</li>
          <li className="mx-[10px] cursor-pointer">About Us</li>
          <li className="mx-[10px] cursor-pointer">Contact Us</li>
        </ul>
        <div className="hidden md:block px-2 py-2 bg-indigo-700 text-white rounded font-bold cursor-pointer ">
          Login / Signup
        </div>
        <div className="md:hidden block">
          <a className="text-4xl" href="#">
            &#8801;
          </a>
        </div>
      </nav>
      {/* Navbar done */}
      <header className="w-full h-auto">
        <img
          className="w-full hidden md:block"
          src="https://cdn.pwskills.com/assets/uploads/banners/63a18cca807628f5968f528a/web.jpg"
          alt="web"
        />
        <img
          className="w-full md:hidden "
          src="https://cdn.pwskills.com/assets/uploads/banners/63a18cca807628f5968f528a/mobile.jpg"
          alt="mobile"
        />
      </header>
      <div className="w-100 h-auto flex flex-wrap flex-col items-center text-center p-10 ">
        <div className="w-full h-auto flex flex-wrap flex-col items-center">
          <p className="text-indigo-800 font-bold text-2xl md:text-4xl text-center">
            Pure Hardwork, No Shortcuts!
          </p>
          <div className="w-36 h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl md:mt-4 mb-12"></div>
        </div>
        <div className="w-full flex flex-wrap justify-evenly">
          <div className="w-46 flex flex-col items-center mb-12">
            <img
              className="w-44 h-44"
              src="https://www.svgrepo.com/show/502424/books.svg"
              alt="books"
            />
            <p className="text-3xl font-bold text-white">600+</p>
            <p className="text-2xl font-bold text-gray-500">
              Different Courses
            </p>
          </div>
          <div className="w-46 flex flex-col items-center mb-12">
            <img
              className="w-44 h-44"
              src="https://www.svgrepo.com/show/434340/student-female.svg"
              alt=""
            />
            <p className="text-3xl font-bold text-white">9000+</p>
            <p className="text-2xl font-bold text-gray-500">Students</p>
          </div>
          <div className="w-46 flex flex-col items-center mb-12">
            <img
              className="w-44 h-44"
              src="https://www.svgrepo.com/show/530234/laptop.svg"
              alt=""
            />
            <p className="text-3xl font-bold text-white">800+</p>
            <p className="text-2xl font-bold text-gray-500">Laptops</p>
          </div>
          <div className="w-46 flex flex-col items-center mb-12">
            <img
              className="w-44 h-44"
              src="https://www.svgrepo.com/show/434340/student-female.svg"
              alt=""
            />
            <p className="text-3xl font-bold text-white">9000+</p>
            <p className="text-2xl font-bold text-gray-500">Students</p>
          </div>
          <div className="w-46 flex flex-col items-center mb-12">
            <img
              className="w-44 h-44"
              src="https://www.svgrepo.com/show/530234/laptop.svg"
              alt=""
            />
            <p className="text-3xl font-bold text-white">800+</p>
            <p className="text-2xl font-bold text-gray-500">Laptops</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Website;
