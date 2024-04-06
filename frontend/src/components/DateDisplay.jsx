const DateDisplay = ({ date }) => {
  return (
    <p>
      {new Date(date).getUTCMonth() + 1}/{new Date(date).getUTCDate()}/
      {new Date(date).getUTCFullYear()}
    </p>
  );
};

export default DateDisplay;
