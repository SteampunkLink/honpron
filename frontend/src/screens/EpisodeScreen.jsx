import { useParams } from "react-router-dom";
import { useGetOneEntryQuery } from "../slices/entriesApiSlice";
import EntryListItem from "../components/EntryListItem";
import BlogDisplay from "../components/BlogDisplay";
import Meta from "../components/Meta";
import ErrorMsg from "../components/ErrorMsg";
import Loading from "../components/Loading";

const EpisodeScreen = () => {
  const { show, epNum } = useParams();
  const {
    data: entryData,
    isLoading,
    error,
  } = useGetOneEntryQuery({ show, epNum });
  return (
    <>
      <Meta />
      {error && <ErrorMsg error={error} />}
      {isLoading && <Loading />}
      <div className="display-box">
        {entryData && <EntryListItem entry={entryData} full={true} />}
        {entryData?.blog && <BlogDisplay blog={entryData.blog} />}
      </div>
    </>
  );
};

export default EpisodeScreen;
