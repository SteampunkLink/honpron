const PodcastDisplay = ({ source }) => {
  return (
    <>
      <iframe src={source} frameborder="0" scrolling="no"></iframe>
    </>
  );
};

export default PodcastDisplay;
