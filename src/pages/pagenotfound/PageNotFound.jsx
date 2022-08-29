import "./pagenotfound.css";

const PageNotFound = () => {
  return (
    <div className="p-container">
      <h1 className="p-header1">404</h1>
      <h2 className="p-header2">Not Found</h2>
      <p>The resource requested could not be found on this server!</p>
    </div>
  );
};

export default PageNotFound;
