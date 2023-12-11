import { useParams } from "react-router-dom";
import { useEffect } from "react";

// App components
import Photo from "./Photo";
import NotFound from "./NotFound";

/**
 * PhotoContainer manages the photo alignment from data passed to it.
 * 
 * If no photos are provided, a friendly not found page is displayed.
 * 
 * @param {array of objects} data includes photo details fetched from App component
 * @param {function} changeQuery will call the state setter function for setQuery in the App component 
 * @returns 
 */
const PhotoContainer = ({ data, changeQuery }) => {
  let { urlTerm } = useParams();
  let photos = "";

  // wrapping state setter function in useEffect to avoid setting state in App while rendering PhotoContainer.
  // Fixed with help from: https://stackoverflow.com/questions/62336340/cannot-update-a-component-while-rendering-a-different-component-warning
  // Explantion of issue:  https://legacy.reactjs.org/blog/2020/02/26/react-v16.13.0.html#new-warnings
  useEffect(()=> {
    changeQuery(urlTerm)
  });
  

  
  // Checking if provided data is empty or not
  if (data.length > 0) {
    photos = data.map((photo) => {
      return (
        <Photo
          serverId={photo.server}
          id={photo.id}
          secret={photo.secret}
          title={photo.title}
          key={photo.id}
        />
      );
    });
  } else {
    // NotFound component to render if no data is provided
    photos = <NotFound />;
  }
  return (
    <div className="photo-container">
      <h2>{urlTerm}</h2>
      <ul>{photos}</ul>
    </div>
  );
};

export default PhotoContainer;
