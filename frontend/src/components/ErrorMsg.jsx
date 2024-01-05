const ErrorMsg = ({ error }) => {
  return (
    <div className="display-box">
      {typeof error === "string"
        ? error
        : error.data?.message || "An error has occured."}
    </div>
  );
};

export default ErrorMsg;
