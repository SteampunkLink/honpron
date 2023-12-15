import { Link, useLocation } from "react-router-dom";
const Sidebar = () => {
  const { pathname } = useLocation();
  return (
    <div className="sidebar-area">
      <ul className="display-box">
        <li
          className={
            pathname === "/series/snescapades" ? "selected" : undefined
          }
        >
          <Link to="/series/snescapades">SNEScapades</Link>
        </li>
        <li className={pathname === "/series" ? "selected" : undefined}>
          <Link to="/series">Series Index</Link>
        </li>
        <li className={pathname === "/ranks" ? "selected" : undefined}>
          <Link to="/ranks">SNES Game Rankings</Link>
        </li>
        <li className={pathname === "/faqs" ? "selected" : undefined}>
          <Link to="/faqs">FAQs</Link>
        </li>
        <li className={pathname === "/friends" ? "selected" : undefined}>
          <Link to="/friends">Friends of the Show</Link>
        </li>
        <li className={pathname === "/scratch" ? "selected" : undefined}>
          <Link to="/scratch">Nintendo Scratch Cards</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
