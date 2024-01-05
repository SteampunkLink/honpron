import { useState } from "react";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { TbBrandCohost } from "react-icons/tb";
import { PiButterflyFill } from "react-icons/pi";

const SocialMedia = () => {
  const [label, setLabel] = useState("");
  const handleLabel = (e) => {
    setLabel(e.target.title);
  };
  const clearLabel = () => {
    setLabel("");
  };
  return (
    <div className="sidebar-area">
      <div className="display-box">
        <h2>Social Media</h2>
        <p className="sidebar-label">{label}</p>
        <ul className="social-box">
          <li>
            <a
              href="https://www.youtube.com/channel/UCNSDRaHDLeuI6s04TmMVEfQ"
              target="_blank"
              aria-label="YouTube"
              title="YouTube"
              onMouseOver={handleLabel}
              onMouseLeave={clearLabel}
            >
              <FaYoutube />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/snescapades/"
              target="_blank"
              aria-label="Instagram"
              title="Instagram"
              onMouseOver={handleLabel}
              onMouseLeave={clearLabel}
            >
              <FaInstagram />
            </a>
          </li>
          <li>
            <a
              href="https://bsky.app/profile/snescapades.bsky.social"
              target="_blank"
              aria-label="BlueSky"
              title="BlueSky"
              onMouseOver={handleLabel}
              onMouseLeave={clearLabel}
            >
              <PiButterflyFill />
            </a>
          </li>
          <li>
            <a
              href="https://cohost.org/snescapades"
              target="_blank"
              aria-label="Cohost"
              title="Cohost"
              onMouseOver={handleLabel}
              onMouseLeave={clearLabel}
            >
              <TbBrandCohost />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SocialMedia;
