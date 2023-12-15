const PodcastDisplay = ({ source }) => {
  return (
    <>
      <iframe src={source} frameBorder="0" scrolling="no"></iframe>
    </>
  );
};

export default PodcastDisplay;
