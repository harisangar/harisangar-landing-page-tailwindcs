import { Routes, Route } from "react-router-dom";
import "./App.css";
import { useNavigate } from "react-router-dom";
import Userredux from "./components/userredux";
import Login from "./components/login";
import About from "./components/about";
import Navbar from "./components/navbar";
import Main from "./components/main";
import Users from "./components/users";

function App() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="" element={<Main />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="users" element={<Users />}></Route>
        <Route path="userredux" element={<Userredux />}></Route>
      </Routes>

      <footer className="p-4  bg-white shadow flex md:items-center justify-center  dark:bg-gray-800">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2022{" "}
          <a href="https://flowbite.com/" class="hover:underline">
            Flowbite™
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center pl-5 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <button
              onClick={() => navigate("/about")}
              className="mr-4 hover:underline md:mr-6 "
            >
              About
            </button>
          </li>
          <li>
            <a
              href="http://www.google.com"
              className="mr-4 hover:underline md:mr-6"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="http://www.google.com"
              className="mr-4 hover:underline md:mr-6"
            >
              Licensing
            </a>
          </li>
          <li>
            <a href="http://www.google.com" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default App;
