import { Link } from "react-router-dom";
import { useGetSeriesIndexQuery } from "../slices/entriesApiSlice";
import Meta from "../components/Meta";
import ErrorMsg from "../components/ErrorMsg";
import Loading from "../components/Loading";

const SeriesIndexScreen = () => {
  const { data: seriesData, isLoading, error } = useGetSeriesIndexQuery();
  return (
    <div>
      <Meta />
      {isLoading && "Loading..."}
      {error && <ErrorMsg error={error} />}
      {isLoading && <Loading />}
      {seriesData &&
        seriesData.map((series, idx) => (
          <div key={idx} className="display-box series-box">
            <h2>{series.title}</h2>
            <div className="series-desc">{series.description}</div>
            <Link to={`/series/${series.slug}`}>
              <div className="hp-btn single-link-btn">View Episodes</div>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default SeriesIndexScreen;
