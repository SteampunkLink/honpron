import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="sidebar-area">
      <ul className="display-box">
        <li>SNEScapades</li>
        <li>
          <Link to="/ranks">SNES Game Rankings</Link>
        </li>
        <li>FAQs</li>
        <li>Nintendo Scratch Cards</li>
      </ul>
    </div>
  );
};

export default Sidebar;
