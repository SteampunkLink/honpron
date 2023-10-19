import { useGetAllEntriesQuery } from "../slices/entriesApiSlice";
import Meta from "../components/Meta";
import EntryListItem from "../components/EntryListItem";

const HomeScreen = () => {
  const { data: entryData, isLoading, error } = useGetAllEntriesQuery();
  return (
    <>
      <Meta />
      <div className="entry-list">
        {isLoading && "Loading..."}
        {error && "Sorry, and error has occured."}
        {entryData &&
          entryData.map((entry, idx) => (
            <EntryListItem key={idx} entry={entry} />
          ))}
      </div>
    </>
  );
};

export default HomeScreen;
