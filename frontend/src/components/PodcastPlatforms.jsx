import { FaSpotify } from "react-icons/fa";
import { TbBrandApplePodcast, TbBrandGooglePodcasts } from "react-icons/tb";
import { SiOvercast, SiPocketcasts, SiRadiopublic } from "react-icons/si";
const PodcastPlatforms = () => {
  return (
    <div className="sidebar-area">
      <div className="display-box">
        <ul className="social-box">
          <li>
            <a
              href="https://open.spotify.com/show/1bHkdjz80A6T8uQ0s0RPoo"
              target="_blank"
              aria-label="Spotify"
              title="Spotify"
            >
              <FaSpotify />
            </a>
          </li>
          <li>
            <a
              href="https://podcasters.spotify.com/pod/show/honest-piranha"
              target="_blank"
              aria-label="Apple Podcasts"
              title="Apple Podcasts"
            >
              <TbBrandApplePodcast />
            </a>
          </li>
          <li>
            <a
              href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy9iNmFlM2M0L3BvZGNhc3QvcnNz"
              target="_blank"
              aria-label="Google Podcasts"
              title="Google Podcasts"
            >
              <TbBrandGooglePodcasts />
            </a>
          </li>
          <li>
            <a
              href="https://overcast.fm/itunes1464387511/snescapades"
              target="_blank"
              aria-label="Overcast"
              title="Overcast"
            >
              <SiOvercast />
            </a>
          </li>
          <li>
            <a
              href="https://pca.st/eSj8"
              target="_blank"
              aria-label="PocketCasts"
              title="PocketCasts"
            >
              <SiPocketcasts />
            </a>
          </li>
          <li>
            <a
              href="https://radiopublic.com/snescapades-Wlapv0"
              target="_blank"
              aria-label="Radio Public"
              title="Radio Public"
            >
              <SiRadiopublic />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PodcastPlatforms;
