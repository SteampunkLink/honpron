import { FaInstagram, FaMastodon, FaYoutube } from "react-icons/fa";
import { TbBrandCohost } from "react-icons/tb";
const SocialMedia = () => {
  return (
    <div className="sidebar-area">
      <div className="display-box">
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
              href="https://mstdn.social/@snescapades"
              target="_blank"
              aria-label="Mastodon"
              title="Mastodon"
            >
              <FaMastodon />
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
