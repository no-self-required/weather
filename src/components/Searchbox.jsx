function Searchbox( {setQuery, handleSubmission}) {
  
  return (
    <div className="searchbox">
    <input
      type="text"
      className="search-bar"
      placeholder="Enter a city"
      onChange={(e) => setQuery(e.target.value)}
      onKeyPress={handleSubmission}
    ></input>
  </div>
  );
}

export default Searchbox;