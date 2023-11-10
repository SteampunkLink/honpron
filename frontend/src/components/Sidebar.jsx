import { Link, useLocation } from "react-router-dom";
const Sidebar = () => {
  const { pathname } = useLocation();
  return (
    <div className="sidebar-area">
      {console.log(pathname)}
      <ul className="display-box">
        <li className={pathname === "/series/snescapades" && "selected"}>
          <Link to="/series/snescapades">SNEScapades</Link>
        </li>
        <li className={pathname === "/series" && "selected"}>
          <Link to="/series">Series Index</Link>
        </li>
        <li className={pathname === "/ranks" && "selected"}>
          <Link to="/ranks">SNES Game Rankings</Link>
        </li>
        <li className={pathname === "/faqs" && "selected"}>
          <Link to="/faqs">FAQs</Link>
        </li>
        <li className={pathname === "/friends" && "selected"}>
          Friends of the Show
        </li>
        <li className={pathname === "/scratch" && "selected"}>
          <Link to="/scratch">Nintendo Scratch Cards</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
