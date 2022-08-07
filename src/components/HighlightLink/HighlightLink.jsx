import "./HighlightLink.scss";

function HighlightLink({ href, children }) {
  return (
    <a href={href} className="highlight">
      {children}
    </a>
  );
}
export default HighlightLink;
