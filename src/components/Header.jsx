// Package import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion"



const Header = () => {
  const [isHamburgerClicked, setIsHamburgerClicked] = useState(false);


  let menuRef = useRef();
  let mobileRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (
        !menuRef.current.contains(e.target) &&
        !mobileRef.current.contains(e.target)
      ) {
        setIsHamburgerClicked(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <header className="mx-auto flex w-full max-w-6xl items-center text-blackTextColor max-screen1260px:max-w-3xl max-mobile:mb-8">
      <a href="/">
        <img
          src="./assets/Logo SVG.svg"
          alt="logo kiess"
          className="min-w-28"
        />
      </a>
  
      <nav className=" ml-auto ">
        <ul
          className={
            isHamburgerClicked
              ? "z-10 mr-5 flex gap-x-10 transition-all duration-500 max-mobile:absolute max-mobile:right-0 max-mobile:top-20 max-mobile:h-fit max-mobile:w-40  max-mobile:flex-col max-mobile:items-center max-mobile:rounded-md max-mobile:bg-pinkKiess max-mobile:text-white"
              : " left-0 mr-5  flex gap-x-10  max-mobile:invisible max-mobile:absolute"
          }
          ref={menuRef}
        >
          <a
            href="/features"
            className=" relative hover:text-pinkKiess max-mobile:p-3 max-mobile:hover:text-white"
          >
            <li className=" max-mobile:pb-2">Fonctionnalités</li>
            <div className=" hidden max-mobile:absolute max-mobile:-left-0 max-mobile:flex max-mobile:w-32 max-mobile:border-b max-mobile:border-solid  max-mobile:border-white max-mobile:opacity-50"></div>
          </a>
          <a
            href="/conditions"
            className=" relative hover:text-pinkKiess  max-mobile:hover:text-white"
          >
            <li className=" max-mobile:pb-2">CGU et sécurité</li>
            <div className=" absolute -left-2 hidden w-32 border-b border-solid border-white opacity-50 max-mobile:flex"></div>
          </a>
          <a
            href="#"
            className="hover:text-pinkKiess max-mobile:pb-3 max-mobile:pt-3 max-mobile:hover:text-white"
          >
            <li>Contact</li>
          </a>
      <motion.button
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
      >
      </motion.button>
        </ul>
      </nav>

      {isHamburgerClicked ? (
        <FontAwesomeIcon
          icon="fa-solid fa-xmark"
          style={{ color: "#ce3273" }}
          className="fontAwesom left-0 mr-5 hidden h-10 max-mobile:flex"
          onClick={() => {
            if (isHamburgerClicked) {
              setIsHamburgerClicked(false);
            }
          }}
          ref={mobileRef}
        />
      ) : (
        <FontAwesomeIcon
          icon="fa-solid fa-bars"
          style={{ color: "#ce3273" }}
          className="left-0 mr-5 hidden h-10 max-mobile:flex"
          onClick={() => {
            setIsHamburgerClicked(true);
          }}
          ref={mobileRef}
        />
      )}
    </header>
  );
};

export default Header;
