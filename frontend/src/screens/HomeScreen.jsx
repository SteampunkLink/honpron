import { Link } from "react-router-dom";
import { useGetAllEntriesQuery } from "../slices/entriesApiSlice";
import Meta from "../components/Meta";
import EntryListItem from "../components/EntryListItem";
import ErrorMsg from "../components/ErrorMsg";
import Loading from "../components/Loading";

const HomeScreen = () => {
  const { data: entryData, isLoading, error } = useGetAllEntriesQuery();
  return (
    <>
      <Meta />
      <div className="entry-list">
        {isLoading && "Loading..."}
        {error && <ErrorMsg error={error} />}
        {isLoading && <Loading />}
        {entryData &&
          entryData.map((entry, idx) => (
            <div key={idx} className="display-box">
              <EntryListItem key={idx} entry={entry} />
              <Link to={`/episode/${entry.show}/${entry.episode}`}>
                <div className="hp-btn single-link-btn">Read More</div>
              </Link>
            </div>
          ))}
      </div>
    </>
  );
};

export default HomeScreen;
