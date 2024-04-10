import React from "react";
import Link from "next/link";


const NavbarComponent = () => {
  return (
    <main>

      <div className="navbar bg-transparent flex justify-between px-10 py-5 relative">
          <Link href={"/"}>
            <img
              src="https://www.legend.com.kh/_ipx/s_117x44/legend-cinema-logo.png"
              alt="logo"
            />
          </Link>
          <div className="navbar-center text-white space-x-5">
            <Link
              href={""}
              className="btn btn-ghost hover:bg-white hover:text-black"
            >
              Home
            </Link>
            <Link
              href={"#"}
              className="btn btn-ghost hover:bg-white hover:text-black"
            >
              Popular
            </Link>
            <Link
              href={"#"}
              className="btn btn-ghost hover:bg-white hover:text-black"
            >
              Romance
            </Link>
            <Link
              href={"#"}
              className="btn btn-ghost hover:bg-white hover:text-black"
            >
              Anime
            </Link>
            <div className="form-control ">
              <input
                type="text text-black"
                placeholder="Try to search..."
                className="input text-black bg-white input-bordered w-24 md:w-auto"
              />
            </div>
          </div>
        </div>
    </main>
  );
};

export default NavbarComponent;
