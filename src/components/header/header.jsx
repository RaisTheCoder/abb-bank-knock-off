import React from "react";
import { Link } from "react-router";
import "./header.css";

const header = () => {
  return (
    <header className="container flex gap-8 h-[60px] md:h-[80px] justify-center items-center ">
      <Link to={"/"}>
        <img id="logo" src="/logo.svg" />
      </Link>

      <nav className="flex justify-end items-center w-full h-full lg:justify-between">
        <ul className="hidden gap-8 h-full items-center lg:flex">
          <li>
            <Link to={"https://abb-bank.az/ferdi"} className="link">
              Fərdi
            </Link>
          </li>
          <li>
            <Link to={"https://abb-bank.az/biznes/korporativ"} className="link">
              Biznes
            </Link>
          </li>
          <li>
            <Link
              to={
                "https://abb-bank.az/haqqimizdahttps://abb-bank.az/investorlarla-elaqe"
              }
              className="link"
            >
              Haqqımızda
            </Link>
          </li>
          <li>
            <Link
              to={"https://abb-bank.az/investorlarla-elaqe"}
              className="link"
            >
              İnvestorlarla əlaqə
            </Link>
          </li>
        </ul>

        <div className="flex gap-6 justify-end items-center text-gray-400">
          <button className="hidden md:flex">
            <img className="hidden md:flex" src="/icons/search.svg" />
          </button>

          <hr className="hidden md:flex v-line w-0.5 h-6"></hr>

          <button>
            <span>AZ</span>
          </button>

          <hr className="v-line w-0.5 h-6"></hr>

          <Link to={"tel:937"} className="flex gap-2">
            <img src="/icons/phone.svg" /> 937
          </Link>

          <Link
            to="https://abb-bank.az/filiallar"
            className="hidden md:flex button primary items-center gap-2"
          >
            <img src="/icons/location-dot.svg" />
            Xidmət Şəbəkəsi
          </Link>

          <hr className="flex md:hidden v-line w-0.5 h-6"></hr>

          <button className="flex md:hidden">
            <img className="flex md:hidden" src="/icons/bars.svg" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default header;
