import { Link, useParams } from "react-router-dom";
import { useGetAllEntriesQuery } from "../slices/entriesApiSlice";
import Meta from "../components/Meta";
import EntryListItem from "../components/EntryListItem";
import ErrorMsg from "../components/ErrorMsg";
import Loading from "../components/Loading";
import Pagination from "../components/Pagination";

const HomeScreen = () => {
  const { pageNum } = useParams();
  const { data, isLoading, error } = useGetAllEntriesQuery(pageNum);
  return (
    <>
      <Meta />
      <div className="entry-list">
        {isLoading && "Loading..."}
        {error && <ErrorMsg error={error} />}
        {isLoading && <Loading />}
        {data?.entries &&
          data.entries.map((entry, idx) => (
            <div key={idx} className="display-box">
              <EntryListItem key={idx} entry={entry} />
              <Link to={`/episode/${entry.slug}/${entry.episode}`}>
                <div className="hp-btn single-link-btn">Read More</div>
              </Link>
            </div>
          ))}
      </div>
      {data?.page && (
        <Pagination page={data?.page} pages={data?.pages} link="/page" />
      )}
    </>
  );
};

export default HomeScreen;
