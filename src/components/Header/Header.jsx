import "./Header.scss";
import HighlightLink from "../HighlightLink/HighlightLink";
import { RiMenuFill, RiCloseFill } from "react-icons/ri";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAVBAR_LINKS = ["about", "projects", "contact"];

const variants = {
  enter: {
    x: 500,
    opacity: 0,
  },
  center: {
    zIndex: 5,
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

  const toggleHandler = () => {
    setOpen((previousState) => !previousState);
  };

  return (
    <nav className={`${!subHeader ? `sticky` : ""}`}>
      <div className={`header ${!subHeader ? `container` : `subheader`}`}>
        <div className="header-title">
          {!subHeader ? <a href="#about">{title}</a> : title}
        </div>
        {!subHeader && (
          <>
            <div className="header-nav">
              <ul>
                {NAVBAR_LINKS.map((item) => (
                  <li key={`link-${item}`}>
                    <HighlightLink href={`#${item}`}>{item}</HighlightLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="header-nav-mobile">
              <RiMenuFill onClick={toggleHandler} />

              {/* <AnimatePresence initial={false}> */}
              {isOpen && (
                <motion.div
                  key="header-nav-mobile"
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  layout
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                >
                  <RiCloseFill onClick={toggleHandler} />
                  <ul>
                    {NAVBAR_LINKS.map((item) => (
                      <li key={item} onClick={toggleHandler}>
                        <HighlightLink href={`#${item}`}>{item}</HighlightLink>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
              {/* </AnimatePresence> */}
            </div>
          </>
        )}
      </div>
    </nav>
  );
}
export default Header;
