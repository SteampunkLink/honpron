import { useParams } from "react-router-dom";
import { useGetOneEntryQuery } from "../slices/entriesApiSlice";
import EntryListItem from "../components/EntryListItem";
import BlogDisplay from "../components/BlogDisplay";

const EpisodeScreen = () => {
  const { show, epNum } = useParams();
  const {
    data: entryData,
    loading,
    error,
  } = useGetOneEntryQuery({ show, epNum });
  return (
    <div className="display-box">
      {entryData && <EntryListItem entry={entryData} full={true} />}
      {entryData?.blog && <BlogDisplay blog={entryData.blog} />}
    </div>
  );
};

export default EpisodeScreen;
