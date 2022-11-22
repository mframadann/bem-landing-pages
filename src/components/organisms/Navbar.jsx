import React, { useState } from "react";
import { IconClose, IconMenu, IconMoon, IconSun } from "../../assets/compSvg";
import { ImageBEM } from "../../assets/images";
import { NavItem } from "../../contants";

const Navbar = () => {
  const [toogleMenu, setToogleMenu] = useState(false);
  const [mode, setMode] = useState("Light");

  return (
    <>
      <section id={`navbar`} className={`bg-white border-b border-gray-100`}>
        <div className={`max-w-6xl mx-auto px-4 xl:px-0`}>
          <div className={`flex items-center justify-between py-4`}>
            {/* Logo BEM */}
            <img src={ImageBEM} alt="logo-bem" className={`w-12`} />

            {/* Navbar Item Desktop */}
            <div className={`hidden lg:flex items-center justify-center gap-8`}>
              {NavItem.map((item, i) => (
                <span
                  key={i}
                  className={`text-sm font-semibold cursor-pointer hover:text-brand duration-300`}
                >
                  {item.name}
                </span>
              ))}
            </div>

            {/* Toogle Darkmode */}
            {mode == "Dark" ? (
              <IconMoon
                onClick={() => setMode("Light")}
                className={`hidden lg:block w-6 fill-black hover:fill-brand cursor-pointer duration-300`}
              />
            ) : (
              <IconSun
                onClick={() => setMode("Dark")}
                className={`hidden lg:block w-6 stroke-black hover:stroke-brand cursor-pointer duration-300`}
              />
            )}

            {/* Toogle Menu */}
            <IconMenu
              onClick={() => setToogleMenu(true)}
              className={`lg:hidden w-6 stroke-black cursor-pointer`}
            />

            {/* Navbar Item Mobile */}
            <div
              className={`${
                !toogleMenu && "translate-x-full"
              } fixed inset-0 z-40 bg-white transition-all duration-300`}
            >
              <div className={`flex justify-end p-6`}>
                <IconClose
                  onClick={() => setToogleMenu(false)}
                  className={`w-7 stroke-black cursor-pointer`}
                />
              </div>
              <div className={`flex flex-col`}>
                {NavItem.map((item, i) => (
                  <div key={i} className={`p-6 hover:bg-gray-100 duration-300`}>
                    <span className={`text-base font-semibold`}>
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
              <div
                className={`flex flex-col gap-4 pt-6 items-center justify-center`}
              >
                <div
                  onClick={() =>
                    mode == "Dark" ? setMode("Light") : setMode("Dark")
                  }
                  className={`rounded-full p-4 bg-gray-50 group hover:bg-gray-200 duration-300 cursor-pointer`}
                >
                  {mode == "Dark" ? (
                    <IconMoon
                      className={`w-6 mx-auto fill-black group-hover:fill-brand duration-300`}
                    />
                  ) : (
                    <IconSun
                      className={`w-6 mx-auto stroke-black group-hover:stroke-brand duration-300`}
                    />
                  )}
                </div>
                <span className={`text-sm font-semibold`}>{mode}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
