import { useState } from "react";
import { CiDark, CiLight } from "react-icons/ci";
import { HiBars3 } from "react-icons/hi2";
import { MdClose } from "react-icons/md";
export default function Header() {
  const [theme, setTheme] = useState("dark");
  const [toggleMenu, setToggleMenu] = useState(true);

  function themeHandle() {
    const body = document.querySelector("body");
    if (theme === "dark") {
      setTheme("light");
      body?.classList.toggle("dark");
    } else {
      setTheme("dark");
      body?.classList.toggle("dark");
    }
  }

  function menubar() {
    const menu = document.querySelector(".menu");
    if (toggleMenu) {
      setToggleMenu((prev) => !prev);
      menu?.classList.replace("-top-full", "top-[50px]");
    } else {
      setToggleMenu((prev) => !prev);
      menu?.classList.replace("top-[50px]", "-top-full");
    }
  }

  return (
    <div className="h-[50px] bg-teal-100 dark:bg-slate-500">
      <div className="container mx-auto flex justify-between h-full items-center">
        <h4 className="dark:text-white">Logo</h4>
        <nav>
          <ul className="menu duration-500 list-none md:static md:bg-transparent md:dark:bg-inherit absolute  bg-white dark:bg-slate-400 sm:text-left text-center w-full -top-full right-0 flex flex-col md:flex-row gap-x-2">
            <li>
              <a
                className="px-5 py-2 md:border-none dark:text-white border-b border-slate-200 hover:bg-slate-300 md:table block transition"
                href="/"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="px-5 py-2 md:border-none dark:text-white border-b border-slate-200 hover:bg-slate-300 md:table block transition"
                href="/"
              >
                Blogs
              </a>
            </li>
            <li>
              <a
                className="px-5 py-2 md:border-none dark:text-white border-b border-slate-200 hover:bg-slate-300 md:table block transition"
                href="/"
              >
                Contact us
              </a>
            </li>
            <li>
              <a
                className="px-5 py-2 dark:text-white hover:bg-slate-300 md:table block transition"
                href="/"
              >
                About us
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex gap-3">
          <button
            className="dark:text-white outline-none text-2xl"
            onClick={themeHandle}
          >
            {theme === "dark" ? <CiDark /> : <CiLight />}
          </button>
          <button className="bg-teal-500 outline-none hover:bg-teal-600 transition rounded-md px-4 py-1 text-white">
            Sign In
          </button>
          <button
            onClick={menubar}
            className="dark:text-white outline-none barIcon md:hidden text-2xl"
          >
            {toggleMenu ? <HiBars3 /> : <MdClose />}
          </button>
        </div>
      </div>
    </div>
  );
}
