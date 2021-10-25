function Searchbox( {query, setQuery, search}) {
  return (
    <div className="searchbox">
    <input
      type="text"
      className="search-bar"
      placeholder="Enter a city"
      onChange={(e) => setQuery(e.target.value)}
      value={query}
      onKeyPress={search}
    ></input>
  </div>
  );
}

export default Searchbox;