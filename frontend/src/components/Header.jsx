import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header">
      <div className="header-inner">
        <Link to="/">
          <div className="header_left">SNEScapades.show</div>
        </Link>
        <div className="header_right">Home of the SNEScapades Podcast!</div>
      </div>
    </nav>
  );
};

export default Header;
