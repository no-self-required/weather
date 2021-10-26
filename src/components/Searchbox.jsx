function Searchbox( {query, setQuery, getCoords}) {
  return (
    <div className="searchbox">
    <input
      type="text"
      className="search-bar"
      placeholder="Enter a city"
      onChange={(e) => setQuery(e.target.value)}
      value={query}
      onKeyPress={getCoords}
    ></input>
  </div>
  );
}

export default Searchbox;