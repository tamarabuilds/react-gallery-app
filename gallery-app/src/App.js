import { useState } from "react";
import { photoData } from "./data/photos";
import { apiKey } from "./config";
import { Route, Routes, NavLink } from "react-router-dom";

// App components
import SearchForm from "./Components/SearchForm";
import Nav from "./Components/Nav";
import PhotoContainer from "./Components/PhotoContainer";

function App() {
  const [query, setQuery] = useState("search above and i will change");

  const handleQueryChange = (searchText) => {
    setQuery(searchText);
  };

  return (
    <div className="container">
      <Routes>
        <Route path="search" element={} />
        <SearchForm changeQuery={handleQueryChange} />
        {/* For testing only */}
        <h1>{query}</h1>
        <nav className="main-nav">
          <Nav />
        </nav>

        <PhotoContainer data={photoData} />
      </Routes>
    </div>
  );
}

export default App;
