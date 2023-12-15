import { FaInstagram, FaYoutube } from "react-icons/fa";
import { TbBrandCohost } from "react-icons/tb";
import { GrStatusUnknownSmall } from "react-icons/gr";
const SocialMedia = () => {
  return (
    <div className="sidebar-area">
      <div className="display-box">
        <h2>Social Media</h2>
        <ul className="social-box">
          <li>
            <a
              href="https://www.youtube.com/channel/UCNSDRaHDLeuI6s04TmMVEfQ"
              target="_blank"
              aria-label="YouTube"
              title="YouTube"
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
              style={{ color: "blue" }}
            >
              <GrStatusUnknownSmall />
            </a>
          </li>
          <li>
            <a
              href="https://cohost.org/snescapades"
              target="_blank"
              aria-label="Cohost"
              title="Cohost"
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
