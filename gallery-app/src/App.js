import axios from "axios";
import apiKey from "./config";
import { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

// App components
import SearchForm from "./Components/SearchForm";
import Nav from "./Components/Nav";
import PhotoContainer from "./Components/PhotoContainer";
import NoPage from "./Components/NoPage";

/**
 * App is the top level containing component for the app where hooks are defined,
 * data is fetched and routes are matched to the url.
 * 
 * Browser searching is enabled so any url pages provided are evaluated as a search.
 * If no results are found, the search is presented on the page and a friendly no-results
 * component is rendered.
 * 
 * @returns {html} Main components for the page
 */
function App() {
  // Hook setup to get and set photo data.
  const [photos, setPhotos] = useState([]);
  // Get and set the query variable across the app.
  const [query, setQuery] = useState("fish");
  // Getting and setting the data fetching status variable.
  const [loading, setLoading] = useState(true);

  /**
   * External data fetching with Axios
   * 
   * This will set the photos array with data if there is any.
   * useEffect is utilized to run on initial render and when the query variable has been updated.
   * 
   * The following use cases are also managed in this setup function:
   *   - loading variable will enable showing the user data is being fetched.
   *   - activeFetch variable ensures only the latest and greatest query is fectched and returned.
   *   - errors are caught with the .catch section and display a custom message and error object.
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
      // setting current fetch to false when another fetch is called
      activeFetch = false;
    };
  }, [query]);

  /**
   * handleQueryChange runs the state setter function for the query variable.
   * 
   * @param {string} searchText 
   */
  const handleQueryChange = (searchText) => {
    setQuery(searchText);
  };

  // return will render each UI component as requested by the user in the URL.
  return (
    <div className="container">
      {/* Display search form and enable query updates when the search form is submitted */}
      <SearchForm changeQuery={handleQueryChange} />
      <nav className="main-nav">
        {/* Display simple 3 options and enable query updates when one default is selected */}
        <Nav changeQuery={handleQueryChange} />
        {/* If the data is being actively retreived, display "Loading..." otherwise display the results */}
        {loading ? (
          <p>Loading...</p>
        ) : (
          // Routes will manage the route tags and best match components to what is displayed in the URL
          <Routes>
            {/* Redirecting the default route to '/fish' with the Navigate component, while maintaining history with the replace option */}
            <Route path="" element={<Navigate replace to="/fish" />} />
            {/* Enabling browser searching with a 'dynamic segment' in the route called 'urlTerm'. This is passed to the PhotoContainer. */}
            <Route path="/:urlTerm" element={<PhotoContainer data={photos} changeQuery={handleQueryChange} />}/>
            {/* Catch all for any 404 errors*/}
            {/* Test with extra slashes in the url, such as '/broken/page/' */}
            <Route path="/*/*?" element={<NoPage />} />
          </Routes>
        )}
      </nav>
    </div>
  );
}

export default App;
