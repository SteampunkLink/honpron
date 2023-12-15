import { Link, useParams } from "react-router-dom";
import { useGetOneSeriesQuery } from "../slices/entriesApiSlice";
import Meta from "../components/Meta";
import EntryListItem from "../components/EntryListItem";
import ErrorMsg from "../components/ErrorMsg";
import Loading from "../components/Loading";
import Pagination from "../components/Pagination";

const SeriesScreen = () => {
  const { seriesName, pageNum } = useParams();
  const {
    data: seriesData,
    isLoading,
    error,
  } = useGetOneSeriesQuery({ seriesName, pageNum });
  return (
    <>
      <Meta />
      <div className="entry-list">
        {error && <ErrorMsg error={error} />}
        {isLoading && <Loading />}
        <div className="series-box display-box">
          {seriesData ? (
            <>
              <h2>{seriesData.show}</h2>
              <div className="display-desc">{seriesData.description}</div>
            </>
          ) : (
            <h2>Sorry, couldn't find that one.</h2>
          )}
        </div>
        {seriesData?.episodes &&
          seriesData.episodes.map((entry, idx) => (
            <div key={idx} className="display-box">
              <EntryListItem key={idx} entry={entry} />
              <Link to={`/episode/${entry.slug}/${entry.episode}`}>
                <div className="hp-btn single-link-btn">Read More</div>
              </Link>
            </div>
          ))}
      </div>
      {seriesData?.page && (
        <Pagination
          page={seriesData?.page}
          pages={seriesData?.pages}
          link={`/series/${seriesName}`}
        />
      )}
    </>
  );
};

export default SeriesScreen;
