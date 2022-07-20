import "./Header.scss";

function Header({ title = "KIRSTEN", subHeader = false }) {
  return (
    <header className="header">
      <div className="header-title">{title}</div>
      <nav className="header-nav">
        {!subHeader && (
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
        )}
      </nav>
    </header>
  );
}
export default Header;
