import "./Header.scss";
import { RiMenuFill, RiCloseFill } from "react-icons/ri";
import { useState, useEffect } from "react";

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
    <header className="header">
      <div className="header-title">{title}</div>
      {!subHeader && (
        <>
          <nav
            className={`header-nav ${
              isOpen && size.width < 540 && `mobile-menu`
            }`}
          >
            <ul>
              <li>
                <a href="/">ABOUT</a>
              </li>
              <li>
                <a href="/">PROJECTS</a>
              </li>
              <li>
                <a href="/">CONTACT</a>
              </li>
            </ul>
          </nav>

          <div className="header-toggle">
            {!isOpen ? (
              <RiMenuFill onClick={toggleHandler} />
            ) : (
              <RiCloseFill className="close" onClick={toggleHandler} />
            )}
          </div>
        </>
      )}
    </header>
  );
}
export default Header;
