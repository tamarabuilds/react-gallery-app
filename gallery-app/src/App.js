import axios from "axios";
import { useEffect, useState } from "react";
import { photoData } from "./data/photos";
import apiKey from "./config";
import { Route, Routes, Navigate} from "react-router-dom";

// App components
import SearchForm from "./Components/SearchForm";
import Nav from "./Components/Nav";
import PhotoContainer from "./Components/PhotoContainer";
import NotFound from "./Components/NotFound";

function App() {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("search");
  const [loading, setLoading] = useState(true);

  // axios API
  useEffect(() => {
    // let the app know that data is loadging
    setLoading(true)
    // WHY??
    let activeFetch = true;
    axios
      .get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        // handle success
        // WHY ACTIVE FETCh????????????????????
        if (activeFetch) {
          console.log(response.data.photos.photo)
        }
      })
      .catch(error => {
        // handle error
        console.log(`Error fetching and parsing the data`, error);
      });


  },[]);

  const handleQueryChange = (searchText) => {
    setQuery(searchText);
  };

  return (
    <div className="container">
      <SearchForm changeQuery={handleQueryChange} />
      {/* For testing only */}
      <h1>{query}</h1>
      <nav className="main-nav">
        <Nav />
        <Routes>
          {/* { What do I do with the root????????????? } */}
          <Route path="/" element={<Navigate replace to="/"/>} />
          {/* <Route path="/:search" element={}/> */}
            <Route path="silly" element={<PhotoContainer data={'silly'} />} />  
            <Route path="funny" element={<PhotoContainer data={'funny'} />} />  
            <Route path="smile" element={<PhotoContainer data={'smile'} />} />  
            <Route path="*" element={<NotFound />} />
        </Routes>
      </nav>

      <PhotoContainer data={photoData} />
    </div>
  );
}

export default App;
