import { useGetFriendsQuery } from "../slices/friendsApiSlice";
import Meta from "../components/Meta";
import ErrorMsg from "../components/ErrorMsg";
import Loading from "../components/Loading";

const FriendsScreen = () => {
  const { data: friendData, isLoading, error } = useGetFriendsQuery();
  return (
    <>
      <Meta />
      {error && <ErrorMsg error={error} />}
      {isLoading && <Loading />}
      <div className="display-box">
        <h2>Friends of the Show</h2>
        <p>
          Here's a group of folks we've colabed with in the past who we think
          are swell and deserve a listen.
        </p>
        <p>(Not a comprehensive list)</p>
        {friendData?.length && (
          <div className="faq-container">
            {friendData.map((friend, idx) => (
              <div key={idx}>
                <div className="faq-q">
                  <a href={friend.url} target="_blank">
                    {friend.name}
                  </a>
                </div>
                <div className="faq-a">{friend.description}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default FriendsScreen;
