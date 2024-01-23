import { Link } from "react-router-dom";
import {
  FaPodcast,
  FaVideo,
  FaPencilAlt,
  FaCalendar,
  FaClock,
} from "react-icons/fa";
import PodcastDisplay from "./PodcastDisplay";
import DateDisplay from "./DateDisplay";

const EntryListItem = ({ entry }) => {
  return (
    <article className="entry-list-item">
      <ul className="entry-list-item_head">
        <li>{entry.show.toUpperCase()}</li>
        <li>
          {entry.type === "podcast" && <FaPodcast />}
          {entry.type === "video" && <FaVideo />}
          {entry.type === "blog" && <FaPencilAlt />}
        </li>
      </ul>
      <Link to={`/episode/${entry.slug}/${entry.episode}`}>
        <h2>{entry.title}</h2>
      </Link>
      <div className="entry-list-item_content">
        <div className="entry-list-item_img">
          <img src={`/images/${entry.image}`} />
        </div>
        <div className="entry-list-item_excerpt">
          <PodcastDisplay source={entry.embedURL} />
          {entry.games?.length ? (
            <>
              <h3>Games Discused</h3>
              <ul>
                {entry.games.map((g, idx) => (
                  <li key={idx}>{g.title}</li>
                ))}
              </ul>
            </>
          ) : null}
          {entry.youtubeURL && (
            <a href={entry.youtubeURL} target="_blank">
              <div className="hp-btn single-link-btn youtube-btn">
                Watch/Comment on YouTube
              </div>
            </a>
          )}
        </div>
      </div>
      <div className="entry-list-item_footer">
        <span>
          <FaCalendar />
          <DateDisplay date={entry.published} />
        </span>
        <span>
          <FaClock />
          <p>{entry.length}</p>
        </span>
      </div>
    </article>
  );
};

export default EntryListItem;
