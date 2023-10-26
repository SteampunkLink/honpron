const ErrorMsg = ({ error }) => {
  return (
    <div className="display-box">
      {error.data?.message || "An error has occured."}
    </div>
  );
};

export default ErrorMsg;
