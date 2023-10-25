import axios from "axios";
import apiKey from "./config";
import { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

// App components
import SearchForm from "./Components/SearchForm";
import Nav from "./Components/Nav";
import PhotoContainer from "./Components/PhotoContainer";
import NotFound from "./Components/NotFound";

function App() {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("fish");
  const [loading, setLoading] = useState(true);
  // let { urlTerm } = useParams();

  /**
   * External data fetching with Axios
   */
  //
  useEffect(() => {
    // let the app know that data is loadging
    setLoading(true);
    // to keep track of which data fetch is the latest, use activeFetch boolean. Protection against race conditions.
    let activeFetch = true;
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((response) => {
        // handle success
        // Only fetch data if this is the latest request.
        if (activeFetch) {
          // saving retreived data to our data array of photos
          setPhotos(response.data.photos.photo);
          // data has been fetched so loading is complete
          setLoading(false);
        }
      })
      .catch((error) => {
        // handle error
        console.log(`Error fetching and parsing the data`, error);
      });
    // setQuery(false)
    return () => {
      // Using cleanup funciton to run before the next function is called
      // Setting current fetch to false when another fetch is called
      activeFetch = false;
    };
  }, [query]);

  const handleQueryChange = (searchText) => {
    setQuery(searchText);
  };

  return (
    <div className="container">
      <SearchForm changeQuery={handleQueryChange} />

      <nav className="main-nav">
        <Nav changeQuery={handleQueryChange} />
        {loading ? (
          <p>Loading...</p>
        ) : (
          <Routes>
            <Route path="" element={<Navigate replace to="/fish" />} />
            <Route
              path="/:urlTerm"
              element={
                <PhotoContainer data={photos} changeQuery={handleQueryChange} />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        )}
      </nav>
    </div>
  );
}

export default App;
