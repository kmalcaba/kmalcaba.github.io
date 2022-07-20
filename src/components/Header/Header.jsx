import "./Header.scss";

function Header({ title = "KIRSTEN" }) {
  return (
    <header className="header">
      <div className="header-title">{title}</div>
      <nav className="header-nav">
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
    </header>
  );
}
export default Header;
