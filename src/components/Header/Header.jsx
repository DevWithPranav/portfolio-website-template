import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-nav-bar w-full">
        <div className="flex ">
          <div className="w-1 flex sm:w-1/2 ">
            <img src={logo} className="pl-32"></img>
          </div>
          <div className="text-white  justify-center  w-full flex  xl:pl-32 ">
            <ul className="flex mt-7 text-base mb-7 gap-x-4 font-sans font-medium xl:gap-x-14">
              <li className="">
                <NavLink to={"home"}
                  className={() =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                {" "}
                <NavLink to={'projects'}
                  className={() =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Projects
                </NavLink>
              </li>
              <li>
                {" "}
                <NavLink to={'experience'}
                  className={() =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Experience
                </NavLink>
              </li>
              <li>
                {" "}
                <NavLink to={'contact'}
                  className={() =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
