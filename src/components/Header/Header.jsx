import "./Header.scss";
import { RiMenuFill, RiCloseFill } from "react-icons/ri";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAVBAR_LINKS = ["about", "projects", "contact"];

const variants = {
  enter: {
    x: 500,
    opacity: 0,
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: {
    zIndex: 0,
    x: 500,
    opacity: 0,
  },
};

function Header({ title = "KIRSTEN", subHeader = false }) {
  const [isOpen, setOpen] = useState(false);
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (size.width > 768 && isOpen) {
      setOpen(false);
    }
  }, [size.width, isOpen]);

  const toggleHandler = () => {
    setOpen((previousState) => !previousState);
  };

  return (
    <nav className="header">
      <div className="header-title">{title}</div>
      {!subHeader && (
        <>
          <div className="header-nav">
            <ul>
              {NAVBAR_LINKS.map((item) => (
                <li key={`link-${item}`}>
                  <a href={`#${item}`}>{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="header-nav-mobile">
            <RiMenuFill onClick={toggleHandler} />

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="header-nav-mobile"
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                >
                  <RiCloseFill onClick={toggleHandler} />
                  <ul>
                    {NAVBAR_LINKS.map((item) => (
                      <li key={item}>
                        <a href={`#${item}`} onClick={toggleHandler}>
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>{" "}
        </>
      )}
    </nav>
  );
}
export default Header;
